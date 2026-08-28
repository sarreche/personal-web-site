import type { Metadata } from "next";
import type { BlogPost } from "./blog-types";
import { siteConfig } from "./site-config";
import type { Language } from "./types";

export function postMetadata(post: BlogPost, language: Language): Metadata {
  const base = language === "es" ? "/blog" : "/en/blog";
  const otherBase = language === "es" ? "/en/blog" : "/blog";
  const url = `${base}/${post.slug}`;
  const image = post.coverImage ?? siteConfig.socialImage;

  return {
    title: `${post.title} | Ing. Santiago Arreche`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: language === "es"
        ? { es: url, en: `${otherBase}/${post.slug}` }
        : { en: url, es: `${otherBase}/${post.slug}` },
    },
    openGraph: {
      type: "article",
      locale: language === "es" ? "es_UY" : "en_US",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      images: [{ url: image, alt: post.coverAlt ?? "Ing. Santiago Arreche" }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}
