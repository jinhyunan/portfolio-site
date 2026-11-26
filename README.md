# Jinhyun An — Portfolio

Static portfolio for `jinhyun-an.dev`.

- `index.html`: selected work, beginning with the lane-detection foundation.
- `archive.html`: the earlier public project catalogue; existing detail URLs are preserved.
- `work/{pid,calc,ontology,tbe}/`: five-scene interactive engineering stories.
- `scripts/build_stories.py`: authored story text and illustrative SVGs. Edit this source and regenerate the four pages.
- `work/story.css` and `work/story.js`: shared presentation layout and controls.

The engineering stories explain the workflow using authored examples. They contain no internal source documents, datasets or actual engineering values.

## Preview and regenerate

```sh
python3 scripts/build_stories.py
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. No package installation or runtime backend is needed for the site.

## Checks

```sh
python3 -m pytest tests/test_motion_stories.py tests/test_site_links.py tests/test_fontis_static.py -q
node --check work/story.js
node --check motion.js
```

The existing `test_fontis_interactions.py` additionally requires Python Playwright and its browser runtime. Browser checks for the renewal are recorded in `docs/verification-2026-11-26.md`.

The stories support chapter buttons, previous/next, arrow/Page/Home/End keys, fragment links, browser history, pause/replay and reduced motion. Keyboard shortcuts do not intercept controls. Without JavaScript, all scenes remain readable.
