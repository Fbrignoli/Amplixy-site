import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amplixy.com",
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://amplixy.com/mentions-legales",
      lastModified: new Date("2026-04-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
