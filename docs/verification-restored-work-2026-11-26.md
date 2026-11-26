# Published-project restoration verification

Restores nine existing projects to the homepage: CCPP Tools MCP, FONTIS, DocPilot, Maze Crawler, Watt Agent, Claude for Teams, Privacy-aware LLM Masking, Neon Dive and Native Spanish Pro. CCPP has a substantial engineering card before the data section; personal apps remain below the recent engineering and data work.

## Local checks

- Existing Python static/link/language/motion suite: 18 passed.
- `node --check i18n-data.js` and `git diff --check`: passed.
- `node scripts/verify_final_motion.mjs`: all 45 existing motion states passed, with no untranslated strings.
- Independent source review: all 57 added English/Korean pairs round-trip against the merged dictionaries; 49 local homepage resources, links and anchors resolve; no duplicate IDs.
- Anonymous HTTPS requests to the linked CCPP, Watt Agent, masking and single-file apps repositories: HTTP 200.

## Observed browser checks

Chrome at 320, 390 and 430 CSS pixels, in English and Korean: all nine restored project cards present, no horizontal page overflow and no clipped card paragraphs/headings/response values. A Spanish-cover overlap found at 320 pixels was corrected and visually rechecked.

The homepage links opened the CCPP case study, Neon Dive and Native Spanish Pro. The CCPP `pump_npsha` case-study tab and Korean toggle were exercised. Spanish displayed its existing API-key prompt in both languages. No key was entered and no paid generation or engineering calculation was run. The Neon game entry loaded; gameplay was not retested.

The original case studies and applications remain unchanged. Historical engineering test counts on those pages are not new execution results from this restoration.

Private browser evidence is stored outside the published repository under `portfolio-motion-review-20261126/restored-work/`, including `mobile-layouts.json` and `spanish-320.png`.
