import { z } from "zod";

export const projectTypes = ["New Home", "Residential Renovation", "Interior Design", "Commercial Design", "Remodeling", "Architectural Design", "Construction Consultation", "Other"] as const;
export const propertyTypes = ["House", "Apartment", "Condo", "Office", "Retail", "Restaurant", "Commercial Property", "Other"] as const;
export const budgets = ["Under $25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000–$250,000", "$250,000–$500,000", "$500,000+", "Not sure yet"] as const;
export const timelines = ["Immediately", "1–3 months", "3–6 months", "6–12 months", "More than one year", "Flexible"] as const;

/**
 * How enquiries are delivered:
 *  - "formsubmit" (default): no setup — the browser posts straight to FormSubmit, which emails
 *    alfredpederson02@gmail.com and sends the client an automatic confirmation.
 *  - "server": our own /api/enquiry route (Gmail app password / Resend / n8n webhook).
 */
export const ENQUIRY_MODE: "formsubmit" | "server" = process.env.NEXT_PUBLIC_ENQUIRY_MODE === "server" ? "server" : "formsubmit";

/** FormSubmit allows 10 MB of attachments; our own route stays under Vercel's 4.5 MB request limit. */
export const UPLOAD = {
  maxFiles: 3,
  maxTotalBytes: (ENQUIRY_MODE === "server" ? 4 : 10) * 1024 * 1024,
  types: { "application/pdf": "pdf", "image/jpeg": "jpg", "image/png": "png" } as Record<string, string>,
  accept: ".pdf,.jpg,.jpeg,.png",
};

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.union([z.enum(values), z.literal("")]).optional();

/** Shared by the client (inline errors) and the API route (authoritative check). */
export const enquirySchema = z.object({
  fullName: z.string({ error: "Please enter your full name." }).trim().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid email address.").max(200),
  phone: z
    .string({ error: "Please enter a valid phone number." })
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30)
    .regex(/^[+()\d\s.-]+$/, "Please enter a valid phone number."),
  location: z.string({ error: "Please enter the project location." }).trim().min(2, "Please enter the project location.").max(160),
  projectType: z.enum(projectTypes, { error: "Please select a project type." }),
  propertyType: optionalEnum(propertyTypes),
  budget: optionalEnum(budgets),
  timeline: optionalEnum(timelines),
  message: z.string().trim().max(5000, "Please keep your message under 5,000 characters.").optional(),
  consent: z.literal("on", { error: "Please confirm we may contact you about your enquiry." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
export type FieldErrors = Partial<Record<keyof EnquiryInput | "files", string>>;
