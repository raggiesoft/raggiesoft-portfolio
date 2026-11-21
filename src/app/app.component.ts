/**
 * =============================================================================
 * File: src/app/app.component.ts
 * Application: Michael P. Ragsdale — Engineering & Section 508 Portfolio
 * Domain: https://michaelpragsdale.com
 * License: MIT License (Code) | CC BY-SA 4.0 (Creative Narrative References)
 * =============================================================================
 * READ-ALONG TEACHING OVERVIEW (100-Level JavaScript Guide):
 *
 * 1. What is this file, and why does it exist?
 *    In modern web frameworks like Angular, a **Component** is the building
 *    block of a user interface. A component pairs two things together:
 *      - **The Template (`app.component.html`)**: What the page *looks like*
 *        (the semantic HTML structure).
 *      - **The Component Class (`app.component.ts` — THIS FILE)**: How the page
 *        *thinks and behaves* (the interactive state variables, filtering math,
 *        URL navigation, keyboard shortcuts, and theme-switching logic).
 *
 * 2. What feeds into this file?
 *    - Structured, read-only data arrays and objects from `./data/portfolio.data.ts`
 *      (our profile details, 16 web apps, 5 case studies, CI/CD tool profiles,
 *      work history, and education).
 *    - Browser Web APIs (`window.location`, `window.history`, `localStorage`,
 *      and `window.matchMedia`) accessed safely through Angular's `DOCUMENT` token.
 *
 * 3. What visible UI and interactions does this file power?
 *    - **Client-Side Single-Page App (SPA) Routing**: Switches seamlessly between
 *      three views (`/` main portfolio, `/build-team` CI/CD overview, and
 *      `/build-team/:slug` individual script specs) without full-page reloads,
 *      while keeping the browser's Back/Forward buttons and `<title>` in sync.
 *    - **Interactive Recruiter Role-Lens Filter**: Uses Angular Signals
 *      (`signal()` and `computed()`) to filter web apps, case studies, and work
 *      history by engineering discipline and announce updates to screen readers.
 *    - **Tri-State Color Scheme Manager (`system` | `light` | `dark`)**: Follows
 *      the visitor's OS Dark/Light preference automatically by default, while
 *      allowing manual overrides saved in `localStorage` and synced across tabs.
 *    - **Accessible Mobile Navigation Drawer**: Opens/closes on narrow screens,
 *      auto-closes if the browser widens to desktop size, and returns keyboard
 *      focus to the hamburger `<button>` when dismissed with the `Escape` key.
 * =============================================================================
 */

/*
 * =============================================================================
 * SECTION 1: ES MODULE IMPORTS
 * =============================================================================
 * Just like in `main.ts`, we pull in only the specific tools and data we need.
 */

// `DOCUMENT` is Angular's safe wrapper token around the browser's global `document`
// object (the root of the DOM tree). Injecting `DOCUMENT` instead of referencing
// global `window`/`document` directly makes components easier to test and safer
// in server-side or build-time environments where a browser window might not exist.
import { DOCUMENT } from '@angular/common';

// Core Angular building blocks from `@angular/core`:
// - `ChangeDetectionStrategy`: Lets us opt into high-performance `OnPush` rendering.
// - `Component`: Decorator that turns a plain TypeScript class into an Angular UI component.
// - `ElementRef`: Wrapper around a real browser DOM element (used here to focus a `<button>`).
// - `HostListener`: Decorator that listens for global browser events (like pressing `Escape`).
// - `OnInit`: TypeScript interface for Angular's `ngOnInit()` startup lifecycle method.
// - `ViewChild`: Grabs a reference to a named HTML element (`#mobileMenuToggle`) in our template.
// - `computed`: Creates a read-only Signal that automatically recalculates from other Signals.
// - `inject`: Pulls a service/token (like `DOCUMENT`) from Angular's Dependency Injection system.
// - `signal`: Creates a reactive state variable that notifies Angular whenever its value changes.
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

// Import our strongly typed portfolio datasets and TypeScript types from `portfolio.data.ts`.
// Keeping data in `portfolio.data.ts` keeps this component focused purely on UI behavior!
import {
  ARCHITECTURAL_CASE_STUDIES,
  BUILD_TEAM_OVERVIEW,
  BUILD_TEAM_PROFILES,
  BuildTeamMember,
  DEVOPS_CONSTRUCTS,
  EDUCATION_CREDENTIALS,
  EXECUTIVE_PROFILE,
  EXPERIENCE_TIMELINE,
  HIRING_PARAMETERS,
  POLYGLOT_ECOSYSTEM,
  ROLE_LENSES,
  RoleLens
} from './data/portfolio.data';

/*
 * =============================================================================
 * SECTION 2: TYPESCRIPT STRING LITERAL UNION TYPES
 * =============================================================================
 * In standard JavaScript, a variable holding a theme name or view name would just
 * be any `string`—meaning a typo like `'drak'` instead of `'dark'` wouldn't be
 * caught until something broke in the browser.
 *
 * In TypeScript, the vertical bar `|` means **OR** (a "Union Type").
 * - `ThemeMode` can ONLY ever be `'system'`, `'light'`, or `'dark'`.
 * - `PortfolioView` can ONLY ever be `'dossier'`, `'build-team-overview'`, or
 *   `'build-team-member'`.
 * Any other string causes an immediate compile-time error!
 */
export type ThemeMode = 'system' | 'light' | 'dark';
export type PortfolioView = 'dossier' | 'build-team-overview' | 'build-team-member';

/*
 * =============================================================================
 * SECTION 3: THE `@Component` DECORATOR (CONNECTING HTML + TYPESCRIPT)
 * =============================================================================
 * In TypeScript, an `@Decorator({...})` placed right above a `class` attaches
 * metadata instructions telling Angular how to wire that class into the web page:
 *
 * - `selector: 'mpr-root'`: Defines the custom HTML tag name `<mpr-root></mpr-root>`
 *   used inside `src/index.html`. ("mpr" stands for Michael P. Ragsdale.)
 * - `standalone: true`: Uses modern Angular Standalone architecture (no legacy
 *   `app.module.ts` boilerplate required).
 * - `templateUrl: './app.component.html'`: Points to the companion HTML file
 *   that renders this component's visual markup.
 * - `changeDetection: ChangeDetectionStrategy.OnPush`: Tells Angular to skip
 *   unnecessary DOM checks and only re-render when an input or Signal updates.
 */
@Component({
  selector: 'mpr-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  /*
   * ---------------------------------------------------------------------------
   * CLASS PROPERTIES & ACCESS MODIFIERS (`private`, `protected`, `public`, `readonly`)
   * ---------------------------------------------------------------------------
   * Quick TypeScript Class Guide for 100-Level JS Readers:
   * - `private`: Only code *inside* this `AppComponent` class can read/call it.
   * - `protected`: Code inside `AppComponent` AND bindings inside `app.component.html`
   *   can read/call it (ideal for template variables and click handlers!).
   * - `public`: Accessible everywhere (required by Angular for `ngOnInit()`).
   * - `readonly`: Prevents accidentally overwriting the property reference itself
   *   with `=` after initialization (similar to `const` for class fields).
   */

  // Grab a safe reference to the browser's `document` object via Dependency Injection.
  private readonly document = inject(DOCUMENT);

  /**
   * `@ViewChild('mobileMenuToggle')` connects this TypeScript property to the
   * `<button #mobileMenuToggle>` element in `app.component.html`.
   *
   * - Why the question mark `?` (`mobileMenuToggleRef?`)?
   *   Before Angular finishes rendering the HTML template for the first time,
   *   this reference is `undefined`. Adding `?` tells TypeScript: "This property
   *   might be `undefined` early on, so remind me to check before calling `.focus()`!"
   * - Accessibility Purpose (WCAG 2.1 AA / Section 508 Web):
   *   When a keyboard user opens the mobile menu and presses `Escape` to close it,
   *   returning focus to the hamburger `<button>` ensures their keyboard cursor
   *   is never stranded on a hidden element.
   */
  @ViewChild('mobileMenuToggle')
  private mobileMenuToggleRef?: ElementRef<HTMLButtonElement>;

  /*
   * ---------------------------------------------------------------------------
   * STATIC DATA REFERENCES EXPOSED TO `app.component.html`
   * ---------------------------------------------------------------------------
   * Angular HTML templates cannot directly `import` constants from external `.ts`
   * files; they can only read properties attached to their component class (`this`).
   * Assigning our imported read-only datasets to `protected readonly` fields here
   * lets `app.component.html` render `{{ profile.fullName }}`, `@for (edu of educationCredentials; ...)`, etc.
   */
  protected readonly profile = EXECUTIVE_PROFILE;
  protected readonly roleLenses = ROLE_LENSES;
  protected readonly hiringParameters = HIRING_PARAMETERS;
  protected readonly devopsConstructs = DEVOPS_CONSTRUCTS;
  protected readonly educationCredentials = EDUCATION_CREDENTIALS;
  protected readonly buildTeamOverview = BUILD_TEAM_OVERVIEW;
  protected readonly buildTeamProfiles = BUILD_TEAM_PROFILES;

  /*
   * ===========================================================================
   * SECTION 4: REACTIVE STATE WITH ANGULAR SIGNALS (`signal()` & `computed()`)
   * ===========================================================================
   * How Angular Signals work (Plain-English Mental Model):
   *
   * 1. Writable `signal(initialValue)`:
   *    Think of a `signal` as a smart box holding a value:
   *    - To READ what's inside, call it like a zero-argument function: `this.activeLens()`.
   *      Calling it also tells Angular: "Whoever called me depends on my value!"
   *    - To WRITE a new value, call `.set(newValue)` or `.update(oldVal => newVal)`.
   *      Every HTML binding or `computed()` formula that read this signal will
   *      automatically refresh!
   *
   * 2. Derived `computed(() => ...)`:
   *    Think of `computed()` like a formula cell in a spreadsheet (`=SUM(A1:A5)`).
   *    You give it an arrow function that reads one or more Signals and returns
   *    a calculated result. Angular caches (memoizes) that result and only
   *    re-runs the math when an underlying Signal actually changes!
   */

  /**
   * Writable Signal tracking which top-level SPA page view is currently shown:
   * - `'dossier'`             -> `/` (Main Portfolio & Resume Dossier)
   * - `'build-team-overview'` -> `/build-team` (CI/CD Automation Suite Overview)
   * - `'build-team-member'`   -> `/build-team/:slug` (Individual CLI/Server Spec)
   */
  protected readonly activeView = signal<PortfolioView>('dossier');

  /**
   * Writable Signal storing the URL slug of the currently viewed CI/CD module
   * (for example `'jenna'` when visiting `/build-team/jenna`), or `null` when
   * we are on `/` or `/build-team`. Notice the union type `<string | null>`.
   */
  protected readonly activeMemberSlug = signal<string | null>(null);

  /**
   * Computed Signal: Looks up the full `BuildTeamMember` object matching
   * `activeMemberSlug()`.
   *
   * JavaScript Concepts Used Inside:
   * - `if (!slug) { return null; }`: Early return ("guard clause") when no slug is active.
   * - `Array.prototype.find((member) => member.slug === slug)`: Loops through
   *   `buildTeamProfiles` and returns the first object where `member.slug === slug`
   *   (or `undefined` if no match exists).
   * - `?? null`: The **Nullish Coalescing Operator** (`??`). If `.find(...)`
   *   returns `undefined`, `?? null` converts it cleanly into `null`.
   */
  protected readonly activeMember = computed<BuildTeamMember | null>(() => {
    const slug = this.activeMemberSlug();
    if (!slug) {
      return null;
    }
    return (
      this.buildTeamProfiles.find((member) => member.slug === slug) ?? null
    );
  });

  /**
   * Computed Signal: Calculates the "Previous" and "Next" CI/CD module links at
   * the bottom of `/build-team/:slug` pages, wrapping around in a continuous loop!
   *
   * How the Modulo (`%`) Wrap-Around Trick Works in JavaScript:
   * - Suppose `list.length` is `7` (indices `0` through `6`).
   * - Moving forward (`nextIdx`): `(idx + 1) % 7`. When `idx` is `6` (the last item),
   *   `(6 + 1) % 7` equals `7 % 7`, which has remainder `0`—wrapping back to the start!
   * - Moving backward (`prevIdx`): `(idx - 1 + list.length) % list.length`. Adding
   *   `list.length` before `%` avoids `-1 % 7` (which stays negative in JavaScript!).
   *   When `idx` is `0`, `(0 - 1 + 7) % 7` equals `6 % 7` = `6` (the last item)!
   */
  protected readonly adjacentMembers = computed<{
    prev: BuildTeamMember;
    next: BuildTeamMember;
  } | null>(() => {
    const current = this.activeMember();
    if (!current) {
      return null;
    }
    const list = this.buildTeamProfiles;
    const idx = list.findIndex((m) => m.slug === current.slug);
    if (idx === -1) {
      return null;
    }
    const prevIdx = (idx - 1 + list.length) % list.length;
    const nextIdx = (idx + 1) % list.length;
    return {
      prev: list[prevIdx],
      next: list[nextIdx]
    };
  });

  /**
   * Writable Signal: Currently selected Recruiter Role-Lens filter button.
   * Starts at `'all'` so hiring managers see every project and case study immediately.
   */
  protected readonly activeLens = signal<RoleLens>('all');

  /**
   * Writable Signal: Current color scheme mode (`'system'`, `'light'`, or `'dark'`).
   * Defaults to `'system'` so CSS `light-dark()` follows the visitor's OS theme automatically.
   */
  protected readonly themeMode = signal<ThemeMode>('system');

  /**
   * Writable Signal: Tracks whether the visitor's operating system currently
   * prefers Dark Mode (`true`) or Light Mode (`false`). Used strictly to display
   * helpful text like `"System (Dark)"` or `"System (Light)"` inside the UI button!
   */
  protected readonly osPrefersDark = signal<boolean>(false);

  /**
   * Writable Signal: Tracks whether the mobile hamburger menu drawer is open
   * (`true`) or closed (`false`) on phone-sized viewports (`< 48rem` / `768px`).
   */
  protected readonly mobileMenuOpen = signal<boolean>(false);

  /**
   * Computed Signal: Finds the full `RoleLensOption` object (label + description)
   * for whichever Role-Lens button is currently selected, falling back to index `0` (`'all'`).
   */
  protected readonly currentLensMeta = computed(() => {
    const selected = this.activeLens();
    return (
      this.roleLenses.find((lens) => lens.id === selected) ?? this.roleLenses[0]
    );
  });

  /**
   * Computed Signal: Returns the subset of our 16 live web properties matching
   * the active Role-Lens filter.
   *
   * How `.filter()` and `.includes()` work together:
   * - `POLYGLOT_ECOSYSTEM.filter((item) => ...)` creates a brand-new array
   *   containing ONLY the items where the callback returns `true` (never mutating
   *   the original `POLYGLOT_ECOSYSTEM` array).
   * - `item.lenses.includes(lens)` checks whether that property's `lenses` array
   *   (e.g., `['architecture', 'accessibility']`) contains the chosen `lens`.
   */
  protected readonly filteredEcosystem = computed(() => {
    const lens = this.activeLens();
    if (lens === 'all') {
      return POLYGLOT_ECOSYSTEM;
    }
    return POLYGLOT_ECOSYSTEM.filter((item) => item.lenses.includes(lens));
  });

  /**
   * Computed Signal: Returns the subset of Engineering & Section 508 Web Case
   * Studies matching the currently selected Role-Lens filter.
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
   * Computed Signal: Returns the subset of chronological employment history
   * entries matching the currently selected Role-Lens filter.
   */
  protected readonly filteredExperience = computed(() => {
    const lens = this.activeLens();
    if (lens === 'all') {
      return EXPERIENCE_TIMELINE;
    }
    return EXPERIENCE_TIMELINE.filter((exp) => exp.lenses.includes(lens));
  });

  /**
   * Computed Signal: Pre-calculates the numeric badge counts shown inside each
   * Role-Lens filter button (combining matching web properties + case studies).
   *
   * TypeScript Utility Type Note:
   * `Record<RoleLens, number>` tells TypeScript this returned object MUST have
   * a numeric property for EVERY single member of `RoleLens` (`all`, `architecture`,
   * `accessibility`, `'data-etl'`, and `devops`). Note `'data-etl'` is wrapped
   * in quotes because JavaScript identifiers with a hyphen require string keys!
   */
  protected readonly lensCounts = computed<Record<RoleLens, number>>(() => {
    // Helper function scoped inside `computed()` to count matches for one lens.
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
   * Computed Signal: Builds a polite plain-English status sentence spoken aloud
   * by screen readers (JAWS, NVDA, VoiceOver) via `<div aria-live="polite">` in
   * `app.component.html` whenever a user clicks a Role-Lens filter button.
   *
   * Uses an ES6 **template literal** (backticks `` `...` `` with `${...}`
   * expressions) so dynamic counts read naturally without messy `+` concatenation.
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
   * SECTION 5: COMPONENT LIFECYCLE & BROWSER API HYDRATION (`ngOnInit`)
   * ===========================================================================
   * Angular calls `ngOnInit()` automatically ONCE right after initializing our
   * component. This is where we connect our Signals to live browser APIs:
   * `localStorage`, `window.matchMedia`, `storage` events, and URL routing.
   */
  public ngOnInit(): void {
    // `document.defaultView` is the standard DOM property returning `window`
    // (or `null` in headless/non-browser environments). Guarding `if (!win)`
    // ensures we never crash if `window` is absent.
    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    // 1. Hydrate saved theme preference from `localStorage` (if the user previously
    //    chose explicit 'light' or 'dark' mode).
    //    Why `try { ... } catch`? In strict browser privacy modes or sandboxed
    //    iframes, touching `localStorage` can throw a `SecurityError` exception.
    //    Catching it gracefully ensures the portfolio still loads cleanly!
    try {
      const saved = win.localStorage.getItem('color-scheme');
      if (saved === 'light' || saved === 'dark') {
        this.themeMode.set(saved);
      }
    } catch {
      // Ignore storage access exceptions in restricted browsing contexts
    }

    // 2. Observe the operating system's `prefers-color-scheme: dark` media query.
    //    Notice we ONLY update `osPrefersDark` (for the "System (Dark/Light)" button
    //    text)—we NEVER overwrite a user's manually chosen Light/Dark override!
    if (typeof win.matchMedia === 'function') {
      const mediaQuery = win.matchMedia('(prefers-color-scheme: dark)');
      this.osPrefersDark.set(mediaQuery.matches);
      mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
        this.osPrefersDark.set(event.matches);
      });
    }

    // 3. Cross-Tab Theme Synchronization (`window` `'storage'` event):
    //    The browser fires `'storage'` in Tab B whenever Tab A modifies
    //    `localStorage`. Listening here keeps all open `michaelpragsdale.com`
    //    tabs in visual sync! We pass `false` as the second argument to
    //    `applyThemeDomState` because `localStorage` was already updated by Tab A.
    win.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'color-scheme') {
        const nextMode: ThemeMode =
          event.newValue === 'light' || event.newValue === 'dark'
            ? event.newValue
            : 'system';
        this.applyThemeDomState(nextMode, false);
      }
    });

    // 4. Responsive Mobile Menu Cleanup (`(min-width: 48rem)` = `768px`):
    //    If a user opens the mobile hamburger menu on a narrow window or portrait
    //    tablet and then rotates/widens the window into desktop layout, we reset
    //    `mobileMenuOpen` back to `false` so desktop state stays clean.
    if (typeof win.matchMedia === 'function') {
      const desktopQuery = win.matchMedia('(min-width: 48rem)');
      desktopQuery.addEventListener('change', (event: MediaQueryListEvent) => {
        if (event.matches && this.mobileMenuOpen()) {
          this.mobileMenuOpen.set(false);
        }
      });
    }

    // 5. Initial URL Route Synchronization:
    //    Read `window.location.pathname` (for example `/`, `/build-team`, or
    //    `/build-team/jenna`) so deep-linked visits render the exact right view!
    this.syncRouteFromPathname(win.location.pathname);

    // 6. Browser Back / Forward Button Support (`popstate` event):
    //    Whenever the visitor clicks the browser's Back or Forward button after
    //    an internal `history.pushState` navigation, `'popstate'` fires and we
    //    re-sync `activeView` and `activeMemberSlug` to match the URL bar.
    win.addEventListener('popstate', () => {
      this.syncRouteFromPathname(win.location.pathname);
    });
  }

  /*
   * ===========================================================================
   * SECTION 6: CLIENT-SIDE HISTORY API NAVIGATION & ROUTE PARSING
   * ===========================================================================
   */

  /**
   * Handles clicks on internal portfolio links (`/`, `/#case-studies`,
   * `/build-team`, `/build-team/:slug`) using the HTML5 **History API**
   * (`window.history.pushState`) so view transitions happen instantaneously
   * without re-downloading HTML, CSS, or JavaScript.
   *
   * Crucial Web Usability & Accessibility Detail (Modifier-Key Guard):
   * Look at the very first `if` block below: if the user held Cmd (`metaKey` on
   * macOS), Ctrl (`ctrlKey` on Windows/Linux), Shift, Alt, or clicked with their
   * middle mouse wheel (`event.button !== 0` — `0` is a normal left-click), we
   * `return` immediately WITHOUT calling `event.preventDefault()`. That lets the
   * browser open the link in a new tab or window just like any native `<a>` link!
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

    // Split `targetHref` (e.g. `"/#case-studies"`) into its URL path (`"/"`)
    // and optional `#` section anchor ID (`"case-studies"`).
    const hashIndex = targetHref.indexOf('#');
    const pathPart =
      hashIndex >= 0 ? targetHref.slice(0, hashIndex) || '/' : targetHref;
    const hashPart = hashIndex >= 0 ? targetHref.slice(hashIndex + 1) : '';

    // Strip any trailing slashes (e.g. `"/build-team/"` -> `"/build-team"`)
    // while keeping root `"/"` intact so path comparisons are deterministic.
    const currentNormalized =
      (win.location.pathname || '/').replace(/\/+$/, '') || '/';
    const targetNormalized = pathPart.replace(/\/+$/, '') || '/';

    // If we are already on the target route and clicking an in-page `#anchor`
    // link, close the mobile menu (if open) and let native browser anchor
    // scrolling jump smoothly to that section.
    if (currentNormalized === targetNormalized && hashPart) {
      this.closeMobileMenu();
      return;
    }

    // Otherwise, prevent a full-page browser reload (`?.` is Optional Chaining,
    // safely skipping `.preventDefault()` if `event` was omitted).
    event?.preventDefault();
    this.closeMobileMenu();

    // Update the browser's URL address bar and history stack without reloading,
    // then update our Angular Signals (`activeView` / `activeMemberSlug`).
    win.history.pushState({}, '', targetHref);
    this.syncRouteFromPathname(targetNormalized);

    // After Angular renders the new view, scroll either to the requested `#hash`
    // element (after a tiny 40ms tick so the new DOM section exists) or to `top: 0`.
    if (hashPart) {
      win.setTimeout(() => {
        const el = this.document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 40);
    } else {
      win.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Maps a URL pathname (`'/'`, `'/build-team'`, or `'/build-team/:slug'`) to
   * our `activeView` and `activeMemberSlug` Signals, and updates `document.title`.
   *
   * Why updating `this.document.title` matters for WCAG 2.4.2 (Page Titled):
   * In a Single-Page Application, screen readers announce the page `<title>`
   * and users rely on browser tab titles to tell pages apart. Updating
   * `document.title` on every route transition keeps assistive tech informed.
   */
  private syncRouteFromPathname(rawPathname: string): void {
    const cleanPath = (rawPathname || '/').replace(/\/+$/, '') || '/';

    if (cleanPath === '/build-team') {
      this.activeView.set('build-team-overview');
      this.activeMemberSlug.set(null);
      this.document.title =
        'CI/CD & Build Automation Suite | Michael P. Ragsdale';
    } else if (cleanPath.startsWith('/build-team/')) {
      // Extract everything after `'/build-team/'` (e.g., `'jenna'`) and match
      // case-insensitively against `buildTeamProfiles`.
      const slug = cleanPath.slice('/build-team/'.length).toLowerCase();
      const matched = this.buildTeamProfiles.find((m) => m.slug === slug);
      if (matched) {
        this.activeView.set('build-team-member');
        this.activeMemberSlug.set(matched.slug);
        this.document.title = matched.ogTitle;
      } else {
        // Graceful fallback if an unknown `/build-team/xyz` slug is requested.
        this.activeView.set('build-team-overview');
        this.activeMemberSlug.set(null);
        this.document.title =
          'CI/CD & Build Automation Suite | Michael P. Ragsdale';
      }
    } else {
      this.activeView.set('dossier');
      this.activeMemberSlug.set(null);
      this.document.title =
        'Michael P. Ragsdale | Full-Stack & Web Accessibility Engineer';
    }

    // Re-initialize the shared RaggieSoft Network top-bar script (loaded with
    // `defer` from `assets.raggiesoft.com` in `index.html`) if present on `window`.
    // Notice the TypeScript intersection type `Window & { initRaggieSoftNetworkMenu?: () => void }`,
    // which tells TypeScript about that custom global helper function safely.
    const win = this.document.defaultView as
      | (Window & { initRaggieSoftNetworkMenu?: () => void })
      | null;
    if (win && typeof win.initRaggieSoftNetworkMenu === 'function') {
      win.setTimeout(() => win.initRaggieSoftNetworkMenu?.(), 30);
    }
  }

  /*
   * ===========================================================================
   * SECTION 7: INTERACTIVE UI EVENT HANDLERS (MENU, KEYBOARD, FILTER & THEME)
   * ===========================================================================
   */

  /**
   * Flips `mobileMenuOpen` between `true` and `false` when the hamburger button
   * is clicked. `.update((open) => !open)` reads the current boolean (`open`)
   * and returns its logical opposite (`!open`).
   */
  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  /**
   * Explicitly closes the mobile navigation drawer when a mobile navigation
   * link is clicked so the newly scrolled section is immediately visible.
   */
  protected closeMobileMenu(): void {
    if (this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
    }
  }

  /**
   * Section 508 Web / WCAG 2.1 AA Keyboard Dismissal (`Escape` Key):
   * `@HostListener('document:keydown.escape')` listens for the `Escape` key
   * anywhere on the page. If the mobile menu drawer is currently open, it
   * closes the drawer AND moves keyboard focus straight back to the hamburger
   * `<button>` (`mobileMenuToggleRef`) that opened it.
   */
  @HostListener('document:keydown.escape')
  protected onEscapeKey(): void {
    if (this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
      this.mobileMenuToggleRef?.nativeElement.focus();
    }
  }

  /**
   * Invoked by `(click)="selectLens(lens.id)"` in `app.component.html`.
   * Updating this single `activeLens` Signal automatically triggers every
   * dependent `computed()` Signal (`filteredEcosystem`, `filteredCaseStudies`,
   * `filteredExperience`, `currentLensMeta`, and `filterAnnouncement`)!
   */
  protected selectLens(lens: RoleLens): void {
    this.activeLens.set(lens);
  }

  /**
   * Invoked by the System / Light / Dark buttons in `app.component.html`.
   * Updates both the live DOM attributes and `localStorage` (`persistToStorage = true`).
   */
  protected setThemeMode(mode: ThemeMode): void {
    this.applyThemeDomState(mode, true);
  }

  /**
   * Synchronizes three browser mechanisms whenever the color scheme changes:
   * 1. Our Angular `themeMode` Signal (updates `aria-pressed` on the 3 buttons).
   * 2. `<meta name="color-scheme">` + `<html data-theme="...">` (drives CSS
   *    `light-dark()`, native browser scrollbars, and dual-portrait visibility
   *    in `src/styles.css`).
   * 3. `window.localStorage` (remembers explicit `'light'` or `'dark'` choices
   *    across future visits, or deletes the key when returning to `'system'`).
   */
  private applyThemeDomState(mode: ThemeMode, persistToStorage: boolean): void {
    this.themeMode.set(mode);
    const meta = this.document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]'
    );
    const root = this.document.documentElement;

    if (mode === 'system') {
      // Return control to the operating system (`light dark` allows CSS
      // `light-dark()` and `@media (prefers-color-scheme)` to follow OS settings).
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
      // Lock `<meta name="color-scheme">` and `<html data-theme="...">` to the
      // visitor's explicit `'light'` or `'dark'` selection.
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
