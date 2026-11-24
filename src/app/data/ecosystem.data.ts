/**
 * =============================================================================
 * File: src/app/data/ecosystem.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Creative Catalog References)
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & TypeScript Guide):
 *
 * 1. What is this file, and what UI views does it power?
 *    `ecosystem.data.ts` holds `POLYGLOT_ECOSYSTEM`—our strongly typed catalog
 *    of all **17 live production web properties** across `michaelpragsdale.com`,
 *    `raggiesoft.com`, and fifteen `*.raggiesoft.com` subdomains.
 *    This single array powers THREE views without duplicating a single string:
 *      - **Home Dossier (`/`)**: Compact scannable cards for recruiter `Cmd+F`.
 *      - **Section Landing Page (`/web-apps`)**: Dedicated 17-property directory
 *        with interactive Role-Lens filtering.
 *      - **Individual Deep-Dive Pages (`/web-apps/:id`)**: Full technical specs
 *        explaining frontend/SSR architecture, static data routing, and exact
 *        code-level WCAG 2.1/2.2 AA & Section 508 web implementations!
 *
 * 2. Why build 17 properties with distinct frameworks instead of one monolith?
 *    Each subdomain pairs the right tool with its job—Angular 19 Zoneless Signals
 *    for this portfolio, PHP 8.5 MVC for SSR hubs, Svelte 5 Runes for live audio
 *    & WebVTT captioning, Next.js 16 + React 19 for accessible `<canvas>` graphs,
 *    Astro 6 & Nuxt 4 for content catalogs, SolidJS/Preact/Mithril/Lit 3 for
 *    fine-grained reactive & Web Component islands, and Fluent UI / IBM Carbon
 *    for desktop companion portals—all with **zero SQL database attack surface**.
 * =============================================================================
 */

import type { EcosystemProperty } from './portfolio.types.ts';

/**
 * Complete dataset for all 17 live production web properties.
 * Notice `import type` above: in modern TypeScript and Node.js 22+/26 native TS
 * execution, `import type` explicitly marks type-only imports so Node erases
 * them cleanly at load time with zero runtime overhead!
 */
export const POLYGLOT_ECOSYSTEM: readonly EcosystemProperty[] = [
  {
    id: 'raggiesoft-portfolio',
    shortName: '01 • Portfolio',
    name: 'Full-Stack & Web Accessibility Portfolio (This Site)',
    domain: 'michaelpragsdale.com',
    url: 'https://michaelpragsdale.com',
    repoUrl: 'https://github.com/raggiesoft/raggiesoft-portfolio',
    categoryLabel: '01 • Engineering & Web Accessibility Portfolio',
    primaryStack: 'Angular 19 (Standalone + Zoneless Signals + TypeScript 5.7) + Native CSS',
    architecturalPattern: 'Multi-Tier Static Pre-Rendered SPA with CSS Cascade Layers (@layer), Subgrid & View Transitions',
    summary:
      'Built on a dedicated engineering domain combining an all-in-one Cmd+F homepage dossier with 5 section hubs and 37 pre-rendered deep-dive pages using Zoneless Angular Signals and dependency-free CSS.',
    highlights: [
      'Zero zone.js runtime overhead via provideExperimentalZonelessChangeDetection() and reactive Angular Signals (signal, computed).',
      '100% Native CSS architecture (@layer, CSS Grid subgrid, container queries, light-dark() with prefers-color-scheme and forced-colors fallbacks) with zero CSS framework bloat.',
      'Pre-renders 43 static HTML route entry points with tailored OpenGraph cards, genuine HTTP 404 routing, and View Transitions focus management.'
    ],
    tags: ['Angular 19', 'TypeScript 5.7', 'Zoneless Signals', 'CSS @layer', 'CSS Subgrid', 'View Transitions', 'WCAG / Section 508 Web'],
    lenses: ['architecture', 'accessibility'],
    isCurrentSite: true,
    ogTitle: 'michaelpragsdale.com — Angular 19 Zoneless Specs',
    ogDescription:
      'Architecture and Section 508 web accessibility breakdown of michaelpragsdale.com: Angular 19 Zoneless Signals, CSS @layer/subgrid, and 43 static routes.',
    vitalStats: [
      { label: 'Live Domain', value: 'michaelpragsdale.com' },
      { label: 'Frontend Engine', value: 'Angular 19 Standalone (Zoneless Signals)' },
      { label: 'Pre-Rendered Routes', value: '43 Static HTML + OpenGraph Pages', isBadge: true },
      { label: 'Styling Engine', value: '100% Native CSS (@layer + subgrid)', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Zoneless Change Detection with Angular Signals',
        detail:
          'Eliminates legacy Zone.js monkey-patching across browser events and timers. Writable signal() state and memoized computed() selectors drive instantaneous filtering and hierarchical route transitions (/ -> /<section> -> /<section>/<slug>).'
      },
      {
        title: 'Dual-Mode Information Architecture (Cmd+F Dossier + 42 Sub-Routes)',
        detail:
          'Preserves all cards on / so recruiters can scan or Cmd+F any keyword in seconds, while scripts/postbuild-routes.mjs imports this TypeScript dataset directly in Node.js to pre-render 42 sub-route index.html files and a 43-URL sitemap.xml.'
      },
      {
        title: 'Dependency-Free CSS Cascade Layers & Subgrid Alignment',
        detail:
          'Declares @layer reset, tokens, base, layout, components, utilities, a11y on Line 1 to eliminate specificity conflicts, and uses grid-template-rows: subgrid so card headers, summaries, tech tags, and action buttons align horizontally across rows.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'View Transitions API + Programmatic Heading Focus',
        detail:
          'Wraps SPA route updates in document.startViewTransition() (disabled automatically under prefers-reduced-motion: reduce) and routes focus to the new view’s <h1 tabindex="-1"> so JAWS, NVDA, and VoiceOver announce page transitions immediately.'
      },
      {
        title: 'Semantic Breadcrumbs with CSS Alt-Empty Dividers',
        detail:
          'Uses <nav aria-label="Breadcrumbs"><ol> trails where the active page remains an <a aria-current="page"> link and visual "/" dividers are generated via content: "/" / "" so screen readers never read decorative punctuation aloud.'
      },
      {
        title: 'Zero-FOUC Theme Engine & Windows Forced-Colors Support',
        detail:
          'Synchronizes OS prefers-color-scheme, manual localStorage overrides, CSS light-dark(), and @media (forced-colors: active) System Color tokens (CanvasText, ButtonText, Highlight) with >= 7:1 primary text contrast.'
      }
    ]
  },
  {
    id: 'raggiesoft-hub',
    shortName: '02 • Root Hub',
    name: 'RaggieSoft Hub & Stardust Engine CMS',
    domain: 'raggiesoft.com',
    url: 'https://raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/stardust-engine-cms',
    categoryLabel: '02 • Root Portal & PHP 8.5 MVC Framework',
    primaryStack: 'PHP 8.5 MVC (Stardust Engine CMS) + DaisyUI 5 + Phosphor Icons SSR',
    architecturalPattern: 'Zero-Database Server-Side Rendered (SSR) Front-Controller MVC with Edge 301 Routing & CSP Hardening',
    summary:
      'Custom open-source PHP 8.5 MVC platform anchoring the raggiesoft.com root domain, managing 301 edge redirects to specialized subdomains and rendering accessible SSR pages without a SQL database.',
    highlights: [
      'Powered by PHP 8.5 with strict typing, JSON-driven front-controller routing, and zero relational database dependencies.',
      'Dynamic Open Graph, canonical URL, XML sitemap, and JSON-LD structured data synthesis per route.',
      'Enforces Content Security Policy (CSP) headers and WCAG 2.1 AA contrast across both Light and Dark OS color schemes.'
    ],
    tags: ['PHP 8.5 MVC', 'Stardust Engine CMS', 'DaisyUI 5', 'Zero-Database SSR', 'Nginx', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Visit Root Hub (raggiesoft.com)',
    ogTitle: 'raggiesoft.com — PHP 8.5 Stardust Engine CMS Specs',
    ogDescription:
      'Deep dive into raggiesoft.com and MIT-licensed Stardust Engine CMS: zero-database PHP 8.5 MVC front-controller routing, CSP hardening, and WCAG 2.1 AA.',
    vitalStats: [
      { label: 'Live Domain', value: 'raggiesoft.com' },
      { label: 'Server Runtime', value: 'PHP 8.5-FPM + Nginx Front Controller' },
      { label: 'Database Footprint', value: '0 SQL Servers (JSON Route Trees)', isBadge: true },
      { label: 'Open-Source Core', value: 'Stardust Engine CMS (MIT)', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Protected Web Root & Single Front-Controller Gateway (amanda/elara.php)',
        detail:
          'Points Nginx root strictly to /www/amanda while keeping PHP views, classes, and JSON route manifests one directory above the public web root—so direct requests to internal templates or /index.php exploit probes never touch application code.'
      },
      {
        title: 'Hierarchical JSON Route Inheritance & Edge 301 Redirects',
        detail:
          'Resolves clean URLs against static JSON route trees before emitting any HTML bytes, returning genuine HTTP 200, 301 (redirecting legacy /music or /portfolio paths to their dedicated subdomains), or 404 status codes.'
      },
      {
        title: 'DRY Front-Door Role Separation',
        detail:
          'Acts as a clean, welcoming consumer front door highlighting flagship experiences while delegating the exhaustive 17-property A–Z directory to waystation.raggiesoft.com so card inventories never drift across repos.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Server-Rendered Landmark & Heading Discipline',
        detail:
          'Delivers complete semantic HTML5 (<header>, <nav>, <main>, <footer>) on the initial HTTP response with zero client-side hydration requirement for core navigation.'
      },
      {
        title: 'Adaptive DaisyUI 5 Light & Dark Theme Tokens',
        detail:
          'Pairs prefers-color-scheme media queries with accessible surface/foreground tokens audited for >= 4.5:1 contrast across cards, badges, and interactive buttons.'
      },
      {
        title: 'Accessible Phosphor Icon Semantics',
        detail:
          'Marks decorative Phosphor SVG/font icons with aria-hidden="true" while ensuring every navigation link and disclosure trigger exposes a clear text label.'
      }
    ]
  },
  {
    id: 'raggiesoft-corporate',
    shortName: '03 • Corporate',
    name: 'RaggieSoft Media (Corporate & Open-Source Hub)',
    domain: 'corporate.raggiesoft.com',
    url: 'https://corporate.raggiesoft.com',
    categoryLabel: '03 • Licensing & Open-Source Portal',
    primaryStack: 'Node.js ESM Static Site Generator + Bootstrap 5.3.8',
    architecturalPattern: 'Build-Time Static SSG Separating Licensing & Open-Source Software from Creative Catalogs',
    summary:
      'Dedicated corporate and licensing subdomain (301 target of raggiesoftmedia.com) documenting MIT open-source releases, CC BY-SA 4.0 / commercial music licensing, and verified contact channels.',
    highlights: [
      'Clearly separates real-world software licensing (MIT) and commercial sync clearance from fictional creative works.',
      'Compiled via a zero-dependency Node.js ESM static generator into cacheable HTML/CSS bundles with verified WCAG 2.1 AA Light and Dark mode contrast.',
      'Provides recruiter verification notices pointing directly to verified michaelpragsdale.com contact channels.'
    ],
    tags: ['Bootstrap 5.3.8 SSG', 'Node.js ESM', 'Open-Source Licensing', 'Static Architecture', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Visit Corporate Hub (corporate.raggiesoft.com)',
    ogTitle: 'corporate.raggiesoft.com — Bootstrap 5.3.8 SSG Specs',
    ogDescription:
      'Architecture of corporate.raggiesoft.com: custom Node.js ESM static generator, Bootstrap 5.3.8 color-modes theming, and MIT / CC BY-SA 4.0 licensing.',
    vitalStats: [
      { label: 'Live Domain', value: 'corporate.raggiesoft.com' },
      { label: 'Build Compiler', value: 'Zero-Dependency Node.js ESM SSG' },
      { label: 'UI Framework', value: 'Bootstrap 5.3.8 (Native Color Modes)', isBadge: true },
      { label: 'Vanity 301 Source', value: 'raggiesoftmedia.com -> 301', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Custom Build-Time Node.js ESM Compiler (scripts/build.mjs)',
        detail:
          'Compiles structured licensing, open-source, and imprint metadata into deterministic static HTML routes, sitemap.xml, robots.txt, and a noindex 404.html page with zero runtime Node or PHP overhead.'
      },
      {
        title: 'Clear Real-World vs. Creative Imprint Separation',
        detail:
          'Separates real-world MIT software licensing and commercial sync clearance workflows from fictitious in-universe narrative entities, routing engineering/recruiting inquiries cleanly to michaelpragsdale.com.'
      },
      {
        title: 'Nginx Edge Vanity Consolidation',
        detail:
          'Terminates raggiesoftmedia.com at Nginx with a single-hop 301 redirect to corporate.raggiesoft.com so search indexing and canonical URLs stay unified.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Bootstrap 5.3.8 data-bs-theme Synchronization',
        detail:
          'Synchronizes Bootstrap 5.3.8 native color-mode custom properties automatically with OS prefers-color-scheme before first paint to prevent light/dark flashes.'
      },
      {
        title: 'Scoped Comparison Tables for Licensing Tiers',
        detail:
          'Formats CC BY-SA 4.0 vs. direct commercial licensing matrices using native <table>, <caption>, <th scope="col">, and <th scope="row"> markup for screen-reader table navigation.'
      },
      {
        title: 'Keyboard-Accessible Disclosure & Navigation Landmarks',
        detail:
          'Maintains logical Tab order, visible :focus-visible outlines, and distinct aria-label attributes across global network and local section navigation bars.'
      }
    ]
  },
  {
    id: 'raggiesoft-engineroom',
    shortName: '04 • Engine Room',
    name: 'Engine Room Records Imprint & Artist Catalog',
    domain: 'engineroom.raggiesoft.com',
    url: 'https://engineroom.raggiesoft.com',
    categoryLabel: '04 • Multi-Tenant Imprint & Catalog Registry',
    primaryStack: 'Astro 6 Static SSG + Multi-Tenant Path Hierarchy (/artists/{slug})',
    architecturalPattern: 'Consolidated Multi-Artist Static Publishing Engine with ISRC & DSP Verification Registries',
    summary:
      'Serves as the music imprint portal (301 target of engineroom-records.com and fracturedprisms.com), consolidating seven artist rosters, US ISRC (QTAHP) registries, and DSP verification tables under one Astro 6 codebase.',
    highlights: [
      'Consolidates seven artist catalogs under engineroom.raggiesoft.com/artists/{slug} so adding new releases never multiplies framework maintenance.',
      'Generates static ISRC and commercial DSP verification ledgers from structured JSON manifests with 75% Cover Audio Influence production documentation.',
      'Deep-links audio playback cleanly to The Listening Room (music.raggiesoft.com) with accessible Light/Dark theming.'
    ],
    tags: ['Astro 6', 'Static SSG', 'Multi-Tenant Routing', 'JSON Data Lake', 'ISRC Registry', 'Section 508 Web'],
    lenses: ['architecture', 'accessibility', 'data-etl', 'devops'],
    ctaLabel: 'Visit Imprint Hub (engineroom.raggiesoft.com)',
    ogTitle: 'engineroom.raggiesoft.com — Astro 6 Catalog SSG Specs',
    ogDescription:
      'Technical deep dive into engineroom.raggiesoft.com: Astro 6 zero-JS static generation, multi-artist getStaticPaths() routing, and US ISRC (QTAHP) ledgers.',
    vitalStats: [
      { label: 'Live Domain', value: 'engineroom.raggiesoft.com' },
      { label: 'SSG Engine', value: 'Astro 6 (Zero-JS Default Islands)' },
      { label: 'Catalog Scope', value: '7 Artist Rosters + QTAHP ISRC Ledger', isBadge: true },
      { label: '301 Consolidation', value: 'engineroom-records.com & fracturedprisms.com', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Multi-Tenant Astro getStaticPaths() Consolidation',
        detail:
          'Instead of maintaining seven separate band websites, dynamic [slug].astro routes generate static artist hubs (/artists/crimson-node, /artists/fractured-prisms, etc.) from shared JSON catalog data in a single build.'
      },
      {
        title: 'Automated US ISRC (QTAHP) & DSP Verification Ledgers',
        detail:
          'Compiles authoritative recording registries mapping official US ISRC codes (registrant prefix QTAHP) and commercial distributor metadata without exposing private audio vaults.'
      },
      {
        title: 'Zero Client-Side Framework Payload by Default',
        detail:
          'Astro 6 strips component JavaScript at build time, emitting pure semantic HTML and scoped CSS for instant Largest Contentful Paint while delegating stateful audio streaming to music.raggiesoft.com.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Semantic Data Tables for ISRC & Discography Registries',
        detail:
          'Renders multi-hundred-row ISRC and release verification tables using explicit <caption>, <thead>, and <th scope="col"> headers with responsive horizontal scroll containers that preserve 400% zoom reflow.'
      },
      {
        title: 'Disambiguated Outbound Listening Links',
        detail:
          'Provides descriptive accessible link names (e.g., "Listen to Hard Reset in The Listening Room") rather than repetitive "Listen" links so screen-reader rotor lists remain unambiguous.'
      },
      {
        title: 'High-Contrast Light & Dark Imprint Palette',
        detail:
          'Uses CSS custom properties tuned to >= 4.5:1 AA / >= 7:1 AAA contrast across both light studio paper and dark control-room color schemes.'
      }
    ]
  },
  {
    id: 'raggiesoft-music',
    shortName: '05 • Listening Room',
    name: 'The Listening Room & WebVTT Lyric Sync Studio',
    domain: 'music.raggiesoft.com',
    url: 'https://music.raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/raggiesoft-music',
    categoryLabel: '05 • Audio Streaming PWA & Captioning Tool',
    primaryStack: 'SvelteKit 2 + Svelte 5 Runes ($state, $derived, $effect) + Tailwind CSS v4 + Web Audio PWA',
    architecturalPattern: 'Static-First Progressive Web App (PWA) & Browser-Based WebVTT Caption Synchronizer',
    summary:
      'Centralized streaming web application and lyric-timing studio handling deep-linked track playback, synchronized closed captions, and unified XML sitemaps across 40+ albums and 500+ tracks.',
    highlights: [
      'Built on Svelte 5 Runes ($state, $derived, $effect) and Tailwind CSS v4 with persistent audio playback, MediaSession OS controls, and Light/Dark themes.',
      'Includes an interactive Hold-Spacebar WebVTT Lyric Synchronizer (/studio) producing human-verified (SYNC_TYPE: HUMAN_VERIFIED) time-coded captions.',
      'Build-time Node.js catalog compiler validates SEO/OpenGraph metadata across 558 static routes and emits a unified sitemap.xml.'
    ],
    tags: ['Svelte 5 Runes', 'SvelteKit 2 PWA', 'Tailwind CSS v4', 'WebVTT Captioning', 'MediaSession API', 'Static JSON'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit The Listening Room (music.raggiesoft.com)',
    ogTitle: 'music.raggiesoft.com — Svelte 5 & WebVTT PWA Specs',
    ogDescription:
      'Architecture of music.raggiesoft.com: SvelteKit 2 + Svelte 5 Runes streaming PWA, 3-tier /[artist]/[album]/[track] routing, and WebVTT lyric sync studio.',
    vitalStats: [
      { label: 'Live Domain', value: 'music.raggiesoft.com' },
      { label: 'Reactive Engine', value: 'SvelteKit 2 + Svelte 5 Runes ($state/$derived)' },
      { label: 'Pre-Rendered Routes', value: '387+ Artist / Album / Track Pages', isBadge: true },
      { label: 'Media Accessibility', value: 'Human-Verified WebVTT (.vtt) Sync', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: '3-Tier Hierarchical Static Routing (/[artist]/[album]/[track])',
        detail:
          'Pre-renders dedicated landing pages for every artist, album, and individual song—complete with Schema.org MusicGroup/MusicAlbum/MusicRecording JSON-LD—while keeping a persistent global player bar mounted in +layout.svelte so audio never interrupts across route changes.'
      },
      {
        title: 'In-Browser "Hold Spacebar" WebVTT Authoring Studio (/studio)',
        detail:
          'Captures keydown (cue start) and keyup (cue end) timestamps directly against HTMLAudioElement.currentTime to author human-verified .vtt caption files fed into the harper.sh mastering pipeline.'
      },
      {
        title: 'Safari 206 Partial Content Service Worker Bypass',
        detail:
          'Custom sw.js caches static app shells and JSON manifests while explicitly bypassing HTTP Range (206 Partial Content) MP3 requests so iOS and macOS WebKit audio seeking works deterministically.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Synchronized Time-Coded WebVTT Closed Captions & Full Transcripts',
        detail:
          'Pairs real-time line-by-line karaoke cue highlighting with full readable song transcripts and zero auto-playing audio on page load (WCAG 1.4.2 Audio Control).'
      },
      {
        title: 'Accessible Transport Sliders & OS MediaSession Parity',
        detail:
          'Exposes labeled seek/volume range controls, keyboard transport shortcuts, and navigator.mediaSession metadata so hardware media keys and assistive switches control playback cleanly.'
      },
      {
        title: 'Native Modal Dialogs for Filtering & Sharing',
        detail:
          'Implements accessible modal focus management, Escape dismissal, and polite ARIA status updates when filtering albums or tracks.'
      }
    ]
  },
  {
    id: 'raggiesoft-stardust',
    shortName: '06 • Stardust',
    name: 'The Stardust Engine Portal',
    domain: 'stardust.raggiesoft.com',
    url: 'https://stardust.raggiesoft.com',
    categoryLabel: '06 • Nuxt 4 Static Portal & Reduced-Motion Lab',
    primaryStack: 'Nuxt 4 + Vue 3 Static SSG + Adaptive Theme & Motion Engine',
    architecturalPattern: 'Static Content Portal with Strict Motion & Color-Scheme Accessibility Controls',
    summary:
      'Standalone Nuxt 4 and Vue 3 static site (301 target of thestardustengine.com) presenting structured discography, narrative archives, and technical schematics inside an accessible visual theme.',
    highlights: [
      'Compiled via Nuxt 4 static generation from Markdown and JSON manifests for fast CDN and Nginx delivery.',
      'Adapts automatically between Light Mode (prefers-color-scheme: light) and Dark Mode (prefers-color-scheme: dark) with >= 4.5:1 text contrast.',
      'Honors prefers-reduced-motion: reduce by disabling ambient starfield and parallax motion automatically.'
    ],
    tags: ['Nuxt 4', 'Vue 3', 'Static SSG', 'prefers-reduced-motion', 'prefers-color-scheme', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Stardust Portal (stardust.raggiesoft.com)',
    ogTitle: 'stardust.raggiesoft.com — Nuxt 4 & Vue 3 SSG Specs',
    ogDescription:
      'Architecture of stardust.raggiesoft.com: Nuxt 4 Nitro static pre-rendering, Vue 3 Composition API, adaptive Light/Dark contrast, and reduced-motion guards.',
    vitalStats: [
      { label: 'Live Domain', value: 'stardust.raggiesoft.com' },
      { label: 'Framework', value: 'Nuxt 4 + Vue 3 Composition API (Nitro SSG)' },
      { label: 'Motion Safety', value: 'prefers-reduced-motion Verified', isBadge: true },
      { label: 'Vanity 301 Source', value: 'thestardustengine.com -> 301', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Nuxt 4 Nitro Static Site Generation',
        detail:
          'Pre-renders all 68+ album, era, and schematic routes at build time via Nuxt Nitro into static HTML payloads served directly by Nginx with zero Node.js server process in production.'
      },
      {
        title: 'Cross-Property Deep-Link Verification',
        detail:
          'Connects discography entries to music.raggiesoft.com and serialized chapters to books.raggiesoft.com, validated automatically before push by validate-network-seo.mjs.'
      },
      {
        title: 'Vue 3 Composition API State Isolation',
        detail:
          'Encapsulates timeline filtering and theme synchronization inside clean, reusable Vue 3 composables with SSR-safe window guards.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Vestibular-Safe Ambient Starfield (WCAG 2.3.3)',
        detail:
          'Detects @media (prefers-reduced-motion: reduce) in both CSS and matchMedia listeners to freeze decorative starfield drift and parallax transitions immediately.'
      },
      {
        title: 'Dual Daylight & Deep-Space Contrast Engineering',
        detail:
          'Avoids low-contrast neon-on-gray pitfalls by enforcing opaque surface fallbacks and >= 4.5:1 AA text contrast across both Light and Dark OS color schemes.'
      },
      {
        title: 'Linear Heading Outlines & Skip Navigation',
        detail:
          'Provides a keyboard skip link and strict <h1> -> <h2> -> <h3> hierarchy across timeline eras and album detail views.'
      }
    ]
  },
  {
    id: 'raggiesoft-book-library',
    shortName: '07 • Book Reader',
    name: 'RaggieSoft Book Reader (Ocean View Archives)',
    domain: 'books.raggiesoft.com',
    url: 'https://books.raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/raggiesoft-book-library',
    categoryLabel: '07 • Accessible Digital Reading PWA',
    primaryStack: 'PHP 8.5 + Stardust Engine Library SPA (Vanilla ES2024 JavaScript + Offline Service Worker)',
    architecturalPattern: 'Framework-Free Long-Form Reading Application with Persistent Audio & EPUB/PDF Downloads',
    summary:
      'Demonstrates mastery of core web standards without heavy client-side JS frameworks—delivering a fast, customizable reading PWA, full-text search engine, and Story Crossroads interactive branching reader.',
    highlights: [
      'Pure semantic HTML5, PHP 8.5 manifest routing, and modular ES2024 JavaScript with persistent live <audio> playback across SPA route transitions.',
      'Reader-controlled typography (adjustable font size, line height, measure width, and Light/Dark/Sepia high-contrast themes) persisted locally.',
      'Automated build validation suite verifying 14,800+ SEO, canonical, and accessibility assertions across serialized chapters.'
    ],
    tags: ['PHP 8.5', 'Vanilla ES2024 JS', 'Progressive Web App', 'Accessible Typography', 'EPUB / PDF Pipeline'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Book Reader (books.raggiesoft.com)',
    ogTitle: 'books.raggiesoft.com — PHP 8.5 & ES2024 Reading PWA',
    ogDescription:
      'Deep dive into books.raggiesoft.com: zero-database PHP 8.5 + Vanilla ES2024 SPA router, persistent audio, BCP 47 multilingual parser, and 2,650+ routes.',
    vitalStats: [
      { label: 'Live Domain', value: 'books.raggiesoft.com' },
      { label: 'Core Stack', value: 'PHP 8.5 SSR + Vanilla ES2024 SPA + PWA' },
      { label: 'Indexed Routes', value: '2,652+ Validated Chapter & Book URLs', isBadge: true },
      { label: 'Multilingual A11y', value: 'Automated BCP 47 lang Parser', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Four-Module PHP 8.5 & Vanilla JS Architecture (Isabel, Eleanor, Sophia, Oliver)',
        detail:
          'Routes clean hierarchical URLs through a protected PHP 8.5 front controller backed by paige.php-compiled JSON route maps and a modular ES2024 SPA client (stardust-spa.js) using DOMParser partial swaps.'
      },
      {
        title: 'Uninterrupted Soundtrack Persistence Across Chapters',
        detail:
          'Mounts the <audio id="stardust-bgm"> controller outside the swapped #stardust-app reading container so chapter transitions never interrupt ambient soundtrack playback.'
      },
      {
        title: 'Interactive Branching DAG Engine & Static Search',
        detail:
          'Renders Story Crossroads multi-route branching choices validated as directed acyclic graphs (DAGs) at build time alongside instant client-side full-text search.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Custom PHP 8.5 Accessible Markdown Parser (stardust-parsedown.php)',
        detail:
          'Extends Parsedown to inject <th scope="col/row"> on Markdown tables, BCP 47 lang="..." attributes on non-English phrases so JAWS/NVDA/VoiceOver switch pronunciation voices accurately, and .visually-hidden "AAC Device:" prefixes.'
      },
      {
        title: 'WCAG 1.4.8 / 1.4.12 Customizable Reading Ergonomics',
        detail:
          'Gives low-vision and dyslexic readers granular controls for font family, font scale, line height, character measure width, and Light / Dark / Sepia / Windows Forced-Colors themes with zero FOUC.'
      },
      {
        title: 'Deterministic SPA Focus Handoff',
        detail:
          'Moves keyboard and screen-reader focus directly to #stardust-reading-pane after every soft chapter transition and updates document.title to match the new chapter.'
      }
    ]
  },
  {
    id: 'raggiesoft-backstage',
    shortName: '08 • Backstage',
    name: 'RaggieSoft Backstage (Web Components & Static API)',
    domain: 'backstage.raggiesoft.com',
    url: 'https://backstage.raggiesoft.com',
    categoryLabel: '08 • Web Components SSG & Cross-Origin JSON API',
    primaryStack: 'Web Awesome Pro 3.13 (Custom Elements) + Font Awesome Pro+ + Node.js ESM SSG & PWA',
    architecturalPattern: 'Standards-Based Web Components Portal & Static CORS JSON API (/api/v1/*.json)',
    summary:
      'Progressive Web App built on standards-based Web Components (<wa-*>) that compiles Markdown dossiers into both accessible HTML routes and static JSON API endpoints consumed by web and native desktop clients.',
    highlights: [
      'Integrates Web Awesome custom elements (<wa-data-grid>, <wa-tab-group>, <wa-drawer>, <wa-dialog>) with synchronized light-dark() and forced-colors High Contrast support.',
      'Generates versioned static JSON endpoints (/api/v1/index.json and per-entry payloads) consumed by books.raggiesoft.com and native C#/.NET & SwiftUI apps.',
      'Includes an offline-capable Service Worker and Web App Manifest with zero server-side runtime dependencies.'
    ],
    tags: ['Web Components', 'Web Awesome 3.13', 'Node.js SSG', 'Static JSON API', 'Progressive Web App', 'Section 508 Web'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Backstage PWA (backstage.raggiesoft.com)',
    ogTitle: 'backstage.raggiesoft.com — Web Components & JSON API',
    ogDescription:
      'Architecture of backstage.raggiesoft.com: Web Awesome 3.13 W3C Custom Elements, Node.js ESM static compiler, and CORS /api/v1/*.json endpoints.',
    vitalStats: [
      { label: 'Live Domain', value: 'backstage.raggiesoft.com' },
      { label: 'Component Standard', value: 'W3C Custom Elements (<wa-*> 3.13)' },
      { label: 'API Output', value: 'Static CORS REST JSON (/api/v1/*.json)', isBadge: true },
      { label: 'Security Hygiene', value: 'CSV Formula-Injection Sanitized', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Dual HTML + Static REST API Compilation (scripts/build.mjs)',
        detail:
          'Single-pass Node.js ESM compiler ingests Markdown dossiers and emits both pre-rendered HTML5 routes and versioned /api/v1/<slug>.json endpoints consumed over CORS by books.raggiesoft.com modals and C#/.NET + SwiftUI desktop apps.'
      },
      {
        title: 'Standards-Based W3C Custom Elements Architecture',
        detail:
          'Uses encapsulated <wa-page>, <wa-tab-group>, <wa-drawer>, and <wa-data-grid> components styled via CSS @layer and custom properties without locking UI primitives to a single JS framework.'
      },
      {
        title: 'CSV Export Formula-Injection Protection',
        detail:
          'Sanitizes interactive data-grid exports against spreadsheet formula injection (=, +, -, @ prefixes) while preserving clean UTF-8 tabular downloads.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Roving-Tabindex Tab Groups & Modal Drawers',
        detail:
          'Ensures Arrow-key roving focus across <wa-tab-group> panels and automatic inert background locking + focus restoration on <wa-drawer> and <wa-dialog> overlays.'
      },
      {
        title: 'Synchronized Shadow-DOM Theme & Forced-Colors Tokens',
        detail:
          'Propagates Light, Dark, and @media (forced-colors: active) tokens cleanly across custom-element Shadow boundaries.'
      },
      {
        title: 'Automated Heading & Alt-Text Build Gate',
        detail:
          'Verifies every compiled dossier route has a single <h1>, sequential subheadings, and descriptive alt attributes on every figure before publishing.'
      }
    ]
  },
  {
    id: 'raggiesoft-lore',
    shortName: '09 • Lore Graph',
    name: 'RaggieSoft Lore Graph & Accessible Canvas Engine',
    domain: 'lore.raggiesoft.com',
    url: 'https://lore.raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/raggiesoft-lore',
    categoryLabel: '09 • Knowledge Graph & Accessible HTML5 Canvas',
    primaryStack: 'Next.js 16 + React 19 + Tailwind CSS v4 + HTML5 Canvas + Synchronized DOM/ARIA Layer',
    architecturalPattern: 'Dual-Layer Accessible Canvas Visualization & Interactive Knowledge Graph',
    summary:
      'Demonstrates how interactive 60fps HTML5 <canvas> visualizations can achieve full WCAG 2.1 AA and Section 508 web keyboard and screen-reader parity.',
    highlights: [
      'Implements an Accessible HTML Canvas Pattern pairing a 2D graphical canvas with a synchronized, keyboard-navigable ARIA DOM layer.',
      'Delivers deterministic node relationship and state announcements to JAWS, NVDA, and VoiceOver via polite ARIA live regions.',
      'Compiled via Next.js 16, React 19, and Tailwind CSS v4 static export for fast edge delivery.'
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'HTML5 Canvas', 'ARIA Live Regions', 'Section 508 Web'],
    lenses: ['architecture', 'accessibility'],
    ctaLabel: 'Visit Lore Graph (lore.raggiesoft.com)',
    ogTitle: 'lore.raggiesoft.com — Accessible HTML5 Canvas & React 19',
    ogDescription:
      'Deep dive into lore.raggiesoft.com: Next.js 16 + React 19 60fps 2D HTML5 Canvas graph paired with a synchronized WAI-ARIA DOM layer for screen readers.',
    vitalStats: [
      { label: 'Live Domain', value: 'lore.raggiesoft.com' },
      { label: 'Frontend Stack', value: 'Next.js 16 + React 19 (Static Export)' },
      { label: 'Graphics Engine', value: '60fps 2D HTML5 Canvas + Force Layout', isBadge: true },
      { label: 'Assistive Pattern', value: '3-Layer Synchronized DOM/ARIA Tree', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Next.js 16 App Router Static Export (output: "export")',
        detail:
          'Compiles 124+ encyclopedia and relationship graph routes at build time via compile-lore-encyclopedia.mjs and postbuild-seo.mjs into static assets served with zero Node runtime.'
      },
      {
        title: 'Shared State Controller Across Canvas & DOM',
        detail:
          'Binds pointer interactions on the 2D force-directed graph and keyboard selections in the accessible node list to the same React 19 centerOnNode() state transition.'
      },
      {
        title: 'Non-Color Geometric Node Encoding',
        detail:
          'Draws distinct geometric node shapes (circles, diamonds, hexagons, squares) per entity category on the canvas so color is never the sole visual differentiator (WCAG 1.4.1).'
      }
    ],
    accessibilityDeepDive: [
      {
        title: '3-Layer Accessible Canvas Stage (LoreGraph.tsx)',
        detail:
          'Pairs Layer 1 (aria-hidden="true" 2D pixel canvas) with Layer 2 (keyboard-focusable <button> node directory) and Layer 3 (semantic <aside> relationship inspector) so blind and keyboard-only users inspect every edge and node.'
      },
      {
        title: 'Polite ARIA Live-Region Graph Telemetry',
        detail:
          'Announces category filter counts and newly focused node connections via a centralized aria-live="polite" status region without speech spam.'
      },
      {
        title: 'Keyboard Camera Pan/Zoom & Reduced-Motion Stabilization',
        detail:
          'Provides explicit keyboard zoom/reset controls and dampens force-simulation physics immediately when prefers-reduced-motion: reduce is active.'
      }
    ]
  },
  {
    id: 'raggiesoft-nebulae',
    shortName: '10 • Nebulae',
    name: 'Nebulae Cosmic Observatory & Contrast Lab',
    domain: 'nebulae.raggiesoft.com',
    url: 'https://nebulae.raggiesoft.com',
    categoryLabel: '10 • Interactive Visualization & Contrast Lab',
    primaryStack: 'PHP 8.5 + Vanilla ES2024 Canvas + High-Contrast Translucent CSS Tokens',
    architecturalPattern: 'Interactive Astronomical Visualization & Accessible Translucent Surface Lab',
    summary:
      'Interactive deep-space visualizer and UI token testbed validating WCAG 2.1 AA contrast ratios and reduced-motion behavior over dynamic canvas backgrounds.',
    highlights: [
      'Compiles structured astronomical metadata into a zero-database interactive visualizer with hardware-accelerated rendering.',
      'Pairs translucent backdrop-filter surfaces with opaque fallback tokens to preserve >= 4.5:1 text contrast across Light and Dark modes.',
      'Supports full keyboard navigation and prefers-reduced-motion compliance.'
    ],
    tags: ['ES2024 Canvas', 'Contrast Engineering', 'backdrop-filter Fallbacks', 'prefers-reduced-motion', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Nebulae Visualizer (nebulae.raggiesoft.com)',
    ogTitle: 'nebulae.raggiesoft.com — Canvas & Contrast Token Lab',
    ogDescription:
      'Architecture of nebulae.raggiesoft.com: hardware-accelerated ES2024 HTML5 Canvas visualizer and WCAG 2.1 AA translucent backdrop-filter token testbed.',
    vitalStats: [
      { label: 'Live Domain', value: 'nebulae.raggiesoft.com' },
      { label: 'Rendering Stack', value: 'Vanilla ES2024 Canvas + PHP 8.5 Shell' },
      { label: 'Contrast Standard', value: '>= 4.5:1 Over Dynamic Backdrops', isBadge: true },
      { label: 'Motion Control', value: 'Pause Toggle + Reduced-Motion Auto-Stop', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Zero-Dependency ES2024 Particle & Nebula Renderer',
        detail:
          'Uses requestAnimationFrame delta-time stepping and offscreen gradient caching to render smooth deep-space visuals without WebGL library bloat.'
      },
      {
        title: 'Defensive Translucent Surface Token Layering',
        detail:
          'Tests glassmorphic UI overlays against worst-case bright nebula cores using clamped alpha floors and @supports not (backdrop-filter: blur(1px)) opaque fallbacks.'
      },
      {
        title: 'Lightweight Single-Route Footprint',
        detail:
          'Delivers the entire interactive observatory in a minimal asset payload with immutable CDN caching on static scripts and stylesheets.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Explicit Animation Pause Control (WCAG 2.2.2 Pause, Stop, Hide)',
        detail:
          'Provides an accessible keyboard toggle button (aria-pressed) to pause or resume canvas motion at any time, alongside automatic pause when prefers-reduced-motion: reduce is set.'
      },
      {
        title: 'Guaranteed Text Contrast Over Variable Pixels',
        detail:
          'Backs every HUD text panel with high-opacity surface tokens and crisp borders so foreground copy never drops below 4.5:1 contrast as background particles move.'
      },
      {
        title: 'Forced-Colors High-Contrast HUD Mode',
        detail:
          'Strips translucent blurs cleanly under @media (forced-colors: active) in favor of solid Canvas and CanvasText system borders.'
      }
    ]
  },
  {
    id: 'storetrainer',
    shortName: '11 • StoreTrainer',
    name: 'RaggieSoft StoreTrainer (v1.0 Archive • VB6 v1.1 • .NET 10 v2.0 + C++20 Updater)',
    domain: 'storetrainer.raggiesoft.com',
    url: 'https://storetrainer.raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/storetrainer',
    categoryLabel: '11 • Cross-Generation Desktop Utility (VB6 -> .NET 10 + C++20) & Portal',
    primaryStack: 'C# 13 / .NET 10 WPF + Native C++20 (/MT Zero-Runtime Updater) + Inno Setup 7 + Classic VB6 v1.1 / ANSI NSIS',
    architecturalPattern: 'Multi-Generation Desktop Architecture (Pre-AI VB6 -> Win95 ANSI NSIS v1.1 -> .NET 10 .stfx + C++20 Suite Updater)',
    summary:
      'Three-generation Windows desktop utility and open-source repository (github.com/raggiesoft/storetrainer) pairing a frozen pre-AI VB6 archive (2018–2022), a Windows 95-compatible VB6 v1.1 edition, a modern C# / .NET 10 WPF 2.0 application (.stfx JSON), and a zero-runtime C++20 suite update client (RaggieSoftUpdate.exe).',
    highlights: [
      'Preserves the untouched pre-AI Visual Basic 6.0 codebase (Windows 2000 SP4 VM, dynamic GetProcAddress IsWow64Process probing) alongside the May 2022 VS .NET 2003 Upgrade Wizard artifact under tag v1.0.0-pre-ai, while shipping VB6 v1.1 with ANSI NSIS (Unicode false), forward-compatible .stf files, and OS-gated update checks.',
      'Rebuilds StoreTrainer 2.0 in C# / .NET 10 WPF (x64 & ARM64) with .stfx JSON profiles, a 3-step .stf -> .stfx Upgrade Wizard, UAC-elevated (Verb="runas") trainer .ZIP extraction into protected Program Files game folders, rolling save-game .ZIP backups, CP437 .NFO ASCII art decoding, CPU ProcessorAffinity limiting, and auto-closing trainers on game exit.',
      'Pairs Express/Custom Inno Setup 7 scripts (with Windows Active Setup multi-user HKCU cleanup and surgical 32-bit NSIS takeover) with RaggieSoftUpdate.exe—a standalone zero-runtime C++20 (/MT) Win32/WinHTTP/BCrypt SHA-256 update utility supporting Interactive Wizard, /SILENT, and /VERYSILENT modes across the entire desktop suite.'
    ],
    tags: ['C++20 Win32 (/MT Zero-Runtime)', 'C# / .NET 10 WPF', 'Inno Setup 7 & Active Setup', 'Visual Basic 6.0', 'ANSI NSIS (Win95)', 'Pre-AI Archive'],
    lenses: ['architecture', 'devops', 'accessibility'],
    ctaLabel: 'Visit StoreTrainer Portal (storetrainer.raggiesoft.com)',
    ogTitle: 'storetrainer.raggiesoft.com — VB6 to .NET 10 & C++20',
    ogDescription:
      'Engineering evolution of StoreTrainer from pre-AI Visual Basic 6.0 (2018) to C#/.NET 10 WPF, zero-runtime C++20 WinHTTP/BCrypt updater, and Inno Setup 7.',
    vitalStats: [
      { label: 'Live Domain', value: 'storetrainer.raggiesoft.com' },
      { label: 'Desktop Generations', value: 'VB6 (2018) -> VB6 v1.1 -> .NET 10 WPF v2.0' },
      { label: 'Suite Updater', value: 'Native C++20 (/MT WinHTTP + BCrypt SHA-256)', isBadge: true },
      { label: 'Open-Source Repo', value: 'github.com/raggiesoft/storetrainer (MIT)', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Verifiable Pre-AI Win32/VB6 Engineering Provenance (2018–2022)',
        detail:
          'Preserves the original Visual Basic 6.0 codebase under immutable tag v1.0.0-pre-ai—demonstrating dynamic kernel32 GetProcAddress("IsWow64Process") probing for Windows 95/98/2000 compatibility—alongside a forward-compatible v1.1 ANSI NSIS maintenance release.'
      },
      {
        title: 'Modern C# 13 / .NET 10 WPF Rewrite (x64 & ARM64)',
        detail:
          'Migrates legacy positional .stf profiles to structured .stfx JSON via a 3-step Upgrade Wizard, adding UAC-elevated ZIP extraction for protected game directories, rolling save-game backups, CP437 .NFO rendering, and CPU affinity pinning.'
      },
      {
        title: 'Zero-Runtime Native C++20 Updater (RaggieSoftUpdate.exe)',
        detail:
          'Compiled with static /MT linking against pure Win32, WinHTTP, and BCrypt APIs so update checks, cryptographic SHA-256 verification, and /SILENT upgrades work even before .NET runtimes are present.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Retro-Styled Web Portal with Modern WCAG 2.1 AA Semantics',
        detail:
          'Recreates classic late-1990s Win32/Netscape visual nostalgia on storetrainer.raggiesoft.com using accessible semantic HTML5 landmarks, keyboard-focusable controls, and adaptive Dark Mode tokens.'
      },
      {
        title: 'WPF UIAutomation & Narrator/NVDA Compatibility',
        detail:
          'Labels every WPF profile list, Upgrade Wizard step, and CP437 viewer pane with AutomationProperties.Name and keyboard mnemonics.'
      },
      {
        title: 'Accessible Native Win32 Dialogs in C++20 Updater',
        detail:
          'Uses standard Win32 dialog templates, tabstops, and system font scaling in RaggieSoftUpdate.exe so Windows Narrator and High Contrast themes work natively.'
      }
    ]
  },
  {
    id: 'raggiesoft-crossroads',
    shortName: '12 • Crossroads',
    name: 'RaggieSoft Story Crossroads Imprint & Branching Sandbox',
    domain: 'crossroads.raggiesoft.com',
    url: 'https://crossroads.raggiesoft.com',
    categoryLabel: '12 • Interactive Fiction Imprint & Lit 3 Web Components',
    primaryStack: 'Eleventy (11ty) v3 ESM + Lit 3 Custom Elements + TypeScript Static SSG',
    architecturalPattern: 'Zero-Hydration Static Templates Paired with Progressive Lit 3 Shadow-DOM Interactive Islands',
    summary:
      'Dedicated interactive-fiction imprint portal combining Eleventy v3 build-time HTML generation with standards-based Lit 3 custom elements for live branching narrative previews.',
    highlights: [
      'Generates semantic HTML5 routes at build time via Eleventy v3 ESM while hydrating only interactive Crossroads choice widgets via lightweight Lit 3 Custom Elements.',
      'Enforces keyboard-navigable radio/button decision trees, polite WAI-ARIA route announcements, and adaptive Light/Dark contrast tokens.',
      'Integrates directly with Paige (paige.php) DAG graph validation so every branching path resolves cleanly on books.raggiesoft.com.'
    ],
    tags: ['Eleventy v3 (11ty)', 'Lit 3 Web Components', 'TypeScript', 'Progressive Islands', 'Static SSG', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Story Crossroads (crossroads.raggiesoft.com)',
    ogTitle: 'crossroads.raggiesoft.com — Eleventy v3 & Lit 3 Specs',
    ogDescription:
      'Architecture of crossroads.raggiesoft.com: Eleventy v3 ESM static templates paired with TypeScript Lit 3 Shadow-DOM interactive branching islands.',
    vitalStats: [
      { label: 'Live Domain', value: 'crossroads.raggiesoft.com' },
      { label: 'SSG + Islands', value: 'Eleventy (11ty) v3 ESM + Google Lit 3' },
      { label: 'Graph Integrity', value: 'Build-Time DAG Branch Validation', isBadge: true },
      { label: 'Shadow DOM A11y', value: 'Scoped ARIA + Inherited CSS Tokens', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Eleventy v3 ESM Static Shell + Surgical Lit 3 Islands',
        detail:
          'Renders editorial imprint pages as zero-JS static HTML via Eleventy v3 while hydrating only interactivewidgets (<crossroads-live-sandbox>, <crossroads-seal-explorer>) compiled with TypeScript and Lit 3.'
      },
      {
        title: 'Standards-Safe Shadow DOM Styling Without :host-context()',
        detail:
          'Themes open Shadow DOM trees via inherited CSS custom properties from :root rather than non-standard :host-context() selectors so Firefox, Safari, and Chromium stay 100% consistent.'
      },
      {
        title: 'Directed Acyclic Graph (DAG) Narrative Verification',
        detail:
          'Pairs with paige.php to verify zero dead-end slugs or orphaned route nodes across interactive branching editions.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Shadow-Root Scoped ARIA Relationships',
        detail:
          'Keeps aria-labelledby and aria-controls ID references strictly inside each LitElement Shadow root so ID encapsulation never breaks screen-reader associations.'
      },
      {
        title: 'Polite Live-Region Route Announcements',
        detail:
          'Announces newly selected branching outcomes and reset actions via an internal aria-live="polite" region inside the interactive sandbox.'
      },
      {
        title: '44x44px Choice Targets & Focus Indicators',
        detail:
          'Sizes every interactive route option card to meet WCAG 2.5.5/2.5.8 target minimums with high-contrast :focus-visible rings.'
      }
    ]
  },
  {
    id: 'raggiesoft-cedarrun',
    shortName: '13 • Cedar Run',
    name: 'Cedar Run Wilderness Guide & Interactive Companion',
    domain: 'cedarrun.raggiesoft.com',
    url: 'https://cedarrun.raggiesoft.com',
    categoryLabel: '13 • Fine-Grained Reactive SSG (SolidJS)',
    primaryStack: 'SolidJS + Fine-Grained Signals + TypeScript + Vite Static SSG',
    architecturalPattern: 'Virtual-DOM-Free Fine-Grained Reactive UI Pre-Rendered to Static HTML Routes',
    summary:
      'Interactive companion launchpad for the Cedar Run branching novel, using SolidJS fine-grained reactivity without Virtual DOM diffing overhead.',
    highlights: [
      'Compiles JSX templates into direct, pinpoint DOM updates via SolidJS signals while pre-rendering full static HTML, OpenGraph, and XML sitemap outputs at build time.',
      'Pairs forest-daylight and Bortle-1 dark-sky themes via CSS light-dark() and prefers-color-scheme with >= 4.5:1 contrast.',
      'Links interactive shelter stages and 1975 acoustic songbook entries directly into RaggieSoft Book Reader and The Listening Room.'
    ],
    tags: ['SolidJS', 'Fine-Grained Reactivity', 'TypeScript', 'Vite SSG', 'CSS light-dark()', 'Section 508 Web'],
    lenses: ['architecture', 'accessibility'],
    ctaLabel: 'Visit Cedar Run (cedarrun.raggiesoft.com)',
    ogTitle: 'cedarrun.raggiesoft.com — SolidJS Fine-Grained SSG',
    ogDescription:
      'Deep dive into cedarrun.raggiesoft.com: Virtual-DOM-free SolidJS signals (createSignal/createMemo) with build-time renderToString() static hydration.',
    vitalStats: [
      { label: 'Live Domain', value: 'cedarrun.raggiesoft.com' },
      { label: 'Reactive Model', value: 'SolidJS (No Virtual DOM Diffing)' },
      { label: 'Build Pipeline', value: 'Vite SSR renderToString() + hydrate()', isBadge: true },
      { label: 'Color Engine', value: 'CSS light-dark() Daylight / Bortle-1', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Once-Executed Components & Pinpoint DOM Subscriptions',
        detail:
          'Unlike React components that re-run on every state change, SolidJS executes component functions once and wires createSignal() / createMemo() getters directly to individual text and attribute nodes.'
      },
      {
        title: 'Isomorphic Build-Time Pre-Rendering (scripts/prerender.mjs)',
        detail:
          'Executes SolidJS renderToString() + generateHydrationScript() at build time to emit complete static HTML routes and OpenGraph metadata hydrated seamlessly on the client.'
      },
      {
        title: 'Cross-App Reader & Soundtrack Deep Linking',
        detail:
          'Connects branching trailhead previews directly to verified chapter slugs on books.raggiesoft.com and acoustic companion tracks on music.raggiesoft.com.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Accessible Interactive Stage Explorer',
        detail:
          'Implements semantic toggle controls (aria-pressed) and polite live announcements when stepping through wilderness shelter stages.'
      },
      {
        title: 'Verified Forest Daylight & Bortle-1 Night-Sky Contrast',
        detail:
          'Balances warm parchment daylight tones and deep Bortle-1 starlight slate tokens via CSS light-dark() while maintaining >= 4.5:1 AA contrast on all body and badge text.'
      },
      {
        title: 'Keyboard-Complete Navigation & Forced-Colors Support',
        detail:
          'Preserves explicit borders and focus indicators across Windows High Contrast themes and reduced-motion settings.'
      }
    ]
  },
  {
    id: 'raggiesoft-waystation',
    shortName: '14 • Waystation',
    name: 'The Uncharted Waystation (Canonical Global Directory & Wildcard 404)',
    domain: 'waystation.raggiesoft.com',
    url: 'https://waystation.raggiesoft.com',
    categoryLabel: '14 • DRY Global Directory & Nginx Default-Server 404 Router',
    primaryStack: 'Mithril.js Hyperscript (m()) + TypeScript Static SSG + Nginx default_server Catch-All',
    architecturalPattern: 'Dual-Role Canonical Ecosystem Directory & Intelligent Subdomain Typo / 404 Recovery Engine',
    summary:
      'Serves both as the single DRY global directory indexing all 17 RaggieSoft properties and as Nginx’s wildcard *.raggiesoft.com HTTP 404 handler—matching mistyped hostnames or paths to the intended destination.',
    highlights: [
      'Built with Mithril.js pure TypeScript hyperscript (m()) in < 10 KB of client JS, pre-rendered at build time into static routes and a genuine HTTP 404 fallback (/404.html).',
      'Implements semantic <search>, visible <fieldset>/<legend> radio category filters, and aria-live="polite" result count announcements.',
      'Eliminates duplicate directory maintenance across sibling sites by centralizing cross-domain discovery and typo recovery in one place.'
    ],
    tags: ['Mithril.js Hyperscript', 'TypeScript', 'DRY Architecture', 'Nginx default_server 404', 'Semantic <search>', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Visit Global Directory (waystation.raggiesoft.com)',
    ogTitle: 'waystation.raggiesoft.com — Mithril.js & Nginx 404 Router',
    ogDescription:
      'Architecture of waystation.raggiesoft.com: <10KB Mithril.js TypeScript SSG serving as both the DRY 17-site directory and *.raggiesoft.com 404 router.',
    vitalStats: [
      { label: 'Live Domain', value: 'waystation.raggiesoft.com' },
      { label: 'Client Payload', value: '< 10 KB Mithril.js TypeScript Hyperscript' },
      { label: 'Nginx Role', value: 'default_server *.raggiesoft.com Catch-All', isBadge: true },
      { label: 'HTTP Semantics', value: '200 OK Directory + True 404 Fallback', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Pure TypeScript Hyperscript (m()) Without JSX Build Bloat',
        detail:
          'Authors components as strongly typed Mithril vnodes serialized to static HTML at build time via a custom zero-dependency Vnode renderer (renderMithrilVnode.ts).'
      },
      {
        title: 'Dual HTTP 200 Directory + Genuine HTTP 404 Wildcard Catch-All',
        detail:
          'Configured as Nginx’s default_server for unknown *.raggiesoft.com hostnames and unmapped paths—returning HTTP 200 OK on canonical directory routes while emitting a real HTTP 404 (X-Robots-Tag: noindex, follow) with fuzzy destination suggestions on mistyped URLs.'
      },
      {
        title: 'Single Canonical Ecosystem Inventory (DRY Principle)',
        detail:
          'Centralizes all 17 property links in one codebase so launching a new subdomain never requires editing 16 sibling repositories.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'HTML5 <search> Landmark & <fieldset>/<legend> Filters',
        detail:
          'Wraps live instant-filtering controls inside a native HTML <search> landmark with an explicit <label> search input and native radio buttons grouped inside <fieldset>/<legend>.'
      },
      {
        title: 'Debounced Polite Live-Region Filter Counts',
        detail:
          'Announces updated directory match counts cleanly via aria-live="polite" as users filter by category or keyword.'
      },
      {
        title: 'Zero-Trap Keyboard Recovery from Broken URLs',
        detail:
          'Places clear recovery links and search focus right at the top of 404 responses so keyboard and screen-reader users recover from broken links in one Tab stop.'
      }
    ]
  },
  {
    id: 'raggiesoft-jessica',
    shortName: '15 • Jessica',
    name: 'Jessica — Project Origins & QA Architecture Guide',
    domain: 'jessica.raggiesoft.com',
    url: 'https://jessica.raggiesoft.com',
    categoryLabel: '15 • Compact Preact 10 + Signals Multi-Route SSG',
    primaryStack: 'Preact 10 + @preact/signals + TypeScript + Vite Static SSG',
    architecturalPattern: 'Ultra-Compact (~6 KB) Pre-Rendered Signals SPA Documenting Project Origins & QA Workflows',
    summary:
      'Consumer-friendly narrative companion explaining the origin story and human QA checklist behind every RaggieSoft property, built on Preact 10 and @preact/signals.',
    highlights: [
      'Combines build-time server rendering (preact-render-to-string) with ~6 KB client hydration and module-level @preact/signals state.',
      'Implements accessible WAI-ARIA toggle groups (aria-pressed), keyboard-friendly milestone tabs, and tri-state Daylight / Evening Lamp theming.',
      'Complements waystation.raggiesoft.com under a strict DRY split: Waystation owns the fast A–Z directory while Jessica owns project backstories.'
    ],
    tags: ['Preact 10', '@preact/signals', 'TypeScript', 'Vite SSR Pre-Render', 'WAI-ARIA Toggle Groups', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility'],
    ctaLabel: 'Visit Jessica Portal (jessica.raggiesoft.com)',
    ogTitle: 'jessica.raggiesoft.com — Preact 10 + Signals SSG Specs',
    ogDescription:
      'Architecture of jessica.raggiesoft.com: ~6KB Preact 10 + @preact/signals static pre-rendered multi-route SPA with accessible WAI-ARIA toggle groups.',
    vitalStats: [
      { label: 'Live Domain', value: 'jessica.raggiesoft.com' },
      { label: 'UI Runtime', value: 'Preact 10 (~3 KB) + @preact/signals' },
      { label: 'Rendering Mode', value: 'preact-render-to-string Static SSG', isBadge: true },
      { label: 'DRY Role', value: 'Human Backstories & QA Milestones', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Ultra-Lightweight React-Compatible Signals Runtime',
        detail:
          'Delivers component ergonomics and fine-grained @preact/signals state updates in a fraction of a standard VDOM bundle size, keeping mobile Time to Interactive near zero.'
      },
      {
        title: 'Multi-Route Static Pre-Rendering Pipeline',
        detail:
          'Renders every route via preact-render-to-string during Vite build so search crawlers, chat link previews, and no-JS readers receive full semantic HTML.'
      },
      {
        title: 'Consumer-Friendly Translation of Engineering Craft',
        detail:
          'Explains why quality checks, caption verification, and calm visual design matter in everyday human terms—preserving strict jargon separation from michaelpragsdale.com.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Accessible Filter & Theme Toggle Groups',
        detail:
          'Binds WAI-ARIA aria-pressed states directly to @preact/signals state and CSS attribute selectors so visual and screen-reader selection states cannot drift.'
      },
      {
        title: 'Warm Daylight & Evening-Lamp Contrast Palettes',
        detail:
          'Provides low-glare reading surfaces verified for >= 4.5:1 AA contrast across both light and dark modes.'
      },
      {
        title: 'Responsive Reflow & Touch Target Sizing',
        detail:
          'Maintains single-column readability at 320px CSS width (400% browser zoom) with >= 44px touch targets.'
      }
    ]
  },
  {
    id: 'raggiesoft-launcher',
    shortName: '16 • Launcher',
    name: 'RaggieSoft Launcher (Desktop Suite Hub & Fluent Web Components)',
    domain: 'launcher.raggiesoft.com',
    url: 'https://launcher.raggiesoft.com',
    categoryLabel: '16 • Native Desktop Suite Portal & Fluent Design Web Components',
    primaryStack: 'Microsoft Fluent UI Web Components (@fluentui/web-components / FAST Element) + TypeScript + Vite SSG',
    architecturalPattern: 'Isomorphic Static Pre-Rendering Upgraded with W3C Custom Elements & Fluent Luminance Tokens',
    summary:
      'Dedicated companion portal for RaggieSoftLauncher.exe—documenting unified desktop management, offline archive safety, Express/Custom Inno Setup flows, and RaggieSoftUpdate.exe across all five Windows desktop apps.',
    highlights: [
      'Pairs zero-CLS build-time static HTML pre-rendering (/apps, /updates, /faq, /404.html) with Microsoft Fluent UI Web Components (<fluent-card>, <fluent-divider>) powered by FAST Element.',
      'Synchronizes Fluent Design System baseLayerLuminance tokens dynamically with OS prefers-color-scheme and a two-state <meta name="color-scheme"> controller.',
      'Presents complex desktop engineering (UAC ZIP elevation, C++20 WinHTTP/BCrypt SHA-256 updates, Active Setup cleanup) in clear, jargon-free language for everyday users.'
    ],
    tags: ['Fluent UI Web Components', 'Microsoft FAST Element', 'TypeScript 5.7', 'Vite Static SSG', 'C# / .NET 10 Companion', 'Section 508 Web'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Visit Launcher Portal (launcher.raggiesoft.com)',
    ogTitle: 'launcher.raggiesoft.com — Fluent UI Web Components SSG',
    ogDescription:
      'Architecture of launcher.raggiesoft.com: Microsoft Fluent UI Web Components (FAST Element), dynamic baseLayerLuminance theming, and Vite static SSG.',
    vitalStats: [
      { label: 'Live Domain', value: 'launcher.raggiesoft.com' },
      { label: 'Design System', value: 'Microsoft Fluent UI Web Components (FAST)' },
      { label: 'Companion App', value: 'RaggieSoftLauncher.exe (.NET 10 WPF)', isBadge: true },
      { label: 'CLS Score', value: '0.00 (Pre-Rendered Static Shell)', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'Static HTML Pre-Rendering + Fluent Custom Element Upgrade',
        detail:
          'Pre-renders /apps, /updates, /faq, and /404.html to static HTML at build time so content paints immediately before @fluentui/web-components custom elements progressively upgrade in place with zero Cumulative Layout Shift.'
      },
      {
        title: 'Algorithmic Fluent Luminance Token Synchronization',
        detail:
          'Drives Fluent Design System baseLayerLuminance (StandardLuminance.LightMode vs. DarkMode) dynamically from OS prefers-color-scheme and manual user theme selection.'
      },
      {
        title: 'Unified Desktop Ecosystem Hub',
        detail:
          'Serves as the consumer download and update portal uniting Book Reader, The Listening Room, Backstage, StoreTrainer, and the shared C++20 RaggieSoftUpdate.exe client.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: 'Native Windows 11 Visual & Assistive Familiarity',
        detail:
          'Matches Windows 11 Fluent surface elevation, focus rings, and keyboard patterns so desktop users transitioning between the web portal and WPF apps experience consistent controls.'
      },
      {
        title: 'Consumer-Clear Copy Without Jargon Overload',
        detail:
          'Translates installer modes, automatic updates, and offline library management into plain, reassuring everyday instructions.'
      },
      {
        title: 'High-Contrast Forced-Colors & Keyboard Landmarks',
        detail:
          'Preserves explicit card/button borders in Windows Contrast Themes and maintains clean landmark/heading navigation across all four routes.'
      }
    ]
  },
  {
    id: 'raggiesoft-a11y-studio',
    shortName: '17 • A11y Studio',
    name: 'RaggieSoft Accessibility Studio (Enterprise WCAG IDE & IBM Carbon Portal)',
    domain: 'a11y.raggiesoft.com',
    url: 'https://a11y.raggiesoft.com',
    repoUrl: 'https://github.com/raggiesoft/accessibility-studio',
    categoryLabel: '17 • Enterprise B2B Accessibility IDE Portal & IBM Carbon Design System',
    primaryStack: 'IBM Carbon Design System (@carbon/web-components + @carbon/styles) + TypeScript + Vite SSG',
    architecturalPattern: 'Commercial Enterprise Product Portal Documenting Our C# / .NET 10 WinForms + Monaco IDE & CLI',
    summary:
      'Enterprise software portal for RaggieSoft Accessibility Studio—an open-source C# / .NET 10 WinForms + Monaco WebView2 IDE and headless CLI evolving my ODU Online PLE batch accessibility utility into a full source-level WCAG 2.2 AA & Section 508 engineering workstation.',
    highlights: [
      'Built on IBM Carbon Design System (@carbon/web-components Lit custom elements + @carbon/styles White/Gray-100 Sass themes) pre-rendered to zero-database static HTML.',
      'Documents the multi-pane C# / .NET 10 WinForms workstation IDE: Monaco syntax/diff refactoring, Live Chromium DOM emulation (Forced-Colors, 400% Reflow, Tab Badges), and authenticated SSO batch scanning.',
      'Details silent Windows Installer (.MSI) Group Policy properties, OASIS SARIF 2.1.0 CI/CD gates, and SHA-256 tamper-evident remediation logs.'
    ],
    tags: ['IBM Carbon Design System', '@carbon/web-components', 'C# / .NET 10 WinForms', 'Monaco Editor (WebView2)', 'SARIF 2.1.0', 'WCAG 2.2 AA / Section 508 Web'],
    lenses: ['accessibility', 'architecture', 'devops'],
    ctaLabel: 'Visit Accessibility Studio (a11y.raggiesoft.com)',
    ogTitle: 'a11y.raggiesoft.com — IBM Carbon & WCAG 2.2 IDE Portal',
    ogDescription:
      'Architecture of a11y.raggiesoft.com and Accessibility Studio: IBM Carbon Web Components SSG + C#/.NET 10 WinForms, Monaco IDE, and SARIF 2.1.0 CLI.',
    vitalStats: [
      { label: 'Live Domain', value: 'a11y.raggiesoft.com' },
      { label: 'Portal Stack', value: 'IBM Carbon (@carbon/web-components + Sass)' },
      { label: 'Workstation IDE', value: 'C# / .NET 10 WinForms + Monaco WebView2', isBadge: true },
      { label: 'Enterprise Packaging', value: 'Installer Studio C++20 .MSI/.EXE + SARIF CLI', isBadge: true }
    ],
    deepDiveArchitecture: [
      {
        title: 'IBM Carbon White & Gray-100 Enterprise Design System',
        detail:
          'Pre-renders five static product routes (/, /ide, /cli, /deployment, /404.html) in Vite + TypeScript and hydrates @carbon/web-components Lit elements with synchronized Carbon White (Light) and Gray-100 (Dark) theme tokens.'
      },
      {
        title: 'Evolution from ODU Online Batch Utility to Full Workstation IDE',
        detail:
          'Showcases how my self-initiated C#/.NET 5 PLE batch scanner at Old Dominion University evolved into a modular 5-project .NET 10 solution hosting VS Code’s Monaco diff editor, Live Chromium DOM inspection, and SSO-authenticated crawl queues.'
      },
      {
        title: 'Enterprise GPO/MSI Deployment & SARIF 2.1.0 CI/CD Integration',
        detail:
          'Packaged via RaggieSoft Installer Studio (zero-dependency Win32 C++20 instbuild.exe .rsip/.rsis compiler) with silent Enterprise MSI/MST Group Policy properties, Prism-piercing x64/ARM64 detection, and headless CLI SARIF 2.1.0 exit-code gates.'
      }
    ],
    accessibilityDeepDive: [
      {
        title: '100% Source-Code WCAG 2.2 AA & Section 508 Web Focus',
        detail:
          'Demonstrates source-level HTML5/CSS/ARIA refactoring (converting legacy visual markup into <th scope>, explicit <label> bindings, and semantic landmarks) rather than after-the-fact overlays.'
      },
      {
        title: 'IBM Carbon 2x Grid & Accessible Data Tables',
        detail:
          'Presents WCAG rule matrices, CLI exit codes, and MSI property references inside semantic, keyboard-navigable Carbon tables with high-contrast focus states.'
      },
      {
        title: 'Live Vision, Reflow & Tab-Order Emulation Documentation',
        detail:
          'Details how the workstation IDE tests 400% zoom reflow (WCAG 1.4.10), Windows Forced-Colors (High Contrast), and sequential Tab-stop numbering directly against live DOM trees.'
      }
    ]
  }
] as const;
