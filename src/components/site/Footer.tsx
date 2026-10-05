import Link from "next/link";
import { Monogram } from "@/components/brand/Logo";
import { services } from "@/content/services";
import { mailHref, site } from "@/lib/site";

const explore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="relative overflow-hidden bg-charcoal text-beige">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="container-x relative">
        <div className="grid gap-12 border-b border-white/10 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Monogram className="h-16 w-16" guides />
            <p className="mt-6 font-serif text-3xl leading-tight text-white">Alfred Pederson</p>
            <p className="mt-2 text-[0.6rem] tracking-[0.34em] text-stone">ARCHITECTURE • BUILDING • INTERIORS</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-beige/80">
              Thoughtful architecture, building and interior design solutions created for modern living and working environments.
            </p>
          </div>

          <FooterCol title="Explore" className="lg:col-span-2">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services" className="lg:col-span-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title.replace("Renovation & Remodeling", "Renovation").replace("Construction Consulting", "Project Consultation")}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact" className="lg:col-span-3">
            <li><a href={site.phoneHref} className="hover:text-white">{site.phoneDisplay}</a></li>
            <li><a href={mailHref} className="hover:text-white">{site.email}</a></li>
          </FooterCol>

          <FooterCol title="Legal" className="lg:col-span-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs tracking-wide text-stone md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Alfred Pederson. All Rights Reserved.</p>
          {socials.length > 0 && (
            <ul className="flex gap-6">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-white">{name}</a>
                </li>
              ))}
            </ul>
          )}
          <p className="italic font-serif text-base text-beige/70">Thoughtful Spaces. Beautifully Built.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-6 font-sans text-bronze-light">{title}</h2>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}
