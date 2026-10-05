import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/about", "/services", "/projects", "/process", "/insights", "/contact", "/privacy-policy", "/terms", "/accessibility", "/cookie-policy"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : p === "/contact" || p === "/projects" || p === "/services" ? 0.9 : 0.6,
  }));
  return [
    ...staticPages,
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7, images: [p.thumbnail] })),
    ...articles.map((a) => ({ url: `${site.url}/insights/${a.slug}`, lastModified: new Date(a.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
