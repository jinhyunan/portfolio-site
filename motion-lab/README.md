# Motion design competition

This is the public design record for four new portfolio compositions: P&ID, calculation, ontology, and technical bid review.

Twenty independent AI production agents created five executable proposals per subject from the same subject brief and resource allowance. Five independent AI jurors then assessed **all twenty proposals**, without reading each other's ballots. These are agent design judgments, not human votes or user research.

- `resources/`: approved illustrative facts, synthetic values, equal production contract, jury rubric and final synthesis contract.
- `entries/`: twenty original SVG/CSS modules and their design rationales. These remain available for comparison, including limitations identified by the jury.
- `ballots/`: five complete independent ballots, each covering every submission.
- `votes.json`: reproducible Borda totals (5/4/3/2/1 within a subject) and mean rubric scores.
- `results.json`: votes plus how each original proposal contributed to the new final composition.
- `../work/motion/`: four newly composed finals, their provenance, and generated static/bilingual assets.

The rubric weights semantic fidelity 35, visual distinction 25, choreography 20, and readability/usability 20. Ranking informs synthesis; it does not select a finished design. Every final accounts for all five proposals and substantially reworks contributions from at least three.

Jurors distinguish observed Chrome still compositions from motion inferred from the authored CSS. Root browser review additionally checks the integrated final animations, interaction states, translations and responsive layouts. The graphics are illustrative; they contain no confidential project data and make no engineering approval claim.

## Reproduce

```sh
node scripts/verify_motion.mjs --complete
node scripts/verify_final_motion.mjs
python3 scripts/aggregate_motion_votes.py
python3 scripts/integrate_motion.py
python3 scripts/build_motion_overview.py
python3 -m pytest tests/test_motion_competition.py tests/test_legacy_localization.py tests/test_languages.py tests/test_motion_stories.py tests/test_site_links.py tests/test_fontis_static.py -q
```

Serve the repository root with a static HTTP server and open `motion-lab/` for all proposals, controls, ballots and contribution records. Open `motion-lab/finals.html` for the final four compositions together.
