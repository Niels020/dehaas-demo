# Copilot Instructions

## Commands

```bash
npm run dev          # start dev server on http://localhost:3000
npm run build        # production build
npm run lint         # ESLint (eslint.config.mjs, Next.js ruleset)
npm run test:e2e     # Playwright smoke tests (requires a built server — runs `npm start`)
npm run test:e2e:ui  # same with interactive Playwright UI
```

To run a single Playwright test file:
```bash
npx playwright test tests/e2e/smoke.spec.ts
```

Playwright uses Chromium only. The config auto-starts `npm run start` (not `dev`) as the web server, so **run `npm run build` before `npm run test:e2e`** unless a production server is already running.

## Architecture

This is a **Next.js 16 App Router** site built on React 19 + Tailwind CSS v4 + shadcn/ui (base-nova style).

### Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page |
| `/creations` | Demo showcase (charts, forms, popups, Game of Life, etc.) |
| `/inspiration` | Three full-page homepage mockups rendered in scaled previews |
| `/privacy` | Privacy policy rendered from Markdown via `lib/legal.ts` |

### Theming system (three layers)

1. **Dark/light mode** — `next-themes` via `ThemeProvider`; default is `dark`; CSS uses `oklch` color tokens defined in `app/globals.css`.
2. **Accent color** — `AccentProvider` (React context, client-only) scoped to `/creations` layout; applies an `accent-*` CSS class to a wrapper `<div>`.
3. **Body font** — `FontProvider` (React context, client-only) scoped to `/creations` layout; applies a Tailwind arbitrary font-family class using `font-[family-name:var(--font-NAME)]` where NAME is the font key (e.g. `geist-sans`, `playfair`).

`AccentProvider` and `FontProvider` only exist in `app/creations/layout.tsx` — they are **not** available in other routes.

### UI components

UI primitives in `components/ui/` are **Base UI** (`@base-ui/react`) wrapped with `cva` + `cn` for variants. They are **not** vanilla shadcn Radix components. When using interactive primitives (Button, Popover, Sheet, etc.), import from `@base-ui/react/*` and apply the Base UI API (`render` prop pattern for trigger slots, etc.).

### Legal / content

`lib/legal.ts` reads `content/legal/privacy.{nl,en}.md`, strips the leading HTML comment, replaces `{{placeholder}}` tokens with values from `site.config.ts`, and converts to HTML via remark. To add a new token, add it to both `PLACEHOLDERS` in `lib/legal.ts` and `siteConfig` in `site.config.ts`.

## Key conventions

- **Path aliases** — use `@/` for all internal imports (`@/components`, `@/lib`, `@/components/ui`).
- **Class merging** — always use `cn()` from `@/lib/utils` (clsx + tailwind-merge).
- **`"use client"` boundary** — providers, hooks (`useTheme`, `useFont`, `useAccent`), and any component using browser APIs must be client components. Page-level RSCs should stay server components where possible.
- **Fonts** — all Google Fonts are loaded in `app/layout.tsx` as CSS variables (`--font-*`) and listed in `components/font-provider.tsx`. To add a new font: import it in `layout.tsx`, apply the variable to `<body>`, and add it to the `fonts` array in `font-provider.tsx`.
- **shadcn CLI** — `components.json` uses the `base-nova` style with `cssVariables: true`. Add components with `npx shadcn add <component>`.
- **Site metadata** — centralised in `site.config.ts` (`siteConfig`). Used for legal pages and locale.
