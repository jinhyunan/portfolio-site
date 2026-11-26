export const id = 'FONT';
export const title = 'The semantic hinge';
export const summary = 'Open a typed relation while keeping its source and unanswered review attached.';

const routes = {
  equipment: { entry:'Equipment entry', koEntry:'장비 진입점', relation:['applies to'], target:['Pump A'], type:'Instance', pattern:'proposed', sentence:'Head balance applies to Pump A as a proposed relation.', koSentence:'양정 평형을 펌프 A에 적용한다는 제안 관계입니다.' },
  method: { entry:'Method entry', koEntry:'계산 방법 진입점', relation:['requires','input'], target:['Flow','condition'], type:'Property', pattern:'dependency', sentence:'Head balance requires input Flow condition.', koSentence:'양정 평형은 유량 조건을 입력으로 요구합니다.' },
  evidence: { entry:'Evidence entry', koEntry:'근거 진입점', relation:['supported by'], target:['Reference','excerpt'], type:'Evidence', pattern:'support', sentence:'Head balance is supported by Reference excerpt.', koSentence:'참고 문헌 발췌가 양정 평형을 뒷받침합니다.' }
};
const descriptions = [
  ['Five separate bounded regions name System, Equipment, Property, Method and Evidence. The selected entry changes the emphasized region, not the facts.', '분리된 다섯 영역이 시스템, 장비, 속성, 계산 방법, 근거를 구분합니다. 선택한 진입점은 강조 영역만 바꾸며 사실은 바꾸지 않습니다.'],
  ['A hinged pair separates the Pump type from the Pump A instance. The instance-of arrow points from Pump A to Pump.', '펼쳐지는 두 면이 펌프 유형과 펌프 A 개체를 구분합니다. 유형에 속함 화살표는 펌프 A에서 펌프를 향합니다.'],
  ['A complete subject, named relation and object open into one broad statement. Solid, dashed and double edges distinguish input, proposed application and support.', '주어, 이름 있는 관계, 목적어가 하나의 넓은 문장으로 펼쳐집니다. 실선, 점선, 이중선은 입력, 적용 제안, 뒷받침 근거를 구분합니다.'],
  ['The selected statement stays above its source. The separate human reviewed-as field is empty; no verdict is recorded.', '선택한 문장 아래에 출처가 남습니다. 분리된 사람의 검토 상태 칸은 비어 있으며 검토 결과는 기록되지 않았습니다.'],
  ['The selected statement retains the Pump type, Pump A instance, Reference excerpt source and empty human review field.', '선택한 문장에 펌프 유형, 펌프 A 개체, 참고 문헌 발췌 출처와 빈 사람의 검토 칸이 함께 남습니다.']
];
const closing = 'The source is illustrative. Applicability is pending review; no engineering verification is claimed.';
const koClosing = '출처는 설명용 예시입니다. 적용성은 검토 대기 상태이며 공학적 검증을 주장하지 않습니다.';
const ariaFor = (phase, choice) => `${routes[choice].entry}. ${descriptions[phase][0]} ${routes[choice].sentence} ${closing}`;

export const translations = [
  [title, '의미를 펼치는 경첩'],
  [summary, '유형이 있는 관계를 펼치며 출처와 아직 답하지 않은 검토를 함께 보존합니다.'],
  ['System','시스템'], ['Equipment','장비'], ['Property','속성'], ['Method','계산 방법'], ['Evidence','근거'],
  ['Type','유형'], ['Instance','개체'], ['Pump','펌프'], ['Pump A','펌프 A'], ['Type: Pump','유형: 펌프'],
  ['Head','양정'], ['balance','평형'], ['Head balance','양정 평형'], ['Flow','유량'], ['condition','조건'], ['Flow condition','유량 조건'],
  ['Reference','참고 문헌'], ['excerpt','발췌'], ['Reference excerpt','참고 문헌 발췌'],
  ['instance of','유형에 속함'], ['applies to','적용 대상'], ['requires','필요한'], ['input','입력'],
  ['Proposed','제안됨'], ['Source','출처'], ['supported by','뒷받침 근거'],
  ['Human review','사람의 검토'], ['reviewed as','검토 상태'], ['No verdict recorded','검토 결과 미등록'], ['No verdict','결과 미등록'],
  ['Applicability pending review','적용성 검토 대기'],
  ...Object.values(routes).map(route => [route.entry,route.koEntry]),
  ...descriptions.flatMap((description,phase) => Object.keys(routes).map(choice => [
    ariaFor(phase,choice), `${routes[choice].koEntry}. ${description[1]} ${routes[choice].koSentence} ${koClosing}`
  ]))
];

export const css = `
.entry-FONT{width:100%;height:auto;display:block;background:#f3eff8;color:#342943;font-family:Arial,"Noto Sans KR",sans-serif;isolation:isolate}
.entry-FONT text{fill:#342943;font-weight:500;letter-spacing:-.45px}
.entry-FONT .FONT-primary{font-size:36px;font-weight:650;letter-spacing:-1px}
.entry-FONT .FONT-large{font-size:46px;font-weight:650;letter-spacing:-1.2px}
.entry-FONT .FONT-label{font-size:30px;font-weight:600}
.entry-FONT .FONT-relation{font-size:29px;font-family:Georgia,"Noto Serif KR",serif;font-style:italic;letter-spacing:-.7px}
.entry-FONT .FONT-secondary{font-size:24px;fill:#665970}
.entry-FONT .FONT-entry{font-size:24px;font-weight:600}
.entry-FONT .FONT-status{font-size:28px;fill:#95411e;font-weight:600}
.entry-FONT .FONT-source{font-size:30px;font-weight:550}
.entry-FONT .FONT-outline{fill:none;stroke:#67557c;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.entry-FONT .FONT-proposed{stroke:#a6532d;stroke-dasharray:10 8}
.entry-FONT .FONT-space{transform-box:fill-box;transform-origin:left center}
.entry-FONT .FONT-left,.entry-FONT .FONT-right{transform-origin:360px 212px}
.entry-FONT .FONT-band{transform-box:fill-box;transform-origin:left center}
.entry-FONT .FONT-rule{stroke-dasharray:1;stroke-dashoffset:0}
.animating .entry-FONT .FONT-space{animation:FONT-space 1.4s ease-out both;animation-delay:var(--FONT-delay,0s);animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-left{animation:FONT-left 2s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-right{animation:FONT-hinge 2.4s .15s cubic-bezier(.2,.8,.25,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-band{animation:FONT-unfold 1.5s .45s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-subject{animation:FONT-word .8s .15s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-verb{animation:FONT-word .8s .9s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-object{animation:FONT-word .8s 1.65s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-rule{animation:FONT-trace 1.4s 1.1s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-provenance{animation:FONT-source 1.4s 1.8s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FONT .FONT-review{animation:FONT-boundary 1.2s 2.3s ease-out both;animation-play-state:var(--motion-play,running)}
@keyframes FONT-space{from{opacity:.15;transform:scaleX(.76)}to{opacity:1;transform:scaleX(1)}}
@keyframes FONT-left{from{transform:skewY(-4deg);opacity:.25}to{transform:skewY(0);opacity:1}}
@keyframes FONT-hinge{0%{transform:scaleX(.07);opacity:.2}35%{opacity:1}100%{transform:scaleX(1);opacity:1}}
@keyframes FONT-unfold{from{transform:scaleX(.08)}to{transform:scaleX(1)}}
@keyframes FONT-word{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}
@keyframes FONT-trace{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes FONT-source{from{transform:translateY(-22px);opacity:.1}to{transform:translateY(0);opacity:1}}
@keyframes FONT-boundary{from{opacity:.2;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.entry-FONT *{animation:none!important;transform:none!important;opacity:1!important;stroke-dashoffset:0!important}}
`;

const C = {ink:'#342943', edge:'#67557c', pale:'#e7deee', light:'#faf8fc', lavender:'#cebbdf', warm:'#f4e4d8', amber:'#a6532d'};
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
const text = (x,y,copy,cls='FONT-label',anchor='start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${escape(copy)}</text>`;
const diamond = (x,y,size=8) => `<path d="M${x} ${y-size}l${size} ${size}-${size} ${size}-${size}-${size}Z" fill="${C.ink}"/>`;
const boundary = (x,y,w,h) => `<path d="M${x+14} ${y}H${x}V${y+h}H${x+14}M${x+w-14} ${y}H${x+w}V${y+h}H${x+w-14}" class="FONT-outline"/>`;
const lines = (x,y,copy,cls='FONT-primary',leading=40,anchor='start') => copy.map((line,i)=>text(x,y+i*leading,line,cls,anchor)).join('');
const pending = () => `<path d="M38 400H682" stroke="#c4acbc" stroke-width="1.4"/><path d="M40 424h18" stroke="${C.amber}" stroke-width="3" stroke-dasharray="5 4"/>${text(75,434,'Applicability pending review','FONT-status')}`;
const provenance = (y=368) => `<g class="FONT-provenance"><path d="M40 ${y-18}h38m-38 7h38" stroke="${C.edge}" stroke-width="2"/>${text(94,y,'Source','FONT-secondary')}${text(207,y,'Reference excerpt','FONT-source')}</g>`;
const entry = choice => `${diamond(44,31,6)}${text(64,39,routes[choice].entry,'FONT-entry')}`;

function context(choice) {
  const regions = [
    {name:'System',path:'M40 78H230L252 146H40Z',x:65,y:122},
    {name:'Property',path:'M260 78H674V146H282Z',x:380,y:122},
    {name:'Equipment',key:'equipment',path:'M40 168H305L331 302H40Z',x:65,y:218},
    {name:'Method',key:'method',path:'M328 168H674V302H354Z',x:385,y:218},
    {name:'Evidence',key:'evidence',path:'M40 324H674V383H40Z',x:65,y:363}
  ];
  return regions.map((region,i)=>`<g class="FONT-space" style="--FONT-delay:${i*.17}s"><path d="${region.path}" fill="${region.key===choice?C.lavender:C.pale}" stroke="${C.edge}" stroke-width="${region.key===choice?3:1.4}"/>${text(region.x,region.y,region.name)}${region.key===choice?diamond(region.x-13,region.y-10,5):''}${region.key==='equipment'?text(65,268,'Pump A','FONT-primary'):''}${region.key==='method'?text(385,268,'Head balance','FONT-primary'):''}${region.key==='evidence'?text(275,363,'Reference excerpt','FONT-source'):''}</g>`).join('')+pending();
}

function structure(choice,ns) {
  return `<path d="M40 110L360 78 680 110V290L360 323 40 290Z" fill="${C.pale}"/>
    <g class="FONT-left"><path d="M52 101H342L360 120V311L342 292H52Z" fill="${C.light}" stroke="${C.edge}" stroke-width="2"/>${text(87,142,'Type','FONT-secondary')}${boundary(88,167,223,57)}${text(198,211,'Pump','FONT-large','middle')}</g>
    <g class="FONT-right"><path d="M378 101H668V292H378L360 311V120Z" fill="${choice==='equipment'?C.lavender:C.pale}" stroke="${C.edge}" stroke-width="2"/>${text(411,142,'Instance','FONT-secondary')}${diamond(409,194,10)}${text(445,211,'Pump A','FONT-large')}</g>
    <path d="M360 121V300" stroke="#ae98c2" stroke-width="5"/>
    <path d="M524 225V250H198V225" class="FONT-outline FONT-rule" pathLength="1" marker-end="url(#${ns}-arrow)"/>
    ${text(360,287,'instance of','FONT-relation','middle')}
    ${provenance(367)}${pending()}`;
}

function statement(choice,ns,{top=79,height=246,compact=false,outcome=false}={}) {
  const r=routes[choice], bottom=top+height, mid=top+height/2;
  const x1=40,x2=264,x3=456,x4=680;
  const nounClass=compact?'FONT-label':'FONT-primary';
  const nounLeading=compact?34:42;
  const nounY=mid-(r.target.length===1?0:nounLeading/2)+10;
  const subjectY=mid-nounLeading/2+10;
  const verbY=mid-(r.relation.length===1?0:32/2)+9;
  const baseY=bottom-26;
  const subtitleY=top+35;
  return `<g>
    <path d="M${x1} ${top+18}L${x2} ${top}V${bottom-18}L${x1} ${bottom}Z" fill="${C.pale}" stroke="${C.edge}" stroke-width="1.6"/>
    <path d="M${x3} ${top}L${x4} ${top+18}V${bottom}L${x3} ${bottom-18}Z" fill="${choice==='equipment'?C.lavender:C.pale}" stroke="${C.edge}" stroke-width="1.6"/>
    <g class="FONT-band"><path d="M252 ${mid-49}H468L455 ${mid+49}H265Z" fill="${choice==='equipment'?C.warm:'#dfd2e9'}"/></g>
    <g class="FONT-subject">${!compact?text(66,subtitleY,'Method','FONT-secondary'):''}${lines(66,subjectY,['Head','balance'],nounClass,nounLeading)}</g>
    <g class="FONT-verb">${lines(360,verbY,r.relation,'FONT-relation',32,'middle')}</g>
    <g class="FONT-object">${!compact?text(484,subtitleY,r.type,'FONT-secondary'):''}${r.target.length===1?diamond(484,nounY-11,7):''}${lines(r.target.length===1?507:484,nounY,r.target,nounClass,nounLeading)}${!compact&&choice==='equipment'?text(484,baseY,'Type: Pump','FONT-secondary'):''}</g>
    <path d="M267 ${mid+61}H453" class="FONT-outline ${r.pattern==='proposed'?'FONT-proposed':''}" marker-end="url(#${ns}-arrow)"/>
    ${r.pattern==='support'?`<path d="M267 ${mid+68}H445" class="FONT-outline"/>`:''}
    ${choice==='equipment'?text(360,compact?top-8:top+34,'Proposed','FONT-secondary','middle'):''}
    ${outcome?'':`<path d="M52 ${bottom+12}h24" stroke="${C.edge}" stroke-width="2"/>`}
  </g>`;
}

function explore(choice,ns) {
  return statement(choice,ns)+provenance(374)+pending();
}

function review(choice,ns) {
  return statement(choice,ns,{top:73,height:114,compact:true})+
    `<path d="M152 192V216H66" class="FONT-outline"/><path d="M159 192V223H66" class="FONT-outline"/>
    <g class="FONT-provenance"><path d="M40 239H348L333 378H40Z" fill="${C.pale}"/>${text(64,267,'supported by','FONT-relation')}${lines(64,312,['Reference','excerpt'],'FONT-primary',39)}</g>
    <path d="M372 211V378" stroke="#c0aecb" stroke-width="1.5"/>
    <g class="FONT-review">${text(406,238,'Human review','FONT-label')}${text(406,275,'reviewed as','FONT-secondary')}${boundary(408,292,250,36)}${text(406,368,'No verdict recorded','FONT-secondary')}</g>
    ${pending()}`;
}

function outcome(choice,ns) {
  return `<g class="FONT-subject">${diamond(54,76,8)}${text(78,87,'Pump A','FONT-primary')}<path d="M229 77H461" class="FONT-outline" marker-end="url(#${ns}-arrow)"/>${text(346,68,'instance of','FONT-secondary','middle')}${boundary(485,52,180,48)}${text(575,87,'Pump','FONT-primary','middle')}</g>
    ${statement(choice,ns,{top:135,height:146,compact:true,outcome:true})}
    <g class="FONT-provenance"><path d="M43 314h36m-36 7h36" stroke="${C.edge}" stroke-width="2"/>${text(93,335,'Source','FONT-secondary')}${text(207,335,'Reference excerpt','FONT-source')}</g>
    <g class="FONT-review">${text(43,379,'Human review','FONT-secondary')}${boundary(255,352,167,33)}${text(453,379,'No verdict','FONT-secondary')}</g>
    ${pending()}`;
}

export function render(phase=0,choice='equipment',uid='FONT') {
  const p=Number.isInteger(phase)&&phase>=0&&phase<=4?phase:0;
  const selected=Object.hasOwn(routes,choice)?choice:'equipment';
  const ns=`${String(uid).replace(/[^a-zA-Z0-9_-]/g,'-')}-FONT`;
  const body=[context,structure,explore,review,outcome][p](selected,ns);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${escape(ariaFor(p,selected))}" class="entry-FONT" data-entry="${selected}" data-phase="${p}"><defs><marker id="${ns}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1L9 5 1 9" fill="none" stroke="${C.edge}" stroke-width="1.5"/></marker></defs><path d="M0 0H720V460H0Z" fill="#f3eff8"/>${entry(selected)}${body}</svg>`;
}
