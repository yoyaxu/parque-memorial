import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const routes = [
    {
      path: "/",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/parque-memorial",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
