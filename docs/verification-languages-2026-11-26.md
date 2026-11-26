# English default and Korean switch — 2026-11-26

Scope: the renewed homepage and four new engineering stories. Existing archive and legacy detail content is unchanged.

English is the static default. A compact US/Korean flag selector sits at the right of each header. Authored translations cover body copy, SVG labels, accessibility names, condition explanations, the five home modals and motion controls. Language choice is saved locally, with English fallback if storage is unavailable. Text and attribute updates preserve the active scene, selected conditions and focus.

## Verification

- Eleven static tests pass, including English static output and named language controls on all five pages.
- JavaScript syntax checks pass. The independent reviewer found no dictionary collisions across 384 pairs, no missing translations for rendered modal strings, and no differences after regenerating the story pages.
- Actual Chrome: English initial entry; Korean selection followed by navigation; English and Korean reload persistence; English → Korean within the selected alternate Calc scene; Back/Forward language persistence; fully translated English training modal.
- All five pages were checked in both languages at 320, 390, 430 and 1440 px: 40 combinations, with no horizontal document overflow or offscreen flag group. These are viewport checks, not physical-phone testing.
- Chrome's automatic translation initially rewrote the authored English after reload. The pages now opt out with `translate="no"` and the Google translation meta tag. Subsequent reloads retained authored English and the correct selected flag.
- The full pre-existing pytest suite still requires the unavailable Python Playwright dependency for `test_fontis_interactions.py`; the eleven passing tests are the static suite. The new interaction behavior was checked in actual Chrome through the browser tool.

The final local preview is left in English. This change does not deploy the public domain.
