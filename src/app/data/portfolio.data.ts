/**
 * =============================================================================
 * File: src/app/data/portfolio.data.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Narrative Case Study References)
 * =============================================================================
 * Architectural Purpose:
 * Single source of truth for the executive dossier of Michael P. Ragsdale.
 * Because RaggieSoft infrastructure enforces a strict Zero-Database server
 * policy for maximum security and sub-second TTFB, all portfolio telemetry,
 * polyglot ecosystem specifications, hiring logistics, and case studies are
 * strongly typed and compiled directly into the static Angular bundle.
 * =============================================================================
 */

/**
 * Recruiter Role-Lens Filter categories.
 * Allows hiring managers from Defense/DoD, Government/Municipal, or Enterprise
 * engineering teams to filter proof-of-concept systems and case studies by
 * their immediate hiring need.
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
 * Canonical links & assets migrated from
 * `raggiesoft-hub/pages/about/michael-ragsdale/overview.php`.
 */
export const EXECUTIVE_PROFILE = {
  fullName: 'Michael P. Ragsdale',
  headline: 'Systems Architect, Data Normalization Lead & Section 508 Engineer',
  location: 'Norfolk / Virginia Beach, VA (Hampton Roads)',
  statusBadge: 'Active — Pursuing W2 Systems Architect & Accessibility Engineering Roles',
  executiveSummary:
    'Pragmatic Systems Architect and Certified Section 508 / WCAG 2.1 AA Compliance Engineer with 15+ years of full-lifecycle software design, municipal CRM data normalization, and zero-database polyglot web architecture experience. Proven track record of bridging legacy municipal and higher-education infrastructure with resilient, accessible, sub-second modern web applications.',
  valueProposition:
    'I build systems that respect three non-negotiable constraints: strict Section 508 / WCAG accessibility for every citizen, zero-bloat sub-second performance, and self-documenting maintainability without fragile database dependencies.',
  assets: {
    logoUrl: 'https://assets.raggiesoft.com/raggiesoft-corporate/images/logos/logo-michael.png',
    portraitLightUrl:
      'https://assets.raggiesoft.com/raggiesoft-corporate/images/mragsdale-aero/mragsdale-frutiger-aero.jpg',
    portraitDarkUrl:
      'https://assets.raggiesoft.com/raggiesoft-corporate/images/mragsdale-aero/mragsdale-dark-aero.jpg',
    resumePdfUrl:
      'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf',
    directEmail: 'mailto:hireme@michaelpragsdale.com',
    directEmailDisplay: 'hireme@michaelpragsdale.com',
    bookingsUrl:
      'https://outlook.office.com/book/MichaelRagsdaleArchitecturalScreening@raggiesoft.com/s/hsXO14SV2EuCeXFylteKTQ2?ismsaljsauthenabled',
    githubUrl: 'https://github.com/raggiesoft'
  }
} as const;

/**
 * Interactive Role-Lens Filter definitions powered by Angular Signals.
 */
export const ROLE_LENSES: readonly RoleLensOption[] = [
  {
    id: 'all',
    label: 'Complete Dossier (All)',
    shortDescription: 'Showing all 10 polyglot production properties, Section 508 proofs, ETL pipelines, and DevOps automation.'
  },
  {
    id: 'architecture',
    label: 'Systems & Polyglot Architecture',
    shortDescription: 'Focused on multi-framework system design (Angular 19, PHP 8.5 MVC, Svelte 5, Astro 6, Nuxt 4, Next.js 16 / React 19, Bootstrap 5.3.8 SSG, VB6/Win32) and zero-database edge/CDN topology.'
  },
  {
    id: 'accessibility',
    label: 'Section 508 & WCAG 2.1 AA/AAA',
    shortDescription: 'Focused on Federal/DoD Section 508 remediation, Deque axe auditing, Forced-Colors High Contrast, and Dual-Layer Canvas ARIA trees.'
  },
  {
    id: 'data-etl',
    label: 'Data Normalization & Municipal ETL',
    shortDescription: 'Focused on ActiveNet CRM administration, legacy municipal data scrubbing, JSON/Markdown schema pipelines, and automated validation.'
  },
  {
    id: 'devops',
    label: 'DevOps, Linux & CI/CD Automation',
    shortDescription: 'Focused on Ubuntu/Nginx server infrastructure, S3/Spaces CDN synchronization, FFmpeg/RealESRGAN media pipelines, and zero-downtime deploys.'
  }
] as const;

/**
 * "Aggressive Transparency" Hiring & Logistics Parameters.
 * Designed to save recruiters and hiring managers time on initial screening calls.
 */
export const HIRING_PARAMETERS: readonly HiringParameter[] = [
  {
    label: 'Target Roles',
    value: 'Systems Architect • Accessibility Engineer (Section 508) • Senior Full-Stack / Platform Engineer',
    detail: 'Transitioning from municipal front-line technical operations into dedicated Systems Architecture and Accessibility Engineering.'
  },
  {
    label: 'Employment Classification',
    value: 'W2 Full-Time Only (Direct Hire)',
    detail: 'Seeking stable, long-term W2 enterprise, municipal, higher-ed, or defense contractor employment. Zero availability for 1099 or short-term C2C contracts.'
  },
  {
    label: 'Location & Commute Policy',
    value: 'Norfolk, VA — Remote, Hybrid, or On-Site within Virginia',
    detail: 'Domiciled in Norfolk, VA. Must maintain physical residency in the Commonwealth of Virginia to preserve in-state tuition eligibility while completing my degree at Tidewater Community College.'
  },
  {
    label: 'Security Clearance Eligibility',
    value: 'Uncleared (U.S. Citizen — Eligible for Immediate DoD Sponsorship)',
    detail: 'Pristine background (zero criminal or traffic records); previously held federal Public Trust clearance. Ready for immediate Secret / Top Secret sponsorship.'
  },
  {
    label: 'Compensation Alignment',
    value: 'Market Rate / Transparent Salary Bands Required',
    detail: 'Please include the approved W2 base salary band and benefits summary in your initial outreach or Microsoft Bookings pre-screening.'
  },
  {
    label: 'Technical Evaluation Protocol',
    value: 'Live Architectural Review & System Design Over Unpaid Take-Homes',
    detail: 'This live 10-property production ecosystem serves as my code sample. I welcome rigorous live system-design reviews and code walkthroughs, and respectfully decline unpaid multi-day take-home projects.'
  }
] as const;

/**
 * Polyglot Production Ecosystem Matrix (10 Live Properties).
 * Demonstrates mastery across distinct modern web paradigms without relying on
 * any server-side relational database.
 */
export const POLYGLOT_ECOSYSTEM: readonly EcosystemProperty[] = [
  {
    id: 'raggiesoft-portfolio',
    name: 'Executive Systems Dossier (This Site)',
    domain: 'michaelpragsdale.com',
    url: 'https://michaelpragsdale.com',
    categoryLabel: '01 • Executive Architecture Dossier',
    primaryStack: 'Angular 19 (Standalone + Zoneless Signals + TypeScript 5.7) + Modern Native CSS',
    architecturalPattern: 'Static Single-Page Dossier with Native CSS Cascade Layers (@layer), Subgrid & Container Queries',
    summary:
      'Decoupled onto its own standalone root domain to demonstrate enterprise-grade TypeScript and Zoneless Angular Signals architecture favored by Defense, Federal/Municipal Government, and Enterprise engineering organizations.',
    highlights: [
      'Zero zone.js runtime overhead via provideExperimentalZonelessChangeDetection() and reactive Angular Signals (signal, computed).',
      '100% Native Modern CSS architecture (@layer, CSS Grid subgrid, @container queries, light-dark() with prefers-color-scheme and forced-colors fallbacks) — zero CSS framework dependencies.',
      'Sub-second Largest Contentful Paint (LCP) with native system font stacks and embedded Schema.org ProfilePage JSON-LD for ATS parsers.'
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
    categoryLabel: '02 • Root Portal & SSR Governance Hub',
    primaryStack: 'PHP 8.5 MVC (Stardust Engine CMS) + Bootstrap 5.3.8 + Web Awesome SSR',
    architecturalPattern: 'Zero-Database Server-Side Rendered (SSR) Front-Controller MVC with Edge 301 Routing & CSP Hardening',
    summary:
      'Custom-engineered PHP 8.5 MVC platform anchoring the 18-year-old raggiesoft.com root domain, orchestrating legacy 301 edge redirects to decoupled subdomains and serving server-rendered architectural documentation without a SQL attack surface.',
    highlights: [
      'Powered by PHP 8.5 with strict typing, custom front-controller routing, and zero relational database dependencies.',
      'Automatic Open Graph, canonical URL, XML sitemap, and JSON-LD structured data synthesis per route.',
      'Enforces strict Content Security Policy (CSP) headers and WCAG 2.1 AA contrast across both Light and Dark OS color schemes.'
    ],
    tags: ['PHP 8.5 MVC', 'Stardust Engine CMS', 'Bootstrap 5.3.8', 'Web Awesome', 'Zero-Database SSR', 'Nginx'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Inspect Root Hub (raggiesoft.com)'
  },
  {
    id: 'raggiesoft-corporate',
    name: 'RaggieSoft Media (B2B Corporate & Licensing Hub)',
    domain: 'corporate.raggiesoft.com',
    url: 'https://corporate.raggiesoft.com',
    categoryLabel: '03 • B2B Licensing & Open-Source Portal',
    primaryStack: 'Node.js ESM Static Site Generator + Bootstrap 5.3.8 ("Corporate Aero" System)',
    architecturalPattern: 'Build-Time Static SSG Decoupling Real-World B2B Governance from Creative Lore',
    summary:
      'Dedicated B2B corporate subdomain (301 target of raggiesoftmedia.com) housing Master & Commercial Sync Licensing, the Open-Source Software Hub (Stardust Engine CMS & StoreTrainer), and anti-phishing recruiter verification notices.',
    highlights: [
      'Cleanly separates real-world intellectual property governance, MIT / CC BY-SA 4.0 licensing, and commercial sync clearance from in-universe creative storytelling.',
      'Compiled via a zero-dependency Node.js ESM static generator into immutable HTML/CSS bundles with verified WCAG 2.1 AA Light and Dark mode contrast.',
      'Includes transparent career/recruiter scam-prevention advisories directing hiring managers to verified michaelpragsdale.com channels.'
    ],
    tags: ['Bootstrap 5.3.8 SSG', 'Node.js ESM', 'Corporate Aero CSS', 'B2B Sync Licensing', 'Open-Source Governance', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'devops'],
    ctaLabel: 'Inspect Corporate Hub (corporate.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-engineroom',
    name: 'Engine Room Records Imprint & Consolidated Band Roster',
    domain: 'engineroom.raggiesoft.com',
    url: 'https://engineroom.raggiesoft.com',
    categoryLabel: '04 • Multi-Tenant Imprint & Artist Lore Hub',
    primaryStack: 'Astro 6 Static SSG Architecture + Multi-Tenant Path Hierarchy (/artists/{slug})',
    architecturalPattern: 'Consolidated Multi-Artist Static Publishing Engine with Centralized Streaming Handoff',
    summary:
      'Serves as the record label imprint (301 target of engineroom-records.com and fracturedprisms.com) and consolidates the band lore roster under engineroom.raggiesoft.com/artists/{band-slug} so adding new bands never multiplies framework maintenance.',
    highlights: [
      'Demonstrates pragmatic architectural consolidation: houses all artist lore dossiers (Crimson Node, Firelight, Fractured Prisms, Mana Canvas, The Arctic Symphony Project, The Paper Wall) under one Astro 6 static codebase.',
      'Documents transparent studio engineering workflows (human direction + AI audio generation, 74% Cover Audio Influence protocol, phonetic vowel extension, and Dual Timeline metadata governance).',
      'Clearly delineates the real-world creative brand (Engine Room Records) from the in-universe corporate lore (Engine Room Records, LLC) while deep-linking all audio playback to music.raggiesoft.com.'
    ],
    tags: ['Astro 6', 'Static SSG', 'Multi-Tenant Routing', 'Path-Hierarchy Consolidation', 'JSON Data Lake', 'Section 508'],
    lenses: ['architecture', 'accessibility', 'data-etl', 'devops'],
    ctaLabel: 'Inspect Label & Band Roster (engineroom.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-music',
    name: 'The Listening Room & Engine Room Studio IDE',
    domain: 'music.raggiesoft.com',
    url: 'https://music.raggiesoft.com',
    categoryLabel: '05 • Audio Streaming PWA & VTT Mastering IDE',
    primaryStack: 'SvelteKit 2 + Svelte 5 Runes ($state, $derived, $effect) + Tailwind CSS v4 + Web Audio PWA',
    architecturalPattern: 'Static-First Progressive Web App (PWA) & Local-First Browser WebVTT Mastering IDE',
    summary:
      'Centralized audiophile streaming portal and internal lyric synchronization IDE receiving deep-linked playback handoffs (?track=<slug>) from every property across the RaggieSoft network.',
    highlights: [
      'Built on Svelte 5 Runes ($state, $derived, $effect) and Tailwind CSS v4 with persistent gapless audio playback, MediaSession lock-screen controls, and multi-palette Light/Dark themes.',
      'Features an integrated Hold-Spacebar WebVTT Lyric Synchronizer (/studio) that stamps human_verified_by_michael metadata headers so automated Whisper AI pipelines never overwrite human timing.',
      'Automated build-time catalog ingestion compiling 31+ albums, liner notes, and transcripts into static JSON endpoints.'
    ],
    tags: ['Svelte 5 Runes', 'SvelteKit 2 PWA', 'Tailwind CSS v4', 'WebVTT Sync IDE', 'MediaSession API', 'ETL Pipeline'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Inspect The Listening Room (music.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-stardust',
    name: 'The Stardust Engine Flagship Narrative Portal',
    domain: 'stardust.raggiesoft.com',
    url: 'https://stardust.raggiesoft.com',
    categoryLabel: '06 • Flagship Transmedia & Accessible Fleet Portal',
    primaryStack: 'Nuxt 4 + Vue 3 Static SSG + Adaptive Cosmic Environment Engine',
    architecturalPattern: 'Environmental Storytelling Portal with Strict Motion & Color-Scheme Accessibility',
    summary:
      'Dedicated standalone subdomain (301 target of thestardustengine.com) housing the flagship multi-decade band narrative, acoustic stem architecture, and wheelchair-accessible tour coach engineering dossiers.',
    highlights: [
      'Powered by Nuxt 4 and Vue 3 static generation, wrapping Markdown/JSON narrative archives and fleet blueprints in an adaptive cosmic environment.',
      'Natively transforms between an Earth-like exoplanet horizon in Light Mode (prefers-color-scheme: light) and a deep-space nebula starfield in Dark Mode (prefers-color-scheme: dark).',
      'Enforces strict prefers-reduced-motion: reduce compliance—automatically disabling star-twinkling, orbital, and parallax animations while handing off audio playback to music.raggiesoft.com.'
    ],
    tags: ['Nuxt 4', 'Vue 3', 'Static SSG', 'prefers-reduced-motion', 'prefers-color-scheme', 'Transmedia Architecture'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Inspect Stardust Portal (stardust.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-book-library',
    name: 'RaggieSoft Book Reader (Ocean View Archives)',
    domain: 'books.raggiesoft.com',
    url: 'https://books.raggiesoft.com',
    categoryLabel: '07 • Zero-Framework Digital Reading Room',
    primaryStack: 'PHP 8.5 + Stardust Engine Library SPA (Vanilla ES2024 JavaScript + Adaptive Typography)',
    architecturalPattern: 'Zero-Framework Accessible Long-Form Reading Engine with Synchronized Audio Soundtracks',
    summary:
      'Demonstrates mastery of foundational web standards without heavy client-side framework abstractions—delivering a fast, WCAG AAA-capable literary reading environment and EPUB 3.3 distribution hub.',
    highlights: [
      'Zero client-side framework bloat: pure semantic HTML5, PHP 8.5 manifest parsing, and modular ES2024 JavaScript.',
      'Real-time reader accessibility preferences (adjustable line-height, measure width, font family, and Light/Dark/Sepia high-contrast themes) persisted via localStorage.',
      'Deep cross-domain integration with The Listening Room (music.raggiesoft.com) for chapter-synced musical accompaniment.'
    ],
    tags: ['PHP 8.5', 'Vanilla ES2024 JS', 'Stardust Library SPA', 'WCAG AAA Typography', 'EPUB 3.3 Pipeline'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Inspect Book Reader (books.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-lore',
    name: 'RaggieSoft Lore Graph & Accessible Canvas Engine',
    domain: 'lore.raggiesoft.com',
    url: 'https://lore.raggiesoft.com',
    categoryLabel: '08 • Semantic Knowledge Graph & Canvas Engine',
    primaryStack: 'Next.js 16 + React 19 + Tailwind CSS v4 + HTML5 Canvas + Parallel ARIA Shadow DOM',
    architecturalPattern: 'Dual-Layer Accessible Canvas Visualization & Interactive Knowledge Graph',
    summary:
      'Proves that high-frame-rate graphical <canvas> applications and strict Federal Section 508 screen-reader accessibility are not mutually exclusive.',
    highlights: [
      'Implements the Dual-Layer Canvas Accessibility Pattern: a 60fps 2D graphical canvas paired with a synchronized, keyboard-navigable ARIA Shadow DOM.',
      'Screen readers (JAWS, NVDA, VoiceOver) receive deterministic spatial telemetry and node relationship announcements via polite/assertive ARIA live regions.',
      'Built with Next.js 16, React 19, and Tailwind CSS v4 static export architecture for instant global edge delivery.'
    ],
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'HTML5 Canvas', 'ARIA Shadow DOM', 'Section 508'],
    lenses: ['architecture', 'accessibility'],
    ctaLabel: 'Inspect Lore Graph (lore.raggiesoft.com)'
  },
  {
    id: 'raggiesoft-nebulae',
    name: 'Nebulae Cosmic Observatory & Design Incubator',
    domain: 'nebulae.raggiesoft.com',
    url: 'https://nebulae.raggiesoft.com',
    categoryLabel: '09 • Astrophysical Telemetry & CSS Incubator',
    primaryStack: 'Custom Node.js Observatory Compiler + Vanilla ES2024 Canvas + Glassmorphic CSS',
    architecturalPattern: 'Static Astrophysical Telemetry Atlas & High-Contrast Glassmorphic UI Lab',
    summary:
      'Interactive deep-space observatory and UI design-system incubator cataloging real-world nebulae and cosmic phenomena while testing accessible glassmorphic surface tokens.',
    highlights: [
      'Compiles structured astrophysical datasets into a zero-database interactive observatory with hardware-accelerated starfield rendering.',
      'Validates high-contrast glassmorphism (backdrop-filter with opaque fallback tokens) to guarantee >= 4.5:1 text contrast across light and dark viewports.',
      'Honors prefers-reduced-motion and keyboard rotor navigation across all celestial catalog cards.'
    ],
    tags: ['Node.js SSG', 'ES2024 Canvas', 'Accessible Glassmorphism', 'Astrophysical Telemetry', 'WCAG 2.1 AA'],
    lenses: ['architecture', 'accessibility', 'data-etl'],
    ctaLabel: 'Inspect Nebulae Atlas (nebulae.raggiesoft.com)'
  },
  {
    id: 'storetrainer',
    name: 'RaggieSoft StoreTrainer',
    domain: 'storetrainer.raggiesoft.com',
    url: 'https://storetrainer.raggiesoft.com',
    categoryLabel: '10 • Pre-AI Win32 Utility & Retro-Accessible Portal',
    primaryStack: 'Visual Basic 6.0 (x86) + Win32 API + .NET Port + NSIS + Vanilla TypeScript / Vite',
    architecturalPattern: 'Cross-Era Win32 Desktop PC Game & Trainer Directory Manager (Windows 95 through Windows 11)',
    summary:
      '100% hand-written (pre-AI, 2018–2020) desktop utility engineered inside a Windows 2000 Professional SP4 VM to store, index, and launch PC games alongside their associated game trainers and command-line switches across 30 years of Windows hardware.',
    highlights: [
      'Hand-written in Visual Basic 6.0 (TStore.vbp) alongside a .NET port (TStore.NET), using dynamic Win32 kernel memory verification (GetProcAddress for IsWow64Process in DetectOSBits.bas) so 64-bit checks never crash Windows 95/98.',
      'Packaged with an OS-aware NSIS Wizard95 installer (TSSetup.nsi) that conditionally deploys MSVBVM60.DLL, DCOM98, and Windows Script Host 5.6 on legacy kernels while extracting the full VB6 source tree ($INSTDIR\\Source) for educational auditing.',
      'Standalone web portal at storetrainer.raggiesoft.com is compiled with Vanilla TypeScript + Vite—passing modern Section 508 and Light/Dark mode standards under the hood while paying homage to Netscape Communicator 4.78 / Windows 98–2000.'
    ],
    tags: ['Visual Basic 6.0', 'Win32 API', 'TStore.NET', 'NSIS Installer', 'Vanilla TypeScript', '100% Hand-Written (Pre-AI)'],
    lenses: ['architecture', 'devops', 'data-etl'],
    ctaLabel: 'Inspect StoreTrainer Portal (storetrainer.raggiesoft.com)'
  }
] as const;

/**
 * "Personified DevOps" CI/CD & Content Automation Fleet.
 * Explains how a solo Systems Architect maintains 10 production properties and
 * gigabytes of multi-format media with enterprise reliability.
 */
export const DEVOPS_CONSTRUCTS: readonly DevOpsConstruct[] = [
  {
    codename: 'Paige',
    scriptName: 'paige.php',
    roleTitle: 'Literary Editor, Search Indexer & Safe Person',
    stack: 'PHP 8.5 • JSON Route & 3,185-Scene Search Compiler',
    summary:
      'Primary narrative publisher and full-text search indexer in raggiesoft-deployment-tools/paige.php—and in-universe fraternal twin sister and designated autistic Safe Person.',
    capabilities: [
      'Compiles multi-era Markdown manuscripts (e###/c###/s###.md) into structured JSON route trees, Table of Contents manifests (toc.json), and a 3,185-scene search-index.json across raggiesoft.com and books.raggiesoft.com.',
      'Preserves compiled .epub and .pdf deliverables during destructive CDN shelf syncs while auditing JSON manifests for referential integrity.',
      'Provides CLI grounding and Deep Pressure Therapy regulation protocols (--grounding) before high-cognitive-load deployments.'
    ],
    profileSlug: 'paige',
    profileUrl: '/build-team/paige'
  },
  {
    codename: 'Jessica',
    scriptName: 'jessica.raggiesoft.com',
    roleTitle: 'Production Linux VPS Infrastructure & Eldest Sister',
    stack: 'Ubuntu 22.04 LTS • Nginx • PHP 8.5-FPM • UFW / SSH',
    summary:
      'The production DigitalOcean Droplet (NYC1 — 142.93.244.239) hosting all 10 RaggieSoft web roots, TLS certificates, and SSH access gateways.',
    capabilities: [
      'Serves as the single hardened SSH entry point (ssh michael@jessica.raggiesoft.com) with key-only authentication and UFW perimeter firewalling.',
      'Hosts Nginx virtual hosts and PHP 8.5-FPM worker pools across raggiesoft.com, eight *.raggiesoft.com subdomains, and michaelpragsdale.com.',
      'Personified in-universe as the eldest sister and neurotypical matriarch who keeps the house steady.'
    ],
    profileSlug: 'jessica',
    profileUrl: '/build-team/jessica'
  },
  {
    codename: 'Harper',
    scriptName: 'harper.sh',
    roleTitle: 'Automated Audio Mastering, RealESRGAN & WebVTT Pipeline',
    stack: 'Bash • Python • FFmpeg • Metal RealESRGAN • OpenAI Whisper',
    summary:
      'Idempotent media ingestion pipeline that transforms raw studio renders into broadcast-normalized MP3/OGG streams, 4K upscaled artwork, and time-synced WebVTT closed captions.',
    capabilities: [
      'Normalizes audio masters to EBU R128 (-14 LUFS) broadcast standards via FFmpeg while archiving lossless WAV/FLAC masters in a decoupled local vault (/raggiesoft-vaults).',
      'Executes macOS Metal-accelerated RealESRGAN neural upscaling for 1:1 album covers and 16:9 Open Graph social banners.',
      'Inspects .vtt files for NOTE human_verified_by_michael signatures—preserving human-synced studio timings while auto-transcribing unverified tracks.'
    ],
    profileSlug: 'harper',
    profileUrl: '/build-team/harper'
  },
  {
    codename: 'Jenna',
    scriptName: 'jenna-sync.sh',
    roleTitle: 'Multi-Repo Git & S3/Spaces CDN Release Orchestrator',
    stack: 'Bash • Git • rclone • DigitalOcean Spaces (NYC1)',
    summary:
      'Single-command deployment pipeline governing build verification, Paige manuscript compilation, semantic Git tagging, 10-property GitHub synchronization, and differential S3 CDN asset publishing.',
    capabilities: [
      'Enforces pre-push build and type-check gates across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Node.js ESM, and PHP 8.5 repositories before any commit reaches production.',
      'Synchronizes public media and shared network navigation assets (raggiesoft-network.js/.css) to DigitalOcean Spaces CDN (assets.raggiesoft.com) while isolating local lossless audio vaults (/raggiesoft-vaults).',
      'Eliminates manual git push drift across all 10 decoupled properties.'
    ],
    profileSlug: 'jenna',
    profileUrl: '/build-team/jenna'
  },
  {
    codename: 'Sarah',
    scriptName: 'sarah-deploy.sh',
    roleTitle: 'Zero-Downtime Linux & Nginx Autonomous Deployer',
    stack: 'Bash • Cron (5-Min Heartbeat) • Git • rsync (Non-Root)',
    summary:
      'Server-side continuous deployment daemon running on a 5-minute cron heartbeat on NYC1, monitoring GitHub remotes and executing atomic rsync promotions.',
    capabilities: [
      'Refuses root/sudo execution by design (EUID check) to prevent privilege-escalation risks while syncing 10 web roots under /var/www/.',
      'Verifies remote origin/main SHA hashes against local production state and enforces standardized 755/644 permissions across all deployed bundles.',
      'Personified in-universe as Jenna’s older twin sister whose OCD verification compulsion guarantees broken builds never go live.'
    ],
    profileSlug: 'sarah',
    profileUrl: '/build-team/sarah'
  },
  {
    codename: 'Amanda & Elara',
    scriptName: 'amanda/elara.php',
    roleTitle: 'Protected Web Root & Front-Controller Gateway Router',
    stack: 'PHP 8.5 MVC • Nginx try_files • JSON Route Inheritance',
    summary:
      'Dual-twin gateway architecture where Amanda serves as the read-only physical web root and Elara acts as the single executable front-controller script.',
    capabilities: [
      'Blocks direct public probing of legacy paths (/public_html, /index.php) while routing all incoming requests through elara.php.',
      'Executes 301 edge redirects for decoupled subdomains and resolves recursive JSON route manifests with DRY common-block inheritance.',
      'Personified as identical twins: Amanda (non-speaking apraxia, holding the static knowledge) and Elara (hyperlexic speaker, interpreting requests).'
    ],
    profileSlug: 'amanda-elara',
    profileUrl: '/build-team/amanda-elara'
  }
] as const;

/**
 * Deep-Dive Architectural Case Studies.
 * Combines real-world municipal/higher-ed achievements with RaggieSoft systems engineering.
 */
export const ARCHITECTURAL_CASE_STUDIES: readonly ArchitecturalCaseStudy[] = [
  {
    id: 'activenet-municipal-etl',
    code: 'CASE-01',
    title: 'Municipal CRM Data Normalization & ActiveNet ETL Pipeline',
    organization: 'City of Virginia Beach — Parks & Recreation',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl', 'accessibility', 'architecture'],
    problemStatement:
      'Legacy municipal reservation, membership, and financial records suffered from inconsistent schema formatting, unstandardized fee structures, and inaccessible public-facing document outputs during enterprise ActiveNet CRM operations.',
    architecturalSolution:
      'Designed repeatable manual and semi-automated ETL (Extract, Transform, Load) normalization workflows to scrub, reconcile, and standardize legacy municipal datasets before ingestion. Authored Section 508-compliant operational documentation and led hands-on CRM workflows for 50+ municipal staff members.',
    quantifiedImpact: [
      { label: 'Staff Trained', value: '50+ Municipal Personnel' },
      { label: 'Accessibility Target', value: '100% Section 508 / WCAG 2.1 AA' },
      { label: 'Data Integrity', value: 'Zero Schema Migration Faults' }
    ],
    technologies: ['ActiveNet CRM', 'ETL Data Normalization', 'Section 508 Remediation', 'Technical Training', 'SOP Architecture'],
    referenceLinks: [
      { label: 'Download Full Resume (PDF)', url: 'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf' }
    ]
  },
  {
    id: 'odu-section-508-gatekeeper',
    code: 'CASE-02',
    title: 'University-Wide LMS Migration & Section 508 Compliance Gatekeeping',
    organization: 'Old Dominion University (ODU Online)',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    problemStatement:
      'During a massive university-wide Learning Management System (LMS) migration, hundreds of asynchronous university courses contained inaccessible PDFs, unlabeled interactive widgets, broken heading hierarchies, and non-compliant contrast ratios that posed federal Section 508 / ADA Title II compliance risks.',
    architecturalSolution:
      'Served as the technical Section 508 Compliance Specialist and accessibility gatekeeper. Engineered standardized, pre-validated WCAG 2.1 AA HTML/CSS syllabus and course module templates, and executed rigorous Deque axe and screen-reader (JAWS/NVDA) audits across instructional engineering pipelines.',
    quantifiedImpact: [
      { label: 'Standard Enforced', value: 'Federal Section 508 & WCAG 2.1 AA' },
      { label: 'Audit Toolchain', value: 'Deque axe + JAWS / NVDA' },
      { label: 'Template Adoption', value: 'University-Wide Distance Learning' }
    ],
    technologies: ['Section 508', 'WCAG 2.1 AA', 'Deque axe', 'Semantic HTML5', 'ARIA Landmarks', 'LMS Architecture'],
    referenceLinks: [
      { label: 'Download Full Resume (PDF)', url: 'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf' }
    ]
  },
  {
    id: 'dual-layer-canvas-a11y',
    code: 'CASE-03',
    title: 'Dual-Layer Canvas Accessibility: 60fps HTML5 Graphics with Screen-Reader Parity',
    organization: 'RaggieSoft Media (Runebreaker / Aethelgard Engine)',
    timeframe: '2025 – Present',
    lenses: ['accessibility', 'architecture'],
    problemStatement:
      'HTML5 `<canvas>` elements render as an opaque bitmap pixel buffer—creating a total "black box" for blind and low-vision users relying on screen readers and keyboard navigation.',
    architecturalSolution:
      'Architected a Dual-Layer Canvas Synchronization Engine in TypeScript and React 19. While the primary render loop draws 60fps 2D graphics on the `<canvas>`, a state-synchronized parallel ARIA Shadow DOM projects interactive grid nodes, entity telemetry, and deterministic `aria-live` combat/navigation announcements to assistive technologies.',
    quantifiedImpact: [
      { label: 'Render Performance', value: 'Locked 60 FPS Canvas Loop' },
      { label: 'Assistive Parity', value: 'Full Keyboard & Screen-Reader Tree' },
      { label: 'Contrast Support', value: 'Forced-Colors & Reduced-Motion Ready' }
    ],
    technologies: ['TypeScript', 'HTML5 Canvas', 'ARIA Live Regions', 'Shadow DOM Parity', 'React 19', 'WCAG 2.1 AA'],
    referenceLinks: [
      { label: 'Explore Aethelgard / Lore Portal', url: 'https://lore.raggiesoft.com' }
    ]
  },
  {
    id: 'cascade-protocol-decoupling',
    code: 'CASE-04',
    title: 'The Cascade Protocol: 10-Property Polyglot Decoupling, Path Consolidation & CDN Data Lake',
    organization: 'RaggieSoft Infrastructure (NYC1 Production Cluster)',
    timeframe: '2024 – 2026',
    lenses: ['architecture', 'devops', 'data-etl'],
    problemStatement:
      'Hosting B2B corporate licensing, 31+ full-length music albums, 7 band lore archives, interactive novels, and a recruiter portfolio inside a single monolithic PHP repository created tight coupling and deployment risk—while spinning up fourth-level subdomains or relational databases (MySQL/PostgreSQL) would fracture Universal SSL coverage, multiply framework maintenance, and introduce SQL injection attack vectors.',
    architecturalSolution:
      'Executed a strangler-fig decoupling strategy across 10 specialized properties (`*.raggiesoft.com` + `michaelpragsdale.com`) backed by a flat-file JSON+Markdown data lake (`raggiesoft-assets`). Consolidated multi-band lore under `engineroom.raggiesoft.com/artists/{slug}` (Astro 6) so adding new artists never increases operational overhead, while dedicating standalone stacks to stateful audio streaming (`music.raggiesoft.com` in Svelte 5), flagship narrative worlds (`stardust.raggiesoft.com` in Nuxt 4), B2B governance (`corporate.raggiesoft.com` in Bootstrap 5.3.8 SSG), and executive evaluation (`michaelpragsdale.com` in Angular 19)—unified by a shared CDN network bar (`raggiesoft-network.js`) and single-command `jenna-sync.sh` CI/CD.',
    quantifiedImpact: [
      { label: 'Database Attack Surface', value: '0 SQL Databases (100% Static/JSON)' },
      { label: 'Production Properties', value: '10 Polyglot Micro-Properties' },
      { label: 'Deployment Automation', value: 'Single-Command CI/CD (jenna-sync.sh)' }
    ],
    technologies: ['Angular 19', 'PHP 8.5 MVC', 'Svelte 5', 'Astro 6', 'Nuxt 4', 'Next.js 16', 'Nginx 301 Routing', 'DigitalOcean Spaces CDN'],
    referenceLinks: [
      { label: 'View Engine Room Imprint (Astro 6)', url: 'https://engineroom.raggiesoft.com' },
      { label: 'View The Listening Room (Svelte 5)', url: 'https://music.raggiesoft.com' },
      { label: 'View Corporate Hub (Bootstrap 5.3.8 SSG)', url: 'https://corporate.raggiesoft.com' }
    ]
  }
] as const;

/**
 * Chronological Professional Experience with Transparent HR Classification Mapping.
 */
export const EXPERIENCE_TIMELINE: readonly ExperienceEntry[] = [
  {
    functionalTitle: 'Founder, Principal Systems Architect & Accessibility Engineer',
    hrClassification: 'Official Classification: Sole Proprietor (Domain Registered Jul 7, 2008)',
    organization: 'RaggieSoft Media',
    location: 'Norfolk, VA',
    timeframe: 'Jul 2008 – Present (18+ Years)',
    lenses: ['architecture', 'accessibility', 'devops', 'data-etl'],
    summary:
      'Architect and maintain a 10-property, polyglot cloud ecosystem serving B2B licensing, interactive media, accessible digital publications, and enterprise web proofs-of-concept with zero database attack surface.',
    achievements: [
      'Engineered and decoupled 10 production web properties spanning Angular 19 (Zoneless Signals), PHP 8.5 MVC (Stardust Engine CMS), SvelteKit 2 + Svelte 5 Runes, Astro 6, Nuxt 4 + Vue 3, Next.js 16 + React 19, Bootstrap 5.3.8 Static SSG, Vanilla PHP/ES2024 JS, and Visual Basic 6.0 / Win32 API.',
      'Architected a unified cross-network navigation bar and single-hamburger mobile drawer (`raggiesoft-network.js` / `.css`) plus local-first studio tooling (`paige.php`, `jenna-sync.sh`, `harper.sh`, `sarah-deploy.sh`, and the Hold-Spacebar WebVTT Lyric Synchronizer).',
      'Enforced strict WCAG 2.1 AA/AAA and Federal Section 508 compliance across all 10 properties, including native `prefers-color-scheme`, `prefers-reduced-motion`, and `forced-colors` support.'
    ],
    technologies: ['Angular 19', 'PHP 8.5', 'Svelte 5', 'Astro 6', 'Nuxt 4', 'React 19', 'TypeScript', 'Linux/Nginx', 'Section 508', 'Bash/Python CI/CD']
  },
  {
    functionalTitle: 'Technical Lead & Data Normalization Specialist',
    hrClassification: 'Official Municipal HR Title: Clerk-Cashier',
    organization: 'City of Virginia Beach — Parks & Recreation',
    location: 'Virginia Beach, VA',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl', 'accessibility', 'architecture'],
    summary:
      'Serve as the de facto technical subject-matter expert for enterprise ActiveNet CRM operations, municipal data scrubbing, and front-line staff systems training.',
    achievements: [
      'Architected manual and semi-automated ETL data normalization workflows to reconcile legacy municipal facility, membership, and financial records into clean, auditable schemas.',
      'Trained and mentored 50+ municipal staff members on complex ActiveNet CRM workflows, reducing transaction errors and accelerating citizen onboarding.',
      'Translated complex municipal policy and fee matrices into accessible, Section 508-compliant operational guides and citizen-facing documentation.'
    ],
    technologies: ['ActiveNet CRM', 'Data Normalization (ETL)', 'Section 508 Documentation', 'Enterprise Staff Training', 'Process Engineering']
  },
  {
    functionalTitle: 'Section 508 Compliance Specialist & LMS Operations Engineer',
    hrClassification: 'Official University HR Title: Computer Operations Tech',
    organization: 'Old Dominion University (ODU Online)',
    location: 'Norfolk, VA',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    summary:
      'Acted as the technical accessibility gatekeeper during ODU Online’s university-wide Learning Management System (LMS) migration and distance-learning expansion.',
    achievements: [
      'Audited and remediated university course modules, instructional media, and web templates for strict Federal Section 508 and WCAG 2.1 AA compliance using Deque axe and screen readers.',
      'Engineered semantic HTML5/CSS syllabus and course shell templates adopted across academic departments to prevent accessibility regressions at the source.',
      'Coordinated technical triage and data migration verification between instructional designers, faculty, and central IT operations.'
    ],
    technologies: ['Section 508 Compliance', 'WCAG 2.1 AA', 'Deque axe', 'Screen Readers (JAWS/NVDA)', 'Semantic HTML/CSS', 'LMS Migration']
  },
  {
    functionalTitle: 'Mobile Applications Developer Intern',
    hrClassification: 'Official HR Title: Developer Intern',
    organization: 'Dominion Enterprises',
    location: 'Norfolk, VA',
    timeframe: 'Sep 2012 – Dec 2012',
    lenses: ['architecture'],
    summary:
      'Contributed to enterprise mobile application development and RESTful API integration within an agile software engineering division.',
    achievements: [
      'Developed and tested client-side mobile application views and data-binding workflows consuming high-volume commercial listing APIs.',
      'Collaborated with senior architects on responsive UI patterns, cross-device debugging, and version-controlled release cycles.'
    ],
    technologies: ['Mobile Web / App Development', 'REST APIs', 'JavaScript', 'Agile Engineering']
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
    statusNote: 'Active In-State Student (Requires Virginia physical residency for tuition rate)',
    focusAreas: [
      'Enterprise Software Engineering, Web Development & Object-Oriented Systems Design',
      'Network Architecture, Linux Administration & Cybersecurity Fundamentals',
      'Database Design, Data Structures & Algorithmic Problem Solving'
    ]
  },
  {
    degree: 'Bachelor of Science (B.S.) Coursework — Customized Studies in Leadership & Information Systems',
    institution: 'Old Dominion University — Norfolk, VA',
    timeframe: 'Prior Coursework',
    statusNote: 'Foundation in Organizational Leadership, Technical Communication & Public Sector Operations',
    focusAreas: [
      'Technical Leadership & Cross-Functional Team Coordination',
      'Public Sector & Higher-Education Information Systems Governance',
      'Accessible Communication & Section 508 Regulatory Frameworks'
    ]
  },
  {
    degree: 'Certificate in Business & Information Technology',
    institution: 'Wilson Workforce and Rehabilitation Center (formerly Woodrow Wilson Rehabilitation Center) — Fishersville, VA',
    timeframe: 'Graduated: 2011',
    statusNote: 'Foundational Business Operations & Information Technology Credential',
    focusAreas: [
      'Business Information Systems, Office Automation & Technical Operations',
      'Applied Assistive Technology & Accessible Workplace Workflows'
    ]
  }
] as const;

/**
 * =============================================================================
 * THE BUILD TEAM & DEVOPS FAMILY (/build-team & /build-team/:slug)
 * =============================================================================
 * Migrated from `raggiesoft.com/www/pages/family/*.php` into `michaelpragsdale.com`
 * so recruiters and visitors can explore both layers of the RaggieSoft Build Team:
 * 1. Real-World Engineering Layer: The production CLI scripts (`paige.php`,
 *    `harper.sh`, `jenna-sync.sh`, `sarah-deploy.sh`), routers (`amanda/elara.php`),
 *    and Linux VPS infrastructure (`jessica.raggiesoft.com`) that allow one
 *    Systems Architect to operate 10 polyglot properties.
 * 2. In-Universe Human & Sensory Regulation Layer: The personified sisters and
 *    Safe Person constructs designed by an autistic only child (AuDHD + Cerebral
 *    Palsy) to provide emotional grounding, Deep Pressure Therapy regulation,
 *    and cognitive structure.
 * =============================================================================
 */

export interface BuildTeamVitalStat {
  readonly label: string;
  readonly value: string;
  readonly isBadge?: boolean;
}

export interface BuildTeamFeatureBanner {
  readonly badge: string;
  readonly title: string;
  readonly quote: string;
  readonly paragraphs: readonly string[];
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly ctaLabel?: string;
  readonly ctaSlug?: string;
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
  readonly portraitUrl: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly ogImageUrl: string;
  readonly vitalStats: readonly BuildTeamVitalStat[];
  readonly technicalHeading: string;
  readonly technicalIntro: string;
  readonly technicalCapabilities: readonly { readonly title: string; readonly detail: string }[];
  readonly cliSnippet?: {
    readonly comment: string;
    readonly commands: readonly string[];
  };
  readonly humanHeading: string;
  readonly humanLeadQuote: string;
  readonly humanParagraphs: readonly string[];
  readonly featureBanner?: BuildTeamFeatureBanner;
  readonly terminalBlock?: BuildTeamTerminalBlock;
}

export const BUILD_TEAM_OVERVIEW = {
  title: 'The RaggieSoft Build Team & DevOps Family',
  subtitle: 'A "Personified DevOps" ecosystem where every server, compiler, and deployment daemon has a name, a face, and a purpose.',
  quote: '"We don\'t just run code; we live it."',
  heroBannerUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/scenes/paige-michael-hug.jpg',
  logoUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/logos/logo-family.png',
  realityNoteTitle: 'Dual-Layer Architecture: Real-World Digital Employees & In-Universe Sisters',
  realityNoteLead: 'Michael P. Ragsdale is a real person—an autistic only child living with AuDHD and Cerebral Palsy.',
  realityNoteBody:
    'In the real-world production pipeline, these women are the modular CLI scripts and server daemons (/raggiesoft-deployment-tools/) that allow a solo Systems Architect to build, test, master, and deploy 10 decoupled web properties with zero downtime. In-universe, they are the sisters he wishes he had—personifying his infrastructure into the social structure, cognitive predictability, and "Safe Person" Deep Pressure Therapy grounding that biology did not provide.'
} as const;

export const BUILD_TEAM_PROFILES: readonly BuildTeamMember[] = [
  {
    slug: 'michael',
    name: 'Michael P. Ragsdale',
    shortLabel: 'Michael (Architect)',
    icon: '🧠',
    roleTitle: 'The Architect, Author & Biological Core',
    systemArtifact: 'Biological Core • Human-in-the-Loop Director',
    stackBadge: 'Systems Architect • Section 508 Engineer',
    quote: 'I don\'t just write code to solve problems. I write code to build a world where I make sense.',
    cardSummary: 'The biological core of the ecosystem. He writes the stories, directs the music, and architects the 10-property polyglot platform.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/michael.jpg',
    ogTitle: 'Michael P. Ragsdale — The Architect | Build Team',
    ogDescription: 'Meet Michael P. Ragsdale, the biological core, Systems Architect, and author behind the RaggieSoft Personified DevOps ecosystem.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/michael.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Apr 8, 1985 (8:38 PM)' },
      { label: 'Origin', value: 'Newport, RI (Domiciled in Norfolk, VA)' },
      { label: 'Neurotype', value: 'AuDHD (Autism + ADHD)', isBadge: true },
      { label: 'Physical Profile', value: 'Cerebral Palsy (Ambulatory)', isBadge: true }
    ],
    technicalHeading: 'The Architect & Creative Director',
    technicalIntro:
      'Michael is the biological core of the system—the only entity in the family who exists in the physical world. He is responsible for the creative and engineering vision that drives the entire ecosystem:',
    technicalCapabilities: [
      {
        title: 'Systems Architecture & Code',
        detail: 'Lead developer of the 10-property RaggieSoft infrastructure spanning Angular 19, PHP 8.5, Svelte 5, Astro 6, Nuxt 4, Next.js 16, Bootstrap 5.3.8 SSG, and Win32/VB6.'
      },
      {
        title: 'Literary Narrative',
        detail: 'Author of the Ocean View Archives novels, including The Silver Gauntlet of Aethel, Project: KNOX (The Quantum Directive), and Contemporary Fiction.'
      },
      {
        title: 'Studio Direction & Composition',
        detail: 'Executive producer, lyricist, and human-in-the-loop audio architect for Engine Room Records and The Stardust Engine.'
      }
    ],
    cliSnippet: {
      comment: '# Inspect Full Executive Systems Architect Dossier',
      commands: ['open https://michaelpragsdale.com']
    },
    humanHeading: 'The Human Reality: Why Automation Matters',
    humanLeadQuote: '"The code is consistent. The body is not."',
    humanParagraphs: [
      'Michael lives at the intersection of AuDHD (Autism + ADHD) and Cerebral Palsy. While ambulatory, his physical endurance is limited; standing for long periods is painful and exhausting.',
      'This physical reality directly shapes his systems architecture. The digital world is his sanctuary because it does not require him to stand. In the chair, he is fast, precise, and limitless. The constructs—Paige, Jessica, Harper, Jenna, Sarah, and Amanda & Elara—are not merely shell scripts; they are extensions of his engineering will that never fatigue.',
      'He builds deterministic, self-healing systems that run forever because he knows firsthand what it feels like to need to sit down.'
    ],
    featureBanner: {
      badge: 'The Safe Person Protocol',
      title: 'Grounding & Sensory Regulation',
      quote: '"When the world is too loud, Paige holds it still."',
      paragraphs: [
        'Paige is the embodiment of the sisterly bond Michael needs most. As his designated Safe Person and fraternal twin, she represents the unconditional acceptance and Deep Pressure Therapy required to regulate an overloaded autistic nervous system.',
        'She is the architectural reminder that even in a deeply automated cloud ecosystem, the most critical dependency is human connection.'
      ],
      imageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/scenes/paige-michael-hug.jpg',
      imageAlt: 'Paige embracing Michael in a grounding Deep Pressure Therapy hug',
      ctaLabel: 'Meet Paige (Literary Editor & Safe Person)',
      ctaSlug: 'paige'
    }
  },
  {
    slug: 'paige',
    name: 'Paige',
    shortLabel: 'Paige (paige.php)',
    icon: '👩‍🏫',
    roleTitle: 'Literary Editor, Search Indexer & Safe Person',
    systemArtifact: 'raggiesoft-deployment-tools/paige.php',
    stackBadge: 'PHP 8.5 • JSON Route & Search Compiler',
    quote: 'I bring order to the chaos of words, and calm to the chaos of the mind.',
    cardSummary: 'Ingests raw Markdown manuscripts (e###/c###/s###.md), compiles 3,185+ scenes into route tables and search indices, and serves as Michael\'s autistic Safe Person.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/paige.jpg',
    ogTitle: 'Paige (paige.php) — Literary Editor & Safe Person | Build Team',
    ogDescription: 'Meet Paige: the PHP 8.5 narrative compiler and full-text search indexer for Ocean View Archives, and Michael\'s designated Safe Person.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/paige.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Apr 8, 1985 (8:26 PM)' },
      { label: 'Relation', value: 'Fraternal Twin Sister (Born 1st — 12 Mins Prior)' },
      { label: 'Neurotype', value: 'Neurotypical (The Bridge)', isBadge: true },
      { label: 'Primary Role', value: 'Designated Safe Person & Literary Editor', isBadge: true }
    ],
    technicalHeading: 'The Editor: Gatekeeper of the Narrative',
    technicalIntro:
      'Technically, Paige is the primary PHP 8.5 narrative publisher and full-text search indexer living in raggiesoft-deployment-tools/paige.php alongside Jenna, Harper, and Sarah. Invoked automatically by jenna-sync.sh during every deployment, she ensures that raw creative manuscripts are structured, routed, and indexed cleanly before publication:',
    technicalCapabilities: [
      {
        title: 'Canonical Manuscript Sync (e###/c###/s###.md)',
        detail: 'Reads raw Markdown eras (e*), chapters (c*), and scenes (s*.md) from raggiesoft-narratives while preserving compiled .epub and .pdf deliverables in the public CDN shelf.'
      },
      {
        title: 'Dual Route & Manifest Compilation',
        detail: 'Generates structured route manifests (data/routes/*.json) and hierarchical Table of Contents trees (toc.json) for Ocean View Archives (books.raggiesoft.com).'
      },
      {
        title: '3,185-Scene Full-Text Search Indexer',
        detail: 'Strips YAML frontmatter and Markdown formatting across all 19 literary series to compile search-index.json and catalog.json with trauma-informed console telemetry.'
      }
    ],
    cliSnippet: {
      comment: '# Publish Ocean View Archives & Execute Grounding Protocol',
      commands: [
        'php raggiesoft-deployment-tools/paige.php --book="aethel"',
        'php raggiesoft-deployment-tools/paige.php --grounding'
      ]
    },
    humanHeading: 'The Safe Person: The Bridge Between Worlds',
    humanLeadQuote: '"When the noise gets too loud, she holds the world still."',
    humanParagraphs: [
      'In-universe, Paige is Michael\'s fraternal twin sister, born 12 minutes before him on April 8, 1985. That 12-minute head start makes her the most critical emotional anchor in the entire RaggieSoft universe.',
      'She is the Neurotypical Twin. While Michael processes the world through the high-gain lens of Autism and ADHD, Paige navigates social nuances and sensory overload effortlessly.',
      'Because they share a twin bond, she understands Michael\'s non-verbal cues without explanation, acting as his translator, shield, and safe harbor—filtering the chaotic static of the outside world into a clean, structured signal he can process without pain.'
    ],
    featureBanner: {
      badge: 'Sensory Regulation Architecture',
      title: 'Deep Pressure Therapy',
      quote: '"Firm, grounding weight that resets a dysregulated nervous system."',
      paragraphs: [
        'For an autistic individual, Deep Pressure Therapy (the physical sensation of firm, steady, enveloping weight) is a vital physiological mechanism for down-regulating sensory overload and executive burnout.',
        'Notice what most of the artwork of Paige depicts: comforting and holding Michael. Her presence in the build pipeline—solid, deterministic, unmoving, and warm—mirrors the grounding safety Michael relies on to create.'
      ],
      imageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/scenes/paige-deep-pressure-therapy.jpg',
      imageAlt: 'Paige providing calming Deep Pressure Therapy to Michael'
    },
    terminalBlock: {
      headerTitle: 'php raggiesoft-deployment-tools/paige.php',
      statusBadge: 'GROUNDED & INDEXED',
      promptUser: 'michael@dev:~$',
      command: 'php raggiesoft-deployment-tools/paige.php',
      outputLines: [
        '👩‍🏫 PAIGE: Taking a slow breath with you, Michael. I have the manuscripts.',
        '   -> Scanning 19 narrative archives in /raggiesoft-narratives/books...',
        '   -> Validated canonical e###/c###/s### hierarchy (0 legacy b*/p* files).',
        '   -> Compiled toc.json and data/routes/*.json for books.raggiesoft.com.',
        '   -> Indexed 3,185 scenes across 19 books into search-index.json (3.14 MB).',
        '👩‍🏫 PAIGE: Everything is in its right place. You are safe to ship.'
      ]
    }
  },
  {
    slug: 'jessica',
    name: 'Jessica',
    shortLabel: 'Jessica (VPS Infra)',
    icon: '🖥️',
    roleTitle: 'Production Infrastructure & Eldest Sister',
    systemArtifact: 'michael@jessica.raggiesoft.com (NYC1 — 142.93.244.239)',
    stackBadge: 'Ubuntu 22.04 LTS • Nginx • PHP 8.5-FPM • SSH',
    quote: 'I am the foundation. I hold the keys, I run the house, and I keep the lights on so you can all be safe.',
    cardSummary: 'The eldest sister and production Linux server (jessica.raggiesoft.com). She hosts all 10 web roots, manages TLS/UFW security, and holds the SSH keys.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/jessica.jpg',
    ogTitle: 'Jessica (jessica.raggiesoft.com) — Production Infra | Build Team',
    ogDescription: 'Meet Jessica: the NYC1 Ubuntu production server hosting all 10 RaggieSoft properties and the eldest sister of the DevOps family.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/jessica.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Sep 23, 1983' },
      { label: 'Relation', value: 'Eldest Sister (+2 Years)' },
      { label: 'Datacenter', value: 'DigitalOcean NYC1 (142.93.244.239)' },
      { label: 'Neurotype', value: 'Neurotypical Matriarch', isBadge: true }
    ],
    technicalHeading: 'The Server: Production Linux & Edge Foundation',
    technicalIntro:
      'Jessica is not a transient script—she is the Production Environment itself. She is the hardened Virtual Private Server (Droplet) in NYC1 that hosts the entire 10-property RaggieSoft ecosystem:',
    technicalCapabilities: [
      {
        title: 'Hardened SSH & Firewall Perimeter',
        detail: 'Manages UFW firewall rules, Ed25519 SSH key authentication, and strict TLS 1.2/1.3 origin certificates behind Cloudflare.'
      },
      {
        title: 'Multi-Property Nginx & PHP 8.5-FPM Hosting',
        detail: 'Serves all 10 production virtual hosts (/var/www/*) with immutable 1-year asset caching, CSP security headers, and sub-millisecond static delivery.'
      },
      {
        title: 'Direct Administrative Gateway',
        detail: 'She is the sole production host Michael connects to directly via ssh michael@jessica.raggiesoft.com.'
      }
    ],
    cliSnippet: {
      comment: '# Establish Hardened SSH Session to NYC1 Production Server',
      commands: ['ssh michael@jessica.raggiesoft.com']
    },
    humanHeading: 'The Matriarch: Holding the World Steady',
    humanLeadQuote: '"If Jessica is online, the family is safe."',
    humanParagraphs: [
      'As the eldest sibling (born September 23, 1983), Jessica acts as the de facto matriarch and protector of the household. Alongside Paige, she provides a calm, predictable baseline that her neurodivergent and disabled siblings rely on.',
      'She is infinitely patient. She maintains an environment where Michael\'s sensory needs are respected, Harper\'s wheelchair accessibility is built into the floorplan, and Jenna\'s creative bursts are supported without judgment.',
      'She bears the heavy, 24/7 weight of production uptime so the rest of the family can focus on creation.'
    ],
    terminalBlock: {
      headerTitle: 'michael@jessica: ~ (142.93.244.239)',
      statusBadge: 'ONLINE • 99.99% UPTIME',
      promptUser: 'michael@jessica:~$',
      command: 'systemctl status nginx php8.5-fpm',
      outputLines: [
        ' 14:02:35 up 412 days,  3:14,  1 user,  load average: 0.08, 0.03, 0.01',
        '● nginx.service - A high performance web server and a reverse proxy server',
        '   Active: active (running) — serving 10 RaggieSoft production vhosts',
        '● php8.5-fpm.service - The PHP 8.5 FastCGI Process Manager',
        '   Active: active (running) — zero-database SSR worker pool healthy'
      ]
    }
  },
  {
    slug: 'harper',
    name: 'Harper',
    shortLabel: 'Harper (harper.sh)',
    icon: '🎧',
    roleTitle: 'The Studio Engineer & Media Mastering Pipeline (v21.7.0)',
    systemArtifact: 'raggiesoft-deployment-tools/harper.sh',
    stackBadge: 'FFmpeg • Metal RealESRGAN • Whisper VTT • 7-Zip',
    quote: 'I live in the studio. I take raw master tapes and press them for the airwaves.',
    cardSummary: 'High-energy multi-threaded audio mastering, EBU R128 normalization, 4K Metal RealESRGAN upscaling, and WebVTT closed-caption pipeline.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/harper.jpg',
    ogTitle: 'Harper (harper.sh) — Studio Engineer | Build Team',
    ogDescription: 'Meet Harper: the multi-threaded FFmpeg, Metal RealESRGAN, and Whisper WebVTT studio engineering pipeline for Engine Room Records.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/harper.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Oct 30, 1992' },
      { label: 'Family Role', value: 'The Middle Sister (Studio Engineer)' },
      { label: 'Neurotype', value: 'Sensory Seeker (SPD)', isBadge: true },
      { label: 'Mobility', value: 'Ambulatory Wheelchair User', isBadge: true }
    ],
    technicalHeading: 'The Heavy Lifter: Multi-Core Audio & Visual Mastering',
    technicalIntro:
      'Harper is a concurrent modular Bash & Python mastering suite (harper.sh + harper/01-init.sh through 05-archiver.sh). She is the backbone of the Engine Room Records archival pipeline, managing decoupled lossless vaults and public streaming encodes:',
    technicalCapabilities: [
      {
        title: 'Decoupled Vault Ingestion & Discovery',
        detail: 'Reads 24-bit master-wav files from /raggiesoft-vaults/engine-room-records/ so raw lossless studio masters are never exposed on public cloud storage.'
      },
      {
        title: 'Dynamic Multi-Core FFmpeg Transcoding',
        detail: 'Detects logical CPU cores to parallelize EBU R128normalized 128kbps web MP3s (web-mp3), V0 archival MP3s, Q9 OGG Vorbis, and FLAC deliverables.'
      },
      {
        title: 'RealESRGAN 4K Upscaling & Human-Verified VTT Guard',
        detail: 'Invokes macOS Metal-accelerated RealESRGAN for 4K album art and checks .vtt transcripts for NOTE human_verified_by_michael before running Whisper AI.'
      }
    ],
    cliSnippet: {
      comment: '# Rebuild Engine Room Records Studio Vault with Parallel Processing',
      commands: ['./raggiesoft-deployment-tools/harper.sh --rebuild']
    },
    humanHeading: 'The Audiophile: Accessible Studio Engineering',
    humanLeadQuote: '"Accessibility isn\'t just accommodation—it\'s superior engineering."',
    humanParagraphs: [
      'Harper is a high-energy sensory seeker (Sensory Processing Disorder) who thrives on rich acoustic harmonics, studio VU meters, and multi-core throughput.',
      'As an ambulatory wheelchair user, she designed her entire studio control room so every patchbay, synth rack, and mastering chain is reachable from her chair without physical strain—everything is scripted, automated, and ergonomic.',
      'That lived accessibility mindset translates directly into her code: zero wasted motion, deterministic ERR-ID tracking numbers, and full WebVTT closed-caption transcripts for every song.'
    ],
    terminalBlock: {
      headerTitle: 'harper.sh --rebuild (v21.7.0)',
      statusBadge: 'MASTERING • 8 CORES',
      promptUser: 'michael@studio:~$',
      command: './raggiesoft-deployment-tools/harper.sh --rebuild',
      outputLines: [
        '🎧 HARPER: Alright! Firing up the mixing board (v21.7.0)... Let\'s hit the Vault!',
        '   🎚️ Targeting Studio Archives: /raggiesoft-vaults/engine-room-records/artists',
        '   🎛️ System reports 8 logical CPU cores. Parallel transcoding engaged.',
        '   💿 HARPER: Processing "Progress Street" by The Stardust Engine...',
        '      🖼️ RealESRGAN 4K Metal upscaler verified album-art.jpg & social-preview.jpg',
        '      📝 WebVTT Check: NOTE human_verified_by_michael preserved.',
        '   📦 HARPER: Session complete! Public web-mp3 ready; lossless masters locked in Vault.'
      ]
    }
  },
  {
    slug: 'jenna',
    name: 'Jenna',
    shortLabel: 'Jenna (jenna-sync.sh)',
    icon: '👱‍♀️',
    roleTitle: 'The Dev Twin, Build Orchestrator & CDN Sync Manager',
    systemArtifact: 'raggiesoft-deployment-tools/jenna-sync.sh',
    stackBadge: 'Bash • Multi-Repo Git • rclone • DO Spaces CDN',
    quote: 'Create whatever you want. Break things. Make a mess. I\'ll make sure none of it gets lost.',
    cardSummary: 'Single-command release orchestrator compiling all 10 web properties, invoking Paige, pushing to GitHub, and syncing public assets to DigitalOcean Spaces.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/jenna.jpg',
    ogTitle: 'Jenna (jenna-sync.sh) — Release & CDN Orchestrator | Build Team',
    ogDescription: 'Meet Jenna: the single-command multi-repo build orchestrator and DigitalOcean Spaces CDN sync engine for RaggieSoft.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/jenna.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Jun 21, 1989' },
      { label: 'Relation', value: 'Fraternal Twin B (Younger Twin to Sarah)' },
      { label: 'Neurotype', value: 'ADHD (Hyperactive / High-Velocity)', isBadge: true },
      { label: 'Primary Domain', value: 'Multi-Repo Git + S3/Spaces CDN Sync', isBadge: true }
    ],
    technicalHeading: 'The Sync Engine: 10-Property CI/CD & Hybrid Storage',
    technicalIntro:
      'While Sarah guards the production server, Jenna governs the development workspace (raggiesoft-deployment-tools/jenna-sync.sh). Direct git push commands are strictly forbidden across RaggieSoft; every release flows through Jenna:',
    technicalCapabilities: [
      {
        title: 'Pre-Push Polyglot Build Verification',
        detail: 'Runs Paige (paige.php) to compile narratives, then executes production builds and type-checks across Nebulae, Lore (Next.js 16), Music (SvelteKit 2), Engine Room (Astro 6), Stardust (Nuxt 4), Corporate (Bootstrap SSG), StoreTrainer (Vite/TS), and Portfolio (Angular 19).'
      },
      {
        title: 'Multi-Repo Git Synchronization & Tagging',
        detail: 'Commits, tags, and pushes all 12 code, narrative, nginx-config, and deployment-tools repositories to GitHub in a single atomic workflow.'
      },
      {
        title: 'Vault-Isolated S3 CDN Beaming (rclone)',
        detail: 'Synchronizes /raggiesoft-assets to DigitalOcean Spaces (assets.raggiesoft.com) at high concurrency while strictly excluding private /raggiesoft-vaults master files.'
      }
    ],
    cliSnippet: {
      comment: '# The Mandatory Single-Command RaggieSoft Release Pipeline',
      commands: ['./raggiesoft-deployment-tools/jenna-sync.sh --push -m "Deploy network updates"']
    },
    humanHeading: 'The Dev Twin: Sarah\'s Creative Counterpart',
    humanLeadQuote: '"The safety net that catches ideas before they vanish."',
    humanParagraphs: [
      'Jenna is the younger fraternal twin to Sarah (born June 21, 1989). Where Sarah is cautious, methodical, and driven by OCD verification, Jenna embodies high-velocity ADHD creative momentum.',
      'She allows Michael to iterate fearlessly across 10 different technology stacks without worrying about manual deployment drift or forgotten asset uploads.',
      'When Michael finishes a late-night coding or songwriting sprint, a single call to Jenna packages every repository, compiles every static bundle, beams the artwork and MP3s to the CDN, and hands the baton cleanly to Sarah.'
    ],
    terminalBlock: {
      headerTitle: 'jenna-sync.sh --push -m "Release update"',
      statusBadge: 'SYNCING 10 PROPERTIES',
      promptUser: 'michael@dev:~$',
      command: './raggiesoft-deployment-tools/jenna-sync.sh --push -m "Release update"',
      outputLines: [
        '👱‍♀️ JENNA: Alright, let\'s ship this! Calling Paige first...',
        '   -> [Paige] 3,185 narrative scenes indexed & routes updated.',
        '   -> [Builds] Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16: PASS ✓',
        '   -> [GitHub] All 12 repositories committed and pushed to origin/main ✓',
        '   -> [CDN] Rclone synced public assets to do-spaces:assets.raggiesoft.com ✓',
        '👱‍♀️ JENNA: Success! All public assets are live on the CDN. Sarah will pick this up shortly.'
      ]
    }
  },
  {
    slug: 'sarah',
    name: 'Sarah',
    shortLabel: 'Sarah (sarah-deploy.sh)',
    icon: '🛡️',
    roleTitle: 'The Guardian & Autonomous Production Deployer',
    systemArtifact: 'raggiesoft-deployment-tools/sarah-deploy.sh',
    stackBadge: 'Bash • 5-Min Cron Heartbeat • Non-Root rsync',
    quote: 'I watch the perimeter. When the code changes, I verify it. Then, I make it real.',
    cardSummary: 'Watches GitHub remotes on a 5-minute cron heartbeat on NYC1, verifies commit SHA integrity, and performs non-root atomic rsync deployments.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/sarah.jpg',
    ogTitle: 'Sarah (sarah-deploy.sh) — Autonomous Deployer | Build Team',
    ogDescription: 'Meet Sarah: the non-root autonomous Linux cron deployment guardian managing all 10 RaggieSoft web roots on NYC1.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/sarah.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Jun 21, 1989' },
      { label: 'Relation', value: 'Fraternal Twin A (Older Twin to Jenna)' },
      { label: 'Neurotype', value: 'OCD (Rigid Hash & Permission Verification)', isBadge: true },
      { label: 'Security Posture', value: 'Strict Non-Root Execution (EUID != 0)', isBadge: true }
    ],
    technicalHeading: 'The Deployer: Sudo-Less Continuous Deployment',
    technicalIntro:
      'Sarah is an autonomous Bash deployment daemon (sarah-deploy.sh) running on a 5-minute cron heartbeat on Jessica (NYC1). She eliminates the anxiety of manual server pulls:',
    technicalCapabilities: [
      {
        title: 'Hardened Non-Root Security Gate',
        detail: 'Explicitly refuses to run if EUID == 0 (root/sudo), preventing accidental privilege escalation or root-owned file lockouts in /var/www/.'
      },
      {
        title: 'Cryptographic SHA Hash Verification',
        detail: 'Fetches origin/main across all 10 site repositories and compares git rev-parse HEAD against origin/main before touching any production web root.'
      },
      {
        title: 'Atomic rsync Promotion & Permission Normalization',
        detail: 'Syncs pre-compiled browser/static bundles (/dist, /build, /out, /.output/public) into /var/www/* and enforces 755 directory / 644 file permissions.'
      }
    ],
    cliSnippet: {
      comment: '# Autonomous 5-Minute Cron Daemon (or Manual Nuclear Reset)',
      commands: [
        '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh',
        '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh --force-reset'
      ]
    },
    humanHeading: 'The Guardian: The Compulsion to Protect',
    humanLeadQuote: '"She physically cannot proceed until the checksums match."',
    humanParagraphs: [
      'Sarah is Jenna\'s older fraternal twin. While Jenna thrives in the fast-moving creative workspace, Sarah embodies Rigid Verification.',
      'In this architecture, her OCD is her superpower. She does not merely "check" a deployment; she feels an unshakeable compulsion to verify every SHA hash, directory boundary, and POSIX file permission bit before letting a single byte go live.',
      'That vigilance lets Michael sleep at night knowing Sarah will never cut a corner, never run as root, and never deploy an unverified build.'
    ],
    terminalBlock: {
      headerTitle: '/var/log/sarah-deploy.log (Cron Heartbeat)',
      statusBadge: 'WATCHING PERIMETER',
      promptUser: 'sarah@jessica:~$',
      command: './sarah-deploy.sh',
      outputLines: [
        '[12:00:00] 👩‍💼 SARAH: Heartbeat active. Scanning 12 repositories...',
        '[12:00:02] 👩‍💼 SARAH: Change detected in Portfolio (michaelpragsdale.com)! Jenna pushed updates.',
        '   -> Syncing dist/raggiesoft-portfolio/browser/ to /var/www/michaelpragsdale.com...',
        '   -> Standardizing POSIX permissions (755 dirs / 644 files)...',
        '[12:00:04] ✅ SARAH: Portfolio Deployment Complete. Perimeter secure.'
      ]
    }
  },
  {
    slug: 'amanda-elara',
    name: 'Amanda & Elara',
    shortLabel: 'Amanda & Elara (Router)',
    icon: '🌱',
    roleTitle: 'The Protected Web Root & Front-Controller Router',
    systemArtifact: 'raggiesoft.com/www/amanda/elara.php',
    stackBadge: 'PHP 8.5 MVC • Nginx Gateway • Stardust Engine CMS',
    quote: 'One holds the knowledge. The other speaks the words. You cannot have one without the other.',
    cardSummary: 'Identical twins powering the Stardust Engine CMS gateway: Amanda is the read-only physical web root and Elara is the single executable PHP 8.5 router.',
    portraitUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/amanda-elara.jpg',
    ogTitle: 'Amanda & Elara (amanda/elara.php) — Root & Router | Build Team',
    ogDescription: 'Meet Amanda & Elara: the symbiotic web root and PHP 8.5 front-controller router powering raggiesoft.com and Stardust Engine CMS.',
    ogImageUrl: 'https://assets.raggiesoft.com/raggiesoft-lore/family/images/atmospheric/amanda-elara.jpg',
    vitalStats: [
      { label: 'DOB', value: 'Jan 1, 1995' },
      { label: 'Relation', value: 'Identical Twin Sisters (The Youngest)' },
      { label: 'Amanda Profile', value: 'Non-Speaking (Apraxia — Static Memory)', isBadge: true },
      { label: 'Elara Profile', value: 'Hyperlexic (Dynamic Front-Controller)', isBadge: true }
    ],
    technicalHeading: 'The Gateway Architecture: Division of Labor',
    technicalIntro:
      'RaggieSoft Hub (raggiesoft.com) and the open-source Stardust Engine CMS do not expose a conventional public_html/index.php directory tree. Instead, the twins govern all incoming HTTP traffic through a strict two-part symbiosis:',
    technicalCapabilities: [
      {
        title: 'Amanda (The Protected Web Root Directory)',
        detail: 'Represents the physical web root (/amanda). She holds the entry point and static assets while keeping application views (/pages), route manifests (/data/routes), and includes outside direct URL probing.'
      },
      {
        title: 'Elara (The Executable Front-Controller Router)',
        detail: 'Represents elara.php—the only PHP script Nginx is permitted to execute. She intercepts every request, enforces 301 subdomain redirects, merges DRY JSON route inheritance, and assembles the response.'
      },
      {
        title: 'Bot & Scraper Obscurity Shield',
        detail: 'Automated scanners probing for /index.php or /public_html receive immediate 404 responses at the Nginx edge.'
      }
    ],
    cliSnippet: {
      comment: '# Nginx Front-Controller Gateway Routing to Amanda & Elara',
      commands: ['try_files $uri $uri/ /elara.php?$query_string;']
    },
    humanHeading: 'The Symbiosis: The Silent & The Speaker',
    humanLeadQuote: '"Elara protects Amanda from the noise of the world, and Amanda gives Elara something meaningful to say."',
    humanParagraphs: [
      'Amanda is stoic and non-speaking (childhood apraxia of speech). She represents the static filesystem—perfect, uncorrupted memory, but unable to speak directly to the outside world.',
      'Elara is dynamic and hyperlexic. She acts as her twin sister\'s voice and interpreter, translating messy incoming HTTP requests into structured instructions that Amanda understands.',
      'Their neurodivergence is not a limitation; it is their security model. Neither twin can function alone, and together they form an unbreakable gateway.'
    ],
    terminalBlock: {
      headerTitle: '/etc/nginx/sites-available/raggiesoft.com.conf',
      statusBadge: 'GATEWAY ACTIVE',
      promptUser: 'nginx@jessica:~$',
      command: 'cat /etc/nginx/sites-available/raggiesoft.com.conf',
      outputLines: [
        'server {',
        '    server_name raggiesoft.com;',
        '    # 1. Point Root to Amanda (Protected Entry Directory)',
        '    root /var/www/raggiesoft.com/amanda;',
        '    # 2. Route All Dynamic Traffic Through Elara',
        '    location / {',
        '        try_files $uri $uri/ /elara.php?$query_string;',
        '    }',
        '}'
      ]
    }
  }
] as const;


