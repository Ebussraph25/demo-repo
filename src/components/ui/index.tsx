import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Article } from "@/content/articles";
import { formatDate } from "@/content/articles";
import { faqs as defaultFaqs } from "@/content/company";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 10" className={cn("arrow h-2.5 w-5", className)} fill="none" stroke="currentColor" aria-hidden>
      <path d="M0 5h19M14.5 0.5 19 5l-4.5 4.5" />
    </svg>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow reveal mb-6 flex items-center gap-4", align === "center" && "justify-center", tone === "dark" ? "text-bronze" : "text-bronze-light")}>
          <span className="h-px w-10 bg-current" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("reveal text-[2.5rem] leading-[1.02] sm:text-5xl lg:text-[4rem]", tone === "dark" ? "text-charcoal" : "text-white")} style={{ ["--d" as string]: "80ms" }}>
        {title}
      </h2>
      {intro && (
        <p className={cn("reveal mt-6 max-w-xl text-base leading-relaxed md:text-lg", align === "center" && "mx-auto", tone === "dark" ? "text-ink/75" : "text-beige/85")} style={{ ["--d" as string]: "160ms" }}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function ProjectCard({ project, aspect = "aspect-[4/5]", priority = false, sizes = "(min-width:1024px) 45vw, 100vw" }: { project: Project; aspect?: string; priority?: boolean; sizes?: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" data-track="project_card_click">
      <div className={cn("zoom-wrap reveal-img relative bg-beige", aspect)}>
        <Image src={project.thumbnail} alt={`${project.title} — ${project.type} in ${project.location}`} fill sizes={sizes} priority={priority} className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/35" />
        <span className="absolute bottom-6 left-6 flex translate-y-3 items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          View Project <Arrow />
        </span>
      </div>
      <div className="reveal mt-5 flex items-start justify-between gap-6 border-t border-line pt-4">
        <div>
          <h3 className="text-2xl md:text-[1.75rem]">{project.title}</h3>
          <p className="mt-1 text-sm text-stone-ink">{project.type} · {project.location}</p>
        </div>
        <span className="pt-1.5 text-xs tracking-[0.2em] text-stone-ink">{project.year}</span>
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <div className="zoom-wrap reveal-img relative aspect-[4/3] bg-beige">
        <Image src={article.hero} alt="" fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
      </div>
      <div className="reveal mt-5">
        <p className="eyebrow text-bronze">{article.category} <span className="text-stone-ink">· {article.readMinutes} min read</span></p>
        <h3 className="mt-3 text-2xl leading-snug transition-colors group-hover:text-bronze">{article.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{article.excerpt}</p>
        <p className="mt-4 text-xs text-stone-ink"><time dateTime={article.date}>{formatDate(article.date)}</time></p>
      </div>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section data-hero-dark className="hero-media relative flex min-h-[78svh] items-end overflow-hidden bg-charcoal text-white">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30" />
      <div className="container-x relative pb-16 pt-40 md:pb-24">
        <p className="eyebrow mb-6 flex items-center gap-4 text-beige">
          <span className="h-px w-10 bg-bronze-light" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-5xl leading-[0.98] sm:text-6xl lg:text-[5.5rem]">
          <span className="hero-line"><span>{title}</span></span>
        </h1>
        {intro && <p className="mt-8 max-w-2xl text-base leading-relaxed text-beige md:text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function LightHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <section className="blueprint border-b border-line pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="container-x">
        <p className="eyebrow mb-6 flex items-center gap-4 text-bronze">
          <span className="h-px w-10 bg-current" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[5.5rem]">{title}</h1>
        {intro && <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function CTABanner({
  title = "Have a Project in Mind?",
  text = "Whether you are planning a new property, renovating an existing space or looking for professional interior design expertise, let's discuss your vision.",
  image,
  primaryLabel = "Start Your Project",
}: {
  title?: string;
  text?: string;
  image: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-white md:py-40">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow reveal mb-6 flex items-center gap-4 text-beige"><span className="h-px w-10 bg-bronze-light" aria-hidden />Let&apos;s talk</p>
          <h2 className="reveal text-5xl leading-[1] md:text-7xl">{title}</h2>
          <p className="reveal mt-6 text-base leading-relaxed text-beige md:text-lg">{text}</p>
          <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" data-track="consultation_cta" className="btn btn-solid-light">{primaryLabel}</Link>
            <a href={site.phoneHref} className="btn btn-light">Call {site.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="group reveal py-2">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-2xl md:text-[1.7rem] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="relative h-4 w-4 shrink-0" aria-hidden>
              <span className="absolute left-0 top-1/2 h-px w-4 bg-charcoal" />
              <span className="absolute left-1/2 top-0 h-4 w-px bg-charcoal transition-transform duration-500 group-open:rotate-90 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-base leading-relaxed text-ink/75">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items, tone = "light" }: { items: { label: string; href?: string }[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className={cn("flex flex-wrap items-center gap-2 text-xs tracking-[0.12em]", tone === "light" ? "text-beige/80" : "text-stone-ink")}>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? <Link href={it.href} className="hover:underline">{it.label}</Link> : <span aria-current="page">{it.label}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  // Content is our own static data (not user input), serialized with < escaped.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
