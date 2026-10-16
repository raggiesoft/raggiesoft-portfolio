/**
 * =============================================================================
 * File: src/main.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * Architectural Purpose:
 * Bootstraps the standalone Angular 19 application using experimental zoneless
 * change detection (`provideExperimentalZonelessChangeDetection()`).
 *
 * Why Zoneless Angular + Signals?
 * Traditional Angular relied on `zone.js` monkey-patching every browser async
 * event (`setTimeout`, `addEventListener`, `Promise`), adding ~35 KB of payload
 * and unnecessary main-thread wakeups. By pairing Angular Signals (`signal()`,
 * `computed()`) with Zoneless Change Detection, this portfolio achieves near-zero
 * runtime overhead, instant Interaction to Next Paint (INP), and deterministic
 * state updates tailored for fast recruiter inspection.
 * =============================================================================
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

