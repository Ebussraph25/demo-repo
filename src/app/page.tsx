import Image from "next/image";
import Link from "next/link";
import { allPhotos, getProject, photo, projects } from "@/content/projects";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { homeProcess, pillars, testimonials } from "@/content/company";
import { Arrow, ArticleCard, CTABanner, ProjectCard, SectionHeader } from "@/components/ui";
import { Monogram } from "@/components/brand/Logo";
import { Loader } from "@/components/site/Loader";

const sectors = [
  { title: "Residential", text: "Custom homes, renovations and interiors shaped around daily life.", img: photo("courtyard-house"), alt: "Timber courtyard house with full-height glazing" },
  { title: "Workplace", text: "Headquarters and offices that welcome clients and support teams.", img: photo("executive-headquarters", 2), alt: "Executive client bar with stone island and city views" },
  { title: "Learning", text: "Bright, safe and inspiring environments for early learning and education.", img: photo("treehouse-early-learning"), alt: "Learning space with sculptural timber reading tree" },
  { title: "Hospitality & Community", text: "Dining, gathering and civic spaces designed for people to linger.", img: photo("community-dining-hall"), alt: "Dining hall with rattan pendants and timber ceiling" },
  { title: "Wellness & Leisure", text: "Private pools, spas and retreats designed for rest and renewal.", img: photo("gabled-wellness-house", 2), alt: "Indoor pool hall under timber portal frames with a glazed gable" },
  { title: "Urban & Mixed-Use", text: "Towers, precincts and mixed-use buildings that add life to the city.", img: photo("lattice-tower", 2), alt: "Slender tower with a terracotta diagrid and vertical gardens" },
];

const materials = [
  { title: "Timber", text: "Warmth, texture and craft — from slatted ceilings to woven screens.", img: photo("woven-pavilion"), alt: "Woven timber lattice on red steel columns" },
  { title: "Stone", text: "Travertine, marble and natural stone chosen for depth and longevity.", img: photo("city-workplace"), alt: "Veined natural stone kitchen island" },
  { title: "Light & Glass", text: "Daylight drawn deep inside through generous, well-framed glazing.", img: photo("glasshouse-loft"), alt: "Double-height glass wall over a timber-floored living space" },
  { title: "Color", text: "Confident, considered palettes that give every room its own character.", img: photo("color-studies-residence"), alt: "Burgundy dining room with arched garden windows" },
];

export default function Home() {
  const featuredSlugs = ["ridgeline-retreat", "executive-headquarters", "curve-house", "gabled-wellness-house", "courtyard-house", "arc-early-learning", "pink-column-workplace", "color-studies-residence"];
  const featured = featuredSlugs.map((s) => getProject(s)!).filter(Boolean);
  const caseStudy = getProject("woven-pavilion")!;
  const band = [...allPhotos, ...allPhotos];

  return (
    <>
      <Loader />

      {/* 1 — HERO */}
      <section data-hero-dark className="hero-media relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-white">
        <Image src={photo("executive-headquarters")} alt="Sculptural timber reception with backlit wall sculptures and travertine floors" fill priority sizes="100vw" className="object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/45" />
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

      {/* Disciplines ticker */}
      <div className="overflow-hidden border-b border-line bg-white py-5" aria-hidden>
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-serif text-2xl text-stone-ink md:text-3xl">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-12">
              {["Architecture", "Interior Design", "Residential", "Workplace", "Learning Environments", "Hospitality", "Renovation", "Construction Consulting"].map((t) => (
                <span key={t} className="flex items-center gap-12">{t}<span className="text-bronze">◆</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

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
          <figure className="md:col-span-5">
            <div className="reveal-img relative aspect-[4/5] bg-beige">
              <Image src={photo("glasshouse-loft")} alt="Double-height loft with glass wall and wood stove" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-ink">The Glasshouse Loft</figcaption>
          </figure>
          <figure className="md:col-span-7 md:mt-32">
            <div className="reveal-img relative aspect-[4/3] bg-beige" style={{ ["--d" as string]: "150ms" }}>
              <Image src={photo("courtyard-house")} alt="Timber pavilions around a garden courtyard" fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-ink">The Courtyard House</figcaption>
          </figure>
        </div>
      </section>

      {/* 3 — SELECTED PROJECTS */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Portfolio" title="Selected Projects" intro="Homes, workplaces, learning environments and interiors — each shaped by context, craft and the way people use them." />
            <Link href="/projects" className="text-link reveal shrink-0">All {projects.length} Projects <Arrow /></Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24 lg:grid-cols-12">
            {featured.map((p, i) => {
              const layout = ["lg:col-span-7", "lg:col-span-5 lg:mt-40", "lg:col-span-5", "lg:col-span-7 lg:mt-24"][i % 4];
              const aspect = ["aspect-[5/4]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[5/4]"][i % 4];
              return (
                <div key={p.slug} className={layout}>
                  <ProjectCard project={p} aspect={aspect} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — SECTORS */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7"><SectionHeader eyebrow="Sectors" title="Spaces We Design" /></div>
            <p className="reveal self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">One studio, one standard of care — applied across the places people live, work, learn and gather.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Link key={s.title} href="/projects" className="group relative block aspect-[3/4] overflow-hidden bg-charcoal text-white" style={{ ["--d" as string]: `${i * 100}ms` }}>
                <div className="zoom-wrap absolute inset-0">
                  <Image src={s.img} alt={s.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover opacity-85" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="text-xs tracking-[0.2em] text-bronze-light">0{i + 1}</span>
                  <h3 className="mt-2 text-3xl leading-tight">{s.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-beige opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100">{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — SERVICES */}
      <section className="bg-white py-24 md:py-36">
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
                  <p className="text-base leading-relaxed text-ink/70 md:col-span-4">{s.short}</p>
                  <span className="relative hidden aspect-[4/3] w-full overflow-hidden md:col-span-2 md:block">
                    <Image src={s.image} alt="" fill sizes="16vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </span>
                  <span className="hidden justify-self-end md:col-span-1 md:block">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/20 transition-all duration-500 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-white"><Arrow /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14"><Link href="/services" className="btn btn-secondary reveal">Explore All Services</Link></div>
        </div>
      </section>

      {/* 6 — DESIGN PHILOSOPHY */}
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

      {/* 7 — MATERIALS & CRAFT */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7"><SectionHeader eyebrow="Materials & Craft" title={<>An Honest <em className="italic text-stone-ink">Palette.</em></>} /></div>
            <p className="reveal self-end text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9">We choose materials for how they feel, how they age and how they work every day — then let them speak for themselves.</p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m, i) => (
              <figure key={m.title} className="reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div className="zoom-wrap relative aspect-[4/5] bg-beige">
                  <Image src={m.img} alt={m.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <h3 className="text-3xl">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{m.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — PROCESS */}
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

      {/* 9 — WHY CHOOSE */}
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

      {/* 10 — FEATURED CASE STUDY */}
      <section className="bg-charcoal text-white">
        <div className="grid lg:grid-cols-2">
          <div className="reveal-img relative aspect-[4/3] lg:aspect-auto lg:min-h-[44rem]">
            <Image src={caseStudy.hero} alt={caseStudy.gallery[0].alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-20 xl:px-28">
            <p className="eyebrow reveal mb-8 flex items-center gap-4 text-bronze-light"><span className="h-px w-10 bg-current" />Featured Case Study</p>
            <h2 className="reveal text-5xl leading-[1] md:text-6xl">{caseStudy.title}</h2>
            <dl className="reveal mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8 text-sm">
              {[["Type", caseStudy.type], ["Sector", caseStudy.categories.join(" · ")], ["Services", caseStudy.services.join(", ")]].map(([k, v]) => (
                <div key={k} className={k === "Services" ? "col-span-2" : ""}><dt className="eyebrow !text-[0.6rem] text-stone">{k}</dt><dd className="mt-2 text-beige">{v}</dd></div>
              ))}
            </dl>
            <p className="reveal mt-8 text-lg leading-relaxed text-beige/85">{caseStudy.approach}</p>
            <Link href={`/projects/${caseStudy.slug}`} className="text-link reveal mt-10 text-white">Read the Case Study <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* 11 — GALLERY BAND */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="container-x mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Gallery" title="In the Details" />
          <Link href="/projects" className="text-link reveal shrink-0">Browse the Portfolio <Arrow /></Link>
        </div>
        <div className="gallery-band flex w-max gap-4 md:gap-6" style={{ animationDuration: `${allPhotos.length * 4}s` }}>
          {band.map((g, i) => (
            <Link
              key={g.src + i}
              href={`/projects/${g.project.slug}`}
              className="group relative block h-56 w-[19rem] shrink-0 overflow-hidden bg-beige md:h-80 md:w-[28rem]"
              aria-hidden={i >= allPhotos.length}
              tabIndex={i >= allPhotos.length ? -1 : undefined}
            >
              <Image src={g.src} alt={i >= allPhotos.length ? "" : g.alt} fill sizes="(min-width:768px) 28rem, 19rem" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">{g.project.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 12 — TESTIMONIALS (renders only when real testimonials exist) */}
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

      {/* 13 — INSIGHTS */}
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

      {/* 14 — FINAL CTA */}
      <CTABanner image={photo("canopy-apartment")} />
    </>
  );
}
