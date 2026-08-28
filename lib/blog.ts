import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostSummary } from "./blog-types";
import type { Language } from "./types";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");
const PUBLIC_ROOT = path.join(process.cwd(), "public");
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(filePath: string, message: string): never {
  throw new Error(`[blog] ${path.relative(process.cwd(), filePath)}: ${message}`);
}

function readLanguage(language: Language): BlogPost[] {
  const directory = path.join(BLOG_ROOT, language);
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
  const seen = new Set<string>();

  return files.map((file) => {
    const filePath = path.join(directory, file);
    const slug = path.basename(file, ".md");
    const normalizedSlug = slug.toLowerCase();

    if (!SLUG_PATTERN.test(slug)) fail(filePath, "el nombre debe ser un slug en minúsculas separado por guiones");
    if (seen.has(normalizedSlug)) fail(filePath, `slug duplicado: ${slug}`);
    seen.add(normalizedSlug);

    const parsed = matter(fs.readFileSync(filePath, "utf8"));
    const { title, description, publishedAt, coverImage, coverAlt } = parsed.data;

    if (typeof title !== "string" || !title.trim()) fail(filePath, "falta title");
    if (typeof description !== "string" || !description.trim()) fail(filePath, "falta description");
    if (typeof publishedAt !== "string" || !DATE_PATTERN.test(publishedAt) || Number.isNaN(Date.parse(`${publishedAt}T00:00:00Z`))) {
      fail(filePath, "publishedAt debe usar el formato ISO YYYY-MM-DD");
    }
    if (!parsed.content.trim()) fail(filePath, "el artículo no puede estar vacío");

    const hasCoverImage = typeof coverImage === "string" && coverImage.trim().length > 0;
    const hasCoverAlt = typeof coverAlt === "string" && coverAlt.trim().length > 0;
    if (hasCoverImage !== hasCoverAlt) fail(filePath, "coverImage y coverAlt deben declararse juntos");

    if (hasCoverImage) {
      if (!coverImage.startsWith("/images/blog/") || coverImage.includes("..")) {
        fail(filePath, "coverImage debe apuntar a /images/blog/");
      }
      const imagePath = path.join(PUBLIC_ROOT, coverImage.slice(1));
      if (!fs.existsSync(imagePath)) fail(filePath, `no existe la portada ${coverImage}`);
    }

    const words = parsed.content.trim().split(/\s+/u).length;
    return {
      slug,
      language,
      title: title.trim(),
      description: description.trim(),
      publishedAt,
      readingMinutes: Math.max(1, Math.ceil(words / 200)),
      coverImage: hasCoverImage ? coverImage.trim() : undefined,
      coverAlt: hasCoverAlt ? coverAlt.trim() : undefined,
      content: parsed.content,
    };
  });
}

function loadBlog(): Record<Language, BlogPost[]> {
  const posts = { es: readLanguage("es"), en: readLanguage("en") };
  const esSlugs = new Set(posts.es.map(({ slug }) => slug));
  const enSlugs = new Set(posts.en.map(({ slug }) => slug));
  const missingEnglish = [...esSlugs].filter((slug) => !enSlugs.has(slug));
  const missingSpanish = [...enSlugs].filter((slug) => !esSlugs.has(slug));

  if (missingEnglish.length || missingSpanish.length) {
    const details = [
      missingEnglish.length ? `faltan traducciones EN: ${missingEnglish.join(", ")}` : "",
      missingSpanish.length ? `faltan traducciones ES: ${missingSpanish.join(", ")}` : "",
    ].filter(Boolean).join("; ");
    throw new Error(`[blog] cada artículo debe existir en ambos idiomas; ${details}`);
  }

  for (const language of ["es", "en"] as const) {
    posts[language].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }
  return posts;
}

export function getAllPosts(language: Language): BlogPost[] {
  return loadBlog()[language];
}

export function getPost(language: Language, slug: string): BlogPost | undefined {
  return getAllPosts(language).find((post) => post.slug === slug);
}

export function getPostSummaries(language: Language, limit?: number): BlogPostSummary[] {
  const summaries = getAllPosts(language).map(({ content: _content, ...summary }) => summary);
  return typeof limit === "number" ? summaries.slice(0, limit) : summaries;
}
