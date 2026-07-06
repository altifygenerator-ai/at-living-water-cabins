import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/cabins", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/cabins/love", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cabins/faith", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cabins/hope", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cabins/peace", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/amenities", priority: 0.82, changeFrequency: "monthly" as const },
    { path: "/local-activities", priority: 0.82, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.78, changeFrequency: "monthly" as const },
    { path: "/policies", priority: 0.62, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
