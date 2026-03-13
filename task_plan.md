# Task Plan: Build, Publish, Deploy, and Refine Government Shutdown Site

## Goal
Build a production-ready content site for `government-shutdown.com`, publish it to GitHub, deploy it through Cloudflare Pages, and keep all reader-facing copy written for end users instead of internal SEO or site-strategy audiences.

## Current Phase
Phase 11

## Phases

### Phase 1: Requirements & Discovery
- [x] Understand user intent
- [x] Identify constraints and requirements
- [x] Document findings in findings.md
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Define technical approach
- [x] Create project structure
- [x] Document decisions with rationale
- **Status:** complete

### Phase 3: Implementation
- [x] Build the site UI and content structure
- [x] Add SEO, metadata, and policy pages
- [x] Prepare deployment configuration
- **Status:** complete

### Phase 4: Testing & Verification
- [x] Install dependencies and build successfully
- [x] Review the rendered site locally
- [x] Fix issues found during verification
- **Status:** complete

### Phase 5: Publishing & Deployment
- [x] Initialize git and create GitHub repository
- [x] Push repository to GitHub
- [x] Connect repository to Cloudflare Pages and verify deployment
- **Status:** complete

### Phase 6: Delivery
- [ ] Review output files and deployment status
- [ ] Summarize next steps and risks
- [ ] Deliver to user
- **Status:** in_progress

### Phase 7: Reader-Facing Content Rewrite
- [ ] Audit homepage, article pages, and shared copy for internal/SEO language
- [ ] Rewrite English copy to speak directly to readers
- [ ] Rewrite Chinese copy to match the same reader-facing intent
- [ ] Rebuild and verify the resulting routes
- **Status:** in_progress

### Phase 8: Historical Timeline Expansion
- [x] Add verified U.S. shutdown-history data with reader-facing context
- [x] Build dedicated English and Chinese history pages
- [x] Bring the historical timeline into the homepage hero section
- [x] Rebuild, publish, and verify the deployed result
- **Status:** complete

### Phase 9: Timeline Rail Redesign
- [x] Convert the homepage history strip into a year-rail layout
- [x] Convert the full history page into a vertical rail with alternating stops
- [x] Rebuild and visually verify the redesigned timeline sections
- [x] Publish and verify the Git-backed deployment
- **Status:** complete

### Phase 10: Interactive Horizontal Rail
- [x] Make the horizontal history rail draggable
- [x] Collapse detailed stop information behind click-to-open panels
- [x] Rebuild and visually verify the new interaction model
- [x] Publish and verify the Git-backed deployment
- **Status:** complete

### Phase 11: Keyword Expansion Pages
- [x] Identify the highest-value explainer and comparison queries to turn into pages
- [x] Add mirrored English and Chinese article pages for those query intents
- [x] Rewire homepage featured guides and article relationships to surface the new pages
- [ ] Publish and verify the Git-backed deployment
- **Status:** in_progress

## Key Questions
1. What stack gives fast SEO-friendly delivery and simple Cloudflare Pages deployment?
2. Can Cloudflare Pages Git integration be completed from CLI, or does it require dashboard flow?
3. What minimum page set is needed for a credible launch aligned with the strategy docs?

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use `planning-with-files`, `frontend-design`, and `cloudflare-deploy` skills | Task spans planning, frontend implementation, and Cloudflare deployment |
| Use GitHub CLI and Wrangler auth already present in the environment | Reduces user handoff and allows end-to-end execution |
| Build the site with Astro static output | Good fit for content-heavy SEO pages and simple Cloudflare Pages deployment |
| Standardize on `pnpm` with a committed `pnpm-lock.yaml` | Keeps local and CI dependency resolution aligned while matching the requested package manager |
| Create the Pages project through the Cloudflare API with GitHub source metadata | Wrangler CLI alone does not expose the full Git-backed project setup flow |
| Rewrite reader-facing copy in a direct service voice | Homepage and guide pages should answer anxious visitors, not describe site architecture or SEO strategy |
| Put a long-view shutdown timeline in the homepage hero and on a dedicated page | Global readers need historical context, not only current U.S. funding-risk guidance |
| Render the history UI as a rail instead of a plain card list | The chronology reads faster and has more visual impact when it feels like a dated route with distinct stops |
| Keep the horizontal rail compact and reveal detail on demand | A crowded hero loses the rail metaphor; users should browse the line first and only expand the stop they choose |
| Expand mechanism, impact, comparison, and CR keywords into dedicated inner pages | These are closer to how readers actually search than a site architecture organized only by audience segment |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| `git status` failed because the directory was not a git repository | 1 | Deferred git commands until repository initialization |
| Chrome DevTools MCP browser session could not be opened cleanly for local preview | 1 | Continued with successful static builds and HTML output validation; may need another browser attempt later |
| Cloudflare DNS records API returned `403 Forbidden` | 1 | Pages project and custom domains were created, but apex and `www` DNS records could not be written with the current OAuth token |

## Notes
- Cloudflare Pages Git integration appears to be dashboard-driven; verify if UI automation is needed.
- The site should favor static generation, SEO structure, and policy/disclosure pages from day one.
- GitHub repo is live at `https://github.com/AIdevdoer/government-shutdown`.
- Cloudflare Pages deployment is live at `https://government-shutdown.pages.dev`.
- Custom domains were attached to the Pages project but remain pending because the required CNAME DNS records could not be written by the current token.
- The site now serves English on `/` and Chinese on `/zh/`, with localized article and policy pages plus language switching and `hreflang` links.
- The homepage and several guide pages still contain internal strategy phrasing such as “this page should” or SEO-oriented explanations, so they need a full reader-facing rewrite.
- The history surfaces now need to preserve the rail metaphor on mobile without breaking readability, especially for long Chinese labels and year ranges.
- The next content expansion should prioritize mechanism-style evergreen queries like “why does the government shut down,” “what happens during a shutdown,” “shutdown vs debt ceiling,” and “what is a continuing resolution.”
