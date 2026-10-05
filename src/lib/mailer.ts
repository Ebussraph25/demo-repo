import nodemailer, { type Transporter } from "nodemailer";
import { Resend } from "resend";
import { site } from "./site";

export interface Mail {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
}

/**
 * Sends through Gmail (the business inbox) when GMAIL_APP_PASSWORD is set —
 * no domain setup needed. Falls back to Resend if configured instead.
 */
const gmailUser = process.env.GMAIL_USER || site.email;
const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

let transport: Transporter | null = null;
function gmail() {
  transport ??= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    auth: { user: gmailUser, pass: gmailPass },
  });
  return transport;
}

export const mailConfigured = () => !!gmailPass || !!process.env.RESEND_API_KEY;

export async function sendMail(m: Mail) {
  if (gmailPass) {
    // Gmail requires the From address to be the authenticated account.
    await gmail().sendMail({
      from: `"${site.name}" <${gmailUser}>`,
      to: m.to,
      replyTo: m.replyTo,
      subject: m.subject,
      html: m.html,
      attachments: m.attachments,
    });
    return;
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("No email provider configured");
  const r = await new Resend(key).emails.send({
    from: process.env.RESEND_FROM || `${site.name} <onboarding@resend.dev>`,
    to: m.to,
    replyTo: m.replyTo,
    subject: m.subject,
    html: m.html,
    attachments: m.attachments,
  });
  if (r.error) throw new Error(r.error.message);
}
