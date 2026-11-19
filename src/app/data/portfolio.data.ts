/**
 * =============================================================================
 * File: src/app/data/portfolio.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Creative Case Study References)
 * =============================================================================
 * Architectural Purpose:
 * Single source of truth for the technical portfolio of Michael P. Ragsdale.
 * Because RaggieSoft infrastructure enforces a Zero-Database server policy for
 * security and sub-second TTFB, all portfolio metadata, web & native ecosystem
 * specifications, hiring logistics, CI/CD tooling docs, and case studies are
 * strongly typed and compiled directly into the static Angular 19 bundle.
 * =============================================================================
 */

/**
 * Recruiter & Hiring Manager Role-Lens Filter categories.
 * Allows hiring teams from Municipal/State Government, Higher Education,
 * Healthcare, Federal Contractors, or Commercial Engineering organizations to
 * filter production projects and case studies by immediate discipline need.
 */
export type RoleLens =
  | 'all'
  | 'architecture'
  | 'accessibility'
  | 'data-etl'
  | 'devops';

export interface RoleLensOption {
  readonly id: RoleLens;
  readonly label: string;
  readonly shortDescription: string;
}

export interface HiringParameter {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}

export interface EcosystemProperty {
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly url: string;
  readonly categoryLabel: string;
  readonly primaryStack: string;
  readonly architecturalPattern: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly lenses: readonly RoleLens[];
  readonly isCurrentSite?: boolean;
  readonly ctaLabel?: string;
}

export interface DevOpsConstruct {
  readonly codename: string;
  readonly scriptName: string;
  readonly roleTitle: string;
  readonly stack: string;
  readonly summary: string;
  readonly capabilities: readonly string[];
  readonly profileSlug: string;
  readonly profileUrl: string;
}

export interface ArchitecturalCaseStudy {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly organization: string;
  readonly timeframe: string;
  readonly lenses: readonly RoleLens[];
  readonly problemStatement: string;
  readonly architecturalSolution: string;
  readonly quantifiedImpact: readonly { readonly label: string; readonly value: string }[];
  readonly technologies: readonly string[];
  readonly referenceLinks: readonly { readonly label: string; readonly url: string }[];
}

export interface ExperienceEntry {
  readonly functionalTitle: string;
  readonly hrClassification: string;
  readonly organization: string;
  readonly location: string;
  readonly timeframe: string;
  readonly lenses: readonly RoleLens[];
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
}

export interface EducationEntry {
  readonly degree: string;
  readonly institution: string;
  readonly timeframe: string;
  readonly statusNote: string;
  readonly focusAreas: readonly string[];
}

/**
 * Canonical identity, summary, and verified recruiter contact channels.
 */
export const EXECUTIVE_PROFILE = {
  fullName: 'Michael P. Ragsdale',
  headline: 'Full-Stack Web Developer & Section 508 Accessibility Specialist',
  location: 'Norfolk / Virginia Beach, VA (Hampton Roads)',
  statusBadge: 'Available for W-2 Full-Stack Web, Software & Section 508 Roles',
  executiveSummary:
    'Full-Stack Web Developer and Section 508 Accessibility Specialist combining institutional accessibility remediation at Old Dominion University, public-facing municipal operations with the City of Virginia Beach, and hands-on software engineering. Creator of the open-source Stardust Engine CMS, an 11-property zero-database web ecosystem, and companion C#/.NET 10 WPF and SwiftUI desktop/mobile applications.',
  valueProposition:
    'I focus on three practical engineering standards across every project: genuine Section 508 and WCAG 2.1 AA accessibility for real users, fast static-first performance, and clear, well-documented code that teams can maintain.',
  assets: {
    logoUrl: 'https://assets.raggiesoft.com/raggiesoft-corporate/images/logos/logo-michael.png',
    portraitLightUrl:
      'https://assets.raggiesoft.com/raggiesoft-corporate/images/mragsdale-aero/mragsdale-frutiger-aero.jpg',
    portraitDarkUrl:
      'https://assets.raggiesoft.com/raggiesoft-corporate/images/mragsdale-aero/mragsdale-dark-aero.jpg',
    resumePdfUrl:
      'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf',
    directEmail: 'mailto:hello@michaelpragsdale.com',
    directEmailDisplay: 'hello@michaelpragsdale.com',
    githubUrl: 'https://github.com/raggiesoft'
  }
} as const;

/**
 * Interactive Role-Lens Filter definitions powered by Angular Signals.
 */
export const ROLE_LENSES: readonly RoleLensOption[] = [
  {
    id: 'all',
    label: 'All Projects & Case Studies',
    shortDescription:
      'Showing all 11 live production web properties, 5 engineering & accessibility case studies, and full work history.'
  },
  {
    id: 'architecture',
    label: 'Full-Stack & Native Apps',
    shortDescription:
      'Focused on multi-framework web apps (TypeScript, Angular 19, PHP 8.5 MVC, React 19 / Next.js 16, Svelte 5, Astro 6, Nuxt 4) and native C#/.NET 10 WPF + SwiftUI software.'
  },
  {
    id: 'accessibility',
    label: 'Section 508 & WCAG 2.1 AA',
    shortDescription:
      'Focused on higher-education & government Section 508 compliance, Deque axe + manual JAWS/NVDA/VoiceOver testing, Forced-Colors High Contrast, and Dual-Layer Canvas ARIA.'
  },
  {
    id: 'data-etl',
    label: 'Data & Information Workflows',
    shortDescription:
      'Focused on ActiveNet operational data processing, Section 508 document design, JSON/Markdown static APIs, and full-text search indexing.'
  },
  {
    id: 'devops',
    label: 'Linux, Cloud & CI/CD Tooling',
    shortDescription:
      'Focused on Ubuntu/Nginx server administration, Cloudflare DNS/SSL routing, DigitalOcean Spaces S3 CDN sync, FFmpeg pipelines, and non-root cron deployments.'
  }
] as const;

/**
 * Welcoming, practical Hiring & Role Alignment summary for recruiters and HR teams.
 */
export const HIRING_PARAMETERS: readonly HiringParameter[] = [
  {
    label: 'Target Roles',
    value: 'Full-Stack Web Developer • Section 508 Accessibility Specialist • Front-End / Software Developer',
    detail:
      'Bringing higher-education Section 508 remediation experience, municipal customer-facing operations, and full-stack web & desktop development.'
  },
  {
    label: 'Employment Type',
    value: 'Full-Time W-2 (Direct Hire or W-2 Government / Enterprise Contractor)',
    detail:
      'Seeking stable W-2 employment with municipal, state/university, healthcare, commercial enterprise, or federal contracting teams.'
  },
  {
    label: 'Location & Schedule',
    value: 'Hampton Roads, VA — On-Site, Hybrid, or Remote within Virginia',
    detail:
      'Based in Norfolk / Virginia Beach, VA. Available for local Hampton Roads on-site/hybrid schedules or Virginia-based remote roles while completing my A.S. in IT at TCC.'
  },
  {
    label: 'Citizenship & State Eligibility',
    value: 'U.S. Citizen • Virginia AHP Eligible • Prior Federal Public Trust (6C) Adjudication',
    detail:
      'U.S. Citizen eligible for the Commonwealth of Virginia Alternative Hiring Process (AHP) and federal background vetting, with a prior favorable Federal Public Trust (6C) suitability adjudication.'
  },
  {
    label: 'Accessibility Toolchain',
    value: 'Section 508 • WCAG 2.1 AA • Deque axe, WAVE, JAWS, NVDA & VoiceOver',
    detail:
      'Combines manual assistive-technology testing with direct HTML5, CSS, TypeScript, ARIA, and Microsoft Office/PDF remediation.'
  },
  {
    label: 'Live Work Samples',
    value: '11 Production Web Properties, C#/.NET & SwiftUI Apps, and GitHub',
    detail:
      'Happy to walk through live production codebases, accessibility audits, and standard technical interviews with your engineering team.'
  }
] as const;

/**
 * Polyglot Production Web Ecosystem Matrix (11 Live Properties).
 * Demonstrates practical fluency across modern web frameworks and vanilla
 * web standards while maintaining zero server-side SQL database overhead.
 */
export const POLYGLOT_ECOSYSTEM: readonly EcosystemProperty[] = [
  {
    id: 'raggiesoft-portfolio',
    name: 'Engineering & Section 508 Portfolio (This Site)',
    domain: 'michaelpragsdale.com',
    url: 'https://michaelpragsdale.com',
    categoryLabel: '01 • Engineering & Accessibility Portfolio',
    primaryStack: 'Angular 19 (Standalone + Zoneless Signals + TypeScript 5.7) + Modern Native CSS',
    architecturalPattern: 'Static Single-Page Application with Native CSS Cascade Layers (@layer), Subgrid & Container Queries',
    summary:
      'Built on a dedicated domain to demonstrate clean TypeScript and Zoneless Angular Signals architecture alongside dependency-free modern CSS and strict Section 508 semantics.',
    highlights: [
      'Zero zone.js runtime overhead via provideExperimentalZonelessChangeDetection() and reactive Angular Signals (signal, computed).',
      '100% Native Modern CSS architecture (@layer, CSS Grid subgrid, @container queries, light-dark() with prefers-color-scheme and forced-colors fallbacks) with zero CSS framework bloat.',
      'Sub-second Largest Contentful Paint (LCP) using native system font stacks, pre-rendered OpenGraph route entry points, and Schema.org ProfilePage JSON-LD.'
    ],
    tags: ['Angular 19', 'TypeScript 5.7', 'Zoneless Signals', 'CSS @layer', 'CSS Subgrid', 'Container Queries', 'Section 508'],
    lenses: ['architecture', 'accessibility'],
    isCurrentSite: true
  },
  {
    id: 'raggiesoft-hub',
    name: 'RaggieSoft Hub & Stardust Engine CMS',
    domain: 'raggiesoft.com',
    url: 'https://raggiesoft.com',
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
    ctaLabel: 'Visit Root Hub (raggiesoft.com)'
  },
  {
    id: 'raggiesoft-corporate',
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
    ctaLabel: 'Visit Corporate Hub (corporate.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-engineroom',
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
    tags: ['Astro 6', 'Static SSG', 'Multi-Tenant Routing', 'JSON Data Lake', 'ISRC Registry', 'Section 508'],
    lenses: ['architecture', 'accessibility', 'data-etl', 'devops'],
    ctaLabel: 'Visit Imprint Hub (engineroom.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-music',
    name: 'The Listening Room & WebVTT Lyric Sync Studio',
    domain: 'music.raggiesoft.com',
    url: 'https://music.raggiesoft.com',
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
    ctaLabel: 'Visit The Listening Room (music.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-stardust',
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
    ctaLabel: 'Visit Stardust Portal (stardust.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-book-library',
    name: 'RaggieSoft Book Reader (Ocean View Archives)',
    domain: 'books.raggiesoft.com',
    url: 'https://books.raggiesoft.com',
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
    ctaLabel: 'Visit Book Reader (books.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-backstage',
    name: 'RaggieSoft Backstage (Web Components & Static API)',
    domain: 'backstage.raggiesoft.com',
    url: 'https://backstage.raggiesoft.com',
    categoryLabel: '08 • Web Components SSG & Cross-Origin JSON API',
    primaryStack: 'Web Awesome Pro 3.13 (Custom Elements) + Font Awesome Pro+ + Node.js ESM SSG & PWA',
    architecturalPattern: 'Standards-Based Web Components Portal & Static CORS JSON API (/api/v1/*.json)',
    summary:
      ' Progressive Web App built on standards-based Web Components (<wa-*>) that compiles Markdown dossiers into both accessible HTML routes and static JSON API endpoints consumed by web and native desktop clients.',
    highlights: [
      'Integrates Web Awesome custom elements (<wa-data-grid>, <wa-tab-group>, <wa-drawer>, <wa-dialog>) with synchronized light-dark() and forced-colors High Contrast support.',
      'Generates versioned static JSON endpoints (/api/v1/index.json and per-entry payloads) consumed by books.raggiesoft.com and native C#/.NET & SwiftUI apps.',
      'Includes an offline-capable Service Worker and Web App Manifest with zero server-side runtime dependencies.'
    ],
    tags: ['Web Components', 'Web Awesome 3.13', 'Node.js SSG', 'Static JSON API', 'Progressive Web App', 'Section 508'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Backstage PWA (backstage.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-lore',
    name: 'RaggieSoft Lore Graph & Accessible Canvas Engine',
    domain: 'lore.raggiesoft.com',
    url: 'https://lore.raggiesoft.com',
    categoryLabel: '09 • Knowledge Graph & Accessible HTML5 Canvas',
    primaryStack: 'Next.js 16 + React 19 + Tailwind CSS v4 + HTML5 Canvas + Parallel ARIA Shadow DOM',
    architecturalPattern: 'Dual-Layer Accessible Canvas Visualization & Interactive Knowledge Graph',
    summary:
      'Demonstrates how interactive 60fps HTML5 <canvas> visualizations can achieve full Section 508 keyboard and screen-reader parity.',
    highlights: [
      'Implements a Dual-Layer Canvas Accessibility Pattern pairing a 2D graphical canvas with a synchronized, keyboard-navigable ARIA DOM layer.',
      'Delivers deterministic node relationship and state announcements to JAWS, NVDA, and VoiceOver via polite ARIA live regions.',
      'Compiled via Next.js 16, React 19, and Tailwind CSS v4 static export for fast edge delivery.'
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'HTML5 Canvas', 'ARIA Live Regions', 'Section 508'],
    lenses: ['architecture', 'accessibility'],
    ctaLabel: 'Visit Lore Graph (lore.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-nebulae',
    name: 'Nebulae Cosmic Observatory & Contrast Lab',
    domain: 'nebulae.raggiesoft.com',
    url: 'https://nebulae.raggiesoft.com',
    categoryLabel: '10 • Interactive Visualization & Contrast Lab',
    primaryStack: 'Custom Node.js Compiler + Vanilla ES2024 Canvas + High-Contrast CSS Tokens',
    architecturalPattern: 'Static Astronomical Visualization & Accessible Translucent Surface Lab',
    summary:
      'Interactive deep-space visualizer and UI token testbed validating WCAG 2.1 AA contrast ratios and reduced-motion behavior over dynamic canvas backgrounds.',
    highlights: [
      'Compiles structured astronomical metadata into a zero-database interactive visualizer with hardware-accelerated rendering.',
      'Pairs translucent backdrop-filter surfaces with opaque fallback tokens to preserve >= 4.5:1 text contrast across Light and Dark modes.',
      'Supports full keyboard navigation and prefers-reduced-motion compliance.'
    ],
    tags: ['Node.js SSG', 'ES2024 Canvas', 'Contrast Engineering', 'prefers-reduced-motion', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Visit Nebulae Visualizer (nebulae.raggiesoft.com)'
  },
  {
    id: 'storetrainer',
    name: 'RaggieSoft StoreTrainer',
    domain: 'storetrainer.raggiesoft.com',
    url: 'https://storetrainer.raggiesoft.com',
    categoryLabel: '11 • Pre-AI Win32 Desktop Utility & TypeScript Portal',
    primaryStack: 'Visual Basic 6.0 (x86) + Win32 API + .NET Port + NSIS + Vanilla TypeScript / Vite',
    architecturalPattern: 'Cross-Era Win32 Desktop Utility (Windows 95 through Windows 11) & Accessible Retro Web Portal',
    summary:
      '100% hand-written (pre-AI, 2018–2020) Win32 desktop utility built to index and launch PC games alongside trainer utilities and CLI flags across legacy and modern Windows OS releases.',
    highlights: [
      'Hand-written in Visual Basic 6.0 (TStore.vbp) with a .NET port (TStore.NET), using dynamic Win32 API resolution (GetProcAddress for IsWow64Process) for safe 32/64-bit detection back to Windows 95.',
      'Packaged via an OS-aware NSIS installer (TSSetup.nsi) that conditionally deploys legacy runtimes and bundles the full source tree for code inspection.',
      'Companion web portal built in Vanilla TypeScript + Vite meets modern Section 508 and Light/Dark mode contrast standards inside a classic Win32 aesthetic.'
    ],
    tags: ['Visual Basic 6.0', 'Win32 API', 'TStore.NET', 'NSIS Installer', 'Vanilla TypeScript', 'Hand-Written Pre-AI'],
    lenses: ['architecture', 'devops', 'data-etl'],
    ctaLabel: 'Visit StoreTrainer Portal (storetrainer.raggiesoft.com)'
  }
] as const;

/**
 * Modular CI/CD, Content Compilation & Deployment Tooling Summary Cards.
 */
export const DEVOPS_CONSTRUCTS: readonly DevOpsConstruct[] = [
  {
    codename: 'paige.php',
    scriptName: 'raggiesoft-deployment-tools/paige.php',
    roleTitle: 'Markdown Manuscript, Search Index & EPUB/PDF Compiler',
    stack: 'PHP 8.5 CLI • JSON Route Trees • Pandoc / XeLaTeX',
    summary:
      'Command-line publishing compiler that validates Markdown chapter hierarchies, generates static JSON route manifests and full-text search indices, and packages downloadable EPUB/PDF editions.',
    capabilities: [
      'Compiles multi-book Markdown trees into structured JSON route manifests (toc.json, catalog.json) and a full-text search-index.json for books.raggiesoft.com.',
      'Validates YAML frontmatter chronology, illustration asset existence, and internal cross-chapter link integrity before deployment.',
      'Packages offline .7z bundles and accessible EPUB/PDF deliverables consumed by web and native desktop Book Reader clients.'
    ],
    profileSlug: 'paige',
    profileUrl: '/build-team/paige'
  },
  {
    codename: 'jessica.raggiesoft.com',
    scriptName: 'NYC1 Ubuntu VPS (142.93.244.239)',
    roleTitle: 'Hardened Ubuntu Linux, Nginx & PHP 8.5-FPM Production Host',
    stack: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • UFW / Ed25519 SSH',
    summary:
      'Consolidated DigitalOcean production Droplet in NYC1 serving all 11 web properties behind Cloudflare TLS 1.3, strict CSP headers, and isolated virtual host configurations.',
    capabilities: [
      'Enforces Ed25519 SSH key-only authentication, UFW perimeter firewall rules, and zero open database ports.',
      'Serves 11 Nginx virtual hosts (/var/www/*) with immutable static asset caching, clean 301 edge redirects, and PHP 8.5-FPM worker pools.',
      'Version-controls all server virtual host definitions inside a dedicated nginx-config repository.'
    ],
    profileSlug: 'jessica',
    profileUrl: '/build-team/jessica'
  },
  {
    codename: 'harper.sh',
    scriptName: 'raggiesoft-deployment-tools/harper.sh',
    roleTitle: 'Multi-Core FFmpeg Audio Mastering & Media Pipeline',
    stack: 'Bash • FFmpeg • Metal RealESRGAN • WebVTT Validation • 7-Zip',
    summary:
      'Idempotent studio media pipeline that transcodes lossless vault WAV masters into normalized streaming formats, validates human-timed WebVTT captions, and packages downloadable archives.',
    capabilities: [
      'Normalizes audio streams via FFmpeg across logical CPU cores while keeping 24-bit WAV/FLAC masters isolated in a local vault (/raggiesoft-vaults) off public cloud storage.',
      'Verifies NOTE SYNC_TYPE: HUMAN_VERIFIED WebVTT lyric files so synchronized closed captions stay locked to vocal phrasing.',
      'Packages multi-tier MP3, OGG, FLAC, and WAV archives alongside album metadata and upscaled cover artwork.'
    ],
    profileSlug: 'harper',
    profileUrl: '/build-team/harper'
  },
  {
    codename: 'jenna-sync.sh',
    scriptName: 'raggiesoft-deployment-tools/jenna-sync.sh',
    roleTitle: 'Multi-Repo Pre-Push Build Gate & S3 CDN Orchestrator',
    stack: 'Bash • Multi-Repo Git • Node.js / Angular / SvelteKit • rclone',
    summary:
      'Single-command release script executing polyglot production builds, SEO/link verification gates, multi-repository Git commits, and differential DigitalOcean Spaces S3 CDN synchronization.',
    capabilities: [
      'Runs production builds and validation suites across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Web Awesome SSG, and PHP 8.5 properties prior to Git push.',
      'Synchronizes public static media (/raggiesoft-assets) to DigitalOcean Spaces CDN (assets.raggiesoft.com) via rclone while excluding private local vaults.',
      'Prevents partial or out-of-order releases across 12 interconnected Git repositories.'
    ],
    profileSlug: 'jenna',
    profileUrl: '/build-team/jenna'
  },
  {
    codename: 'sarah-deploy.sh',
    scriptName: 'raggiesoft-deployment-tools/sarah-deploy.sh',
    roleTitle: 'Non-Root Cron Continuous Deployment Daemon',
    stack: 'Bash • 5-Min Cron • Git SHA Verification • Non-Root rsync',
    summary:
      'Server-side continuous deployment script polling GitHub remotes on a 5-minute cron schedule, verifying commit SHAs, and promoting pre-built static bundles via atomic rsync.',
    capabilities: [
      'Refuses root or sudo execution (EUID != 0 check) to prevent privilege-escalation risks and root-owned file lockouts under /var/www/.',
      'Compares local HEAD against remote origin/main SHA hashes so unchanged web roots incur zero disk churn.',
      'Normalizes POSIX permissions (755 directories / 644 files) atomically on every deployment.'
    ],
    profileSlug: 'sarah',
    profileUrl: '/build-team/sarah'
  },
  {
    codename: 'amanda/elara.php',
    scriptName: 'raggiesoft.com/www/amanda/elara.php',
    roleTitle: 'Protected Web Root & Single Front-Controller Router',
    stack: 'PHP 8.5 MVC • Nginx try_files • JSON Route Inheritance',
    summary:
      'Two-part Stardust Engine CMS gateway isolating the public document root (/amanda) from templates and routing all dynamic requests through a single PHP 8.5 front controller (elara.php).',
    capabilities: [
      'Keeps application includes, page templates, and JSON route manifests outside the public Nginx document root.',
      'Routes requests exclusively through elara.php via Nginx try_files while returning clean 404s to automated /index.php exploit scanners.',
      'Resolves hierarchical JSON route definitions with shared metadata and layout inheritance.'
    ],
    profileSlug: 'amanda-elara',
    profileUrl: '/build-team/amanda-elara'
  }
] as const;

/**
 * Deep-Dive Engineering & Section 508 Case Studies.
 */
export const ARCHITECTURAL_CASE_STUDIES: readonly ArchitecturalCaseStudy[] = [
  {
    id: 'activenet-municipal-etl',
    code: 'CASE-01',
    title: 'ActiveNet Operational Data Processing & Accessible Front Desk Reference Design',
    organization: 'City of Virginia Beach — Parks & Recreation',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl', 'accessibility'],
    problemStatement:
      'ActiveNet stores detailed recreation center room-rental and reservation records, yet parsing raw reservation screens mid-shift is slow when Front Desk staff are simultaneously assisting walk-in patrons, answering phones, and checking in members.',
    architecturalSolution:
      'Applied software-development and Section 508 accessible-document practices to Front Desk operations: extracted weekend room-rental data from ActiveNet, verified and reorganized reservation records, and formatted them into a concise, standardized Microsoft Word reference with clear heading hierarchy and scannable layout.',
    quantifiedImpact: [
      { label: 'Operational Output', value: 'Standardized Weekend Reference' },
      { label: 'Document Structure', value: 'Section 508 Heading Hierarchy' },
      { label: 'Front Desk Benefit', value: 'At-a-Glance Staff Lookup' }
    ],
    technologies: ['ActiveNet', 'Microsoft Word / Office', 'Section 508', 'Accessible Information Design', 'Process Improvement'],
    referenceLinks: [
      { label: 'Download Resume (PDF)', url: 'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf' }
    ]
  },
  {
    id: 'odu-section-508-gatekeeper',
    code: 'CASE-02',
    title: 'Canvas LMS Migration & Section 508 Course Remediation',
    organization: 'Old Dominion University (ODU Online)',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    problemStatement:
      'During ODU Online’s transition to the Canvas Learning Management System (LMS), hundreds of asynchronous university course modules required structural HTML/CSS cleanup and Section 508 / WCAG 2.1 AA verification to ensure equitable access for students using assistive technologies.',
    architecturalSolution:
      'Audited and remediated course HTML/CSS pages and instructional documents using Deque axe, WAVE, manual keyboard testing, and JAWS/NVDA screen readers, while developing reusable Section 508-compliant HTML/CSS course templates for instructional designers and faculty.',
    quantifiedImpact: [
      { label: 'Compliance Standard', value: 'Section 508 & WCAG 2.1 AA' },
      { label: 'Testing Workflow', value: 'Deque axe + JAWS / NVDA' },
      { label: 'Reusable Output', value: 'Accessible HTML/CSS Templates' }
    ],
    technologies: ['Section 508', 'WCAG 2.1 AA', 'Deque axe', 'WAVE', 'JAWS / NVDA', 'Semantic HTML5 & CSS', 'Canvas LMS'],
    referenceLinks: [
      { label: 'Download Resume (PDF)', url: 'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf' }
    ]
  },
  {
    id: 'native-desktop-suite',
    code: 'CASE-03',
    title: 'Cross-Platform Native Desktop & Mobile Suite (.NET 10 WPF & Multiplatform SwiftUI)',
    organization: 'RaggieSoft Media (BookReader, ListeningRoom & Backstage Apps)',
    timeframe: '2025 – 2026',
    lenses: ['architecture', 'accessibility', 'data-etl'],
    problemStatement:
      'Readers and listeners wanted native offline desktop and mobile applications on Windows and Apple devices capable of downloading compressed book/audio archives and synchronizing live chapter soundtracks across apps without bundling a local database server.',
    architecturalSolution:
      'Engineered parallel native client suites in C# / .NET 10 WPF (Visual Studio 2026 + Inno Setup 7.1.1 installers for Windows x64/ARM64) and multiplatform SwiftUI (Xcode project targeting macOS, iOS, iPadOS, tvOS, and visionOS). Implemented shared core libraries consuming static CDN JSON APIs, bundled 7-Zip offline archive extraction, tri-directional cross-app IPC (Windows Named Pipes and Apple DistributedNotificationCenter / custom URL schemes), and full UIAutomation (Narrator/NVDA) and VoiceOver accessibility.',
    quantifiedImpact: [
      { label: 'Windows Stack', value: 'C# / .NET 10 WPF + Named Pipes IPC' },
      { label: 'Apple Stack', value: 'Multiplatform SwiftUI + StoreKit 2' },
      { label: 'Assistive Support', value: 'UIAutomation & VoiceOver Ready' }
    ],
    technologies: ['C#', '.NET 10 WPF', 'SwiftUI', 'Named Pipes IPC', 'UIAutomation', 'VoiceOver', 'Inno Setup', 'Static JSON APIs'],
    referenceLinks: [
      { label: 'Inspect Web Companion (books.raggiesoft.com)', url: 'https://books.raggiesoft.com' },
      { label: 'Inspect Audio Companion (music.raggiesoft.com)', url: 'https://music.raggiesoft.com' }
    ]
  },
  {
    id: 'dual-layer-canvas-a11y',
    code: 'CASE-04',
    title: 'Dual-Layer Canvas Accessibility: 60fps HTML5 Graphics with Screen-Reader Parity',
    organization: 'RaggieSoft Media (lore.raggiesoft.com)',
    timeframe: '2025 – Present',
    lenses: ['accessibility', 'architecture'],
    problemStatement:
      'Standard HTML5 `<canvas>` elements render as an unlabeled bitmap surface, leaving keyboard-only and screen-reader users unable to inspect nodes, relationships, or spatial state.',
    architecturalSolution:
      'Built a Dual-Layer Canvas Synchronization pattern in TypeScript and React 19. While the render loop draws interactive 2D graphics on `<canvas>`, a state-synchronized parallel ARIA DOM layer exposes focusable controls, node relationships, and polite `aria-live` status updates to assistive technologies.',
    quantifiedImpact: [
      { label: 'Visual Frame Rate', value: '60 FPS 2D Canvas Render Loop' },
      { label: 'Assistive Parity', value: 'Synchronized Keyboard & ARIA Tree' },
      { label: 'Display Modes', value: 'Forced-Colors & Reduced-Motion Ready' }
    ],
    technologies: ['TypeScript', 'React 19', 'Next.js 16', 'HTML5 Canvas', 'ARIA Live Regions', 'WCAG 2.1 AA'],
    referenceLinks: [
      { label: 'Visit Lore Graph (lore.raggiesoft.com)', url: 'https://lore.raggiesoft.com' }
    ]
  },
  {
    id: 'cascade-protocol-decoupling',
    code: 'CASE-05',
    title: '11-Property Static-First Web Decoupling & Single-Command CI/CD',
    organization: 'RaggieSoft Infrastructure (NYC1 Linux VPS + S3 CDN)',
    timeframe: '2024 – 2026',
    lenses: ['architecture', 'devops', 'data-etl'],
    problemStatement:
      'Hosting corporate licensing, 40+ music albums, serialized books, interactive visualizations, and an engineering portfolio inside one monolithic repository created tight coupling—while adding SQL databases would increase patching overhead and attack surface.',
    architecturalSolution:
      'Decoupled the platform into 11 focused properties (`raggiesoft.com`, nine `*.raggiesoft.com` subdomains, and `michaelpragsdale.com`) backed by flat-file JSON and Markdown repositories plus DigitalOcean Spaces CDN (`assets.raggiesoft.com`). Unified cross-site navigation via a shared lightweight script (`raggiesoft-network.js`) and automated builds, validation, and non-root server deployments via `jenna-sync.sh` and `sarah-deploy.sh`.',
    quantifiedImpact: [
      { label: 'SQL Attack Surface', value: '0 Relational Databases' },
      { label: 'Live Web Properties', value: '11 Decoupled Production Sites' },
      { label: 'Release Workflow', value: 'Automated Pre-Push Build Gates' }
    ],
    technologies: ['Angular 19', 'PHP 8.5 MVC', 'Svelte 5', 'Astro 6', 'Nuxt 4', 'Next.js 16', 'Web Awesome', 'Nginx', 'DigitalOcean Spaces'],
    referenceLinks: [
      { label: 'Inspect CI/CD Tooling (/build-team)', url: '/build-team' },
      { label: 'Visit Engine Room Imprint (Astro 6)', url: 'https://engineroom.raggiesoft.com' }
    ]
  }
] as const;

/**
 * Chronological Professional Experience with Transparent HR Classification Mapping.
 */
export const EXPERIENCE_TIMELINE: readonly ExperienceEntry[] = [
  {
    functionalTitle: 'Independent Full-Stack Web Developer & Creator',
    hrClassification: 'Independent Software & Digital Publishing (raggiesoft.com — Est. Jul 2008)',
    organization: 'RaggieSoft Media',
    location: 'Norfolk, VA',
    timeframe: '2008 – Present',
    lenses: ['architecture', 'accessibility', 'devops', 'data-etl'],
    summary:
      'Design, build, and maintain an independent software development and digital publishing ecosystem spanning open-source PHP/JS web frameworks, 11 live web properties, cross-platform C#/.NET and SwiftUI apps, and Linux cloud infrastructure.',
    achievements: [
      'Built and open-sourced Stardust Engine CMS (MIT License, PHP 8.5 MVC + JSON routing) alongside decoupled web applications in Angular 19, SvelteKit 2 + Svelte 5, React 19 + Next.js 16, Astro 6, Nuxt 4, Bootstrap 5.3.8, and Web Awesome.',
      'Developed companion native desktop and mobile apps in C# / .NET 10 WPF (Windows) and SwiftUI (macOS, iOS, iPadOS) with offline archive support, cross-app IPC, and native UIAutomation / VoiceOver accessibility.',
      'Automated multi-repo build verification, FFmpeg audio normalization, human-verified WebVTT caption checks, S3 CDN synchronization, and non-root Ubuntu/Nginx deployments via modular CLI scripts.'
    ],
    technologies: ['TypeScript', 'PHP 8.5', 'Angular 19', 'React 19 / Next.js', 'Svelte 5', 'C# / .NET 10 WPF', 'SwiftUI', 'Linux / Nginx', 'Section 508']
  },
  {
    functionalTitle: 'Clerk-Cashier',
    hrClassification: 'City of Virginia Beach Parks & Recreation (Current Municipal Role While Completing A.S. in IT)',
    organization: 'City of Virginia Beach — Parks & Recreation',
    location: 'Virginia Beach, VA',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl', 'accessibility'],
    summary:
      'Support daily recreation center Front Desk operations while applying a software-development and Section 508 accessibility background to improve staff reference materials and everyday technical workflows.',
    achievements: [
      'Support daily recreation center operations by assisting patrons in person and by telephone, processing payments, issuing memberships, checking members into the facility, and resolving account and service questions.',
      'Extract room-rental information from ActiveNet and convert complex reservation records into a concise, standardized Microsoft Word reference built with Section 508 accessible-document principles so Front Desk staff have an at-a-glance view of weekend facility use.',
      'Serve as an approachable technical resource for coworkers using ActiveNet, Microsoft Office, and related Front Desk systems, troubleshooting everyday issues and identifying opportunities for clearer operational workflows.'
    ],
    technologies: ['ActiveNet', 'Microsoft Word / Office', 'Section 508', 'Accessible Information Design', 'Customer Support', 'Process Improvement']
  },
  {
    functionalTitle: 'Computer Operations (Web & Section 508 Accessibility)',
    hrClassification: 'Official University HR Classification: Computer Operations Tech',
    organization: 'Old Dominion University (ODU Online)',
    location: 'Norfolk, VA',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    summary:
      'Supported ODU Online’s transition to the Canvas LMS by auditing and remediating university web content, course modules, and templates for Federal Section 508 and WCAG 2.1 AA compliance.',
    achievements: [
      'Audited and remediated university web pages, course modules, and instructional documents for accessibility and structural consistency during ODU Online’s Canvas LMS migration.',
      'Conducted Section 508 and WCAG 2.1 AA reviews combining automated scanners (Deque axe, WAVE) with manual keyboard testing and JAWS / NVDA screen-reader verification.',
      'Developed reusable, Section 508-compliant HTML and CSS course module templates that helped instructional designers and faculty publish accessible distance-learning materials.'
    ],
    technologies: ['Section 508', 'WCAG 2.1 AA', 'Deque axe', 'WAVE', 'JAWS / NVDA', 'Semantic HTML/CSS', 'Canvas LMS']
  },
  {
    functionalTitle: 'Mobile Applications Developer Intern',
    hrClassification: 'Official HR Title: Developer Intern',
    organization: 'Dominion Enterprises',
    location: 'Norfolk, VA',
    timeframe: 'Sep 2012 – Dec 2012',
    lenses: ['architecture'],
    summary:
      'Contributed to cross-platform mobile application development and REST API integration within an Agile software engineering team.',
    achievements: [
      'Developed and tested cross-platform iOS and Android mobile application views consuming commercial listing REST APIs using JavaScript and the Titanium SDK.',
      'Collaborated with senior developers on responsive UI patterns, cross-device debugging, and version-controlled release cycles.'
    ],
    technologies: ['JavaScript', 'Mobile App Development', 'REST APIs', 'Agile Scrum']
  }
] as const;

/**
 * Academic Credentials & Continuing Education.
 */
export const EDUCATION_CREDENTIALS: readonly EducationEntry[] = [
  {
    degree: 'Associate of Science (A.S.) in Information Technology (Focus: Software Engineering & Web Dev)',
    institution: 'Tidewater Community College — Virginia Beach / Norfolk, VA',
    timeframe: 'Expected Graduation: December 2027',
    statusNote: 'Current In-State Student',
    focusAreas: [
      'Software Engineering, Full-Stack Web Development & Object-Oriented Programming',
      'Network Fundamentals, Linux Administration & Cybersecurity Principles',
      'Relational Database Design, Data Structures & Problem Solving'
    ]
  },
  {
    degree: 'Bachelor of Science (B.S.) Coursework — Customized Studies in Leadership & Information Systems',
    institution: 'Old Dominion University — Norfolk, VA',
    timeframe: 'Prior Coursework',
    statusNote: 'Undergraduate Coursework in Technical Communication & Information Systems',
    focusAreas: [
      'Organizational Leadership & Cross-Functional Team Collaboration',
      'Public-Sector & Higher-Education Information Systems',
      'Accessible Technical Communication & Section 508 Principles'
    ]
  },
  {
    degree: 'Certificate in Business & Information Technology',
    institution: 'Wilson Workforce and Rehabilitation Center (formerly Woodrow Wilson Rehabilitation Center) — Fishersville, VA',
    timeframe: 'Graduated: 2011',
    statusNote: 'Business Operations & Information Technology Credential',
    focusAreas: [
      'Business Information Systems, Office Productivity & Technical Operations',
      'Assistive Technology & Accessible Workplace Practices'
    ]
  }
] as const;

/**
 * =============================================================================
 * CI/CD & MEDIA AUTOMATION SUITE (/build-team & /build-team/:slug)
 * =============================================================================
 * Technical documentation for the modular command-line scripts, front-controller
 * router, and Linux server configuration powering RaggieSoft's 11 web properties.
 * Keeps all `/build-team` and `/build-team/:slug` routes active with pure
 * DevOps, security, and platform-engineering documentation.
 * =============================================================================
 */

export interface BuildTeamVitalStat {
  readonly label: string;
  readonly value: string;
  readonly isBadge?: boolean;
}

export interface BuildTeamTerminalBlock {
  readonly headerTitle: string;
  readonly statusBadge: string;
  readonly promptUser: string;
  readonly command: string;
  readonly outputLines: readonly string[];
}

export interface BuildTeamMember {
  readonly slug: string;
  readonly name: string;
  readonly shortLabel: string;
  readonly icon: string;
  readonly roleTitle: string;
  readonly systemArtifact: string;
  readonly stackBadge: string;
  readonly quote: string;
  readonly cardSummary: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly ogImageUrl: string;
  readonly vitalStats: readonly BuildTeamVitalStat[];
  readonly technicalHeading: string;
  readonly technicalIntro: string;
  readonly technicalCapabilities: readonly { readonly title: string; readonly detail: string }[];
  readonly cliSnippet: {
    readonly comment: string;
    readonly commands: readonly string[];
  };
  readonly operationsHeading: string;
  readonly operationsLead: string;
  readonly operationsParagraphs: readonly string[];
  readonly terminalBlock: BuildTeamTerminalBlock;
}

export const BUILD_TEAM_OVERVIEW = {
  title: 'CI/CD & Media Automation Suite',
  subtitle:
    'Modular PHP 8.5, Bash, FFmpeg, and Linux cron pipelines that build, validate, master, and deploy 11 decoupled web properties.',
  quote:
    'Deterministic pre-push build gates, vault-isolated media mastering, and non-root server deployments keep a multi-framework platform maintainable by one developer.',
  logoUrl: 'https://assets.raggiesoft.com/raggiesoft-corporate/images/logos/logo-michael.png',
  namingNoteTitle: 'Modular CLI Architecture & Script Naming Convention',
  namingNoteLead:
    'Single-responsibility tools in /raggiesoft-deployment-tools/ with clear stage boundaries.',
  namingNoteBody:
    'Across RaggieSoft’s repositories, internal CLI scripts and infrastructure components carry short names borrowed from the creative catalog (paige.php, harper.sh, jenna-sync.sh, sarah-deploy.sh, amanda/elara.php, and jessica.raggiesoft.com). Each module owns exactly one deterministic stage of workstation setup, content compilation, media mastering, S3 CDN synchronization, or non-root Linux deployment.',
  pipelineStages: [
    {
      step: '01 • Workstation Bootstrap',
      command: './brooke.sh && ./backup.sh --sync',
      outcome: 'Provisions CLI toolchains across macOS, Windows 11, and Linux and mirrors workspaces to encrypted/external storage.'
    },
    {
      step: '02 • Content & Media Compilation',
      command: 'php paige.php && ./harper.sh',
      outcome: 'Compiles Markdown chapters into JSON route manifests/EPUBs and normalizes multi-format audio with verified WebVTT captions.'
    },
    {
      step: '03 • Polyglot Pre-Push Gate & CDN Sync',
      command: './jenna-sync.sh --push -m "Release"',
      outcome: 'Builds Angular 19, SvelteKit, Astro, Nuxt, Next.js, and SSG bundles, runs SEO/a11y checks, pushes Git repos, and syncs S3 CDN.'
    },
    {
      step: '04 • Non-Root Server Promotion',
      command: 'cron (5m) -> ./sarah-deploy.sh',
      outcome: 'Verifies remote GitHub commit SHAs as a non-root user on NYC1 and promotes static bundles into /var/www/* via atomic rsync.'
    },
    {
      step: '05 • Hardened Edge & Gateway Serving',
      command: 'jessica.raggiesoft.com -> amanda/elara.php',
      outcome: 'Serves all 11 Nginx virtual hosts behind Cloudflare TLS 1.3, CSP headers, and isolated PHP 8.5 front-controller routing.'
    }
  ]
} as const;

const DEFAULT_OG_IMG = 'https://michaelpragsdale.com/og-image.jpg';

export const BUILD_TEAM_PROFILES: readonly BuildTeamMember[] = [
  {
    slug: 'michael',
    name: 'Workstation & Bootstrap Tooling',
    shortLabel: 'Workstation (brooke.sh)',
    icon: '💻',
    roleTitle: 'Cross-Platform Developer Environment & Workspace Sync',
    systemArtifact: '~/Developer/{brooke.sh,backup.sh,init-windows.ps1}',
    stackBadge: 'Bash • PowerShell 7 • Homebrew / Winget / APT • rsync / rclone',
    quote: 'Reproducible local tooling ensures macOS, Windows 11, and Linux development environments behave identically.',
    cardSummary:
      'OS-agnostic workstation provisioning and workspace synchronization scripts supporting macOS, Windows 11 (.NET 10 / VS 2026), and Linux.',
    ogTitle: 'Workstation & Bootstrap Tooling | Michael P. Ragsdale',
    ogDescription:
      'Cross-platform developer workstation provisioning and backup tooling (brooke.sh, backup.sh) across macOS, Windows 11, and Linux environments.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Artifacts', value: 'brooke.sh • backup.sh • init-windows.ps1' },
      { label: 'Supported OS', value: 'macOS • Windows 11 • Ubuntu/Kubuntu Linux' },
      { label: 'Sync Backends', value: 'POSIX rsync + rclone Fallback', isBadge: true },
      { label: 'Execution Mode', value: 'Idempotent Non-Interactive CLI', isBadge: true }
    ],
    technicalHeading: 'Cross-Platform Provisioning & Workspace Portability',
    technicalIntro:
      'Because RaggieSoft includes web applications alongside native Windows (.NET 10 WPF) and Apple (SwiftUI) desktop projects, local workstation scripts keep CLI dependencies and repositories aligned across operating systems:',
    technicalCapabilities: [
      {
        title: 'Automated Toolchain Provisioning (brooke.sh)',
        detail:
          'Detects macOS (Homebrew), Linux (APT), or Windows (Winget / Git Bash) and installs required build tools (git, php, node, python3, jq, ffmpeg, pandoc, rsync, rclone, 7zip, gh, ripgrep).'
      },
      {
        title: 'Differential Workspace Backup (backup.sh)',
        detail:
          'Mirrors active repositories to external SSD storage and cloud backups while excluding transient build caches (node_modules/, .venv/, bin/, obj/, dist/).'
      },
      {
        title: 'Fresh Windows Bootstrap (init-windows.ps1)',
        detail:
          'Bootstraps Git, PowerShell 7, and developer directory layouts on clean Windows 11 installations prior to running Visual Studio 2026 and Inno Setup builds.'
      }
    ],
    cliSnippet: {
      comment: '# Provision CLI Dependencies & Run Differential Workspace Sync',
      commands: ['./brooke.sh', './backup.sh --sync']
    },
    operationsHeading: 'Operational Design & Maintainability',
    operationsLead: 'Eliminating "works on my machine" configuration drift across desktop and web builds.',
    operationsParagraphs: [
      'Switching between macOS for SwiftUI and web builds, Windows 11 for .NET 10 WPF and Inno Setup installers, and Ubuntu Linux for production parity requires consistent versions of PHP, Node.js, FFmpeg, and Pandoc.',
      'By codifying workstation setup and workspace backups in plain Bash and PowerShell scripts with explicit exclusion lists, a fresh machine or VM can be hydrated and ready to build all repositories in minutes.'
    ],
    terminalBlock: {
      headerTitle: '~/Developer/brooke.sh & backup.sh',
      statusBadge: 'WORKSTATION READY',
      promptUser: 'michael@macbook-pro:~/Developer$',
      command: './backup.sh --sync',
      outputLines: [
        '[brooke] Verified git, php 8.5, node 22, python3, ffmpeg, pandoc, rclone, 7zz.',
        '[backup] External volume 4TBSSD detected. Running differential rsync (excluding node_modules, .venv)...',
        '[backup] Synced raggiesoft-servers, raggiesoft-deployment-tools, desktop-apps, and docs.',
        '[backup] Workspace mirror complete (exit 0).'
      ]
    }
  },
  {
    slug: 'paige',
    name: 'paige.php',
    shortLabel: 'paige.php (Compiler)',
    icon: '📚',
    roleTitle: 'Markdown Manuscript, Search Index & EPUB/PDF Compiler',
    systemArtifact: 'raggiesoft-deployment-tools/paige.php',
    stackBadge: 'PHP 8.5 CLI • JSON Route Compiler • Pandoc / XeLaTeX',
    quote: 'Structured content compilation turns plain Markdown repositories into fast, searchable, database-free web and e-book applications.',
    cardSummary:
      'Ingests hierarchical Markdown chapters, validates YAML frontmatter and asset links, compiles static JSON route tables and full-text search indices, and packages EPUB/PDF editions.',
    ogTitle: 'paige.php — Manuscript & Search Compiler | CI/CD Suite',
    ogDescription:
      'PHP 8.5 command-line compiler transforming Markdown manuscripts into JSON route manifests, full-text search indices, and accessible EPUB/PDF editions.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: 'raggiesoft-deployment-tools/paige.php' },
      { label: 'Runtime', value: 'PHP 8.5 CLI + Pandoc / XeLaTeX' },
      { label: 'Output Format', value: 'JSON Routes + Search Index + .7z/EPUB/PDF', isBadge: true },
      { label: 'Pipeline Stage', value: 'Pre-Build Content Compiler', isBadge: true }
    ],
    technicalHeading: 'Static Data-Lake & E-Book Compilation',
    technicalIntro:
      'Invoked automatically by jenna-sync.sh before web builds run, paige.php transforms raw Markdown source files in raggiesoft-narratives into structured JSON endpoints and downloadable book packages:',
    technicalCapabilities: [
      {
        title: 'Hierarchical Route & TOC Generation',
        detail:
          'Scans book/era/chapter/part Markdown hierarchies, parses YAML metadata, and emits toc.json, catalog.json, and route manifests consumed by books.raggiesoft.com and native BookReader apps.'
      },
      {
        title: 'Client-Side Full-Text Search Indexing',
        detail:
          'Strips YAML frontmatter and Markdown syntax across serialized books to build a compact, static search-index.json without requiring server-side Elasticsearch or SQL queries.'
      },
      {
        title: 'Offline Archive & E-Book Packaging',
        detail:
          'Coordinates with Samantha (samantha-md.sh) and 7-Zip to preserve compiled .epub, .pdf, and <slug>-package.7z offline archives on the public CDN.'
      }
    ],
    cliSnippet: {
      comment: '# Compile Book Route Manifests, Search Index & Offline Archives',
      commands: [
        'php raggiesoft-deployment-tools/paige.php',
        './raggiesoft-deployment-tools/samantha-md.sh --book="katie"'
      ]
    },
    operationsHeading: 'Referential Integrity & Zero-Database Performance',
    operationsLead: 'Catching broken metadata or missing assets at build time rather than in production.',
    operationsParagraphs: [
      'Dynamic CMS platforms often parse templates and query relational databases on every page view. By compiling Markdown sources into pre-validated JSON manifests ahead of time, books.raggiesoft.com serves chapters with near-instant response times.',
      'Build-time validation ensures missing cover art, malformed frontmatter dates, or broken internal route slugs fail fast on the developer workstation before reaching users.'
    ],
    terminalBlock: {
      headerTitle: 'php raggiesoft-deployment-tools/paige.php',
      statusBadge: 'INDEXED & VALIDATED',
      promptUser: 'michael@dev:~/Developer$',
      command: 'php raggiesoft-deployment-tools/paige.php',
      outputLines: [
        '[paige] Scanning narrative repositories in /raggiesoft-narratives/books...',
        '[paige] Validated YAML frontmatter, Story Crossroads routes, and illustration paths.',
        '[paige] Generated toc.json, catalog.json, and route manifests for books.raggiesoft.com.',
        '[paige] Compiled full-text search-index.json and offline .7z packages (exit 0).'
      ]
    }
  },
  {
    slug: 'jessica',
    name: 'jessica.raggiesoft.com',
    shortLabel: 'jessica (Linux Host)',
    icon: '🖥️',
    roleTitle: 'Hardened Ubuntu Linux, Nginx & PHP 8.5-FPM Production Host',
    systemArtifact: 'DigitalOcean NYC1 VPS (142.93.244.239)',
    stackBadge: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • UFW / TLS 1.3',
    quote: 'Consolidating static and SSR virtual hosts onto a hardened, database-free Linux VPS keeps cloud costs low and security tight.',
    cardSummary:
      'Production Ubuntu Linux server in DigitalOcean NYC1 hosting all 11 Nginx virtual hosts, PHP 8.5-FPM worker pools, TLS origin certificates, and UFW perimeter rules.',
    ogTitle: 'jessica.raggiesoft.com — Linux & Nginx Host | CI/CD',
    ogDescription:
      'Hardened Ubuntu Linux VPS on DigitalOcean NYC1 serving 11 Nginx virtual hosts, PHP 8.5-FPM worker pools, TLS 1.3 origin certs, and CSP headers.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Region & IPv4', value: 'DigitalOcean NYC1 (142.93.244.239)' },
      { label: 'Web Stack', value: 'Nginx Reverse Proxy / Static + PHP 8.5-FPM' },
      { label: 'Perimeter Security', value: 'UFW + Ed25519 SSH + Cloudflare TLS 1.3', isBadge: true },
      { label: 'Database Ports', value: '0 Open SQL Ports (Zero-Database)', isBadge: true }
    ],
    technicalHeading: 'Multi-Tenant Nginx Virtual Hosting & Edge Hardening',
    technicalIntro:
      'Rather than paying per-seat SaaS hosting fees for 11 separate domains and subdomains, all web properties run on a single hardened Ubuntu VPS paired with Cloudflare CDN and DigitalOcean Spaces:',
    technicalCapabilities: [
      {
        title: 'SSH & Firewall Hardening',
        detail:
          'Restricts administrative access to key-only Ed25519 SSH behind UFW firewall rules, with TLS 1.2/1.3 origin certificates terminating behind Cloudflare.'
      },
      {
        title: 'Version-Controlled Nginx Configurations',
        detail:
          'Maintains per-domain virtual host configs in nginx-config/*.conf with explicit XML sitemap MIME headers, immutable cache headers, security headers (CSP, HSTS, X-Content-Type-Options), and 301 vanity-domain redirects.'
      },
      {
        title: 'Low-Overhead Resource Profile',
        detail:
          'Because nine properties compile to static HTML/JS/CSS and two run lightweight PHP 8.5-FPM without MySQL/PostgreSQL, CPU and memory utilization remain minimal under load.'
      }
    ],
    cliSnippet: {
      comment: '# Inspect Nginx Virtual Host Syntax & Service Health on NYC1',
      commands: ['ssh michael@jessica.raggiesoft.com', 'sudo nginx -t && systemctl status nginx php8.5-fpm']
    },
    operationsHeading: 'Security Posture & Infrastructure Economics',
    operationsLead: 'Eliminating SQL injection vectors and database maintenance overhead by design.',
    operationsParagraphs: [
      'For content-heavy portals, documentation hubs, and streaming catalogs where data changes only at publish time, running a live relational database introduces unnecessary patching, backup complexity, and credential exposure.',
      'Serving pre-built static bundles and read-only JSON manifests from Nginx while offloading large audio/image binaries to S3-compatible object storage delivers fast global response times on predictable infrastructure.'
    ],
    terminalBlock: {
      headerTitle: 'michael@jessica.raggiesoft.com (NYC1)',
      statusBadge: 'ONLINE • 11 VHOSTS ACTIVE',
      promptUser: 'michael@jessica:~$',
      command: 'systemctl status nginx php8.5-fpm --no-pager',
      outputLines: [
        '● nginx.service - High performance web server and reverse proxy',
        '   Active: active (running) — serving 11 RaggieSoft virtual hosts (/var/www/*)',
        '● php8.5-fpm.service - The PHP 8.5 FastCGI Process Manager',
        '   Active: active (running) — SSR worker pool healthy (0 SQL sockets)'
      ]
    }
  },
  {
    slug: 'harper',
    name: 'harper.sh',
    shortLabel: 'harper.sh (Media)',
    icon: '🎧',
    roleTitle: 'Multi-Core FFmpeg Audio Mastering & Media Pipeline',
    systemArtifact: 'raggiesoft-deployment-tools/harper.sh',
    stackBadge: 'Bash • FFmpeg • Metal RealESRGAN • WebVTT • 7-Zip',
    quote: 'Idempotent media pipelines ensure streaming encodes, closed captions, and downloadable archives stay consistent across 500+ tracks.',
    cardSummary:
      'Multi-threaded Bash media pipeline handling EBU R128 FFmpeg transcoding, lossless vault isolation, GPU image upscaling, and human-verified WebVTT caption packaging.',
    ogTitle: 'harper.sh — FFmpeg & Media Pipeline | CI/CD Suite',
    ogDescription:
      'Multi-core Bash media pipeline executing EBU R128 FFmpeg normalization, Metal RealESRGAN upscaling, and human-verified WebVTT caption validation.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: 'raggiesoft-deployment-tools/harper.sh' },
      { label: 'Media Engines', value: 'FFmpeg • RealESRGAN (Metal) • 7-Zip' },
      { label: 'Audio Standard', value: 'EBU R128 Loudness Normalization', isBadge: true },
      { label: 'Caption Standard', value: 'WebVTT (SYNC_TYPE: HUMAN_VERIFIED)', isBadge: true }
    ],
    technicalHeading: 'Vault-Isolated Audio Transcoding & Caption Verification',
    technicalIntro:
      'Structured into modular Bash stages (harper/01-init.sh through 05-archiver.sh), harper.sh processes master recordings from a private local vault into public streaming and archival tiers:',
    technicalCapabilities: [
      {
        title: 'Decoupled Master Vault Isolation',
        detail:
          'Reads 24-bit WAV studio masters from /raggiesoft-vaults/engine-room-records/ on local storage so raw lossless masters are never exposed directly in public web roots.'
      },
      {
        title: 'Parallel Multi-Format FFmpeg Encoding',
        detail:
          'Detects available logical CPU cores to parallelize normalized web MP3 streams, archival MP3/OGG encodes, and lossless FLAC deliverables.'
      },
      {
        title: 'Human-Verified WebVTT Closed Captioning',
        detail:
          'Validates synchronized .vtt lyric caption files stamped with NOTE SYNC_TYPE: HUMAN_VERIFIED and packages per-song documentation into 6 CC BY-SA 4.0 archive tiers.'
      }
    ],
    cliSnippet: {
      comment: '# Run Parallel Audio Transcoding, VTT Verification & Archive Packaging',
      commands: ['./raggiesoft-deployment-tools/harper.sh']
    },
    operationsHeading: 'Accessible Media Delivery & Idempotency',
    operationsLead: 'Treating time-synced WebVTT transcripts as a first-class build requirement for audio streaming.',
    operationsParagraphs: [
      'Under WCAG 2.1 and Section 508 media guidelines, audio experiences benefit enormously from accurate, synchronized text transcripts. Verifying .vtt timing files prior to packaging ensures both The Listening Room web PWA and native desktop apps render line-by-line captions reliably.',
      'Content-hash and timestamp checks make harper.sh idempotent: re-running the pipeline processes only newly added or modified tracks rather than re-encoding the entire 40-album catalog.'
    ],
    terminalBlock: {
      headerTitle: './raggiesoft-deployment-tools/harper.sh',
      statusBadge: 'MASTERING PIPELINE',
      promptUser: 'michael@studio:~/Developer$',
      command: './raggiesoft-deployment-tools/harper.sh',
      outputLines: [
        '[harper] Source vault: /raggiesoft-vaults/engine-room-records/artists',
        '[harper] Detected multi-core host. Engaging parallel FFmpeg EBU R128 transcoding...',
        '[harper] Verified WebVTT header: NOTE SYNC_TYPE: HUMAN_VERIFIED',
        '[harper] Packaged web-mp3 streams and archival .zip/.7z bundles to /raggiesoft-assets (exit 0).'
      ]
    }
  },
  {
    slug: 'jenna',
    name: 'jenna-sync.sh',
    shortLabel: 'jenna-sync.sh (Release)',
    icon: '🚀',
    roleTitle: 'Multi-Repo Pre-Push Build Gate & S3 CDN Release Orchestrator',
    systemArtifact: 'raggiesoft-deployment-tools/jenna-sync.sh',
    stackBadge: 'Bash • Multi-Repo Git • Polyglot Build Gates • rclone S3',
    quote: 'One non-interactive release command builds every frontend framework, runs SEO and accessibility assertions, pushes Git, and syncs the CDN.',
    cardSummary:
      'Central release orchestrator that compiles all static and SSR web properties, verifies SEO/metadata invariants, commits across 12 Git repositories, and syncs public assets to DigitalOcean Spaces.',
    ogTitle: 'jenna-sync.sh — Multi-Repo & CDN Release | CI/CD Suite',
    ogDescription:
      'Single-command release orchestrator running polyglot build gates across Angular, SvelteKit, Astro, Nuxt, and Next.js before syncing S3 CDN assets.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: 'raggiesoft-deployment-tools/jenna-sync.sh' },
      { label: 'Managed Repos', value: '12 Git Repositories + S3 Object Storage' },
      { label: 'Quality Gates', value: 'TypeScript + SEO + Sitemap Assertions', isBadge: true },
      { label: 'Execution Policy', value: 'Zero Interactive Prompts (CI-Safe)', isBadge: true }
    ],
    technicalHeading: 'Pre-Push Polyglot Build Verification & Hybrid Storage Sync',
    technicalIntro:
      'Direct manual git push commands are avoided across RaggieSoft repositories. Instead, every code or content update runs through jenna-sync.sh:',
    technicalCapabilities: [
      {
        title: 'Sequential & Parallel Framework Builds',
        detail:
          'Invokes paige.php for narrative routes, then executes production builds and validation scripts across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Web Awesome SSG, Bootstrap SSG, and TypeScript/Vite.'
      },
      {
        title: 'Atomic Multi-Repository Git Workflow',
        detail:
          'Stages, commits, and pushes changes across web roots, nginx-config, narratives, and deployment-tools only after every build and SEO assertion exits 0.'
      },
      {
        title: 'Differential S3 CDN Synchronization (rclone)',
        detail:
          'Syncs /raggiesoft-assets (images, CSS/JS network bars, streaming MP3s, resume PDFs) to DigitalOcean Spaces (assets.raggiesoft.com) while excluding private /raggiesoft-vaults directories.'
      }
    ],
    cliSnippet: {
      comment: '# Run Full Polyglot Build Verification, Git Release & S3 CDN Sync',
      commands: ['./raggiesoft-deployment-tools/jenna-sync.sh --push -m "Deploy portfolio and resume updates"']
    },
    operationsHeading: 'Preventing Partial Releases Across Micro-Properties',
    operationsLead: 'Coordinating shared assets, sitemaps, and frontend bundles in a single deterministic workflow.',
    operationsParagraphs: [
      'Operating 11 distinct web properties gives each domain the right tool for its job, but manual per-repo deployments would quickly cause version drift or missing CDN assets.',
      'Centralizing pre-push checks in jenna-sync.sh guarantees that TypeScript compiler errors, broken OpenGraph tags, or invalid sitemaps halt the release locally before any commit reaches GitHub or the production server.'
    ],
    terminalBlock: {
      headerTitle: './jenna-sync.sh --push -m "Release update"',
      statusBadge: 'ALL GATES PASSED',
      promptUser: 'michael@dev:~/Developer$',
      command: './raggiesoft-deployment-tools/jenna-sync.sh --push -m "Release update"',
      outputLines: [
        '[jenna] Step 1: paige.php route & search compilation -> PASS',
        '[jenna] Step 2: Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Backstage SSG -> PASS',
        '[jenna] Step 3: Pushed updated repositories to GitHub origin/main -> PASS',
        '[jenna] Step 4: rclone synced /raggiesoft-assets to do-spaces:assets.raggiesoft.com -> PASS'
      ]
    }
  },
  {
    slug: 'sarah',
    name: 'sarah-deploy.sh',
    shortLabel: 'sarah-deploy.sh (Deploy)',
    icon: '🛡️',
    roleTitle: 'Non-Root Cron Continuous Deployment Daemon',
    systemArtifact: 'raggiesoft-deployment-tools/sarah-deploy.sh',
    stackBadge: 'Bash • 5-Min Cron • Git SHA Diffing • Non-Root rsync',
    quote: 'Least-privilege, pull-based server deployments eliminate inbound CI/CD webhook attack surfaces and root permission hazards.',
    cardSummary:
      'Server-side continuous deployment script running on a 5-minute cron schedule on NYC1, comparing GitHub commit SHAs and promoting static bundles via non-root atomic rsync.',
    ogTitle: 'sarah-deploy.sh — Non-Root Cron Deployer | CI/CD Suite',
    ogDescription:
      'Autonomous non-root Linux deployment daemon verifying GitHub commit SHAs on a 5-minute cron schedule and promoting static bundles via atomic rsync.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh' },
      { label: 'Schedule', value: '5-Minute Linux Cron Poll (Pull-Based CD)' },
      { label: 'Privilege Model', value: 'Strict Non-Root Execution (EUID != 0)', isBadge: true },
      { label: 'Promotion Method', value: 'Git SHA Check + Atomic rsync', isBadge: true }
    ],
    technicalHeading: 'Pull-Based Continuous Deployment & Least Privilege',
    technicalIntro:
      'Running on the NYC1 Ubuntu VPS, sarah-deploy.sh bridges GitHub repositories to live /var/www/* web roots without exposing inbound deployment webhooks or storing production SSH private keys in third-party CI runners:',
    technicalCapabilities: [
      {
        title: 'Explicit Non-Root Guardrail',
        detail:
          'Aborts immediately if invoked as root or via sudo (EUID == 0), ensuring deployed files in /var/www/ never acquire root ownership lockouts.'
      },
      {
        title: 'Commit SHA Comparison',
        detail:
          'Fetches origin/main across each repository and compares git rev-parse HEAD against origin/main—skipping untouched properties with zero I/O overhead.'
      },
      {
        title: 'Atomic Bundle Promotion & Permission Normalization',
        detail:
          'Syncs compiled output directories (dist/, build/, out/, .output/public/) into /var/www/* via rsync --delete and enforces standard 755 directory / 644 file permissions.'
      }
    ],
    cliSnippet: {
      comment: '# Execute Non-Root Deployment Check (Scheduled via 5-Minute Cron)',
      commands: [
        '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh',
        'tail -n 25 /var/log/sarah-deploy.log'
      ]
    },
    operationsHeading: 'Pull-Based Security vs. Push-Based Credentials',
    operationsLead: 'Keeping production SSH keys off external CI providers while maintaining 5-minute release velocity.',
    operationsParagraphs: [
      'Traditional push-based deployments require granting external CI/CD runners inbound SSH access to the production server. A pull-based cron daemon reverses that trust boundary: the server initiates outbound read-only Git fetches to GitHub over HTTPS/SSH.',
      'Combined with pre-compiled static artifacts verified upstream by jenna-sync.sh, production promotions complete in seconds without running heavy npm install or compiler steps on the live web server.'
    ],
    terminalBlock: {
      headerTitle: '/var/log/sarah-deploy.log (NYC1 Cron)',
      statusBadge: 'EUID != 0 VERIFIED',
      promptUser: 'michael@jessica:~$',
      command: '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh',
      outputLines: [
        '[18:45:01] [sarah] Non-root check passed (uid=1000). Polling origin/main across 12 repos...',
        '[18:45:03] [sarah] New commit detected on michaelpragsdale.com (dist/raggiesoft-portfolio/browser).',
        '[18:45:04] [sarah] Atomic rsync -> /var/www/michaelpragsdale.com/ complete.',
        '[18:45:04] [sarah] Normalized permissions (755 dirs / 644 files). Deployment healthy.'
      ]
    }
  },
  {
    slug: 'amanda-elara',
    name: 'amanda/elara.php',
    shortLabel: 'amanda/elara.php (Router)',
    icon: '🔀',
    roleTitle: 'Protected Web Root & Single Front-Controller Router',
    systemArtifact: 'raggiesoft.com/www/amanda/elara.php',
    stackBadge: 'PHP 8.5 MVC • Nginx try_files • JSON Route Inheritance',
    quote: 'Separating the public Nginx document root from application templates and routing through one front controller keeps PHP SSR clean and secure.',
    cardSummary:
      'Stardust Engine CMS gateway architecture pairing an isolated public document root (/amanda) with a single executable PHP 8.5 front-controller script (elara.php).',
    ogTitle: 'amanda/elara.php — Front-Controller Router | CI/CD',
    ogDescription:
      'Two-tier Stardust Engine CMS gateway isolating the static web root directory (/amanda) and routing requests through a single PHP 8.5 front controller.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Gateway Path', value: 'raggiesoft.com/www/amanda/elara.php' },
      { label: 'Engine', value: 'Stardust Engine CMS (MIT Open Source)' },
      { label: 'Directory Isolation', value: 'Templates & Configs Outside Web Root', isBadge: true },
      { label: 'Routing Model', value: 'Single PHP 8.5 Front Controller', isBadge: true }
    ],
    technicalHeading: 'Document-Root Isolation & Declarative JSON Routing',
    technicalIntro:
      'In the open-source Stardust Engine CMS powering raggiesoft.com, incoming HTTP requests are handled through a strict two-layer separation between static web root and executable router:',
    technicalCapabilities: [
      {
        title: 'Isolated Public Document Root (/amanda)',
        detail:
          'Nginx points its root directive exclusively to /amanda, keeping PHP view partials (/pages), shared components (/includes), and route manifests (/data/routes) outside direct public URL traversal.'
      },
      {
        title: 'Single Front-Controller Execution (elara.php)',
        detail:
          'All dynamic routes pass through Nginx try_files into elara.php, which validates the request path, applies 301 edge redirects, merges shared JSON metadata, and renders the SSR response.'
      },
      {
        title: 'Scanner Noise Reduction',
        detail:
          'Automated bots probing legacy paths such as /index.php, /wp-login.php, or /public_html receive immediate static 404 responses at the Nginx layer.'
      }
    ],
    cliSnippet: {
      comment: '# Nginx Front-Controller Configuration for Stardust Engine CMS',
      commands: ['try_files $uri $uri/ /elara.php?$query_string;']
    },
    operationsHeading: 'Defense-in-Depth for Server-Side Rendered PHP',
    operationsLead: 'Applying modern MVC front-controller discipline without heavy framework dependencies.',
    operationsParagraphs: [
      'Historically, PHP applications suffered security issues when include files and configuration scripts lived directly inside public_html alongside user-facing URLs.',
      'By restricting the public web root to a minimal entry directory and whitelisting a single front-controller script in Nginx, Stardust Engine CMS achieves clean URL routing, automatic OpenGraph/JSON-LD injection, and strong defense-in-depth in under a millisecond per request.'
    ],
    terminalBlock: {
      headerTitle: 'nginx-config/raggiesoft.com.conf',
      statusBadge: 'FRONT CONTROLLER ACTIVE',
      promptUser: 'nginx@jessica:~$',
      command: 'cat /etc/nginx/sites-available/raggiesoft.com.conf',
      outputLines: [
        'server {',
        '    server_name raggiesoft.com;',
        '    # 1. Isolate public document root from templates and route JSON',
        '    root /var/www/raggiesoft.com/amanda;',
        '    # 2. Route clean URLs through the single PHP 8.5 front controller',
        '    location / {',
        '        try_files $uri $uri/ /elara.php?$query_string;',
        '    }',
        '}'
      ]
    }
  }
] as const;
