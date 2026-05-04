# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server with Turbopack.
- `npm run build` — production build.
- `npm start` — serve production build.
- `npm run lint` — ESLint via `next lint` (config extends `next/core-web-vitals`).

No test runner is configured.

## Architecture

Next.js 15 App Router project (JavaScript, not TypeScript despite the `typescript` dep). Tailwind CSS v4 via `@tailwindcss/postcss`, SCSS via `sass`. Path aliases in `jsconfig.json`: `@/*`, `@/components/*`, `@/styles/*`, `@/lib/*` (resolved by the catch-all `@/*` rule).

This is the live coming-soon page for **Lulu Money Business**. Launch date is configured in `public/countdown.txt`. The root page picks one of six demo designs per day and renders it; direct `/demo-N` routes also stay accessible for preview.

### Layout

- `app/layout.js` — root layout. Imports the global stylesheet `styles/app.scss` (`@use "tailwindcss"` plus `html:has(.main-content) { background-color: #000; }`). Holds all metadata.
- `app/page.js` — server component. Calls `getDailyDemo()` and renders the result. Marked `dynamic = "force-dynamic"` so the rotation re-evaluates per request rather than being frozen at build time.
- `app/demo-N/page.js` — thin wrapper that re-exports `<Demo />` from the sibling `Demo.js`. Keeps `/demo-N` URLs accessible.
- `app/demo-N/Demo.js` — the actual `"use client"` demo component. Imported both by its own `page.js` and by `lib/dailyDemo.js`.
- `app/demo-N/components/` and `hooks/` — local helpers scoped to that one demo (e.g. `app/demo-3/components/CountdownTimer.js`, `app/demo-6/hooks/useScreenSize.js`).
- `styles/demo/demoN.scss` — per-demo stylesheet, imported at the top of the demo's `Demo.js`.
- `lib/useCountdownTarget.js` — shared client hook every demo uses to load `public/countdown.txt` and tick. Returns `{ days, hh, mm, ss, ms, target }`. Fallback constant `FALLBACK_TARGET` lives here too — bump it together with `countdown.txt` if you change the launch date.
- `lib/dailyDemo.js` — server-side rotation. `ROTATION = [Demo1, Demo3, Demo4, Demo5, Demo6, Demo10]`. Index = `Math.floor(Date.now() / 86_400_000) % 6` — boundary is **UTC midnight**, not visitor-local.
- `components/Aurora.js` — WebGL aurora background (uses `ogl`). Currently unused since the gallery hero was removed; kept available for any future demo that wants it.

### Countdown configuration

Single source: `public/countdown.txt`. Edit `target=YYYY-MM-DDTHH:mm:ss` to change the launch date. Every demo reads it through `useCountdownTarget`. State starts at zeros to avoid SSR/CSR hydration mismatch and is filled on mount.

### Daily rotation

The pool is fixed at the six kept demos in `lib/dailyDemo.js`. Order = the array order. To change the rotation set, edit `ROTATION` directly. Each kept `Demo.js` must remain importable as a default export from `app/demo-N/Demo.js`.

### Animation libraries

- `motion` — entry/scroll animations.
- `@number-flow/react` — animated digit transitions in the demo-1 timer (wrapped in `NumberFlowGroup` for column alignment).
- `react-fast-marquee` — used by demo-4.
- `react-countdown` — listed as a dep but no longer used; demos route through `useCountdownTarget` instead.

### Adding a new demo to the rotation

1. Create `app/demo-N/Demo.js` (`"use client"`, default-export the component, import `@/styles/demo/demoN.scss`).
2. Create `app/demo-N/page.js`:
   ```js
   import Demo from "./Demo";
   export default function Page() { return <Demo />; }
   ```
3. Create `styles/demo/demoN.scss`.
4. Use `useCountdownTarget` from `@/lib/useCountdownTarget` for any timer.
5. Add `Demo` to the `ROTATION` array in `lib/dailyDemo.js`.

### Branding

The repo originated from the "Slink" template. All on-screen Slink/Platol references have been replaced with "Lulu Money Business". Before rebuilding metadata or copy, grep for `Slink|Platol` (case-insensitive) excluding `node_modules` and `.next`.
