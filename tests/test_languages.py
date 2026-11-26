from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / 'index.html', *sorted((ROOT / 'work').glob('*/index.html'))]


class LanguagePage(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = None
        self.translate = None
        self.switches = []
        self.text = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == 'html':
            self.lang = values.get('lang')
            self.translate = values.get('translate')
        if tag == 'button' and 'data-lang' in values:
            self.switches.append(values)
        for key in ['aria-label', 'data-explanation']:
            if values.get(key):
                self.text.append(values[key])

    def handle_data(self, data):
        self.text.append(data)


def test_new_pages_default_to_english_without_javascript():
    for path in PAGES:
        page = LanguagePage()
        page.feed(path.read_text())
        assert page.lang == 'en', path
        assert page.translate == 'no', path
        # The Hangul syllable is the subject of the Bori game artwork.
        assert not [text for text in page.text if re.search('[가-힣]', text) and text.strip() != '가'], path


def test_each_header_has_two_named_language_buttons():
    for path in PAGES:
        page = LanguagePage()
        page.feed(path.read_text())
        assert [button['data-lang'] for button in page.switches] == ['en', 'ko']
        assert all(button.get('aria-label') for button in page.switches)
        assert page.switches[0].get('aria-pressed') == 'true'
