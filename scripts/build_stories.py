"""Build public, illustrative stories. Contains no project records or source data."""
from pathlib import Path
import json
from html import escape as e
from localization import localize_page, write_dictionary

ROOT = Path(__file__).resolve().parents[1]
CHAPTERS = [('context', '문제'), ('structure', '구조'), ('explore', '탐색'), ('review', '판단'), ('outcome', '남은 것')]
STORIES = {
    'pid': {
        'title': 'P&ID Agent', 'eyebrow': 'DRAWING → DESIGN CONTEXT',
        'tagline': 'From lines to logic.', 'next': 'calc',
        'scenes': [
            ('선이 이어지면,\n의미도 이어질까?', '도면의 장비와 배관은 연결되어 있습니다. 하지만 변경 이유와 계산 조건까지 같은 선 위에서 읽을 수 있는 것은 아닙니다.', '출발점', '그림의 모양과 설계의 의미를 함께 다루는 작업이 필요했습니다.', 'DRAWING / CONTEXT'),
            ('장비, 포트, 연결.\n설계의 문법을 만들다.', '장비와 포트에 식별자를 부여하고 연결 관계를 구조화합니다. 도면에서 선택한 대상이 계산과 검토에서도 같은 대상으로 이어집니다.', '설계한 구조', 'DesignGraph를 중심에 두고 도면 표현과 계산 입력, 변경 이력을 연결했습니다.', 'CONNECT / STRUCTURE'),
            ('하나의 연결을 바꾸면,\n어디를 다시 봐야 할까?', '아래에서 우회 연결을 추가해 보세요. 연결의 변화가 검토해야 할 경로를 바꿉니다. 이 장면은 동작 원리를 보여주는 설명용 예시입니다.', '직접 탐색', '국소 변경을 제안하고, 영향받는 경로와 계산·검토 대상을 다시 확인하는 흐름을 만듭니다.', 'CHANGE / TRACE'),
            ('계산의 답을,\n원래 도면으로 돌려보내다.', '계산 결과와 미정 조건을 해당 장비·배관에 연결합니다. 후보를 비교할 때도 무엇을 바꿨고 무엇이 아직 미정인지 함께 남깁니다.', '판단을 돕는 방식', '생성 → 계산 → 후보 비교 → 사람 검토를 구분했습니다. 도면 생성만으로 설계가 승인되지는 않습니다.', 'COMPARE / REVIEW'),
            ('좋은 도구는\n다음 질문을 남긴다.', '도면 구조화와 생성, 계산 연결, 변경 검토를 위한 작업대를 개발했습니다. 공개·합성 사례로 연결 흐름을 확인하며 적용 범위를 넓히고 있습니다.', '내 역할과 현재 범위', '발전플랜트 설계 관점에서 데이터 구조와 검토 흐름을 정의하고 AI와 함께 구현했습니다. 실제 설계 적용에는 프로젝트 조건과 담당자의 검토·승인이 필요합니다.', 'CONTEXT / NEXT QUESTION'),
        ],
        'choices': [('base','기본 연결','기본 경로를 따라 장비와 계산 대상을 추적합니다. 이 도식은 실제 계통이 아닙니다.'), ('alternate','우회 연결 추가','추가된 경로를 강조했습니다. 연결 변경에 따른 계산 대상과 검토 범위를 다시 확인해야 합니다.')],
    },
    'calc': {
        'title': 'Calc Agent', 'eyebrow': 'CONDITIONS → CALCULATION → REVIEW',
        'tagline': 'Every number, a basis.', 'next': 'ontology',
        'scenes': [
            ('같은 숫자라도,\n같은 답은 아닙니다.', '유량과 압력, 단위와 경계조건. 계산값은 입력 조건 안에서만 의미를 가집니다. 결과가 어디에서 왔는지 다시 확인할 수 있어야 합니다.', '출발점', '입력, 가정, 계산 결과를 한 흐름으로 읽는 엔지니어링 작업대를 만들었습니다.', 'INPUT / ASSUMPTIONS'),
            ('조건을 정리하고,\n계산으로 연결하다.', '배관 손실과 펌프 운전점 등 수리망 해석을 입력의 출처와 연결합니다. 원래의 설계값과 검토 중인 후보값을 구분합니다.', '설계한 구조', '단위와 경계조건을 정리한 계산 모델, 후보 재계산, 결과 비교 화면을 연결했습니다.', 'MODEL / CONDITIONS'),
            ('조건이 바뀌면,\n운전점도 움직입니다.', '저항 조건을 바꾸어 두 곡선이 만나는 지점을 살펴보세요. 실제 설비 성능이 아닌 상대적인 관계를 보여주는 설명용 곡선입니다.', '직접 탐색', '한 결과를 정답으로 제시하기보다, 바뀐 조건이 결과에 어떤 영향을 주는지 비교합니다.', 'EXPLORE / OPERATING POINT'),
            ('아는 값과 모르는 값을,\n같은 화면에.', '계산이 끝났어도 장비 성능 자료나 현장 조건이 빠져 있을 수 있습니다. 현재 결과, 대안, 미정 입력을 구분해 다음 확인 사항을 남깁니다.', '판단을 돕는 방식', '계산 성공과 설비 선정은 별개의 단계입니다. 추가 자료가 필요한 항목을 감추지 않습니다.', 'RESULT / OPEN INPUTS'),
            ('결과보다 오래 남는 것.\n그 결과의 근거.', '수리망 계산과 운전점·후보 비교, 도면 대상으로 돌아가는 검토 흐름을 구현했습니다. 합성 사례의 계산과 실제 프로젝트 승인을 구분합니다.', '내 역할과 현재 범위', '설계자가 확인해야 할 조건과 비교 기준을 정하고 AI와 함께 도구를 구현했습니다. 실제 선정에는 제조사 자료와 설계조건을 반영한 검토가 필요합니다.', 'BASIS / REVIEW'),
        ],
        'choices': [('base','기본 조건','기본 저항 조건에서 두 곡선이 만나는 지점을 표시합니다. 축은 상대적 관계이며 실제 수치가 없습니다.'), ('alternate','저항 증가','같은 펌프 곡선에서 저항을 높인 개념 예시입니다. 운전점은 더 낮은 유량 쪽으로 이동합니다.')],
    },
    'ontology': {
        'title': 'Engineering Ontology', 'eyebrow': 'KNOWLEDGE → RELATIONS → CONTEXT',
        'tagline': 'Knowledge, connected.', 'next': 'tbe',
        'scenes': [
            ('지식을 모으면,\n바로 쓸 수 있을까?', '장비 이름과 계산식을 모아도 적용 조건과 출처는 저절로 이어지지 않습니다. 무엇이 무엇에 의존하는지 읽을 수 있어야 합니다.', '출발점', '자료의 목록을 넘어, 설계 지식의 관계를 탐색하는 구조를 만들었습니다.', 'KNOWLEDGE / CONTEXT'),
            ('관계에도\n이름이 필요합니다.', '계통, 장비, 속성, 계산 방법과 근거를 서로 다른 유형으로 구분합니다. 필요 입력과 참고 출처도 서로 다른 관계로 연결합니다.', '설계한 구조', '개념의 타입과 관계 스키마, 그래프 탐색기를 구현했습니다. 같은 이름의 개념과 개별 설비도 구분합니다.', 'TYPES / RELATIONS'),
            ('하나의 지식,\n세 가지 진입점.', '장비, 계산 방법, 근거 중 하나를 선택해 보세요. 어디에서 시작하느냐에 따라 먼저 확인할 관계와 질문이 달라집니다.', '직접 탐색', '검색 결과를 나열하는 대신, 지금 질문에 필요한 맥락을 따라 탐색합니다.', 'EXPLORE / PERSPECTIVES'),
            ('연결되어 있다는 것과,\n확인되었다는 것.', '관계가 있다는 사실만으로 적용이 확정되지는 않습니다. 출처, 제안, 검토 상태를 함께 남기고 아직 확인되지 않은 관계를 구분합니다.', '판단을 돕는 방식', '지식 구조화와 실제 계산 실행, 모델 학습은 다른 작업입니다. 그래프는 그 사이의 맥락을 제공합니다.', 'PROVENANCE / STATUS'),
            ('설계 지식이\n다음 작업의 맥락으로.', '타입·관계 스키마와 그래프 탐색, 계산 방법의 연결, 에이전트가 참고할 근거 구조를 구현했습니다. 이 도식은 실제 데이터셋의 축소본이 아닙니다.', '내 역할과 현재 범위', '발전플랜트 지식을 어떤 관계로 읽을지 정의하고 AI와 함께 탐색 도구를 만들었습니다. 개별 프로젝트의 적합성과 승인 상태는 별도 검토 대상입니다.', 'CONTEXT / REUSE'),
        ],
        'choices': [('equipment','장비','장비에서 출발하면 필요한 속성과 적용할 계산 방법을 확인합니다.'), ('method','계산 방법','계산 방법에서 출발하면 필요한 입력과 그 방법을 뒷받침하는 근거를 확인합니다.'), ('evidence','근거','근거에서 출발하면 어떤 방법을 뒷받침하는지, 검토 상태가 무엇인지 확인합니다.')],
    },
    'tbe': {
        'title': 'TBE Review & Reply', 'eyebrow': 'REQUIREMENTS → EVIDENCE → JUDGMENT',
        'tagline': 'A basis for every reply.', 'next': 'pid',
        'scenes': [
            ('답변을 읽는 일과,\n판단하는 일 사이.', '기술입찰평가에서는 요구사항과 업체 답변, 참고 근거를 오가며 검토합니다. 표현이 비슷해도 조건과 맥락에 따라 판단은 달라집니다.', '출발점', '흩어진 요구사항과 답변을 구조화하고 검토에 필요한 근거를 찾는 작업을 도구로 연결했습니다.', 'REQUIREMENT / RESPONSE'),
            ('문서의 행을,\n검토의 단위로.', '요구사항, 업체 답변, 관련 근거와 검토 상태를 나누어 정리합니다. 과거 기록은 현재 조건과 함께 읽어야 의미가 있습니다.', '설계한 구조', '문서 구조화, 데이터 정리, 모델 실험과 답변 초안 작성 흐름을 개발했습니다. 원본 자료와 세부 학습 기록은 공개하지 않습니다.', 'STRUCTURE / CONTEXT'),
            ('근거가 없다면,\n다음 동작도 달라집니다.', '근거 연결 상태를 바꾸어 보세요. 자료가 없으면 확인 요청으로, 관련 근거가 있으면 담당자가 검토할 초안으로 이어집니다.', '직접 탐색', '아래는 검토 흐름을 보여주는 설명용 예시입니다. 실제 문서, 예측 결과나 승인 기록을 사용하지 않습니다.', 'EVIDENCE / NEXT ACTION'),
            ('초안은 도구가,\n판단은 엔지니어가.', '답변 초안에는 참고한 근거와 확인할 조건이 함께 있어야 합니다. 과거 승인 기록이나 모델의 예측이 현재 건의 승인을 대신하지 않습니다.', '판단을 돕는 방식', '원본과 수정 내용을 보존하고, 검토자가 근거를 확인한 뒤 판단할 수 있도록 구성합니다.', 'DRAFT / HUMAN REVIEW'),
            ('자동화의 목적은,\n검토에 집중할 시간.', '반복되는 자료 정리와 근거 탐색, 답변 초안 작성을 돕는 사내 도구를 만들었습니다. 이 페이지는 데이터와 성능 수치 대신 작업 방식을 소개합니다.', '내 역할과 현재 범위', '기술 검토 관점에서 요구사항과 답변의 구조, 근거 확인과 사람 검토 단계를 정의했습니다. AI와 함께 구현하고 적용 조건을 점검하는 작업을 이어갑니다.', 'SUPPORT / RESPONSIBILITY'),
        ],
        'choices': [('missing','근거 미연결','관련 근거가 연결되지 않았습니다. 결론을 내리지 않고 필요한 자료를 확인 요청으로 남깁니다.'), ('linked','관련 근거 연결','참고 근거가 연결되었습니다. 검토용 초안을 준비할 수 있으며, 적용 조건 확인과 최종 판단은 담당자에게 남습니다.')],
    },
}

def graphic(slug, phase):
    """Static fallback built from the new, independently synthesized motion modules."""
    return json.loads((ROOT/'work/motion/static.json').read_text())[slug][phase]

def build(slug, story):
    chapters=''.join(f'<button type="button" data-go="{i}" aria-controls="{sid}"><span>0{i+1}</span> {e(name)}</button>' for i,(sid,name) in enumerate(CHAPTERS))
    sections=[]
    for i,((sid,name),scene) in enumerate(zip(CHAPTERS,story['scenes'])):
        heading,copy,aside_title,aside,stamp=scene
        default=story['choices'][0][0]
        choices=''
        if i==2:
            choices='<div class="explorer" hidden><p class="control-label">조건을 선택해 보세요</p><div class="choices" role="group" aria-label="설명용 조건 선택">'+''.join(f'<button type="button" data-choice="{value}" data-explanation="{e(note)}" aria-pressed="{str(j==0).lower()}">{e(label)}</button>' for j,(value,label,note) in enumerate(story['choices']))+'</div><p class="choice-note" aria-live="polite">'+e(story['choices'][0][2])+'</p></div>'
        outro=''
        if i==4:
            outro=f'<a class="next-story" href="../{story["next"]}/">다음 이야기 <strong>{e(STORIES[story["next"]]["title"])} ↗</strong></a>'
            if slug=='calc':
                outro+='<a class="public-link" href="../../ccpp/">별도로 공개한 CCPP 계산 도구 사례 ↗</a>'
        sections.append(f'''<section class="story-scene" id="{sid}" aria-labelledby="title-{sid}" data-phase="{i+1}" data-choice="{default}">
          <div class="scene-copy"><p class="eyebrow">0{i+1} / {e(name)} <span>— {e(stamp)}</span></p><h2 id="title-{sid}" tabindex="-1">{e(heading).replace(chr(10),'<br>')}</h2><p class="lede">{e(copy)}</p><div class="insight"><span>{e(aside_title)}</span><p>{e(aside)}</p></div>{outro}</div>
          <div class="scene-visual"><div class="visual-top"><span>{e(stamp)}</span><span>0{i+1} / 05</span></div><div class="diagram topic-stage">{graphic(slug,i)}</div><div class="visual-bottom"><span class="status-dot"></span>설명용 예시 · 실제 데이터 아님</div>{choices}</div>
        </section>''')
    html=f'''<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#173d36"><title>{e(story['title'])} — Jinhyun An</title><meta name="description" content="{e(story['title'])}: {e(story['scenes'][0][1])}"><link rel="stylesheet" href="../story.css"><link rel="stylesheet" href="../motion/themes.css"><link rel="stylesheet" href="../motion-layout.css"><script src="../story.js" defer></script></head>
<body data-story="{slug}"><a class="skip" href="#story">이야기로 바로 가기</a><header class="site-nav"><a class="brand" href="../../">jinhyun an</a><a class="back-link" href="../../#work">포트폴리오로 돌아가기 ↗</a></header>
<main id="story"><div class="story-heading"><div><p class="eyebrow">{e(story['eyebrow'])}</p><h1>{e(story['title'])}</h1></div><p class="tagline">{e(story['tagline'])}</p></div>
<nav class="chapters" aria-label="이야기 장면" hidden>{chapters}</nav>
<div class="scenes">{''.join(sections)}</div>
<div class="player" hidden><div class="scene-nav"><button type="button" id="previous" aria-label="이전 장면">← 이전</button><span id="counter" aria-live="polite">01 / 05</span><button type="button" id="next" aria-label="다음 장면">다음 →</button></div><div class="motion-nav"><span id="motion-status">장면 모션</span><button type="button" id="motion-toggle" aria-pressed="false">모션 일시정지</button><button type="button" id="replay">모션 다시 보기 ↺</button></div><div class="motion-progress" aria-hidden="true"><i></i></div></div>
<noscript><p class="no-script">모든 장면을 순서대로 읽을 수 있습니다. 조건 선택과 모션 제어는 JavaScript를 켜면 사용할 수 있습니다.</p></noscript>
<p class="presentation-note">이야기의 도식과 인터랙션은 작업 방식을 설명하기 위해 만든 예시입니다. 사내 원문·설계 수치·학습 데이터는 포함하지 않습니다.</p>
</main><footer><span>© 2026 Jinhyun An</span><a href="../../#work">더 많은 작업 보기 ↗</a></footer></body></html>'''
    destination=ROOT/'work'/slug
    destination.mkdir(exist_ok=True,parents=True)
    output=localize_page(html, '../../')
    output=output.replace('<script src="../../i18n.js" defer>',f'<script src="../motion/{slug}.i18n.js" defer></script><script src="../../i18n.js" defer>')
    output=output.replace('<script src="../story.js" defer>', '<script src="../story.js?v=motion-competition" defer>')
    output=output.replace('</body>', '<script type="module" src="../motion-runtime.js"></script></body>')
    (destination/'index.html').write_text(output)

if __name__=='__main__':
    write_dictionary()
    for slug,story in STORIES.items():
        build(slug,story)
    print(f'Built {len(STORIES)} public stories, 5 scenes each.')
