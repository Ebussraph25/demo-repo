import Image from "next/image";
import Link from "next/link";
import { projects, photoIds as I } from "@/content/projects";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { homeProcess, pillars, testimonials } from "@/content/company";
import { img } from "@/lib/site";
import { Arrow, ArticleCard, CTABanner, ProjectCard, SectionHeader } from "@/components/ui";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Monogram } from "@/components/brand/Logo";
import { Loader } from "@/components/site/Loader";

export default function Home() {
  const featured = projects.slice(0, 6);
  const caseStudy = projects[0];

  return (
    <>
      <Loader />

      {/* 1 — HERO */}
      <section data-hero-dark className="hero-media relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-white">
        <Image src={img(I.luxuryHouse, 2400)} alt="Contemporary residence with warm interior lighting at dusk" fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" />
        <div className="container-x relative pb-28 pt-40 md:pb-32">
          <p className="eyebrow mb-8 flex items-center gap-4 text-beige">
            <span className="h-px w-10 bg-bronze-light" aria-hidden />
            Architecture · Building · Interiors
          </p>
          <h1 className="max-w-6xl text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[7.25rem]">
            <span className="hero-line"><span style={{ animationDelay: "1.2s" }}>Building Better Spaces</span></span>
            <span className="hero-line"><span style={{ animationDelay: "1.35s" }}>for <em className="font-serif italic text-beige">Modern Living.</em></span></span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <p className="hero-line md:col-span-6 lg:col-span-5">
              <span className="text-base leading-relaxed text-beige md:text-lg" style={{ animationDelay: "1.5s" }}>
                Alfred Pederson brings architecture, building expertise and interior design together to create refined residential and commercial environments that balance beauty, function and lasting value.
              </span>
            </p>
            <div className="hero-line md:col-span-6 md:justify-self-end lg:col-span-7">
              <span className="!flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "1.65s" }}>
                <Link href="/contact" data-track="consultation_cta" className="btn btn-solid-light">Start Your Project</Link>
                <Link href="/projects" className="btn btn-light">View Our Work</Link>
              </span>
            </div>
          </div>
        </div>
        <a href="#intro" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-beige md:flex" aria-label="Scroll to introduction">
          Scroll
          <span className="relative block h-12 w-px overflow-hidden bg-white/20"><span className="scroll-cue absolute inset-0 bg-white" /></span>
        </a>
      </section>

      {/* 2 — INTRODUCTION */}
      <section id="intro" className="py-24 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader eyebrow="Our Approach" title={<>Design With Purpose. <em className="italic text-stone-ink">Built With Precision.</em></>} />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-5 lg:col-start-8 lg:pt-16">
            <p className="reveal">At Alfred Pederson, every project begins with understanding the people who will experience the space. We combine thoughtful planning, creative design and practical building expertise to create environments that are functional, sophisticated and built to last.</p>
            <p className="reveal">Whether transforming an existing property or developing a new space from the ground up, our approach balances aesthetics, functionality and long-term value.</p>
            <Link href="/about" className="text-link reveal mt-4">Discover Our Approach <Arrow /></Link>
          </div>
        </div>
        <div className="container-x mt-20 grid gap-6 md:mt-28 md:grid-cols-12">
          <div className="reveal-img relative aspect-[4/5] bg-beige md:col-span-5">
            <Image src={img(I.interiorStair, 1400)} alt="Light-filled staircase with timber and plaster finishes" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal-img relative aspect-[4/3] bg-beige md:col-span-7 md:mt-32" style={{ ["--d" as string]: "150ms" }}>
            <Image src={img(I.livingWide, 1800)} alt="Open-plan living room with natural materials and garden views" fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3 — SELECTED PROJECTS */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Portfolio" title="Selected Projects" intro="Residential, commercial and interior work shaped by context, craft and the way our clients live." />
            <Link href="/projects" className="text-link reveal shrink-0">All Projects <Arrow /></Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24 lg:grid-cols-12">
            {featured.map((p, i) => {
              const layout = [
                "lg:col-span-7", "lg:col-span-5 lg:mt-40", "lg:col-span-5", "lg:col-span-7 lg:mt-24", "lg:col-span-6", "lg:col-span-6 lg:mt-32",
              ][i];
              const aspect = ["aspect-[5/4]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[5/4]", "aspect-[4/3]", "aspect-[4/3]"][i];
              return (
                <div key={p.slug} className={layout}>
                  <ProjectCard project={p} aspect={aspect} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — SERVICES */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-12">
            <div className="lg:col-span-7"><SectionHeader eyebrow="Services" title="What We Do" /></div>
            <p className="reveal self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">From first concept to final walkthrough, we offer integrated design and building expertise under one considered approach.</p>
          </div>
          <ul className="border-t border-charcoal/15">
            {services.map((s) => (
              <li key={s.slug} className="reveal border-b border-charcoal/15">
                <Link href={`/services/${s.slug}`} className="group grid items-center gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <span className="text-xs tracking-[0.2em] text-bronze md:col-span-1">{s.number}</span>
                  <h3 className="text-3xl transition-transform duration-700 [transition-timing-function:var(--ease-arch)] group-hover:translate-x-3 md:col-span-4 md:text-[2.6rem]">{s.title}</h3>
                  <p className="text-base leading-relaxed text-ink/70 md:col-span-5">{s.short}</p>
                  <span className="hidden justify-self-end md:col-span-2 md:block">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/20 transition-all duration-500 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-white"><Arrow /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14"><Link href="/services" className="btn btn-secondary reveal">Explore All Services</Link></div>
        </div>
      </section>

      {/* 5 — DESIGN PHILOSOPHY */}
      <section className="relative overflow-hidden bg-charcoal py-28 text-white md:py-44">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-25" aria-hidden />
        <Monogram className="pointer-events-none absolute -right-20 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.06]" />
        <div className="container-x relative">
          <p className="eyebrow reveal mb-10 flex items-center gap-4 text-bronze-light"><span className="h-px w-10 bg-current" />Philosophy</p>
          <blockquote className="reveal max-w-5xl font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-[4.5rem]">
            “Great design should look beautiful, function effortlessly and remain relevant for years.”
          </blockquote>
          <p className="reveal mt-12 max-w-2xl text-lg leading-relaxed text-beige/85">
            Our philosophy combines creativity with practical thinking. Every decision — from spatial planning to materials, lighting and finishes — is considered in relation to the client&apos;s lifestyle, objectives, budget and long-term vision.
          </p>
        </div>
      </section>

      {/* 6 — BEFORE & AFTER */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="mb-14 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7"><SectionHeader eyebrow="Transformations" title="Before & After" /></div>
            <p className="reveal self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">Drag the slider to see how considered planning and refined finishes change the way a space looks, works and feels.</p>
          </div>
          <div className="reveal">
            <BeforeAfter
              items={[
                { label: "Kitchen Renovation", before: img(I.kitchenClassic, 1800), after: img(I.kitchenIsland, 1800), simulateBefore: true },
                { label: "Living Room", before: img(I.sofaRoom, 1800), after: img(I.livingWarm, 1800), simulateBefore: true },
                { label: "Office Redesign", before: img(I.officeDesk, 1800), after: img(I.officeBright, 1800), simulateBefore: true },
                { label: "Bathroom Upgrade", before: img(I.bathModern, 1800), after: img(I.bathStone, 1800), simulateBefore: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 7 — PROCESS */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <SectionHeader eyebrow="Our Process" title="From Vision to Reality" intro="A structured, transparent path from the first conversation to the final walkthrough." />
            <Link href="/process" className="text-link reveal mt-10">See the Full Process <Arrow /></Link>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-line md:left-[1.9rem]" aria-hidden />
            {homeProcess.map((s) => (
              <li key={s.n} className="reveal relative grid grid-cols-[3rem_1fr] gap-6 pb-12 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-10">
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-charcoal/20 bg-white text-xs tracking-[0.1em] text-bronze md:h-[3.8rem] md:w-[3.8rem]">{s.n}</span>
                <div className="border-b border-line pb-10">
                  <h3 className="text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8 — WHY CHOOSE */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeader eyebrow="Why Alfred Pederson" title="Why Clients Work With Us" className="mb-16 md:mb-20" />
          <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="reveal group border-b border-r border-line p-8 transition-colors duration-500 hover:bg-white md:p-12" style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}>
                <span className="text-xs tracking-[0.2em] text-bronze">0{i + 1}</span>
                <h3 className="mt-10 text-3xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — FEATURED CASE STUDY */}
      <section className="bg-charcoal text-white">
        <div className="grid lg:grid-cols-2">
          <div className="reveal-img relative aspect-[4/3] lg:aspect-auto lg:min-h-[44rem]">
            <Image src={caseStudy.hero} alt={`${caseStudy.title}, ${caseStudy.location}`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-20 xl:px-28">
            <p className="eyebrow reveal mb-8 flex items-center gap-4 text-bronze-light"><span className="h-px w-10 bg-current" />Featured Case Study</p>
            <h2 className="reveal text-5xl leading-[1] md:text-6xl">{caseStudy.title}</h2>
            <dl className="reveal mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8 text-sm">
              {[["Location", caseStudy.location], ["Type", caseStudy.type], ["Size", caseStudy.size], ["Year", String(caseStudy.year)]].map(([k, v]) => (
                <div key={k}><dt className="eyebrow !text-[0.6rem] text-stone">{k}</dt><dd className="mt-2 text-beige">{v}</dd></div>
              ))}
            </dl>
            <p className="reveal mt-8 text-lg leading-relaxed text-beige/85">{caseStudy.challenge} {caseStudy.approach}</p>
            <Link href={`/projects/${caseStudy.slug}`} className="text-link reveal mt-10 text-white">Read the Case Study <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* 10 — TESTIMONIALS (renders only when real testimonials exist) */}
      {testimonials.length > 0 && (
      <section className="py-24 md:py-36">
        <div className="container-x">
          <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" align="center" className="mb-16 md:mb-20" />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="reveal flex flex-col border border-line bg-white p-8 md:p-10" style={{ ["--d" as string]: `${i * 100}ms` }}>
                <div className="text-sm tracking-[0.3em] text-bronze" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-8 flex-1 font-serif text-2xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-10 border-t border-line pt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-1 text-sm text-stone-ink">{t.project} · {t.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 11 — INSIGHTS */}
      <section className="border-t border-line bg-white py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Insights" title="Ideas & Guidance" intro="Practical advice on planning, designing and building better spaces." />
            <Link href="/insights" className="text-link reveal shrink-0">All Articles <Arrow /></Link>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      {/* 12 — FINAL CTA */}
      <CTABanner image={img(I.loungeNeutral, 2400)} />
    </>
  );
}
