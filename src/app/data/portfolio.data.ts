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
    codename: 'Jenna',
    scriptName: 'jenna-sync.sh',
    roleTitle: 'Multi-Repo Git & S3/Spaces CDN Release Orchestrator',
    stack: 'Bash • Git • rclone • DigitalOcean Spaces (NYC1)',
    summary:
      'Single-command deployment pipeline governing build verification, semantic Git tagging, 10-property GitHub synchronization, and differential S3 CDN asset publishing.',
    capabilities: [
      'Enforces pre-push build and type-check gates across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Node.js ESM, and PHP 8.5 repositories before any commit reaches production.',
      'Synchronizes public media and shared network navigation assets (raggiesoft-network.js/.css) to DigitalOcean Spaces CDN (assets.raggiesoft.com) while isolating local lossless audio vaults (/raggiesoft-vaults).',
      'Eliminates manual `git push` drift across all 10 decoupled properties.'
    ]
  },
  {
    codename: 'Harper',
    scriptName: 'harper.sh',
    roleTitle: 'Automated Audio Mastering, RealESRGAN & WebVTT Pipeline',
    stack: 'Bash • Python • FFmpeg • Metal RealESRGAN • OpenAI Whisper',
    summary:
      'Idempotent media ingestion pipeline that transforms raw studio renders into broadcast-normalized MP3/OGG streams, 4K upscaled artwork, and time-synced WebVTT closed captions.',
    capabilities: [
      'Normalizes audio masters to EBU R128 (-14 LUFS) broadcast standards via FFmpeg while archiving lossless WAV/FLAC masters in a decoupled local vault.',
      'Executes macOS Metal-accelerated RealESRGAN neural upscaling for 1:1 album covers and 16:9 Open Graph social banners.',
      'Inspects `.vtt` files for `NOTE human_verified_by_michael` signatures—preserving human-synced studio timings while auto-transcribing unverified tracks.'
    ]
  },
  {
    codename: 'Sarah',
    scriptName: 'sarah-deploy.sh',
    roleTitle: 'Zero-Downtime Linux & Nginx Infrastructure Provisioner',
    stack: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • Cloudflare / Let’s Encrypt TLS',
    summary:
      'Server-side orchestration daemon on NYC1 (142.93.244.239) managing virtual host routing, 301 vanity domain redirects, TLS termination, and atomic release promotion.',
    capabilities: [
      'Manages Nginx virtual hosts across raggiesoft.com, all eight *.raggiesoft.com subdomains (corporate, engineroom, music, stardust, books, lore, nebulae, storetrainer), and michaelpragsdale.com.',
      'Configures strict HTTP security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy) and edge 301 redirects for legacy routes and vanity domains.',
      'Executes zero-downtime reloads after verifying Nginx configuration syntax.'
    ]
  },
  {
    codename: 'Paige & Elara',
    scriptName: 'paige.php / amanda/elara.php',
    roleTitle: 'Narrative Route Compiler, Full-Text Indexer & Gateway Router',
    stack: 'PHP 8.5 • Pandoc EPUB 3.3 • JSON Route & Search Compiler',
    summary:
      'Automated literary publishing and routing toolchain compiling Markdown manuscripts (`e*`/`c*`/`s*.md`) into dual-target route maps, 3,185-scene search indices, and Section 508-compliant EPUB 3.3 e-books.',
    capabilities: [
      'Compiles multi-era Markdown narratives into structured JSON route trees, Table of Contents manifests (`toc.json`), and a 3,185-scene full-text `search-index.json` across `raggiesoft.com` and `books.raggiesoft.com`.',
      'Preserves compiled `.epub` and `.pdf` deliverables during destructive CDN shelf syncs while auditing JSON manifests for referential integrity.'
    ]
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
      'Architected a unified cross-network navigation bar and single-hamburger mobile drawer (`raggiesoft-network.js` / `.css`) plus local-first studio tooling (`jenna-sync.sh`, `harper.sh`, `sarah-deploy.sh`, and the Hold-Spacebar WebVTT Lyric Synchronizer).',
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

