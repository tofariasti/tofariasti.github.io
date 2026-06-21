# Accessibility checklist

## Structure and semantics
- [x] Single `h1` per page (dev portfolio and drone)
- [x] Landmark regions: `header`, `main`, `footer`, `nav`
- [x] Section headings follow logical order (`h2`, `h3`)
- [x] Lists use `ul`/`li` for stats, bullets and certifications

## Keyboard and focus
- [x] Cookie modal traps focus and closes with Escape
- [x] Mobile menu toggle exposes `aria-expanded`
- [x] Project filters are keyboard-operable buttons with `aria-selected`
- [x] Skip links not required (compact single-page layout with visible nav)

## Color and motion
- [x] Dark premium theme with sufficient contrast on body text
- [x] `prefers-reduced-motion` disables blob animations and reduces Framer Motion
- [x] Focus states visible on interactive controls

## Internationalization
- [x] `html[lang]` updates between `pt-BR` and `en`
- [x] Language switch uses `aria-pressed`
- [x] Localized strings rendered from data modules (no hidden duplicate DOM)

## Media and links
- [x] Profile photo has descriptive `alt`
- [x] Decorative SVG icons marked `aria-hidden`
- [x] External links use `rel="noopener noreferrer"`
- [x] WhatsApp links include prefilled contextual messages

## Forms and storage
- [x] Cookie preference stored in `localStorage` key `tofariasti_cookie_policy_v1`
- [x] Language stored in `tofariasti_lang_v1`
- [x] No advertising or third-party tracking scripts

## Automated checks
- [x] Vitest unit tests for locale, storage and WhatsApp helpers
- [x] Playwright e2e with `@axe-core/playwright` on `#/` and `#/drone`
