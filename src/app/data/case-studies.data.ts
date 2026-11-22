/**
 * =============================================================================
 * File: src/app/data/case-studies.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & Engineering Guide):
 *
 * 1. What is this file, and what views does it power?
 *    `case-studies.data.ts` holds `ARCHITECTURAL_CASE_STUDIES` (`CASE-01`
 *    through `CASE-06`)—concrete problem-to-solution engineering studies across
 *    municipal operations, public higher-education LMS migration, native desktop
 *    suites, accessible HTML5 `<canvas>` interfaces, zero-database infrastructure,
 *    and binary AST compiler tooling.
 *
 *    This dataset drives:
 *      - **Home Dossier (`/`)**: Summary cards for quick recruiter scanning.
 *      - **Section Landing Page (`/case-studies`)**: Dedicated 6-study overview
 *        with Role-Lens filtering.
 *      - **Individual Deep-Dive Pages (`/case-studies/:id`)**: Full step-by-step
 *        implementation breakdowns, verification strategies, and architectural
 *        trade-offs!
 * =============================================================================
 */

import type { ArchitecturalCaseStudy } from './portfolio.types.ts';

/**
 * Six deep-dive Engineering, Desktop & Section 508 Web Case Studies.
 */
export const ARCHITECTURAL_CASE_STUDIES: readonly ArchitecturalCaseStudy[] = [
  {
    id: 'activenet-municipal-etl',
    shortName: 'CASE-01 • ActiveNet Data',
    code: 'CASE-01',
    title: 'ActiveNet Operational Data Transformation & Structured Reference Architecture',
    organization: 'City of Virginia Beach — Parks & Recreation',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl'],
    problemStatement:
      'ActiveNet stores detailed recreation center room-rental and reservation datasets, yet parsing raw multi-screen reservation views mid-shift is slow during high-volume weekend facility operations.',
    architecturalSolution:
      'Applied structured data-transformation habits to municipal facility operations: extracted weekend scheduling datasets from ActiveNet, normalized multi-room reservation records, and structured them into standardized, at-a-glance operational reference guides with clear tabular hierarchy.',
    quantifiedImpact: [
      { label: 'Operational Output', value: 'Standardized Weekend Reference' },
      { label: 'Information Structure', value: 'Consistent Tabular Hierarchy' },
      { label: 'Operational Benefit', value: 'At-a-Glance Staff Lookup' }
    ],
    technologies: ['ActiveNet', 'Operational Data Transformation', 'Structured Information Architecture', 'Workflow Optimization'],
    referenceLinks: [
      { label: 'Inspect Municipal Experience Role (/experience/city-of-virginia-beach)', url: '/experience/city-of-virginia-beach' },
      { label: 'Download Resume (PDF)', url: 'https://assets.raggiesoft.com/portfolio/documents/resume/mragsdale-resume.pdf' }
    ],
    ogTitle: 'CASE-01: ActiveNet Operational Data Transformation',
    ogDescription:
      'Municipal case study: normalizing multi-room ActiveNet scheduling datasets into structured, rapid-lookup operational reference tables in Virginia Beach.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-01 • Municipal Data Workflows' },
      { label: 'Organization', value: 'City of Virginia Beach Parks & Recreation' },
      { label: 'Source Platform', value: 'ActiveNet Recreation Management', isBadge: true },
      { label: 'Primary Outcome', value: 'Zero-Friction Shift Lookup', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Raw Multi-View Dataset Extraction',
        detail:
          'Exported multi-day facility reservation, room-setup, and time-window records from ActiveNet where raw screen layouts scattered critical operational fields across separate views.'
      },
      {
        title: '2. Record Normalization & Time-Block Ordering',
        detail:
          'Consolidated split multi-room bookings, standardized setup/teardown timestamps, and deduplicated recurring facility notes into a predictable chronological schema.'
      },
      {
        title: '3. High-Readability Tabular Information Architecture',
        detail:
          'Formatted normalized schedules with consistent column alignment, clear visual hierarchy, and scannable room/time groupings so on-duty staff verify weekend operations in seconds.'
      },
      {
        title: '4. On-Site Workstation & ActiveNet Workflow Troubleshooting',
        detail:
          'Served as a go-to resource helping fellow staff navigate ActiveNet edge cases, account lookups, and workstation bottlenecks during peak facility traffic.'
      }
    ],
    verificationAndTradeoffs: [
      'Cross-checked normalized weekend reference tables against live ActiveNet reservation ledgers prior to peak Saturday/Sunday shifts so last-minute room changes or multi-zone overlaps were caught ahead of time.',
      'Designed the layout around zero-training scannability: any staff member stepping up to the desk can read room assignments, time windows, and operational notes immediately without clicking through nested software screens.'
    ]
  },
  {
    id: 'odu-section-508-gatekeeper',
    shortName: 'CASE-02 • ODU 508 & LMS',
    code: 'CASE-02',
    title: 'PLE & Canvas LMS Migration: Source-Level HTML5 & WCAG / Section 508 Web Engineering',
    organization: 'Old Dominion University (ODU Online)',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    problemStatement:
      'Across ODU Online’s custom Personal Learning Environment (PLE) and transition to the Canvas Learning Management System (LMS), hundreds of university course modules contained legacy visual-only markup (such as <td style="font-weight: bold;"> cells and unlabeled interactive widgets) requiring source-code WCAG 2.1 AA and Revised Section 508 web compliance.',
    architecturalSolution:
      'Audited and refactored course source HTML and CSS using Deque axe, WAVE, manual keyboard focus testing, and JAWS/NVDA screen readers—converting visual layouts into semantic HTML5 (scoped table headers, landmarks, explicit labels) and authoring zero-dependency HTML/CSS Canvas templates adopted across university courses. Independently took initiative to build a Windows desktop batch utility (C# / .NET 5 and VB.NET, packaged via Inno Setup) that throttled CSV-queued PLE accessibility scans after browser SSO login and exported semantic HTML5 (<th scope="row">, aria-hidden) status logs—an architecture later expanded into the open-source RaggieSoft Accessibility Studio (.NET 10 WinForms + Monaco WebView2 IDE & SARIF 2.1.0 CLI).',
    quantifiedImpact: [
      { label: 'Web Standards', value: 'WCAG 2.1/2.2 AA & Section 508 Web' },
      { label: 'Testing & Tooling', value: 'Deque axe + JAWS/NVDA + C#/.NET' },
      { label: 'Reusable Output', value: 'HTML5 Templates & Studio IDE' }
    ],
    technologies: ['WCAG 2.1/2.2 AA', 'Section 508 Web', 'Semantic HTML5 & CSS', 'WAI-ARIA', 'Deque axe', 'JAWS / NVDA', 'Canvas LMS', 'C# / .NET 5 & .NET 10 WinForms', 'Inno Setup / MSI'],
    referenceLinks: [
      { label: 'Inspect ODU Online Experience Role (/experience/old-dominion-university)', url: '/experience/old-dominion-university' },
      { label: 'Inspect RaggieSoft Accessibility Studio (a11y.raggiesoft.com)', url: 'https://a11y.raggiesoft.com' },
      { label: 'View IDE Source on GitHub (MIT)', url: 'https://github.com/raggiesoft/accessibility-studio' }
    ],
    ogTitle: 'CASE-02: ODU Online PLE & Canvas Section 508 Web',
    ogDescription:
      'Higher-ed web accessibility case study at Old Dominion University: source HTML5/CSS refactoring, Canvas LMS templates, JAWS/NVDA, and C#/.NET QA tools.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-02 • Higher-Ed LMS Accessibility' },
      { label: 'Institution', value: 'Old Dominion University (ODU Online)' },
      { label: 'Compliance Scope', value: 'Code-Level WCAG 2.1 AA & Section 508 Web', isBadge: true },
      { label: 'Automation Lineage', value: '.NET 5 PLE Scanner -> .NET 10 Studio IDE', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Source-Code HTML5 & CSS Refactoring (PLE -> Canvas LMS)',
        detail:
          'Inspected raw course module HTML/CSS directly rather than relying on WYSIWYG guesses—replacing fake bold table cells (<td style="font-weight: bold;">) with genuine <th scope="col"> / <th scope="row"> headers, fixing skipped heading hierarchies, and eliminating layout tables.'
      },
      {
        title: '2. Reusable Zero-Dependency Canvas LMS Course Templates',
        detail:
          'Engineered clean, copy-ready semantic HTML5 and CSS module templates compliant with Canvas LMS’s strict HTML allowlist so instructional designers and faculty could publish accessible syllabi, callouts, and schedules from day one.'
      },
      {
        title: '3. Automated DOM Scanning Paired with Manual Screen-Reader Verification',
        detail:
          'Combined Deque axe and WAVE DOM inspections with hands-on keyboard-only Tab traversal and live speech verification in JAWS, NVDA, and VoiceOver to catch focus order, ARIA state, and link-disambiguation issues automated tools miss.'
      },
      {
        title: '4. Self-Initiated C# / .NET Batch QA Utility (Evolved into Accessibility Studio)',
        detail:
          'Built a Windows desktop utility (VB.NET v1.0 -> C# / .NET 5 WinForms v2.0 with Inno Setup) that queued CSV course URLs after university SSO authentication with polite rate-limiting and exported accessible semantic HTML5 status reports—laying the direct foundation for RaggieSoft Accessibility Studio (.NET 10 + Monaco WebView2).'
      }
    ],
    verificationAndTradeoffs: [
      'Canvas LMS strips <script> tags and external stylesheets inside course pages for student security, so every reusable template had to achieve responsive reflow (up to 400% zoom) and >= 4.5:1 contrast using strictly Canvas-safe semantic HTML5 and scoped styles.',
      'Pairing automated rule checks with real JAWS and NVDA listening passes ensured course pages were genuinely pleasant to navigate by heading and table shortcuts—not merely passing a linter score.'
    ]
  },
  {
    id: 'native-desktop-suite',
    shortName: 'CASE-03 • .NET 10 & SwiftUI',
    code: 'CASE-03',
    title: 'Cross-Platform Native Desktop & Mobile Suite (.NET 10 WPF & Multiplatform SwiftUI)',
    organization: 'RaggieSoft Media (BookReader, ListeningRoom & Backstage Apps)',
    timeframe: '2025 – 2026',
    lenses: ['architecture', 'accessibility', 'data-etl'],
    problemStatement:
      'Readers and listeners wanted native offline desktop and mobile applications on Windows and Apple devices capable of downloading compressed book/audio archives and synchronizing live chapter soundtracks across apps without bundling a local database server.',
    architecturalSolution:
      'Engineered parallel native client suites in C# / .NET 10 WPF (Visual Studio 2026 + Inno Setup 7.1.1 & MSIcode installers for Windows x64/ARM64) and multiplatform SwiftUI (Xcode project targeting macOS, iOS, iPadOS, tvOS, and visionOS). Implemented shared core libraries consuming static CDN JSON APIs, bundled 7-Zip offline archive extraction, tri-directional cross-app IPC (Windows Named Pipes and Apple DistributedNotificationCenter / custom URL schemes), and full UIAutomation (Narrator/NVDA) and VoiceOver accessibility.',
    quantifiedImpact: [
      { label: 'Windows Stack', value: 'C# / .NET 10 WPF + Named Pipes IPC' },
      { label: 'Apple Stack', value: 'Multiplatform SwiftUI + StoreKit 2' },
      { label: 'Assistive Support', value: 'UIAutomation & VoiceOver Ready' }
    ],
    technologies: ['C#', '.NET 10 WPF', 'SwiftUI', 'Named Pipes IPC', 'UIAutomation', 'VoiceOver', 'Inno Setup 7 / MSI', 'Static JSON APIs'],
    referenceLinks: [
      { label: 'Visit Desktop Launcher Portal (launcher.raggiesoft.com)', url: 'https://launcher.raggiesoft.com' },
      { label: 'Inspect Web Book Companion (books.raggiesoft.com)', url: 'https://books.raggiesoft.com' },
      { label: 'Inspect Web Audio Companion (music.raggiesoft.com)', url: 'https://music.raggiesoft.com' }
    ],
    ogTitle: 'CASE-03: .NET 10 WPF & SwiftUI Native Suite Specs',
    ogDescription:
      'Cross-platform desktop/mobile suite: C#/.NET 10 WPF (Named Pipes IPC, UIAutomation) and multiplatform SwiftUI (VoiceOver) consuming static JSON APIs.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-03 • Cross-Platform Native Clients' },
      { label: 'Windows Targets', value: 'Windows 11 x64 & ARM64 (.NET 10 WPF)' },
      { label: 'Apple Targets', value: 'macOS, iOS, iPadOS, tvOS & visionOS', isBadge: true },
      { label: 'Local IPC Transport', value: 'Kernel Named Pipes (0 Open TCP Ports)', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Shared Core Domain & Offline Archive Engine (RaggieSoft.Core / RaggieSoftCore)',
        detail:
          'factored JSON catalog fetching, SHA-verified offline .7z/.zip archive extraction, and WebVTT (.vtt) timestamp parsing into shared C# and Swift core libraries consumed across all sibling apps.'
      },
      {
        title: '2. Zero-Port Cross-Application IPC Bridge',
        detail:
          'Connected BookReader, ListeningRoom, and Backstage on Windows using OS-kernel NamedPipeServerStream / NamedPipeClientStream (and DistributedNotificationCenter + custom URL schemes on Apple platforms) so turning a chapter queues its companion soundtrack locally without opening localhost TCP firewall ports.'
      },
      {
        title: '3. Native Screen-Reader Trees (WPF FlowDocument + SwiftUI Accessibility)',
        detail:
          'Compiled Markdown chapters into native WPF FlowDocument trees annotated with AutomationProperties (Name, HeadingLevel, LiveSetting) for Windows Narrator/JAWS/NVDA, and SwiftUI ScrollViewReader views with VoiceOver traits and MPNowPlayingInfoCenter Lock Screen controls.'
      },
      {
        title: '4. Flexible Consumer & Enterprise Packaging',
        detail:
          'Paired per-user %LOCALAPPDATA% Inno Setup 7.1.1 installers, RaggieSoftUpdate.exe (zero-runtime C++20 updater), and IExpress-style Task Dialog add-on micro-installers for offline book and studio-master album packs.'
      }
    ],
    verificationAndTradeoffs: [
      'Choosing OS-kernel Named Pipes over a local HTTP localhost server eliminated Windows Defender Firewall prompts and port-collision bugs on multi-user workstations.',
      'Consuming the exact same static CDN JSON manifests (toc.json, catalog.json, /api/v1/*.json) as the web PWAs guarantees 100% content parity across Windows, Mac, iPhone, iPad, and the web with zero backend API servers to maintain.'
    ]
  },
  {
    id: 'dual-layer-canvas-a11y',
    shortName: 'CASE-04 • Canvas A11y',
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
      { label: 'Visit Live Lore Graph (lore.raggiesoft.com)', url: 'https://lore.raggiesoft.com' },
      { label: 'Inspect Web Property Spec (/web-apps/raggiesoft-lore)', url: '/web-apps/raggiesoft-lore' },
      { label: 'View Source on GitHub (MIT)', url: 'https://github.com/raggiesoft/raggiesoft-lore' }
    ],
    ogTitle: 'CASE-04: Dual-Layer HTML5 Canvas Accessibility',
    ogDescription:
      'How lore.raggiesoft.com pairs a 60fps 2D HTML5 Canvas force graph with a synchronized React 19 WAI-ARIA DOM tree for JAWS, NVDA, and VoiceOver parity.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-04 • Accessible Data Visualization' },
      { label: 'Live Deployment', value: 'lore.raggiesoft.com (Next.js 16 + React 19)' },
      { label: 'WCAG Criteria', value: '1.1.1, 1.4.1, 2.1.1, 2.4.7 & 4.1.3', isBadge: true },
      { label: 'Screen Readers', value: 'JAWS • NVDA • VoiceOver Verified', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Layer 1 — Decorative 60fps Force-Directed Canvas (aria-hidden="true")',
        detail:
          'Renders nodes, directional relationship edges, and distinct per-category geometric shapes (so color is never the sole visual cue) on a hardware-accelerated 2D <canvas> explicitly hidden from screen readers to prevent unlabeled bitmap noise.'
      },
      {
        title: '2. Layer 2 — Synchronized Keyboard-Focusable Node Directory',
        detail:
          'Exposes every visible graph node as a native HTML <button> grouped cleanly by category and search filter. Focusing or activating a node button pans/zooms the canvas camera to that exact node via centerOnNode().'
      },
      {
        title: '3. Layer 3 — Semantic Relationship Inspector & Polite Live Region',
        detail:
          'Renders the selected node’s inbound/outbound edges inside a structured <aside> drawer with clickable neighbor buttons so keyboard and screen-reader users traverse graph hops effortlessly while aria-live="polite" announces filter changes.'
      }
    ],
    verificationAndTradeoffs: [
      'Rather than attempting brittle canvas hit-region shims, keeping interactive controls as genuine semantic HTML <button> elements alongside the canvas guarantees native Tab order, :focus-visible outlines, Windows Forced-Colors borders, and touch screen reader exploration out of the box.',
      'Honoring prefers-reduced-motion: reduce dampens force-layout spring animations and smooth camera pans so motion-sensitive users can explore complex relationship graphs comfortably.'
    ]
  },
  {
    id: 'cascade-protocol-decoupling',
    shortName: 'CASE-05 • 17-Site CI/CD',
    code: 'CASE-05',
    title: '17-Property DRY Web Decoupling & Single-Command CI/CD',
    organization: 'RaggieSoft Infrastructure (NYC1 Linux VPS + S3 CDN)',
    timeframe: '2024 – 2026',
    lenses: ['architecture', 'devops', 'data-etl'],
    problemStatement:
      'Hosting corporate licensing, 40+ music albums, serialized books, interactive visualizations, desktop app portals, and an engineering portfolio inside one monolithic repository created tight coupling—while adding SQL databases would increase patching overhead and attack surface.',
    architecturalSolution:
      'Decoupled the platform into 17 focused properties (`raggiesoft.com`, fifteen `*.raggiesoft.com` subdomains, and `michaelpragsdale.com`) with strict DRY role separation (`waystation` as global directory & 404 router, `jessica` as project backstories, `launcher` as desktop suite hub, `a11y` as enterprise IDE portal) backed by flat-file JSON/Markdown repositories plus DigitalOcean Spaces CDN (`assets.raggiesoft.com`). Automated builds, validation, and non-root server deployments via `jenna-sync.sh` and `sarah-deploy.sh`.',
    quantifiedImpact: [
      { label: 'SQL Attack Surface', value: '0 Relational Databases' },
      { label: 'Live Web Properties', value: '17 Decoupled Production Sites' },
      { label: 'Release Workflow', value: 'Automated Pre-Push Build Gates' }
    ],
    technologies: ['Angular 19', 'PHP 8.5 MVC', 'Svelte 5', 'Astro 6', 'Nuxt 4', 'Next.js 16', 'Web Awesome', 'Nginx', 'DigitalOcean Spaces'],
    referenceLinks: [
      { label: 'Inspect CI/CD Tooling Suite (/build-team)', url: '/build-team' },
      { label: 'Browse All 17 Web Properties (/web-apps)', url: '/web-apps' },
      { label: 'Visit Global Waystation Directory (waystation.raggiesoft.com)', url: 'https://waystation.raggiesoft.com' }
    ],
    ogTitle: 'CASE-05: 17-Site Zero-Database Web & CI/CD Topology',
    ogDescription:
      'How 17 decoupled web properties run on one hardened Ubuntu/Nginx VPS with zero SQL databases, S3 CDN sync, and automated pre-push build gates.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-05 • Cloud & Release Engineering' },
      { label: 'Production Host', value: 'DigitalOcean NYC1 Ubuntu VPS + Nginx' },
      { label: 'CDN Offload', value: 'DigitalOcean Spaces S3 + Cloudflare TLS 1.3', isBadge: true },
      { label: 'Deployment Model', value: 'Non-Root Pull CD + Showroom Minifier', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Subdomain-per-Concern & DRY Role Boundaries',
        detail:
          'Assigned each domain a clear responsibility—keeping consumer apps jargon-free on *.raggiesoft.com, centralizing the 17-site directory & wildcard 404 handler on waystation.raggiesoft.com, and dedicating michaelpragsdale.com to engineering architecture.'
      },
      {
        title: '2. Pre-Push Polyglot Build & SEO Gate (jenna-sync.sh + validate-network-seo.mjs)',
        detail:
          'Compiles every static and SSR bundle locally, verifies robots.txt, sitemap.xml, IndexNow keys, genuine HTTP 404 pages (zero soft-404s), and cross-site book/music deep links before any Git commit is pushed.'
      },
      {
        title: '3. Vault-Isolated Media & Differential S3 CDN Sync',
        detail:
          'Keeps lossless 24-bit WAV masters in a private local vault (/raggiesoft-vaults) off public cloud buckets while syncing normalized streaming MP3s, WebVTT captions, and artwork to assets.raggiesoft.com via rclone.'
      },
      {
        title: '4. Non-Root Pull Deployment & Production Minification (sarah-deploy.sh)',
        detail:
          'Polls GitHub origin/main on NYC1 as an unprivileged user (EUID != 0), promotes compiled bundles into /var/www/* via atomic rsync, and minifies deployed files (gated by php -l and node --check) while preserving 100% of teaching comments on GitHub.'
      }
    ],
    verificationAndTradeoffs: [
      'Eliminating relational databases across content/catalog properties removes SQL injection vectors, credential rotation overhead, and RAM-hungry database daemons—allowing a single lean Ubuntu Droplet to serve all 17 Nginx virtual hosts effortlessly.',
      'Pull-based deployments on NYC1 avoid storing production SSH private keys inside external CI providers while still promoting verified commits live within minutes.'
    ]
  },
  {
    id: 'msicode-dfm-binary-ast-compiler',
    shortName: 'CASE-06 • MSIcode & TPF0 AST',
    code: 'CASE-06',
    title: 'Clean-Room MSIcode & Binary Delphi TPF0 (.dfm) AST Compiler (msicode-dfm-ai-skill)',
    organization: 'Open-Source Packaging & Compiler Tooling (MIT License)',
    timeframe: '2026 – Present',
    lenses: ['architecture', 'devops'],
    problemStatement:
      'Commercial Windows Installer authoring tools like InstallAware store build scripts in a specialized 5-section GUID-linked text grammar (.mia), 7-section project manifests (.mpr), and binary Embarcadero Delphi TPF0 dialog streams (.dfm)—creating a visual IDE bottleneck where binary forms resist Git code review and automated scripting.',
    architecturalSolution:
      'Reverse-engineered a 100% clean-room interoperability specification covering all 73 MSIcode opcodes and authored lossless Python serializers/deserializers (mia_codec.py and dfm_tpf0_codec.py). Parses and emits 20-byte Win32 TFRMDESIGN headers and all Embarcadero TPF0 value tags (Int8 through 10-byte Extended floats, Sets, Collections, UTF-8 strings, and PNG streams) with automated byte-for-byte round-trip assertions, syncs .mpr manifests while preserving Azure Artifact Signing (Authenticode) hooks, wires Windows 11 Task Dialog Command Links, and enforces x64 + ARM64 (Capability 111) and UAC-disabled elevation safety.',
    quantifiedImpact: [
      { label: 'Opcode Coverage', value: '73 / 73 MSIcode Schemas' },
      { label: 'Binary Fidelity', value: 'Byte-Exact TPF0 Round-Trip' },
      { label: 'Platform Targets', value: 'Win11 x64/ARM64 + Authenticode' }
    ],
    technologies: ['Python 3 (Binary AST)', 'Windows Installer (MSI)', 'InstallAware MSIcode', 'Delphi VCL TPF0 (.dfm)', 'Win32 TaskDialogIndirect', 'Azure Artifact Signing', 'llms.txt / Agent Skills'],
    referenceLinks: [
      { label: 'View Clean-Room Repo & Spec on GitHub (MIT)', url: 'https://github.com/raggiesoft/msicode-dfm-ai-skill' },
      { label: 'Inspect Accessibility Studio MSI Target (a11y.raggiesoft.com)', url: 'https://a11y.raggiesoft.com' }
    ],
    ogTitle: 'CASE-06: MSIcode & Binary Delphi TPF0 AST Compiler',
    ogDescription:
      'Clean-room specification (73 opcodes) and lossless Python AST compiler for Windows Installer (.mia/.mpr) and binary Embarcadero Delphi TPF0 (.dfm) dialogs.',
    vitalStats: [
      { label: 'Case Identifier', value: 'CASE-06 • Binary AST & MSI Tooling' },
      { label: 'Open-Source Repo', value: 'github.com/raggiesoft/msicode-dfm-ai-skill' },
      { label: 'Binary Stream', value: 'Win32 TFRMDESIGN + Delphi TPF0 AST', isBadge: true },
      { label: 'Signing & CLI', value: 'miabuild.exe + Azure Artifact Signing', isBadge: true }
    ],
    implementationSteps: [
      {
        title: '1. Four-File Ecosystem Decoding (.mia, .mpr, .dfm, .dfm.miaf)',
        detail:
          'Mapped the exact CRLF wire formats across 5-section GUID-linked .mia scripts (73 opcodes), 7-section .mpr project manifests (including empty-line cardinality invariants and reserved slot [3] alignment), binary .dfm dialogs, and UTF-8-BOM .dfm.miaf reactive Pascal expressions.'
      },
      {
        title: '2. Lossless Binary TFRMDESIGN + Embarcadero TPF0 AST Compiler (dfm_tpf0_codec.py)',
        detail:
          'Wrote a dependency-free Python binary parser/serializer supporting the 20-byte Win32 TFRMDESIGN resource header and every TPF0 value tag (Int8/16/32, Int64, 10-byte x87 Extended floats, Strings, UTF8String tag 20 auto-promotion, Identifiers, Sets, Collections, and embedded PNG streams) verified by byte-exact round-trip assertions.'
      },
      {
        title: '3. Compiler Trap Guards & Windows 11 x64/ARM64 Hardening (mia_codec.py)',
        detail:
          'Built compile-time guards preventing Wizard Loop macro-expansion bugs and Create File Type pipe-subtable crashes, while codifying native Windows 11 ARM64 detection (Capability 111 alongside 65), UAC-disabled (EnableLUA=0) exit-code 740 checks, $MYAH_UAC$ non-elevated Explorer drag-and-drop launch, and 15-parameter Win32 Task Dialog Command Links.'
      },
      {
        title: '4. Clean-Room Sanitization & Preserved Authenticode Hooks',
        detail:
          'Designed sync_mpr() to slice and preserve Section 4 [20..] and Sections 5–6 so Azure Artifact Signing (signtool.exe + Azure.CodeSigning.Dlib.dll) configurations survive automated script rebuilds, and published the sanitized MIT toolkit with synthetic zero-blob examples and llms-full.txt.'
      }
    ],
    verificationAndTradeoffs: [
      'Validated mia_codec.py and dfm_tpf0_codec.py against both stock QuickStart templates (255 statements) and full 801-statement enterprise workstation installers, asserting zero byte diffs on round-trip binary serialization before compiling live .msi/.exe outputs in Studio + miabuild.exe.',
      'Constructing synthetic TWizardForm ASTs in memory inside the public example scripts guarantees zero vendor binary .dfm blobs ever enter public Git history while still proving full binary serializer coverage.'
    ]
  }
] as const;
