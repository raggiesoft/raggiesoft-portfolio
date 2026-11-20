/**
 * =============================================================================
 * File: src/main.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript Guide):
 *
 * 1. What is this file, and why does it exist?
 *    Think of `src/main.ts` as the "ignition switch" (or front door) of our
 *    entire web application. When we run `npm run build`, Angular's compiler
 *    checks `angular.json`, sees `"browser": "src/main.ts"`, and starts reading
 *    our project right here.
 *
 *    Notice the `.ts` file extension: this file is written in **TypeScript**,
 *    which is standard JavaScript plus optional type checking. Browsers only
 *    understand plain JavaScript (`.js`), so during the build step, the
 *    TypeScript compiler checks our code for typos/mistakes and translates
 *    everything into fast, plain JavaScript files.
 *
 * 2. What feeds into this file?
 *    - `bootstrapApplication` (from Angular's browser library): the startup
 *      engine that mounts an Angular app onto a web page.
 *    - `appConfig` (from `./app/app.config.ts`): our global application
 *      settings—specifically telling Angular to run in modern "Zoneless" mode.
 *    - `AppComponent` (from `./app/app.component.ts`): our root User Interface
 *      (UI) component containing the portfolio's state, logic, and HTML view.
 *
 * 3. What visible output does it produce?
 *    When a visitor opens `https://michaelpragsdale.com`, the browser first
 *    loads `src/index.html`, which has an empty custom HTML tag inside `<body>`:
 *      `<mpr-root></mpr-root>`
 *    When this `main.ts` script runs, `bootstrapApplication` finds `<mpr-root>`
 *    in the browser's Document Object Model (DOM) and fills it with the entire
 *    interactive portfolio (header, dark/light theme switcher, role-lens filter,
 *    11 web app cards, case studies, CI/CD docs, and footer).
 *
 * 4. Architectural Note — Why Zoneless Angular + Signals?
 *    Traditional Angular relied on `zone.js` monkey-patching every browser async
 *    event (`setTimeout`, `addEventListener`, `Promise`), adding ~35 KB of payload
 *    and unnecessary main-thread wakeups. By pairing Angular Signals (`signal()`,
 *    `computed()`) with Zoneless Change Detection, this portfolio achieves near-zero
 *    runtime overhead, instant Interaction to Next Paint (INP), and deterministic
 *    state updates tailored for fast recruiter inspection.
 * =============================================================================
 */

/*
 * STEP 1: ES Module Imports (`import { ... } from '...'`)
 * -----------------------------------------------------------------------------
 * Modern JavaScript splits programs into small, focused files called "modules"
 * instead of cramming thousands of lines into one giant `<script>` tag.
 *
 * - An import WITHOUT `./` at the start (like `'@angular/platform-browser'`)
 *   loads an installed library package from the `node_modules/` folder.
 * - An import WITH `./` at the start (like `'./app/app.config'`) loads one of
 *   our own project files relative to the current folder (`src/`). TypeScript
 *   automatically resolves the `.ts` extension, so we leave `.ts` off the path.
 */

// Import Angular's browser startup function that connects our code to the HTML page.
import { bootstrapApplication } from '@angular/platform-browser';

// Import our global configuration object (which enables Zoneless Change Detection).
import { appConfig } from './app/app.config';

// Import our root component class (which pairs TypeScript logic with `app.component.html`).
import { AppComponent } from './app/app.component';

/*
 * STEP 2: Bootstrapping (Launching) the Application & Handling Startup Errors
 * -----------------------------------------------------------------------------
 * Here we call `bootstrapApplication(AppComponent, appConfig)`:
 *   - Argument 1 (`AppComponent`): Which root component should control the page?
 *   - Argument 2 (`appConfig`): What app-wide settings should Angular use?
 *
 * How `.catch((err) => console.error(err))` works in JavaScript:
 *   - Starting up a web app is an *asynchronous* operation, so
 *     `bootstrapApplication(...)` returns a JavaScript `Promise`—an object
 *     representing work that will either succeed ("resolve") or fail ("reject").
 *   - Chaining `.catch(...)` onto that Promise registers a safety net: if
 *     anything goes wrong during startup, JavaScript runs the callback function
 *     inside `.catch(...)` instead of failing silently.
 *   - `(err) => console.error(err)` is an ES6 **arrow function**—a concise way
 *     of writing `function (err) { console.error(err); }`. It prints any startup
 *     error in red inside the browser's Developer Tools Console (`F12`).
 */
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
