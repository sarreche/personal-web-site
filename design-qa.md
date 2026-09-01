# Design QA — Blog support link

## Evidence

- Source visual truth: `C:\Users\Usuario\AppData\Local\Temp\codex-clipboard-91513642-e4d9-4901-83fc-bf38fbdbf7bd.png`.
- Rendered implementation: `http://localhost:3000/blog`.
- Desktop screenshot: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-support-header-desktop.png`.
- Mobile screenshot: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-support-header-mobile.png`.
- Combined full-view comparison: `C:\Users\Usuario\.codex\visualizations\2026\08\30\01a053d4-dca7-76d1-bfe0-2c04c33c8da0\blog-support-header-comparison.png` (source above, implementation below).
- State: Spanish blog index at the top of the page; English blog index and a Spanish article were also checked.

## Viewport and density

- Source screenshot: 1642 × 142 px; source CSS viewport and density are not embedded in the supplied PNG.
- Desktop implementation: 1280 × 900 CSS viewport at device scale factor 1.25; the compared crop is 1642 × 142 px, matching the source pixel canvas.
- Mobile implementation: 500 × 900 CSS viewport at device scale factor 1; the captured header region is 500 × 140 px.
- Density normalization: the desktop artifacts were compared at identical output pixel dimensions. The mobile capture is additional responsive evidence and has no mobile source counterpart.

## Findings

- No actionable P0, P1, or P2 differences were found for the requested change.
- The new support action remains visually subordinate to the booking CTA: it uses compact text, no filled background or border, the existing muted navigation color, and the existing blue accent only for the coffee icon and hover state.
- The wider horizontal framing difference visible between the supplied screenshot and the current local header comes from the project's existing constrained navigation frame; this change does not alter that frame.

## Required fidelity surfaces

- Fonts and typography: the support label inherits the existing Inter/system stack, uses the same compact navigation scale, and does not wrap or truncate in either language.
- Spacing and layout rhythm: the desktop link uses the established navigation gap and aligns vertically with “Inicio” and “Blog”. At the 980 px breakpoint it moves to the action group; at 680 px it becomes a 36 × 36 icon control. No horizontal overflow was observed.
- Colors and visual tokens: muted navy text and the existing blue token preserve the source header palette and keep the primary CTA dominant.
- Image quality and asset fidelity: the header has no raster imagery. The coffee and external-link icons use the project's existing `lucide-react` icon system; no placeholder, emoji, CSS drawing, or custom SVG was introduced.
- Copy and content: Spanish renders “Apoyar el blog”; English renders “Support the blog”. Both point to `https://buymeacoffee.com/sarreche` and open in a new tab.

## Focused-region comparison

The header is itself the complete requested region, so the combined full-width header comparison is also the focused comparison. The support link, navigation alignment, language selector, and primary CTA remain readable at that scale. The separate mobile capture verifies the compact icon state.

## Interaction and accessibility checks

- `/blog`, `/en/blog`, and `/blog/como-funcionan-realmente-los-llm` expose the shared support link with the expected URL.
- Desktop and mobile variants are real links with `target="_blank"` and `rel="noreferrer"`.
- The icon-only mobile variant has the localized accessible label “Apoyar el blog”.
- Existing keyboard focus styling applies to the new anchor.
- Browser console checked after navigation through the tested routes: no errors.

## Comparison history

- First visual pass: the desktop support link rendered in the intended secondary position and the mobile layout collapsed it to an icon without overflow. No P0/P1/P2 fix iteration was required.

## Implementation checklist

- [x] Shared blog header updated once for index and article routes.
- [x] Spanish and English labels added.
- [x] Desktop and mobile responsive states verified.
- [x] External destination and accessibility attributes verified.
- [x] TypeScript and production build passed.

## Follow-up polish

- No P3 follow-up is required for this scope.

## Final result

final result: passed
