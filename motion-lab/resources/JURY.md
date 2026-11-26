# Independent complete-panel ballot

Five AI jurors review all twenty submissions, five for each subject. This is design evaluation by agents, not human-user research. Do not see another juror's ballot before submitting yours. Use the four contact sheets and each entry's rationale, SVG/CSS source, and verification metrics. Distinguish observed static composition from motion inferred from authored CSS; do not claim to have watched animation you did not inspect in a browser.

Score each entry on four fixed dimensions: semantic fidelity 0–35, recognizable visual distinction 0–25, choreography 0–20, readability/usability 0–20. Rank all five entries within each topic, with no omissions or tied positions. Ranking may reflect your stated lens; still apply the fixed score maxima. Borda aggregation uses 5/4/3/2/1; total scores and ranks are both reported. Evaluate all entries honestly; no required winner.

Deliver ONLY `motion-lab/ballots/J<N>.json`. Shape:
```
{
  "juror":"J1", "lens":"...", "evidence":"what you actually inspected",
  "topics": {
    "pid": {
      "ranking":["P1","P2","P3","P4","P5"],
      "scores":[{"id":"P1","semantic":30,"distinction":20,"choreography":17,"usability":16,"reason":"short concrete observation"}],
      "synthesis":"a new coherent direction, not selecting a complete submission",
      "contributions":{"P1":"use or reject this specific feature, with reason", "P2":"...", "P3":"...", "P4":"...", "P5":"..."}
    },
    "calc":{}, "ontology":{}, "tbe":{}
  }
}
```
All score arrays must have exactly five complete entries. All four topics are required. Scores must be your actual judgment, not copied from code or another ballot. Report contradictions, tiny labels, decorative motion, engineering misinterpretation and color-only distinction. A coherent final may adopt and reinterpret features from several entries; it must not be declared ready merely because a proposal ranks first.
