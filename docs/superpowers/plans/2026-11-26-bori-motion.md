# Bori motion introduction implementation plan

**Goal:** Deliver the bilingual game-screen introduction at jinhyun-an.dev/bori/.
**Architecture:** Static standalone page, shared portfolio language preference, isolated playback controller, optimized copies of original game captures.
**Tech Stack:** HTML, CSS, JavaScript modules, WebP, original MP4.
**Spec:** `docs/superpowers/specs/2026-11-26-bori-motion-design.md`

## Constraints and review focus
Keep original game assets and existing portfolio behavior. Do not assert Android acceptance or learning outcomes. Check seeking at the end, offscreen/hidden resume, reduced motion, translated control states, mobile text overflow and missing media.

## Tasks
- [x] Write and run behavioral controller tests: elapsed time, pause/resume, hidden/offscreen gates, finite completion/replay, seek clamps and reduced-motion default.
- [x] Implement the actual playback controller; convert selected source captures without alteration and record hashes.
- [x] Build the six-scene presentation and both languages; link the existing Bori card to the page. Preserve its original project narrative.
- [x] Run controller and existing static tests, inspect actual Chrome playback/language/mobile layouts, and review the complete change.
- [ ] Commit only scoped changes, publish through existing GitHub Pages, verify live bytes and visible result.

## Execution record
- Baseline: 15 existing tests pass on 7508abf.
- Native worktree creation did not return; stopped the waiting call and used Git worktree fallback. Primary checkout remains unchanged.
- Implementation choices above are the agent's judgment within the requested task, not a separate user design approval.
