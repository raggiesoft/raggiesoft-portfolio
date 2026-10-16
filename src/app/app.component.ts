/**
 * =============================================================================
 * File: src/app/app.component.ts
 * Application: Michael P. Ragsdale — Systems Architect Executive Dossier
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Creative Narrative References)
 * =============================================================================
 * Architectural Overview:
 * Root Standalone Component for the Executive Systems Architect Dossier.
 *
 * Key Technical Highlights for Code Reviewers:
 * 1. Zoneless Angular Signals State Management:
 *    All interactive state—including the Recruiter Role-Lens filter and the
 *    tri-state Color Scheme manager—is powered by `signal()` and `computed()`
 *    primitives with `ChangeDetectionStrategy.OnPush`.
 *
 * 2. Standards-Compliant Color Scheme Override (`dark-mode-toggle` pattern):
 *    - Defaults to `system` (`<meta name="color-scheme" content="light dark">`),
 *      allowing CSS `light-dark()` and `@media (prefers-color-scheme: dark)` to
 *      follow OS preferences with zero JavaScript requirement.
 *    - When a recruiter explicitly selects Light or Dark mode, updates both the
 *      `<meta name="color-scheme">` tag and `localStorage`, and removes the
 *      stored entry when returning to `system`.
 *    - Never uses `matchMedia()` to retroactively clear a pinned preference when
 *      OS time-of-day themes shift.
 *
 * 3. Section 508 / WCAG 2.1 AA Live Announcements:
 *    Provides deterministic `aria-live="polite"` status strings whenever the
 *    Recruiter Role-Lens filter changes.
 * =============================================================================
 */

import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal
} from '@angular/core';
import {
  ARCHITECTURAL_CASE_STUDIES,
  DEVOPS_CONSTRUCTS,
  EDUCATION_CREDENTIALS,
  EXECUTIVE_PROFILE,
  EXPERIENCE_TIMELINE,
  HIRING_PARAMETERS,
  POLYGLOT_ECOSYSTEM,
  ROLE_LENSES,
  RoleLens
} from './data/portfolio.data';

export type ThemeMode = 'system' | 'light' | 'dark';

@Component({
  selector: 'mpr-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private readonly document = inject(DOCUMENT);

  /** Static dossier datasets exposed to the template */
  protected readonly profile = EXECUTIVE_PROFILE;
  protected readonly roleLenses = ROLE_LENSES;
  protected readonly hiringParameters = HIRING_PARAMETERS;
  protected readonly devopsConstructs = DEVOPS_CONSTRUCTS;
  protected readonly educationCredentials = EDUCATION_CREDENTIALS;

  /**
   * Reactive Signal: Currently selected Recruiter Role-Lens filter.
   * Defaults to 'all' so recruiters see the complete dossier on initial load.
   */
  protected readonly activeLens = signal<RoleLens>('all');

  /**
   * Reactive Signal: Tri-state color scheme preference ('system' | 'light' | 'dark').
   */
  protected readonly themeMode = signal<ThemeMode>('system');

  /**
   * Reactive Signal: Tracks current OS dark/light state purely for displaying
   * helpful context inside the "System" theme button label.
   */
  protected readonly osPrefersDark = signal<boolean>(false);

  /**
   * Computed Signal: Metadata for the currently active Role-Lens filter.
   */
  protected readonly currentLensMeta = computed(() => {
    const selected = this.activeLens();
    return (
      this.roleLenses.find((lens) => lens.id === selected) ?? this.roleLenses[0]
    );
  });

  /**
   * Computed Signal: Polyglot production properties matching the active Role-Lens.
   */
  protected readonly filteredEcosystem = computed(() => {
    const lens = this.activeLens();
    if (lens === 'all') {
      return POLYGLOT_ECOSYSTEM;
    }
    return POLYGLOT_ECOSYSTEM.filter((item) => item.lenses.includes(lens));
  });

  /**
   * Computed Signal: Architectural Case Studies matching the active Role-Lens.
   */
  protected readonly filteredCaseStudies = computed(() => {
    const lens = this.activeLens();
    if (lens === 'all') {
      return ARCHITECTURAL_CASE_STUDIES;
    }
    return ARCHITECTURAL_CASE_STUDIES.filter((study) =>
      study.lenses.includes(lens)
    );
  });

  /**
   * Computed Signal: Chronological Experience entries matching the active Role-Lens.
   */
  protected readonly filteredExperience = computed(() => {
    const lens = this.activeLens();
    if (lens === 'all') {
      return EXPERIENCE_TIMELINE;
    }
    return EXPERIENCE_TIMELINE.filter((exp) => exp.lenses.includes(lens));
  });

  /**
   * Computed Signal: Pre-calculates badge counts for each Role-Lens button.
   */
  protected readonly lensCounts = computed<Record<RoleLens, number>>(() => {
    const countFor = (lens: RoleLens): number => {
      if (lens === 'all') {
        return (
          POLYGLOT_ECOSYSTEM.length +
          ARCHITECTURAL_CASE_STUDIES.length
        );
      }
      const ecoCount = POLYGLOT_ECOSYSTEM.filter((p) =>
        p.lenses.includes(lens)
      ).length;
      const caseCount = ARCHITECTURAL_CASE_STUDIES.filter((c) =>
        c.lenses.includes(lens)
      ).length;
      return ecoCount + caseCount;
    };

    return {
      all: countFor('all'),
      architecture: countFor('architecture'),
      accessibility: countFor('accessibility'),
      'data-etl': countFor('data-etl'),
      devops: countFor('devops')
    };
  });

  /**
   * Computed Signal: Screen-reader announcement string for `aria-live="polite"`.
   */
  protected readonly filterAnnouncement = computed(() => {
    const meta = this.currentLensMeta();
    const sysCount = this.filteredEcosystem().length;
    const caseCount = this.filteredCaseStudies().length;
    const expCount = this.filteredExperience().length;
    return `Filter set to ${meta.label}. Displaying ${sysCount} production systems, ${caseCount} case studies, and ${expCount} experience records.`;
  });

  public ngOnInit(): void {
    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    // 1. Hydrate saved theme preference from localStorage (if any)
    try {
      const saved = win.localStorage.getItem('color-scheme');
      if (saved === 'light' || saved === 'dark') {
        this.themeMode.set(saved);
      }
    } catch {
      // Ignore storage access exceptions in restricted browsing contexts
    }

    // 2. Observe OS prefers-color-scheme for UI indicator only
    if (typeof win.matchMedia === 'function') {
      const mediaQuery = win.matchMedia('(prefers-color-scheme: dark)');
      this.osPrefersDark.set(mediaQuery.matches);
      mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
        this.osPrefersDark.set(event.matches);
      });
    }

    // 3. Synchronize theme overrides across multiple open tabs
    win.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'color-scheme') {
        const nextMode: ThemeMode =
          event.newValue === 'light' || event.newValue === 'dark'
            ? event.newValue
            : 'system';
        this.applyThemeDomState(nextMode, false);
      }
    });
  }

  /**
   * Updates the active Recruiter Role-Lens filter signal.
   */
  protected selectLens(lens: RoleLens): void {
    this.activeLens.set(lens);
  }

  /**
   * Sets the color scheme mode ('system', 'light', or 'dark') and persists
   * explicit overrides to `<meta name="color-scheme">` and `localStorage`.
   */
  protected setThemeMode(mode: ThemeMode): void {
    this.applyThemeDomState(mode, true);
  }

  /**
   * Synchronizes the `<meta name="color-scheme">` tag, root `data-theme`
   * attribute, and `localStorage` state.
   */
  private applyThemeDomState(mode: ThemeMode, persistToStorage: boolean): void {
    this.themeMode.set(mode);
    const meta = this.document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]'
    );
    const root = this.document.documentElement;

    if (mode === 'system') {
      if (meta) {
        meta.content = 'light dark';
      }
      root.removeAttribute('data-theme');
      if (persistToStorage) {
        try {
          this.document.defaultView?.localStorage.removeItem('color-scheme');
        } catch {
          // Ignore storage exceptions
        }
      }
    } else {
      if (meta) {
        meta.content = mode;
      }
      root.setAttribute('data-theme', mode);
      if (persistToStorage) {
        try {
          this.document.defaultView?.localStorage.setItem('color-scheme', mode);
        } catch {
          // Ignore storage exceptions
        }
      }
    }
  }
}
