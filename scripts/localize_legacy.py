"""Build English-first legacy pages and page-scoped language dictionaries.

Run after editing a legacy page or its scripts/legacy-locales dictionary.
The transform is idempotent and never translates JavaScript, CSS or user data.
"""
import json
import re
from localization import ROOT, PAIRS, EnglishHTML, language_switch

HEAD_START = '<!-- legacy-language-assets -->'
HEAD_END = '<!-- /legacy-language-assets -->'
BAR_START = '<!-- legacy-language-controls -->'
BAR_END = '<!-- /legacy-language-controls -->'


def build(route):
    path = ROOT / route
    pairs = json.loads((ROOT / 'scripts/legacy-locales' / (route.replace('/', '__').removesuffix('.html') + '.json')).read_text())
    sidecar = path.with_suffix('.i18n.js')
    sidecar.write_text('// Generated from scripts/legacy-locales; do not edit directly.\nwindow.PORTFOLIO_PAGE_TRANSLATIONS = ' + json.dumps(pairs, ensure_ascii=True, separators=(',', ':')) + ';\n')
    source = path.read_text()
    for start, end in [(HEAD_START, HEAD_END), (BAR_START, BAR_END)]:
        source = re.sub(r'\n?' + re.escape(start) + '.*?' + re.escape(end) + r'\n?', '', source, flags=re.S)
    # The original permit playground is a valid browser fragment. Give it an explicit document/head.
    if not re.search(r'<html\b', source, re.I):
        source = '<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>\n' + source + '\n</body></html>\n'
    source = re.sub(r'[ \t]*<meta\b[^>]*\bcharset\s*=[^>]*>[ \t]*', '', source, flags=re.I)
    parser = EnglishHTML([*PAIRS, *pairs])
    parser.feed(source)
    result = ''.join(parser.parts)
    assets = f'''{HEAD_START}
<meta charset="utf-8">
<meta name="google" content="notranslate">
<link rel="stylesheet" href="/i18n.css">
<link rel="stylesheet" href="/legacy-i18n.css">
<script src="/i18n-data.js"></script>
<script src="/{sidecar.relative_to(ROOT).as_posix()}" charset="utf-8"></script>
<script src="/i18n.js"></script>
{HEAD_END}
'''
    result = re.sub(r'(<head\b[^>]*>)', lambda match: match[1] + '\n' + assets, result, count=1, flags=re.I)
    result = re.sub(r'(<body\b[^>]*>)', lambda match: match[1] + '\n' + BAR_START + language_switch('legacy-locale-tools') + BAR_END + '\n', result, count=1, flags=re.I)
    path.write_text(result)
    return len(pairs)


if __name__ == '__main__':
    routes = json.loads((ROOT / 'scripts/legacy-pages.json').read_text())
    for route in routes:
        print(f'{route}: {build(route)} translations')
