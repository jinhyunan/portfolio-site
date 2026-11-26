# Synthesis, not selection

The user explicitly wants a new final composition informed by all five competing proposals for the subject. Read all five entry modules/rationales, the five independent ballots and aggregate votes. The highest rank does not authorize copying that entry unchanged.

Own `work/motion/<topic>.js` and `<topic>.rationale.json` only. Follow the entry module interface (id/title/summary/translations/css/render), with a new id/class: FPID, FCALC, FONT or FTBE. Five phases 0..4, choices exactly from the topic resource, deterministic SVG viewBox 720 460 and namespaced IDs. New CSS keyframes/prefixes; no imports, dependencies or external assets. <=40KB module. Keep render pure; HTML embeds a static copy for no-JS reading. Host rerenders every phase after a choice, so carry that choice consistently through review/outcome as relevant.

Construct new geometry/compositions and a coherent choreography. Reuse useful low-level symbols if appropriate, not a whole competitor's phase. At least three substantial contributions should be reworked into the final. Account for every one of the five entries, including ideas rejected to preserve coherence. A design that simply renames the winning entry is incomplete.

Make the four subjects recognizable without a heading/color cue. P&ID: connected engineering topology, identity and change. Calc: physical operating behavior and a correct relative response. Ontology: named/typed relations, instance versus type, provenance and pending applicability. TBE: document alignment, evidence absence, draft versus human judgment. Use the panel evidence, not these phrases as a required layout.

The production shell already provides the title, explanatory prose, illustrative disclaimer and controls. Use the SVG space primarily for artwork. Avoid repeating a large multi-line headline inside every graphic. Prefer short, readable labels (roughly 20px or larger; fewer labels); at 350px display width fine-print is not useful. Avoid decorative microtext and duplicated boilerplate. English strings need authored Korean pairs; all labels/aria descriptions covered. Text must not collide in either language.

Animate only inside `.animating .entry-<FINALID>`, and use animation-play-state:var(--motion-play,running). Finite motion <=8 seconds; unanimated and reduced-motion render must be complete and understandable. Avoid unprefixed legacy class names `piece`, `wire`, `flow`, `operating`, `base-only`, `alternate-only`. No script/event attributes/foreignObject in SVG. Use SVG-safe escaped text.

Final rationale shape:
```
{
 "topic":"pid", "title":"...", "synthesis":"Plain-English description of the new final composition.",
 "contributions":{"P1":"Adopted/reworked or rejected feature and why","P2":"...","P3":"...","P4":"...","P5":"..."},
 "new_composition":"How this is structurally different from every original entry",
 "interaction":"What changes, with honest engineering limits",
 "limitations":["..."], "source_refs":["... actual entry/vote paths ..."]
}
```
Do not edit production pages, shared builders/runtime or other final modules. Root handles integration, browser/mobile review and deployment. No browser, extra agents, commits or private source access. Validate syntax, 5×choices pure renders, unique UID references and English/Korean coverage; stop after those meaningful checks and hand off. User has authorized the full competition-to-final workflow.
