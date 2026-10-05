import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({ title: "Terms of Use", description: "Terms governing your use of the Alfred Pederson website.", path: "/terms" });

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="October 5, 2026"
      sections={[
        { h: "Acceptance", p: ["By using this website you agree to these terms. If you do not agree, please do not use the site."] },
        { h: "Website content", p: ["Content on this site is provided for general information about our services. It does not constitute professional advice for any specific project. Project images may include conceptual work and representative photography."] },
        { h: "Intellectual property", p: [`All designs, text, graphics and the ${site.name} name and logo are owned by or licensed to ${site.name} and may not be reproduced without written permission.`] },
        { h: "Enquiries", p: ["Submitting an enquiry does not create a contract or client relationship. Any engagement will be governed by a separate written agreement."] },
        { h: "Limitation of liability", p: ["The website is provided \"as is\". To the fullest extent permitted by law, we are not liable for any loss arising from your use of the site."] },
        { h: "Contact", p: [`Questions about these terms can be sent to ${site.email}.`] },
      ]}
    />
  );
}
