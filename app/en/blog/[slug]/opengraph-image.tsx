import { createBlogSocialImage, blogSocialImageSize } from "../../../../lib/blog-social-image";
import { getPost } from "../../../../lib/blog";

export const alt = "Preview of a Santiago Arreche blog article";
export const size = blogSocialImageSize;
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) throw new Error(`Article not found: ${slug}`);
  return createBlogSocialImage(post, "en");
}
