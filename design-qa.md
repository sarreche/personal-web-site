# Design QA — Shared blog social card

## Evidence

- Source visual truth: `C:\Users\Usuario\.codex\generated_images\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\exec-abc5ca03-d8b7-47ea-a79d-3fd456bba286.png`.
- Implemented asset: `public/images/blog-social-card.png`.
- Browser-rendered screenshot: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-social-card-browser.png`.
- Browser-rendered crop: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-social-card-browser-crop.png`.
- Combined comparison: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-social-card-comparison.png` (normalized source above, browser implementation below).
- State: direct shared-image URL plus Spanish and English article metadata.

## Viewport and density

- Source image: 1731 × 909 px.
- Final social-card asset: 1200 × 630 px, the intended Open Graph and X card dimensions.
- Browser screenshot: 1280 × 720 px at 1× density; the image rendered at its natural 1200 × 630 px dimensions at x=40, y=45.
- Comparison normalization: the source was resized to 1200 × 630 with high-quality bicubic resampling; the browser-rendered image was cropped at the same pixel dimensions.

## Findings

- No actionable P0, P1, or P2 differences were found.
- The browser-rendered asset matches the approved reference composition, copy, colors, texture, and illustrations.
- The selected headline appears without a dash: “Desafíos complejos” followed by “Soluciones claras”.

## Required fidelity surfaces

- Typography: the high-contrast editorial headline, supporting sans-serif line, and author signature retain the approved hierarchy and remain legible at card scale.
- Spacing and layout rhythm: headline, underline, descriptor, signature, and technical illustrations preserve the selected composition after normalization.
- Colors: off-white paper texture, navy text, and cobalt-blue accents match the reference without visible color shift.
- Image quality and asset fidelity: the final PNG is a real 1200 × 630 raster asset and renders without stretching, clipping, or placeholders.
- Copy: “Desafíos complejos”, “Soluciones claras”, “Software · IA · Decisiones técnicas”, and “Ing. Santiago Arreche” are present exactly as approved.

## Metadata and delivery checks

- Spanish article metadata resolves `og:image` and `twitter:image` to `https://sarreche.vercel.app/images/blog-social-card.png`.
- English article metadata resolves to the same shared image, so no per-article assets are required.
- Root site metadata also uses the shared card.
- The local asset endpoint returns HTTP 200 with `Content-Type: image/png`.

## Comparison history

- First implementation pass: the approved source and browser-rendered implementation matched at 1200 × 630; no visual correction pass was required.

## Implementation checklist

- [x] Approved card normalized to 1200 × 630.
- [x] One shared asset configured for every bilingual blog article.
- [x] Root Open Graph and X metadata configured.
- [x] Browser-rendered source comparison completed.
- [x] TypeScript and production build passed.

## Follow-up polish

- No P3 follow-up is required for this scope.

## Final result

final result: passed
