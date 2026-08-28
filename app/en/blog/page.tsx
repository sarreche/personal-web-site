import type { Metadata } from "next";
import { BlogIndex } from "../../../components/blog";
import { getPostSummaries } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ing. Santiago Arreche",
  description: "Ideas on software architecture, artificial intelligence, productivity, and technical leadership.",
  alternates: { canonical: "/en/blog", languages: { es: "/blog", en: "/en/blog" } },
};

export default function EnglishBlogPage() {
  return <BlogIndex language="en" posts={getPostSummaries("en")} />;
}
