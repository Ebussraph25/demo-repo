import { LightHero } from "@/components/ui";

export function LegalPage({ eyebrow, title, updated, sections }: { eyebrow: string; title: string; updated: string; sections: { h: string; p: (string | string[])[] }[] }) {
  return (
    <>
      <LightHero eyebrow={eyebrow} title={title} intro={`Last updated ${updated}`} />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl text-base leading-[1.8] text-ink/85 md:text-lg">
          {sections.map((s) => (
            <div key={s.h} className="mb-12">
              <h2 className="mb-4 text-3xl text-charcoal md:text-4xl">{s.h}</h2>
              {s.p.map((x, i) =>
                Array.isArray(x) ? (
                  <ul key={i} className="mb-5 list-disc space-y-1 pl-6">{x.map((li) => <li key={li}>{li}</li>)}</ul>
                ) : (
                  <p key={i} className="mb-5">{x}</p>
                ),
              )}
            </div>
          ))}
          <p className="border-t border-line pt-8 text-sm text-stone-ink">
            This page is a general template and should be reviewed by a qualified attorney before launch to ensure it reflects your actual practices and applicable law.
          </p>
        </div>
      </section>
    </>
  );
}
