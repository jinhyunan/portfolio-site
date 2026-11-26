# Existing portfolio language continuity

The user requests English-default content with English/Korean toggles throughout the existing portfolio, because following a project link currently switches abruptly to Korean. This extends the approved bilingual interface and deployment; no additional approval gate is required.

## Scope and constraints

- Cover every owned legacy HTML route, including case studies, onboarding/education material, guides and app interfaces.
- Reuse `portfolio-language` and the compact US/Korean controls. Preserve scene selection, form values, theme, playback and existing URLs.
- Author natural English and Korean translations; preserve claims, numerical results, limitations, source links and provenance.
- Do not translate executable code, identifiers, user-entered data or Spanish learning examples as if they were interface text. Prefer existing English meanings in the vocabulary data where available.
- Do not call paid/external model APIs or inspect credentials during verification.
- Serve static English for ordinary HTML content; translate dynamically rendered text without replacing interactive DOM subtrees.
- Prevent browser auto-translation from competing with the authored translations.
- Keep translation dictionaries per page to avoid loading the entire legacy site into every route.

## Work allocation

1. Root: shared loader/runtime, safe static HTML localization, route manifest, tests, integration, actual-browser checks and deployment.
2. Case-study translator: CCPP, construction-cost, permit presentation, FONTIS and LDW.
3. Editorial/education translator: archive, DocPilot, Maze presentation, Claude onboarding pages and group AI pages.
4. App/guide translator: permit playground, Maze replay, Neon, Spanish apps and recommendation guides/app.

Each translator owns only assigned HTML/app files and corresponding JSON dictionaries under `scripts/legacy-locales/`. Shared root runtime files are owned by root. JSON uses arrays of `[English, Korean]` pairs. Inline dynamic UI may call `window.portfolioI18n.t(text)` once initialized. Page-specific pairs are available to the common runtime. No worker commits or publishes.

## Integration and acceptance

- Review returned changes for scope and behavior; regenerate static English and per-page dictionaries.
- Check all internal links, language controls and English-copy coverage, plus inline JavaScript syntax and preservation of numerical evidence.
- Test representative static, presentation, dynamic-result and learning-app flows in actual Chrome in both languages, including mobile widths and retained state.
- A separate whole-change review follows integration. Fix material findings before deployment.
- Merge fast-forward, publish to the existing GitHub Pages main branch and verify production assets and language continuity.
