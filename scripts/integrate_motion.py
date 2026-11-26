"""Integrate static final compositions into the existing public portfolio."""
from pathlib import Path
import json
import re
import subprocess

ROOT=Path(__file__).resolve().parents[1]


def build():
    subprocess.run(['node','scripts/build_motion.mjs'],cwd=ROOT,check=True)
    subprocess.run(['python3','scripts/build_stories.py'],cwd=ROOT,check=True)
    markup=json.loads((ROOT/'work/motion/static.json').read_text())
    home=ROOT/'index.html'; html=home.read_text()
    for slug in ['pid','calc','ontology']:
        # Cards have exactly one visual anchor before their descriptive copy.
        pattern=r'(<article\b[^>]*id="'+slug+r'-card"[^>]*>)(<a\b[^>]*class="[^"]*project-art[^\"]*"[^>]*>)(.*?)(</a>)'
        def replace(match):
            opening=match[2]
            opening=re.sub(r'class="[^"]*"','class="project-art topic-preview"',opening)
            opening=re.sub(r' data-motion-topic="[^"]*"','',opening)
            opening=opening[:-1]+f' data-motion-topic="{slug}">'
            return match[1]+opening+markup[slug][2].replace(f'final-{slug}-2',f'home-{slug}')+match[4]
        html,count=re.subn(pattern,replace,html,count=1,flags=re.S)
        if count!=1:raise ValueError(f'Cannot locate {slug} home visual')
    if 'data-project-motion-controls' not in html:
        control='<div class="topic-motion-controls" data-project-motion-controls><button class="topic-replay" type="button" data-toggle-project-motion aria-pressed="false">Pause project motion</button><button class="topic-replay" type="button" data-replay-project-motion>Replay project motion</button></div>'
        html=html.replace('<article class="project reveal" id="pid-card">',control+'<article class="project reveal" id="pid-card">',1)
    pattern=r'(<a class="related-story[^\"]*"[^>]*>)(.*?)(</a>)'
    def related(match):
        opening=match[1].replace('class="related-story reveal"','class="related-story reveal has-motion"')
        content=re.sub(r'<span class="related-art".*?</span>','',match[2],flags=re.S)
        return opening+f'<span class="related-art" data-motion-topic="tbe">'+markup['tbe'][2].replace('final-tbe-2','home-tbe')+'</span>'+content+match[3]
    html,count=re.subn(pattern,related,html,count=1,flags=re.S)
    if count!=1:raise ValueError('Cannot locate related TBE story')
    for asset in ['work/motion/themes.css','work/motion-layout.css']:
        if f'href="{asset}"' not in html:html=html.replace('</head>',f'<link rel="stylesheet" href="{asset}"></head>',1)
    if 'src="work/motion/home.i18n.js"' not in html:html=html.replace('<script src="i18n.js">','<script src="work/motion/home.i18n.js"></script><script src="i18n.js">',1)
    if 'src="work/home-motion.js"' not in html:html=html.replace('</body>','<script type="module" src="work/home-motion.js"></script></body>',1)
    home.write_text(html)


if __name__=='__main__':build()
