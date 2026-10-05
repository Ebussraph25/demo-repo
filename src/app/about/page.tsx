import Image from "next/image";
import { photo } from "@/content/projects";
import { brandPromise, values } from "@/content/company";
import { pageMeta } from "@/lib/seo";
import { CTABanner, PageHero, SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "About",
  description: "Alfred Pederson is a design-led architecture, building and interior design studio creating functional, refined and timeless spaces.",
  path: "/about",
  image: photo("executive-headquarters", 3),
});

const philosophy = [
  { k: "Design", v: "Proportion, light and composition guide every decision." },
  { k: "Function", v: "Spaces must work effortlessly every single day." },
  { k: "Lifestyle", v: "We design around how you actually live and work." },
  { k: "Materials", v: "Honest, durable materials that age gracefully." },
  { k: "Architecture", v: "Buildings that respond to site, climate and context." },
  { k: "Human Experience", v: "How a space feels matters as much as how it looks." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Alfred Pederson"
        title={<>Designing Spaces <em className="italic text-beige">With Purpose.</em></>}
        intro="A design-led building and interior specialist creating functional, refined and timeless spaces tailored to how clients live, work and experience their environments."
        image={photo("executive-headquarters", 3)}
        imageAlt="Boardroom with textured stone-look walls and leather chairs"
      />

      {/* Story */}
      <section className="py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Our Story" title="Where design meets delivery." />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="reveal">Alfred Pederson was founded on a simple belief: beautiful design is only valuable when it can be built well and lived in easily. Too often, design and construction happen in separate worlds. We bring them together.</p>
            <p className="reveal">Our work spans new homes, renovations, interiors and commercial spaces. Whatever the scale, we start with the people who will use the space, then guide every decision — from the plan to the door handle — with the same care.</p>
            <p className="reveal">Clients choose us for our calm, structured process, our attention to detail and our commitment to results that stay relevant for years, not seasons.</p>
          </div>
        </div>
        <div className="container-x mt-20 grid gap-6 md:grid-cols-3">
          {[photo("courtyard-house"), photo("treehouse-early-learning"), photo("color-studies-residence", 2)].map((id, i) => (
            <div key={id} className={`reveal-img relative aspect-[3/4] bg-beige ${i === 1 ? "md:mt-20" : ""}`} style={{ ["--d" as string]: `${i * 120}ms` }}>
              <Image src={id} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24 md:py-36">
        <div className="container-x">
          <SectionHeader eyebrow="Our Philosophy" title="Six ideas that shape every project." className="mb-16 max-w-3xl" />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <div key={p.k} className="reveal bg-white p-10" style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}>
                <p className="font-serif text-3xl">{p.k}</p>
                <p className="mt-4 leading-relaxed text-ink/70">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden bg-charcoal py-24 text-white md:py-36">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-25" aria-hidden />
        <div className="container-x relative grid gap-16 md:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow mb-6 text-bronze-light">Our Mission</p>
            <p className="font-serif text-4xl leading-tight md:text-5xl">To create thoughtful, functional and refined environments that improve the way people live and work.</p>
          </div>
          <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
            <p className="eyebrow mb-6 text-bronze-light">Our Vision</p>
            <p className="font-serif text-4xl leading-tight md:text-5xl">To deliver design solutions recognized for creativity, functionality, craftsmanship and enduring quality.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="Our Values" title="What we stand for." /></div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {values.map((v, i) => (
              <li key={v} className="reveal flex items-baseline gap-8 border-b border-line py-6">
                <span className="text-xs tracking-[0.2em] text-bronze">0{i + 1}</span>
                <span className="font-serif text-4xl md:text-5xl">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Promise */}
      <section className="border-t border-line bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="Our Promise" title="Thoughtful Spaces. Beautifully Built." align="center" className="mb-16" />
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-5">
            {brandPromise.map((b, i) => (
              <div key={b.title} className="reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <p className="font-serif text-3xl">{b.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner image={photo("city-workplace", 2)} />
    </>
  );
}
