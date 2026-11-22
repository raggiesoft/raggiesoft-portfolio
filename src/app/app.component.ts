/**
 * =============================================================================
 * File: src/app/app.component.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Creative Narrative References)
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript & Angular Signals Guide):
 *
 * 1. What is this file, and why does it exist?
 *    In Angular, a **Component** pairs two files together:
 *      - **The Template (`app.component.html`)**: The semantic HTML5 structure.
 *      - **The Component Class (`app.component.ts` — THIS FILE)**: Reactive state
 *        variables (`signal()`), derived selectors (`computed()`), client-side
 *        URL routing, View Transitions, keyboard focus management, and Light/Dark
 *        theme synchronization.
 *
 * 2. How does our 3-Tier "Listening Room" Information Architecture work?
 *    To give recruiters both instant `Cmd+F` scannability AND deep engineering
 *    documentation, `syncRouteFromPathname()` routes across **43 URLs**:
 *      - **Tier 1 (`/` — `'dossier'`)**: Complete all-in-one homepage dossier
 *        showing every card across all 5 sections for fast `Cmd+F` search.
 *      - **Tier 2 (`/<section>`)**: Five dedicated section landing hubs
 *        (`/web-apps`, `/case-studies`, `/build-team`, `/experience`, `/education`).
 *      - **Tier 3 (`/<section>/<slug>`)**: 37 individual deep-dive pages (`17`
 *        web apps + `6` case studies + `7` CI/CD tools + `4` career roles + `3`
 *        credentials) with sibling switcher pills and circular Prev/Next links!
 *
 * 3. Accessibility & Progressive Enhancement Highlights:
 *    - **Same-Document View Transitions + Heading Focus Handoff**: Uses
 *      `document.startViewTransition()` when supported (respecting OS
 *      `prefers-reduced-motion: reduce`) and focuses `#page-main-heading`
 *      (`tabindex="-1"`) after route transitions so screen readers announce
 *      the new `<h1>` heading immediately.
 *    - **Modifier-Key Safe Links**: Ctrl/Cmd-clicking or middle-clicking any
 *      internal link opens a native browser tab cleanly without interception.
 * =============================================================================
 */

import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';

import {
  ARCHITECTURAL_CASE_STUDIES,
  ArchitecturalCaseStudy,
  BUILD_TEAM_OVERVIEW,
  BUILD_TEAM_PROFILES,
  BuildTeamMember,
  DEVOPS_CONSTRUCTS,
  EDUCATION_CREDENTIALS,
  EXECUTIVE_PROFILE,
  EXPERIENCE_TIMELINE,
  EcosystemProperty,
  EducationEntry,
  ExperienceEntry,
  HIRING_PARAMETERS,
  POLYGLOT_ECOSYSTEM,
  PortfolioView,
  ROLE_LENSES,
  RoleLens,
  SECTION_LANDINGS
} from './data/portfolio.data.ts';

/**
 * Union type restricting color-scheme state to three valid string literals.
 */
export type ThemeMode = 'system' | 'light' | 'dark';

/**
 * Generic helper function computing circular `prev` and `next` neighbors in any
 * read-only list (`T[]`) using JavaScript's modulo (`%`) wrap-around arithmetic:
 * - `(idx - 1 + list.length) % list.length` wraps index `0` cleanly to the end.
 * - `(idx + 1) % list.length` wraps the final index cleanly back to `0`.
 */
function computeAdjacent<T>(
  list: readonly T[],
  current: T | null,
  getKey: (item: T) => string
): { prev: T; next: T } | null {
  if (!current || list.length === 0) {
    return null;
  }
  const currentKey = getKey(current);
  const idx = list.findIndex((item) => getKey(item) === currentKey);
  if (idx === -1) {
    return null;
  }
  const prevIdx = (idx - 1 + list.length) % list.length;
  const nextIdx = (idx + 1) % list.length;
  return {
    prev: list[prevIdx],
    next: list[nextIdx]
  };
}

/**
 * TypeScript helper interface describing the browser's View Transitions API
 * (`document.startViewTransition`), allowing clean feature-detection without `any`.
 */
interface ViewTransitionHandle {
  readonly finished: Promise<void>;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (updateCallback: () => void) => ViewTransitionHandle;
};

@Component({
  selector: 'mpr-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  // Inject Angular's safe `DOCUMENT` wrapper around the browser's `document` object.
  private readonly document = inject(DOCUMENT);

  /**
   * Reference to `<button #mobileMenuToggle>` in `app.component.html` so pressing
   * `Escape` while the mobile drawer is open returns keyboard focus to the trigger.
   */
  @ViewChild('mobileMenuToggle')
  private mobileMenuToggleRef?: ElementRef<HTMLButtonElement>;

  /*
   * ---------------------------------------------------------------------------
   * READ-ONLY DATASETS EXPOSED TO `app.component.html`
   * ---------------------------------------------------------------------------
   */
  protected readonly profile = EXECUTIVE_PROFILE;
  protected readonly sectionLandings = SECTION_LANDINGS;
  protected readonly roleLenses = ROLE_LENSES;
  protected readonly hiringParameters = HIRING_PARAMETERS;
  protected readonly ecosystemList = POLYGLOT_ECOSYSTEM;
  protected readonly caseStudiesList = ARCHITECTURAL_CASE_STUDIES;
  protected readonly devopsConstructs = DEVOPS_CONSTRUCTS;
  protected readonly experienceList = EXPERIENCE_TIMELINE;
  protected readonly educationList = EDUCATION_CREDENTIALS;
  protected readonly buildTeamOverview = BUILD_TEAM_OVERVIEW;
  protected readonly buildTeamProfiles = BUILD_TEAM_PROFILES;

  /*
   * ===========================================================================
   * REACTIVE ROUTING & FILTER STATE WITH ANGULAR SIGNALS (`signal` & `computed`)
   * ===========================================================================
   */

  /**
   * Tracks which of the 11 portfolio views (`/` dossier, 5 section landing hubs,
   * or 5 item detail templates) is currently active.
   */
  protected readonly activeView = signal<PortfolioView>('dossier');

  /**
   * Stores the URL slug of whichever individual item is currently being viewed
   * (e.g., `'raggiesoft-music'`, `'msicode-dfm-binary-ast-compiler'`, `'jenna'`,
   * `'old-dominion-university'`, or `'tidewater-community-college'`), or `null`
   * when viewing `/` or a section landing hub.
   */
  protected readonly activeItemSlug = signal<string | null>(null);

  /**
   * Helper Computed Signals for top-bar `aria-current="page"` highlighting:
   * Returns `true` when the visitor is on either a section's landing hub OR
   * one of its nested child detail pages!
   */
  protected readonly isWebAppsSection = computed(() => {
    const v = this.activeView();
    return v === 'web-apps-overview' || v === 'web-app-detail';
  });

  protected readonly isCaseStudiesSection = computed(() => {
    const v = this.activeView();
    return v === 'case-studies-overview' || v === 'case-study-detail';
  });

  protected readonly isBuildTeamSection = computed(() => {
    const v = this.activeView();
    return v === 'build-team-overview' || v === 'build-team-member';
  });

  protected readonly isExperienceSection = computed(() => {
    const v = this.activeView();
    return v === 'experience-overview' || v === 'experience-detail';
  });

  protected readonly isEducationSection = computed(() => {
    const v = this.activeView();
    return v === 'education-overview' || v === 'education-detail';
  });

  /**
   * Active detail item + circular Previous/Next neighbor Signals for all 5 sections:
   */
  protected readonly activeWebApp = computed<EcosystemProperty | null>(() => {
    if (this.activeView() !== 'web-app-detail') {
      return null;
    }
    const slug = this.activeItemSlug();
    return slug ? (this.ecosystemList.find((p) => p.id === slug) ?? null) : null;
  });

  protected readonly adjacentWebApps = computed(() =>
    computeAdjacent(this.ecosystemList, this.activeWebApp(), (p) => p.id)
  );

  protected readonly activeCaseStudy = computed<ArchitecturalCaseStudy | null>(() => {
    if (this.activeView() !== 'case-study-detail') {
      return null;
    }
    const slug = this.activeItemSlug();
    return slug ? (this.caseStudiesList.find((c) => c.id === slug) ?? null) : null;
  });

  protected readonly adjacentCaseStudies = computed(() =>
    computeAdjacent(this.caseStudiesList, this.activeCaseStudy(), (c) => c.id)
  );

  protected readonly activeMember = computed<BuildTeamMember | null>(() => {
    if (this.activeView() !== 'build-team-member') {
      return null;
    }
    const slug = this.activeItemSlug();
    return slug ? (this.buildTeamProfiles.find((m) => m.slug === slug) ?? null) : null;
  });

  protected readonly adjacentMembers = computed(() =>
    computeAdjacent(this.buildTeamProfiles, this.activeMember(), (m) => m.slug)
  );

  protected readonly activeExperience = computed<ExperienceEntry | null>(() => {
    if (this.activeView() !== 'experience-detail') {
      return null;
    }
    const slug = this.activeItemSlug();
    return slug ? (this.experienceList.find((e) => e.slug === slug) ?? null) : null;
  });

  protected readonly adjacentExperiences = computed(() =>
    computeAdjacent(this.experienceList, this.activeExperience(), (e) => e.slug)
  );

  protected readonly activeEducation = computed<EducationEntry | null>(() => {
    if (this.activeView() !== 'education-detail') {
      return null;
    }
    const slug = this.activeItemSlug();
    return slug ? (this.educationList.find((ed) => ed.slug === slug) ?? null) : null;
  });

  protected readonly adjacentEducation = computed(() =>
    computeAdjacent(this.educationList, this.activeEducation(), (ed) => ed.slug)
  );

  /**
   * Role-Lens Filter, Color Scheme, and Mobile Drawer Signals:
   */
  protected readonly activeLens = signal<RoleLens>('all');
  protected readonly themeMode = signal<ThemeMode>('system');
  protected readonly osPrefersDark = signal<boolean>(false);
  protected readonly mobileMenuOpen = signal<boolean>(false);

  protected readonly currentLensMeta = computed(() => {
    const selected = this.activeLens();
    return (
      this.roleLenses.find((lens) => lens.id === selected) ?? this.roleLenses[0]
    );
  });

  protected readonly filteredEcosystem = computed(() => {
    const lens = this.activeLens();
    return lens === 'all'
      ? this.ecosystemList
      : this.ecosystemList.filter((item) => item.lenses.includes(lens));
  });

  protected readonly filteredCaseStudies = computed(() => {
    const lens = this.activeLens();
    return lens === 'all'
      ? this.caseStudiesList
      : this.caseStudiesList.filter((study) => study.lenses.includes(lens));
  });

  protected readonly filteredExperience = computed(() => {
    const lens = this.activeLens();
    return lens === 'all'
      ? this.experienceList
      : this.experienceList.filter((exp) => exp.lenses.includes(lens));
  });

  protected readonly lensCounts = computed<Record<RoleLens, number>>(() => {
    const countFor = (lens: RoleLens): number => {
      if (lens === 'all') {
        return this.ecosystemList.length + this.caseStudiesList.length;
      }
      const ecoCount = this.ecosystemList.filter((p) =>
        p.lenses.includes(lens)
      ).length;
      const caseCount = this.caseStudiesList.filter((c) =>
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
   * Polite ARIA Live-Region status text read aloud when a Role-Lens button is clicked.
   */
  protected readonly filterAnnouncement = computed(() => {
    const meta = this.currentLensMeta();
    const sysCount = this.filteredEcosystem().length;
    const caseCount = this.filteredCaseStudies().length;
    const expCount = this.filteredExperience().length;
    return `Filter set to ${meta.label}. Displaying ${sysCount} production systems, ${caseCount} case studies, and ${expCount} experience records.`;
  });

  /*
   * ===========================================================================
   * LIFECYCLE INITIALIZATION (`ngOnInit`)
   * ===========================================================================
   */
  public ngOnInit(): void {
    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    // 1. Hydrate saved theme override from localStorage (guarded for private windows)
    try {
      const saved = win.localStorage.getItem('color-scheme');
      if (saved === 'light' || saved === 'dark') {
        this.themeMode.set(saved);
      }
    } catch {
      // Ignore storage access exceptions in sandboxed contexts
    }

    // 2. Track OS `prefers-color-scheme: dark` for the "System (Dark/Light)" button label
    if (typeof win.matchMedia === 'function') {
      const mediaQuery = win.matchMedia('(prefers-color-scheme: dark)');
      this.osPrefersDark.set(mediaQuery.matches);
      mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
        this.osPrefersDark.set(event.matches);
      });

      // Auto-close mobile navigation drawer if viewport widens to desktop (>= 48rem)
      const desktopQuery = win.matchMedia('(min-width: 48rem)');
      desktopQuery.addEventListener('change', (event: MediaQueryListEvent) => {
        if (event.matches && this.mobileMenuOpen()) {
          this.mobileMenuOpen.set(false);
        }
      });
    }

    // 3. Synchronize manual theme overrides across multiple open browser tabs
    win.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'color-scheme') {
        const nextMode: ThemeMode =
          event.newValue === 'light' || event.newValue === 'dark'
            ? event.newValue
            : 'system';
        this.applyThemeDomState(nextMode, false);
      }
    });

    // 4. Hydrate initial view from `window.location.pathname` and listen for Back/Forward
    this.syncRouteFromPathname(win.location.pathname);
    win.addEventListener('popstate', () => {
      this.syncRouteFromPathname(win.location.pathname);
    });
  }

  /*
   * ===========================================================================
   * CLIENT-SIDE SPA NAVIGATION, VIEW TRANSITIONS & FOCUS MANAGEMENT
   * ===========================================================================
   */

  /**
   * Navigates instantaneously between `/`, `/<section>`, and `/<section>/<slug>`
   * without full-page reloads—while preserving native browser behavior for
   * Cmd/Ctrl/Shift/middle clicks, animating cleanly with `document.startViewTransition`
   * when motion is allowed, and moving programmatic focus to `#page-main-heading`
   * so screen readers announce the new view!
   */
  protected navigateInternal(targetHref: string, event?: MouseEvent): void {
    if (
      event &&
      (event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0)
    ) {
      return;
    }

    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    const hashIndex = targetHref.indexOf('#');
    const pathPart =
      hashIndex >= 0 ? targetHref.slice(0, hashIndex) || '/' : targetHref;
    const hashPart = hashIndex >= 0 ? targetHref.slice(hashIndex + 1) : '';

    const currentNormalized =
      (win.location.pathname || '/').replace(/\/+$/, '') || '/';
    const targetNormalized = pathPart.replace(/\/+$/, '') || '/';

    if (currentNormalized === targetNormalized && hashPart) {
      this.closeMobileMenu();
      return;
    }

    event?.preventDefault();
    this.closeMobileMenu();

    win.history.pushState({}, '', targetHref);

    // Helper executed once the new DOM view is mounted: scrolls and routes focus
    // to `#page-main-heading` (`tabindex="-1"`) so keyboard & screen-reader users
    // never lose their place when the previous view's clicked link unmounts!
    const finalizeScrollAndFocus = (): void => {
      if (hashPart) {
        win.setTimeout(() => {
          const el = this.document.getElementById(hashPart);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 40);
      } else {
        win.scrollTo({ top: 0, behavior: 'auto' });
        win.setTimeout(() => {
          const mainHeading = this.document.getElementById('page-main-heading');
          mainHeading?.focus({ preventScroll: true });
        }, 20);
      }
    };

    const docWithVT = this.document as DocumentWithViewTransition;
    const prefersReducedMotion =
      typeof win.matchMedia === 'function' &&
      win.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Progressive enhancement: use Same-Document View Transitions when supported
    // and OS reduced-motion is NOT requested; otherwise update Signals immediately.
    if (
      typeof docWithVT.startViewTransition === 'function' &&
      !prefersReducedMotion &&
      currentNormalized !== targetNormalized
    ) {
      const transition = docWithVT.startViewTransition(() => {
        this.syncRouteFromPathname(targetNormalized);
      });
      transition.finished.finally(() => {
        finalizeScrollAndFocus();
      });
    } else {
      this.syncRouteFromPathname(targetNormalized);
      finalizeScrollAndFocus();
    }
  }

  /**
   * Resolves all 43 portfolio URL paths (`/`, 5 section hubs, and 37 item slugs)
   * into `activeView`, `activeItemSlug`, and `document.title` (WCAG 2.4.2).
   */
  private syncRouteFromPathname(rawPathname: string): void {
    const cleanPath = (rawPathname || '/').replace(/\/+$/, '') || '/';

    // 1. Live Web Application Ecosystem (`/web-apps` & `/web-apps/:slug`)
    if (cleanPath === '/web-apps') {
      this.activeView.set('web-apps-overview');
      this.activeItemSlug.set(null);
      this.document.title = this.sectionLandings.webApps.ogTitle;
    } else if (cleanPath.startsWith('/web-apps/')) {
      const slug = cleanPath.slice('/web-apps/'.length).toLowerCase();
      const matched = this.ecosystemList.find((p) => p.id === slug);
      if (matched) {
        this.activeView.set('web-app-detail');
        this.activeItemSlug.set(matched.id);
        this.document.title = matched.ogTitle;
      } else {
        this.activeView.set('web-apps-overview');
        this.activeItemSlug.set(null);
        this.document.title = this.sectionLandings.webApps.ogTitle;
      }

      // 2. Engineering & Accessibility Case Studies (`/case-studies` & `/case-studies/:slug`)
    } else if (cleanPath === '/case-studies') {
      this.activeView.set('case-studies-overview');
      this.activeItemSlug.set(null);
      this.document.title = this.sectionLandings.caseStudies.ogTitle;
    } else if (cleanPath.startsWith('/case-studies/')) {
      const slug = cleanPath.slice('/case-studies/'.length).toLowerCase();
      const matched = this.caseStudiesList.find((c) => c.id === slug);
      if (matched) {
        this.activeView.set('case-study-detail');
        this.activeItemSlug.set(matched.id);
        this.document.title = matched.ogTitle;
      } else {
        this.activeView.set('case-studies-overview');
        this.activeItemSlug.set(null);
        this.document.title = this.sectionLandings.caseStudies.ogTitle;
      }

      // 3. CI/CD & Infrastructure Suite (`/build-team` & `/build-team/:slug`)
    } else if (cleanPath === '/build-team') {
      this.activeView.set('build-team-overview');
      this.activeItemSlug.set(null);
      this.document.title =
        'CI/CD & Build Automation Suite | Michael P. Ragsdale';
    } else if (cleanPath.startsWith('/build-team/')) {
      const slug = cleanPath.slice('/build-team/'.length).toLowerCase();
      const matched = this.buildTeamProfiles.find((m) => m.slug === slug);
      if (matched) {
        this.activeView.set('build-team-member');
        this.activeItemSlug.set(matched.slug);
        this.document.title = matched.ogTitle;
      } else {
        this.activeView.set('build-team-overview');
        this.activeItemSlug.set(null);
        this.document.title =
          'CI/CD & Build Automation Suite | Michael P. Ragsdale';
      }

      // 4. Professional Experience (`/experience` & `/experience/:slug`)
    } else if (cleanPath === '/experience') {
      this.activeView.set('experience-overview');
      this.activeItemSlug.set(null);
      this.document.title = this.sectionLandings.experience.ogTitle;
    } else if (cleanPath.startsWith('/experience/')) {
      const slug = cleanPath.slice('/experience/'.length).toLowerCase();
      const matched = this.experienceList.find((e) => e.slug === slug);
      if (matched) {
        this.activeView.set('experience-detail');
        this.activeItemSlug.set(matched.slug);
        this.document.title = matched.ogTitle;
      } else {
        this.activeView.set('experience-overview');
        this.activeItemSlug.set(null);
        this.document.title = this.sectionLandings.experience.ogTitle;
      }

      // 5. Education & Credentials (`/education` & `/education/:slug`)
    } else if (cleanPath === '/education') {
      this.activeView.set('education-overview');
      this.activeItemSlug.set(null);
      this.document.title = this.sectionLandings.education.ogTitle;
    } else if (cleanPath.startsWith('/education/')) {
      const slug = cleanPath.slice('/education/'.length).toLowerCase();
      const matched = this.educationList.find((ed) => ed.slug === slug);
      if (matched) {
        this.activeView.set('education-detail');
        this.activeItemSlug.set(matched.slug);
        this.document.title = matched.ogTitle;
      } else {
        this.activeView.set('education-overview');
        this.activeItemSlug.set(null);
        this.document.title = this.sectionLandings.education.ogTitle;
      }

      // 6. Default Root All-in-One Recruiter Dossier (`/`)
    } else {
      this.activeView.set('dossier');
      this.activeItemSlug.set(null);
      this.document.title =
        'Michael P. Ragsdale | Full-Stack & Web Accessibility Engineer';
    }

    // Re-sync the shared cross-property top-bar dropdown if present on `window`
    const win = this.document.defaultView as
      | (Window & { initRaggieSoftNetworkMenu?: () => void })
      | null;
    if (win && typeof win.initRaggieSoftNetworkMenu === 'function') {
      win.setTimeout(() => win.initRaggieSoftNetworkMenu?.(), 30);
    }
  }

  /*
   * ===========================================================================
   * UI EVENT HANDLERS (MOBILE MENU, ESCAPE DISMISSAL, FILTER & THEME)
   * ===========================================================================
   */

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    if (this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscapeKey(): void {
    if (this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
      this.mobileMenuToggleRef?.nativeElement.focus();
    }
  }

  protected selectLens(lens: RoleLens): void {
    this.activeLens.set(lens);
  }

  protected setThemeMode(mode: ThemeMode): void {
    this.applyThemeDomState(mode, true);
  }

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
