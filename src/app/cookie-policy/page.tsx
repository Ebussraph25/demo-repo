import { LegalPage } from "@/components/site/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Cookie Policy", description: "How the Alfred Pederson website uses cookies and similar technologies.", path: "/cookie-policy" });

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="October 5, 2026"
      sections={[
        { h: "What are cookies?", p: ["Cookies are small text files stored on your device that help websites function and understand how they are used."] },
        { h: "How we use them", p: [["Essential storage: remembers your cookie preference and first-visit campaign source. This does not identify you personally.", "Analytics cookies (optional): Google Analytics 4, used only if you click Accept, to measure page views and enquiry conversions."], "We do not use advertising cookies."] },
        { h: "Managing your choice", p: ["You can change your decision at any time by clearing this site's data in your browser settings; the cookie banner will appear again on your next visit. You can also block cookies entirely in your browser."] },
      ]}
    />
  );
}
