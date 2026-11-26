"""Safe static HTML localization and shared authored dictionaries."""
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
PAIRS = json.loads((ROOT / 'scripts/translations.json').read_text())
ATTRIBUTES = ('aria-label', 'title', 'content', 'placeholder', 'alt', 'data-explanation', 'data-tip', 'data-lab', 'data-title')
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())


def normalize(text):
    return ' '.join(text.split())


def replace_copy(text, translated):
    # Keep layout whitespace and authored inline boundaries without growing spaces on reruns.
    leading = re.match(r'^\s*', text)[0] or re.match(r'^\s*', translated)[0]
    trailing = re.search(r'\s*$', text)[0] or re.search(r'\s*$', translated)[0]
    return leading + translated.strip() + trailing


def english(text):
    clean = normalize(text)
    lookup = {normalize(ko): en for en, ko in PAIRS}
    return replace_copy(text, lookup[clean]) if clean in lookup else text


class EnglishHTML(HTMLParser):
    def __init__(self, pairs=None):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.stack = []
        self.lookup = {}
        for en, ko in PAIRS if pairs is None else pairs:
            self.lookup[normalize(ko)] = en
            self.lookup[normalize(en)] = en
        self.option = None

    def translate(self, text):
        target = self.lookup.get(normalize(text))
        return replace_copy(text, target) if target is not None else text

    def skipped(self):
        if any(tag in {'script', 'style', 'textarea'} or 'data-no-translate' in attrs or 'contenteditable' in attrs for tag, attrs in self.stack):
            return True
        return any(tag in {'pre', 'code'} for tag, _ in self.stack) and not any('data-i18n-copy' in attrs for _, attrs in self.stack)

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        raw = self.get_starttag_text()
        if tag not in VOID:
            self.stack.append((tag, values))
        if tag == 'html':
            raw = re.sub(r'\s+lang\s*=\s*([\"\']).*?\1', '', raw, flags=re.I)
            raw = re.sub(r'\s+translate\s*=\s*([\"\']).*?\1', '', raw, flags=re.I)
            raw = raw[:-1] + ' lang="en" translate="no">'
        if not any(name in {'script', 'style'} or 'data-no-translate' in props or 'contenteditable' in props for name, props in self.stack):
            def translate_attribute(match):
                return match[1] + '=' + match[2] + escape(self.translate(unescape(match[3])), quote=True) + match[2]
            names = '|'.join(ATTRIBUTES)
            raw = re.sub(r'(?<![\w-])(' + names + r')\s*=\s*([\"\'])(.*?)\2', translate_attribute, raw, flags=re.S)
        if tag == 'option' and 'value' not in values:
            self.option = [len(self.parts), []]
        self.parts.append(raw)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.stack.pop()

    def handle_endtag(self, tag):
        if tag == 'option' and self.option:
            index, chunks = self.option
            value = normalize(''.join(chunks))
            self.parts[index] = self.parts[index][:-1] + f' value="{escape(value, quote=True)}">'
            self.option = None
        self.parts.append(f'</{tag}>')
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        if self.option:
            self.option[1].append(data)
        if self.stack and self.stack[-1][0] in {'script', 'style'}:
            self.parts.append(data)
        else:
            self.parts.append(escape(data if self.skipped() else self.translate(data), quote=False))

    def handle_decl(self, decl):
        self.parts.append(f'<!{decl}>')

    def handle_comment(self, data):
        self.parts.append(f'<!--{data}-->')


def language_switch(extra_class=''):
    return f'''<div class="lang-switch {extra_class}" role="group" aria-label="Language" hidden><button type="button" data-lang="en" aria-label="English" title="English" aria-pressed="true"><span aria-hidden="true">🇺🇸</span></button><button type="button" data-lang="ko" aria-label="Korean" title="Korean" aria-pressed="false"><span aria-hidden="true">🇰🇷</span></button></div>'''


def localize_page(html, prefix=''):
    parser = EnglishHTML()
    parser.feed(html)
    result = ''.join(parser.parts)
    if 'name="google"' not in result:
        result = result.replace('</head>', '<meta name="google" content="notranslate"></head>', 1)
    if 'class="lang-switch"' not in result:
        switch = language_switch().replace('lang-switch ', 'lang-switch')
        result = result.replace('</header>', switch + '</header>', 1)
        result = result.replace('</head>', f'<link rel="stylesheet" href="{prefix}i18n.css"></head>', 1)
        if prefix:
            result = result.replace('<script src="../story.js" defer>', f'<script src="{prefix}i18n-data.js" defer></script><script src="{prefix}i18n.js" defer></script><script src="../story.js" defer>', 1)
        else:
            result = result.replace('<script src="projects.js">', '<script src="i18n-data.js"></script><script src="i18n.js"></script><script src="projects.js">', 1)
    return result


def write_dictionary():
    (ROOT / 'i18n-data.js').write_text('// Generated from scripts/translations.json.\nwindow.PORTFOLIO_TRANSLATIONS = ' + json.dumps(PAIRS, ensure_ascii=False, separators=(',', ':')) + ';\n')
