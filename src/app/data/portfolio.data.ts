/**
 * =============================================================================
 * File: src/app/data/portfolio.data.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & TypeScript Guide):
 *
 * 1. What is this file, and why is it structured as a "Barrel + Route Index"?
 *    Instead of cramming 45 routes of technical specifications into one giant
 *    3,000-line file, we split our read-only datasets into focused modules inside
 *    `src/app/data/`:
 *      - `portfolio.types.ts`        -> TypeScript `type` & `interface` blueprints
 *      - `career-and-education.data.ts` -> Profile, Role Lenses, Experience & Education
 *      - `ecosystem.data.ts`         -> All 19 Live Web Applications (`/web-apps/:id`)
 *      - `case-studies.data.ts`      -> All 6 Case Studies (`/case-studies/:id`)
 *      - `build-team.data.ts`        -> All 7 CI/CD & Server Modules (`/build-team/:slug`)
 *
 *    This file (`portfolio.data.ts`) re-exports all of them from one clean import
 *    path AND derives `PORTFOLIO_STATIC_ROUTES`—consumed directly by Node.js in
 *    `scripts/postbuild-routes.mjs` to pre-render all **44 sub-route HTML files**
 *    (5 section landing pages + 39 individual card deep-dive pages) plus `/`!
 *
 * 2. Why share `PORTFOLIO_STATIC_ROUTES` between Angular and `postbuild-routes.mjs`?
 *    **DRY ("Don't Repeat Yourself") Guarantee**: Adding a new web app, case
 *    study, role, or CI/CD script in `src/app/data/*.data.ts` automatically
 *    registers its client-side SPA route, its pre-rendered OpenGraph `index.html`,
 *    AND its `<url>` entry in `sitemap.xml` with zero manual duplication!
 * =============================================================================
 */

export type {
  ArchitecturalCaseStudy,
  BuildTeamMember,
  BuildTeamTerminalBlock,
  DevOpsConstruct,
  EcosystemProperty,
  EducationEntry,
  ExperienceEntry,
  HiringParameter,
  PortfolioView,
  ReferenceLinkItem,
  RoleLens,
  RoleLensOption,
  SectionLandingMeta,
  StaticRouteMeta,
  TitledDetailItem,
  VitalStatItem
} from './portfolio.types.ts';

export {
  EDUCATION_CREDENTIALS,
  EXECUTIVE_PROFILE,
  EXPERIENCE_TIMELINE,
  HIRING_PARAMETERS,
  ROLE_LENSES,
  SECTION_LANDINGS
} from './career-and-education.data.ts';

export { POLYGLOT_ECOSYSTEM } from './ecosystem.data.ts';
export { ARCHITECTURAL_CASE_STUDIES } from './case-studies.data.ts';
export {
  BUILD_TEAM_OVERVIEW,
  BUILD_TEAM_PROFILES,
  DEVOPS_CONSTRUCTS
} from './build-team.data.ts';

import {
  EDUCATION_CREDENTIALS,
  EXPERIENCE_TIMELINE,
  SECTION_LANDINGS
} from './career-and-education.data.ts';
import { POLYGLOT_ECOSYSTEM } from './ecosystem.data.ts';
import { ARCHITECTURAL_CASE_STUDIES } from './case-studies.data.ts';
import { BUILD_TEAM_PROFILES } from './build-team.data.ts';
import type { StaticRouteMeta } from './portfolio.types.ts';

const PORTFOLIO_OG_IMAGE = 'https://assets.raggiesoft.com/common/images/mragsdale-social.jpg';
const PORTFOLIO_OG_ALT =
  'Michael P. Ragsdale — Full-Stack Web Developer & Web Accessibility Engineer (michaelpragsdale.com)';

/**
 * Complete array of all **44 pre-rendered sub-routes** (`/` is the 45th root route):
 * - 5 Section Landing Hubs (`/web-apps`, `/case-studies`, `/build-team`, `/experience`, `/education`)
 * - 19 Web Application Deep Dives (`/web-apps/:id`)
 * - 6 Case Study Deep Dives (`/case-studies/:id`)
 * - 7 CI/CD & Server Deep Dives (`/build-team/:slug`)
 * - 4 Professional Experience Deep Dives (`/experience/:slug`)
 * - 3 Education & Credential Deep Dives (`/education/:slug`)
 */
export const PORTFOLIO_STATIC_ROUTES: readonly StaticRouteMeta[] = [
  // 1. Five Section Landing Pages
  {
    routePath: SECTION_LANDINGS.webApps.routePath,
    title: SECTION_LANDINGS.webApps.ogTitle,
    description: SECTION_LANDINGS.webApps.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: SECTION_LANDINGS.caseStudies.routePath,
    title: SECTION_LANDINGS.caseStudies.ogTitle,
    description: SECTION_LANDINGS.caseStudies.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team',
    title: 'CI/CD & Build Automation Suite | Michael P. Ragsdale',
    description:
      'Modular PHP 8.5, Bash, FFmpeg, and Linux cron pipelines powering build verification, CDN asset sync, and non-root deploys across 19 web applications.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: SECTION_LANDINGS.experience.routePath,
    title: SECTION_LANDINGS.experience.ogTitle,
    description: SECTION_LANDINGS.experience.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: SECTION_LANDINGS.education.routePath,
    title: SECTION_LANDINGS.education.ogTitle,
    description: SECTION_LANDINGS.education.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },

  // 2. Seventeen Individual Web Property Deep-Dive Pages (`/web-apps/:id`)
  ...POLYGLOT_ECOSYSTEM.map((prop) => ({
    routePath: `web-apps/${prop.id}`,
    title: prop.ogTitle,
    description: prop.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  })),

  // 3. Six Individual Case Study Deep-Dive Pages (`/case-studies/:id`)
  ...ARCHITECTURAL_CASE_STUDIES.map((study) => ({
    routePath: `case-studies/${study.id}`,
    title: study.ogTitle,
    description: study.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  })),

  // 4. Seven Individual CI/CD & Infrastructure Deep-Dive Pages (`/build-team/:slug`)
  ...BUILD_TEAM_PROFILES.map((member) => ({
    routePath: `build-team/${member.slug}`,
    title: member.ogTitle,
    description: member.ogDescription,
    image: member.ogImageUrl,
    imageAlt: PORTFOLIO_OG_ALT
  })),

  // 5. Four Individual Professional Experience Deep-Dive Pages (`/experience/:slug`)
  ...EXPERIENCE_TIMELINE.map((job) => ({
    routePath: `experience/${job.slug}`,
    title: job.ogTitle,
    description: job.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  })),

  // 6. Three Individual Education & Credential Deep-Dive Pages (`/education/:slug`)
  ...EDUCATION_CREDENTIALS.map((edu) => ({
    routePath: `education/${edu.slug}`,
    title: edu.ogTitle,
    description: edu.ogDescription,
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  }))
];
