import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({ title: "Privacy Policy", description: "How Alfred Pederson collects, uses and protects the information you share with us.", path: "/privacy-policy" });

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 5, 2026"
      sections={[
        { h: "Overview", p: [`${site.name} ("we", "us") respects your privacy. This policy explains what information we collect through this website, how we use it and the choices you have.`] },
        { h: "Information we collect", p: ["When you submit a project enquiry or contact us, we collect the information you provide, which may include:", ["Name, email address and phone number", "Project location, type, property type, budget range and timeline", "Your project description and any files you upload (plans, photos, inspiration)"], "We also collect limited technical information, such as the page you came from and campaign parameters (UTM tags), to understand how visitors find us. If you accept analytics cookies, Google Analytics collects anonymized usage data."] },
        { h: "How we use your information", p: [["To respond to your enquiry and discuss your project", "To send a confirmation that we received your enquiry", "To improve our website and services", "To comply with legal obligations"], "We do not sell your personal information."] },
        { h: "How information is shared", p: ["Enquiry details are delivered to us by email through a secure email service provider. Analytics data is processed by Google if you consent. These providers process data on our behalf and are not permitted to use it for their own purposes."] },
        { h: "Retention", p: ["We keep enquiry information only for as long as needed to respond to you, manage any resulting project, and meet legal or accounting requirements."] },
        { h: "Your rights", p: ["Depending on where you live (for example, California under the CCPA/CPRA), you may have the right to access, correct or delete your personal information, or to opt out of certain processing. To make a request, email us at " + site.email + "."] },
        { h: "Security", p: ["This website uses HTTPS encryption. Enquiry forms include spam protection and input validation. No method of transmission over the internet is completely secure, but we take reasonable measures to protect your information."] },
        { h: "Contact", p: [`Questions about this policy? Contact ${site.name} at ${site.email} or ${site.phoneDisplay}.`] },
      ]}
    />
  );
}
