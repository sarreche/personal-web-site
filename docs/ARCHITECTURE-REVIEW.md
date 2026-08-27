# Architecture review

## Assessment

The current architecture is appropriate for a small static landing: one App Router route, a root layout for metadata/styles, local assets, no backend and few dependencies. It is easy to deploy and has low operational complexity.

## Implementation status

- Completed: split `app/page.tsx` into focused header, section and footer components in `components/site-sections.tsx`.
- Completed: move bilingual copy into the typed `data/site-content.ts` module.
- Partially completed: `app/page.tsx` now only coordinates language/menu state and page composition. All sections remain in the client tree because changing language updates the full page in place; moving the content sections to the server would require a route- or request-based locale.

## Remaining improvements

1. Move locale selection to routing or request state if server-rendered sections become a priority.
2. Organize `globals.css` and `services.css` into tokens plus section styles to reduce selector coupling.
3. Add a minimal link/accessibility smoke test.
4. Add a real Open Graph image once the production domain is confirmed.

ESLint, metadata and centralized external URLs are already implemented.
