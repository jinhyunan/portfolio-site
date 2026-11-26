"""English static output and the shared, authored English/Korean dictionary."""
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
PAIRS = json.loads((ROOT / 'scripts/translations.json').read_text())
ENGLISH = {ko: en for en, ko in PAIRS}


def english(text):
    clean = text.strip()
    return text.replace(clean, ENGLISH.get(clean, clean), 1) if clean else text


class EnglishHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []

    def handle_starttag(self, tag, attrs):
        raw = self.get_starttag_text()
        if tag == 'html':
            raw = re.sub(r'lang="[^"]+"', 'lang="en"', raw)
            if 'translate="no"' not in raw:
                raw = raw[:-1] + ' translate="no">'
        def translate_attribute(match):
            return match[1] + '="' + escape(english(unescape(match[2])), quote=True) + '"'
        raw = re.sub(r'(aria-label|title|content|data-explanation)="([^"]*)"', translate_attribute, raw)
        self.parts.append(raw)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        self.parts.append(f'</{tag}>')

    def handle_data(self, data):
        self.parts.append(escape(english(data), quote=False))

    def handle_decl(self, decl):
        self.parts.append(f'<!{decl}>')

    def handle_comment(self, data):
        self.parts.append(f'<!--{data}-->')


def localize_page(html, prefix=''):
    parser = EnglishHTML()
    parser.feed(html)
    result = ''.join(parser.parts)
    if 'name="google"' not in result:
        result = result.replace('</head>', '<meta name="google" content="notranslate"></head>', 1)
    if 'class="lang-switch"' not in result:
        switch = '''<div class="lang-switch" role="group" aria-label="Language" hidden><button type="button" data-lang="en" aria-label="English" title="English" aria-pressed="true"><span aria-hidden="true">🇺🇸</span></button><button type="button" data-lang="ko" aria-label="Korean" title="Korean" aria-pressed="false"><span aria-hidden="true">🇰🇷</span></button></div>'''
        result = result.replace('</header>', switch + '</header>', 1)
        result = result.replace('</head>', f'<link rel="stylesheet" href="{prefix}i18n.css"></head>', 1)
        if prefix:
            result = result.replace('<script src="../story.js" defer>', f'<script src="{prefix}i18n-data.js" defer></script><script src="{prefix}i18n.js" defer></script><script src="../story.js" defer>', 1)
        else:
            result = result.replace('<script src="projects.js">', '<script src="i18n-data.js"></script><script src="i18n.js"></script><script src="projects.js">', 1)
    return result


def write_dictionary():
    (ROOT / 'i18n-data.js').write_text('// Generated from scripts/translations.json.\nwindow.PORTFOLIO_TRANSLATIONS = ' + json.dumps(PAIRS, ensure_ascii=False, separators=(',', ':')) + ';\n')
