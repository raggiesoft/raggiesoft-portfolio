#!/usr/bin/env node
/**
 * =============================================================================
 * File: scripts/postbuild-routes.mjs
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
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
const PORTFOLIO_OG_IMAGE = 'https://michaelpragsdale.com/og-image.jpg';
const PORTFOLIO_OG_ALT =
  'Michael P. Ragsdale — Full-Stack Web Developer & Section 508 Specialist (michaelpragsdale.com)';

/**
 * Route metadata definitions strictly adhering to <= 60 char titles and <= 155 char descriptions.
 */
const ROUTES = [
  {
    routePath: 'build-team',
    title: 'CI/CD & Build Automation Suite | Michael P. Ragsdale',
    description:
      'Modular PHP 8.5, Bash, FFmpeg, and Linux cron pipelines powering build verification, CDN asset sync, and non-root deploys across 11 web properties.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/michael',
    title: 'Workstation & Bootstrap Tooling | Michael P. Ragsdale',
    description:
      'Cross-platform developer workstation provisioning and backup tooling (brooke.sh, backup.sh) across macOS, Windows 11, and Linux environments.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/paige',
    title: 'paige.php — Manuscript & Search Compiler | CI/CD Suite',
    description:
      'PHP 8.5 command-line compiler transforming Markdown manuscripts into JSON route manifests, full-text search indices, and accessible EPUB/PDF editions.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/jessica',
    title: 'jessica.raggiesoft.com — Linux & Nginx Host | CI/CD',
    description:
      'Hardened Ubuntu Linux VPS on DigitalOcean NYC1 serving 11 Nginx virtual hosts, PHP 8.5-FPM worker pools, TLS 1.3 origin certs, and CSP headers.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/harper',
    title: 'harper.sh — FFmpeg & Media Pipeline | CI/CD Suite',
    description:
      'Multi-core Bash media pipeline executing EBU R128 FFmpeg normalization, Metal RealESRGAN upscaling, and human-verified WebVTT caption validation.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/jenna',
    title: 'jenna-sync.sh — Multi-Repo & CDN Release | CI/CD Suite',
    description:
      'Single-command release orchestrator running polyglot build gates across Angular, SvelteKit, Astro, Nuxt, and Next.js before syncing S3 CDN assets.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/sarah',
    title: 'sarah-deploy.sh — Non-Root Cron Deployer | CI/CD Suite',
    description:
      'Autonomous non-root Linux deployment daemon verifying GitHub commit SHAs on a 5-minute cron schedule and promoting static bundles via atomic rsync.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
  },
  {
    routePath: 'build-team/amanda-elara',
    title: 'amanda/elara.php — Front-Controller Router | CI/CD',
    description:
      'Two-tier Stardust Engine CMS gateway isolating the static web root directory (/amanda) and routing requests through a single PHP 8.5 front controller.',
    image: PORTFOLIO_OG_IMAGE,
    imageAlt: PORTFOLIO_OG_ALT
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

// Automatically synchronize sitemap.xml with all pre-rendered canonical routes
const todayIso = new Date().toISOString().split('T')[0];
const allCanonicalUrls = [
  'https://michaelpragsdale.com/',
  ...ROUTES.map((r) => `https://michaelpragsdale.com/${r.routePath}`)
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allCanonicalUrls
  .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${todayIso}</lastmod>\n  </url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(browserDistDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(
  `[postbuild-routes] Generated ${ROUTES.length} static OpenGraph route entry points + ${allCanonicalUrls.length}-URL sitemap.xml under dist/raggiesoft-portfolio/browser/.`
);
