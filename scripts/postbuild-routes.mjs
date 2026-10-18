#!/usr/bin/env node
/**
 * =============================================================================
 * File: scripts/postbuild-routes.mjs
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * Architectural Purpose:
 * Generates static route-specific `index.html` entry points inside
 * `dist/raggiesoft-portfolio/browser/build-team/` and
 * `dist/raggiesoft-portfolio/browser/build-team/<slug>/` after `ng build`
 * completes.
 *
 * Why This Matters:
 * 1. OpenGraph & Social Unfurling Compliance:
 *    Social crawlers (LinkedIn, Microsoft Teams, Slack, Discord, X) do not
 *    execute JavaScript when fetching `/build-team` or `/build-team/paige`.
 *    Pre-generating static `index.html` files with route-specific `<title>`,
 *    `og:title` (<= 60 chars), `og:description` (<= 155 chars), `og:url`, and
 *    `og:image` guarantees 100% rich card previews on every route.
 * 2. Zero-Latency Nginx Static Resolution:
 *    Because `nginx-config/michaelpragsdale.com.conf` uses
 *    `try_files $uri $uri/ /index.html;`, Nginx serves `/build-team/paige/index.html`
 *    directly from disk with zero rewrite overhead.
 * =============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const browserDistDir = path.resolve(__dirname, '../dist/raggiesoft-portfolio/browser');
const rootIndexHtmlPath = path.join(browserDistDir, 'index.html');

if (!fs.existsSync(rootIndexHtmlPath)) {
  console.error(`[postbuild-routes] Error: ${rootIndexHtmlPath} not found.`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(rootIndexHtmlPath, 'utf8');

/**
 * Route metadata definitions strictly adhering to <= 60 char titles and <= 155 char descriptions.
 */
const ROUTES = [
  {
    routePath: 'build-team',
    title: 'The Build Team & DevOps Family | Michael P. Ragsdale',
    description:
      'Explore the RaggieSoft Personified DevOps ecosystem: real-world CLI daemons (Paige, Jessica, Harper, Jenna, Sarah, Amanda & Elara) and in-universe sisters.',
    image: 'https://assets.raggiesoft.com/family/images/scenes/paige-michael-hug.jpg',
    imageAlt: 'Paige comforting Michael — The RaggieSoft Build Team & DevOps Family'
  },
  {
    routePath: 'build-team/michael',
    title: 'Michael P. Ragsdale — The Architect | Build Team',
    description:
      'Meet Michael P. Ragsdale, the biological core, Systems Architect, and author behind the RaggieSoft Personified DevOps ecosystem.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/michael.jpg',
    imageAlt: 'Michael P. Ragsdale — The Architect & Biological Core'
  },
  {
    routePath: 'build-team/paige',
    title: 'Paige (paige.php) — Editor & Safe Person | Build Team',
    description:
      'Meet Paige: the PHP 8.5 narrative compiler and full-text search indexer for Ocean View Archives, and Michael\'s designated autistic Safe Person.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/paige.jpg',
    imageAlt: 'Paige (paige.php) — Literary Editor & Designated Safe Person'
  },
  {
    routePath: 'build-team/jessica',
    title: 'Jessica (jessica.raggiesoft.com) — VPS Infra | Build Team',
    description:
      'Meet Jessica: the NYC1 Ubuntu production server hosting all 10 RaggieSoft properties and the eldest sister of the DevOps family.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/jessica.jpg',
    imageAlt: 'Jessica (jessica.raggiesoft.com) — Production Linux Infrastructure'
  },
  {
    routePath: 'build-team/harper',
    title: 'Harper (harper.sh) — Studio Engineer | Build Team',
    description:
      'Meet Harper: the multi-threaded FFmpeg, Metal RealESRGAN, and Whisper WebVTT studio engineering pipeline for Engine Room Records.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/harper.jpg',
    imageAlt: 'Harper (harper.sh) — Studio Engineer & Media Mastering Pipeline'
  },
  {
    routePath: 'build-team/jenna',
    title: 'Jenna (jenna-sync.sh) — Release & CDN Sync | Build Team',
    description:
      'Meet Jenna: the single-command multi-repo build orchestrator and DigitalOcean Spaces CDN sync engine for RaggieSoft.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/jenna.jpg',
    imageAlt: 'Jenna (jenna-sync.sh) — Release Orchestrator & CDN Sync Manager'
  },
  {
    routePath: 'build-team/sarah',
    title: 'Sarah (sarah-deploy.sh) — Autonomous Deployer | Build Team',
    description:
      'Meet Sarah: the non-root autonomous Linux cron deployment guardian managing all 10 RaggieSoft web roots on NYC1.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/sarah.jpg',
    imageAlt: 'Sarah (sarah-deploy.sh) — The Guardian & Autonomous Deployer'
  },
  {
    routePath: 'build-team/amanda-elara',
    title: 'Amanda & Elara (amanda/elara.php) — Router | Build Team',
    description:
      'Meet Amanda & Elara: the symbiotic web root and PHP 8.5 front-controller router powering raggiesoft.com and Stardust Engine CMS.',
    image: 'https://assets.raggiesoft.com/family/images/atmospheric/amanda-elara.jpg',
    imageAlt: 'Amanda & Elara (amanda/elara.php) — Protected Web Root & Router'
  }
];

function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

for (const route of ROUTES) {
  const canonicalUrl = `https://michaelpragsdale.com/${route.routePath}`;
  const safeTitle = escapeHtmlAttr(route.title);
  const safeDesc = escapeHtmlAttr(route.description);
  const safeImg = escapeHtmlAttr(route.image);
  const safeAlt = escapeHtmlAttr(route.imageAlt);

  let html = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${safeDesc}">`
    )
    .replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    )
    .replace(
      /<meta property="og:title" content=".*?">/,
      `<meta property="og:title" content="${safeTitle}">`
    )
    .replace(
      /<meta property="og:description" content=".*?">/,
      `<meta property="og:description" content="${safeDesc}">`
    )
    .replace(
      /<meta property="og:url" content=".*?">/,
      `<meta property="og:url" content="${canonicalUrl}">`
    )
    .replace(
      /<meta property="og:image" content=".*?">/,
      `<meta property="og:image" content="${safeImg}">`
    )
    .replace(
      /<meta property="og:image:secure_url" content=".*?">/,
      `<meta property="og:image:secure_url" content="${safeImg}">`
    )
    .replace(
      /<meta property="og:image:alt" content=".*?">/,
      `<meta property="og:image:alt" content="${safeAlt}">`
    )
    .replace(
      /<meta name="twitter:title" content=".*?">/,
      `<meta name="twitter:title" content="${safeTitle}">`
    )
    .replace(
      /<meta name="twitter:description" content=".*?">/,
      `<meta name="twitter:description" content="${safeDesc}">`
    )
    .replace(
      /<meta name="twitter:image" content=".*?">/,
      `<meta name="twitter:image" content="${safeImg}">`
    )
    .replace(
      /<meta name="twitter:image:alt" content=".*?">/,
      `<meta name="twitter:image:alt" content="${safeAlt}">`
    );

  const targetDir = path.join(browserDistDir, route.routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

console.log(
  `[postbuild-routes] Generated ${ROUTES.length} static OpenGraph route entry points under dist/raggiesoft-portfolio/browser/build-team/.`
);

