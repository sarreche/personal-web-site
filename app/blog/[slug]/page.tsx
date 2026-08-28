import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "../../../components/blog";
import { getAllPosts, getPost, getPostSummaries } from "../../../lib/blog";
import { postMetadata } from "../../../lib/blog-metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts("es").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) return {};
  return postMetadata(post, "es");
}

export default async function SpanishPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) notFound();
  const recentPosts = getPostSummaries("es").filter((item) => item.slug !== slug).slice(0, 2);
  return <BlogArticle language="es" post={post} recentPosts={recentPosts} />;
}
