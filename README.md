# Ing. Santiago Arreche — Personal website

<p align="center"><strong>Software architecture · AI · Technical leadership</strong><br />A focused, bilingual professional landing page for turning complex technology decisions into clear action.</p>

<p align="center"><a href="http://localhost:3000">Local preview</a> · <a href="https://calendly.com/sarreche/sarreche">Book a call</a> · <a href="https://github.com/sarreche/personal-web-site">Repository</a></p>

## About the project

Personal/professional website for Ing. Santiago Arreche, software engineer, architect and technology consultant. It communicates 22+ years of experience across architecture, product delivery, process improvement, AI and technical leadership.

## Highlights

- Spanish/English switcher without flags
- CV-based About section and 2011 Master's thesis award
- Four services led by custom AI-first development
- Icon-led working method and recent career timeline
- YouTube feature for **El Rincón de Sarreche**
- LinkedIn, YouTube, Twitch and X links
- Bilingual contact form with Resend delivery and Calendly fallback
- Static bilingual Markdown blog with per-article SEO metadata
- Discreet bilingual blog support link to Buy Me a Coffee
- Responsive, semantic layout with keyboard focus states

## Stack

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white) ![License](https://img.shields.io/badge/license-private-lightgrey)

Next.js App Router · React · TypeScript · Tailwind-compatible PostCSS · Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check: `npx tsc --noEmit`, `npm run build`, then `npm run start`.

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` to enable contact delivery. Messages are addressed to the Gmail account associated with Resend. The testing sender `onboarding@resend.dev` avoids requiring a custom domain; replies use the visitor's email through the `reply_to` header.

## Project map

```text
app/                 Route, root layout and page styles
public/images/       Portrait and YouTube channel assets
content/blog/         Paired Spanish and English Markdown articles
docs/                Product spec, architecture review and source material
```

The functional source of truth is [docs/SPEC.md](docs/SPEC.md). Architecture recommendations are in [docs/ARCHITECTURE-REVIEW.md](docs/ARCHITECTURE-REVIEW.md). Git conventions are in [AGENTS.md](AGENTS.md).

Blog publishing requires one Markdown file per language and no component changes. See [docs/BLOG.md](docs/BLOG.md) for the exact workflow and template.

## Links

- [Calendly](https://calendly.com/sarreche/sarreche)
- [GitHub repository](https://github.com/sarreche/personal-web-site)
- [YouTube — El Rincón de Sarreche](https://www.youtube.com/@sarreche)
