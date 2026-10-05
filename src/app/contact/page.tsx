import { mailHref, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { projectTypes } from "@/lib/enquiry";
import { FAQ, JsonLd } from "@/components/ui";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = pageMeta({
  title: "Contact — Start Your Project",
  description: "Tell us about your project, property and vision. Call or email Alfred Pederson, or submit a project enquiry.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { type, sent } = await searchParams;
  const preset = typeof type === "string" && (projectTypes as readonly string[]).includes(type) ? type : undefined;

  const channels = [
    { label: "Phone", value: site.phoneDisplay, href: site.phoneHref, note: "Speak With Alfred" },
    { label: "Email", value: site.email, href: mailHref, note: "We reply to every enquiry" },
  ];

  return (
    <>
      <section className="blueprint border-b border-line pb-16 pt-40 md:pt-48">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-4 text-bronze"><span className="h-px w-10 bg-current" />Start Your Project</p>
            <h1 className="text-5xl leading-[0.98] sm:text-6xl lg:text-[5.5rem]">Let&apos;s Discuss <em className="italic text-stone-ink">Your Project.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
              Tell us about your project, property and vision. We&apos;ll review the information and discuss how Alfred Pederson can help bring your ideas to life.
            </p>
          </div>
          <ul className="space-y-6 self-end lg:col-span-4 lg:col-start-9">
            {channels.map((c) => (
              <li key={c.label} className="border-t border-charcoal/15 pt-5">
                <p className="eyebrow text-stone-ink">{c.label}</p>
                <a href={c.href} className="mt-2 block break-all font-serif text-2xl hover:text-bronze md:text-3xl">
                  {c.value}
                </a>
                <p className="mt-1 text-xs text-stone-ink">{c.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl">Project Enquiry</h2>
              <p className="mt-4 leading-relaxed text-ink/75">The more you share, the better prepared we&apos;ll be for our first conversation. Only fields marked * are required.</p>
              <ol className="mt-10 space-y-6 border-l border-line pl-6 text-sm">
                <li><p className="font-semibold">1. Submit your enquiry</p><p className="mt-1 text-ink/70">You&apos;ll receive an email confirmation right away.</p></li>
                <li><p className="font-semibold">2. We review the details</p><p className="mt-1 text-ink/70">Your project information is reviewed carefully.</p></li>
                <li><p className="font-semibold">3. Initial consultation</p><p className="mt-1 text-ink/70">We get in touch to discuss your goals and next steps.</p></li>
              </ol>
            </div>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm defaultProjectType={preset} sent={sent === "1"} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><h2 className="text-4xl md:text-5xl">Before you get in touch</h2></div>
          <div className="lg:col-span-7 lg:col-start-6"><FAQ /></div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Alfred Pederson",
          url: `${site.url}/contact`,
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
