export const id = 'C3';
export const title = 'The head we spend';
export const summary = 'A flowing energy budget connects hydraulic losses to the pump operating point.';

export const translations = [
  ['The head we spend', '우리가 쓰는 수두'],
  ['A flowing energy budget connects hydraulic losses to the pump operating point.', '흐르는 에너지 예산으로 수력 손실과 펌프 운전점을 연결합니다.'],
  ['Illustrative energy budget and hydraulic operating point', '에너지 예산과 수력 운전점의 예시'],
  ['CALC / ENERGY BUDGET', 'CALC / 에너지 예산'],
  ['Follow the head.', '수두의 흐름을 따라가다.'],
  ['A head budget closes.', '수두 예산의 합을 맞추다.'],
  ['Resistance moves the point.', '저항이 운전점을 옮긴다.'],
  ['Keep the unknowns visible.', '불확실성을 함께 보여주다.'],
  ['A candidate, with conditions.', '조건이 붙은 후보안.'],
  ['Energy is spent along the route.', '경로를 따라 에너지가 소모됩니다.'],
  ['Account for each drop.', '각 수두 손실을 구분합니다.'],
  ['Base resistance', '기본 저항'],
  ['Higher resistance', '저항 증가'],
  ['Pump head', '펌프 수두'],
  ['Pipe loss', '배관 손실'],
  ['Fitting loss', '피팅 손실'],
  ['Static head', '정수두'],
  ['Head remaining', '남은 수두'],
  ['Reference level', '기준 높이'],
  ['Width follows flow', '폭은 유량을 나타냄'],
  ['Same pump', '동일 펌프'],
  ['System', '시스템'],
  ['Lower flow', '유량 감소'],
  ['Relative flow', '상대 유량'],
  ['Base flow', '기본 유량'],
  ['Operating point', '운전점'],
  ['Relative axes', '상대 좌표'],
  ['Confirm units', '단위 확인'],
  ['Define boundaries', '경계 정의'],
  ['Trace inputs', '입력 출처 추적'],
  ['Roughness unknown', '거칠기 미확인'],
  ['OEM evidence pending', 'OEM 근거 대기'],
  ['Loss split is illustrative', '손실 배분은 예시'],
  ['Pipe-size candidate', '배관경 후보'],
  ['OEM curve', 'OEM 곡선'],
  ['Human review', '사람의 검토'],
  ['Calculation ≠ selection', '계산 완료 ≠ 기기 선정'],
  ['Illustrative · relative units', '예시 · 상대 단위'],
  ['Conditions travel with the result.', '결과에 조건을 함께 전달합니다.']
];

export const css = `
.entry-C3 { color:#253d39; background:#f5f2e9; font-family:Inter,"Helvetica Neue",Arial,sans-serif; }
.entry-C3 text { fill:#253d39; font-size:18px; font-weight:500; }
.entry-C3 .C3-eyebrow { font-size:17px; letter-spacing:2.2px; font-weight:700; }
.entry-C3 .C3-title { font-size:32px; font-weight:600; letter-spacing:-1.1px; }
.entry-C3 .C3-note { fill:#66776e; font-size:17px; }
.entry-C3 .C3-small { font-size:16px; }
.entry-C3 .C3-strong { font-weight:700; }
.entry-C3 .C3-number { font-size:54px; font-weight:500; letter-spacing:-2px; }
.entry-C3 .C3-equation { font-family:Georgia,serif; font-size:27px; font-style:italic; }
.entry-C3 .C3-muted { fill:#66776e; }
.entry-C3 .C3-copper { fill:#a65735; }
.entry-C3 .C3-teal { fill:#08776c; }
.entry-C3 .C3-rule { stroke:#d6dbcf; stroke-width:1.25; fill:none; }
.entry-C3 .C3-reference { stroke:#a5b2a7; stroke-width:1.2; stroke-dasharray:3 5; fill:none; }
.entry-C3 .C3-current { fill:none; stroke:#f4f5d9; stroke-width:2; stroke-dasharray:4 18; stroke-linecap:round; }
.entry-C3 .C3-ribbon { fill:none; stroke-linecap:round; stroke-linejoin:round; }
.entry-C3 .C3-loss { stroke:#ba704b; stroke-width:1.4; fill:none; }
.entry-C3 .C3-chart { fill:none; stroke-linecap:round; stroke-linejoin:round; }
.entry-C3 .C3-ghost { fill:none; stroke:#a8b6aa; stroke-width:2; stroke-dasharray:5 5; }
.entry-C3 .C3-reveal,.entry-C3 .C3-point { transform-box:fill-box; transform-origin:center; }
.animating .entry-C3 .C3-ribbon { animation:C3-arrive 1.8s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C3 .C3-current { animation:C3-flow 6s linear 1; animation-play-state:var(--motion-play,running); }
.animating .entry-C3 .C3-reveal { animation:C3-settle 1.3s .45s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C3 .C3-point { animation:C3-land 1.4s .6s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C3 .C3-curve { animation:C3-arrive 1.8s .2s ease-out both; animation-play-state:var(--motion-play,running); }
@keyframes C3-arrive { from { stroke-dasharray:1; stroke-dashoffset:1; opacity:.3; } to { stroke-dasharray:1; stroke-dashoffset:0; opacity:1; } }
@keyframes C3-flow { from { stroke-dashoffset:176; } to { stroke-dashoffset:0; } }
@keyframes C3-settle { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
@keyframes C3-land { from { opacity:0; transform:scale(.65); } to { opacity:1; transform:scale(1); } }
@media(prefers-reduced-motion:reduce) {
  .animating .entry-C3 .C3-ribbon,.animating .entry-C3 .C3-current,.animating .entry-C3 .C3-reveal,.animating .entry-C3 .C3-point,.animating .entry-C3 .C3-curve { animation:none; }
}
`;

const text = (x, y, value, cls = '', attrs = '') => `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${value}</text>`;
const line = (x1, y1, x2, y2, cls = 'C3-rule', attrs = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" ${attrs}/>`;
const ribbon = (d, width, uid) => `<path d="${d}" pathLength="1" class="C3-ribbon" stroke="url(#${uid}-head)" stroke-width="${width}"/><path d="${d}" class="C3-current"/>`;
const titles = ['Follow the head.', 'A head budget closes.', 'Resistance moves the point.', 'Keep the unknowns visible.', 'A candidate, with conditions.'];

function wideBudget(uid, { structured = false, uncertain = false } = {}) {
  const d = 'M84 176 H190 C224 176 218 241 252 241 H364 C398 241 392 302 426 302 H622';
  const bottom = 353;
  let out = `${line(65, bottom, 656, bottom, 'C3-reference')}
    <path d="M84 176 V353 H622 V302 H426 C392 302 398 241 364 241 H252 C218 241 224 176 190 Z" fill="url(#${uid}-wash)"/>
    ${structured ? `<rect x="270" y="165" width="76" height="65" fill="url(#${uid}-loss)" opacity=".72"/><rect x="450" y="231" width="76" height="60" fill="url(#${uid}-loss)" opacity=".72"/>` : ''}
    ${ribbon(d, 28, uid)}
    <circle cx="84" cy="176" r="23" fill="#f5f2e9" stroke="#117b70" stroke-width="2"/>
    <path d="M75 184 L75 166 L93 176 Z" fill="#117b70"/>
    <path d="M622 290 L638 302 L622 314" fill="none" stroke="#117b70" stroke-width="2"/>
    ${line(62,176,62,bottom,'C3-rule')}
    ${text(70,139,'Pump head')}
    ${text(263,structured ? 143 : 204,'Pipe loss','C3-copper')}
    ${text(436,structured ? 214 : 265,'Fitting loss','C3-copper')}
    ${text(551,386,'Static head')}`;
  out += `<g class="C3-reveal">
    <path d="M241 179 V221 M236 215 L241 222 L246 215" class="C3-loss"/>
    <path d="M414 244 V282 M409 276 L414 283 L419 276" class="C3-loss"/>
    <path d="M643 311 V345 M638 311 H648 M638 345 H648" class="C3-loss"/>
  </g>`;
  if (structured) {
    out += `<g class="C3-reveal">
      ${text(64,389,'Hₚ = hₚ + hƒ + Hₛ','C3-equation')}
      ${text(273,285,'hₚ','C3-equation C3-copper')}
      ${text(450,338,'hƒ','C3-equation C3-copper')}
    </g>`;
  } else if (!uncertain) {
    out += `${text(85,332,'Head remaining','C3-note')}${text(65,386,'Energy is spent along the route.','C3-note')}`;
  }
  return out;
}

function plot(alternate) {
  const left = 422, right = 654, top = 158, bottom = 331;
  const px = q => left + q / 1.1 * (right - left);
  const py = h => bottom - h / 1.05 * (bottom - top);
  const k = alternate ? 1.5 : 0.7;
  const q = Math.sqrt(0.88 / (0.45 + k));
  const h = 1 - 0.45 * q * q;
  const qb = Math.sqrt(0.88 / 1.15);
  const makeCurve = (fn, max) => Array.from({ length: 41 }, (_, i) => {
    const x = max * i / 40;
    return `${i ? 'L' : 'M'}${px(x).toFixed(2)} ${py(fn(x)).toFixed(2)}`;
  }).join(' ');
  const systemPath = coefficient => makeCurve(x => .12 + coefficient * x * x, Math.min(1.1, Math.sqrt(.93 / coefficient)));
  return `<g>
    ${line(left,top-5,left,bottom+1,'C3-rule')}${line(left,bottom,right+8,bottom,'C3-rule')}
    ${line(left,py(.5),right,py(.5),'C3-rule')}
    ${text(left-24,top+4,'H','C3-small')}${text(right+7,bottom+7,'Q','C3-small')}
    ${text(left-8,bottom+23,'0','C3-small C3-muted')}${text(right-12,bottom+23,'1.1','C3-small C3-muted')}
    <path d="${systemPath(alternate ? .7 : 1.5)}" class="C3-ghost"/>
    <path d="${makeCurve(x => 1 - .45*x*x,1.1)}" pathLength="1" class="C3-chart C3-curve" stroke="#263e38" stroke-width="3"/>
    <path d="${systemPath(k)}" pathLength="1" class="C3-chart C3-curve" stroke="#bc6d45" stroke-width="3"/>
    ${line(px(q),py(h),px(q),bottom,'C3-reference')}
    <g class="C3-point"><circle cx="${px(q)}" cy="${py(h)}" r="11" fill="#f5f2e9" stroke="#117b70" stroke-width="2"/><circle cx="${px(q)}" cy="${py(h)}" r="4.2" fill="#117b70"/></g>
    ${alternate ? `<circle cx="${px(qb)}" cy="${py(1-.45*qb*qb)}" r="5" fill="#f5f2e9" stroke="#a8b6aa" stroke-width="1.5"/>
      <path d="M${px(qb)} 366 H${px(q)} l8 -5 m-8 5 l8 5" fill="none" stroke="#117b70" stroke-width="1.5"/>` : ''}
    ${text(443,144,'Same pump','C3-small')}${text(572,144,'System','C3-small C3-copper')}
    ${text(452,395,'Relative axes','C3-small C3-muted')}
  </g>`;
}

function explore(uid, alternate) {
  const k = alternate ? 1.5 : .7;
  const q = Math.sqrt(.88 / (.45 + k));
  const h = 1 - .45 * q*q;
  const y0 = 291 - h * 160;
  const y1 = 291 - (.12 + (h-.12)*.36) * 160;
  const y2 = 291 - .12 * 160;
  const d = `M71 ${y0} H127 C153 ${y0} 147 ${y1} 173 ${y1} H223 C249 ${y1} 243 ${y2} 269 ${y2} H340`;
  return `${text(44,124,alternate ? 'Higher resistance' : 'Base resistance','C3-note')}
    ${line(376,146,376,393,'C3-rule')}
    ${line(58,291,345,291,'C3-reference')}
    <path d="M71 ${y0} V291 H340 V${y2} H269 C243 ${y2} 249 ${y1} 223 ${y1} H173 C147 ${y1} 153 ${y0} 127 ${y0} Z" fill="url(#${uid}-wash)"/>
    ${ribbon(d, q * 35, uid)}
    ${text(61,150,'Pump head','C3-small')}
    ${text(182,190,'Pipe loss','C3-small C3-copper')}
    ${text(250,236,'Fitting loss','C3-small C3-copper')}
    ${text(60,319,'Width follows flow','C3-small C3-muted')}
    ${text(58,377,`Q ${q.toFixed(2)}`,'C3-number')}
    ${text(245,366,alternate ? 'Lower flow' : 'Base flow','C3-small C3-teal')}
    ${text(245,389,'Relative flow','C3-small C3-muted')}
    ${plot(alternate)}`;
}

function review(uid) {
  return `${text(44,124,'Loss split is illustrative','C3-note')}
    <path d="M70 208 H188 C228 208 211 264 252 264 H407 C445 264 430 314 472 314 H644" fill="none" stroke="#d6e5db" stroke-width="34" stroke-linecap="round"/>
    ${ribbon('M70 208 H188 C228 208 211 264 252 264 H407 C445 264 430 314 472 314 H644',18,uid)}
    <rect x="272" y="245" width="119" height="38" rx="3" fill="url(#${uid}-loss)" stroke="#b57545" stroke-width="1.2" stroke-dasharray="4 4"/>
    ${line(330,190,330,243,'C3-loss')}
    ${text(244,175,'Roughness unknown','C3-small C3-copper')}
    ${line(546,229,546,293,'C3-loss')}
    ${text(459,214,'OEM evidence pending','C3-small C3-copper')}
    <g class="C3-reveal">
      ${line(64,345,656,345)}
      ${text(65,380,'Confirm units','C3-small')}
      ${text(267,380,'Define boundaries','C3-small')}
      ${text(506,380,'Trace inputs','C3-small')}
      <circle cx="73" cy="334" r="3" fill="#177c70"/><circle cx="331" cy="334" r="3" fill="#177c70"/><circle cx="553" cy="334" r="3" fill="#177c70"/>
      ${line(73,218,73,330)}${line(331,285,331,330)}${line(553,327,553,330)}
    </g>`;
}

function outcome(uid, alternate) {
  const q = Math.sqrt(.88 / (.45 + (alternate ? 1.5 : .7)));
  return `${text(44,124,'Conditions travel with the result.','C3-note')}
    <circle cx="151" cy="244" r="76" fill="url(#${uid}-wash)" stroke="#c6d7c7" stroke-width="1"/>
    <path d="M151 168 A76 76 0 1 0 227 244" pathLength="1" class="C3-chart C3-curve" stroke="#147e71" stroke-width="4"/>
    ${text(151,239,`Q ${q.toFixed(2)}`,'C3-number','text-anchor="middle"')}
    ${text(151,270,'Relative flow','C3-small C3-muted','text-anchor="middle"')}
    ${ribbon('M240 244 H311 C341 244 331 286 361 286 H454',22,uid)}
    <path d="M455 286 H625" fill="none" stroke="#527c70" stroke-width="3" stroke-dasharray="4 8"/>
    <path d="M612 277 L626 286 L612 295" fill="none" stroke="#527c70" stroke-width="2"/>
    <path d="M425 261 V311 M435 261 V311" stroke="#147e71" stroke-width="2"/>
    <path d="M535 264 V308 M548 264 V308" stroke="#b57545" stroke-width="2" stroke-dasharray="4 4"/>
    ${text(261,202,'Pipe-size candidate','C3-small')}
    ${line(335,214,335,245)}
    ${text(493,239,'OEM curve','C3-small C3-copper')}
    ${text(542,338,'Human review','C3-small')}
    ${text(360,389,'Calculation ≠ selection','C3-equation','text-anchor="middle"')}`;
}

export function render(phase = 0, choice = 'base', uid = 'C3') {
  const p = Math.max(0, Math.min(4, Math.trunc(Number(phase) || 0)));
  const u = String(uid).replace(/[^A-Za-z0-9_-]/g, '-');
  const alternate = choice === 'alternate';
  let content;
  if (p === 0) content = wideBudget(u);
  if (p === 1) content = `${text(44,124,'Account for each drop.','C3-note')}${wideBudget(u,{structured:true})}`;
  if (p === 2) content = explore(u, alternate);
  if (p === 3) content = review(u);
  if (p === 4) content = outcome(u, alternate);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-C3" viewBox="0 0 720 460" role="img" aria-label="Illustrative energy budget and hydraulic operating point">
    <defs>
      <linearGradient id="${u}-head" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0f6d65"/><stop offset=".52" stop-color="#288f7f"/><stop offset="1" stop-color="#78b6a1"/></linearGradient>
      <linearGradient id="${u}-wash" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#bcd4bc" stop-opacity=".5"/><stop offset="1" stop-color="#bcd4bc" stop-opacity=".07"/></linearGradient>
      <pattern id="${u}-loss" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#eddbc0"/><path d="M-2 2 L2 -2 M0 8 L8 0 M6 10 L10 6" stroke="#b77948" stroke-width="1" opacity=".55"/></pattern>
    </defs>
    <rect width="720" height="460" fill="#f5f2e9"/>
    ${text(44,43,'CALC / ENERGY BUDGET','C3-eyebrow')}
    ${text(44,87,titles[p],'C3-title')}
    ${text(671,43,`0${p+1} / 05`,'C3-small C3-muted','text-anchor="end"')}
    ${content}
    ${line(44,418,676,418)}
    ${text(44,445,'Illustrative · relative units','C3-small C3-muted')}
    ${text(676,445,'C3','C3-small C3-muted','text-anchor="end"')}
  </svg>`;
}
