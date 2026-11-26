"""Validate five independent full ballots and calculate reproducible Borda totals."""
from pathlib import Path
import json

ROOT=Path(__file__).resolve().parents[1]
TOPICS=('pid','calc','ontology','tbe')
MAXIMUM={'semantic':35,'distinction':25,'choreography':20,'usability':20}


def aggregate():
    manifest=json.loads((ROOT/'motion-lab/manifest.json').read_text())
    paths=sorted((ROOT/'motion-lab/ballots').glob('J*.json'))
    assert len(paths)==5, 'All five actual ballots are required'
    ballots=[json.loads(path.read_text()) for path in paths]
    assert len({b['juror'] for b in ballots})==5
    output={'method':'Five independent AI panels; Borda 5/4/3/2/1 within each topic; complete coverage required. Not human user testing.','jurors':[{'id':b['juror'],'lens':b['lens'],'evidence':b['evidence']} for b in ballots],'topics':{}}
    for topic in TOPICS:
        ids={e['id'] for e in manifest if e['topic']==topic}
        rows={ident:{'id':ident,'borda':0,'totals':[],'jury_contributions':[]} for ident in sorted(ids)}
        for ballot in ballots:
            votes=ballot['topics'][topic]
            assert len(votes['ranking'])==5 and set(votes['ranking'])==ids
            assert len(votes['scores'])==5 and {s['id'] for s in votes['scores']}==ids
            assert set(votes['contributions'])==ids
            for position,ident in enumerate(votes['ranking']):rows[ident]['borda']+=5-position
            for score in votes['scores']:
                assert all(isinstance(score[field],(int,float)) and 0<=score[field]<=limit for field,limit in MAXIMUM.items())
                rows[score['id']]['totals'].append(sum(score[field] for field in MAXIMUM))
            for ident in ids:rows[ident]['jury_contributions'].append({'juror':ballot['juror'],'comment':votes['contributions'][ident]})
        for row in rows.values():row['mean']=round(sum(row.pop('totals'))/5,1)
        output['topics'][topic]={'entries':sorted(rows.values(),key=lambda row:(-row['borda'],-row['mean'],row['id'])),'jury_synthesis':[{'juror':b['juror'],'proposal':b['topics'][topic]['synthesis']} for b in ballots]}
    (ROOT/'motion-lab/votes.json').write_text(json.dumps(output,ensure_ascii=False,indent=2))
    finals=[ROOT/'work/motion'/f'{slug}.rationale.json' for slug in TOPICS]
    if all(path.exists() for path in finals):
        for topic,path in zip(TOPICS,finals):
            final=json.loads(path.read_text());contributions=final['contributions']
            assert set(contributions)=={e['id'] for e in manifest if e['topic']==topic}
            output['topics'][topic]['synthesis']=final['synthesis']
            for row in output['topics'][topic]['entries']:row['contribution']=contributions[row['id']]
        (ROOT/'motion-lab/results.json').write_text(json.dumps(output,ensure_ascii=False,indent=2))
    print(json.dumps({topic:[(r['id'],r['borda'],r['mean']) for r in output['topics'][topic]['entries']] for topic in TOPICS}))


if __name__=='__main__':aggregate()
