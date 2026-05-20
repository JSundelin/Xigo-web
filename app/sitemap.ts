import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { getAllServiceSlugs } from "./lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/tjanster",
    "/case",
    "/om",
    "/kontakt",
    "/policy",
    "/cookies",
    "/tillganglighet",
  ];

  const serviceRoutes = getAllServiceSlugs().map((slug) => `/tjanster/${slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/tjanster") ? 0.8 : 0.6,
  }));
}
