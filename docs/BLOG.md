# Publishing blog articles

The blog is built from local Markdown. There is no CMS, database, draft state, or scheduled publishing: every valid article included in a deployment is public.

## Publish an article

1. Choose a lowercase, hyphen-separated slug, for example `ai-pods-nueva-unidad-de-trabajo`.
2. Copy [blog-post-template.md](blog-post-template.md) to both language directories using exactly the same filename:

   ```text
   content/blog/es/ai-pods-nueva-unidad-de-trabajo.md
   content/blog/en/ai-pods-nueva-unidad-de-trabajo.md
   ```

3. Translate the front matter and article body. Keep `publishedAt` equal when both versions represent the same publication.
4. Optionally place a cover under `public/images/blog/`. If `coverImage` is present, `coverAlt` is mandatory.
5. Run `npx tsc --noEmit` and `npm run build`.
6. Commit and push. Vercel will publish the article, add it to the indexes, home page, metadata, and sitemap.

## Required front matter

```yaml
---
title: "Article title"
description: "A concise summary used in cards and search results."
publishedAt: "2026-08-28"
coverImage: "/images/blog/example.jpg"
coverAlt: "Useful description of the cover image"
---
```

`coverImage` and `coverAlt` are optional as a pair. Remove both lines for a typographic card without a cover.

The build intentionally fails when metadata is invalid, an image is missing, a slug is malformed or duplicated, or one language does not have its matching translation.

## Supported content

Use standard Markdown headings, paragraphs, lists, links, blockquotes, inline code, code blocks, horizontal rules, and images. Raw HTML is not rendered. Start body sections at `##`: the page supplies the article's single `h1` from `title`.
