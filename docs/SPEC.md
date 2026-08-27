# Product specification — Ing. Santiago Arreche personal website

**Status:** current source of truth  
**Last updated:** 2026-08-27

## Purpose and audience

Present Ing. Santiago Arreche as a software engineer, architect and technology consultant. The site turns professional credibility into clear next steps: understand his expertise, explore services and book a conversation. The audience includes technology/business leaders, engineering teams and professionals interested in his research and YouTube work.

## Functional requirements

- Single-page landing at `/`, initially Spanish (`lang="es"`), with a clean ES/EN toggle and no flags.
- Sticky anchor navigation for About, Services, Experience, Labs, Videos and Social links; mobile navigation remains usable.
- Every booking CTA opens the canonical [Calendly URL](https://calendly.com/sarreche/sarreche) in a safe new tab.
- Required sections: hero; credentials; CV-based About; thesis award; services; working method; recent experience; GitHub Labs; YouTube; social links; final CTA and footer.
- Credentials: 22+ years, 2011 National Master's Thesis Competition first place and two publications on process improvement.
- Spanish service order: Desarrollos a medida IA-first; IA y automatización; Liderazgo y ejecución; Arquitectura de software.
- Working-method title: “De tu desafío a una solución con ingenio.” Spanish; provide an equivalent English title. Use four icon-led steps.
- Experience includes Santiago Arreche & Asociados, Howdy, Hozho Software and Topaz with period, role and impact statement.
- Labs loads up to five recently created, owned public repositories from GitHub in descending creation order, excluding forks and archived projects, and keeps a direct profile CTA available if the API cannot be reached.
- YouTube feature uses `public/images/youtube-channel.png` for “El Rincón de Sarreche”. Social links: LinkedIn, YouTube, Twitch and TikTok.

## Content and visual rules

- Keep the exact CV-derived English About copy unless explicitly revised; do not reintroduce Courses.
- Use “1.er premio nacional de tesis maestría” for the Spanish metric label.
- Minimal, premium, contemporary layout with blue/ink palette and soft pastel accents.
- Responsive mobile-first layout, no horizontal overflow, semantic headings, descriptive alt text, visible keyboard focus and labeled controls.
- Decorative icons use `aria-hidden`; meaningful controls have accessible names. Motion stays subtle.

## Technical constraints

- Next.js App Router, TypeScript, React and Tailwind-compatible CSS tooling.
- Keep the public route statically renderable where possible and avoid backend services for this scope.
- Do not commit generated output, dependencies, secrets or local caches.
- Merge checks: `npx tsc --noEmit` and `npm run build`.

## Source assets and out of scope

- CV/thesis: `docs/sobremi/`; portrait: `public/images/santiago-portrait.jpg`; channel image: `public/images/youtube-channel.png`.
- Out of scope: authentication, CMS, database, newsletter, payments, server-side booking integration and course pages.
