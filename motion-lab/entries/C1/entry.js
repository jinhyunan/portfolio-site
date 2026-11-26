export const id = 'C1';
export const title = 'The hydraulic instrument';
export const summary = 'A tactile instrument turns resistance into a visible operating-point shift.';

export const translations = [
  [title, '유압 계기'],
  [summary, '저항에 따른 운전점 이동을 감각적인 계기로 보여 줍니다.'],
  ['CALC / INSTRUMENT 01', 'CALC / 계기 01'],
  ['Before the needle moves', '지침이 움직이기 전에'],
  ['One loop. Three dependencies.', '하나의 회로, 세 가지 의존 조건'],
  ['Resistance changes the answer', '저항이 바꾸는 결과'],
  ['A candidate needs evidence', '후보에는 근거가 필요합니다'],
  ['A result, ready for review', '검토를 위해 준비된 결과'],
  ['Define the boundary', '경계를 정합니다'],
  ['Trace every input', '모든 입력의 출처를 확인합니다'],
  ['Keep units attached', '단위를 함께 유지합니다'],
  ['Boundary', '경계'], ['Units', '단위'], ['Provenance', '출처'],
  ['Pump', '펌프'], ['Resistance', '저항'], ['Flow', '유량'],
  ['Same pump', '동일 펌프'], ['Base resistance', '기본 저항'],
  ['Higher resistance', '저항 증가'], ['Lower flow', '유량 감소'],
  ['Relative flow', '상대 유량'], ['Relative axes', '상대 축'],
  ['Operating point', '운전점'], ['Pipe-size candidates', '관경 후보'],
  ['Inputs unknown', '미확인 입력'], ['OEM evidence needed', '제작사 근거 필요'],
  ['No size selected', '선정된 관경 없음'],
  ['Calculation complete', '계산 완료'], ['Selection pending', '선정 대기'],
  ['Human review', '사람의 검토'], ['Inputs + assumptions', '입력 + 가정'],
  ['Illustrative only · no equipment selection', '설명용 예시 · 장비 선정 아님'],
  ['Hydraulic instrument context: boundary, units and input provenance precede calculation.', '유압 계기 개요: 계산에 앞서 경계, 단위, 입력 출처를 확인합니다.'],
  ['Hydraulic loop structure showing a pump, system resistance and flow, with units, boundary and provenance.', '펌프, 계통 저항, 유량 및 단위, 경계, 출처를 보여 주는 유압 회로 구조입니다.'],
  ['Base resistance: the normalized pump and system curves meet at relative flow 0.875.', '기본 저항: 정규화된 펌프와 계통 곡선의 교점은 상대 유량 0.875입니다.'],
  ['Higher resistance: the same pump meets the steeper system curve at lower relative flow 0.672.', '저항 증가: 동일 펌프와 더 가파른 계통 곡선의 교점은 감소한 상대 유량 0.672입니다.'],
  ['Review three illustrative pipe-size candidates. Unknown inputs and missing OEM evidence remain unresolved.', '설명용 관경 후보 세 개를 검토합니다. 미확인 입력과 누락된 제작사 근거는 미해결 상태로 남습니다.'],
  ['Illustrative calculation is complete. Equipment selection awaits evidence and human review.', '설명용 계산이 완료되었습니다. 장비 선정에는 근거와 사람의 검토가 필요합니다.'],
];

export const css = `
.entry-C1 { width:100%; height:auto; display:block; background:#0e2028; border-radius:24px; color:#eff2e8; font-family:Arial,Helvetica,sans-serif; }
.entry-C1 text { fill:#eff2e8; }
.entry-C1 .kicker { fill:#88a8ab; font-size:16px; font-weight:700; letter-spacing:2px; }
.entry-C1 .heading { font-size:30px; font-weight:600; letter-spacing:-.8px; }
.entry-C1 .label { font-size:20px; font-weight:500; }
.entry-C1 .small { font-size:17px; }
.entry-C1 .mono { font-family:Menlo,Consolas,monospace; font-size:18px; }
.entry-C1 .number { font-family:Menlo,Consolas,monospace; font-size:52px; letter-spacing:-3px; }
.entry-C1 .muted { fill:#91afb2; }
.entry-C1 .cyan { fill:#80e6db; }
.entry-C1 .amber { fill:#ffb473; }
.entry-C1 .line { fill:none; stroke:#567780; stroke-width:2; }
.entry-C1 .strong { fill:none; stroke:#80e6db; stroke-width:4; stroke-linecap:round; stroke-linejoin:round; }
.entry-C1 .warm-line { fill:none; stroke:#ffb473; stroke-width:4; stroke-linecap:round; stroke-linejoin:round; }
.entry-C1 .tick { stroke:#688b91; stroke-width:2; }
.entry-C1 .rotor { transform-box:fill-box; transform-origin:center; }
.entry-C1 .reveal { transform-box:fill-box; transform-origin:center; }
.animating .entry-C1 .rotor { animation:C1-rotate 3.8s cubic-bezier(.18,.7,.2,1) 1 both; animation-play-state:var(--motion-play,running); }
.animating .entry-C1 .reveal { animation:C1-rise .9s ease-out 1 both; animation-play-state:var(--motion-play,running); }
.animating .entry-C1 .late { animation:C1-rise 1.2s .25s ease-out 1 both; animation-play-state:var(--motion-play,running); }
.animating .entry-C1 .draw { stroke-dasharray:1; animation:C1-draw 1.6s ease-out 1 both; animation-play-state:var(--motion-play,running); }
.animating .entry-C1 .pulse { animation:C1-point 1.6s ease-out 2; animation-play-state:var(--motion-play,running); }
.animating .entry-C1 .stream { animation:C1-stream 2s ease-out 2; animation-play-state:var(--motion-play,running); }
@keyframes C1-rotate { from { transform:rotate(-135deg); } to { transform:rotate(0deg); } }
@keyframes C1-rise { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
@keyframes C1-draw { from { stroke-dashoffset:1; } to { stroke-dashoffset:0; } }
@keyframes C1-point { 0% { opacity:.4; } 50%,100% { opacity:1; } }
@keyframes C1-stream { from { stroke-dashoffset:36; } to { stroke-dashoffset:0; } }
@media (prefers-reduced-motion:reduce) {
  .animating .entry-C1 .rotor, .animating .entry-C1 .reveal, .animating .entry-C1 .late,
  .animating .entry-C1 .draw, .animating .entry-C1 .pulse, .animating .entry-C1 .stream { animation:none; }
}
`;

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x, y, value, cls = 'label', anchor = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${escape(value)}</text>`;
const line = (x1, y1, x2, y2, cls = 'line') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
const circle = (x,y,r,attr='') => `<circle cx="${x}" cy="${y}" r="${r}" ${attr}/>`;
const point = (cx, cy, radius, angle) => [cx + radius * Math.cos(angle * Math.PI / 180), cy + radius * Math.sin(angle * Math.PI / 180)];
const arc = (cx, cy, r, start, end) => {
  const a = point(cx,cy,r,start), b=point(cx,cy,r,end);
  return `M ${a[0]} ${a[1]} A ${r} ${r} 0 ${end-start > 180 ? 1 : 0} 1 ${b[0]} ${b[1]}`;
};

function impeller(cx, cy, r) {
  return `<g transform="translate(${cx} ${cy})"><g class="rotor">${Array.from({length:6},(_,i)=>`<path d="M 8 -7 C ${r*.37} ${-r*.72}, ${r*.9} ${-r*.75}, ${r*.95} -9 C ${r*.59} ${-r*.26}, ${r*.39} ${r*.15}, 12 12 Z" transform="rotate(${i*60})" fill="${i%2 ? '#325961' : '#527b80'}" stroke="#80e6db" stroke-width="1.4"/>`).join('')}${circle(0,0,13,'fill="#0e2028" stroke="#ffb473" stroke-width="3"')}</g></g>`;
}

function dial(cx,cy,r,q,faceId,withNumber=true) {
  const angle=145+q*250;
  const tip=point(cx,cy,r*.79,angle);
  const tail=point(cx,cy,r*.19,angle+180);
  let ticks='';
  for(let i=0;i<=20;i++) {
    const a=point(cx,cy,r*.83,145+i*12.5), b=point(cx,cy,r*(i%5===0?.69:.76),145+i*12.5);
    ticks += line(a[0],a[1],b[0],b[1],'tick');
  }
  return `${circle(cx,cy,r,`fill="url(#${faceId})" stroke="#47676e" stroke-width="2"`)}
  ${circle(cx,cy,r-9,'fill="none" stroke="#294a54" stroke-width="1"')}${ticks}
  <path d="${arc(cx,cy,r*.9,145,145+q*250)}" class="warm-line draw" pathLength="1"/>
  <g class="reveal">${line(tail[0],tail[1],tip[0],tip[1],'warm-line')}${circle(cx,cy,8,'fill="#ffb473"')}${circle(cx,cy,3,'fill="#0e2028"')}</g>
  ${withNumber ? text(cx,cy+r*.58,q.toFixed(2),'number','middle') : ''}
  ${text(cx-r*.62,cy+r*.65,'0','mono muted','middle')}${text(cx+r*.62,cy+r*.65,'1','mono muted','middle')}`;
}

function context(faceId) {
  return `<g class="reveal">
    ${text(36,143,'Define the boundary')}${text(36,197,'Trace every input')}${text(36,251,'Keep units attached')}
    ${[142,196,250].map(y=>`${circle(293,y-7,4,'fill="#80e6db"')}${line(309,y-7,356,y-7)}`).join('')}
    <path d="M 369 123 V 282 M 369 123 H 385 M 369 282 H 385" class="line"/>
    ${dial(526,225,128,.66,faceId,false)}${impeller(526,225,48)}
    ${text(526,391,'Inputs + assumptions','label cyan','middle')}
    <path d="M 36 302 H 277 L 323 349 H 389" class="line draw" pathLength="1"/>
    ${text(36,340,'Q · H · K','number amber')}
  </g>`;
}

function structure() {
  return `<g>
    <path d="M 66 224 H 200 M 350 224 H 623 V 335 H 126 V 224" fill="none" stroke="#2c4b55" stroke-width="18" stroke-linejoin="round"/>
    <path d="M 66 224 H 200 M 350 224 H 623 V 335 H 126 V 224" fill="none" stroke="#80e6db" stroke-width="2" stroke-dasharray="8 10" class="stream"/>
    ${circle(275,224,78,'fill="#16333d" stroke="#80e6db" stroke-width="2"')}${circle(275,224,65,'class="line"')}${impeller(275,224,57)}
    <g class="reveal"><path d="M 428 200 L 453 224 L 428 248 Z M 478 200 L 453 224 L 478 248 Z" fill="#0e2028" stroke="#ffb473" stroke-width="3"/>
    ${line(453,224,453,171,'warm-line')}${line(436,171,470,171,'warm-line')}</g>
    <path d="M 567 214 L 584 224 L 567 234" class="strong"/>
    ${text(275,126,'Pump','label cyan','middle')}${text(453,126,'Resistance','label amber','middle')}${text(595,285,'Flow','label cyan','middle')}
    <path d="M 36 182 V 267 M 36 182 H 58 M 36 267 H 58" class="line"/>
    ${text(72,149,'Boundary','small muted')}
    ${text(126,385,'Units','label')}${text(315,385,'Provenance','label')}${text(595,385,'Q →','mono cyan','middle')}
    ${circle(104,379,5,'fill="#ffb473"')}${circle(293,379,5,'fill="#ffb473"')}
  </g>`;
}

function explore(alternate,faceId) {
  const k=alternate?1.5:.7, q=Math.sqrt(.88/(.45+k)), h=1-.45*q*q;
  const X=x=>400+246*x, Y=y=>341-226*y;
  const curve=fn=>Array.from({length:61},(_,i)=>{const x=i/60; return `${i?'L':'M'} ${X(x).toFixed(2)} ${Y(fn(x)).toFixed(2)}`;}).join(' ');
  // Both curves use the same Q and H scales. Values above the graph are clipped.
  const systemMax=Math.min(1,Math.sqrt(.88/k));
  const systemCurve=Array.from({length:61},(_,i)=>{const x=systemMax*i/60;return `${i?'L':'M'} ${X(x).toFixed(2)} ${Y(.12+k*x*x).toFixed(2)}`;}).join(' ');
  const px=X(q),py=Y(h);
  return `${dial(190,228,125,q,faceId)}
    ${text(190,388,'Relative flow','label','middle')}
    <g>${line(400,115,400,341)}${line(400,341,656,341)}
    ${text(387,115,'H','mono muted','end')}${text(661,346,'Q','mono muted')}
    ${text(400,365,'0','small muted','middle')}${text(646,365,'1','small muted','middle')}
    <path d="${curve(x=>1-.45*x*x)}" class="strong draw" pathLength="1"/>
    <path d="${systemCurve}" class="warm-line draw" pathLength="1"/>
    <path d="M ${px} 341 V ${py} H 400" class="line" stroke-dasharray="4 6"/>
    ${circle(px,py,12,'fill="#ffb473" fill-opacity=".15" class="pulse"')}${circle(px,py,6,'fill="#ffb473" stroke="#0e2028" stroke-width="2"')}
    ${text(407,144,'Same pump','small cyan')}${text(444,318,alternate?'Lower flow':'Operating point','small amber')}
    ${text(521,388,'Relative axes','small muted','middle')}
    </g>
    ${text(36,101,alternate?'Higher resistance':'Base resistance','small amber')}
    <path d="M 325 204 H 367 M 354 196 L 367 204 L 354 212" class="line"/>
    ${text(344,247,alternate?'K ↑':'K','mono amber','middle')}`;
}

function review() {
  return `${text(36,123,'Pipe-size candidates','label cyan')}
    <path d="M 96 220 H 621" class="line draw" pathLength="1"/>
    ${[32,49,66].map((r,i)=>{
      const x=140+i*212;
      return `<g class="${i?'late':'reveal'}">${circle(x,222,r+9,'fill="#16333d" stroke="#567780" stroke-width="2"')}${circle(x,222,r,'fill="#0e2028" stroke="#80e6db" stroke-width="3"')}${text(x,226,`D${i+1}`,'mono','middle')}${line(x,222+r+16,x,310)}</g>`;
    }).join('')}
    ${text(352,337,'No size selected','label','middle')}
    <path d="M 37 371 H 679" class="line"/>
    <path d="M 46 383 L 53 395 L 39 395 Z" fill="none" stroke="#ffb473" stroke-width="2"/>
    ${text(66,396,'Inputs unknown','small amber')}
    ${circle(337,390,7,'fill="none" stroke="#ffb473" stroke-width="2" stroke-dasharray="3 3"')}
    ${text(354,396,'OEM evidence needed','small amber')}`;
}

function outcome(alternate,faceId) {
  const q=Math.sqrt(.88/(.45+(alternate?1.5:.7)));
  return `<g class="reveal">
    ${circle(166,235,105,`fill="url(#${faceId})" stroke="#355860" stroke-width="2"`)}
    <path d="${arc(166,235,105,-90,175)}" class="strong draw" pathLength="1"/>
    ${text(166,216,'Q*','mono cyan','middle')}${text(166,270,q.toFixed(2),'number','middle')}
    ${text(166,370,'Relative flow','label','middle')}
    <path d="M 282 235 H 326" class="strong"/>
    <path d="M 316 227 L 326 235 L 316 243" class="strong"/>
    ${text(357,173,'Calculation complete','label cyan')}
    ${text(357,219,'Inputs + assumptions','label')}
    ${text(357,266,'Human review','label amber')}
    <path d="M 357 294 H 671" class="line"/>
    ${circle(364,327,7,'fill="none" stroke="#ffb473" stroke-width="2" stroke-dasharray="3 4"')}
    ${text(383,334,'Selection pending','label amber')}
  </g>`;
}

export function render(phase = 0, choice = 'base', uid = 'C1') {
  const p = Math.max(0,Math.min(4,Number.isFinite(Number(phase))?Math.trunc(Number(phase)):0));
  const alternate=choice==='alternate';
  const prefix=String(uid).replace(/[^a-zA-Z0-9_-]/g,'')||'C1';
  const faceId=`${prefix}-face`;
  const headings=['Before the needle moves','One loop. Three dependencies.','Resistance changes the answer','A candidate needs evidence','A result, ready for review'];
  const labels=[
    'Hydraulic instrument context: boundary, units and input provenance precede calculation.',
    'Hydraulic loop structure showing a pump, system resistance and flow, with units, boundary and provenance.',
    alternate?'Higher resistance: the same pump meets the steeper system curve at lower relative flow 0.672.':'Base resistance: the normalized pump and system curves meet at relative flow 0.875.',
    'Review three illustrative pipe-size candidates. Unknown inputs and missing OEM evidence remain unresolved.',
    'Illustrative calculation is complete. Equipment selection awaits evidence and human review.'
  ];
  const body=[()=>context(faceId),structure,()=>explore(alternate,faceId),review,()=>outcome(alternate,faceId)][p]();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${escape(labels[p])}" class="entry-C1">
    <defs><radialGradient id="${faceId}"><stop offset="0" stop-color="#24434b"/><stop offset="1" stop-color="#102b35"/></radialGradient></defs>
    <rect width="720" height="460" rx="24" fill="#0e2028"/>
    ${text(36,31,'CALC / INSTRUMENT 01','kicker')}${text(36,70,headings[p],'heading')}
    ${text(682,32,`${p+1} / 5`,'mono muted','end')}
    ${body}
    ${line(36,414,684,414)}${text(36,441,'Illustrative only · no equipment selection','small muted')}
    <path d="M 618 437 h 10 m 8 0 h 10 m 8 0 h 10 m 8 0 h 10" stroke="#35555e" stroke-width="3"/>
  </svg>`;
}
