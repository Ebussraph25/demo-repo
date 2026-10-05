import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { photoIds as I } from "@/content/projects";
import { img, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Arrow, CTABanner, FAQ, JsonLd, PageHero, SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "Services",
  description: "Architectural design, interior design, residential and commercial design, renovation and remodeling, and construction consulting.",
  path: "/services",
  image: img(I.officeBright, 1200),
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Integrated design, <em className="italic text-beige">from plan to finish.</em></>}
        intro="Architecture, interiors and building expertise under one considered approach — so your project is designed and delivered with the same care."
        image={img(I.kitchenWhite, 2400)}
        imageAlt="Refined contemporary kitchen with natural light"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <nav aria-label="Services on this page" className="mb-20 flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-6">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-ink hover:text-charcoal">{s.title}</a>
            ))}
          </nav>

          <div className="space-y-28 md:space-y-40">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="scroll-mt-32 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`reveal-img relative aspect-[4/3] bg-beige lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <Image src={s.image} alt={`${s.title} by Alfred Pederson`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : "lg:col-start-8"}`}>
                  <p className="eyebrow reveal text-bronze">{s.number}</p>
                  <h2 className="reveal mt-4 text-4xl md:text-6xl">{s.title}</h2>
                  <p className="reveal mt-6 text-lg leading-relaxed text-ink/75">{s.intro}</p>
                  <ul className="reveal mt-8 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <li key={o} className="flex items-center gap-3 border-b border-line py-3 text-sm">
                        <span className="h-px w-3 bg-bronze" aria-hidden />{o}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="text-link reveal mt-10">Learn More <Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="FAQ" title="Common questions" /></div>
          <div className="lg:col-span-7 lg:col-start-6"><FAQ /></div>
        </div>
      </section>

      <CTABanner image={img(I.diningRoom, 2400)} />

      <JsonLd
        data={services.map((s) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.short,
          serviceType: s.title,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          url: `${site.url}/services/${s.slug}`,
        }))}
      />
    </>
  );
}
