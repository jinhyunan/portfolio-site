# Motion competition implementation plan

> **For agentic workers:** Follow the user's explicit independent-team competition and synthesis method. Root integrates; entries own disjoint folders.

**Goal:** Replace the four similar engineering stories with distinct, meaningful motion synthesized from twenty proposals.
**Architecture:** Dependency-free ES modules render authored SVG. Shared preview hosts provide identical scene/choice/playback controls; the final story player keeps existing navigation and bilingual behavior. Static default SVG is generated into HTML.
**Tech Stack:** Native SVG, CSS, JavaScript modules, existing Python builder.
**Spec:** docs/superpowers/specs/2026-11-26-motion-competition-design.md

## Global constraints
Five actual independent entries per topic; all twenty included in each jury ballot. English base with authored Korean pairs. No confidential data or fabricated engineering performance. Existing URLs, section order, legacy pages and controls stay intact. No external dependencies or paid generation service.

## Review focus
- Distinct geometry and motion, not color-only variants.
- Choices must visibly alter topic-relevant states without implying validated engineering results.
- SVG IDs must remain unique when five scenes or gallery items coexist.
- Pause/replay/reduced-motion/hidden-tab behavior must cover new animations.
- Longer Korean/English labels and mobile widths must remain readable.

## Tasks
- [x] Resource packs and equal entry contract in motion-lab/resources; create five independent teams per topic.
- [x] Twenty modules in motion-lab/entries/<ID>/entry.js and rationale.json; syntax/render checks and actual preview gallery.
- [x] Five independent complete ballots in motion-lab/ballots; validate complete coverage/rankings; aggregate to results.json.
- [x] Write four synthesis briefs recording contributions from all entries; implement new modules in work/motion/.
- [x] Integrate static and dynamic rendering, chapter transitions, homepage previews and bilingual copy; retain source boundaries.
- [x] Run static/regression checks and actual browser mobile/desktop interaction review; independent final review.
- [ ] Commit, deploy through main and verify production hashes and visual behavior. Keep gallery and voting provenance inspectable.
