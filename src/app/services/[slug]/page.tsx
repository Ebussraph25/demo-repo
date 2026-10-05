import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { getProject, photo } from "@/content/projects";
import { site } from "@/lib/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { Breadcrumbs, CTABanner, FAQ, JsonLd, PageHero, ProjectCard, SectionHeader } from "@/components/ui";
import { homeProcess } from "@/content/company";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.short, path: `/services/${s.slug}`, image: s.image });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = s.relatedProjectSlugs.map(getProject).filter((p) => !!p);
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero eyebrow={`Service ${s.number}`} title={s.title} intro={s.intro} image={s.image} imageAlt={s.title}>
        <div className="mt-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.title }]} />
        </div>
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="What's Included" title="Scope of service" />
            <div className="reveal mt-10 border-t border-line pt-8">
              <p className="eyebrow text-stone-ink">Ideal for</p>
              <ul className="mt-4 space-y-2 text-lg">
                {s.idealFor.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {s.offerings.map((o, i) => (
              <li key={o} className="reveal flex items-baseline gap-6 border-b border-line py-6">
                <span className="text-xs tracking-[0.2em] text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-3xl">{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="How It Works" title="A clear, structured process" className="mb-14" />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {homeProcess.slice(0, 4).map((p) => (
              <div key={p.n} className="reveal bg-white p-8">
                <span className="text-xs tracking-[0.2em] text-bronze">{p.n}</span>
                <p className="mt-6 font-serif text-2xl">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.text}</p>
              </div>
            ))}
          </div>
          <Link href="/process" className="text-link reveal mt-10">See the full process</Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-x">
            <SectionHeader eyebrow="Related Work" title="Projects featuring this service" className="mb-14" />
            <div className="grid gap-12 md:grid-cols-2 md:gap-8">
              {related.map((p) => <ProjectCard key={p.slug} project={p} aspect="aspect-[4/3]" />)}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-white py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Other Services" title="Explore more" />
            <ul className="reveal mt-10 space-y-3">
              {others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`} className="text-lg hover:text-bronze">{o.title}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6"><FAQ /></div>
        </div>
      </section>

      <CTABanner image={photo("canopy-apartment", 2)} title="Let's Discuss Your Project." primaryLabel="Schedule a Consultation" />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.intro,
            serviceType: s.title,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: { "@type": "Country", name: "United States" },
            hasOfferCatalog: { "@type": "OfferCatalog", name: s.title, itemListElement: s.offerings.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o } })) },
          },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }]),
        ]}
      />
    </>
  );
}
