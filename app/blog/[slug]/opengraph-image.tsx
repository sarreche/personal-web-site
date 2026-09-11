import { createBlogSocialImage, blogSocialImageSize } from "../../../lib/blog-social-image";
import { getPost } from "../../../lib/blog";

export const alt = "Vista previa de un artículo del blog de Santiago Arreche";
export const size = blogSocialImageSize;
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) throw new Error(`No se encontró el artículo ${slug}`);
  return createBlogSocialImage(post, "es");
}
