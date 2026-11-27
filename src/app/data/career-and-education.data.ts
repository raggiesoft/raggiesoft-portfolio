/**
 * =============================================================================
 * File: src/app/data/career-and-education.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & Career Data Guide):
 *
 * 1. What is this file, and what views does it power?
 *    `career-and-education.data.ts` holds Michael P. Ragsdale's executive
 *    identity, Role-Lens filter definitions, section landing headers, four
 *    chronological employment entries (`EXPERIENCE_TIMELINE`), and three
 *    academic credentials (`EDUCATION_CREDENTIALS`).
 *
 *    This single module feeds:
 *      - **Home Dossier (`/`)**: Hero overview, logistics `<dl>`, experience
 *        timeline, and education cards.
 *      - **Section Landing Pages (`/web-apps`, `/case-studies`, `/experience`,
 *        `/education`)**: Dedicated section headers, quotes, and OpenGraph tags.
 *      - **Individual Deep-Dive Pages (`/experience/:slug` & `/education/:slug`)**:
 *        Expanded deliverables, workplace context, HR verification notes, and
 *        direct links to live portfolio systems!
 * =============================================================================
 */

import type {
  EducationEntry,
  ExperienceEntry,
  HiringParameter,
  RoleLensOption,
  SectionLandingMeta
} from './portfolio.types.ts';

/**
 * Canonical identity, summary, and verified recruiter contact channels.
 */
export const EXECUTIVE_PROFILE = {
  fullName: 'Michael P. Ragsdale',
  headline: 'Full-Stack Web Developer & Web Accessibility Engineer',
  location: 'Norfolk / Virginia Beach, VA (Hampton Roads)',
  statusBadge: 'Available for W-2 Full-Stack Web, Software & Web Accessibility Roles',
  executiveSummary:
    'Full-Stack Web Developer and Web Accessibility Engineer combining source-level PLE and Canvas LMS web accessibility engineering at Old Dominion University, public-facing municipal operations with the City of Virginia Beach, and continuous hands-on software development. Author and maintainer of the open-source Stardust Engine CMS and RaggieSoft Studio developer suite—spanning Accessibility Studio (.NET + Monaco/SARIF), Installer Studio (C++20 MSI + VPAT 2.5 report generation), Help Studio (C++20 .CHM/.HLP + F1 IPC), and RaggieScript v1.0—alongside 19 decoupled zero-database web applications and companion C#/.NET and SwiftUI client apps.',
  valueProposition:
    'I focus on three practical engineering standards across every project: code-level WCAG 2.1/2.2 AA and Section 508 web accessibility in semantic HTML5 and WAI-ARIA, fast static-first performance, and clear, well-documented code that teams can maintain.',
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
    githubUrl: 'https://github.com/raggiesoft',
    linkedinUrl: 'https://www.linkedin.com/in/michael-ragsdale-raggiesoft/'
  }
} as const;

/**
 * Section Landing Page headers and OpenGraph metadata (`<= 60` char `ogTitle`,
 * `<= 155` char `ogDescription`) for `/web-apps`, `/case-studies`, `/experience`,
 * and `/education`. (`/build-team` uses `BUILD_TEAM_OVERVIEW` in `build-team.data.ts`.)
 */
export const SECTION_LANDINGS: Readonly<Record<'webApps' | 'caseStudies' | 'experience' | 'education', SectionLandingMeta>> = {
  webApps: {
    routePath: 'web-apps',
    eyebrow: '19 Live Production Applications • Polyglot Web & Web Components • Zero SQL Databases',
    title: 'Live Web Application Ecosystem',
    subtitle:
      'Explore all 19 decoupled production web applications—spanning Angular 19, PHP 8.5 MVC, React 19 / Next.js 16, Svelte 5, Astro 6, Nuxt 4, Alpine.js 3, SolidJS, Preact, Mithril, Lit 3, Fluent UI, IBM Carbon, and Web Awesome.',
    quote:
      'Every property uses a purposeful stack tailored to its domain while sharing strict code-level WCAG 2.1/2.2 AA and Section 508 web accessibility.',
    ogTitle: '19 Live Web Applications | Michael P. Ragsdale',
    ogDescription:
      'Explore 19 zero-database production web apps built in Angular 19, PHP 8.5, React 19, Svelte 5, Astro, Nuxt, Alpine.js, SolidJS, Lit 3, and IBM Carbon.'
  },
  caseStudies: {
    routePath: 'case-studies',
    eyebrow: '6 Applied Engineering, Accessibility, Desktop & Compiler Deep Dives',
    title: 'Engineering & Web Accessibility Case Studies',
    subtitle:
      'Problem-to-solution architectural breakdowns across municipal ActiveNet data workflows, ODU Online PLE & Canvas LMS accessibility, .NET 10 / SwiftUI apps, accessible HTML5 Canvas, CI/CD, and native Win32 C++20 MSI compiler tooling.',
    quote:
      'Real engineering lives in the constraints: legacy LMS markup, zero-port desktop IPC, 60fps screen-reader parity, and zero-dependency OS installer APIs.',
    ogTitle: 'Engineering & Accessibility Case Studies | M. Ragsdale',
    ogDescription:
      'Six production case studies covering ODU Section 508 web engineering, ActiveNet data workflows, .NET 10 & SwiftUI apps, Canvas ARIA, and C++20 MSI.'
  },
  experience: {
    routePath: 'experience',
    eyebrow: 'Chronological Career Timeline & Transparent HR Classifications',
    title: 'Professional Experience',
    subtitle:
      'Work history across municipal public service with the City of Virginia Beach, public higher-education web accessibility at Old Dominion University, commercial mobile engineering, and independent open-source software.',
    quote:
      'Each entry pairs functional engineering scope with official HR classifications for straightforward municipal, state, university, and enterprise verification.',
    ogTitle: 'Professional Experience | Michael P. Ragsdale',
    ogDescription:
      'Chronological work history across Old Dominion University (ODU Online), City of Virginia Beach, Dominion Enterprises, and RaggieSoft Media.'
  },
  education: {
    routePath: 'education',
    eyebrow: 'Higher Education, Technical Credentials & Public-Sector Eligibility',
    title: 'Education & Credentials',
    subtitle:
      'Academic coursework and credentials across Tidewater Community College (A.S. in IT — Software Engineering & Web Dev), Old Dominion University, and Wilson Workforce and Rehabilitation Center.',
    quote:
      'Combining formal software engineering, Linux, and information-systems coursework with Commonwealth of Virginia AHP eligibility and continuous production shipping.',
    ogTitle: 'Education & Credentials | Michael P. Ragsdale',
    ogDescription:
      'Academic credentials and eligibility for Michael P. Ragsdale: Tidewater Community College (A.S. IT), Old Dominion University, WWRC, and Virginia AHP.'
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
      'Showing all 19 live production web applications, 6 engineering & accessibility case studies, and full work history.'
  },
  {
    id: 'architecture',
    label: 'Full-Stack & Native Apps',
    shortDescription:
      'Focused on multi-framework web apps (TypeScript, Angular 19, PHP 8.5 MVC, React 19 / Next.js 16, Svelte 5, Astro 6, Nuxt 4, Alpine.js 3, SolidJS, Preact, Mithril, Lit 3, Fluent UI, IBM Carbon), C#/.NET WinForms/WPF, Win32 C++20 & SwiftUI software, and RaggieScript v1.0 LSP/VM tooling.'
  },
  {
    id: 'accessibility',
    label: 'WCAG & Section 508 Web',
    shortDescription:
      'Focused on code-level WCAG 2.1/2.2 AA & Revised Section 508 web compliance, semantic HTML5 (<th scope>, landmarks), WAI-ARIA, keyboard focus management, JAWS/NVDA/VoiceOver testing, and Accessible HTML Canvas Interfaces.'
  },
  {
    id: 'data-etl',
    label: 'Data & Information Workflows',
    shortDescription:
      'Focused on ActiveNet operational data processing, structured staff reference formatting, REST/JSON & Markdown static APIs, and full-text search indexing.'
  },
  {
    id: 'devops',
    label: 'Linux, Cloud & CI/CD Tooling',
    shortDescription:
      'Focused on Ubuntu/Nginx server administration, Cloudflare DNS/SSL routing, DigitalOcean Spaces S3 CDN sync, Windows MSI/Authenticode packaging, FFmpeg pipelines, and non-root deployments.'
  }
] as const;

/**
 * Practical Hiring & Role Alignment summary for recruiters and HR teams.
 */
export const HIRING_PARAMETERS: readonly HiringParameter[] = [
  {
    label: 'Target Roles',
    value: 'Full-Stack Web Developer • Web Accessibility Engineer • Front-End / Software Developer',
    detail:
      'Bringing higher-education PLE & Canvas LMS web accessibility engineering, municipal customer-facing operations, and full-stack web & desktop development.'
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
    label: 'Web Accessibility Stack',
    value: 'Code-Level WCAG 2.1/2.2 AA & Section 508 Web • Semantic HTML5, ARIA, Deque axe, JAWS, NVDA & VoiceOver',
    detail:
      'Strictly source-code and UI architecture: semantic HTML5 (<th scope>, <fieldset>/<legend>), WAI-ARIA live regions, JS focus management, BCP 47 lang markup, synced WebVTT (.vtt), and manual screen-reader testing.'
  },
  {
    label: 'Live Work Samples',
    value: '19 Production Web Apps, RaggieSoft Studio (C#/.NET & C++20), SwiftUI, and GitHub',
    detail:
      'Happy to walk through live production codebases, accessibility audits, and standard technical interviews with your engineering team.'
  }
] as const;

/**
 * Chronological Professional Experience (4 Roles matching `mragsdale-resume.pdf`).
 */
export const EXPERIENCE_TIMELINE: readonly ExperienceEntry[] = [
  {
    slug: 'raggiesoft-media',
    shortName: 'RaggieSoft Media',
    functionalTitle: 'Independent Full-Stack Web Developer & Open-Source Maintainer',
    hrClassification: 'Independent Software & Digital Publishing (raggiesoft.com • raggiesoftstudio.com • raggiesoft.dev — Est. Jul 2008)',
    organization: 'RaggieSoft Media',
    location: 'Norfolk, VA',
    timeframe: '2008 – Present',
    lenses: ['architecture', 'accessibility', 'devops', 'data-etl'],
    summary:
      'Design, build, and maintain an independent software development and digital publishing ecosystem spanning open-source PHP/JS web frameworks, 19 decoupled production web applications, RaggieSoft Studio developer/accessibility IDEs and Win32 C++20 compilers, cross-platform C#/.NET & SwiftUI client apps, and Linux cloud infrastructure.',
    achievements: [
      'Built and open-sourced Stardust Engine CMS (MIT License, PHP 8.5 MVC + JSON routing) alongside 19 decoupled production web applications in Angular 19, SvelteKit 2 + Svelte 5, React 19 + Next.js 16, Astro 6, Nuxt 4, Alpine.js 3, SolidJS, Preact 10, Mithril.js, Lit 3, Fluent UI, IBM Carbon, Bootstrap 5.3.8, and Web Awesome.',
      'Authored RaggieSoft Studio (raggiesoftstudio.com, MIT License) across Windows 11 x64 & ARM64: Accessibility Studio (C# / .NET WinForms + Monaco WebView2 Guided Fix diff IDE & headless OASIS SARIF 2.1.0 CI scanner), Installer Studio (zero-dependency Win32 C++20 IDE, MSI Prism 64-bit SQL editor, and .msi/.msm/.mst/.msp compiler with Dark Mode Mica UI & HTML5 VPAT 2.5 report generation), Help Studio (C++20 .CHM/.HLP decompilers, HTML5 sanitizer & Named-Pipe F1 viewer), and RaggieScript v1.0 (gradually typed bytecode VM, JSON-RPC 2.0 LSP, .NET SDK & ES2022 transpiler).',
      'Engineered offline-capable companion apps in C# / .NET WPF (Named Pipes IPC, UIAutomation) and multiplatform SwiftUI (VoiceOver), and automated multi-repo build verification, FFmpeg audio normalization, WebVTT caption checks, S3 CDN sync, and non-root Ubuntu/Nginx deployments.'
    ],
    technologies: ['TypeScript', 'PHP 8.5', 'CSS (Container Queries, Subgrid)', 'Angular 19', 'React 19 / Next.js', 'Svelte 5 / Alpine.js', 'REST/JSON APIs', 'C# / .NET (10/11, WinForms & WPF)', 'Win32 C++20 / SwiftUI', 'RaggieSoft Studio (MSI, VPAT 2.5, SARIF, LSP)', 'Linux / Nginx', 'WCAG / Section 508 Web'],
    ogTitle: 'RaggieSoft Media — Full-Stack & Open-Source Role',
    ogDescription:
      'Independent Full-Stack Web Developer & Open-Source Maintainer (2008–Present): 19 live web apps, RaggieSoft Studio, Stardust CMS, .NET, C++20 & SwiftUI.',
    vitalStats: [
      { label: 'Organization', value: 'RaggieSoft Media (Unincorporated Imprint)' },
      { label: 'Tenure', value: 'July 2008 – Present (Norfolk, VA)' },
      { label: 'Production Footprint', value: '19 Web Apps + RaggieSoft Studio Suite', isBadge: true },
      { label: 'Open-Source Licensing', value: 'MIT (Software) • Azure Authenticode Signed', isBadge: true }
    ],
    deepDiveDeliverables: [
      {
        title: 'Polyglot Full-Stack Web & Open-Source CMS Architecture',
        detail:
          'Authored Stardust Engine CMS in strict PHP 8.5 OOP/MVC and built 19 production web applications demonstrating idiomatic fluency across Angular 19 Zoneless Signals, React 19 / Next.js 16, Svelte 5 Runes, Astro 6, Nuxt 4, Alpine.js 3, SolidJS, Preact, Mithril, Eleventy + Lit 3, Fluent UI, IBM Carbon, and Web Awesome.'
      },
      {
        title: 'Code-Level WCAG 2.1/2.2 AA & Section 508 Web Engineering',
        detail:
          'Engineered dual-layer HTML5 <canvas> ARIA synchronization (lore.raggiesoft.com), automated BCP 47 multilingual lang parsing (books.raggiesoft.com), Hold-Spacebar WebVTT caption tooling (music.raggiesoft.com), and RaggieSoft Accessibility Studio (.NET WinForms + Monaco Guided Fix IDE & SARIF 2.1.0 CLI at raggiesoftstudio.com/accessibility-studio).'
      },
      {
        title: 'RaggieSoft Studio (raggiesoftstudio.com) & Cross-Platform Client Suites',
        detail:
          'Built Installer Studio (Win32 C++20 MSI/MSM/MST/MSP compiler, 12-view IDE, MSI Prism 64-bit SQL editor, LZMS self-extractor & VPAT 2.5 emitter), Help Studio (C++20 .CHM/.HLP decompilers & Named-Pipe F1 viewer), RaggieScript v1.0 (RSWBC2 bytecode VM, JSON-RPC 2.0 LSP, .NET SDK & ES2022 transpiler), and companion .NET WPF + SwiftUI apps.'
      },
      {
        title: 'Hardened Linux Hosting & Deterministic CI/CD Automation',
        detail:
          'Administer Ubuntu Linux, 19 Nginx virtual hosts, PHP 8.5-FPM, Cloudflare TLS 1.3, DigitalOcean Spaces S3 CDN, and modular Bash/PHP release scripts (jenna-sync.sh, sarah-deploy.sh, paige.php, harper.sh) with 100% read-along code comments.'
      }
    ],
    environmentAndPractices: [
      'Every repository is maintained with production discipline: automated pre-push build and SEO assertions, genuine HTTP 404 guards, zero SQL database attack surface on static/catalog properties, and top-to-bottom inline documentation so unfamiliar engineers can read any file cold.',
      'All public software tools—including Stardust Engine CMS, RaggieSoft Accessibility Studio, RaggieSoft Installer Studio, Help Studio, RaggieScript, and StoreTrainer—are published under the MIT License on GitHub (@raggiesoft) and indexed at raggiesoft.dev.'
    ],
    relatedLinks: [
      { label: 'Visit RaggieSoft Studio (raggiesoftstudio.com)', url: 'https://raggiesoftstudio.com' },
      { label: 'Visit Developer Hub (raggiesoft.dev)', url: 'https://raggiesoft.dev' },
      { label: 'Browse All 19 Web Apps (/web-apps)', url: '/web-apps' },
      { label: 'Inspect RaggieSoft Studio Case Study (/case-studies/raggiesoft-installer-studio)', url: '/case-studies/raggiesoft-installer-studio' }
    ]
  },
  {
    slug: 'city-of-virginia-beach',
    shortName: 'City of VA Beach',
    functionalTitle: 'Clerk-Cashier (Concurrent with Software Engineering & IT Studies)',
    hrClassification: 'City of Virginia Beach Parks & Recreation (Municipal Role Concurrent with A.S. in IT at TCC)',
    organization: 'City of Virginia Beach — Parks & Recreation',
    location: 'Virginia Beach, VA',
    timeframe: 'May 2023 – Present',
    lenses: ['data-etl'],
    summary:
      'Manage daily municipal facility operations while applying software-engineering and data-structuring habits to streamline internal scheduling references and workstation workflows.',
    achievements: [
      'Extract facility scheduling datasets from ActiveNet, normalize complex multi-room reservation records, and structure them into standardized, at-a-glance weekend operational reference guides.',
      'Act as an on-site technical resource for staff navigating ActiveNet software workflows and municipal workstation tools, resolving recurring usability bottlenecks and streamlining operational procedures.',
      'Manage daily member access verification, account reconciliation, and point-of-sale transactions in a high-volume public recreation facility.'
    ],
    technologies: ['ActiveNet', 'Operational Data Transformation', 'Structured Information Architecture', 'Systems Troubleshooting', 'Municipal Operations'],
    ogTitle: 'City of Virginia Beach — Municipal Operations Role',
    ogDescription:
      'Municipal role with City of Virginia Beach Parks & Recreation (May 2023–Present): ActiveNet scheduling data normalization and workstation support.',
    vitalStats: [
      { label: 'Employer', value: 'City of Virginia Beach — Parks & Recreation' },
      { label: 'Official HR Title', value: 'Clerk-Cashier (May 2023 – Present)' },
      { label: 'Concurrent Study', value: 'A.S. in Information Technology (TCC)', isBadge: true },
      { label: 'Core Platform', value: 'ActiveNet Facility & Reservation System', isBadge: true }
    ],
    deepDiveDeliverables: [
      {
        title: 'ActiveNet Reservation Dataset Normalization',
        detail:
          'Extract multi-day reservation exports from ActiveNet and transform fragmented multi-screen booking details into clean, chronological weekend operational schedules.'
      },
      {
        title: 'High-Readability Staff Reference Design',
        detail:
          'Structure internal room-rental and event reference sheets with consistent tabular hierarchy so facility staff can verify setup windows and room assignments at a glance during peak weekend rushes.'
      },
      {
        title: 'On-Site Software & Workstation Troubleshooting',
        detail:
          'Help colleagues navigate ActiveNet edge cases, account reconciliation workflows, and workstation peripherals so public operations keep moving smoothly.'
      }
    ],
    environmentAndPractices: [
      'Demonstrates steady, dependable municipal public-service employment in Hampton Roads concurrently while completing an Associate of Science in Information Technology (Software Engineering & Web Development) at Tidewater Community College.',
      'The official municipal HR classification ("Clerk-Cashier") is listed verbatim alongside functional data/systems contributions so Commonwealth of Virginia, municipal, and enterprise background verifications match HR records 1:1.'
    ],
    relatedLinks: [
      { label: 'Inspect CASE-01: ActiveNet Data Transformation (/case-studies/activenet-municipal-etl)', url: '/case-studies/activenet-municipal-etl' },
      { label: 'Inspect TCC A.S. in IT Credential (/education/tidewater-community-college)', url: '/education/tidewater-community-college' }
    ]
  },
  {
    slug: 'old-dominion-university',
    shortName: 'ODU Online',
    functionalTitle: 'Computer Operations (Code-Level Web & LMS Accessibility)',
    hrClassification: 'Official University HR Classification: Computer Operations Tech',
    organization: 'Old Dominion University (ODU Online)',
    location: 'Norfolk, VA',
    timeframe: 'Nov 2019 – Jul 2022',
    lenses: ['accessibility', 'architecture', 'data-etl'],
    summary:
      'Supported ODU Online’s custom Personal Learning Environment (PLE) and transition to the Canvas LMS by auditing source HTML/CSS and authoring reusable WCAG 2.1 AA and Revised Section 508 web-compliant course templates.',
    achievements: [
      'Audited source HTML and CSS across ODU Online’s custom Personal Learning Environment (PLE) and Canvas LMS course modules during university-wide LMS migration, refactoring legacy visual-only markup into semantic HTML5 (scoped table headers, landmarks, explicit form labels).',
      'Conducted code-level WCAG 2.1 AA and Section 508 web reviews combining automated DOM scanners (Deque axe, WAVE) with manual keyboard focus testing and JAWS / NVDA / VoiceOver screen-reader verification.',
      'Engineered zero-dependency, WCAG 2.1 AA and Section 508 web-compliant HTML5 and CSS course module templates adopted by instructional designers and faculty across university distance-learning courses.',
      'Independently developed a self-initiated Windows desktop batch utility (C# / .NET 5 and VB.NET, packaged with Inno Setup) to queue course accessibility scans from CSV schedules with rate-limited throttling and export semantic HTML5 (<th scope="row">) status logs.'
    ],
    technologies: ['WCAG 2.1 AA', 'Section 508 Web', 'Semantic HTML5 & CSS', 'WAI-ARIA', 'Deque axe', 'JAWS / NVDA', 'Canvas LMS', 'C# / .NET 5'],
    ogTitle: 'Old Dominion University — Web & LMS Accessibility Role',
    ogDescription:
      'Code-level WCAG 2.1 AA and Section 508 web engineering at Old Dominion University (ODU Online, 2019–2022): PLE-to-Canvas HTML5/CSS and C# QA tools.',
    vitalStats: [
      { label: 'Employer', value: 'Old Dominion University (ODU Online / CLT)' },
      { label: 'Official HR Title', value: 'Computer Operations Tech (Nov 2019 – Jul 2022)' },
      { label: 'Accessibility Discipline', value: 'Source HTML5/CSS & Screen-Reader QA', isBadge: true },
      { label: 'LMS Platforms', value: 'Custom ODU PLE -> Canvas LMS Migration', isBadge: true }
    ],
    deepDiveDeliverables: [
      {
        title: 'Source-Level HTML5 & CSS Course Module Refactoring',
        detail:
          'Audited and repaired raw course HTML/CSS across hundreds of university distance-learning modules—converting visual-only table formatting (<td style="font-weight: bold;">) into semantic <th scope="col/row"> headers, landmarks, and accessible lists.'
      },
      {
        title: 'Reusable Accessible Canvas LMS HTML/CSS Templates',
        detail:
          'Designed zero-JS, Canvas-allowlist-safe HTML5 and CSS course templates giving instructional designers and faculty accessible layouts for syllabi, weekly schedules, and callout panels.'
      },
      {
        title: 'Combined Automated + Manual Assistive Technology Auditing',
        detail:
          'Paired Deque axe and WAVE browser inspections with manual keyboard-only Tab/Shift+Tab checks and live JAWS, NVDA, and VoiceOver testing.'
      },
      {
        title: 'Self-Initiated PLE QA Batch Scanner (VB.NET -> C# / .NET 5)',
        detail:
          'Independently built a Windows desktop utility packaged with Inno Setup to automate CSV-scheduled course QA checks after browser SSO login with rate-limited request throttling and accessible HTML5 report generation.'
      }
    ],
    environmentAndPractices: [
      'Collaborated closely with instructional designers, web developers, and distance-learning operations staff in Old Dominion University’s Center for Learning and Teaching during a multi-year LMS transition.',
      'Focused strictly on source-code HTML5, CSS, WAI-ARIA, and live screen-reader usability—establishing the engineering foundation later expanded into the open-source RaggieSoft Accessibility Studio (.NET 10 WinForms + Monaco IDE).'
    ],
    relatedLinks: [
      { label: 'Inspect CASE-02: ODU PLE & Canvas Migration (/case-studies/odu-section-508-gatekeeper)', url: '/case-studies/odu-section-508-gatekeeper' },
      { label: 'Visit RaggieSoft Accessibility Studio (raggiesoftstudio.com/accessibility-studio)', url: 'https://raggiesoftstudio.com/accessibility-studio' }
    ]
  },
  {
    slug: 'dominion-enterprises',
    shortName: 'Dominion Ent.',
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
    technologies: ['JavaScript', 'Mobile App Development', 'REST APIs', 'Agile Scrum'],
    ogTitle: 'Dominion Enterprises — Mobile Developer Intern Role',
    ogDescription:
      'Mobile Applications Developer Intern at Dominion Enterprises (Norfolk, VA): cross-platform iOS/Android JavaScript views, REST APIs, and Agile Scrum.',
    vitalStats: [
      { label: 'Employer', value: 'Dominion Enterprises (Norfolk, VA HQ)' },
      { label: 'Official HR Title', value: 'Developer Intern (Sep 2012 – Dec 2012)' },
      { label: 'Mobile Stack', value: 'JavaScript + Titanium SDK (iOS & Android)', isBadge: true },
      { label: 'Team Methodology', value: 'Agile Scrum + Version-Controlled Releases', isBadge: true }
    ],
    deepDiveDeliverables: [
      {
        title: 'Cross-Platform iOS & Android UI Views',
        detail:
          'Built and refined mobile search and detail views in JavaScript using Appcelerator Titanium SDK, mapping shared business logic to native iOS and Android UI primitives.'
      },
      {
        title: 'Commercial Listing REST/JSON API Integration',
        detail:
          'Bound asynchronous REST API responses to scrollable mobile list views with defensive error handling over variable cellular connections.'
      },
      {
        title: 'Cross-Device Debugging & Agile Sprint Delivery',
        detail:
          'Tested layout parity across multiple iOS and Android screen densities, participated in daily Agile Scrum standups, and shipped code through peer-reviewed version control.'
      }
    ],
    environmentAndPractices: [
      'Worked onsite with senior mobile and backend engineers at Dominion Enterprises’ downtown Norfolk headquarters, gaining early commercial experience in Agile Scrum ceremonies, ticket estimation, and API-driven client architecture.',
      'Sparked a lasting appreciation for shared-core cross-platform architecture that directly informs today’s parallel .NET 10 WPF and multiplatform SwiftUI client suites.'
    ],
    relatedLinks: [
      { label: 'Inspect CASE-03: Cross-Platform Native Suite (/case-studies/native-desktop-suite)', url: '/case-studies/native-desktop-suite' },
      { label: 'Return to Full Experience Timeline (/experience)', url: '/experience' }
    ]
  }
] as const;

/**
 * Academic Credentials & Continuing Education (3 Entries).
 */
export const EDUCATION_CREDENTIALS: readonly EducationEntry[] = [
  {
    slug: 'tidewater-community-college',
    shortName: 'TCC (A.S. in IT)',
    degree: 'Associate of Science (A.S.) in Information Technology (Focus: Software Engineering & Web Dev)',
    institution: 'Tidewater Community College — Virginia Beach / Norfolk, VA',
    timeframe: 'Expected Graduation: December 2027',
    statusNote: 'Current In-State Student',
    focusAreas: [
      'Software Engineering, Full-Stack Web Development & Object-Oriented Programming',
      'Network Fundamentals, Linux Administration & Cybersecurity Principles',
      'Relational Database Design, Data Structures & Problem Solving'
    ],
    ogTitle: 'Tidewater Community College — A.S. in IT | M. Ragsdale',
    ogDescription:
      'Associate of Science in Information Technology (Software Engineering & Web Dev, Expected Dec 2027) at Tidewater Community College in Hampton Roads, VA.',
    vitalStats: [
      { label: 'Institution', value: 'Tidewater Community College (VCCS)' },
      { label: 'Credential', value: 'Associate of Science (A.S.) in Information Technology' },
      { label: 'Timeline', value: 'Current Student • Expected Dec 2027', isBadge: true },
      { label: 'Concentration', value: 'Software Engineering & Web Development', isBadge: true }
    ],
    courseworkCompetencies: [
      {
        title: 'Object-Oriented Software Engineering & Web Development',
        detail:
          'Formalizes data structures, modular OOP design, modern client/server web architecture, and maintainable code documentation alongside daily TypeScript, PHP 8.5, Python, and C#/.NET 10 development.'
      },
      {
        title: 'Linux Administration, Networking & Cybersecurity',
        detail:
          'Reinforces POSIX command-line tooling, TCP/IP and DNS/TLS routing, least-privilege user administration, and perimeter hardening applied directly on Ubuntu/Nginx production infrastructure.'
      },
      {
        title: 'Relational Database Modeling & Structured Querying',
        detail:
          'Covers entity-relationship normalization, SQL query design, indexing, and evaluating when relational schemas vs. static JSON data lakes best fit an application’s workload.'
      }
    ],
    productionApplication: [
      'Completing the A.S. in Information Technology in-state within the Virginia Community College System (VCCS) pairs formal computer-science and IT fundamentals with 15+ years of hands-on full-stack, accessibility, and desktop software delivery.',
      'Flexible local Hampton Roads scheduling supports full-time W-2 employment across on-site, hybrid, or Virginia remote engineering teams while finishing remaining degree credits.'
    ],
    relatedLinks: [
      { label: 'Explore 19 Live Web Apps (/web-apps)', url: '/web-apps' },
      { label: 'Explore Linux & CI/CD Tooling (/build-team)', url: '/build-team' }
    ]
  },
  {
    slug: 'old-dominion-university',
    shortName: 'ODU (B.S. Track)',
    degree: 'Bachelor of Science (B.S.) Coursework — Customized Studies in Leadership & Information Systems',
    institution: 'Old Dominion University — Norfolk, VA',
    timeframe: 'Prior Coursework',
    statusNote: 'Undergraduate Coursework in Technical Communication & Information Systems',
    focusAreas: [
      'Organizational Leadership & Cross-Functional Team Collaboration',
      'Public-Sector & Higher-Education Information Systems',
      'Accessible Web Systems & Section 508 Web Principles'
    ],
    ogTitle: 'Old Dominion University — Information Systems Coursework',
    ogDescription:
      'Undergraduate B.S. coursework in Leadership, Technical Communication, and Information Systems at Old Dominion University in Norfolk, VA.',
    vitalStats: [
      { label: 'Institution', value: 'Old Dominion University (Norfolk, VA)' },
      { label: 'Academic Track', value: 'B.S. Coursework — Leadership & Information Systems' },
      { label: 'Core Strength', value: 'Technical Communication & Systems Analysis', isBadge: true },
      { label: 'Campus Tie-In', value: 'Paired with 3 Years at ODU Online (CLT)', isBadge: true }
    ],
    courseworkCompetencies: [
      {
        title: 'Information Systems & Enterprise Process Analysis',
        detail:
          'Studied how public-sector and university organizations structure digital workflows, manage stakeholder requirements, and govern enterprise web platforms.'
      },
      {
        title: 'Technical Communication & Clear Documentation',
        detail:
          'Developed the habit of translating complex engineering and accessibility specifications into clear, actionable guidance for non-technical faculty, staff, and end users.'
      },
      {
        title: 'Cross-Functional Collaboration & Inclusive Design',
        detail:
          'Connected organizational leadership principles directly to digital accessibility—treating WCAG and Section 508 web compliance as core product quality rather than a last-minute checklist.'
      }
    ],
    productionApplication: [
      'This coursework directly complemented my professional role at ODU Online (Nov 2019 – Jul 2022), where partnering effectively with instructional designers and faculty was just as essential as refactoring HTML5 and CSS.',
      'It also inspires the 100-level "Read-Along Teaching Comments" standard maintained across every source file in the RaggieSoft GitHub ecosystem.'
    ],
    relatedLinks: [
      { label: 'Inspect ODU Online Professional Role (/experience/old-dominion-university)', url: '/experience/old-dominion-university' },
      { label: 'Inspect CASE-02: ODU PLE & Canvas Migration (/case-studies/odu-section-508-gatekeeper)', url: '/case-studies/odu-section-508-gatekeeper' }
    ]
  },
  {
    slug: 'wilson-workforce-rehabilitation-center',
    shortName: 'WWRC (Cert.)',
    degree: 'Certificate in Business & Information Technology',
    institution: 'Wilson Workforce and Rehabilitation Center (formerly Woodrow Wilson Rehabilitation Center) — Fishersville, VA',
    timeframe: 'Graduated: 2011',
    statusNote: 'Business Operations & Information Technology Credential',
    focusAreas: [
      'Business Information Systems, Office Productivity & Technical Operations',
      'Assistive Technology & Accessible Workplace Practices'
    ],
    ogTitle: 'WWRC — Business & Information Technology Certificate',
    ogDescription:
      'Certificate in Business & Information Technology (2011) from Wilson Workforce and Rehabilitation Center in Fishersville, Virginia.',
    vitalStats: [
      { label: 'Institution', value: 'Wilson Workforce and Rehabilitation Center (VA)' },
      { label: 'Credential', value: 'Certificate in Business & Information Technology' },
      { label: 'Graduation Year', value: '2011 (Fishersville, VA)', isBadge: true },
      { label: 'Virginia Eligibility', value: 'Commonwealth of Virginia AHP Eligible', isBadge: true }
    ],
    courseworkCompetencies: [
      {
        title: 'Foundational Information Technology & Business Systems',
        detail:
          'Built structured habits in workstation configuration, business information workflows, accuracy verification, and technical problem solving.'
      },
      {
        title: 'Lived Assistive Technology & Accessibility Perspective',
        detail:
          'Grounded my career-long commitment to assistive technology, keyboard-complete interfaces, screen-reader usability, and inclusive software engineering across Virginia public and private sectors.'
      }
    ],
    productionApplication: [
      'Graduating from WWRC in Fishersville, Virginia established both practical IT operations discipline and firsthand appreciation for why accessible, predictable software interfaces matter to real users every day.',
      'For Commonwealth of Virginia state agencies and public universities, I am also eligible for streamlined consideration under the Virginia DHRM Policy 2.10 Alternative Hiring Process (AHP).'
    ],
    relatedLinks: [
      { label: 'Inspect Accessibility Studio IDE (raggiesoftstudio.com/accessibility-studio)', url: 'https://raggiesoftstudio.com/accessibility-studio' },
      { label: 'Return to All Education & Credentials (/education)', url: '/education' }
    ]
  }
] as const;
