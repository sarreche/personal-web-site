import type { MetadataRoute } from "next";
import { getPostSummaries } from "../lib/blog";
import { siteConfig } from "../lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/en/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/openclaw`, priority: 0.4 },
    { url: `${siteConfig.url}/openclaw/privacidad`, priority: 0.3 },
  ];
  const spanish = getPostSummaries("es").map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: post.publishedAt, priority: 0.7 }));
  const english = getPostSummaries("en").map((post) => ({ url: `${siteConfig.url}/en/blog/${post.slug}`, lastModified: post.publishedAt, priority: 0.7 }));
  return [...staticRoutes, ...spanish, ...english];
}
