import type { MetadataRoute } from "next";

const baseUrl = "https://atlivingwatercabins.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/cabins",
    "/cabins/love",
    "/cabins/faith",
    "/cabins/hope",
    "/cabins/peace",
    "/amenities",
    "/local-activities",
    "/policies",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/cabins"
          ? 0.95
          : route.startsWith("/cabins/")
            ? 0.9
            : 0.8,
  }));
}