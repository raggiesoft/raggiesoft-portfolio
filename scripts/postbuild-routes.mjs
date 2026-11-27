#!/usr/bin/env node
/**
 * =============================================================================
 * File: scripts/postbuild-routes.mjs
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & Node.js Guide):
 *
 * 1. What does this post-build compiler do?
 *    Right after `ng build --configuration production` compiles our Angular 19
 *    application into `dist/raggiesoft-portfolio/browser/index.html`, Node.js
 *    (v22+/v26 with native TypeScript execution!) imports `PORTFOLIO_STATIC_ROUTES`
 *    directly from `../src/app/data/portfolio.data.ts`—zero duplicated strings!
 *
 * 2. What files does it generate?
 *    - **44 Static Sub-Route HTML Entry Points (`<routePath>/index.html`)**:
 *      5 Section Landing Hubs (`/web-apps`, `/case-studies`, `/build-team`,
 *      `/experience`, `/education`) + 39 Individual Card Deep-Dive Pages
 *      (`19` web apps, `6` case studies, `7` CI/CD tools, `4` experience roles,
 *      and `3` academic credentials)—each stamped with its own `<title>` (`<= 60`
 *      chars), `<meta name="description">` (`<= 155` chars), canonical URL, and
 *      OpenGraph / Twitter social preview tags!
 *    - **Automated 45-URL `sitemap.xml`**: Includes `/` plus all 44 sub-routes.
 * =============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PORTFOLIO_STATIC_ROUTES } from '../src/app/data/portfolio.data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const browserDistDir = path.resolve(__dirname, '../dist/raggiesoft-portfolio/browser');
const rootIndexHtmlPath = path.join(browserDistDir, 'index.html');

// Fail fast if Angular's production output is missing
if (!fs.existsSync(rootIndexHtmlPath)) {
  console.error(`[postbuild-routes] Error: ${rootIndexHtmlPath} not found.`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(rootIndexHtmlPath, 'utf8');

/**
 * Escapes `&`, `"`, `<`, and `>` so dynamic titles and descriptions remain
 * 100% valid inside HTML attribute quotes (`content="..."`).
 */
function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Enforce RaggieSoft OpenGraph length guardrails (`title <= 60`, `description <= 155`)
// across every single pre-rendered route at build time!
let lengthErrors = 0;
for (const route of PORTFOLIO_STATIC_ROUTES) {
  if (route.title.length > 60) {
    console.error(
      `[postbuild-routes] Title exceeds 60 chars (${route.title.length}) on /${route.routePath}: "${route.title}"`
    );
    lengthErrors++;
  }
  if (route.description.length > 155) {
    console.error(
      `[postbuild-routes] Description exceeds 155 chars (${route.description.length}) on /${route.routePath}: "${route.description}"`
    );
    lengthErrors++;
  }
}
if (lengthErrors > 0) {
  process.exit(1);
}

// Pre-render each route's dedicated `index.html` for zero-latency Nginx serving
// (`try_files $uri $uri/index.html =404;`) and rich chat/LinkedIn link cards.
for (const route of PORTFOLIO_STATIC_ROUTES) {
  const canonicalUrl = `https://michaelpragsdale.com/${route.routePath}`;
  const safeTitle = escapeHtmlAttr(route.title);
  const safeDesc = escapeHtmlAttr(route.description);
  const safeImg = escapeHtmlAttr(route.image);
  const safeAlt = escapeHtmlAttr(route.imageAlt);

  const html = baseHtml
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

// Synthesize the complete 43-URL `sitemap.xml`
const todayIso = new Date().toISOString().split('T')[0];
const allCanonicalUrls = [
  'https://michaelpragsdale.com/',
  ...PORTFOLIO_STATIC_ROUTES.map((r) => `https://michaelpragsdale.com/${r.routePath}`)
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allCanonicalUrls
  .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${todayIso}</lastmod>\n  </url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(browserDistDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(
  `[postbuild-routes] Generated ${PORTFOLIO_STATIC_ROUTES.length} static OpenGraph route entry points + ${allCanonicalUrls.length}-URL sitemap.xml under dist/raggiesoft-portfolio/browser/.`
);
