# Michael P. Ragsdale — Full-Stack Web Developer & Web Accessibility Portfolio (`michaelpragsdale.com`)

[![License: MIT](https://img.shields.io/badge/Code_License-MIT-0369a1.svg)](./LICENSE)
[![Accessibility: WCAG 2.1/2.2 AA & Section 508 Web](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA_%2F_Section_508_Web-15803d.svg)](https://michaelpragsdale.com)
[![Tech Stack: Angular 19 Zoneless Signals](https://img.shields.io/badge/Framework-Angular_19_(Zoneless_Signals)-dd0031.svg)](https://angular.dev)

Standalone full-stack engineering and code-level web accessibility portfolio for **Michael P. Ragsdale** (`https://michaelpragsdale.com`), built with **Angular 19**, **Zoneless Signals**, **TypeScript 5.7**, and dependency-free modern native CSS.

---

## 1. Architectural Overview (11-Property Zero-Database Ecosystem)

The broader RaggieSoft production ecosystem demonstrates practical fluency across distinct modern web frameworks and vanilla web standards—all running behind hardened Nginx virtual hosts with **zero server-side SQL databases**:

| Property | Domain | Primary Tech Stack | Architectural Role |
| :--- | :--- | :--- | :--- |
| **Engineering Portfolio** | `michaelpragsdale.com` | **Angular 19 (Standalone + Zoneless Signals + TypeScript 5.7) + Native CSS** | Technical Portfolio & Engineering Case Studies |
| **Root Hub** | `raggiesoft.com` | **PHP 8.5 MVC (Stardust Engine CMS) + DaisyUI 5 + Phosphor Icons SSR** | Zero-Database SSR Front-Controller Portal & Edge Routing |
| **Corporate & Open-Source Hub** | `corporate.raggiesoft.com` | **Node.js ESM Static SSG + Bootstrap 5.3.8** | MIT Open-Source & Commercial Sync Licensing Portal |
| **Engine Room Imprint** | `engineroom.raggiesoft.com` | **Astro 6 Static SSG + Multi-Tenant Path Routing** | Multi-Artist Catalog & US ISRC (`QTAHP`) Verification Ledger |
| **The Listening Room** | `music.raggiesoft.com` | **SvelteKit 2 + Svelte 5 Runes (`$state`, `$derived`, `$effect`) + Tailwind CSS v4** | Audio Streaming PWA & Hold-Spacebar WebVTT Lyric Sync Studio |
| **The Stardust Engine Portal** | `stardust.raggiesoft.com` | **Nuxt 4 + Vue 3 Static SSG** | Adaptive Light/Dark & Reduced-Motion Static Archive |
| **RaggieSoft Book Reader** | `books.raggiesoft.com` | **PHP 8.5 + Vanilla ES2024 JS + Offline Service Worker** | Framework-Free Reading PWA, Search Engine & Story Crossroads |
| **RaggieSoft Backstage** | `backstage.raggiesoft.com` | **Web Awesome 3.13 (Web Components) + Node.js ESM SSG** | Standards-Based Custom Elements PWA & Static CORS JSON API |
| **Lore Knowledge Graph** | `lore.raggiesoft.com` | **Next.js 16 + React 19 + HTML5 Canvas + Synchronized ARIA DOM** | 60fps Interactive Canvas Graph with Keyboard & Screen-Reader Parity |
| **Nebulae Visualizer** | `nebulae.raggiesoft.com` | **Node.js Static Compiler + ES2024 Canvas** | Astronomical Visualization & High-Contrast Translucent Surface Lab |
| **RaggieSoft StoreTrainer** | `storetrainer.raggiesoft.com` | **Visual Basic 6.0 (Win32) + `.NET` + NSIS + TypeScript SSG** | Pre-AI (2018–2020) Hand-Written Win32 Utility & Accessible Web Portal |

### Key Engineering Decisions in `michaelpragsdale.com`:
1. **Zoneless Angular Signals (`provideExperimentalZonelessChangeDetection`)**: Eliminates `zone.js` monkey-patching and runtime payload overhead. All interactive Role-Lens filtering (`activeLens`, `filteredEcosystem`, `filteredCaseStudies`) and theme transitions run on deterministic `signal()` and `computed()` primitives.
2. **Dependency-Free Modern Native CSS (`src/styles.css`)**: Uses CSS Cascade Layers (`@layer reset, tokens, base, layout, components, utilities, a11y`), CSS Grid `subgrid`, Container Queries (`@container`), and `light-dark()` with `@media (prefers-color-scheme: dark)` fallbacks.
3. **Code-Level WCAG 2.1/2.2 AA & Revised Section 508 Web Engineering**:
   - Semantic HTML5 landmark hierarchy, explicit interactive controls, and polite `aria-live` status updates when filtering projects by engineering discipline.
   - Automatic `prefers-color-scheme` support with a persistent tri-state override (`System`, `Light`, `Dark`) synchronized via `<meta name="color-scheme">`.
   - Windows High Contrast Mode (`@media (forced-colors: active)`) and motion sensitivity (`@media (prefers-reduced-motion: reduce)`) support.
   - Build-time route pre-rendering (`scripts/postbuild-routes.mjs`) generating per-route canonical URLs, OpenGraph cards, and Schema.org `ProfilePage` JSON-LD.

---

## 2. Local Development & Static Production Build

```bash
# Start local development server on http://localhost:4200
npm start

# Compile static production bundle + pre-rendered route metadata to dist/raggiesoft-portfolio/browser
npm run build
```

---

## 3. Licensing & Fictitious Entities Disclaimer

- **Code License:** All source code in this repository is licensed under the **MIT License**.
- **Creative Content License:** Creative narrative works referenced in RaggieSoft Media case studies are licensed under **CC BY-SA 4.0**.
- **Fictitious Persons & Entities Disclaimer:** While all professional employment records, academic credentials, municipal/university achievements, and software architecture specifications in this repository represent the factual career of **Michael P. Ragsdale**, all narrative characters, bands, biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (Blue Ridge Transit, Central Virginia Transit Authority), in-universe legal filings, and events referenced within RaggieSoft Media entertainment properties (`raggiesoft.com` and `*.raggiesoft.com` subdomains) are works of fiction. Any resemblance to actual persons (living or dead), businesses, institutions, or events is purely coincidental.
