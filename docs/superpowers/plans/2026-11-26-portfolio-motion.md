# Portfolio motion stories Implementation Plan

> For agentic workers: inline implementation, then a fresh code reviewer as required by requesting-code-review.

**Goal:** Deliver the approved homepage and four public-safe interactive engineering case presentations.
**Architecture:** Existing static Pages site plus shared scene UI and authored content; no backend.
**Tech Stack:** HTML, CSS, native JavaScript, SVG, Python build script and pytest static checks.
**Spec:** ../specs/2026-11-26-portfolio-motion-design.md

## Global constraints
Do not include internal data or local paths in shipped assets. Preserve legacy URLs. Keep the approved visual order and hero. Do not confuse explanatory interactions with real engineering or training results.

## Tasks
- [x] Add failing static acceptance for story routes, ordered sections and public-content boundary.
- [x] Integrate v5, make internal cards links, preserve catalogue and legacy anchors.
- [x] Build four five-scene stories with a shared accessible player and meaningful controls.
- [x] Run static checks and Chrome interaction/responsive verification, then independent review.
- [x] Prepare the final integration/deployment artifact and report exact deployment status.

## Review focus
Hash history vs keyboard focus; animation pause vs reduced motion; touch layouts; legacy anchors; links exposing private records or old unsupported TBE claims.

## Baseline
Five existing static tests pass. The complete pytest invocation cannot collect test_fontis_interactions.py because Playwright is not installed in the available Python. Browser verification for this change uses actual Chrome through CUA. Native managed worktree creation returned no operation ID or result; after waiting, Git confirmed no new worktree, so a separate named Git worktree was used.

## Result
Approved layout and all four stories implemented, reviewed, and verified locally. Deployment is separate from this implementation artifact. See ../../verification-2026-11-26.md for evidence and limits.
