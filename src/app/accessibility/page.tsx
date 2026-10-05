import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({ title: "Accessibility", description: "Alfred Pederson's commitment to an accessible website.", path: "/accessibility" });

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility Statement"
      updated="October 5, 2026"
      sections={[
        { h: "Our commitment", p: [`${site.name} is committed to making this website usable by as many people as possible. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA.`] },
        { h: "What we've done", p: [["Semantic headings and landmarks for screen readers", "Full keyboard navigation with visible focus states", "Text alternatives for meaningful images", "Labeled form fields with clear error messages", "Color contrast designed to meet AA guidelines", "Respect for reduced-motion preferences"]] },
        { h: "Feedback", p: [`If you encounter any difficulty using this site, please contact us at ${site.email} or ${site.phoneDisplay}. We will work to provide the information you need and improve the experience.`] },
      ]}
    />
  );
}
