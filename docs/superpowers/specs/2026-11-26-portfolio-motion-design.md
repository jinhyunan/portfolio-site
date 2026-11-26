# Portfolio renewal and engineering stories

User-approved visual baseline: v5 forest-green/ivory portfolio, with lane recognition first as Foundation, then P&ID/Calc/Ontology, data/model training, and personal projects.

The latest instruction asks for a site-ready implementation and interactive motion-graphic detail presentations for work based on internal data. Use abstract, authored examples to explain the work; do not publish internal datasets, project identifiers, source documents, actual operating values, run IDs, or raw screenshots.

## Approach
Bring the approved homepage into the static GitHub Pages repository. Keep existing public learning and foundational pages at their URLs. Give P&ID, Calc and Ontology dedicated five-scene pages and a related TBE story. Keep the previous project catalogue at archive.html, replacing its over-specific TBE description and unsupported accuracy wording with a link to the abstract TBE story. Preserve old homepage fragments as aliases.

The alternatives are a modal-only update (does not satisfy the requested presentation detail) and rebuilding all legacy pages (unnecessary). Use standalone static pages and one shared motion player, retaining the existing visual system.

## Story shape
Five scenes: problem/context, structure, a meaningful interactive comparison, human judgment, outcome and current limits. Each page has a distinct graphical metaphor: connected P&ID, relative pump curves, a semantic graph and a requirements/reply/evidence board. Authored examples contain no actual engineering values. Label them as explanatory examples, not executed designs.

## Interaction and accessibility
Previous/next, named chapter buttons, keyboard Arrow/Page/Home/End navigation, stable scene hashes and browser back/forward. Do not intercept keys from buttons/links/form controls. One timed motion per scene, replay and pause; no forced slide advance. Pause when offscreen or the tab is hidden; reduced-motion starts static. Native buttons activate meaningful choices and reveal explanations. No animation is required to read the content. Without JavaScript all five scenes remain available.

## Delivery and verification
Changes live on an isolated branch. Review the complete deployable artifact before publication. No runtime backend or new dependency. Check HTML links, public-content boundary, JS syntax, all story navigation/choices, 320/390/430/1440 layouts, keyboard and history. Preserve untouched legacy detail files. Separate historical source evidence, local browser checks and production deployment status.
