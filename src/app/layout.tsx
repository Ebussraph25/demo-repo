import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RevealObserver } from "@/components/site/RevealObserver";
import { Analytics } from "@/components/site/Analytics";
import { JsonLd } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alfred Pederson | Architecture, Building & Interior Design",
    template: "%s | Alfred Pederson",
  },
  description: site.description,
  keywords: [
    "interior designer", "residential interior designer", "home renovation services", "luxury interior designer",
    "architectural design services", "residential design company", "modern home designer", "home remodeling services",
    "commercial interior design", "residential architecture", "kitchen renovation", "bathroom remodeling",
    "interior design consultation", "custom home design",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: "Alfred Pederson | Architecture, Building & Interior Design",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "HomeAndConstructionBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/apple-icon.png`,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  slogan: site.promise,
  telephone: "+1-213-478-5730",
  email: site.email,
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: [{ "@type": "ContactPoint", telephone: "+1-213-478-5730", email: site.email, contactType: "customer service", areaServed: "US", availableLanguage: "English" }],
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className="antialiased">
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only z-[100] bg-charcoal px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
