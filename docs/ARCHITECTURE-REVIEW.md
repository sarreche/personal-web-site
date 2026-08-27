# Architecture review

## Assessment

The current architecture is appropriate for a small static landing: one App Router route, a root layout for metadata/styles, local assets, no backend and few dependencies. It is easy to deploy and has low operational complexity.

## Improvements to review before implementation

1. Split the large `app/page.tsx` into section components so visual changes are safer.
2. Move bilingual copy into typed locale/content modules to separate editorial work from JSX.
3. Reduce the client boundary: only language and mobile-menu state need client components; the rest can remain server-rendered.
4. Organize `globals.css` and `services.css` into tokens plus section styles to reduce selector coupling.
5. Add a working ESLint configuration and a minimal link/accessibility smoke test; the current `next lint` script is not reliable with this Next version.
6. Add `metadataBase`, canonical/Twitter metadata and a real Open Graph image once the production domain is known.
7. Centralize Calendly/social URLs in a typed config.

These are recommendations only; they are not implemented by this review.
