import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatDate, getArticle } from "@/content/articles";
import { getProject } from "@/content/projects";
import { site } from "@/lib/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { ArticleCard, Breadcrumbs, CTABanner, JsonLd, ProjectCard } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const m = pageMeta({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, image: a.hero });
  return { ...m, openGraph: { ...m.openGraph, type: "article", publishedTime: a.date, authors: [a.author] } };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const url = `${site.url}/insights/${a.slug}`;
  const relatedArticles = articles.filter((x) => x.slug !== a.slug && x.category === a.category).concat(articles.filter((x) => x.slug !== a.slug && x.category !== a.category)).slice(0, 3);
  const relatedProject = a.relatedProjectSlugs.map(getProject).find(Boolean);
  const share = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Pinterest", href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(a.hero)}&description=${encodeURIComponent(a.title)}` },
    { label: "Email", href: `mailto:?subject=${encodeURIComponent(a.title)}&body=${encodeURIComponent(url)}` },
  ];

  return (
    <article>
      <header className="pb-12 pt-36 md:pt-44">
        <div className="container-x max-w-5xl">
          <Breadcrumbs tone="dark" items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: a.category }]} />
          <p className="eyebrow text-bronze">{a.category}</p>
          <h1 className="mt-5 text-5xl leading-[1] md:text-7xl">{a.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">{a.excerpt}</p>
          <p className="mt-8 text-sm text-stone-ink">By {a.author} · <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readMinutes} min read</p>
        </div>
      </header>

      <div className="container-x">
        <div className="reveal-img relative aspect-[16/9] bg-beige">
          <Image src={a.hero} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className="container-x grid gap-12 py-20 lg:grid-cols-12">
        <aside className="order-2 lg:order-1 lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-stone-ink">Share</p>
            <ul className="mt-4 flex flex-wrap gap-4 text-sm lg:flex-col lg:gap-2">
              {share.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-bronze">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="order-1 max-w-[42rem] text-lg leading-[1.8] text-ink/85 lg:order-2 lg:col-span-7">
          {a.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="mb-5 mt-14 text-4xl leading-tight text-charcoal">{b.text}</h2>;
            if (b.type === "ul")
              return (
                <ul key={i} className="my-8 space-y-3 border-l border-bronze pl-6">
                  {b.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            if (b.type === "quote") return <blockquote key={i} className="my-12 font-serif text-3xl leading-snug text-charcoal md:text-4xl">“{b.text}”</blockquote>;
            return <p key={i} className="mb-6">{b.text}</p>;
          })}
          <div className="mt-16 border-t border-line pt-10">
            <p className="font-serif text-3xl text-charcoal">Planning a project?</p>
            <p className="mt-3 text-base">We&apos;re happy to talk through your ideas and the right next steps.</p>
            <Link href="/contact" data-track="consultation_cta" className="btn btn-primary mt-6">Schedule a Consultation</Link>
          </div>
        </div>
      </div>

      {relatedProject && (
        <section className="bg-white py-20 md:py-28">
          <div className="container-x grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-bronze">Related Project</p>
              <h2 className="mt-4 text-4xl">See these ideas in practice</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6"><ProjectCard project={relatedProject} aspect="aspect-[16/10]" /></div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="container-x">
          <h2 className="mb-12 text-4xl md:text-5xl">More Insights</h2>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {relatedArticles.map((r) => <ArticleCard key={r.slug} article={r} />)}
          </div>
        </div>
      </section>

      <CTABanner image={a.hero} />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            image: [a.hero],
            datePublished: a.date,
            dateModified: a.date,
            author: { "@type": "Person", name: a.author },
            publisher: { "@id": `${site.url}/#organization` },
            mainEntityOfPage: url,
            articleSection: a.category,
          },
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }]),
        ]}
      />
    </article>
  );
}
