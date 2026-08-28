import type { Language } from "./types";

export type BlogPostSummary = {
  slug: string;
  language: Language;
  title: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  coverImage?: string;
  coverAlt?: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
};
