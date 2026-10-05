import { fullProcess } from "@/content/company";
import { photo } from "@/content/projects";
import { pageMeta } from "@/lib/seo";
import { CTABanner, FAQ, PageHero, SectionHeader } from "@/components/ui";

export const metadata = pageMeta({
  title: "Our Process",
  description: "From discovery to project completion — the ten-stage process Alfred Pederson uses to design and deliver residential and commercial spaces.",
  path: "/process",
  image: photo("woven-pavilion"),
});

const phases = [
  { name: "Understand", range: [0, 2] },
  { name: "Design", range: [3, 5] },
  { name: "Deliver", range: [6, 9] },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title={<>From Vision <em className="italic text-beige">to Reality.</em></>}
        intro="A structured, transparent journey in ten stages. You'll always know where your project stands, what comes next and which decisions are needed."
        image={photo("woven-pavilion")}
        imageAlt="Woven timber pavilion screen casting patterned shade"
      />

      {/* Phase overview progress bar */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-3 py-8">
          {phases.map((ph, i) => (
            <div key={ph.name} className="pr-4">
              <div className="h-px w-full bg-line">
                <div className="reveal h-px origin-left bg-bronze" style={{ ["--d" as string]: `${i * 200}ms` }} />
              </div>
              <p className="mt-4 text-xs tracking-[0.2em] text-stone-ink">PHASE 0{i + 1}</p>
              <p className="font-serif text-2xl md:text-3xl">{ph.name}</p>
              <p className="text-xs text-stone-ink">Stages {String(ph.range[0] + 1).padStart(2, "0")}–{String(ph.range[1] + 1).padStart(2, "0")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <ol className="relative">
            <span className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-line md:left-1/2" aria-hidden />
            {fullProcess.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li key={s.n} className="reveal relative grid grid-cols-[3rem_1fr] gap-6 pb-16 md:grid-cols-2 md:gap-20 md:pb-20">
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-charcoal bg-paper text-xs text-charcoal md:absolute md:left-1/2 md:top-0 md:h-14 md:w-14 md:-translate-x-1/2">
                    {s.n}
                  </span>
                  <div className={right ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                    <p className="eyebrow text-bronze">Stage {s.n} · {Math.round(((i + 1) / fullProcess.length) * 100)}%</p>
                    <h2 className="mt-3 text-4xl md:text-5xl">{s.title}</h2>
                    <p className={`mt-4 max-w-md leading-relaxed text-ink/75 ${right ? "" : "md:ml-auto"}`}>{s.text}</p>
                    <p className={`mt-5 inline-flex items-center gap-3 border border-line bg-white px-4 py-2 text-xs tracking-wide text-ink ${right ? "" : "md:flex-row-reverse"}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden />
                      Deliverable: {s.outcome}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-white py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="FAQ" title="Questions about working with us" /></div>
          <div className="lg:col-span-7 lg:col-start-6"><FAQ /></div>
        </div>
      </section>

      <CTABanner image={photo("glasshouse-loft")} title="Ready to Begin?" text="The first step is a conversation. Tell us about your project and we'll guide you through what comes next." />
    </>
  );
}
