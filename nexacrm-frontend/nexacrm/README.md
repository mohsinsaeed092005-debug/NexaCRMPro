# NexaCRM — Frontend UI

A premium SaaS CRM dashboard UI built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. This is a frontend-only build — no backend, auth, or database wired up yet — meant as a solid foundation to hand off to Codex/Cursor for backend integration.

## Stack

- Next.js 15 · App Router · Turbopack
- TypeScript
- Tailwind CSS v4 (CSS-variable design tokens, no `tailwind.config.js` needed)
- lucide-react (icons)
- clsx + tailwind-merge (`cn()` helper)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/login`.

## Folder structure

```
app/
  (auth)/                  route group: split-screen auth shell
    layout.tsx
    login/page.tsx
    signup/page.tsx
  (dashboard)/              route group: sidebar + navbar app shell
    layout.tsx
    dashboard/page.tsx
    clients/page.tsx
    leads/page.tsx
    tasks/page.tsx
    settings/page.tsx
  layout.tsx                root layout, fonts, metadata
  page.tsx                  redirects "/" -> "/login"
  globals.css                design tokens (colors, radii, shadows, keyframes)

components/
  ui/                       Button, Card, Badge, Avatar, Field/Input, Toggle
  layout/                   Sidebar, Navbar, PageHeader, DataToolbar
  dashboard/                 StatCard, Sparkline, PipelineChart, DonutChart,
                             ActivityFeed, UpcomingTasks
  tables/                    ClientsTable, LeadsTable
  tasks/                     TaskList (interactive checkbox state)
  settings/                  SettingsTabs + 6 section panels
  auth/                      AuthBrandPanel, SocialAuthRow

lib/
  data.ts                   typed mock data (clients, leads, tasks, activity…)
  utils.ts                  cn() class-merge helper
```

## Design system

Tokens live in `app/globals.css` under `:root` and are mapped into Tailwind via `@theme inline`, so they're usable as plain utility classes (`bg-signal`, `text-text-secondary`, `border-line`, etc).

- **Ink** (`--ink-950`…`--ink-700`) — sidebar / dark surfaces
- **Canvas / Surface** — app background vs. card background
- **Signal** (`--signal`, indigo-violet) — primary brand accent, used sparingly for CTAs, active nav states, and the recurring "pulse" motif
- **Status colors** — emerald (positive), amber (warning), rose (negative), sky (informational)
- **Fonts** — Sora (display/headings), Inter (body/UI), IBM Plex Mono (numbers/data — stat values, table figures)

The signature visual motif is the **signal pulse**: a small animated dot in the logo mark and the auth page's concentric-ring graphic, echoing the idea of a CRM that's always listening for what moves in your pipeline.

## What's next (not built yet, by design)

- Auth wiring (NextAuth / Firebase / custom) — forms are UI-only, no submit handlers
- Real data fetching — everything currently reads from `lib/data.ts`
- Form validation
- Kanban drag-and-drop for the Leads pipeline
- Route protection / middleware

## Handing off to Codex / Cursor

Everything is componentized and typed, so most backend work is: swap `lib/data.ts` reads for real API calls, wire the `<form>` submit handlers in `login/page.tsx` and `signup/page.tsx`, and add middleware for route protection on the `(dashboard)` route group.
