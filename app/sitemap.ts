import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cafe-planken.de";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
