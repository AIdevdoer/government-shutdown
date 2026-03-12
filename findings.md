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

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Build a static, content-focused site | Best fit for SEO, Cloudflare Pages, and event-driven publishing |
| Prefer a framework that outputs static files cleanly | Simplifies Cloudflare build settings and future scaling |
| Use Astro instead of hand-written static HTML | Keeps multi-page SEO structure maintainable while still emitting static output |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| The project had no git metadata | Plan includes git initialization before publishing |
| Pages Git integration may not be fully exposed in CLI | Be prepared to use the Cloudflare dashboard via browser automation |
| Chrome DevTools MCP could not attach a fresh page for local review | Relied on successful builds and generated output validation before continuing |

## Resources
- Local strategy docs: `docs/site-strategy.md`, `docs/information-architecture.md`
- Cloudflare Pages references: `/Users/jackyzhu/.codex/skills/cloudflare-deploy/references/pages/README.md`
- Cloudflare Pages Git integration docs: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Git integration overview: https://developers.cloudflare.com/pages/configuration/git-integration/

## Visual/Browser Findings
- Cloudflare Pages Git integration docs state the normal flow is `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`.
- Cloudflare API docs show Pages projects can include a GitHub `source` config with fields such as `repo_name`, `repo_id`, and branch controls, but prior dashboard authorization is still required.
- Local browser automation was blocked by an existing MCP browser session, so visual QA needs a later retry if screenshot-based review is required.
