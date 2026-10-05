"use client";

import { useEffect, useRef, useState } from "react";
import { budgets, enquirySchema, ENQUIRY_MODE, projectTypes, propertyTypes, timelines, UPLOAD, type FieldErrors } from "@/lib/enquiry";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const MB = Math.round(UPLOAD.maxTotalBytes / 1024 / 1024);

export function ContactForm({ defaultProjectType, sent = false }: { defaultProjectType?: string; sent?: boolean }) {
  const [status, setStatus] = useState<Status>(sent ? "success" : "idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  // If the visitor comes Back from the FormSubmit page, re-enable the form.
  useEffect(() => {
    const onShow = (e: PageTransitionEvent) => e.persisted && setStatus((s) => (s === "submitting" ? "idle" : s));
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);

  // Returning from FormSubmit (?sent=1) — record the conversion once.
  useEffect(() => {
    if (sent) trackEvent("generate_lead", { event_category: "enquiry" });
  }, [sent]);

  const validateFiles = (list: File[]) => {
    if (list.length > UPLOAD.maxFiles) return `Please attach up to ${UPLOAD.maxFiles} files.`;
    if (list.some((f) => !UPLOAD.types[f.type])) return "Only PDF, JPG and PNG files are accepted.";
    if (list.reduce((s, f) => s + f.size, 0) > UPLOAD.maxTotalBytes) return `Attachments must total ${MB} MB or less. You can share larger files by email.`;
    return undefined;
  };

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    setFiles(list);
    setErrors((er) => ({ ...er, files: validateFiles(list) }));
  };

  const validateField = (name: string, value: string) => {
    const shape = enquirySchema.shape as Record<string, (typeof enquirySchema.shape)[keyof typeof enquirySchema.shape]>;
    const s = shape[name];
    if (!s) return;
    const r = s.safeParse(value);
    setErrors((er) => ({ ...er, [name]: r.success ? undefined : r.error.issues[0]?.message }));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.name && e.target.type !== "file" && e.target.type !== "checkbox") validateField(e.target.name, e.target.value);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setServerError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = Object.fromEntries(Array.from(fd.entries()).filter(([, v]) => typeof v === "string")) as Record<string, string>;

    const parsed = enquirySchema.safeParse(values);
    const fileErr = validateFiles(files);
    if (!parsed.success || fileErr) {
      const next: FieldErrors = {};
      if (!parsed.success) for (const issue of parsed.error.issues) next[issue.path[0] as keyof FieldErrors] ??= issue.message;
      if (fileErr) next.files = fileErr;
      setErrors(next);
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first === "files" ? "attachments" : first}"]`)?.focus();
      return;
    }

    if (ENQUIRY_MODE === "formsubmit") {
      submitToFormSubmit(values, files, String(fd.get("company_website") || ""));
      setStatus("submitting");
      return;
    }

    fd.set("elapsed", String(Date.now() - startedAt.current));
    try {
      const utm = sessionStorage.getItem("ap-utm");
      if (utm) fd.set("utm", utm);
      fd.set("referrer", sessionStorage.getItem("ap-ref") || document.referrer || "");
    } catch {
      /* ignore */
    }
    fd.set("page", window.location.pathname);

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: FieldErrors };
      if (!res.ok || !data.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setServerError(data.error || "Something went wrong. Please try again, or contact us by phone or email.");
        setStatus("error");
        return;
      }
      trackEvent("generate_lead", { event_category: "enquiry", project_type: values.projectType, budget: values.budget || "unspecified" });
      setStatus("success");
      form.reset();
      setFiles([]);
    } catch {
      setServerError("We couldn't reach the server. Please check your connection and try again, or call us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border border-line bg-white p-10 outline-none md:p-14">
        <svg viewBox="0 0 48 48" className="h-12 w-12 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="24" cy="24" r="22" />
          <path d="m15 24.5 6 6 12-13" />
        </svg>
        <h3 className="mt-8 text-4xl">Thank you.</h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/75">
          Thank you for contacting Alfred Pederson. Your project enquiry has been received and we will review the information provided before getting in touch.
        </p>
        <button onClick={() => { setStatus("idle"); startedAt.current = Date.now(); }} className="text-link mt-8">
          Submit another enquiry
        </button>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-sm text-[#a0352b]">{errors[k]}</p>
    ) : null;
  const a = (k: keyof FieldErrors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-9 md:grid-cols-2" aria-label="Project enquiry form">
      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Full Name" required htmlFor="fullName">
        <input id="fullName" name="fullName" autoComplete="name" className="field" onBlur={onBlur} {...a("fullName")} />
        {err("fullName")}
      </Field>
      <Field label="Email Address" required htmlFor="email">
        <input id="email" name="email" type="email" autoComplete="email" className="field" onBlur={onBlur} {...a("email")} />
        {err("email")}
      </Field>
      <Field label="Phone Number" required htmlFor="phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" onBlur={onBlur} {...a("phone")} />
        {err("phone")}
      </Field>
      <Field label="Project Location" required htmlFor="location">
        <input id="location" name="location" placeholder="City, State" autoComplete="address-level2" className="field placeholder:text-stone" onBlur={onBlur} {...a("location")} />
        {err("location")}
      </Field>
      <Field label="Project Type" required htmlFor="projectType">
        <select id="projectType" name="projectType" defaultValue={defaultProjectType ?? ""} className="field" onBlur={onBlur} {...a("projectType")}>
          <option value="" disabled>Select project type</option>
          {projectTypes.map((o) => <option key={o}>{o}</option>)}
        </select>
        {err("projectType")}
      </Field>
      <Field label="Property Type" htmlFor="propertyType">
        <select id="propertyType" name="propertyType" defaultValue="" className="field">
          <option value="">Select property type</option>
          {propertyTypes.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <Field label="Estimated Project Budget" htmlFor="budget">
        <select id="budget" name="budget" defaultValue="" className="field">
          <option value="">Select budget range</option>
          {budgets.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <Field label="Desired Project Start" htmlFor="timeline">
        <select id="timeline" name="timeline" defaultValue="" className="field">
          <option value="">Select timeline</option>
          {timelines.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>

      <Field label="Tell Us About Your Project" htmlFor="message" className="md:col-span-2">
        <textarea id="message" name="message" rows={5} placeholder="Your goals, the space, style preferences, anything we should know…" className="field placeholder:text-stone" onBlur={onBlur} {...a("message")} />
        {err("message")}
      </Field>

      <div className="md:col-span-2">
        <span className="field-label" id="attachments-label">Upload Inspiration / Plans</span>
        <label
          htmlFor="attachments"
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed px-6 py-10 text-center transition-colors hover:border-charcoal hover:bg-white focus-within:border-charcoal",
            errors.files ? "border-[#a0352b]" : "border-stone",
          )}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></svg>
          <span className="text-sm text-ink">{files.length ? files.map((f) => f.name).join(", ") : "Click to choose files"}</span>
          <span className="text-xs text-stone-ink">PDF, JPG or PNG · up to 3 files · {MB} MB total</span>
          <input
            id="attachments"
            name="attachments"
            type="file"
            multiple
            accept={UPLOAD.accept}
            onChange={onFiles}
            className="sr-only"
            aria-labelledby="attachments-label"
            aria-describedby={errors.files ? "files-error" : undefined}
          />
        </label>
        {err("files")}
      </div>

      <div className="md:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 accent-charcoal" {...a("consent")} />
          <span>
            By submitting this form, you agree that Alfred Pederson may contact you regarding your project enquiry. See our{" "}
            <a href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</a>.
          </span>
        </label>
        {err("consent")}
      </div>

      {serverError && (
        <p role="alert" className="border-l-2 border-[#a0352b] bg-[#a0352b]/5 px-4 py-3 text-sm text-[#7d2a22] md:col-span-2">{serverError}</p>
      )}

      <div className="md:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {status === "submitting" ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white/40 border-t-white" aria-hidden />
              Sending…
            </>
          ) : (
            "Submit Project Enquiry"
          )}
        </button>
      </div>
    </form>
  );
}

/** Readable labels so the email Alfred receives is easy to scan. */
const LABELS: [string, string][] = [
  ["fullName", "Name"], ["email", "email"], ["phone", "Phone"], ["location", "Project Location"],
  ["projectType", "Project Type"], ["propertyType", "Property Type"], ["budget", "Estimated Budget"],
  ["timeline", "Desired Start"], ["message", "Project Details"],
];

const AUTORESPONSE =
  "Thank you for contacting Alfred Pederson. We've received your project enquiry and appreciate the opportunity to learn more about your project. " +
  "The information you provided will be reviewed, and we'll contact you regarding the appropriate next steps. We look forward to learning more about your vision. " +
  `— Alfred Pederson · ${site.phoneDisplay} · ${site.email}`;

/**
 * Builds a standard multipart form and posts it to FormSubmit (a normal form post, so the
 * client's confirmation email and attachments work). FormSubmit shows a quick "I'm not a robot"
 * check, emails the enquiry, then returns the visitor to /contact?sent=1.
 */
function submitToFormSubmit(values: Record<string, string>, files: File[], honeypot: string) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `https://formsubmit.co/${site.email}`;
  form.enctype = "multipart/form-data";
  form.style.display = "none";

  const add = (name: string, value: string) => {
    const i = document.createElement("input");
    i.type = "hidden";
    i.name = name;
    i.value = value;
    form.appendChild(i);
  };

  add("_subject", `New enquiry: ${values.projectType} — ${values.fullName}`);
  add("_template", "table");
  add("_next", `${window.location.origin}/contact?sent=1#enquiry`);
  add("_autoresponse", AUTORESPONSE);
  add("_replyto", values.email);
  add("_honey", honeypot);
  for (const [k, label] of LABELS) add(label, values[k] || "—");

  // Lead source details (PRD §52)
  try {
    const utm = JSON.parse(sessionStorage.getItem("ap-utm") || "{}") as Record<string, string>;
    const ref = sessionStorage.getItem("ap-ref") || document.referrer;
    add("Lead Source", utm.utm_source || (ref ? new URL(ref).hostname : "Direct / website"));
    for (const [k, v] of Object.entries(utm)) add(k, v);
  } catch {
    add("Lead Source", "Direct / website");
  }
  add("Submitted", new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }) + " PT");

  files.forEach((f, i) => {
    const input = document.createElement("input");
    input.type = "file";
    input.name = `attachment${i + 1}`;
    const dt = new DataTransfer();
    dt.items.add(f);
    input.files = dt.files;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}

function Field({ label, required, htmlFor, children, className }: { label: string; required?: boolean; htmlFor: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && <span className="text-bronze" aria-hidden> *</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
    </div>
  );
}
