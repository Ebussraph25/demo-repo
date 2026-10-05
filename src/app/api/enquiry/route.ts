import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema, UPLOAD, type FieldErrors } from "@/lib/enquiry";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/* ———————————————————————————————————————————
   Rate limiting — best-effort, per server instance.
   For multi-region production traffic, swap for Upstash Ratelimit / Vercel KV.
   ——————————————————————————————————————————— */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Check real file signatures, not just the browser-reported MIME type. */
function sniff(buf: Buffer): string | null {
  if (buf.subarray(0, 4).toString() === "%PDF") return "application/pdf";
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "image/jpeg";
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  return null;
}

const safeName = (n: string, ext: string, i: number) => `${(n.replace(/\.[^.]+$/, "").replace(/[^\w\- ]+/g, "").trim().slice(0, 60) || `attachment-${i + 1}`)}.${ext}`;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a few minutes or contact us by phone." }, { status: 429 });
  }

  const len = Number(req.headers.get("content-length") || 0);
  if (len > UPLOAD.maxTotalBytes + 512 * 1024) {
    return NextResponse.json({ ok: false, error: "Your submission is too large. Please keep attachments under 4 MB total.", fieldErrors: { files: "Attachments must total 4 MB or less." } }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // Spam traps: hidden honeypot field, or submitted implausibly fast. Pretend success so bots learn nothing.
  const elapsed = Number(form.get("elapsed") || 0);
  if (String(form.get("company_website") || "").length > 0 || (elapsed > 0 && elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }

  // Allow-list fields explicitly (no mass assignment of whatever the client sent)
  const raw = Object.fromEntries(
    ["fullName", "email", "phone", "location", "projectType", "propertyType", "budget", "timeline", "message", "consent"].map((k) => [k, typeof form.get(k) === "string" ? (form.get(k) as string) : undefined]),
  );
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};
    for (const i of parsed.error.issues) fieldErrors[i.path[0] as keyof FieldErrors] ??= i.message;
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fieldErrors }, { status: 422 });
  }
  const d = parsed.data;

  // Files
  const files = form.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > UPLOAD.maxFiles || files.reduce((s, f) => s + f.size, 0) > UPLOAD.maxTotalBytes) {
    return NextResponse.json({ ok: false, error: "Please attach up to 3 files totalling 4 MB or less.", fieldErrors: { files: "Up to 3 files, 4 MB total." } }, { status: 422 });
  }
  const attachments: { filename: string; content: Buffer }[] = [];
  for (const [i, f] of files.entries()) {
    const buf = Buffer.from(await f.arrayBuffer());
    const type = sniff(buf);
    if (!type || !UPLOAD.types[type]) {
      return NextResponse.json({ ok: false, error: "Only PDF, JPG and PNG files are accepted.", fieldErrors: { files: "Only PDF, JPG and PNG files are accepted." } }, { status: 422 });
    }
    attachments.push({ filename: safeName(f.name, UPLOAD.types[type], i), content: buf });
  }

  // Lead metadata (PRD §52)
  let utm: Record<string, string> = {};
  try {
    const u = JSON.parse(String(form.get("utm") || "{}"));
    if (u && typeof u === "object") utm = Object.fromEntries(Object.entries(u).filter(([k, v]) => k.startsWith("utm_") && typeof v === "string").map(([k, v]) => [k, String(v).slice(0, 100)]));
  } catch {
    /* ignore malformed */
  }
  const referrer = String(form.get("referrer") || "").slice(0, 300);
  const page = String(form.get("page") || "").slice(0, 200);
  const submittedAt = new Date().toISOString();
  const leadSource = utm.utm_source || (referrer ? new URL(referrer, site.url).hostname : "Direct / website");

  const lead = {
    name: d.fullName, email: d.email, phone: d.phone, location: d.location, projectType: d.projectType,
    propertyType: d.propertyType || null, budget: d.budget || null, timeline: d.timeline || null,
    description: d.message || null, attachments: attachments.map((a) => a.filename),
    submittedAt, leadSource, referrer: referrer || null, page, utm,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!apiKey && !webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] No RESEND_API_KEY / LEAD_WEBHOOK_URL set — lead logged only:", lead);
      return NextResponse.json({ ok: true });
    }
    console.error("[enquiry] Email delivery not configured");
    return NextResponse.json({ ok: false, error: `We couldn't send your enquiry right now. Please email ${site.email} or call ${site.phoneDisplay}.` }, { status: 500 });
  }

  try {
    const tasks: Promise<unknown>[] = [];

    // Optional: forward the lead to a CRM / automation (e.g. an n8n webhook). Files are not forwarded.
    if (webhook) {
      tasks.push(
        fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(process.env.LEAD_WEBHOOK_SECRET ? { "X-Webhook-Secret": process.env.LEAD_WEBHOOK_SECRET } : {}) },
          body: JSON.stringify(lead),
        }).then((r) => { if (!r.ok) throw new Error(`Webhook ${r.status}`); }),
      );
    }

    if (apiKey) {
      const resend = new Resend(apiKey);
      const from = process.env.RESEND_FROM || "Alfred Pederson <onboarding@resend.dev>";
      const to = process.env.ENQUIRY_TO_EMAIL || site.email;
      const rows: [string, string][] = [
        ["Name", d.fullName], ["Email", d.email], ["Phone", d.phone], ["Location", d.location], ["Project type", d.projectType],
        ["Property type", d.propertyType || "—"], ["Budget", d.budget || "—"], ["Desired start", d.timeline || "—"],
        ["Lead source", leadSource], ["Submitted", new Date(submittedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }) + " PT"],
        ...Object.entries(utm).map(([k, v]) => [k, v] as [string, string]),
      ];
      const html = `
        <div style="font-family:Arial,sans-serif;color:#1A1A1A;max-width:640px">
          <h2 style="font-family:Georgia,serif;font-weight:400">New project enquiry</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;font-size:14px">
            ${rows.map(([k, v]) => `<tr><td style="border-bottom:1px solid #E4DFD6;color:#6F675B;width:160px">${esc(k)}</td><td style="border-bottom:1px solid #E4DFD6">${esc(v)}</td></tr>`).join("")}
          </table>
          <h3 style="font-family:Georgia,serif;font-weight:400;margin-top:24px">Project description</h3>
          <p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${esc(d.message || "—")}</p>
          ${attachments.length ? `<p style="font-size:13px;color:#6F675B">${attachments.length} attachment(s) included.</p>` : ""}
        </div>`;

      tasks.push(
        resend.emails.send({ from, to, replyTo: d.email, subject: `New enquiry: ${d.projectType} — ${d.fullName}`, html, attachments }).then((r) => { if (r.error) throw new Error(r.error.message); }),
      );

      // Auto-confirmation to the client (PRD §53). Failure here shouldn't fail the lead.
      const first = esc(d.fullName.split(" ")[0]);
      resend.emails
        .send({
          from,
          to: d.email,
          replyTo: site.email,
          subject: "We've Received Your Project Enquiry",
          html: `
            <div style="font-family:Arial,sans-serif;color:#1A1A1A;max-width:560px;line-height:1.7;font-size:15px">
              <p>Hello ${first},</p>
              <p>Thank you for contacting Alfred Pederson.</p>
              <p>We've received your project enquiry and appreciate the opportunity to learn more about your project.</p>
              <p>The information you provided will be reviewed, and we'll contact you regarding the appropriate next steps.</p>
              <p>We look forward to learning more about your vision.</p>
              <p style="margin-top:28px">Alfred Pederson<br/><span style="color:#6F675B">${site.phoneDisplay}<br/>${site.email}</span></p>
              <p style="margin-top:28px;font-size:11px;letter-spacing:3px;color:#9B7B52">ARCHITECTURE • BUILDING • INTERIORS</p>
            </div>`,
        })
        .catch((e) => console.error("[enquiry] confirmation email failed", e));
    }

    await Promise.all(tasks);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[enquiry] delivery failed", e);
    return NextResponse.json({ ok: false, error: `We couldn't send your enquiry right now. Please try again, or email ${site.email}.` }, { status: 502 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
