from html.parser import HTMLParser
from pathlib import Path
import json

ROOT=Path(__file__).resolve().parents[1]
TOPICS=('pid','calc','ontology','tbe')


def test_twenty_independent_entries_and_complete_ballots():
    manifest=json.loads((ROOT/'motion-lab/manifest.json').read_text())
    assert len(manifest)==20
    for topic in TOPICS:
        entries=[e for e in manifest if e['topic']==topic]
        assert len(entries)==5
        assert all((ROOT/'motion-lab'/e['module']).is_file() for e in entries)
    ballots=list((ROOT/'motion-lab/ballots').glob('J*.json'))
    assert len(ballots)==5
    for path in ballots:
        ballot=json.loads(path.read_text())
        for topic in TOPICS:
            ids={e['id'] for e in manifest if e['topic']==topic}
            votes=ballot['topics'][topic]
            assert len(votes['ranking'])==5 and set(votes['ranking'])==ids
            assert {e['id'] for e in votes['scores']}==ids
            assert set(votes['contributions'])==ids
            for score in votes['scores']:
                for field,limit in [('semantic',35),('distinction',25),('choreography',20),('usability',20)]:
                    assert 0<=score[field]<=limit


class Document(HTMLParser):
    def __init__(self):super().__init__();self.ids=[];self.svg=0
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if attrs.get('id'):self.ids.append(attrs['id'])
        if tag=='svg':self.svg+=1


def test_final_stories_have_static_art_without_duplicate_ids():
    for topic in TOPICS:
        page=Document();page.feed((ROOT/'work'/topic/'index.html').read_text())
        assert page.svg==5
        assert len(page.ids)==len(set(page.ids))
        html=(ROOT/'work'/topic/'index.html').read_text()
        assert 'topic-stage' in html and '../motion-runtime.js' in html
        assert f'../motion/{topic}.i18n.js' in html


def test_synthesis_records_every_submission():
    data=json.loads((ROOT/'motion-lab/results.json').read_text())
    for topic in TOPICS:
        entries=data['topics'][topic]['entries']
        assert len(entries)==5
        assert sum(entry['borda'] for entry in entries)==75
        assert all(entry['contribution'].strip() for entry in entries)
