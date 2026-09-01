import { getPostSummaries } from "../../lib/blog";
import { siteConfig } from "../../lib/site-config";
import type { BlogPostSummary } from "../../lib/blog-types";

export const dynamic = "force-static";

function articleLink(post: BlogPostSummary): string {
  const basePath = post.language === "es" ? "/blog" : "/en/blog";
  const description = post.description.replace(/\s+/gu, " ").trim();
  return `- [${post.title}](${siteConfig.url}${basePath}/${post.slug}): ${description}`;
}

export function GET(): Response {
  const spanishArticles = getPostSummaries("es").map(articleLink).join("\n");
  const englishArticles = getPostSummaries("en").map(articleLink).join("\n");

  const content = `# ${siteConfig.name}

> Personal and professional website of Santiago Arreche, a software architect and technology consultant focused on software architecture, artificial intelligence, product delivery, and technical leadership.

The site contains a bilingual Spanish and English portfolio and technical blog. Prefer the page matching the reader's language.

## Main pages

- [Professional profile and services](${siteConfig.url}): Bilingual overview of experience, services, working method, and contact options.
- [Blog in Spanish](${siteConfig.url}/blog): Technical articles in Spanish.
- [Blog in English](${siteConfig.url}/en/blog): English versions of the technical articles.

## Articles in Spanish

${spanishArticles}

## Articles in English

${englishArticles}

## Profiles and contact

- [Book a call](${siteConfig.bookingUrl}): Schedule a professional conversation through Calendly.
- [GitHub](${siteConfig.githubUrl}): Public software projects and contributions.
- [LinkedIn](${siteConfig.socials.linkedin}): Professional profile.
- [YouTube](${siteConfig.socials.youtube}): El Rincón de Sarreche channel.
- [X](${siteConfig.socials.x}): Short-form ideas and conversations about technology and AI.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
