/**
 * =============================================================================
 * File: src/app/app.config.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript Guide):
 *
 * 1. What is this file, and why does it exist?
 *    `src/app/app.config.ts` holds the global, app-wide settings for our Angular
 *    application. Keeping configuration in its own small file (separate from UI
 *    layout and portfolio text data) follows a core software engineering habit
 *    called **Separation of Concerns**: if we ever want to add another global
 *    feature (such as an HTTP client or animations), we know right where it goes.
 *
 * 2. What feeds into this file, and where does its output go?
 *    - Input: Angular's core framework package (`@angular/core`) gives us the
 *      `ApplicationConfig` type blueprint and the Zoneless change-detection
 *      provider function.
 *    - Output: We `export` a constant object named `appConfig`, which `src/main.ts`
 *      imports and hands to `bootstrapApplication(AppComponent, appConfig)`.
 *
 * 3. How does this affect the visible UI?
 *    By turning on `provideExperimentalZonelessChangeDetection()`, we tell
 *    Angular NOT to use its older, heavy background-checking library (`zone.js`).
 *    Instead, Angular listens directly to our **Signals** in `app.component.ts`.
 *    When a visitor clicks a Role-Lens filter button or switches between Light
 *    and Dark mode, Angular updates *only* the exact parts of the page that
 *    changed—making clicks feel instantaneous and keeping the download tiny.
 * =============================================================================
 */

/*
 * STEP 1: Importing a TypeScript Interface & a Runtime Function
 * -----------------------------------------------------------------------------
 * Look closely at the two items inside `{ ... }` below—they play two different
 * roles even though they share one `import` line:
 *
 * 1. `ApplicationConfig` (PascalCase / starts with a capital letter):
 *    This is a TypeScript **interface** (a shape blueprint). It tells our code
 *    editor and compiler what properties a valid Angular config object is
 *    allowed to have. Interfaces exist *only* while checking our code; when
 *    TypeScript compiles to browser JavaScript, `ApplicationConfig` vanishes!
 *
 * 2. `provideExperimentalZonelessChangeDetection` (camelCase / starts lowercase):
 *    This is a real JavaScript **function** that runs in the browser at startup
 *    to configure Angular's rendering engine.
 */
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

/*
 * STEP 2: Exporting the Application Configuration Object
 * -----------------------------------------------------------------------------
 * Let's break down every keyword on the declaration line below:
 * - `export`: Makes `appConfig` public so other files (like `src/main.ts`) can
 *   import it. Without `export`, a variable stays private to its own file.
 * - `const`: Standard JavaScript keyword declaring a constant variable binding
 *   that cannot be reassigned to a different object later.
 * - `: ApplicationConfig`: A TypeScript **type annotation**. If we accidentally
 *   typed `providrs: [...]` with a typo, TypeScript would immediately underline
 *   it in red before we ever opened a browser!
 * - `= { providers: [ ... ] }`: A JavaScript **object literal** (`{ key: value }`)
 *   whose `providers` property holds an **array** (`[ ... ]`) of global services.
 *
 * What is a "Provider" in Angular?
 *   Angular includes a built-in system called **Dependency Injection (DI)**—think
 *   of `providers` as a shared toolbox stocked at startup so every component in
 *   the app shares the same core rules and services.
 *
 * What does `provideExperimentalZonelessChangeDetection()` do?
 *   "Change Detection" is how a UI framework knows *when* JavaScript variables
 *   changed so it can repaint the HTML screen. Calling this function tells
 *   Angular: "Do not guess when the screen might need updating after every
 *   mouse event or timer. Wait until an Angular `signal()` explicitly updates,
 *   and then refresh the DOM cleanly."
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
};
