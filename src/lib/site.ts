/**
 * Single source of truth for business details.
 * Change contact info here and it updates everywhere (header, footer, schema, CTAs).
 */
export const site = {
  name: "Alfred Pederson",
  tagline: "Architecture • Building • Interiors",
  promise: "Thoughtful Spaces. Beautifully Built.",
  description:
    "Alfred Pederson brings architecture, building expertise and interior design together to create refined residential and commercial environments that balance beauty, function and lasting value.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://alfredpederson.com",
  phoneDisplay: "+1 213-478-5730",
  phoneHref: "tel:+12134785730",
  email: "alfredpederson02@gmail.com",
  whatsappNumber: "12134785730",
  whatsappMessage:
    "Hello Alfred Pederson, I'm interested in discussing a building or interior design project.",
  // Only list platforms the business actively maintains (PRD §50). Leave empty strings to hide.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    pinterest: "",
    houzz: "",
    youtube: "",
  } as Record<string, string>,
};

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mailHref = `mailto:${site.email}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** Unsplash placeholder photography — swap for real project photography via the CMS. */
export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
