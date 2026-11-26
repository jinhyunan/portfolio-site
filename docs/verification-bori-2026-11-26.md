# Bori motion introduction verification

## Change
- Adds `/bori/` and replaces only the two homepage Bori modal triggers with links to it. Other project cards, detail modals and existing language behavior are preserved.
- 36-second, six-chapter introduction, using real Godot game screens and the original silent character-animation render. English/Korean captions remain HTML; game text stays unchanged.
- Play/pause/replay, timeline seeking, chapter stills, enlarged modal view, viewport/tab suspension and reduced-motion fallback.
- Source and output hashes: `bori/media/provenance.json`. Media total: 2,988,205 bytes including responsive copies and provenance.

## Verification
- `node --test tests/bori-playback.test.mjs`: 5 passed. Covers play intent, offscreen/hidden pause, finite completion/replay, seek boundaries and reduced-motion defaults.
- Existing static regression selection: 15 passed (`test_languages.py`, `test_motion_stories.py`, `test_site_links.py`, `test_fontis_static.py`, `test_legacy_localization.py`).
- `node --check` for the new scripts and `git diff --check`: pass.
- All local page links/media files resolve; every shipped media hash matches its manifest. No-JavaScript scene accessibility checked in the serialized HTML.
- Whole `python3 -m pytest -q` cannot collect `test_fontis_interactions.py` because this environment does not have Python Playwright. The same dependency was absent in the baseline; no full-suite claim is made.

## Actual Chrome
- Both languages, all six scenes at 320/390/430px: 36 checks with no horizontal overflow, clipped captions or broken images.
- Both languages, all six scenes at 705/1024/1440px: an initial 705px English matching-scene caption overflow was found. Added a minimum stage height at that breakpoint and verified the affected scene fits (440px stage, 250px text block). All 12 language/scene combinations at 705px then passed; see `tablet-regression.json`.
- Original motion clip loads; actual playback reaches 36 seconds and stops with Replay. Timeline End, Home, replay, chapter selection and live language switching work.
- A paused seek returns the original video to the matching time; verified slider 0 and video currentTime 0 after returning to the first chapter.
- Enlarged view uses a native modal dialog; opening/closing preserves the stage and playback controls; Escape closes and returns focus to the expand button. Native browser fullscreen was not reliably exposed by the test browser, so enlarged viewing uses this consistent in-page presentation.
- Playback time and video stop when the stage drops below the viewport threshold. Homepage Bori navigation and saved language were verified.
- No errors/warnings in the inspected console. Screenshots and layout observations are in `docs/bori-verification/`.
- These are desktop Chrome viewport checks, not physical-phone/Android tests. OS reduced-motion behavior was not toggled live; the state controller is tested and CSS has the matching fallback. JavaScript-off reading is a static verification, not an actual disabled-JavaScript browser session.

## Independent review
A fresh read-only reviewer found a paused-video seek mismatch and inaccessible no-JavaScript scenes. Both were corrected and checked. Automatic translation had also changed the browser's page language, so this bilingual page explicitly opts out of browser translation.

## Publication
Prepared for the existing GitHub Pages deployment from `main`, with its existing domain and audience.
