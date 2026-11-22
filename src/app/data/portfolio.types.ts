/**
 * =============================================================================
 * File: src/app/data/portfolio.types.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level TypeScript Guide):
 *
 * 1. What is this file, and why does it exist?
 *    `portfolio.types.ts` defines the **TypeScript Blueprints (`type` & `interface`)**
 *    for every dataset and route across `https://michaelpragsdale.com`:
 *      - The all-in-one homepage dossier (`/`) for rapid recruiter `Cmd+F` scanning.
 *      - Five section landing pages (`/web-apps`, `/case-studies`, `/build-team`,
 *        `/experience`, `/education`).
 *      - All 37 individual deep-dive specification pages (`/web-apps/:slug`,
 *        `/case-studies/:slug`, `/build-team/:slug`, `/experience/:slug`, and
 *        `/education/:slug`).
 *
 * 2. How much JavaScript bundle size do these interfaces add?
 *    **Zero bytes!** In TypeScript, `type` aliases and `interface` blocks exist
 *    strictly at compile time to catch missing fields or typos before deployment.
 *    When Angular compiles `.ts` -> `.js` (or when Node.js 22+/26 imports `.ts`
 *    directly in `scripts/postbuild-routes.mjs`), all type annotations are erased.
 *
 * 3. Key TypeScript Concepts Used Below:
 *    - **String Literal Union Types (`'a' | 'b' | 'c'`)**: Restricts a variable
 *      to an exact allowlist of strings instead of allowing any arbitrary `string`.
 *    - **`readonly` Modifiers**: Prevents UI components from accidentally mutating
 *      shared portfolio arrays (`.push()`, `.pop()`) or overwriting object properties.
 *    - **Optional Properties (`?`)**: Marks properties like `isBadge?: boolean` or
 *      `repoUrl?: string` that apply only to certain records (`T | undefined`).
 * =============================================================================
 */

/**
 * Recruiter & Hiring Manager Role-Lens Filter categories.
 * Used by Angular Signals (`activeLens`) on `/`, `/web-apps`, `/case-studies`,
 * and `/experience` to filter entries by engineering discipline instantaneously.
 */
export type RoleLens =
  | 'all'
  | 'architecture'
  | 'accessibility'
  | 'data-etl'
  | 'devops';

/**
 * Union of all 11 Single-Page Application (SPA) view states rendered inside
 * `<main id="main-content">` in `src/app/app.component.html`:
 * - `'dossier'`               -> `/` (Complete scannable `Cmd+F` home dossier)
 * - `'web-apps-overview'`     -> `/web-apps` (17 Web Properties landing hub)
 * - `'web-app-detail'`        -> `/web-apps/:slug` (Individual web property deep dive)
 * - `'case-studies-overview'` -> `/case-studies` (6 Case Studies landing hub)
 * - `'case-study-detail'`     -> `/case-studies/:slug` (Individual case study deep dive)
 * - `'build-team-overview'`   -> `/build-team` (7 CI/CD & Server modules landing hub)
 * - `'build-team-member'`     -> `/build-team/:slug` (Individual CI/CD module deep dive)
 * - `'experience-overview'`   -> `/experience` (4 Career Roles landing hub)
 * - `'experience-detail'`     -> `/experience/:slug` (Individual career role deep dive)
 * - `'education-overview'`    -> `/education` (3 Academic Credentials landing hub)
 * - `'education-detail'`      -> `/education/:slug` (Individual credential deep dive)
 */
export type PortfolioView =
  | 'dossier'
  | 'web-apps-overview'
  | 'web-app-detail'
  | 'case-studies-overview'
  | 'case-study-detail'
  | 'build-team-overview'
  | 'build-team-member'
  | 'experience-overview'
  | 'experience-detail'
  | 'education-overview'
  | 'education-detail';

/**
 * Reusable key-value specification row rendered inside `<dl class="logistics-dl">`
 * sidebars on individual deep-dive pages. When `isBadge` is `true`, the template
 * renders `value` inside a `.domain-badge` pill for visual scannability.
 */
export interface VitalStatItem {
  readonly label: string;
  readonly value: string;
  readonly isBadge?: boolean;
}

/**
 * Reusable titled bullet item (`<strong>Title:</strong> Detail`) used inside
 * technical architecture, accessibility, coursework, and deliverable deep dives.
 */
export interface TitledDetailItem {
  readonly title: string;
  readonly detail: string;
}

/**
 * Reusable internal (`'/...'`) or external (`'https://...'`) reference link.
 * Templates inspect `url.startsWith('/')` to choose client-side SPA routing vs.
 * opening external websites in a new browser tab (`target="_blank" rel="noopener"`).
 */
export interface ReferenceLinkItem {
  readonly label: string;
  readonly url: string;
}

/**
 * Blueprint for each clickable filter button in the Role-Lens Filter bar.
 */
export interface RoleLensOption {
  readonly id: RoleLens;
  readonly label: string;
  readonly shortDescription: string;
}

/**
 * Blueprint for each row in the "Role & Availability Summary" `<dl>` card.
 */
export interface HiringParameter {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}

/**
 * Metadata header and OpenGraph tags (`<= 60` char `ogTitle`, `<= 155` char
 * `ogDescription`) for each of our Section Landing Pages (`/web-apps`,
 * `/case-studies`, `/experience`, `/education`).
 */
export interface SectionLandingMeta {
  readonly routePath: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly quote: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
}

/**
 * Blueprint for each of the 17 live production web properties in `POLYGLOT_ECOSYSTEM`.
 * Powers both the compact summary card on `/` & `/web-apps` AND the full deep-dive
 * engineering page at `/web-apps/:id`.
 */
export interface EcosystemProperty {
  readonly id: string;
  readonly shortName: string;
  readonly name: string;
  readonly domain: string;
  readonly url: string;
  readonly repoUrl?: string;
  readonly categoryLabel: string;
  readonly primaryStack: string;
  readonly architecturalPattern: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly lenses: readonly RoleLens[];
  readonly isCurrentSite?: boolean;
  readonly ctaLabel?: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly vitalStats: readonly VitalStatItem[];
  readonly deepDiveArchitecture: readonly TitledDetailItem[];
  readonly accessibilityDeepDive: readonly TitledDetailItem[];
}

/**
 * Blueprint for the 7 CI/CD & Media Automation summary cards displayed in
 * Section 3 (`#devops-fleet`) of `/` and linked to `/build-team/:profileSlug`.
 */
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

/**
 * Blueprint for the 6 Engineering, Desktop & Section 508 Web Case Studies.
 * Powers both the summary cards on `/` & `/case-studies` AND the full deep-dive
 * specification page at `/case-studies/:id`.
 */
export interface ArchitecturalCaseStudy {
  readonly id: string;
  readonly shortName: string;
  readonly code: string;
  readonly title: string;
  readonly organization: string;
  readonly timeframe: string;
  readonly lenses: readonly RoleLens[];
  readonly problemStatement: string;
  readonly architecturalSolution: string;
  readonly quantifiedImpact: readonly { readonly label: string; readonly value: string }[];
  readonly technologies: readonly string[];
  readonly referenceLinks: readonly ReferenceLinkItem[];
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly vitalStats: readonly VitalStatItem[];
  readonly implementationSteps: readonly TitledDetailItem[];
  readonly verificationAndTradeoffs: readonly string[];
}

/**
 * Blueprint for each chronological role in `EXPERIENCE_TIMELINE`.
 * Powers both the timeline cards on `/` & `/experience` AND the full role
 * deep-dive page at `/experience/:slug`.
 */
export interface ExperienceEntry {
  readonly slug: string;
  readonly shortName: string;
  readonly functionalTitle: string;
  readonly hrClassification: string;
  readonly organization: string;
  readonly location: string;
  readonly timeframe: string;
  readonly lenses: readonly RoleLens[];
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly vitalStats: readonly VitalStatItem[];
  readonly deepDiveDeliverables: readonly TitledDetailItem[];
  readonly environmentAndPractices: readonly string[];
  readonly relatedLinks: readonly ReferenceLinkItem[];
}

/**
 * Blueprint for each academic degree or certificate in `EDUCATION_CREDENTIALS`.
 * Powers both the credential cards on `/` & `/education` AND the full academic
 * deep-dive page at `/education/:slug`.
 */
export interface EducationEntry {
  readonly slug: string;
  readonly shortName: string;
  readonly degree: string;
  readonly institution: string;
  readonly timeframe: string;
  readonly statusNote: string;
  readonly focusAreas: readonly string[];
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly vitalStats: readonly VitalStatItem[];
  readonly courseworkCompetencies: readonly TitledDetailItem[];
  readonly productionApplication: readonly string[];
  readonly relatedLinks: readonly ReferenceLinkItem[];
}

/**
 * Blueprint for the simulated dark terminal window on `/build-team/:slug`.
 */
export interface BuildTeamTerminalBlock {
  readonly headerTitle: string;
  readonly statusBadge: string;
  readonly promptUser: string;
  readonly command: string;
  readonly outputLines: readonly string[];
}

/**
 * Blueprint for each of the 7 CI/CD & Server Infrastructure modules on `/build-team/:slug`.
 */
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
  readonly vitalStats: readonly VitalStatItem[];
  readonly technicalHeading: string;
  readonly technicalIntro: string;
  readonly technicalCapabilities: readonly TitledDetailItem[];
  readonly cliSnippet: {
    readonly comment: string;
    readonly commands: readonly string[];
  };
  readonly operationsHeading: string;
  readonly operationsLead: string;
  readonly operationsParagraphs: readonly string[];
  readonly terminalBlock: BuildTeamTerminalBlock;
}

/**
 * Pre-rendered static route record consumed by `scripts/postbuild-routes.mjs`
 * to emit `<routePath>/index.html` and `sitemap.xml` across all 42 sub-routes.
 */
export interface StaticRouteMeta {
  readonly routePath: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}
