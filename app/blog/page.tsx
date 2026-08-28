import type { Metadata } from "next";
import { BlogIndex } from "../../components/blog";
import { getPostSummaries } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ing. Santiago Arreche",
  description: "Ideas sobre arquitectura de software, inteligencia artificial, productividad y liderazgo técnico.",
  alternates: { canonical: "/blog", languages: { es: "/blog", en: "/en/blog" } },
};

export default function SpanishBlogPage() {
  return <BlogIndex language="es" posts={getPostSummaries("es")} />;
}
