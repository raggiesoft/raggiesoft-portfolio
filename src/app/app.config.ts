/**
 * =============================================================================
 * File: src/app/app.config.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License
 * =============================================================================
 * Architectural Purpose:
 * Configures application-level providers for Angular 19 Standalone architecture.
 * Enables `provideExperimentalZonelessChangeDetection()` so UI updates are
 * driven exclusively by Angular Signals (`signal()`, `computed()`) with zero
 * `zone.js` polyfill overhead.
 * =============================================================================
 */

import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
};

