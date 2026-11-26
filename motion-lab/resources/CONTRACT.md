# Equal production brief

You are one independent AI design/engineering team. Create one real executable entry, not a written concept alone. Do not inspect any other entry or coordinate design with competitors. Read your topic.json and this contract, plus the approved existing story if useful. Everything you need is local; no browser, external fetches, new dependencies, generated bitmap services, or private project files.

Deliver only `motion-lab/entries/<ID>/entry.js` and `rationale.json`.

## Module contract
Use plain ES module JavaScript:
```
export const id = 'P1';
export const title = 'Your concept title';
export const summary = 'One short English sentence';
export const translations = [['English label','한국어 라벨'], ...];
export const css = `...`;
export function render(phase = 0, choice = 'base', uid = 'P1') { return `<svg ...>...</svg>`; }
```
`phase` is 0..4: context, structure, explore, review, outcome. `choice` is the topic's supplied value. Return ONLY one full SVG, viewBox="0 0 720 460", role="img", accessible English aria-label. Shapes and labels must remain readable at 350px rendering width; use minimum ~16px labels, fewer words, no dense screen-like UI. No foreignObject, images, scripts, links or event attributes in SVG. Use meaningful distinct compositions between phases, not the same shape renamed five times. Any `<defs>` IDs must prefix the passed uid. Use short English copy with authored Korean translation pairs. All visible text and aria labels translated; universal formula/identifier labels can remain technical notation.

CSS must scope every selector with `.entry-<ID>` (put this class on SVG). Keyframes must prefix ID, e.g. P1-draw. Animate only inside `.animating .entry-<ID>`; set animation-play-state:var(--motion-play,running). Motion finite <=8s, no infinite iteration. Base unanimated CSS must show the complete informative artwork. `@media(prefers-reduced-motion:reduce)` disables motion. Use no CSS @import/external resources. No randomness, clocks, browser globals or DOM actions in render; render is a pure function (Node and browser).

Topic choice visibly changes something meaningful in phase2. Render chosen state directly; host rerenders on choice. The outer host is `.story-scene.is-active.animating` with CSS var --motion-play. Choice names/values come from topic resources.

Each entry has equal allowance: module <=32KB UTF-8; 5 phases; 1 main meaningful interaction; no network dependencies. Spend craft on visual hierarchy, shape/motion language, and comprehensible engineering behavior. Strong geometric illustrations are preferred to generic boxed dashboards. Do not reuse the current repetitive small-card/central-node template.

rationale.json contains: id, topic, title, concept (1 paragraph), metaphor, choreography (5 short strings), interaction, contributions (3 useful reusable features), limitations, resource_refs. Mark all diagram data illustrative, not performed engineering.
