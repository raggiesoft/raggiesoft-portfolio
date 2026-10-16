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
  readonly repoPath: string;
  readonly primaryStack: string;
  readonly architecturalPattern: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly lenses: readonly RoleLens[];
  readonly isCurrentSite?: boolean;
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
    shortDescription: 'Showing the complete polyglot architecture matrix, Section 508 proofs, ETL pipelines, and DevOps automation.'
  },
  {
    id: 'architecture',
    label: 'Systems & Polyglot Architecture',
    shortDescription: 'Focused on multi-framework system design (Angular, PHP 8.5 MVC, Svelte 5, React 19, Vanilla JS) and zero-database edge/CDN topology.'
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
    detail: 'This live multi-property production ecosystem serves as my code sample. I welcome rigorous live system-design reviews and code walkthroughs, and respectfully decline unpaid multi-day take-home projects.'
  }
] as const;

/**
 * Polyglot Production Ecosystem Matrix.
 * Demonstrates mastery across distinct modern web paradigms without relying on
 * any server-side relational database.
 */
export const POLYGLOT_ECOSYSTEM: readonly EcosystemProperty[] = [
  {
    id: 'raggiesoft-portfolio',
    name: 'Executive Systems Dossier (This Site)',
    domain: 'michaelpragsdale.com',
    url: 'https://michaelpragsdale.com',
    repoPath: '/raggiesoft-portfolio',
    primaryStack: 'Angular 19 (Standalone + Zoneless Signals + TypeScript) + Modern Native CSS',
    architecturalPattern: 'Static Single-Page Dossier with Native CSS Cascade Layers (@layer), Subgrid & Container Queries',
    summary:
      'Decoupled from the main corporate hub to demonstrate enterprise-grade TypeScript and Zoneless Angular Signals architecture favored by Defense, Government, and Enterprise engineering organizations.',
    highlights: [
      'Zero zone.js runtime overhead via provideExperimentalZonelessChangeDetection() and reactive Angular Signals (signal, computed).',
      '100% Native Modern CSS architecture (@layer, CSS Grid subgrid, @container queries, light-dark() with prefers-color-scheme and forced-colors fallbacks) — zero Bootstrap.',
      'Sub-second Largest Contentful Paint (LCP) with native system font stacks and embedded Schema.org ProfilePage JSON-LD for ATS parsers.'
    ],
    tags: ['Angular 19', 'TypeScript 5.7', 'Zoneless Signals', 'CSS @layer', 'CSS Subgrid', 'Container Queries', 'Section 508'],
    lenses: ['architecture', 'accessibility'],
    isCurrentSite: true
  },
  {
    id: 'raggiesoft-hub',
    name: 'Stardust Engine CMS & Corporate Hub',
    domain: 'raggiesoft.com',
    url: 'https://raggiesoft.com',
    repoPath: '/raggiesoft-hub',
    primaryStack: 'PHP 8.5 MVC (Stardust Engine CMS) + Web Awesome Components',
    architecturalPattern: 'Zero-Database Server-Side Rendered (SSR) Front-Controller MVC with Automated SEO & CSP Hardening',
    summary:
      'Custom-engineered PHP 8.5 MVC platform powering RaggieSoft corporate governance, legal licensing, and architectural documentation without a SQL attack surface.',
    highlights: [
      'Powered by PHP 8.5 with strict typing, custom front-controller routing, and zero database dependencies.',
      'Automatic Open Graph, canonical URL, and JSON-LD structured data synthesis per route.',
      'Migrated from legacy Bootstrap 5.3 to semantic Web Awesome custom elements and native CSS tokens.'
    ],
    tags: ['PHP 8.5', 'Custom MVC', 'Web Awesome', 'Zero-Database SSR', 'Nginx', 'JSON-LD'],
    lenses: ['architecture', 'accessibility', 'devops']
  },
  {
    id: 'raggiesoft-music',
    name: 'The Listening Room & Engine Room Studio IDE',
    domain: 'music.raggiesoft.com',
    url: 'https://music.raggiesoft.com',
    repoPath: '/raggiesoft-music',
    primaryStack: 'Svelte 5 (Runes + SvelteKit) + Tailwind CSS v4 + Web Audio / MediaSession API',
    architecturalPattern: 'Static-First Audio Streaming Platform & Local-First Browser VTT Mastering IDE',
    summary:
      'Full-featured audiophile streaming portal and internal lyric synchronization IDE backed by structured JSON/Markdown catalogs and DigitalOcean Spaces CDN.',
    highlights: [
      'Built on Svelte 5 Runes ($state, $derived, $effect) and Tailwind CSS v4 with persistent gapless audio playback across client-side route transitions.',
      'Includes an integrated DistroKid-style Hold-Spacebar WebVTT Lyric Synchronizer (/studio) that stamps human_verified_by_michael metadata headers so AI pipelines never overwrite human timing.',
      'Automated build-time catalog ingestion compiling 19+ albums, liner notes, and transcripts into static JSON endpoints.'
    ],
    tags: ['Svelte 5 Runes', 'SvelteKit SSG', 'Tailwind CSS v4', 'WebVTT Sync IDE', 'MediaSession API', 'ETL Pipeline'],
    lenses: ['architecture', 'accessibility', 'data-etl']
  },
  {
    id: 'raggiesoft-book-library',
    name: 'Ocean View Archives Digital Library',
    domain: 'books.raggiesoft.com',
    url: 'https://books.raggiesoft.com',
    repoPath: '/raggiesoft-book-library',
    primaryStack: 'Vanilla PHP 8.5 + Vanilla ES2024 JavaScript + Nebulae Design System',
    architecturalPattern: 'Zero-Framework Accessible Long-Form Reading Engine with Synchronized Audio Soundtracks',
    summary:
      'Demonstrates mastery of foundational web standards without framework abstractions—delivering a fast, WCAG AAA-capable literary reading environment.',
    highlights: [
      'Zero client-side framework overhead: pure semantic HTML5, Vanilla PHP 8.5 manifest parsing, and modular ES2024 JavaScript.',
      'Real-time reader accessibility preferences (adjustable line-height, measure width, font family, and high-contrast themes) persisted via localStorage.',
      'Deep cross-domain integration with Engine Room Records for chapter-synced musical accompaniment.'
    ],
    tags: ['PHP 8.5', 'Vanilla ES2024 JS', 'Nebulae CSS', 'WCAG AAA Typography', 'EPUB 3.3 Pipeline'],
    lenses: ['architecture', 'accessibility', 'data-etl']
  },
  {
    id: 'raggiesoft-lore',
    name: 'Aethelgard & Runebreaker Interactive Engine',
    domain: 'lore.raggiesoft.com',
    url: 'https://lore.raggiesoft.com',
    repoPath: '/raggiesoft-lore',
    primaryStack: 'React 19 + Next.js + HTML5 Canvas + Parallel ARIA Shadow DOM',
    architecturalPattern: 'Dual-Layer Accessible Canvas Game & Interactive Lore Compendium',
    summary:
      'Proves that high-frame-rate graphical `<canvas>` applications and strict Section 508 screen-reader accessibility are not mutually exclusive.',
    highlights: [
      'Implements the Dual-Layer Canvas Accessibility Pattern: a 60fps 2D graphical canvas paired with a synchronized, keyboard-navigable ARIA Shadow DOM.',
      'Screen readers (JAWS, NVDA, VoiceOver) receive real-time spatial telemetry and tactical state announcements via polite/assertive ARIA live regions.',
      'React 19 & Next.js static export architecture for instant global edge delivery.'
    ],
    tags: ['React 19', 'Next.js', 'HTML5 Canvas', 'ARIA Shadow DOM', 'Section 508 Gaming', 'TypeScript'],
    lenses: ['architecture', 'accessibility']
  },
  {
    id: 'storetrainer',
    name: 'RaggieSoft StoreTrainer',
    domain: 'storetrainer.raggiesoft.com',
    url: 'https://raggiesoft.com/raggiesoft-media/projects/storetrainer',
    repoPath: '/ai-staging/StoreTrainer',
    primaryStack: 'Visual Basic 6.0 (x86) + Win32 API + .NET Port + NSIS Packaging',
    architecturalPattern: 'Cross-Era Win32 Desktop PC Game & Trainer Directory Manager (Windows 95 through Windows 11)',
    summary:
      'Specialized desktop utility engineered for the retro and modern PC gaming ecosystem to store, index, and manage the filesystem locations and command-line launch switches of PC games alongside their associated game trainers across 30 years of Windows hardware.',
    highlights: [
      'Maintained in a Windows 2000 Professional SP4 VM and compiled in Visual Basic 6.0 (TStore.vbp)—alongside a modern .NET port (TStore.NET)—using dynamic Win32 kernel memory verification (GetProcAddress for IsWow64Process in DetectOSBits.bas) so 64-bit checks never crash Windows 95/98.',
      'Packaged with an OS-aware NSIS Wizard95 installer (TSSetup.nsi) that conditionally deploys MSVBVM60.DLL, DCOM98, and Windows Script Host 5.6 on legacy kernels while extracting the full VB6 source tree ($INSTDIR\\Source) for educational auditing.',
      'Slated for standalone extraction to storetrainer.raggiesoft.com—engineered to follow all modern web and Section 508 accessibility standards under the hood while looking right at home on Netscape Communicator 4.'
    ],
    tags: ['Visual Basic 6.0', 'Win32 API', 'TStore.NET', 'NSIS Installer', 'Win95–Win11 Compatibility', 'Netscape 4 Aesthetic'],
    lenses: ['architecture', 'devops', 'data-etl']
  }
] as const;

/**
 * "Personified DevOps" CI/CD & Content Automation Fleet.
 * Explains how a solo Systems Architect maintains 6+ production properties and
 * gigabytes of multi-format media with enterprise reliability.
 */
export const DEVOPS_CONSTRUCTS: readonly DevOpsConstruct[] = [
  {
    codename: 'Jenna',
    scriptName: 'jenna-sync.sh',
    roleTitle: 'Multi-Repo Git & S3/Spaces CDN Release Orchestrator',
    stack: 'Bash • Git • s3cmd • DigitalOcean Spaces (NYC1)',
    summary:
      'Single-command deployment pipeline governing build verification, semantic Git tagging, multi-repository GitHub synchronization, and differential S3 CDN asset publishing.',
    capabilities: [
      'Enforces pre-push build gates across SvelteKit, Angular, and PHP repositories before any commit reaches production.',
      'Synchronizes immutable media assets to DigitalOcean Spaces CDN (assets.raggiesoft.com) with strict MIME-type and cache-control headers.',
      'Eliminates manual `git push` drift across decoupled micro-properties.'
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
      'Normalizes audio masters to EBU R128 (-14 LUFS) broadcast standards via FFmpeg.',
      'Executes macOS Metal-accelerated RealESRGAN neural upscaling for 1:1 album covers and 16:9 Open Graph social banners.',
      'Inspects `.vtt` files for `NOTE human_verified_by_michael` signatures—preserving human-synced studio timings while auto-transcribing unverified tracks.'
    ]
  },
  {
    codename: 'Sarah',
    scriptName: 'sarah-deploy.sh',
    roleTitle: 'Zero-Downtime Linux & Nginx Infrastructure Provisioner',
    stack: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • Let’s Encrypt TLS',
    summary:
      'Server-side orchestration daemon on NYC1 (142.93.244.239) managing virtual host routing, 301 decoupling redirects, TLS termination, and atomic release promotion.',
    capabilities: [
      'Manages Nginx reverse-proxy and static root configurations across raggiesoft.com, music.raggiesoft.com, books.raggiesoft.com, and michaelpragsdale.com.',
      'Configures strict HTTP security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy).',
      'Executes zero-downtime reloads after verifying Nginx configuration syntax.'
    ]
  },
  {
    codename: 'Paige & Elara',
    scriptName: 'paige.py / audit-pipeline',
    roleTitle: 'Accessible EPUB 3.3 Compiler & Schema QA Gatekeeper',
    stack: 'Python 3 • Pandoc • JSON Schema • WCAG Contrast Verifier',
    summary:
      'Automated publishing and quality-assurance toolchain compiling Markdown manuscripts into Section 508-compliant EPUB 3.3 e-books and validating cross-property JSON catalogs.',
    capabilities: [
      'Compiles multi-chapter Markdown narratives into validated EPUB 3.3 packages with embedded accessible navigation landmarks.',
      'Audits `album.json`, `tracks.json`, and `books.json` manifests for referential integrity and broken CDN links prior to deployment.'
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
    title: 'The Cascade Protocol: Zero-Database Micro-Property Decoupling & CDN Data Lake',
    organization: 'RaggieSoft Infrastructure (NYC1 Production Cluster)',
    timeframe: '2024 – 2026',
    lenses: ['architecture', 'devops', 'data-etl'],
    problemStatement:
      'Hosting corporate pages, 19+ full-length music albums, interactive novels, and a recruiter portfolio inside a single monolithic PHP repository created tight coupling, content sprawl, and single-point-of-failure deployment risks—while installing a relational database (MySQL/PostgreSQL) would introduce unnecessary patching overhead and SQL injection attack vectors.',
    architecturalSolution:
      'Executed a phased strangler-fig decoupling strategy: extracted structured metadata, liner notes, WebVTT lyrics, and book manuscripts into a canonical S3/Spaces JSON+Markdown data lake (`raggiesoft-assets`), and deployed specialized, fault-isolated frontends (`music.raggiesoft.com` in Svelte 5, `books.raggiesoft.com` in Vanilla PHP/JS, `michaelpragsdale.com` in Angular 19) governed by Nginx 301 edge redirects and automated `jenna-sync.sh` CI/CD pipelines.',
    quantifiedImpact: [
      { label: 'Database Attack Surface', value: '0 SQL Databases (100% Static/JSON)' },
      { label: 'Production Properties', value: '6 Polyglot Micro-Properties' },
      { label: 'Deployment Automation', value: 'Single-Command CI/CD (jenna-sync.sh)' }
    ],
    technologies: ['Angular 19', 'PHP 8.5 MVC', 'Svelte 5', 'Nginx 301 Routing', 'DigitalOcean Spaces CDN', 'Bash CI/CD'],
    referenceLinks: [
      { label: 'View The Listening Room (Svelte 5)', url: 'https://music.raggiesoft.com' },
      { label: 'View Ocean View Archives (Books)', url: 'https://books.raggiesoft.com' },
      { label: 'View Corporate Hub (PHP 8.5)', url: 'https://raggiesoft.com' }
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
      'Architect and maintain a multi-domain, polyglot cloud ecosystem serving interactive media, accessible digital publications, and enterprise web proofs-of-concept with zero database attack surface.',
    achievements: [
      'Engineered and decoupled 6 production web properties spanning Angular 19 (Zoneless Signals), PHP 8.5 MVC (Stardust Engine CMS), Svelte 5 + Tailwind v4, Vanilla PHP/JS, and React 19 / Next.js.',
      'Built custom local-first tooling including the Engine Room Studio Hold-Spacebar WebVTT Lyric Synchronizer and automated Bash/Python media mastering pipelines (`jenna-sync.sh`, `harper.sh`, `sarah-deploy.sh`).',
      'Enforced strict WCAG 2.1 AA/AAA and Federal Section 508 compliance across all properties, including native `prefers-color-scheme`, `prefers-reduced-motion`, and `forced-colors` support.'
    ],
    technologies: ['Angular 19', 'PHP 8.5', 'Svelte 5', 'TypeScript', 'Linux/Nginx', 'Section 508', 'Bash/Python CI/CD']
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
    degree: 'Associate of Science (A.S.) in Information Technology (Focus: Software Engineering)',
    institution: 'Tidewater Community College — Virginia Beach / Norfolk, VA',
    timeframe: 'Expected Graduation: December 2026',
    statusNote: 'Active In-State Student (Requires Virginia physical residency for tuition rate)',
    focusAreas: [
      'Enterprise Software Engineering & Object-Oriented Systems Design',
      'Network Architecture, Linux Administration & Cybersecurity Fundamentals',
      'Database Design, Data Structures & Algorithmic Problem Solving'
    ]
  },
  {
    degree: 'Bachelor of Science (B.S.) Coursework — Customized Studies in Leadership & Information Systems',
    institution: 'Old Dominion University — Norfolk, VA',
    timeframe: 'Prior Undergraduate Coursework',
    statusNote: 'Foundation in Organizational Leadership, Technical Communication & Public Sector Operations',
    focusAreas: [
      'Technical Leadership & Cross-Functional Team Coordination',
      'Public Sector & Higher-Education Information Systems Governance',
      'Accessible Communication & Section 508 Regulatory Frameworks'
    ]
  }
] as const;

