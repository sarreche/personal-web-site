import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "../../../../components/blog";
import { getAllPosts, getPost, getPostSummaries } from "../../../../lib/blog";
import { postMetadata } from "../../../../lib/blog-metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts("en").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) return {};
  return postMetadata(post, "en");
}

export default async function EnglishPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();
  const recentPosts = getPostSummaries("en").filter((item) => item.slug !== slug).slice(0, 2);
  return <BlogArticle language="en" post={post} recentPosts={recentPosts} />;
}
