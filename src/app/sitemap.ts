import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://amplixy.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://amplixy.com/portfolio",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://amplixy.com/conformite-ia",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://amplixy.com/mentions-legales",
      lastModified: new Date("2026-04-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
