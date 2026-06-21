# Portfólio — Tiago O. de Farias

React 19 + Vite 8 portfolio published on [GitHub Pages](https://pages.github.com/).

**URL:** https://tofariasti.github.io/

## Stack

- React 19, TypeScript, Vite 8
- React Router (`HashRouter`: `#/` dev portfolio, `#/drone` drone page)
- Framer Motion (respects `prefers-reduced-motion`)
- Vitest + Playwright with axe-core
- Dark premium theme (Syne + Inter + JetBrains Mono)

## Scripts

```bash
npm install
npm run dev          # local dev server
npm run build        # output to dist/
npm test             # Vitest unit tests
npm run test:e2e     # Playwright (serve dist on :8765 first)
npm run lint
```

Generate résumé PDFs from HTML templates:

```bash
node gerar-pdfs.mjs   # writes to public/assets/
```

## Structure

```
├── src/
│   ├── components/   # layout, sections, ui
│   ├── context/      # LocaleContext, CookieContext
│   ├── data/         # content from legacy HTML (pt/en)
│   ├── pages/        # DevPortfolioPage, DronePage
│   └── styles/       # global.css, portfolio.css, drone.css
├── public/           # favicon, assets (PDF/HTML CV)
├── e2e/              # Playwright + axe-core
├── docs/             # a11y checklist
└── dist/             # build output (GitHub Pages artifact)
```

## i18n & privacy

- Language: `localStorage` key `tofariasti_lang_v1` (PT/EN)
- Cookie modal: `tofariasti_cookie_policy_v1` (local preferences only, no ads)

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`):

1. **test** — `npm ci`, unit tests, build, serve `dist` on port 8765, Playwright
2. **deploy** — upload `dist/` to GitHub Pages root

Enable Pages: **Settings → Pages → GitHub Actions**.

## Pages

| Route | Description |
|-------|-------------|
| `#/` | Software developer portfolio |
| `#/drone` | Tech Drone 360 aerial photo & video |

## Contact

- WhatsApp: +55 51 98903-0405
- E-mail: tiago.farias.poa@gmail.com
- LinkedIn: https://linkedin.com/in/tiago-farias1985
- GitHub: https://github.com/tofariasti

## Accessibility

See [docs/a11y-checklist.md](docs/a11y-checklist.md). E2e runs axe on both routes.

## Responsiveness

Layouts verified at **390px** (mobile), **768px** (tablet) and **1280px** (desktop).
