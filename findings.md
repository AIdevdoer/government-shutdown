# Findings & Decisions

## Requirements
- Build the actual website in this project based on the previously written strategy and information architecture.
- Push the project to a newly created GitHub repository.
- Deploy the site to Cloudflare using the GitHub-backed flow.
- Keep the site aligned with an event-driven SEO strategy around `government shutdown`.

## Research Findings
- The repository started as a plain directory with only two markdown strategy documents in `docs/`.
- `gh auth status` shows GitHub CLI is logged in as `AIdevdoer`.
- `wrangler whoami` shows Cloudflare auth is available for account `a243be57aadc5a632c9f877c0b12cabb`.
- Cloudflare Pages supports Git-based deploys, but official docs indicate project creation and Git connection are driven through the dashboard flow.
- Official Cloudflare docs explicitly warn that Direct Upload projects cannot be converted to Git integration later, so the project should be created as Git-integrated first if possible.
- Cloudflare API docs expose `pages.projects.create` with a `source` field for Git-backed projects, but the repository and account must already be authorized on the Cloudflare Pages dashboard.
- Astro installed and the site builds successfully to `dist/` with 18 generated routes plus sitemap output.
- Git-backed Pages project creation via Cloudflare API succeeded for `government-shutdown`, and the first `github:push` production deployment completed successfully.
- The Cloudflare zone for `government-shutdown.com` exists and is active in the same account.
- Custom domains were added to the Pages project, but domain validation reports `CNAME record not set`.
- The current Wrangler OAuth token can manage Pages projects but cannot write zone DNS records, so custom-domain activation is blocked at the DNS layer.
- The site has been upgraded to a bilingual structure: English remains at `/`, Chinese mirrors the site under `/zh/`.
- The bilingual implementation includes localized homepage content, 12 mirrored article pages, mirrored policy pages, language switching, and alternate-language metadata.
- A full-text audit shows that many homepage and article strings were written from an operator/SEO perspective rather than a reader perspective.
- The strongest offenders are `src/data/home.ts`, `src/data/articles.ts`, `src/data/articles.zh.ts`, and the shared article note in `src/data/locales.ts`.
- The policy pages are mostly acceptable because they explain the site itself, but the primary content routes need a user-facing rewrite.
- A stronger homepage frame for global readers is to pair current-status guidance with a long-view historical timeline, rather than treating the homepage only as a live U.S. utility page.
- The CRS shutdown report provides a workable backbone for a historical timeline: it notes 21 funding gaps since FY1977 and explains that the 1980 and 1981 Civiletti opinions changed how agencies handled lapses in appropriations.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Build a static, content-focused site | Best fit for SEO, Cloudflare Pages, and event-driven publishing |
| Prefer a framework that outputs static files cleanly | Simplifies Cloudflare build settings and future scaling |
| Use Astro instead of hand-written static HTML | Keeps multi-page SEO structure maintainable while still emitting static output |
| Trigger the first Pages deployment with an empty commit after project creation | Ensures Cloudflare receives a fresh Git push event after the Git-backed project is attached |
| Keep English on the root path and place Chinese under `/zh/` | Preserves English SEO landing paths while making bilingual expansion straightforward |
| Rewrite content in a service-first voice | Reader-facing pages should explain impact and next steps directly instead of discussing traffic, architecture, or monetization strategy |
| Standardize the repo on `pnpm` | Matches the requested package manager and keeps dependency resolution consistent through `pnpm-lock.yaml` |
| Use a dedicated `/shutdown-history/` route plus a homepage hero timeline strip | Gives globally curious readers a clear entry point while preserving the utility-focused current watch page |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| The project had no git metadata | Plan includes git initialization before publishing |
| Pages Git integration may not be fully exposed in CLI | Be prepared to use the Cloudflare dashboard via browser automation |
| Chrome DevTools MCP could not attach a fresh page for local review | Relied on successful builds and generated output validation before continuing |
| DNS record creation for the custom domain failed with the available OAuth token | Left the Pages site live on `pages.dev` and documented the pending manual DNS step |

## Resources
- Local strategy docs: `docs/site-strategy.md`, `docs/information-architecture.md`
- Cloudflare Pages references: `/Users/jackyzhu/.codex/skills/cloudflare-deploy/references/pages/README.md`
- Cloudflare Pages Git integration docs: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Git integration overview: https://developers.cloudflare.com/pages/configuration/git-integration/
- GitHub repository: https://github.com/AIdevdoer/government-shutdown
- Live Pages URL: https://government-shutdown.pages.dev
- Chinese homepage: https://government-shutdown.pages.dev/zh/

## Visual/Browser Findings
- Cloudflare Pages Git integration docs state the normal flow is `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`.
- Cloudflare API docs show Pages projects can include a GitHub `source` config with fields such as `repo_name`, `repo_id`, and branch controls, but prior dashboard authorization is still required.
- Local browser automation was blocked by an existing MCP browser session, so visual QA needs a later retry if screenshot-based review is required.
- Cloudflare dashboard in the isolated browser required an interactive login, so dashboard-based DNS edits could not be completed headlessly.

## Copy Audit Findings
- Homepage copy currently includes phrases like “search spike,” “coverage architecture,” and “search intent,” which frame the page as a strategy asset instead of a public information resource.
- Several English article titles, kickers, FAQs, and action boxes explicitly mention “SEO,” “the site,” “the page should,” or “future affiliate placement.”
- The Chinese article set mirrors the same issue, including phrases about “SEO 价值,” “站点核心,” and “事件流量.”
- Shared article-side note copy currently explains how the site writes pages instead of giving the reader a practical orientation cue.

## History Timeline Findings
- For a global audience, the homepage benefits from explaining that U.S. shutdowns are recurring funding gaps with a long timeline, not just a one-off headline event.
- The most recognizable modern milestones are 1995-96, 2013, 2018-19, and the FY2026 lapse, but the full chronology reaches back to 1976.
- The history page should distinguish between early funding gaps and the more recognizable modern shutdown pattern, rather than implying the politics and operational effects were identical across every era.
- The first history implementation was informative but still read visually like a set of cards; the topic benefits more from a rail metaphor because it emphasizes continuity, intervals, and memorable stops.
- A horizontal rail works best in the homepage hero where only highlights are shown, while the full chronology reads better as a vertical center-spine rail with alternating stops.
- Once the rail existed, always-open cards still made the hero feel overloaded; the horizontal version works better when the rail itself stays compact and detail moves into a separate active panel.
- Desktop users benefit from mouse-drag scrolling on the horizontal rail, while mobile users already get native swipe behavior from the same overflow container.
