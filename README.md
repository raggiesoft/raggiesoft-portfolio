# Michael P. Ragsdale — Systems Architect & Section 508 Executive Dossier (`michaelpragsdale.com`)

[![License: MIT](https://img.shields.io/badge/Code_License-MIT-0369a1.svg)](./LICENSE)
[![Accessibility: WCAG 2.1 AA/AAA & Section 508](https://img.shields.io/badge/Accessibility-Section_508_%2F_WCAG_2.1_AA-15803d.svg)](https://michaelpragsdale.com)
[![Tech Stack: Angular 19 Zoneless Signals](https://img.shields.io/badge/Framework-Angular_19_(Zoneless_Signals)-dd0031.svg)](https://angular.dev)

Standalone executive systems architecture portfolio and recruiter briefing application for **Michael P. Ragsdale** (`https://michaelpragsdale.com`), decoupled from `raggiesoft-hub` as part of **The Cascade Protocol**.

---

## 1. Architectural Rationale (Why Angular 19 + Modern Native CSS?)

The broader RaggieSoft production ecosystem intentionally demonstrates polyglot architectural mastery across distinct modern web paradigms—all operating with **zero server-side SQL databases**:

| Property | Domain | Primary Tech Stack | Architectural Role |
| :--- | :--- | :--- | :--- |
| **Executive Dossier** | `michaelpragsdale.com` | **Angular 19 (Standalone + Zoneless Signals + TypeScript) + Modern Native CSS** | Recruiter & Hiring Manager Briefing Dossier |
| **Corporate Hub** | `raggiesoft.com` | **PHP 8.5 MVC (Stardust Engine CMS) + Web Awesome** | Server-Rendered Corporate & Legal Governance Hub |
| **The Listening Room** | `music.raggiesoft.com` | **Svelte 5 (Runes + SvelteKit) + Tailwind CSS v4** | Audio Streaming Portal & Hold-Spacebar VTT Studio IDE |
| **Ocean View Archives** | `books.raggiesoft.com` | **Vanilla PHP 8.5 + Vanilla ES2024 JS + Nebulae CSS** | Zero-Framework Accessible Digital Reading Room |
| **Aethelgard / Lore** | `lore.raggiesoft.com` | **React 19 + Next.js + Dual-Layer Canvas ARIA Shadow DOM** | 60fps Accessible HTML5 Canvas Engine & Compendium |
| **StoreTrainer** | `raggiesoft.com/products/storetrainer` | **Visual Basic 6.0 + Win32 API + NSIS** | 15-Year Legacy Desktop POS Simulation Suite |

### Key Engineering Decisions in `/raggiesoft-portfolio`:
1. **Zoneless Angular Signals (`provideExperimentalZonelessChangeDetection`)**: Eliminates `zone.js` monkey-patching and payload overhead. All interactive filtering (`activeLens`, `filteredEcosystem`, `filteredCaseStudies`) and theme state transitions run on deterministic `signal()` and `computed()` primitives.
2. **Post-Bootstrap Native CSS (`src/styles.css`)**: Uses CSS Cascade Layers (`@layer reset, tokens, base, layout, components, utilities, a11y`), CSS Grid `subgrid`, Container Queries (`@container`), and `light-dark()` with `@media (prefers-color-scheme: dark)` fallbacks.
3. **Federal Section 508 & WCAG 2.1 AA/AAA Hardening**:
   - Automatic `prefers-color-scheme` respect with a persistent tri-state override (`System`, `Light`, `Dark`) synchronized via `<meta name="color-scheme">`.
   - Windows High Contrast Mode support (`@media (forced-colors: active)`).
   - Motion sensitivity compliance (`@media (prefers-reduced-motion: reduce)`).
   - Polite `aria-live` announcements when filtering the dossier by engineering discipline.

---

## 2. Local Development & Static Production Build

```bash
# Start local development server on http://localhost:4200
npm start

# Compile static production bundle to dist/raggiesoft-portfolio/browser
npm run build
```

---

## 3. Licensing & Fictitious Entities Disclaimer

- **Code License:** All source code in this repository is licensed under the **MIT License**.
- **Creative Content License:** Creative narrative works referenced in RaggieSoft Media case studies are licensed under **CC BY-SA 4.0**.
- **Fictitious Persons & Entities Disclaimer:** While all professional employment records, academic credentials, municipal/university achievements, and software architecture specifications in this repository represent the factual career of **Michael P. Ragsdale**, all narrative characters, bands, biographies, universities (including Commonwealth Polytechnic Institute / CPI, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (Blue Ridge Transit), in-universe legal filings, and events referenced within RaggieSoft Media entertainment properties (`raggiesoft.com`, `music.raggiesoft.com`, `books.raggiesoft.com`, `lore.raggiesoft.com`) are works of fiction. Any resemblance to actual persons (living or dead), businesses, institutions, or events is purely coincidental.

