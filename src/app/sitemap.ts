import type { MetadataRoute } from "next";
import { siteConfig, articles } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    {
      path: "/",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/parque-memorial",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  const articleRoutes = articles.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(a.publishedAt),
  }));

  return [...staticRoutes, ...articleRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
