import type { MetadataRoute } from "next";
import { siteConfig, articles, products } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/planes", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/obituarios", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/tienda", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/parque-memorial", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const articleRoutes = articles.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(a.publishedAt),
  }));

  const productRoutes = products.map((p) => ({
    path: `/tienda/${p.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  return [...staticRoutes, ...articleRoutes, ...productRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
