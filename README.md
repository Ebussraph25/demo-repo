# Alfred Pederson — Website

Premium architecture, building & interior design website built from the Alfred Pederson PRD.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Resend (email) · Zod (validation)
Fonts are self-hosted (Cormorant Garamond + Manrope). Everything is statically pre-rendered except the contact page and the enquiry API.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for local dev)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

In development, enquiries without `RESEND_API_KEY` are logged to the terminal so you can test the form.

## Deploy (Vercel)

1. Push this folder to a GitHub repo and import it in Vercel (framework auto-detected).
2. Add environment variables from `.env.example` in **Project → Settings → Environment Variables**.
3. Add your custom domain and set `NEXT_PUBLIC_SITE_URL` to it.

### Email setup (required before launch)
1. Create a free account at resend.com, add and verify the domain (e.g. `alfredpederson.com`).
2. Set `RESEND_API_KEY` and `RESEND_FROM="Alfred Pederson <hello@alfredpederson.com>"`.
3. Enquiries go to `ENQUIRY_TO_EMAIL` (default `alfredpederson02@gmail.com`) with attachments and Reply-To set to the client. Clients automatically receive the PRD §53 confirmation email.

In production, if email isn't configured the form shows a friendly error with the phone/email fallback instead of silently dropping the lead.

### Optional: CRM / automation
Set `LEAD_WEBHOOK_URL` (e.g. an n8n Webhook node) to receive every lead as JSON: name, email, phone, location, project type, property type, budget, timeline, description, attachment names, submittedAt, leadSource, referrer, page and UTM fields (PRD §52). Optional `LEAD_WEBHOOK_SECRET` is sent as `X-Webhook-Secret`.

### Analytics
Set `NEXT_PUBLIC_GA_ID` (GA4). GA loads **only after cookie consent**. Events tracked automatically:
`generate_lead`, `phone_click`, `whatsapp_start`, `email_click`, `consultation_cta`, `project_case_study_view`, `project_card_click`. Mark `generate_lead` as a key event in GA4.
For Search Console, set `GOOGLE_SITE_VERIFICATION` or verify via DNS, then submit `/sitemap.xml`.

## Editing content (no design code needed)

| What | File |
|---|---|
| Phone, email, WhatsApp, social links | `src/lib/site.ts` |
| Projects / case studies (PRD §48 fields) | `src/content/projects.ts` |
| Services | `src/content/services.ts` |
| Articles | `src/content/articles.ts` |
| Process, pillars, testimonials, FAQ, values | `src/content/company.ts` |

The content files follow the PRD CMS structures, so they map 1:1 onto Sanity/Contentful schemas when you're ready for a no-code admin (PRD §47).

## ⚠️ Replace before launch
- **Photography:** all images are Unsplash placeholders. Swap in real project photography (min 2000px wide, PRD §67) — before/after slider currently uses a simulated "before" treatment; use real before photos.
- **Projects:** the 8 case studies are conceptual showcase content.
- **Testimonials:** placeholders. PRD §19 — publish verified testimonials only.
- **Legal pages:** general templates; have them reviewed by an attorney.
- **Social links:** empty by default (hidden). Add only actively maintained platforms.

## What's included
- Pages: Home (PRD §59 order), About, Services + 6 service pages, Projects (filterable) + 8 case studies with lightbox gallery, Process (10 stages), Insights + 8 articles, Contact, Privacy, Terms, Accessibility, Cookie Policy, branded 404.
- Vector logo recreated from the supplied mark (`src/components/brand/Logo.tsx`); original PNG in `public/brand/`.
- Sticky header (transparent over images → solid on scroll), full-screen mobile menu, floating WhatsApp with prefilled message, click-to-call everywhere.
- Enquiry form: all PRD §28 fields, PDF/JPG/PNG uploads (3 files / 4 MB), inline validation, consent checkbox, success state.
- Security: server-side Zod validation, field allow-listing, file signature (magic-byte) checks, honeypot + timing spam trap, per-IP rate limiting, HTML-escaped emails, security headers (HSTS, nosniff, frame options, referrer, permissions).
- SEO: per-page titles/descriptions/canonicals/OG, generated OG image, sitemap.xml, robots.txt, JSON-LD (Organization/HomeAndConstructionBusiness, Service, Article, CreativeWork, Breadcrumb, ContactPage).
- Accessibility: skip link, semantic landmarks, keyboard focus states, labeled fields with described errors, AA contrast tokens, reduced-motion support.
- Motion: fade-up, vertical image reveal, headline reveal, 4–5% hover zoom, brief monogram line-drawing intro (first load only).

## Not yet done
- **Rate limiting** is in-memory per server instance; for heavy traffic swap to Upstash Ratelimit. Consider adding Cloudflare Turnstile if spam gets through the honeypot.
- No automated tests; no headless CMS wired up yet; Phase 2 features (PRD §72) not started.
