from html.parser import HTMLParser
from pathlib import Path
import importlib.util
import json

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('portfolio_localization', ROOT / 'scripts/localization.py')
localization = importlib.util.module_from_spec(spec)
spec.loader.exec_module(localization)


def translate(html, pairs):
    parser = localization.EnglishHTML(pairs)
    parser.feed(html)
    return ''.join(parser.parts)


def test_static_translation_preserves_executable_and_user_content():
    source = '<script>const label="조건 < 5 && 결과 > 1";</script><style>.x::before{content:"조건"}</style><p>조건</p><textarea placeholder="조건">조건</textarea><pre>조건</pre>'
    result = translate(source, [['Conditions', '조건']])
    assert '<script>const label="조건 < 5 && 결과 > 1";</script>' in result
    assert '<style>.x::before{content:"조건"}</style>' in result
    assert '<p>Conditions</p>' in result
    assert '<textarea placeholder="Conditions">조건</textarea><pre>조건</pre>' in result


def test_copyable_prose_opt_in_and_tooltip_translation():
    result = translate('<pre><span data-i18n-copy>조건</span></pre><p data-tip="조건">첫  조건</p>', [['Conditions', '조건'], ['First condition', '첫 조건']])
    assert '<span data-i18n-copy>Conditions</span>' in result
    assert 'data-tip="Conditions"' in result
    assert '>First condition</p>' in result


def test_localization_preserves_implicit_option_values():
    result = translate('<select><option>검토</option><option value="stable">검토</option></select>', [['Review', '검토']])
    assert '<option value="검토">Review</option>' in result
    assert '<option value="stable">Review</option>' in result


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = None
        self.buttons = []
        self.scripts = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html': self.lang = attrs.get('lang')
        if tag == 'button' and 'data-lang' in attrs: self.buttons.append(attrs['data-lang'])
        if tag == 'script' and attrs.get('src'): self.scripts.append(attrs['src'])


def test_every_legacy_route_has_english_default_and_shared_controls():
    manifest = json.loads((ROOT / 'scripts/legacy-pages.json').read_text())
    for route in manifest:
        path = ROOT / route
        html = path.read_text()
        assert '<meta charset="utf-8">' in html[:1024], route
        page = Page(); page.feed(html)
        assert page.lang == 'en', route
        assert page.buttons == ['en', 'ko'], route
        assert '/i18n.js' in page.scripts, route
        assert any(src.endswith('.i18n.js') for src in page.scripts), route
