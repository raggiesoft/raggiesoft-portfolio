/**
 * =============================================================================
 * File: src/app/data/build-team.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & DevOps Guide):
 *
 * 1. What is this file, and what views does it power?
 *    `build-team.data.ts` documents the **7 modular CLI & server components**
 *    that provision workstations, compile Markdown routes, master audio/WebVTT
 *    captions, enforce pre-push build gates, and deploy 17 web properties:
 *      1. `michael`      -> `brooke.sh` & `backup.sh` (Workstation Bootstrap & Sync)
 *      2. `paige`        -> `paige.php` (Markdown Manuscript & Search Compiler)
 *      3. `jessica`      -> `NYC1 Ubuntu VPS` (Hardened Linux & 17 Nginx Vhosts)
 *      4. `harper`       -> `harper.sh` (Multi-Core FFmpeg & WebVTT Mastering)
 *      5. `jenna`        -> `jenna-sync.sh` (13-Repo Build Gate & S3 CDN Sync)
 *      6. `sarah`        -> `sarah-deploy.sh` (Non-Root Cron CD & Minifier)
 *      7. `amanda-elara` -> `amanda/elara.php` (Protected Front-Controller Router)
 *
 *    Notice `DEVOPS_CONSTRUCTS` (shown on `/`) and `BUILD_TEAM_PROFILES` (shown
 *    on `/build-team` and `/build-team/:slug`) now align **7-for-7** so every
 *    card on the homepage has a matching deep-dive specification page!
 * =============================================================================
 */

import type { BuildTeamMember, DevOpsConstruct } from './portfolio.types.ts';

/**
 * Module-private OpenGraph image constant shared across `/build-team` routes.
 */
const DEFAULT_OG_IMG = 'https://michaelpragsdale.com/og-image.jpg';

/**
 * Seven CI/CD, Media Mastering & Infrastructure summary cards rendered on `/`.
 * Each card links directly to its full specification view at `/build-team/:slug`.
 */
export const DEVOPS_CONSTRUCTS: readonly DevOpsConstruct[] = [
  {
    codename: 'brooke.sh & backup.sh',
    scriptName: '~/Developer/{brooke.sh,backup.sh,init-windows.ps1}',
    roleTitle: 'Cross-OS Workstation Provisioning & Differential Backup',
    stack: 'Bash • PowerShell 7 • Homebrew / Winget / APT • rsync / rclone',
    summary:
      'Idempotent workstation bootstrap and multi-drive/cloud backup scripts keeping CLI toolchains and repositories identical across macOS, Windows 11 Pro, and Linux.',
    capabilities: [
      'Provisions git, php 8.5, node, python3, ffmpeg, pandoc, rclone, 7zip, gh, and doctl across macOS, Linux, and Windows.',
      'Mirrors active workspaces to external NVMe/HDD volumes and cloud storage while excluding transient build caches (node_modules/, .venv/, dist/).',
      'Enforces universal Git author identity (hello@michaelpragsdale.com) and refreshes Python virtualenvs automatically.'
    ],
    profileSlug: 'michael',
    profileUrl: '/build-team/michael'
  },
  {
    codename: 'paige.php',
    scriptName: 'raggiesoft-deployment-tools/paige.php',
    roleTitle: 'Markdown Manuscript, Search Index & EPUB/PDF Compiler',
    stack: 'PHP 8.5 CLI • JSON Route Trees • Pandoc / XeLaTeX',
    summary:
      'Command-line publishing compiler that validates Markdown chapter hierarchies, generates static JSON route manifests and full-text search indices, and packages downloadable EPUB/PDF editions.',
    capabilities: [
      'Compiles multi-book Markdown trees into structured JSON route manifests (toc.json, catalog.json) and a full-text search-index.json for books.raggiesoft.com.',
      'Validates YAML frontmatter chronology, Story Crossroads DAG branching, and illustration asset existence before deployment.',
      'Packages offline .7z bundles and accessible EPUB/PDF deliverables consumed by web and native desktop Book Reader clients.'
    ],
    profileSlug: 'paige',
    profileUrl: '/build-team/paige'
  },
  {
    codename: 'NYC1 Linux Host',
    scriptName: 'NYC1 Ubuntu VPS (142.93.244.239)',
    roleTitle: 'Hardened Ubuntu Linux, Nginx & PHP 8.5-FPM Production Host',
    stack: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • UFW / Ed25519 SSH',
    summary:
      'Consolidated DigitalOcean production Droplet in NYC1 serving all 17 web properties behind Cloudflare TLS 1.3, strict CSP headers, and isolated virtual host configurations.',
    capabilities: [
      'Enforces Ed25519 SSH key-only authentication, UFW perimeter firewall rules, and zero open database ports.',
      'Serves 17 Nginx virtual hosts (/var/www/*) with immutable static asset caching, clean 301 edge redirects, and PHP 8.5-FPM worker pools.',
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
      'Normalizes audio streams via 2-pass FFmpeg EBU R128 (-14 LUFS) across CPU cores while keeping 24-bit WAV masters isolated in a private local vault.',
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
      'Runs production builds and validation suites across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, SolidJS, Lit 3, Fluent UI, IBM Carbon, and PHP 8.5 prior to Git push.',
      'Synchronizes public static media (/raggiesoft-assets) to DigitalOcean Spaces CDN (assets.raggiesoft.com) via rclone while excluding private local vaults.',
      'Prevents partial or out-of-order releases across interconnected Git repositories and broadcasts IndexNow pings.'
    ],
    profileSlug: 'jenna',
    profileUrl: '/build-team/jenna'
  },
  {
    codename: 'sarah-deploy.sh',
    scriptName: 'raggiesoft-deployment-tools/sarah-deploy.sh',
    roleTitle: 'Non-Root Cron Continuous Deployment & Showroom Minifier',
    stack: 'Bash • 5-Min Cron • Git SHA Verification • Non-Root rsync',
    summary:
      'Server-side continuous deployment script polling GitHub remotes on NYC1, verifying commit SHAs, promoting pre-built static bundles via atomic rsync, and minifying deployed web roots.',
    capabilities: [
      'Refuses root or sudo execution (EUID != 0 check) to prevent privilege-escalation risks and root-owned file lockouts under /var/www/.',
      'Compares local HEAD against remote origin/main SHA hashes so unchanged web roots incur zero disk churn.',
      'Minifies deployed /var/www/* files (gated by php -l and node --check) for fast delivery while GitHub repos keep 100% of teaching comments.'
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
 * Hero copy and 5-stage end-to-end release lifecycle displayed on `/build-team`.
 */
export const BUILD_TEAM_OVERVIEW = {
  title: 'CI/CD & Media Automation Suite',
  subtitle:
    'Modular PHP 8.5, Bash, FFmpeg, and Linux cron pipelines that build, validate, master, and deploy 17 decoupled web properties.',
  quote:
    'Deterministic pre-push build gates, vault-isolated media mastering, and non-root server deployments keep a multi-framework platform maintainable by one developer.',
  logoUrl: 'https://assets.raggiesoft.com/raggiesoft-corporate/images/logos/logo-michael.png',
  namingNoteTitle: 'Modular CLI Architecture & Script Naming Convention',
  namingNoteLead:
    'Single-responsibility tools in /raggiesoft-deployment-tools/ with clear stage boundaries.',
  namingNoteBody:
    'Across RaggieSoft’s repositories, internal CLI scripts and infrastructure components carry short names borrowed from the creative catalog (brooke.sh, paige.php, harper.sh, jenna-sync.sh, sarah-deploy.sh, amanda/elara.php, and NYC1 host). Each module owns exactly one deterministic stage of workstation setup, content compilation, media mastering, S3 CDN synchronization, or non-root Linux deployment.',
  pipelineStages: [
    {
      step: '01 • Workstation Bootstrap',
      command: './brooke.sh && ./backup.sh --sync',
      outcome: 'Provisions CLI toolchains across macOS, Windows 11 Pro, and Linux and mirrors workspaces to external/cloud storage.'
    },
    {
      step: '02 • Content & Media Compilation',
      command: 'php paige.php && ./harper.sh',
      outcome: 'Compiles Markdown chapters into JSON route manifests/EPUBs and normalizes multi-format audio with verified WebVTT captions.'
    },
    {
      step: '03 • Polyglot Pre-Push Gate & CDN Sync',
      command: './jenna-sync.sh --push -m "Release"',
      outcome: 'Builds Angular 19, SvelteKit, Astro, Nuxt, Next.js, SolidJS, Lit 3, Fluent & Carbon bundles, runs SEO checks, pushes Git, and syncs S3 CDN.'
    },
    {
      step: '04 • Non-Root Server Promotion',
      command: 'cron (5m) -> ./sarah-deploy.sh',
      outcome: 'Verifies remote GitHub commit SHAs as a non-root user on NYC1, promotes bundles into /var/www/*, and minifies production files.'
    },
    {
      step: '05 • Hardened Edge & Gateway Serving',
      command: 'NYC1 Nginx -> amanda/elara.php',
      outcome: 'Serves all 17 Nginx virtual hosts behind Cloudflare TLS 1.3, CSP headers, and isolated PHP 8.5 front-controller routing.'
    }
  ]
} as const;

/**
 * Full technical specification records for all 7 automation & server modules (`/build-team/:slug`).
 */
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
      'OS-agnostic workstation provisioning and workspace synchronization scripts supporting macOS, Windows 11 Pro (.NET 10 / VS 2026), and Linux.',
    ogTitle: 'Workstation & Bootstrap Tooling | Michael P. Ragsdale',
    ogDescription:
      'Cross-platform developer workstation provisioning and backup tooling (brooke.sh, backup.sh) across macOS, Windows 11, and Linux environments.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Artifacts', value: 'brooke.sh • backup.sh • init-windows.ps1' },
      { label: 'Supported OS', value: 'macOS • Windows 11 Pro • Ubuntu/Kubuntu Linux' },
      { label: 'Sync Backends', value: 'POSIX rsync + rclone Fallback', isBadge: true },
      { label: 'Execution Mode', value: 'Idempotent Non-Interactive CLI', isBadge: true }
    ],
    technicalHeading: 'Cross-Platform Provisioning & Workspace Portability',
    technicalIntro:
      'Because RaggieSoft includes web applications alongside native Windows (.NET 10 WinForms/WPF, C++20, MSIcode) and Apple (SwiftUI) desktop projects, local workstation scripts keep CLI dependencies and repositories aligned across operating systems:',
    technicalCapabilities: [
      {
        title: 'Automated Toolchain Provisioning (brooke.sh)',
        detail:
          'Detects macOS (Homebrew), Linux (APT), or Windows (Winget / Git Bash) and installs required build tools (git, php, node, python3, jq, ffmpeg, pandoc, rsync, rclone, 7zip, gh, doctl, ripgrep).'
      },
      {
        title: 'Differential Workspace Backup (backup.sh)',
        detail:
          'Mirrors active repositories (including msicode-dfm-ai-skill, desktop-apps, and raggiesoft-servers) to external 4TB SSD/HDD storage and cloud backups while excluding transient build caches (node_modules/, .venv/, bin/, obj/, dist/).'
      },
      {
        title: 'Fresh Windows 11 Pro Bootstrap (init-windows.ps1)',
        detail:
          'Bootstraps Git, PowerShell 7, and developer directory layouts on clean Windows 11 Pro installations prior to running Visual Studio 2026, Inno Setup, and InstallAware miabuild.exe.'
      }
    ],
    cliSnippet: {
      comment: '# Provision CLI Dependencies & Run Differential Workspace Sync',
      commands: ['./brooke.sh', './backup.sh --sync']
    },
    operationsHeading: 'Operational Design & Maintainability',
    operationsLead: 'Eliminating "works on my machine" configuration drift across desktop and web builds.',
    operationsParagraphs: [
      'Switching between macOS for SwiftUI and web builds, Windows 11 Pro for .NET 10 WinForms/WPF and Windows Installer builds, and Ubuntu Linux for production parity requires consistent versions of PHP, Node.js, Python, FFmpeg, and Pandoc.',
      'By codifying workstation setup and workspace backups in plain Bash and PowerShell scripts with explicit exclusion lists, a fresh machine or VM can be hydrated and ready to build all repositories in minutes.'
    ],
    terminalBlock: {
      headerTitle: '~/Developer/brooke.sh & backup.sh',
      statusBadge: 'WORKSTATION READY',
      promptUser: 'michael@macbook-pro:~/Developer$',
      command: './backup.sh --sync',
      outputLines: [
        '[brooke] Verified git, php 8.5, node 26, python3, ffmpeg, pandoc, rclone, 7zz.',
        '[backup] External volume 4TBSSD detected. Running differential rsync (excluding node_modules, .venv)...',
        '[backup] Synced raggiesoft-servers, raggiesoft-deployment-tools, desktop-apps, and msicode-dfm-ai-skill.',
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
          'Scans book/era/chapter/part Markdown hierarchies, parses YAML metadata, validates Story Crossroads branching DAGs, and emits toc.json, catalog.json, and route manifests consumed by books.raggiesoft.com and native BookReader apps.'
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
    name: 'NYC1 Production Linux Host',
    shortLabel: 'NYC1 Host (Ubuntu/Nginx)',
    icon: '🖥️',
    roleTitle: 'Hardened Ubuntu Linux, Nginx & PHP 8.5-FPM Production Host',
    systemArtifact: 'DigitalOcean NYC1 VPS (142.93.244.239)',
    stackBadge: 'Ubuntu Linux • Nginx • PHP 8.5-FPM • UFW / TLS 1.3',
    quote: 'Consolidating static and SSR virtual hosts onto a hardened, database-free Linux VPS keeps cloud costs low and security tight.',
    cardSummary:
      'Production Ubuntu Linux server in DigitalOcean NYC1 hosting all 17 Nginx virtual hosts, PHP 8.5-FPM worker pools, TLS origin certificates, and UFW perimeter rules.',
    ogTitle: 'NYC1 Linux & Nginx Production Host | CI/CD Suite',
    ogDescription:
      'Hardened Ubuntu Linux VPS on DigitalOcean NYC1 serving 17 Nginx virtual hosts, PHP 8.5-FPM worker pools, TLS 1.3 origin certs, and CSP headers.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Region & IPv4', value: 'DigitalOcean NYC1 (142.93.244.239)' },
      { label: 'Web Stack', value: 'Nginx Reverse Proxy / Static + PHP 8.5-FPM' },
      { label: 'Perimeter Security', value: 'UFW + Ed25519 SSH + Cloudflare TLS 1.3', isBadge: true },
      { label: 'Database Ports', value: '0 Open SQL Ports (Zero-Database)', isBadge: true }
    ],
    technicalHeading: 'Multi-Tenant Nginx Virtual Hosting & Edge Hardening',
    technicalIntro:
      'Rather than paying per-seat SaaS hosting fees for 17 separate domains and subdomains, all web properties run on a single hardened Ubuntu VPS paired with Cloudflare CDN and DigitalOcean Spaces:',
    technicalCapabilities: [
      {
        title: 'SSH, VPC & Firewall Hardening',
        detail:
          'Restricts administrative access to key-only Ed25519 SSH behind UFW firewall rules in an isolated NYC1 VPC, with TLS 1.2/1.3 origin certificates terminating behind Cloudflare.'
      },
      {
        title: 'Version-Controlled Nginx Configurations',
        detail:
          'Maintains per-domain virtual host configs in nginx-config/*.conf with explicit XML sitemap MIME headers, immutable cache headers, security headers (CSP, HSTS, X-Content-Type-Options), genuine =404 fallbacks, and 301 vanity-domain redirects.'
      },
      {
        title: 'Low-Overhead Resource Profile',
        detail:
          'Because fourteen properties compile to static HTML/JS/CSS and three run lightweight PHP 8.5-FPM without MySQL/PostgreSQL, CPU and memory utilization remain minimal under load.'
      }
    ],
    cliSnippet: {
      comment: '# Inspect Nginx Virtual Host Syntax & Service Health on NYC1',
      commands: ['ssh michael@142.93.244.239', 'sudo nginx -t && systemctl status nginx php8.5-fpm']
    },
    operationsHeading: 'Security Posture & Infrastructure Economics',
    operationsLead: 'Eliminating SQL injection vectors and database maintenance overhead by design.',
    operationsParagraphs: [
      'For content-heavy portals, documentation hubs, and streaming catalogs where data changes only at publish time, running a live relational database introduces unnecessary patching, backup complexity, and credential exposure.',
      'Serving pre-built static bundles and read-only JSON manifests from Nginx while offloading large audio/image binaries to S3-compatible object storage delivers fast global response times on predictable infrastructure.'
    ],
    terminalBlock: {
      headerTitle: 'michael@raggiesoft-nebulae (NYC1)',
      statusBadge: 'ONLINE • 17 VHOSTS ACTIVE',
      promptUser: 'michael@nyc1:~$',
      command: 'systemctl status nginx php8.5-fpm --no-pager',
      outputLines: [
        '● nginx.service - High performance web server and reverse proxy',
        '   Active: active (running) — serving 17 RaggieSoft virtual hosts (/var/www/*)',
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
      'Central release orchestrator that compiles all static and SSR web properties, verifies SEO/metadata invariants, commits across interconnected Git repositories, and syncs public assets to DigitalOcean Spaces.',
    ogTitle: 'jenna-sync.sh — Multi-Repo & CDN Release | CI/CD Suite',
    ogDescription:
      'Single-command release orchestrator running polyglot build gates across Angular, SvelteKit, Astro, Nuxt, and Next.js before syncing S3 CDN assets.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: 'raggiesoft-deployment-tools/jenna-sync.sh' },
      { label: 'Managed Scope', value: 'All Web, Tooling & Open-Source Git Repos + S3' },
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
          'Invokes paige.php for narrative routes, then executes production builds and validation scripts across Angular 19, SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, SolidJS, Preact, Mithril, Eleventy + Lit 3, Fluent UI, IBM Carbon, Web Awesome, and Bootstrap SSG.'
      },
      {
        title: 'Atomic Multi-Repository Git Workflow',
        detail:
          'Stages, commits, and pushes changes across web roots, nginx-config, narratives, deployment-tools, desktop-apps, and msicode-dfm-ai-skill only after every build and SEO assertion exits 0.'
      },
      {
        title: 'Differential S3 CDN Sync (rclone) & IndexNow Broadcast',
        detail:
          'Syncs /raggiesoft-assets to DigitalOcean Spaces (assets.raggiesoft.com), triggers immediate sarah-deploy.sh wakeup on NYC1, and submits updated canonical URLs via IndexNow.'
      }
    ],
    cliSnippet: {
      comment: '# Run Full Polyglot Build Verification, Git Release & S3 CDN Sync',
      commands: ['./raggiesoft-deployment-tools/jenna-sync.sh --push -m "Deploy portfolio and resume updates"']
    },
    operationsHeading: 'Preventing Partial Releases Across Micro-Properties',
    operationsLead: 'Coordinating shared assets, sitemaps, and frontend bundles in a single deterministic workflow.',
    operationsParagraphs: [
      'Operating 17 distinct web properties gives each domain the right tool for its job, but manual per-repo deployments would quickly cause version drift or missing CDN assets.',
      'Centralizing pre-push checks in jenna-sync.sh guarantees that TypeScript compiler errors, broken OpenGraph tags, or invalid sitemaps halt the release locally before any commit reaches GitHub or the production server.'
    ],
    terminalBlock: {
      headerTitle: './jenna-sync.sh --push -m "Release update"',
      statusBadge: 'ALL GATES PASSED',
      promptUser: 'michael@dev:~/Developer$',
      command: './raggiesoft-deployment-tools/jenna-sync.sh --push -m "Release update"',
      outputLines: [
        '[jenna] Step 1: paige.php route & search compilation -> PASS',
        '[jenna] Step 2: Angular 19 (43 routes), SvelteKit 2, Astro 6, Nuxt 4, Next.js 16, Carbon/Fluent SSG -> PASS',
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
    roleTitle: 'Non-Root Cron Continuous Deployment & Showroom Minifier',
    systemArtifact: 'raggiesoft-deployment-tools/sarah-deploy.sh',
    stackBadge: 'Bash • 5-Min Cron • Git SHA Diffing • Non-Root rsync',
    quote: 'Least-privilege, pull-based server deployments eliminate inbound CI/CD webhook attack surfaces and root permission hazards.',
    cardSummary:
      'Server-side continuous deployment script running on NYC1, comparing GitHub commit SHAs, promoting static bundles via non-root atomic rsync, and minifying deployed showrooms.',
    ogTitle: 'sarah-deploy.sh — Non-Root Cron Deployer | CI/CD Suite',
    ogDescription:
      'Autonomous non-root Linux deployment daemon verifying GitHub commit SHAs on a 5-minute cron schedule and promoting static bundles via atomic rsync.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Script Path', value: '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh' },
      { label: 'Schedule', value: '5-Minute Linux Cron Poll + SSH Wakeup' },
      { label: 'Privilege Model', value: 'Strict Non-Root Execution (EUID != 0)', isBadge: true },
      { label: 'Production Optimization', value: 'Syntax-Gated Showroom Minifier', isBadge: true }
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
        title: 'Atomic Bundle Promotion & Syntax-Gated Minification',
        detail:
          'Syncs compiled output directories into /var/www/* via rsync --delete, strips read-along teaching comments from deployed copies (validated by php -l and node --check), and enforces 755/644 permissions.'
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
    operationsLead: 'Keeping production SSH keys off external CI providers while maintaining instant release velocity.',
    operationsParagraphs: [
      'Traditional push-based deployments require granting external CI/CD runners inbound SSH access to the production server. A pull-based daemon reverses that trust boundary: the server initiates outbound read-only Git fetches to GitHub over HTTPS/SSH.',
      'Splitting GitHub readability (100% commented source files) from production minification (/var/www/* stripped at deploy time) gives hiring teams deeply documented codebases without adding a single extra byte to live visitors.'
    ],
    terminalBlock: {
      headerTitle: '/var/log/sarah-deploy.log (NYC1 Cron)',
      statusBadge: 'EUID != 0 VERIFIED',
      promptUser: 'michael@nyc1:~$',
      command: '/home/michael/raggiesoft-deployment-tools/sarah-deploy.sh',
      outputLines: [
        '[18:45:01] [sarah] Non-root check passed (uid=1000). Polling origin/main across 17 web roots...',
        '[18:45:03] [sarah] New commit detected on michaelpragsdale.com (dist/raggiesoft-portfolio/browser).',
        '[18:45:04] [sarah] Atomic rsync -> /var/www/michaelpragsdale.com/ complete (43 routes).',
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
    systemArtifact: 'raggiesoft-servers/raggiesoft.com/www/amanda/elara.php',
    stackBadge: 'PHP 8.5 MVC • Protected Document Root • JSON Routing',
    quote: 'Isolating templates outside the public web root and routing through a single front controller hardens PHP SSR applications by construction.',
    cardSummary:
      'Stardust Engine CMS gateway pattern that restricts Nginx’s public document root to /amanda and funnels all dynamic route resolution through elara.php.',
    ogTitle: 'amanda/elara.php — Front-Controller Router | CI/CD',
    ogDescription:
      'Two-tier Stardust Engine CMS gateway isolating the static web root directory (/amanda) and routing requests through a single PHP 8.5 front controller.',
    ogImageUrl: DEFAULT_OG_IMG,
    vitalStats: [
      { label: 'Public Web Root', value: '/var/www/raggiesoft.com/amanda' },
      { label: 'Front Controller', value: 'elara.php (PHP 8.5 Strict Types)' },
      { label: 'Template Exposure', value: '0 Direct-Accessible Include Files', isBadge: true },
      { label: 'Scanner Mitigation', value: 'Immediate 404 on /index.php Probes', isBadge: true }
    ],
    technicalHeading: 'Directory Isolation & Deterministic Route Resolution',
    technicalIntro:
      'Adopted from our open-source Stardust Engine CMS (stardust-engine-cms), the two-part gateway eliminates common PHP include-file exposure vulnerabilities:',
    technicalCapabilities: [
      {
        title: 'Above-Root Template & Config Isolation',
        detail:
          'Places /includes, /pages, /classes, and JSON route manifests outside Nginx’s public /amanda directory so even a misconfigured rule can never serve raw source files.'
      },
      {
        title: 'Non-Default Front-Controller Naming',
        detail:
          'Configures Nginx try_files $uri /elara.php?$query_string while leaving /index.php absent—dropping automated botnet probes targeting default PHP entrypoints cleanly at the edge.'
      },
      {
        title: 'Pre-Render Header & HTTP Status Discipline',
        detail:
          'Resolves route metadata, canonical URLs, CSP headers, and genuine 200 / 301 / 404 HTTP status codes in PHP 8.5 before streaming the shared layout.'
      }
    ],
    cliSnippet: {
      comment: '# Lint PHP 8.5 Front Controller & Verify Route Table Integrity',
      commands: [
        'php -l raggiesoft-servers/raggiesoft.com/www/amanda/elara.php',
        'php -l raggiesoft-servers/stardust-engine-cms/router.php'
      ]
    },
    operationsHeading: 'Defense-in-Depth for Lightweight SSR Apps',
    operationsLead: 'Combining static-site speed with server-rendered flexibility where needed.',
    operationsParagraphs: [
      'While static site generation powers fourteen properties in the network, server-side PHP 8.5 shines on raggiesoft.com and books.raggiesoft.com where dynamic HTTP headers, 2,650+ chapter routes, and SPA partial fetches work hand in hand.',
      'Keeping the front controller under 400 lines of dependency-free PHP 8.5 ensures zero Composer supply-chain churn and sub-millisecond route dispatch.'
    ],
    terminalBlock: {
      headerTitle: 'Stardust Engine CMS Front-Controller Audit',
      statusBadge: 'SYNTAX & ROUTES OK',
      promptUser: 'michael@dev:~/Developer$',
      command: 'php -l raggiesoft-servers/raggiesoft.com/www/amanda/elara.php',
      outputLines: [
        'No syntax errors detected in raggiesoft-servers/raggiesoft.com/www/amanda/elara.php',
        '[router] Public root isolated to /amanda; /includes and /pages outside web root.',
        '[router] Verified JSON route manifest inheritance and 301/404 status dispatch.'
      ]
    }
  }
] as const;
