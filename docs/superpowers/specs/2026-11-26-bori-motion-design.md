# Bori motion introduction

Requested: add a high-quality introduction centered on real game screens to Bori on jinhyun-an.dev, in English and Korean.

Implementation choice: a 36-second HTML/CSS/JS editorial reel with a short original Godot motion clip and unaltered game captures. A fixed MP4 would require separate renders for every language and aspect ratio. Pure recreated UI would obscure the actual product. The hybrid keeps real screens intact and captions live.

Six chapters: forest, tracing, assembly, listening, matching/rhythm, word exploration. Use the existing portfolio palette with cinematic dark-green framing, generous imagery, restrained zoom/dissolve, and readable captions outside the game screen. Native game text stays Korean; the surrounding introduction and controls switch language with the existing persistent language selector.

Deliver `/bori/` and connect both existing Bori card triggers. Retain the existing project context and alpha verification limits. Provide play/pause/replay, timeline seeking, chapter selection, keyboard-native controls, finite playback, hidden/offscreen pause, reduced-motion fallback, and a readable no-JavaScript state. Do not change the game or unrelated portfolio content.

Use only real Godot renders and QA captures; no private child records, imagined gameplay or educational efficacy claims. Store asset provenance. Verify desktop and 320/390/430px views, language switching, controls, and production assets.
