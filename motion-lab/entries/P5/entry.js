export const id = 'P5';
export const title = 'Layers into register';
export const summary = 'Drawing, ports, calculations and review align without losing their separate identities.';

const copy = {
  context: ['A drawing is one layer', 'The rest must stay connected'],
  structure: ['Separate the layers', 'Same identities. Different responsibilities.'],
  base: ['One route to examine', 'Calculation follows the connected path'],
  alternate: ['A bypass changes the question', 'A new path needs its own checks'],
  review: ['Keep the questions visible', 'A review overlay is not an approval'],
  outcome: ['Together, still traceable', 'Registered as one proposal'],
};
const aria = [
  'Context: an illustrative P&ID drawing rests above separate port, calculation and review layers.',
  'Structure: four exploded layers show the drawing, stable equipment ports, calculation questions and human review.',
  'Explore: the base route connects Pump A and Valve B; pressure loss remains uncalculated.',
  'Explore: a proposed bypass goes around Valve B and adds an unresolved calculation and review path.',
  'Review: the original drawing and lifted review overlay retain open questions for human review.',
  'Outcome: drawing, ports, calculation questions and review targets register as one traceable proposal, not an approved design.',
];
export const translations = [
  [title, '레이어를 하나의 설계로'],
  [summary, '도면·포트·계산·검토가 각각의 정체성을 유지하며 정렬됩니다.'],
  ['A drawing is one layer', '도면은 하나의 레이어'],
  ['The rest must stay connected', '나머지 정보도 연결되어야 합니다'],
  ['Separate the layers', '레이어를 펼쳐 봅니다'],
  ['Same identities. Different responsibilities.', '같은 식별자, 서로 다른 역할'],
  ['One route to examine', '하나의 경로를 살펴봅니다'],
  ['Calculation follows the connected path', '계산은 연결된 경로를 따릅니다'],
  ['A bypass changes the question', '우회 경로가 검토를 바꿉니다'],
  ['A new path needs its own checks', '새 경로에는 별도의 확인이 필요합니다'],
  ['Keep the questions visible', '미해결 질문을 남깁니다'],
  ['A review overlay is not an approval', '검토 레이어는 설계 승인이 아닙니다'],
  ['Together, still traceable', '합쳐져도 이력은 남습니다'],
  ['Registered as one proposal', '하나의 제안으로 정렬됩니다'],
  ['Drawing', '도면'], ['Ports', '포트'], ['Calculation', '계산'], ['Review', '검토'],
  ['Pump A', '펌프 A'], ['Valve B', '밸브 B'], ['Original retained', '원본 보존'],
  ['Stable identities', '일관된 식별자'], ['Open inputs', '미확정 입력'],
  ['Human decision', '사람의 판단'], ['Base route selected', '기본 경로 선택'],
  ['Bypass proposed', '우회 경로 제안'], ['Not calculated', '계산되지 않음'],
  ['Original', '원본'], ['Review overlay', '검토 레이어'],
  ['Human review', '사람의 검토'], ['Inputs unresolved', '입력값 미확정'],
  ['Drawing + ports', '도면 + 포트'], ['Checks + review', '계산 + 검토'],
  ['Not approved', '승인되지 않음'],
  ['Illustrative only', '개념 설명용'],
  [aria[0], '배경: 예시 P&ID 도면 아래에 포트·계산·검토 레이어가 각각 놓여 있습니다.'],
  [aria[1], '구조: 펼쳐진 네 레이어가 도면·고정된 기기 포트·계산 질문·사람의 검토를 보여 줍니다.'],
  [aria[2], '탐색: 기본 경로는 펌프 A와 밸브 B를 연결하며 압력 손실은 계산되지 않았습니다.'],
  [aria[3], '탐색: 제안된 우회 경로가 밸브 B를 돌아가며 미해결 계산 및 검토 경로를 추가합니다.'],
  [aria[4], '검토: 원본 도면과 분리된 검토 레이어가 사람의 검토를 위한 미해결 질문을 보존합니다.'],
  [aria[5], '결과: 도면·포트·계산 질문·검토 대상이 추적 가능한 하나의 제안으로 정렬됩니다. 승인된 설계는 아닙니다.'],
];

export const css = `
.entry-P5{display:block;width:100%;height:auto;background:#071c2a;color:#eff7f6;font-family:Inter,Arial,sans-serif;isolation:isolate}
.entry-P5 .P5-title{font-size:29px;font-weight:650;letter-spacing:-.7px;fill:#f0f7f5}
.entry-P5 .P5-sub{font-size:18px;fill:#a8c1ca}
.entry-P5 .P5-label{font-size:19px;font-weight:600;fill:#e6f2f3}
.entry-P5 .P5-small{font-size:16px;fill:#9db5bf}
.entry-P5 .P5-tech{font-size:22px;font-family:ui-monospace,SFMono-Regular,monospace;fill:#d5f4f2}
.entry-P5 .P5-note{font-size:18px;fill:#b8cdd3}
.entry-P5 .P5-amber{fill:#f5c572}
.entry-P5 .P5-cyan{fill:#79dedb}
.entry-P5 .P5-pink{fill:#f59dc4}
.entry-P5 .P5-line{fill:none;stroke:#82d6d3;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.entry-P5 .P5-guide{fill:none;stroke:#668c9d;stroke-width:1.3;stroke-dasharray:3 7;opacity:.65}
.entry-P5 .P5-paper{stroke:#58849a;stroke-width:1.2}
.entry-P5 .P5-grid{fill:none;stroke:#477182;stroke-width:.7;opacity:.32}
.entry-P5 .P5-bypass{fill:none;stroke:#f49ec5;stroke-width:4;stroke-linejoin:round;stroke-linecap:round}
.entry-P5 .P5-review{fill:none;stroke:#f2bc67;stroke-width:2.6;stroke-dasharray:6 6}
.entry-P5 .P5-dot{fill:#071c2a;stroke:#98f2e5;stroke-width:2.5}
.entry-P5 .P5-lift{transform-box:fill-box;transform-origin:center}
.animating .entry-P5 .P5-lift{animation:P5-lift 1.6s cubic-bezier(.18,.7,.24,1) both;animation-delay:var(--delay,0s);animation-play-state:var(--motion-play,running)}
.animating .entry-P5 .P5-draw{stroke-dasharray:720;animation:P5-draw 2.2s ease-out both;animation-delay:.3s;animation-play-state:var(--motion-play,running)}
.animating .entry-P5 .P5-new-route{stroke-dasharray:390;animation:P5-bypass 1.7s ease-in-out both;animation-delay:.75s;animation-play-state:var(--motion-play,running)}
.animating .entry-P5 .P5-focus{animation:P5-focus 2.6s ease-out both;animation-delay:.4s;animation-play-state:var(--motion-play,running)}
.animating .entry-P5 .P5-register{animation:P5-register 2.1s cubic-bezier(.2,.75,.3,1) both;animation-delay:var(--delay,0s);animation-play-state:var(--motion-play,running)}
@keyframes P5-lift{from{opacity:.15;transform:translate(0,var(--from,20px))}to{opacity:1;transform:translate(0,0)}}
@keyframes P5-draw{from{stroke-dashoffset:720}to{stroke-dashoffset:0}}
@keyframes P5-bypass{0%{stroke-dashoffset:390;opacity:.3}100%{stroke-dashoffset:0;opacity:1}}
@keyframes P5-focus{0%{opacity:.1}35%{opacity:1}65%{opacity:.45}100%{opacity:1}}
@keyframes P5-register{from{opacity:.2;transform:translate(var(--dx,0px),var(--dy,0px))}to{opacity:1;transform:translate(0,0)}}
@media(prefers-reduced-motion:reduce){.animating .entry-P5 .P5-lift,.animating .entry-P5 .P5-draw,.animating .entry-P5 .P5-new-route,.animating .entry-P5 .P5-focus,.animating .entry-P5 .P5-register{animation:none!important;stroke-dashoffset:0!important}}
`;

const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[ch]));
const text = (x,y,value,cls='P5-label',extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${escape(value)}</text>`;
const basePath = 'M77 105 L157 90 M199 83 L285 68 M325 60 L425 42';
const bypassPath = 'M244 75 L202 48 L337 24 L379 51';
const portPoints = [[215,80],[275,69],[334,58]];
function paper(key, tone='drawing') {
  const fills = {drawing:`url(#${key}-surface)`,ports:'#123d4a',calc:'#243a3c',review:'#3b3530'};
  const strokes = {drawing:'#638c9d',ports:'#5bafa9',calc:'#b29461',review:'#bc9965'};
  return `<path d="M0 70 385 0 505 70 120 140Z" fill="${fills[tone]}" stroke="${strokes[tone]}" class="P5-paper"/>
  <path d="M0 70v7l120 70v-7M120 140l385-70v7L120 147" fill="#061722" stroke="${strokes[tone]}" stroke-width=".9"/>
  <path d="M52 100 437 30M96 126 481 56M77 56 197 126M154 42 274 112M231 28 351 98M308 14 428 84" class="P5-grid"/>`;
}
function bypass(isAlt, subtle=false) {
  if (!isAlt) return '';
  return `<g opacity="${subtle ? '.55':'1'}"><path d="${bypassPath}" class="P5-bypass P5-new-route"/><circle cx="244" cy="75" r="4.5" fill="#f49ec5"/><circle cx="379" cy="51" r="4.5" fill="#f49ec5"/><g transform="translate(270 36) rotate(-10)"><path d="M-11-7 0 0-11 7ZM11-7 0 0 11 7Z" fill="#142637" stroke="#f49ec5" stroke-width="2"/></g></g>`;
}
function drawing(isAlt=false, faded=false) {
  return `<g opacity="${faded ? '.42':'1'}"><path d="${basePath}" class="P5-line P5-draw"/>
  <circle cx="178" cy="87" r="21" fill="#103648" stroke="#b5eae3" stroke-width="2.5"/>
  <path d="M169 74 190 85 169 99Z" fill="#b5eae3" transform="rotate(-10 178 87)"/>
  <path d="M285 56 305 64 290 78ZM323 49 305 64 327 72Z" fill="#143647" stroke="#b5eae3" stroke-width="2.5"/>
  <path d="M305 64 300 38" class="P5-line"/><path d="M290 40 310 36" stroke="#b5eae3" stroke-width="3"/>
  <path d="M77 105 87 98 89 109Z M425 42 413 39 416 49Z" fill="#98e4dc"/>
  <path d="M266 71 257 42" class="P5-guide"/><circle cx="254" cy="29" r="13" fill="#0b2534" stroke="#83bcc3" stroke-width="1.8"/>
  <path d="M244 31h20" stroke="#83bcc3" stroke-width="1"/>
  ${text(172,129,'A','P5-tech')}${text(326,91,'B','P5-tech')}${bypass(isAlt)}</g>`;
}
function ports(labels=false) {
  return `<g><path d="M77 105 178 87 215 80 275 69 305 64 334 58 425 42" stroke="#74e5d9" stroke-width="1.7" stroke-dasharray="4 5" fill="none"/>
  ${portPoints.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" class="P5-dot"/><path d="M${x-11} ${y}h-6M${x+11} ${y}h6M${x} ${y-11}v-6M${x} ${y+11}v6" stroke="#74e5d9" stroke-width="1.2"/>`).join('')}
  ${labels ? `${text(157,126,'A.OUT','P5-tech')}${text(272,33,'B.IN','P5-tech')}`:''}</g>`;
}
function calculation(isAlt=false, compact=false) {
  return `<g><path d="M77 105 178 87 305 64 425 42" fill="none" stroke="#d9ae65" stroke-width="2" stroke-dasharray="4 6"/>
  <path d="M203 103 215 117 358 91 348 77M216 117l-5-12M358 91l-10-9" fill="none" stroke="#f1c478" stroke-width="2"/>
  ${text(compact?225:226,compact?91:91,'Δp = ?','P5-tech P5-amber')}
  ${isAlt ? `<path d="${bypassPath}" fill="none" stroke="#f5b0c8" stroke-width="2.8" stroke-dasharray="5 5"/>${text(263,21,'?','P5-tech P5-pink')}`:''}</g>`;
}
function review(isAlt=false) {
  return `<g class="P5-focus"><circle cx="305" cy="64" r="34" class="P5-review"/><path d="M277 35 266 23M334 92l15 13" stroke="#f1c478" stroke-width="2"/>
  <path d="M175 105 188 127 162 127Z" fill="#403727" stroke="#e9bc70" stroke-width="2"/>
  ${text(171,123,'!','P5-tech P5-amber')}
  ${isAlt ? `<ellipse cx="270" cy="36" rx="34" ry="18" class="P5-review"/>`:''}</g>`;
}
function plane(key,kind,x,y,scale,content,extra='') {
  return `<g transform="translate(${x} ${y}) scale(${scale})"><g class="P5-lift" ${extra}>${paper(key,kind)}${content}</g></g>`;
}
function heading(pair) {
  return `${text(38,48,pair[0],'P5-title')}${text(39,77,pair[1],'P5-sub')}`;
}
function regMarks(x,y,w,h,color='#83b4ba') {
  return `<path d="M${x+18} ${y}h-18v18M${x+w-18} ${y}h18v18M${x} ${y+h-18}v18h18M${x+w-18} ${y+h}h18v-18" fill="none" stroke="${color}" stroke-width="2"/>`;
}
export function render(phase=0, choice='base', uid='P5') {
  const p = Number.isFinite(Number(phase)) ? Math.min(4,Math.max(0,Math.trunc(Number(phase)))) : 0;
  const alt = choice === 'alternate';
  const key = escape(String(uid));
  let art = '';
  if (p === 0) {
    art = `${heading(copy.context)}
      <g opacity=".48">${plane(key,'review',106,191,1,'','style="--delay:.1s"')}${plane(key,'calc',102,177,1,'','style="--delay:.2s"')}${plane(key,'ports',98,163,1,'','style="--delay:.3s"')}</g>
      ${plane(key,'drawing',94,149,1,drawing(false),'style="--delay:.4s"')}
      <path d="M194 249 154 315h-75M419 216 467 294h105" class="P5-guide"/>
      ${text(43,341,'Pump A','P5-label')}${text(475,321,'Valve B','P5-label')}
      <path d="M363 328v32h103" class="P5-guide"/>${text(474,366,'Original retained','P5-note')}
      <path d="M79 373h30m8 0h30m8 0h30m8 0h30" stroke="#5c8997" stroke-width="3"/>
      <path d="M79 373h30" stroke="#8cded8" stroke-width="3"/>`;
  } else if (p === 1) {
    const positions = [103,179,255,331];
    const kinds = ['drawing','ports','calc','review'];
    const labels = ['Drawing','Ports','Calculation','Review'];
    const contents = [drawing(),ports(true),calculation(false,true),review()];
    art = `${heading(copy.structure)}<path d="M404 152v228M447 144v228M489 136v228" class="P5-guide"/>`;
    for(let i=3;i>=0;i--) art += plane(key,kinds[i],234,positions[i],.72,contents[i],`style="--from:${(1.5-i)*48}px;--delay:${i*.12}s"`);
    art += labels.map((label,i)=>`${text(39,positions[i]+39,`0${i+1}`,'P5-small')}${text(74,positions[i]+39,label,'P5-label')}<path d="M75 ${positions[i]+50}h118" stroke="${['#8cded8','#75e6d8','#d7b678','#f4bf73'][i]}" opacity=".6"/>`).join('');
  } else if(p === 2) {
    art = `${heading(alt ? copy.alternate:copy.base)}
      ${plane(key,'calc',100,231,.99,calculation(alt),'style="--from:-45px;--delay:.2s"')}
      <path d="M342 198v103M471 174v103" class="P5-guide"/>
      ${plane(key,'drawing',100,126,.99,drawing(alt),'style="--from:35px"')}
      ${text(41,306,alt?'Bypass proposed':'Base route selected',alt?'P5-label P5-pink':'P5-label P5-cyan')}
      <path d="M44 318h160" stroke="${alt?'#f49ec5':'#7ddbd5'}" stroke-width="2"/>
      ${text(463,375,'Not calculated','P5-note P5-amber')}`;
  } else if(p === 3) {
    art = `${heading(copy.review)}
      ${plane(key,'drawing',55,115,.97,drawing(alt,true),'style="--from:20px"')}
      ${text(55,283,'Original','P5-note')}
      <path d="M271 193 335 283M351 177 415 267" class="P5-guide"/>
      ${plane(key,'review',116,205,.97,`${ports(false)}${review(alt)}${alt?bypass(true,true):''}`,'style="--from:-70px;--delay:.3s"')}
      ${regMarks(111,215,507,139,'#d6ac69')}
      ${text(55,380,'Review overlay','P5-label P5-amber')}
      ${text(440,377,'Human review','P5-label')}${text(440,403,'Inputs unresolved','P5-note')}`;
  } else {
    art = `${heading(copy.outcome)}
      <g opacity=".56">${plane(key,'review',104,174,1,'')}${plane(key,'calc',102,162,1,'')}${plane(key,'ports',100,150,1,'')}</g>
      <g transform="translate(98 138)">${paper(key,'drawing')}
        <g class="P5-register" style="--dx:-34px;--dy:-35px">${drawing(alt)}</g>
        <g class="P5-register" style="--dx:34px;--dy:42px;--delay:.1s">${ports(false)}</g>
        <g class="P5-register" style="--dx:14px;--dy:76px;--delay:.2s">${calculation(alt)}</g>
        <g class="P5-register" style="--dx:-28px;--dy:112px;--delay:.3s">${review(alt)}</g>
      </g>
      ${regMarks(83,122,536,205)}
      <path d="M65 361h31" stroke="#89e1d8" stroke-width="3"/>${text(110,367,'Drawing + ports','P5-label')}
      <path d="M65 393h31" stroke="#f1bd6d" stroke-width="3" stroke-dasharray="5 4"/>${text(110,399,'Checks + review','P5-label')}
      <path d="M457 362v38" stroke="#edba72" stroke-width="3"/>${text(476,388,'Not approved','P5-label P5-amber')}`;
  }
  const label = aria[p===2 ? (alt?3:2) : p>2 ? p+1 : p];
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-P5" viewBox="0 0 720 460" role="img" aria-label="${escape(label)}">
    <defs><linearGradient id="${key}-surface" x1="0" y1="0" x2="0.9" y2="1"><stop stop-color="#204253"/><stop offset="1" stop-color="#0d2839"/></linearGradient></defs>
    <rect width="720" height="460" fill="#071c2a"/>
    <circle cx="617" cy="151" r="101" fill="none" stroke="#284453" stroke-width=".7" opacity=".45"/>
    <path d="M621 39v20M611 49h20" stroke="#456271" opacity=".55"/>
    ${art}
    <path d="M39 426h642" stroke="#31505e" stroke-width="1"/>
    ${text(39,449,'Illustrative only','P5-small')}${text(681,449,`0${p+1} / 05`,'P5-small','text-anchor="end"')}
  </svg>`;
}
