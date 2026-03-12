# Government Shutdown

Static content site for `government-shutdown.com`, built with Astro and designed for event-driven SEO around federal funding deadlines, agency impacts, and worker guidance.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

- `src/pages/` static routes and generated article pages
- `src/data/` structured content for the homepage and article guides
- `src/components/` reusable UI sections
- `docs/` strategy and information-architecture notes

## Deployment

Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `dist`

Site URL is configured as `https://government-shutdown.com` in `astro.config.mjs`.
