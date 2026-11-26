from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
STORIES = ('pid', 'calc', 'ontology', 'tbe')

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scenes = []
        self.chapters = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'section' and 'story-scene' in a.get('class', '').split():
            self.scenes.append(a)
        if tag == 'button' and 'data-go' in a:
            self.chapters.append(a)

def test_internal_stories_are_readable_without_javascript_and_have_matching_navigation():
    for name in STORIES:
        html = (ROOT / 'work' / name / 'index.html').read_text()
        p = Inspect(); p.feed(html)
        assert len(p.scenes) == 5
        assert len(p.chapters) == 5
        assert len({s['id'] for s in p.scenes}) == 5
        assert all('hidden' not in s for s in p.scenes)
        assert 'Illustrative example' in html
        assert 'Previous scene' in html and 'Next scene' in html

def test_internal_story_payload_does_not_include_private_source_detail():
    for name in STORIES:
        html = (ROOT / 'work' / name / 'index.html').read_text()
        assert not re.search(r'/Users/|localhost|127\.0\.0\.1|API_KEY|PRIVATE_KEY|ACCESS_TOKEN', html)
        assert not re.search(r'\.(?:xlsx|sqlite|csv|jsonl|dxf)\b', html)

def test_new_homepage_links_stories_and_retains_foundation_order():
    html = (ROOT / 'index.html').read_text()
    assert html.index('id="foundation"') < html.index('id="work"') < html.index('id="data"') < html.index('id="personal"')
    for name in STORIES:
        assert f'href="work/{name}/"' in html
    assert 'href="archive.html"' in html

def test_legacy_catalogue_has_public_tbe_story_instead_of_accuracy_claim():
    html = (ROOT / 'archive.html').read_text()
    assert '96%+' not in html
    assert 'work/tbe/' in html
