"""Create an inspectable side-by-side overview of the four final compositions."""
from pathlib import Path
import json

ROOT=Path(__file__).resolve().parents[1]
NAMES={'pid':'P&ID Agent','calc':'Calc Agent','ontology':'Engineering Ontology','tbe':'TBE Review & Reply'}

def build():
    art=json.loads((ROOT/'work/motion/static.json').read_text())
    cards=[]
    for slug,title in NAMES.items():
        svg=art[slug][2].replace(f'final-{slug}-2',f'overview-{slug}')
        cards.append(f'<article><a href="../work/{slug}/"><h2>{title}<span>Explore ↗</span></h2>{svg}</a><a class="studies" href="./?topic={slug}">Five proposals and panel results ↗</a></article>')
    html='''<!doctype html><html lang="en" translate="no"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="google" content="notranslate"><title>Four final motion compositions — Jinhyun An</title><link rel="stylesheet" href="../work/motion/themes.css"><style>
*{box-sizing:border-box}body{margin:0;background:#f0f0e9;color:#233b32;font:14px/1.6 system-ui,sans-serif}header,main,footer{max-width:1500px;margin:auto;padding:25px 45px}header{display:flex;justify-content:space-between;border-bottom:1px solid #bcc8b8}a{color:inherit}header>a{font:25px Georgia,serif;text-decoration:none}header span{font:11px ui-monospace,monospace;letter-spacing:2px}h1{font:44px/1.12 Georgia,serif;font-weight:400;margin:5px 0 14px}.intro{max-width:800px;color:#53645a}.grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px}article{border:1px solid #bdc9ba;border-radius:8px;overflow:hidden;background:#f9f8f0}article>a:first-child{display:block;text-decoration:none}h2{font:25px Georgia,serif;display:flex;justify-content:space-between;align-items:center;padding:18px 22px;margin:0}h2 span{font:11px system-ui,sans-serif}svg{display:block;width:100%;height:auto}.studies{display:block;padding:13px 22px;font-size:12px;border-top:1px solid #d0d5c9}footer{font-size:12px;color:#53645a}a:focus-visible{outline:3px solid #af652e;outline-offset:3px}@media(max-width:700px){header,main,footer{padding:20px}.grid{grid-template-columns:1fr}h1{font-size:34px}header span{display:none}}
</style></head><body><header><a href="../">jinhyun an</a><span>MOTION / FINAL COMPOSITIONS</span></header><main><h1>Four subjects.<br>Four visual languages.</h1><p class="intro">Twenty independent proposals, five complete AI panel ballots, and four newly composed finals. Each final combines and reworks useful contributions; none is an unchanged winning entry.</p><div class="grid">'''+''.join(cards)+'''</div></main><footer>All graphics are authored illustrative examples. Panel votes are AI design judgments, not human user testing.</footer></body></html>'''
    (ROOT/'motion-lab/finals.html').write_text(html)

if __name__=='__main__':build()
