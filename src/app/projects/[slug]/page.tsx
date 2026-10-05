import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects, relatedProjects } from "@/content/projects";
import { site } from "@/lib/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { Breadcrumbs, CTABanner, JsonLd, PageHero, ProjectCard } from "@/components/ui";
import { Gallery } from "@/components/ui/Gallery";
import { TrackView } from "@/components/site/TrackView";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const m = pageMeta({ title: p.title, description: p.seoDescription, path: `/projects/${p.slug}`, image: p.thumbnail });
  return { ...m, title: { absolute: p.seoTitle } };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const related = relatedProjects(p);
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const story = [
    { h: "Project Overview", t: p.overview },
    { h: "The Challenge", t: p.challenge },
    { h: "Our Approach", t: p.approach },
    { h: "Design Solution", t: p.solution },
  ];

  return (
    <>
      <TrackView event="project_case_study_view" params={{ project: p.slug }} />
      <PageHero eyebrow={p.type} title={p.title} image={p.hero} imageAlt={`${p.title}, ${p.location}`}>
        <div className="mt-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: p.title }]} />
        </div>
      </PageHero>

      {/* Project information panel */}
      <section className="border-b border-line bg-white">
        <dl className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-5">
          {[
            ["Location", p.location],
            ["Project Type", p.type],
            ["Year", String(p.year)],
            ["Size", p.size ?? "—"],
            ["Services", p.services.join(", ")],
          ].map(([k, v]) => (
            <div key={k} className="pr-6">
              <dt className="eyebrow !text-[0.62rem] text-stone-ink">{k}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x space-y-20 md:space-y-28">
          {story.map((s, i) => (
            <div key={s.h} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow reveal text-bronze">0{i + 1}</p>
                <h2 className="reveal mt-3 text-4xl md:text-5xl">{s.h}</h2>
              </div>
              <p className="reveal font-serif text-2xl leading-snug text-ink/85 md:text-[2rem] lg:col-span-7 lg:col-start-6">{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="bg-charcoal py-24 text-white md:py-32">
        <div className="container-x">
          <p className="eyebrow reveal text-bronze-light">Materials & Finishes</p>
          <h2 className="reveal mt-4 text-4xl md:text-6xl">The palette</h2>
          <dl className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {p.materials.map((m) => (
              <div key={m.label} className="reveal bg-charcoal p-8">
                <dt className="eyebrow !text-[0.62rem] text-stone">{m.label}</dt>
                <dd className="mt-4 font-serif text-2xl text-beige">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <h2 className="reveal mb-14 text-4xl md:text-6xl">Project Gallery</h2>
          <Gallery images={p.gallery} />
        </div>
      </section>

      <section className="border-y border-line bg-white py-24 md:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal text-bronze">Outcome</p>
            <h2 className="reveal mt-3 text-4xl md:text-5xl">Results</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="reveal font-serif text-2xl leading-snug md:text-[2rem]">{p.results}</p>
            <Link href={`/contact?type=${encodeURIComponent(p.categories.includes("Commercial") ? "Commercial Design" : p.categories.includes("Renovation") ? "Residential Renovation" : "Interior Design")}`} data-track="consultation_cta" className="btn btn-primary reveal mt-12">
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-x">
            <div className="mb-14 flex items-end justify-between gap-6">
              <h2 className="reveal text-4xl md:text-5xl">Related Projects</h2>
              <Link href={`/projects/${next.slug}`} className="text-link reveal hidden sm:inline-flex">Next: {next.title}</Link>
            </div>
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {related.map((r) => <ProjectCard key={r.slug} project={r} aspect="aspect-[4/5]" sizes="(min-width:768px) 30vw, 100vw" />)}
            </div>
          </div>
        </section>
      )}

      <CTABanner image={p.gallery[1]?.src ?? p.hero} title="Discuss a Similar Project" />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            description: p.seoDescription,
            image: p.gallery.map((g) => g.src),
            dateCreated: String(p.year),
            locationCreated: { "@type": "Place", name: p.location },
            creator: { "@id": `${site.url}/#organization` },
            url: `${site.url}/projects/${p.slug}`,
          },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: p.title, path: `/projects/${p.slug}` }]),
        ]}
      />
    </>
  );
}
