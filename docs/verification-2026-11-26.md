# Portfolio renewal verification — 2026-11-26

## Automated checks

- Nine static pytest checks passed: story contracts and public-content boundary, homepage ordering, existing internal links, and preserved FONTIS content contracts.
- All five delivered JavaScript files passed `node --check`.
- Regenerating the four story pages produced identical SHA-256 hashes.
- `git diff --check` passed.
- Full pytest collection could not run because Python Playwright is absent in the available environment. This was also true on the unmodified baseline. No claim of a complete browser-test-suite pass is made.

## Actual Chrome checks

- Home and all four story exploration scenes checked at viewport widths 320, 390, 430 and 1440 px. No horizontal overflow. Visible story buttons had a minimum height of 44 px.
- All 20 story scenes traversed using next buttons; previous/next correctly disable at the boundaries.
- P&ID alternate connection, Calc increased resistance, Ontology evidence perspective and TBE linked-evidence choices changed their visual state and explanation.
- Arrow and Home navigation, chapter controls, fragment entry, browser Back, heading focus, pause/replay and the skip-link/Back regression checked.
- All five retained public/personal modals opened with the intended content. Escape returned focus to the triggering card.
- The homepage Calc link opened the new standalone detail. No warnings or errors were reported in the inspected story console.
- These are desktop Chrome viewport checks, not physical-phone acceptance tests.

## Independent code review

A separate read-only reviewer found two issues: the inherited continuous decorative homepage animations and a skip-link history edge case. Both were corrected. Decorations are now finite and begin when visible; hidden-tab and explicit pause rules are retained. The story skip link focuses the active heading without adding a history entry.

The reviewer also executed the actual hero script in an isolated Node DOM harness, checking finite completion, replay, offscreen/hidden pause, explicit pause and the reduced-motion guard. This is deterministic control logic evidence, not an OS-level reduced-motion browser test. No-JavaScript reading order was checked in static HTML; JavaScript was not disabled in the live browser.

New public files omit internal records and source identifiers. The previous TBE catalogue card has been replaced with a conceptual story link and no accuracy claim. Legacy detail pages remain unchanged.

## Delivery boundary

Prepared on the isolated `codex/portfolio-motion-20261126` branch. Local implementation and review are complete; this record does not assert production deployment.
