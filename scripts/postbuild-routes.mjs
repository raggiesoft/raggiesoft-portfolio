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
 * 1. What is Line 1 (`#!/usr/bin/env node`), and why does this file end in `.mjs`?
 *    - Line 1 is a Unix **shebang** (`#!`): if someone runs `./scripts/postbuild-routes.mjs`
 *      directly in a macOS or Linux terminal, the operating system knows to
 *      execute this file using **Node.js** (JavaScript running outside a web
 *      browser, directly on the developer's computer with file-system access!).
 *    - The `.mjs` extension stands for **Modular JavaScript** (ES Modules). It
 *      tells Node.js to enable modern `import ... from '...'` syntax (matching
 *      our Angular TypeScript code) instead of older Node.js `require(...)`.
 *
 * 2. When does this script run, and what feeds into it?
 *    Look at `"build"` inside `package.json`:
 *      `"ng build --configuration production && node scripts/postbuild-routes.mjs"`
 *    1. First, `ng build` compiles our Angular app and writes the root HTML file
 *       to `dist/raggiesoft-portfolio/browser/index.html`.
 *    2. Second (`&&` means "only if step 1 succeeded"), Node.js runs THIS script!
 *       It reads `dist/raggiesoft-portfolio/browser/index.html` into memory as
 *       a template string (`baseHtml`).
 *
 * 3. What output does this script generate, and why does it matter?
 *    In a client-side Single-Page Application (SPA), Angular updates `document.title`
 *    using JavaScript *after* the page loads. However:
 *    - **Social & Chat Link Previews (`OpenGraph`)**: When someone shares
 *      `https://michaelpragsdale.com/build-team/jenna` in LinkedIn, Microsoft
 *      Teams, Slack, or Discord, those link-preview bots do NOT execute JavaScript!
 *      Without pre-rendered HTML files, every sub-route would show the generic
 *      homepage title. By generating 8 static `index.html` files (one per sub-route)
 *      with tailored `<title>` (`<= 60` chars) and `<meta>` descriptions (`<= 155`
 *      chars), every URL unfurls into an accurate rich preview card.
 *    - **Zero-Latency Nginx Serving**: Because `nginx-config/michaelpragsdale.com.conf`
 *      uses `try_files $uri $uri/ /index.html;`, Nginx finds `/build-team/paige/index.html`
 *      directly on disk and serves it immediately with HTTP `200 OK`.
 *    - **Automated XML Sitemap (`sitemap.xml`)**: Writes a fresh 9-URL `sitemap.xml`
 *      stamped with today's ISO date (`YYYY-MM-DD`) so search engines index every route.
 * =============================================================================
 */

/*
 * STEP 1: Importing Built-In Node.js Standard Library Modules (`node:*`)
 * -----------------------------------------------------------------------------
 * Unlike browser JavaScript (which is sandboxed from your hard drive for security),
 * Node.js provides built-in `node:*` modules for build tools:
 * - `node:fs` ("File System"): Reads files, creates folders, and writes files.
 * - `node:path`: Joins folder and file paths safely across macOS/Linux (`/`) and Windows (`\`).
 * - `node:url` (`fileURLToPath`): Converts an ES Module `file://` URL into a normal OS file path.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * STEP 2: Resolving the Compiled `dist/` Folder Path
 * -----------------------------------------------------------------------------
 * In Node.js ES Modules, `import.meta.url` gives the URL of *this* script file
 * (e.g., `file:///.../www/scripts/postbuild-routes.mjs`).
 * - `fileURLToPath(import.meta.url)` converts that URL into a normal file path (`__filename`).
 * - `path.dirname(__filename)` gets the parent folder (`.../www/scripts`).
 * - `path.resolve(__dirname, '../dist/raggiesoft-portfolio/browser')` climbs up
 *   one directory (`..`) to `www/` and points into Angular's production output!
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const browserDistDir = path.resolve(__dirname, '../dist/raggiesoft-portfolio/browser');
const rootIndexHtmlPath = path.join(browserDistDir, 'index.html');

/*
 * STEP 3: Fail-Fast Build Guardrail (`fs.existsSync` & `process.exit(1)`)
 * -----------------------------------------------------------------------------
 * Before doing any string replacements, we verify that Angular actually created
 * `dist/raggiesoft-portfolio/browser/index.html`.
 * - In command-line tools and CI/CD pipelines (like `jenna-sync.sh`), exit code `0`
 *   means "Success!", while any non-zero exit code like `process.exit(1)` means
 *   "Stop the release immediately—something is missing!"
 */
if (!fs.existsSync(rootIndexHtmlPath)) {
  console.error(`[postbuild-routes] Error: ${rootIndexHtmlPath} not found.`);
  process.exit(1);
}

// Read the entire compiled root `index.html` file into a UTF-8 JavaScript string.
// Notice Angular has already injected `<link rel="stylesheet" href="styles-....css">`
// and `<script src="main-....js" type="module"></script>` into `baseHtml`!
const baseHtml = fs.readFileSync(rootIndexHtmlPath, 'utf8');
const PORTFOLIO_OG_IMAGE = 'https://michaelpragsdale.com/og-image.jpg';
const PORTFOLIO_OG_ALT =
  'Michael P. Ragsdale — Full-Stack Web Developer & Web Accessibility Engineer (michaelpragsdale.com)';

/**
 * STEP 4: Route Metadata Table (`ROUTES`)
 * -----------------------------------------------------------------------------
 * An array of plain JavaScript objects defining all 8 static sub-routes:
 * - `/build-team` (the CI/CD & Media Automation Suite overview)
 * - `/build-team/<slug>` (each of the 7 modular CLI / server components)
 *
 * SEO & OpenGraph Length Discipline:
 * - Every `title` is kept `<= 60` characters so search results and social cards
 *   never cut off the end with `...`.
 * - Every `description` is kept `<= 155` characters for clean snippet display.
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

/**
 * STEP 5: HTML Attribute Sanitization Helper (`escapeHtmlAttr`)
 * -----------------------------------------------------------------------------
 * Why do we escape `&`, `"`, `<`, and `>` before inserting text into `content="..."`?
 * Suppose a title contained `&` (like `"CI/CD & Build Automation"`) or a quote `"`.
 * Unescaped `&` or `"` inside an HTML attribute breaks strict HTML5 validation
 * or prematurely closes `content="..."`!
 *
 * Notice the `/g` ("global") flag on each Regular Expression (`/&/g`): in
 * JavaScript, `.replace(/&/g, '&amp;')` replaces *every* `&` in the string,
 * whereas `.replace(/&/, '&amp;')` without `g` would only replace the first one!
 */
function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/*
 * STEP 6: Generating Each Route's Static `index.html` File (`for ... of` Loop)
 * -----------------------------------------------------------------------------
 * For each object in `ROUTES`:
 * 1. Build its canonical URL (`https://michaelpragsdale.com/build-team/...`)
 *    and escape all text fields for safe HTML insertion.
 * 2. Take a copy of `baseHtml` and chain `.replace(...)` calls using non-greedy
 *    Regular Expressions (`.*?` means "match as few characters as possible up to
 *    the closing `"` or `</title>` on that single line").
 * 3. Create the nested route directory (e.g., `dist/.../browser/build-team/paige/`)
 *    using `{ recursive: true }` (similar to `mkdir -p` in Bash—creates parent
 *    folders automatically and never errors if the folder already exists) and
 *    write `index.html` inside it!
 */
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

/*
 * STEP 7: Synthesizing `sitemap.xml` Automatically
 * -----------------------------------------------------------------------------
 * Search engines look for `https://michaelpragsdale.com/sitemap.xml` to discover
 * all public routes and when they were last updated.
 *
 * JavaScript Idioms Used Below:
 * - `new Date().toISOString().split('T')[0]`:
 *   `.toISOString()` returns a timestamp like `"2026-11-20T05:32:58.000Z"`.
 *   Splitting on `'T'` gives `["2026-11-20", "05:32:58.000Z"]`, and `[0]` grabs
 *   the clean `"2026-11-20"` date string!
 * - Spread Operator (`...ROUTES.map(...)`):
 *   Combines the root homepage URL (`'https://michaelpragsdale.com/'`) and all 8
 *   mapped sub-route URLs into a single flat 9-element array (`allCanonicalUrls`).
 * - `.map(...).join('\n')`:
 *   Transforms each URL string into an indented `<url>...</url>` XML block and
 *   joins them together with newline characters (`\n`).
 */
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

// Print a friendly build confirmation line to the terminal output.
console.log(
  `[postbuild-routes] Generated ${ROUTES.length} static OpenGraph route entry points + ${allCanonicalUrls.length}-URL sitemap.xml under dist/raggiesoft-portfolio/browser/.`
);
