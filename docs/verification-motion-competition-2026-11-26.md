# Motion competition verification

## Delivered design record

- Twenty independently authored AI proposals: P1–P5, C1–C5, O1–O5 and T1–T5. Each production agent had the same subject brief, interface and 32 KB module allowance, and was instructed not to inspect competing entries.
- Five independent AI jurors each reviewed all twenty sources/rationales and actual Chrome contact sheets or individual stills. Ballots explicitly distinguish static observation from CSS-inferred motion. These are not human votes or user testing.
- Borda and weighted scores are reproducible from the five complete ballots. Each subject's Borda total is 75. No entry was installed as an unchanged winner.
- Four new final modules account for all twenty original contributions. Existing project order, story URLs, English default, Korean toggle and legacy content remain.

## Automated checks

- `node scripts/verify_motion.mjs --complete`: all 20 submissions present; deterministic phase/choice rendering, module allowances, SVG interface and forbidden-content checks.
- `node scripts/verify_final_motion.mjs`: all 45 final phase/choice states; deterministic output, scoped unique IDs/references, SVG restrictions, visible/ARIA translation coverage, finite CSS motion, and reversible per-page/home dictionaries.
- `python3 scripts/aggregate_motion_votes.py`: complete five-juror, twenty-entry coverage, score bounds and exact Borda totals.
- The integrator is idempotent across the homepage, four story pages and seven generated motion assets.
- Eighteen existing/new static regression tests passed: `test_motion_competition.py`, `test_legacy_localization.py`, `test_languages.py`, `test_motion_stories.py`, `test_site_links.py` and `test_fontis_static.py`.
- Independent code review found two material issues: prototype controls were not translated, and two Ontology terms shared the same reverse translation. Both were fixed and rechecked. A further merged-home dictionary check now protects cross-subject terms as well.

## Actual Chrome checks

- Original proposals: 200 default-condition states (20 entries × five phases × English/Korean), plus all twenty individual Explore stills and four contact sheets. No outer SVG text-bound overflow was observed. This was a desktop check, not proof of mobile legibility or semantic correctness.
- Integrated finals: 170 mobile states. At 390 px, all 45 phase/choice states were viewed in both languages; at 320 and 430 px, all twenty phases were viewed in both languages using bypass/higher resistance/evidence/linked conditions. No document or outer SVG text-bound overflow was observed. Representative 320/390 px screenshots were visually inspected.
- Each final's replay created its own named running animations; pause changed every active named animation to paused. Browser Back returned to Explore with the selected condition retained.
- Main previews exist for all four subjects. Shared pause/replay and Korean/English labels work. At 320/390/430 px, the homepage has no horizontal overflow and both motion controls retain 44 px height.
- The prototype's full UI now translates; its selected language persists on reload. The corrected Ontology Evidence and supported-by relation survive an actual English → Korean → English roundtrip.
- The comparison gallery displays five proposals, five ballot links, five score rows and a new-synthesis explanation per subject.

Reduced-motion behavior and no-JavaScript fallbacks were inspected in source/static output. OS-level reduced-motion emulation, assistive technology, physical devices and human comprehension were not claimed. No private engineering data, real vendor judgments or engineering acceptance results are included.

Production deployment and served-file parity are checked after integration into the current remote main branch.
