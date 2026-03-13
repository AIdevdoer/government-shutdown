# Government Shutdown

Static bilingual content site for `government-shutdown.com`, built with Astro and designed for event-driven SEO around federal funding deadlines, agency impacts, and worker guidance.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Project structure

- `src/pages/` static routes and generated article pages
- `src/data/` localized content for the homepage, article guides, and policy pages
- `src/components/` reusable UI sections
- `docs/` strategy and information-architecture notes

## Languages

- English routes live at `/`
- Chinese routes live at `/zh/`

## Deployment

Cloudflare Pages build settings:

- Build command: `pnpm build`
- Build output directory: `dist`

Site URL is configured as `https://government-shutdown.com` in `astro.config.mjs`.
