export const id = 'O2';
export const title = 'Relation loom';
export const summary = 'Follow a named relationship through an engineering context without mistaking a connection for approval.';

const copy = {
  context: 'Give every thread a meaning.',
  structure: 'A relation is a complete statement.',
  equipment: 'Enter through equipment.',
  method: 'Enter through a method.',
  evidence: 'Enter through evidence.',
  review: 'A connection is not approval.',
  outcome: 'Keep the context. Keep the limits.',
};
const descriptions = [
  'Illustrative engineering ontology. System is the context; equipment, property, method and evidence are distinct types.',
  'Three illustrative woven statements: Head balance requires input Flow condition, applies to Pump A, and is supported by Reference excerpt.',
  'Illustrative context path selected through equipment, method or evidence. The highlighted named relation changes; the facts stay the same.',
  'Head balance is connected to Pump A and supported by a reference excerpt. Applicability is pending review; the review gate stays open.',
  'Illustrative context record keeps Pump as the type, Pump A as the instance, the method and supporting evidence connected, and applicability pending review.',
];
export const translations = [
  ['Relation loom', '관계의 직조'],
  [summary, '이름이 있는 관계를 따라 공학 맥락을 읽되, 연결을 승인으로 오해하지 않습니다.'],
  [copy.context, '각 흐름에 의미를 부여합니다.'],
  [copy.structure, '관계는 하나의 완전한 문장입니다.'],
  [copy.equipment, '장비에서 시작합니다.'],
  [copy.method, '계산 방법에서 시작합니다.'],
  [copy.evidence, '근거에서 시작합니다.'],
  [copy.review, '연결은 승인이 아닙니다.'],
  [copy.outcome, '맥락도, 한계도 함께 남깁니다.'],
  ['ENGINEERING ONTOLOGY', '공학 온톨로지'],
  ['CONTEXT', '맥락'], ['STRUCTURE', '구조'], ['EXPLORE', '탐색'], ['REVIEW', '검토'], ['OUTCOME', '결과'],
  ['System', '시스템'], ['Equipment', '장비'], ['Property', '속성'], ['Method', '계산 방법'], ['Evidence', '근거'],
  ['Pump', '펌프'], ['Pump A', '펌프 A'], ['Flow', '유량'], ['condition', '조건'], ['Flow condition', '유량 조건'],
  ['Head', '수두'], ['balance', '평형'], ['Head balance', '수두 평형'], ['Reference', '참조'], ['excerpt', '발췌문'], ['Reference excerpt', '참조 발췌문'],
  ['Distinct types. Shared context.', '서로 다른 유형. 함께 읽는 맥락.'],
  ['Illustrative model', '설명용 모델'],
  ['requires input', '입력 필요'], ['applies to', '적용 대상'], ['supported by', '근거 연결'], ['reviewed as', '검토 상태'],
  ['Dependency', '입력 의존'], ['Applicability', '적용 관계'], ['Support', '근거 관계'],
  ['Named relations carry meaning.', '이름이 있는 관계가 의미를 전달합니다.'],
  ['Same facts. A different context path.', '같은 사실. 다른 진입 경로.'],
  ['Equipment perspective', '장비 관점'], ['Method perspective', '계산 방법 관점'], ['Evidence perspective', '근거 관점'],
  ['Connected', '연결됨'], ['Still open', '검토 중'], ['Review gate', '검토 관문'],
  ['Applicability pending review', '적용 가능성 검토 대기'],
  ['Evidence supports a claim; review establishes applicability.', '근거는 주장을 뒷받침하고, 검토는 적용 가능성을 판단합니다.'],
  ['Type', '유형'], ['Instance', '개별 객체'], ['Context record', '맥락 기록'],
  ['Traceable context', '추적 가능한 맥락'], ['No engineering verified', '공학적 검증 미수행'],
  [descriptions[0], '설명용 공학 온톨로지입니다. 시스템은 맥락이며 장비, 속성, 계산 방법, 근거는 서로 다른 유형입니다.'],
  [descriptions[1], '세 가지 설명용 관계입니다. 수두 평형은 유량 조건을 입력으로 필요로 하며 펌프 A를 적용 대상으로 하고 참조 발췌문으로 뒷받침됩니다.'],
  [descriptions[2], '장비, 계산 방법 또는 근거에서 시작하는 설명용 맥락 경로입니다. 강조되는 관계는 바뀌지만 사실은 유지됩니다.'],
  [descriptions[3], '수두 평형은 펌프 A와 연결되고 참조 발췌문으로 뒷받침됩니다. 적용 가능성은 검토 대기이며 검토 관문은 열려 있습니다.'],
  [descriptions[4], '설명용 맥락 기록은 유형인 펌프와 개별 객체인 펌프 A, 계산 방법과 근거의 연결을 보존하고 적용 가능성을 검토 대기로 남깁니다.'],
];

export const css = `
.entry-O2 { color:#132d35; background:#f5f2e9; font-family:Inter,"Helvetica Neue",Arial,sans-serif; isolation:isolate; }
.entry-O2 text { fill:#132d35; font-family:inherit; }
.entry-O2 .O2-kicker { font-size:16px; font-weight:700; letter-spacing:1.6px; }
.entry-O2 .O2-heading { font-size:28px; font-weight:650; letter-spacing:-.8px; }
.entry-O2 .O2-label { font-size:18px; font-weight:600; }
.entry-O2 .O2-small { font-size:16px; font-weight:500; }
.entry-O2 .O2-value { font-size:22px; font-weight:650; letter-spacing:-.45px; }
.entry-O2 .O2-big { font-size:32px; font-weight:600; letter-spacing:-1px; }
.entry-O2 .O2-light { fill:#faf8f0; }
.entry-O2 .O2-muted { fill:#52696d; }
.entry-O2 .O2-ochre { fill:#815c26; }
.entry-O2 .O2-center { text-anchor:middle; }
.entry-O2 .O2-end { text-anchor:end; }
.entry-O2 .O2-hairline { fill:none; stroke:#132d35; stroke-width:1.5; }
.entry-O2 .O2-arrow { fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
.entry-O2 .O2-sweep { transform-box:fill-box; transform-origin:left center; }
.animating .entry-O2 .O2-sweep { animation:O2-weave 1.5s cubic-bezier(.21,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-O2 .O2-rise { animation:O2-rise 1.1s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-O2 .O2-late { animation:O2-rise 1.1s .55s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-O2 .O2-gate { animation:O2-open 1.6s .25s ease-out both; animation-play-state:var(--motion-play,running); }
@keyframes O2-weave { from { opacity:.15; transform:scaleX(.12); } to { opacity:1; transform:scaleX(1); } }
@keyframes O2-rise { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:translateY(0); } }
@keyframes O2-open { from { opacity:0; transform:translateX(-18px); } to { opacity:1; transform:translateX(0); } }
@media (prefers-reduced-motion:reduce) {
  .animating .entry-O2 .O2-sweep, .animating .entry-O2 .O2-rise, .animating .entry-O2 .O2-late, .animating .entry-O2 .O2-gate { animation:none; }
}
`;

const ink = '#173943';
const paper = '#f5f2e9';
const teal = '#39776f';
const ochre = '#b8863d';
const rust = '#b86b53';
const txt = (x, y, text, cls = 'O2-label', extra = '') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${text}</text>`;
const line = (x1,y1,x2,y2,color=ink,width=2,other='') => `<path d="M${x1} ${y1}H${x2}" fill="none" stroke="${color}" stroke-width="${width}" ${other}/>`;
const arrow = (x,y,color=ink) => `<path d="M${x-12} ${y}h24m-6-6 6 6-6 6" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
const icon = (type,x,y) => {
  const common = `fill="none" stroke="${ink}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"`;
  if (type==='equipment') return `<g ${common}><circle cx="${x}" cy="${y}" r="21"/><path d="M${x-13} ${y+13}l26-26-3 24zM${x-34} ${y}h13m42 0h13m-48 29h28"/></g>`;
  if (type==='property') return `<g ${common}><path d="M${x-29} ${y+15}v-33m0 33h58M${x-23} ${y+8}c13 0 11-28 24-28s12 22 27 8"/><path d="M${x+25} ${y-15}l3 3-5 1"/></g>`;
  if (type==='method') return `<g ${common}><path d="M${x-27} ${y-14}h17m-8-8v16m14-8h27M${x-27} ${y+9}h54m-54 11h54"/></g>`;
  return `<g ${common}><path d="M${x-19} ${y-27}h25l14 14v40h-39zM${x+6} ${y-27}v14h14M${x-10} ${y-3}h20m-20 10h20m-20 10h12"/></g>`;
};
function header(phase,heading) {
  const names=['CONTEXT','STRUCTURE','EXPLORE','REVIEW','OUTCOME'];
  return `${txt(40,35,'ENGINEERING ONTOLOGY','O2-kicker O2-muted')}${txt(680,35,`0${phase+1}`,'O2-kicker O2-end')}${txt(40,76,heading,'O2-heading')}${line(40,91,680,91,'#d3d8ce',1)}${txt(40,437,names[phase],'O2-kicker O2-muted')}${txt(680,437,'Illustrative model','O2-small O2-muted O2-end')}`;
}
function context() {
  const ribbons = [
    {x:64,fill:'#d4dfda',type:'Equipment',kind:'equipment',top:'Pump A',bottom:null},
    {x:216,fill:'#e8dbc4',type:'Property',kind:'property',top:'Flow',bottom:'condition'},
    {x:368,fill:'#bfcfcf',type:'Method',kind:'method',top:'Head',bottom:'balance'},
    {x:520,fill:'#e9cec1',type:'Evidence',kind:'evidence',top:'Reference',bottom:'excerpt'},
  ];
  return `${header(0,copy.context)}
    <path d="M42 181v-36q0-18 18-18h600q18 0 18 18v36" fill="none" stroke="${ink}" stroke-width="2"/>
    <path d="M290 115h140v25H290z" fill="${paper}"/>${txt(360,134,'System','O2-label O2-center')}
    <g class="O2-rise">${ribbons.map(r=>`<path d="M${r.x} 156h136v223l-68-17-68 17z" fill="${r.fill}"/>${txt(r.x+68,186,r.type,'O2-label O2-center')}${icon(r.kind,r.x+68,237)}${txt(r.x+68,304,r.top,'O2-value O2-center')}${r.bottom?txt(r.x+68,331,r.bottom,'O2-value O2-center'):''}`).join('')}</g>
    <path class="O2-sweep" d="M43 271h626" stroke="${paper}" stroke-width="6"/>
    ${txt(360,403,'Distinct types. Shared context.','O2-label O2-center')}`;
}
function structure() {
  const rows=[
    {y:126,color:'#d8e3df',stroke:teal,rel:'requires input',type:'Property',target:'Flow condition',pattern:'solid'},
    {y:223,color:'#eadcc5',stroke:ochre,rel:'applies to',type:'Equipment',target:'Pump A',pattern:'dash'},
    {y:320,color:'#e8d1c6',stroke:rust,rel:'supported by',type:'Evidence',target:'Reference excerpt',pattern:'double'},
  ];
  return `${header(1,copy.structure)}
    <path d="M270 112v286M452 112v286" stroke="#b7c3be" stroke-width="13"/>
    ${rows.map((r,i)=>`<g class="${i===0?'O2-rise':'O2-late'}"><path d="M40 ${r.y+5}Q154 ${r.y-8} 270 ${r.y+7}T480 ${r.y+7}Q580 ${r.y-6} 680 ${r.y+5}V${r.y+67}Q576 ${r.y+55} 480 ${r.y+69}T270 ${r.y+69}Q154 ${r.y+54} 40 ${r.y+67}Z" fill="${r.color}"/>
    <path d="M40 ${r.y+67}Q154 ${r.y+54} 270 ${r.y+69}T480 ${r.y+69}Q576 ${r.y+55} 680 ${r.y+67}" fill="none" stroke="${r.stroke}" stroke-width="${i===2?4:2.5}" ${i===1?'stroke-dasharray="8 5"':''}/>
    ${txt(60,r.y+25,'Method','O2-small O2-muted')}${txt(60,r.y+51,'Head balance','O2-value')}
    ${txt(362,r.y+32,r.rel,'O2-label O2-center')}${arrow(362,r.y+52,r.stroke)}
    ${txt(488,r.y+25,r.type,'O2-small O2-muted')}${txt(488,r.y+51,r.target,'O2-value')}
    </g>`).join('')}
    <path d="M270 205v22M452 302v20" stroke="#b7c3be" stroke-width="13"/>
    ${txt(360,408,'Named relations carry meaning.','O2-small O2-center')}`;
}
const perspectives = {
  equipment:{type:'Equipment',target:'Pump A',rel:'applies to',color:ochre,fill:'#eadcc5',name:'Equipment perspective',kind:'dash'},
  method:{type:'Property',target:'Flow condition',rel:'requires input',color:teal,fill:'#d8e3df',name:'Method perspective',kind:'solid'},
  evidence:{type:'Evidence',target:'Reference excerpt',rel:'supported by',color:rust,fill:'#e8d1c6',name:'Evidence perspective',kind:'double'},
};
function explore(choice) {
  const selected=perspectives[choice];
  const others=Object.keys(perspectives).filter(k=>k!==choice).map(k=>perspectives[k]);
  return `${header(2,copy[choice])}
    ${txt(40,123,selected.name,'O2-small O2-muted')}
    <g opacity=".65">
      <path d="M40 147C220 147 250 341 680 341" fill="none" stroke="${others[0].fill}" stroke-width="49"/>
      <path d="M40 341C220 341 250 147 680 147" fill="none" stroke="${others[1].fill}" stroke-width="49"/>
      <path d="M40 147C220 147 250 341 680 341" fill="none" stroke="${others[0].color}" stroke-width="2" ${others[0].kind==='dash'?'stroke-dasharray="8 6"':''}/>
      <path d="M40 341C220 341 250 147 680 147" fill="none" stroke="${others[1].color}" stroke-width="2" ${others[1].kind==='dash'?'stroke-dasharray="8 6"':''}/>
    </g>
    <path d="M449 125h239v40H449zM449 320h239v41H449z" fill="${paper}"/>
    ${txt(671,153,others[1].rel,'O2-label O2-end O2-muted')}${txt(671,349,others[0].rel,'O2-label O2-end O2-muted')}
    <g class="O2-sweep"><path d="M30 200Q183 188 328 207T690 200v84q-194 18-362 1T30 284Z" fill="${paper}" stroke="${paper}" stroke-width="14"/>
    <path d="M30 200Q183 188 328 207T690 200v84q-194 18-362 1T30 284Z" fill="${selected.fill}"/>
    <path d="M30 284q154-16 298 1t362-1" fill="none" stroke="${selected.color}" stroke-width="3" ${selected.kind==='dash'?'stroke-dasharray="10 6"':''}/>
    ${selected.kind==='double'?`<path d="M30 278q154-16 298 1t362-1" fill="none" stroke="${selected.color}" stroke-width="2"/>`:''}</g>
    <g class="O2-late">${txt(52,229,'Method','O2-small O2-muted')}${txt(52,259,'Head balance','O2-value')}
    ${txt(356,237,selected.rel,'O2-label O2-center')}${arrow(356,260,selected.color)}
    ${txt(490,229,selected.type,'O2-small O2-muted')}${txt(490,259,selected.target,'O2-value')}</g>
    ${txt(360,395,'Same facts. A different context path.','O2-label O2-center')}`;
}
function review() {
  return `${header(3,copy.review)}
    ${txt(53,128,'Connected','O2-small O2-muted')}${txt(664,128,'Still open','O2-small O2-ochre O2-end')}
    <path d="M63 154h314v164H63z" fill="#dbe4dd"/>
    <path d="M63 154h314" stroke="${teal}" stroke-width="4"/>
    ${txt(84,185,'Head balance','O2-value')}${txt(84,217,'applies to','O2-small O2-muted')}${txt(84,249,'Pump A','O2-big')}
    <g class="O2-sweep"><path d="M40 274h426l29 21-29 21H40z" fill="${ink}"/>
      ${txt(58,301,'supported by','O2-small O2-light')}${txt(206,301,'Reference excerpt','O2-label O2-light')}</g>
    <path d="M475 151v96m0 92v28" stroke="${ochre}" stroke-width="5"/>
    <g class="O2-gate"><path d="M509 151h118q29 0 29 29v158q0 29-29 29H509" fill="none" stroke="${ochre}" stroke-width="3" stroke-dasharray="7 6"/>
      ${txt(574,183,'Review gate','O2-small O2-center O2-ochre')}
      <circle cx="574" cy="239" r="27" fill="none" stroke="${ochre}" stroke-width="2.5" stroke-dasharray="6 6"/>
      <path d="M565 239h18" stroke="${ochre}" stroke-width="2.5"/>
      ${txt(574,296,'reviewed as','O2-small O2-center O2-ochre')}
      ${txt(574,328,'Still open','O2-value O2-center O2-ochre')}</g>
    ${txt(53,353,'Applicability pending review','O2-label O2-ochre')}
    ${txt(360,397,'Evidence supports a claim; review establishes applicability.','O2-small O2-center')}`;
}
function outcome() {
  return `${header(4,copy.outcome)}
    <g class="O2-rise"><path d="M69 114h568v260H69z" fill="#e8e5d8"/>
      <path d="M69 114h568v260" fill="none" stroke="#c3c8ba" stroke-width="2"/>
      <path d="M54 136h601v83H54z" fill="${ink}"/>
      ${txt(81,164,'Type','O2-small O2-light')}${txt(81,198,'Pump','O2-big O2-light')}
      ${arrow(303,181,'#adc2bc')}
      ${txt(379,164,'Instance','O2-small O2-light')}${txt(379,198,'Pump A','O2-big O2-light')}
      ${txt(86,247,'Method','O2-small O2-muted')}${txt(86,276,'Head balance','O2-value')}
      ${txt(389,247,'applies to','O2-small O2-ochre')}${txt(389,276,'Pump A','O2-value')}
      <path d="M54 294h601v45H54z" fill="#d2dfd7"/>
      ${txt(81,322,'supported by','O2-small')}${txt(278,322,'Reference excerpt','O2-value')}
      <path d="M637 219v155l-21 15-21-15V219" fill="#e5ceaa"/>
      <path d="M605 352v41m11-41v35m11-35v41" stroke="${ochre}" stroke-width="2" stroke-dasharray="4 4"/>
      ${txt(86,366,'Applicability pending review','O2-label O2-ochre')}
    </g>
    ${txt(40,405,'Traceable context','O2-small O2-muted')}${txt(680,405,'No engineering verified','O2-small O2-muted O2-end')}`;
}
export function render(phase = 0, choice = 'equipment', uid = 'O2') {
  const p=Number.isInteger(phase)&&phase>=0&&phase<=4?phase:0;
  const selected=Object.prototype.hasOwnProperty.call(perspectives,choice)?choice:'equipment';
  const prefix=String(uid).replace(/[^a-zA-Z0-9_-]/g,'_');
  const art=[context,structure,()=>explore(selected),review,outcome][p]();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" class="entry-O2" role="img" aria-label="${descriptions[p]}"><title id="${prefix}-title">${title}</title><path d="M0 0h720v460H0z" fill="${paper}"/>${art}</svg>`;
}
