export const id = 'C2';
export const title = 'The Water Bench';
export const summary = 'A transparent hydraulic experiment makes resistance, operating point, and missing evidence visible.';

const words = [
  ['The Water Bench', '물의 실험대'],
  ['A transparent hydraulic experiment makes resistance, operating point, and missing evidence visible.', '투명한 수리 실험으로 저항, 운전점, 누락된 근거를 드러냅니다.'],
  ['Make head visible', '수두를 눈에 보이게'],
  ['A little laboratory for a big decision.', '큰 결정을 위한 작은 실험실.'],
  ['Source', '공급 수조'], ['Lift', '양정'], ['Pump', '펌프'],
  ['Build the resistance', '저항의 구조를 만들다'],
  ['Every connection changes the system.', '모든 연결이 시스템을 바꿉니다.'],
  ['Throttle', '조절 밸브'], ['Pipe', '배관'], ['Units', '단위'],
  ['Boundary', '경계'], ['Origin', '입력 출처'],
  ['Inputs stay attached', '입력의 근거를 함께 보존'],
  ['Narrow the throat', '통로를 좁혀 보다'],
  ['Same pump. A different balance.', '같은 펌프, 달라지는 균형.'],
  ['Before valve', '밸브 전단'], ['After valve', '밸브 후단'],
  ['Same pump', '동일한 펌프'], ['Open connection', '열린 통로'],
  ['More resistance', '더 큰 저항'], ['Less flow · more head', '유량 감소 · 수두 증가'],
  ['Base resistance', '기본 저항'], ['Higher resistance', '저항 증가'],
  ['Expose the unknowns', '미확인 사항을 드러내다'],
  ['Curves meet. Evidence may not.', '곡선은 만나도 근거는 부족할 수 있습니다.'],
  ['Head', '수두'], ['Flow', '유량'], ['System', '시스템'],
  ['Input origin', '입력 출처'], ['OEM evidence', '제작사 근거'],
  ['Still unknown', '아직 미확인'], ['relative axes', '상대값 축'],
  ['Carry the questions forward', '확인할 질문을 다음 단계로'],
  ['A candidate travels with its open questions.', '후보에는 미해결 질문이 함께 따라갑니다.'],
  ['Candidate set', '후보군'], ['Check units', '단위 확인'],
  ['Attach OEM', '제작사 근거 첨부'], ['Human review', '사람의 검토'],
  ['Calculation ≠ selection', '계산 완료 ≠ 장비 선정'],
  ['Illustrative · relative values', '개념 예시 · 상대값'],
  ['Two transparent reservoirs and a pump show the idea of lifting water.', '투명한 두 수조와 펌프가 물을 끌어올리는 개념을 보여줍니다.'],
  ['An exploded pump, throttle, and pipe show the system structure with units, boundaries, and input origin.', '분리된 펌프, 조절 밸브, 배관이 단위, 경계, 입력 출처와 함께 시스템 구조를 보여줍니다.'],
  ['At base resistance, the same pump gives relative flow 0.87 and head 0.66. The downstream static head is 0.12.', '기본 저항에서 같은 펌프의 상대 유량은 0.87, 수두는 0.66입니다. 하류 정수두는 0.12입니다.'],
  ['At higher resistance, the same pump gives lower relative flow 0.67 and higher head 0.80. The downstream static head stays 0.12.', '저항이 커지면 같은 펌프의 상대 유량은 0.67로 줄고 수두는 0.80으로 높아집니다. 하류 정수두는 0.12로 유지됩니다.'],
  ['A falling pump curve intersects a rising system curve; input origin and OEM evidence remain review questions. All axes are relative.', '하강하는 펌프 곡선과 상승하는 시스템 곡선이 만납니다. 입력 출처와 제작사 근거는 검토 사항으로 남습니다. 모든 축은 상대값입니다.'],
  ['Two illustrative pipe candidates move into a review sheet requiring units, OEM evidence, and human review. Calculation is not equipment selection.', '두 개의 개념 배관 후보가 단위, 제작사 근거, 사람의 검토를 요구하는 검토서로 이어집니다. 계산은 장비 선정을 뜻하지 않습니다.'],
];
export const translations = words;

export const css = `
.entry-C2 { color:#183c43; font-family:Arial,"Noto Sans KR",sans-serif; isolation:isolate; }
.entry-C2 text { fill:#183c43; font-family:inherit; }
.entry-C2 .C2-title { font-size:30px; font-weight:700; letter-spacing:-.8px; }
.entry-C2 .C2-sub { font-size:18px; fill:#627d7f; }
.entry-C2 .C2-label { font-size:19px; font-weight:600; }
.entry-C2 .C2-small { font-size:17px; fill:#627d7f; }
.entry-C2 .C2-number { font-family:ui-monospace,SFMono-Regular,monospace; font-size:24px; font-weight:600; }
.entry-C2 .C2-line { fill:none; stroke:#214c53; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
.entry-C2 .C2-water { fill:#66d6cb; fill-opacity:.55; }
.entry-C2 .C2-glass { fill:#fafff9; fill-opacity:.22; stroke:#52777a; stroke-width:2; }
.entry-C2 .C2-tick { stroke:#89a4a1; stroke-width:1; }
.entry-C2 .C2-flow { stroke-dasharray:12 13; }
.animating .entry-C2 .C2-rise { animation:C2-rise 2.2s cubic-bezier(.2,.7,.25,1) both; animation-play-state:var(--motion-play,running); transform-box:fill-box; transform-origin:center bottom; }
.animating .entry-C2 .C2-flow { animation:C2-flow 3.6s linear both; animation-play-state:var(--motion-play,running); }
.animating .entry-C2 .C2-wheel { animation:C2-wheel 3.6s cubic-bezier(.2,.6,.3,1) both; animation-play-state:var(--motion-play,running); transform-box:fill-box; transform-origin:center; }
.animating .entry-C2 .C2-reveal { animation:C2-reveal 1.6s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C2 .C2-late { animation:C2-reveal 1.4s .5s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C2 .C2-point { animation:C2-point 2.3s ease-out both; animation-play-state:var(--motion-play,running); transform-box:fill-box; transform-origin:center; }
@keyframes C2-rise { from { transform:scaleY(.18); opacity:.3; } to { transform:scaleY(1); opacity:1; } }
@keyframes C2-flow { from { stroke-dashoffset:100; } to { stroke-dashoffset:0; } }
@keyframes C2-wheel { from { transform:rotate(-240deg); } to { transform:rotate(0); } }
@keyframes C2-reveal { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
@keyframes C2-point { 0% { transform:scale(.2); opacity:0; } 65% { transform:scale(1.2); opacity:1; } 100% { transform:scale(1); opacity:1; } }
@media(prefers-reduced-motion:reduce) {
  .animating .entry-C2 .C2-rise, .animating .entry-C2 .C2-flow, .animating .entry-C2 .C2-wheel, .animating .entry-C2 .C2-reveal, .animating .entry-C2 .C2-late, .animating .entry-C2 .C2-point { animation:none; }
}
`;

const t = (x,y,s,cls='C2-label',anchor='start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${s}</text>`;
const line = (x1,y1,x2,y2,more='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${more}/>`;
const glass = (x,y,w,h,surface,n,uid) => {
  const b=y+h;
  return `<g><defs><clipPath id="${uid}-v-${n}"><path d="M${x+2} ${y}H${x+w-2}V${b-12}Q${x+w-2} ${b+3} ${x+w/2} ${b+3}Q${x+2} ${b+3} ${x+2} ${b-12}Z"/></clipPath></defs>
  <path class="C2-glass" d="M${x} ${y}V${b-12}Q${x} ${b+5} ${x+w/2} ${b+5}Q${x+w} ${b+5} ${x+w} ${b-12}V${y}"/>
  <g clip-path="url(#${uid}-v-${n})"><g class="C2-rise"><path class="C2-water" d="M${x} ${surface}H${x+w}V${b+9}H${x}Z"/><ellipse cx="${x+w/2}" cy="${surface}" rx="${w/2}" ry="8" fill="#87e8d8" stroke="#268e88" stroke-width="1.5"/></g></g>
  <ellipse cx="${x+w/2}" cy="${y}" rx="${w/2}" ry="9" fill="none" stroke="#52777a" stroke-width="2"/>
  ${line(x+11,y+22,x+11,b-18,'stroke="white" stroke-width="4" opacity=".85"')}
  ${Array.from({length:Math.floor((h-25)/24)},(_,i)=>line(x+w-13,y+24+i*24,x+w-4,y+24+i*24,'class="C2-tick"')).join('')}</g>`;
};
const wheel = (x,y,r,uid) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="#f3f2e9" stroke="#214c53" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="${r-8}" fill="#c7eee1" stroke="#86b7ae"/><g class="C2-wheel">${[0,60,120,180,240,300].map(a=>`<path d="M${x} ${y}Q${x+r*.2} ${y-r*.75} ${x+r*.68} ${y-r*.3}Q${x+r*.45} ${y-r*.15} ${x} ${y}" fill="#228d85" transform="rotate(${a} ${x} ${y})"/>`).join('')}</g><circle cx="${x}" cy="${y}" r="${r*.13}" fill="#183c43"/></g>`;
const flow = (d,width=8,color='#369e99') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/><path d="${d}" class="C2-flow" fill="none" stroke="#e9fff1" stroke-width="2.5" opacity=".95"/>`;
const arrow = (x,y,color='#1f8a82') => `<path d="M${x-11} ${y-7}L${x} ${y}L${x-11} ${y+7}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
const header = (a,b,n) => `${t(38,51,a,'C2-title')}${t(39,80,b,'C2-sub')}${t(677,50,`0${n+1}`,'C2-number','end')}`;

function context(uid) {
  return `${header('Make head visible','A little laboratory for a big decision.',0)}
  <ellipse cx="362" cy="375" rx="289" ry="22" fill="#e1e6d8"/>
  <path d="M160 318V350Q160 362 174 362H513Q530 362 530 345V315" fill="none" stroke="#537578" stroke-width="19"/>
  <path d="M160 318V350Q160 362 174 362H513Q530 362 530 345V315" fill="none" stroke="#fafff7" stroke-width="15"/>
  ${flow('M160 318V350Q160 362 174 362H513Q530 362 530 345V315',7)}
  ${glass(89,140,142,183,251,0,uid)}${glass(459,140,142,183,180,1,uid)}
  <path d="M250 251H425M250 180H425" stroke="#99aca0" stroke-width="1.5" stroke-dasharray="4 7"/>
  <path d="M379 184V247M372 191L379 183L386 191M372 241L379 249L386 241" class="C2-line"/>
  ${t(359,224,'ΔH','C2-number','end')}${t(160,119,'Source','C2-label','middle')}${t(530,119,'Lift','C2-label','middle')}
  ${wheel(344,362,40,uid)}${arrow(437,362)}
  ${t(344,304,'Pump','C2-label','middle')}
  <path d="M344 314V318" class="C2-line"/>`;
}

function structure(uid) {
  return `${header('Build the resistance','Every connection changes the system.',1)}
  <path d="M68 229H656" stroke="#b6c9bc" stroke-width="1.5" stroke-dasharray="4 8"/>
  <path d="M78 209H193M78 249H193M296 209H431M296 249H431M501 209H651M501 249H651" class="C2-line"/>
  ${flow('M74 229H655',8)}${arrow(655,229)}
  <g class="C2-reveal">${wheel(142,229,64,uid)}${t(142,128,'Pump','C2-label','middle')}${line(142,141,142,157,'class="C2-line"')}</g>
  <g class="C2-late"><path d="M321 202L365 219L409 202V256L365 239L321 256Z" fill="#eed09b" stroke="#966b37" stroke-width="2"/>
  <path d="M365 219V171M342 170H388" stroke="#9b6a3b" stroke-width="5" stroke-linecap="round"/>
  <circle cx="365" cy="229" r="12" fill="#46c1b1" stroke="#966b37" stroke-width="2"/>
  ${t(365,128,'Throttle','C2-label','middle')}
  ${line(306,197,306,261,'stroke="#637d76" stroke-width="5"')}${line(424,197,424,261,'stroke="#637d76" stroke-width="5"')}</g>
  <g class="C2-reveal"><ellipse cx="580" cy="229" rx="60" ry="68" fill="#e6e6da" stroke="#4f7172" stroke-width="2"/><ellipse cx="580" cy="229" rx="40" ry="47" fill="#94e2d0" stroke="#4f7172" stroke-width="2"/>
  <path d="M552 214Q580 199 607 215M552 243Q580 228 607 244" fill="none" stroke="#eaffef" stroke-width="3"/>
  ${t(580,128,'Pipe','C2-label','middle')}${line(580,141,580,152,'class="C2-line"')}</g>
  <path d="M89 302V316H194V302M312 282V316H418V282M526 309V316H632V309" fill="none" stroke="#94a89b" stroke-width="1.5"/>
  ${t(142,345,'Units','C2-label','middle')}${t(365,345,'Boundary','C2-label','middle')}${t(580,345,'Origin','C2-label','middle')}
  ${t(360,395,'Inputs stay attached','C2-number','middle')}`;
}

function explore(uid,alt) {
  const q=Math.sqrt(.88/(.45+(alt?1.5:.7)));
  const h=1-.45*q*q;
  const surf=310-h*212;
  const aperture=alt?8:20;
  return `${header('Narrow the throat','Same pump. A different balance.',2)}
  ${t(252,115,'Before valve','C2-label','middle')}${t(531,115,'After valve','C2-label','middle')}
  <path d="M92 322H640" fill="none" stroke="#547576" stroke-width="28" stroke-linecap="round"/>
  <path d="M92 322H640" fill="none" stroke="#fafff4" stroke-width="23" stroke-linecap="round"/>
  ${flow('M93 322H639',alt?6:12)}${arrow(649,322)}
  <path d="M252 308V322M531 308V322" stroke="#547576" stroke-width="12"/>
  <path d="M252 308V322M531 308V322" stroke="#69cdbb" stroke-width="8"/>
  ${glass(211,137,82,172,surf,0,uid)}${glass(490,137,82,172,310-.12*212,1,uid)}
  <path d="M183 ${surf}V309M176 ${surf}H190M176 309H190" class="C2-line"/>
  ${t(163,230,'H','C2-number','middle')}
  <path d="M298 ${surf}H337M577 ${310-.12*212}H617" stroke="#8aa69c" stroke-dasharray="4 5"/>
  ${t(316,surf-13,h.toFixed(2),'C2-number')}${t(590,271,'0.12','C2-number')}
  ${wheel(112,322,31,uid)}
  <g><rect x="370" y="285" width="39" height="74" rx="5" fill="#f2e7ce" stroke="#976833" stroke-width="2"/>
  <path d="M374 289H405V${322-aperture/2}H374ZM374 ${322+aperture/2}H405V355H374Z" fill="${alt?'#c58749':'#dbb87e'}"/>
  ${flow(`M371 322H408`,alt?5:10)}
  <path d="M389 285V254M368 253H410" stroke="#966b37" stroke-width="4" stroke-linecap="round"/>
  <path d="M372 269L389 280L406 269" fill="none" stroke="#966b37" stroke-width="2" opacity="${alt?1:0}"/></g>
  ${t(112,374,'Same pump','C2-small','middle')}${t(294,374,`Q = ${q.toFixed(2)}`,'C2-number','middle')}
  ${t(500,374,alt?'More resistance':'Open connection','C2-label','middle')}
  ${t(500,401,alt?'Less flow · more head':'Base resistance','C2-small','middle')}`;
}

function review(uid,alt) {
  const px=q=>75+q*316;
  const py=h=>332-h*213;
  const curve=k=>Array.from({length:70},(_,i)=>{const q=i*1.1/69;return `${i?'L':'M'}${px(q).toFixed(2)} ${py(k===0?1-.45*q*q:.12+k*q*q).toFixed(2)}`;}).join(' ');
  const k=alt?1.5:.7;
  const q=Math.sqrt(.88/(.45+k)); const h=1-.45*q*q;
  return `${header('Expose the unknowns','Curves meet. Evidence may not.',3)}
  <defs><clipPath id="${uid}-plot"><rect x="75" y="100" width="348" height="232"/></clipPath></defs>
  <path d="M75 105V332H427" class="C2-line"/>
  ${[.25,.5,.75,1].map(v=>line(75,py(v),422,py(v),'stroke="#dce2d6" stroke-width="1"')).join('')}
  ${[.25,.5,.75,1].map(v=>line(px(v),106,px(v),332,'stroke="#dce2d6" stroke-width="1"')).join('')}
  <g clip-path="url(#${uid}-plot)">
  <path d="${curve(0)}" fill="none" stroke="#237f7b" stroke-width="4"/>
  <path d="${curve(alt?.7:1.5)}" fill="none" stroke="#c9bea4" stroke-width="2" stroke-dasharray="5 6"/>
  <path d="${curve(k)}" fill="none" stroke="#c18141" stroke-width="4"/>
  <path d="M75 ${py(h)}H${px(q)}V332" fill="none" stroke="#658b83" stroke-width="1.5" stroke-dasharray="4 6"/>
  <circle cx="${px(q)}" cy="${py(h)}" r="13" fill="#f9f7eb" stroke="#183c43" stroke-width="2.5" class="C2-point"/>
  <circle cx="${px(q)}" cy="${py(h)}" r="4" fill="#183c43"/>
  </g>
  ${t(75,99,'Head','C2-small')}${t(420,360,'Flow','C2-small','end')}${t(75,360,'0','C2-small')}
  ${t(245,396,'relative axes','C2-small','middle')}
  <path d="M471 125H504" stroke="#237f7b" stroke-width="4"/>${t(516,132,'Same pump','C2-label')}
  <path d="M471 169H504" stroke="#c18141" stroke-width="4"/>${t(516,176,'System','C2-label')}
  <path d="M484 220V350" stroke="#bdc8b8" stroke-width="2"/>
  <circle cx="484" cy="242" r="9" fill="#f3f2e9" stroke="#9d7a49" stroke-width="2"/>${t(505,248,'Input origin','C2-label')}
  <circle cx="484" cy="290" r="9" fill="#f3f2e9" stroke="#9d7a49" stroke-width="2"/>${t(505,296,'OEM evidence','C2-label')}
  <path d="M476 348L484 356L492 348" fill="none" stroke="#9d7a49" stroke-width="2"/>
  ${t(505,355,'Still unknown','C2-small')}`;
}

function outcome(uid) {
  return `${header('Carry the questions forward','A candidate travels with its open questions.',4)}
  <path d="M37 258H424" stroke="#b4c7b9" stroke-width="2" stroke-dasharray="5 8"/>
  <ellipse cx="224" cy="335" rx="171" ry="18" fill="#dfe5d6"/>
  <g class="C2-reveal"><path d="M134 182L183 171Q237 174 237 253Q237 329 183 332L134 321" fill="#d7dfce" stroke="#507472" stroke-width="2"/>
  <ellipse cx="134" cy="252" rx="56" ry="71" fill="#edf0df" stroke="#507472" stroke-width="2"/><ellipse cx="134" cy="252" rx="35" ry="46" fill="#8dddc6" stroke="#507472" stroke-width="2"/>
  ${t(134,259,'A','C2-number','middle')}</g>
  <g class="C2-late"><path d="M290 154L322 148Q381 150 381 242Q381 333 322 337L290 330" fill="#d5ddce" stroke="#507472" stroke-width="2"/>
  <ellipse cx="290" cy="242" rx="64" ry="88" fill="#eff1df" stroke="#507472" stroke-width="2"/><ellipse cx="290" cy="242" rx="46" ry="64" fill="#a9e5d0" stroke="#507472" stroke-width="2"/>
  ${t(290,250,'B','C2-number','middle')}</g>
  <path d="M389 244H426M418 236L427 244L418 252" class="C2-line"/>
  <g class="C2-late"><path d="M444 126H622L661 165V350H444Z" fill="#fffdf3" stroke="#69847a" stroke-width="2"/>
  <path d="M622 126V165H661" fill="#e1e9d6" stroke="#69847a" stroke-width="2"/>
  ${t(461,190,'Candidate set','C2-label')}
  <path d="M461 208H640" stroke="#d5dfcf"/>
  ${[242,282,322].map(y=>`<rect x="462" y="${y-14}" width="13" height="13" rx="2" fill="none" stroke="#a48757" stroke-width="1.5"/>`).join('')}
  ${t(487,241,'Check units','C2-small')}${t(487,281,'Attach OEM','C2-small')}${t(487,321,'Human review','C2-small')}</g>
  ${t(360,398,'Calculation ≠ selection','C2-number','middle')}`;
}

export function render(phase=0,choice='base',uid='C2') {
  const p=Math.max(0,Math.min(4,Math.trunc(Number(phase)||0)));
  const alt=choice==='alternate';
  const u=String(uid).replace(/[^a-zA-Z0-9_-]/g,'_')||'C2';
  const arias=[words[42][0],words[43][0],words[alt?45:44][0],words[46][0],words[47][0]];
  const scenes=[()=>context(u),()=>structure(u),()=>explore(u,alt),()=>review(u,alt),()=>outcome(u)];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${arias[p]}" class="entry-C2">
  <rect width="720" height="460" rx="20" fill="#f3f2e9"/>
  <path d="M24 106H32M24 106V114M696 106H688M696 106V114" stroke="#b6c5b6" fill="none"/>
  ${scenes[p]()}
  <path d="M39 424H681" stroke="#ccd7c8"/>
  ${t(39,447,'Illustrative · relative values','C2-small')}
  <circle cx="667" cy="442" r="4" fill="#66b9a0"/>
  </svg>`;
}
