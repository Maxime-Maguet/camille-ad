import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
