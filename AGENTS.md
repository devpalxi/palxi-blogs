<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Palxi blog/links site

This is a Next.js (App Router) site with two jobs: a personal links home page, and a company blog for Palxi (fintech products: harbr, Cruz, and NT Government projects).

## Commands

- `pnpm dev` — start the dev server (Turbopack, port 3000)
- `pnpm build` — production build
- `pnpm start` — run a production build
- No lint or test scripts are configured yet.

## Read `docs/` before writing blog content

Before creating or editing anything under a blog route, read the relevant markdown file in `docs/` first — it holds the editorial brief (angle, what to cover, summary) that the page's copy must follow. `docs/dineth-blog-plan.md` is the current plan: five posts to be built one at a time, each as its own hardcoded TSX page (not MDX/markdown-rendered), following the structure of whichever post was built first as a template. Update that plan file's entry (or add a note) once a post is written, rather than leaving it out of sync with what's live.

## Architecture

- `app/page.tsx` — the home page. It renders `app/_data/links.ts` through `app/_components/LinkPill.tsx`; add a new link by adding an entry to that data file, not by editing the page directly.
- `app/_data/links.ts` — single source of truth for links shown on the home page.
- `app/_components/LinkPill.tsx` — the shared pill/button used for every link entry (hover/press motion, double-bezel styling).
- `app/globals.css` — theme is light-only (no dark-mode branching). Colors are Tailwind v4 `@theme inline` tokens (`--color-ink`, `--color-muted`, `--color-surface`, `--color-hairline`), plus a fixed noise-texture overlay and a shared `animate-fade-up` entrance animation used across pages.
- Blog post pages live under `app/blog/<slug>/page.tsx` (hardcoded TSX per post, per an explicit decision — do not switch to MDX/CMS without checking with the user first).
