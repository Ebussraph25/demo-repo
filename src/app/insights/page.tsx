import Image from "next/image";
import Link from "next/link";
import { articles, articleCategories, formatDate } from "@/content/articles";
import { pageMeta } from "@/lib/seo";
import { Arrow, ArticleCard, LightHero } from "@/components/ui";

export const metadata = pageMeta({
  title: "Insights",
  description: "Guidance on architecture, interior design, renovation, materials and construction planning from Alfred Pederson.",
  path: "/insights",
});

export default function InsightsPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <LightHero
        eyebrow="Insights"
        title={<>Ideas for <em className="italic text-stone-ink">better spaces.</em></>}
        intro="Practical guidance on planning, designing and building — written for homeowners, developers and businesses."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <ul className="mb-16 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-stone-ink" aria-label="Topics">
            {articleCategories.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <Link href={`/insights/${lead.slug}`} className="group mb-24 grid items-center gap-10 lg:grid-cols-12">
            <div className="zoom-wrap reveal-img relative aspect-[16/10] bg-beige lg:col-span-7">
              <Image src={lead.hero} alt="" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow reveal text-bronze">Featured · {lead.category}</p>
              <h2 className="reveal mt-4 text-4xl leading-tight transition-colors group-hover:text-bronze md:text-5xl">{lead.title}</h2>
              <p className="reveal mt-5 text-lg leading-relaxed text-ink/75">{lead.excerpt}</p>
              <p className="reveal mt-6 text-sm text-stone-ink"><time dateTime={lead.date}>{formatDate(lead.date)}</time> · {lead.readMinutes} min read</p>
              <span className="text-link reveal mt-8">Read Article <Arrow /></span>
            </div>
          </Link>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
