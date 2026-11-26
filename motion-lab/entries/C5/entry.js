export const id = 'C5';
export const title = 'Calculation Atelier';
export const summary = 'Unit-bearing inputs become a geometric calculation whose uncertainty remains visible.';

const copy = [
  ['Calculation Atelier', '계산 아틀리에'],
  ['CALCULATION ATELIER', '계산 아틀리에'],
  ['Unit-bearing inputs become a geometric calculation whose uncertainty remains visible.', '단위가 있는 입력을 기하학적 계산으로 연결하고 불확실성을 끝까지 드러냅니다.'],
  ['Start with dimensions.', '단위에서 시작합니다.'],
  ['Units before numbers', '숫자보다 먼저, 단위'],
  ['Diameter', '직경'], ['Length', '길이'], ['Flow', '유량'], ['Roughness', '조도'],
  ['Provenance stays attached', '입력의 출처를 함께 보존'],
  ['Give the inputs a shape.', '입력을 계산의 형태로.'],
  ['Static head', '정수두'], ['Resistance', '저항'],
  ['Balance the two curves', '두 곡선이 만나는 조건'],
  ['Solve in relative units', '상대값으로 계산'],
  ['Resistance changes the answer.', '저항이 바뀌면 결과도 바뀝니다.'],
  ['Same pump', '동일한 펌프'], ['Relative flow', '상대 유량'],
  ['Base resistance', '기본 저항'], ['Higher resistance', '저항 증가'],
  ['Reference state', '기준 상태'], ['More resistance → less flow', '저항 증가 → 유량 감소'],
  ['Keep the unknowns visible.', '모르는 것은 그대로 드러냅니다.'],
  ['Assumed range', '가정한 범위'], ['Qᵣ range', 'Qᵣ 범위'],
  ['Illustrative interval', '예시 구간'], ['OEM evidence open', '제작사 근거 확인 필요'],
  ['Uncertainty is part of the result.', '불확실성도 결과의 일부입니다.'],
  ['A calculation, ready for review.', '검토할 수 있는 계산 결과.'],
  ['Review packet', '검토 자료'], ['Candidate only', '검토 후보'],
  ['Units traced', '단위 추적 완료'], ['Human decision open', '담당자 판단 필요'],
  ['Relative flow at chosen K', '선택한 K에서의 상대 유량'],
  ['Equipment selection stays open', '기기 선정은 별도 검토'],
  ['Illustrative · normalized', '예시 · 정규화 값'],
];

const aria = [
  ['Calculation atelier: diameter, length, flow and roughness retain their units and provenance. Illustrative inputs only.', '계산 아틀리에: 직경, 길이, 유량과 조도에 단위와 출처를 유지합니다. 예시 입력입니다.'],
  ['Calculation atelier: static head and quadratic resistance form a system curve. Equating pump and system head solves relative flow.', '계산 아틀리에: 정수두와 유량 제곱에 비례하는 저항으로 계통 곡선을 만듭니다. 펌프와 계통 수두가 같아지는 상대 유량을 계산합니다.'],
  ['Calculation atelier: base resistance K equals 0.70 gives relative flow 0.875 on the unchanged illustrative pump curve.', '계산 아틀리에: 동일한 예시 펌프 곡선에서 기본 저항 K 0.70의 상대 유량은 0.875입니다.'],
  ['Calculation atelier: higher resistance K equals 1.50 reduces relative flow to 0.672, a 23.2 percent reduction on the same illustrative pump curve.', '계산 아틀리에: 동일한 예시 펌프 곡선에서 저항 K가 1.50으로 증가하면 상대 유량은 0.672로, 23.2퍼센트 감소합니다.'],
  ['Calculation atelier: an assumed resistance interval of 0.60 to 0.80 gives an illustrative relative flow interval of 0.839 to 0.915. OEM evidence remains open.', '계산 아틀리에: 저항을 0.60에서 0.80으로 가정하면 예시 상대 유량 범위는 0.839에서 0.915입니다. 제작사 근거는 추가 확인이 필요합니다.'],
  ['Calculation atelier: an assumed resistance interval of 1.40 to 1.60 gives an illustrative relative flow interval of 0.655 to 0.690. OEM evidence remains open.', '계산 아틀리에: 저항을 1.40에서 1.60으로 가정하면 예시 상대 유량 범위는 0.655에서 0.690입니다. 제작사 근거는 추가 확인이 필요합니다.'],
  ['Calculation atelier: a base-resistance calculation candidate records relative flow 0.875 and head 0.656. OEM evidence and human equipment selection remain open.', '계산 아틀리에: 기본 저항 계산 후보에 상대 유량 0.875와 상대 수두 0.656을 기록합니다. 제작사 근거 확인과 담당자의 기기 선정은 남아 있습니다.'],
  ['Calculation atelier: a higher-resistance calculation candidate records relative flow 0.672 and head 0.797. OEM evidence and human equipment selection remain open.', '계산 아틀리에: 저항 증가 계산 후보에 상대 유량 0.672와 상대 수두 0.797을 기록합니다. 제작사 근거 확인과 담당자의 기기 선정은 남아 있습니다.'],
];
export const translations = [...copy, ...aria];

export const css = `
.entry-C5{background:#f6f1e8;color:#273535;font-family:Arial,'Noto Sans KR',sans-serif;isolation:isolate}
.entry-C5 text{fill:#273535;font-size:18px;font-weight:400}
.entry-C5 .C5-heading{font-family:Georgia,'Noto Serif KR',serif;font-size:34px;letter-spacing:-1.1px}
.entry-C5 .C5-masthead{font-size:17px;letter-spacing:2.7px;font-weight:600}
.entry-C5 .C5-small{font-size:16px}
.entry-C5 .C5-soft{fill:#656f69}
.entry-C5 .C5-red{fill:#b3432e}
.entry-C5 .C5-math{font-family:Georgia,'Noto Serif KR',serif;font-size:34px}
.entry-C5 .C5-numeral{font-family:Georgia,serif;font-size:62px;letter-spacing:-2px;font-variant-numeric:tabular-nums}
.entry-C5 .C5-rule{stroke:#b8b8a9;stroke-width:1;fill:none}
.entry-C5 .C5-ink{stroke:#273535;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}
.entry-C5 .C5-pump{stroke:#b3432e;stroke-width:3.4;fill:none;stroke-linecap:round}
.entry-C5 .C5-system{stroke:#273535;stroke-width:3;fill:none;stroke-linecap:round}
.entry-C5 .C5-guide{stroke:#8c9489;stroke-width:1.4;fill:none;stroke-dasharray:4 5}
.entry-C5 .C5-paper{fill:#fffaf0;stroke:#b8b8a9;stroke-width:1}
.entry-C5 .C5-unit{font-family:Georgia,serif;font-size:24px;fill:#656f69}
.entry-C5 .C5-dot{fill:#b3432e;stroke:#f6f1e8;stroke-width:3}
.entry-C5 .C5-open{fill:#f6f1e8;stroke:#273535;stroke-width:1.6}
.entry-C5 .C5-rise{transform-box:fill-box;transform-origin:center}
.animating .entry-C5 .C5-rise{animation:C5-rise 1.1s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--delay,0s);animation-play-state:var(--motion-play,running)}
.animating .entry-C5 .C5-draw{stroke-dasharray:1;animation:C5-draw 1.65s cubic-bezier(.3,.1,.3,1) both;animation-delay:var(--delay,.15s);animation-play-state:var(--motion-play,running)}
.animating .entry-C5 .C5-reveal{animation:C5-reveal 1.25s ease-out both;animation-delay:var(--delay,.4s);animation-play-state:var(--motion-play,running)}
.animating .entry-C5 .C5-point{transform-box:fill-box;transform-origin:center;animation:C5-point 1.2s cubic-bezier(.2,.7,.2,1) both;animation-delay:.7s;animation-play-state:var(--motion-play,running)}
@keyframes C5-rise{from{opacity:0;transform:translateY(17px)}to{opacity:1;transform:translateY(0)}}
@keyframes C5-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes C5-reveal{from{opacity:0}to{opacity:1}}
@keyframes C5-point{from{opacity:0;transform:scale(.25)}to{opacity:1;transform:scale(1)}}
@media(prefers-reduced-motion:reduce){.animating .entry-C5 .C5-rise,.animating .entry-C5 .C5-draw,.animating .entry-C5 .C5-reveal,.animating .entry-C5 .C5-point{animation:none;stroke-dasharray:none}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x, y, value, cls = '', attrs = '') => `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${esc(value)}</text>`;
const line = (x1, y1, x2, y2, cls = 'C5-rule', attrs = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" ${attrs}/>`;
const qAt = k => Math.sqrt(0.88 / (0.45 + k));
const hAt = q => 1 - 0.45 * q * q;
const xOf = q => 70 + q / 1.1 * 412;
const yOf = h => 365 - h / 1.12 * 214;
const curve = (fn, reverse = false) => Array.from({length:57}, (_, i) => {
  const q = (reverse ? 56 - i : i) / 56 * 1.1;
  return `${i ? 'L' : 'M'}${xOf(q).toFixed(2)},${yOf(fn(q)).toFixed(2)}`;
}).join(' ');
const plotAxes = () => `${line(70,150,70,365,'C5-ink')}${line(70,365,482,365,'C5-ink')}${line(70,174,482,174)}${line(70,269,482,269)}${text(36,169,'Hᵣ','C5-unit')}${text(469,397,'Qᵣ','C5-unit')}${text(63,390,'0','C5-small C5-soft')}${text(xOf(1)-5,390,'1','C5-small C5-soft')}`;
const pump = () => `<path d="${curve(hAt)}" class="C5-pump C5-draw" pathLength="1"/>`;
const system = k => `<path d="${curve(q => .12 + k * q * q)}" class="C5-system C5-draw" pathLength="1" style="--delay:.35s"/>`;

function context() {
  const inputs = [['D','[m]','Diameter'],['L','[m]','Length'],['Q','[m³/s]','Flow'],['ε','[m]','Roughness']];
  return `${text(36,117,'Start with dimensions.','C5-heading')}${text(38,151,'Units before numbers','C5-soft')}
    ${line(47,350,674,350,'C5-guide')}
    ${inputs.map(([symbol,unit,label],i) => {
      const x = 45 + i * 162;
      const y = [189,211,181,202][i];
      return `<g class="C5-rise" style="--delay:${i*.15}s"><path d="M${x},${y} h136 v138 h-136 Z" class="C5-paper"/><path d="M${x},${y} h136 v6 h-136 Z" fill="${i===2?'#b3432e':'#d4c7ac'}"/>${text(x+17,y+62,symbol,'C5-numeral')}${text(x+17,y+97,unit,'C5-unit')}${text(x+17,y+124,label)}${line(x+68,y+139,x+68,350,'C5-guide')}<circle cx="${x+68}" cy="350" r="3" fill="#b3432e"/></g>`;
    }).join('')}
    <g class="C5-reveal" style="--delay:.7s"><path d="M49 381 h30 m-8 -5 8 5 -8 5" class="C5-ink"/>${text(94,388,'Provenance stays attached')}</g>`;
}

function structure(uid) {
  return `${text(36,117,'Give the inputs a shape.','C5-heading')}
    <g class="C5-reveal"><path d="M63 329 L63 304 Q200 304 341 186 L341 329 Z" fill="#d9c9ac"/><path d="M63 329 L63 304 Q200 304 341 186 L341 329 Z" fill="url(#${uid}-hatch)"/><path d="M63 304 Q200 304 341 186" class="C5-system C5-draw" pathLength="1"/><path d="M63 329 H341 V352 H63 Z" fill="#b3432e" fill-opacity=".15"/>${line(63,352,359,352,'C5-ink')}${line(63,171,63,352,'C5-ink')}${text(79,211,'Hₛ = 0.12 + KQ²','C5-math','style="font-size:27px"')}${text(239,282,'KQ²','C5-math')}${text(79,345,'0.12','C5-small C5-red')}${text(286,383,'Qᵣ','C5-unit')}${text(78,382,'Static head','C5-small')}${line(177,375,192,342,'C5-rule')}</g>
    ${line(383,166,383,383)}
    <g class="C5-rise" style="--delay:.35s">${text(421,196,'Hₚ = Hₛ','C5-math','style="font-size:42px"')}${text(421,232,'Balance the two curves','C5-small')}<path d="M526 252 v25 m-5 -7 5 7 5 -7" class="C5-ink C5-draw" pathLength="1"/>${text(414,331,'Q =','C5-math')}
    <path d="M484 314 l9 -6 10 32 13 -55 H664" class="C5-ink C5-draw" pathLength="1"/>${text(582,310,'0.88','C5-math','text-anchor="middle" style="font-size:28px"')}${line(528,319,653,319,'C5-ink')}${text(590,348,'K + 0.45','C5-math','text-anchor="middle" style="font-size:27px"')}${text(421,382,'Solve in relative units','C5-small C5-soft')}</g>`;
}

function explore(uid, high) {
  const k = high ? 1.5 : .7;
  const q = qAt(k), h = hAt(q), qb = qAt(.7), hb = hAt(qb);
  const x = xOf(q), y = yOf(h);
  return `${text(36,116,'Resistance changes the answer.','C5-heading','style="font-size:31px"')}${plotAxes()}
    <g clip-path="url(#${uid}-plot)">${high ? `<path d="${curve(q => .12+.7*q*q)}" class="C5-guide"/>` : ''}${pump()}${system(k)}</g>
    ${text(253,169,'Same pump','C5-small C5-red')}
    ${high ? `<circle cx="${xOf(qb)}" cy="${yOf(hb)}" r="7" fill="#f6f1e8" stroke="#9d9d8f" stroke-width="2"/>${line(xOf(qb),yOf(hb)+9,xOf(qb),365,'C5-guide')}<path d="M${xOf(qb)} 350 H${x+8} l8 -5 m-8 5 8 5" stroke="#b3432e" stroke-width="2" fill="none" class="C5-reveal"/>` : ''}
    ${line(x,y+8,x,365,'C5-guide')}${line(x+8,y,492,y,'C5-guide')}
    <circle cx="${x}" cy="${y}" r="8" class="C5-dot C5-point"/>
    <g class="C5-rise" style="--delay:.6s">${text(518,169,`K = ${k.toFixed(2)}`,'C5-math','style="font-size:27px"')}${text(518,198,high?'Higher resistance':'Base resistance','C5-small')}${text(512,270,q.toFixed(3),'C5-numeral C5-red')}${text(518,302,'Relative flow')}${text(518,338,high?'−23.2%':'Reference state',high?'C5-math C5-red':'C5-small C5-soft')}</g>
    ${text(70,405,'More resistance → less flow','C5-small C5-soft')}`;
}

function review(uid, high) {
  const k = high ? 1.5 : .7;
  const lo = qAt(k+.1), hi = qAt(k-.1), q = qAt(k);
  const band = curve(v => .12+(k-.1)*v*v) + ' ' + curve(v => .12+(k+.1)*v*v,true).replace(/^M/,'L') + ' Z';
  return `${text(36,116,'Keep the unknowns visible.','C5-heading')}${plotAxes()}
    <g clip-path="url(#${uid}-plot)"><path d="${band}" fill="#b8c0ac" fill-opacity=".65" class="C5-reveal"/><path d="${band}" fill="url(#${uid}-hatch)" class="C5-reveal"/>${pump()}${system(k)}<rect x="${xOf(lo)}" y="151" width="${xOf(hi)-xOf(lo)}" height="214" fill="#b3432e" fill-opacity=".08" class="C5-reveal"/></g>
    ${line(xOf(lo),yOf(hAt(lo)),xOf(lo),365,'C5-guide')}${line(xOf(hi),yOf(hAt(hi)),xOf(hi),365,'C5-guide')}
    <path d="M${xOf(lo)} 353 v13 H${xOf(hi)} v-13" fill="none" stroke="#b3432e" stroke-width="3" class="C5-reveal"/>
    <circle cx="${xOf(q)}" cy="${yOf(hAt(q))}" r="7" class="C5-dot C5-point"/>
    <g class="C5-rise" style="--delay:.3s">${text(515,170,'Assumed range')}${text(515,208,'K ± 0.10','C5-math','style="font-size:28px"')}${text(515,250,'Qᵣ range','C5-soft')}${text(515,284,`${lo.toFixed(3)}–${hi.toFixed(3)}`,'C5-math','style="font-size:26px"')}${text(515,316,'Illustrative interval','C5-small C5-soft')}${line(515,339,677,339)}<circle cx="522" cy="362" r="6" class="C5-open"/>${text(537,368,'OEM evidence open','C5-small')}</g>
    ${text(70,405,'Uncertainty is part of the result.','C5-small C5-soft')}`;
}

function outcome(high) {
  const k = high ? 1.5 : .7, q = qAt(k);
  return `${text(36,116,'A calculation, ready for review.','C5-heading','style="font-size:32px"')}
    <g class="C5-rise"><path d="M80 151 H613 L644 182 V378 H80 Z" class="C5-paper"/><path d="M613 151 V182 H644" class="C5-rule"/>${line(106,186,323,186)}${text(112,178,'Review packet','C5-small C5-soft')}${text(111,225,'Qᵣ','C5-unit')}${text(106,289,q.toFixed(3),'C5-numeral C5-red','style="font-size:76px"')}${text(111,324,'Relative flow at chosen K','C5-small')}${line(351,185,351,349)}
    <g class="C5-reveal" style="--delay:.6s">${text(382,207,'Candidate only','C5-math','style="font-size:29px"')}<circle cx="391" cy="240" r="8" class="C5-open"/><path d="m387 240 3 3 5 -6" class="C5-ink"/>${text(411,246,'Units traced')}
    <circle cx="391" cy="282" r="8" class="C5-open"/>${text(411,288,'OEM evidence open','C5-small')}
    <circle cx="391" cy="324" r="8" class="C5-open"/>${text(411,330,'Human decision open','C5-small')}</g>
    ${line(107,346,617,346)}${text(111,367,`K = ${k.toFixed(2)}`,'C5-small C5-soft')}${text(382,367,`Hᵣ = ${hAt(q).toFixed(3)}`,'C5-small C5-soft')}</g>
    ${text(80,404,'Equipment selection stays open','C5-small C5-soft')}`;
}

export function render(phase = 0, choice = 'base', uid = 'C5') {
  const p = Math.min(4,Math.max(0,Math.trunc(Number(phase)||0)));
  const high = choice === 'alternate';
  const safeUid = String(uid).replace(/[^A-Za-z0-9_-]/g,'_');
  const description = aria[p<2?p:2+(p-2)*2+(high?1:0)][0];
  const body = p===0 ? context() : p===1 ? structure(safeUid) : p===2 ? explore(safeUid,high) : p===3 ? review(safeUid,high) : outcome(high);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${esc(description)}" class="entry-C5"><defs><pattern id="${safeUid}-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="9" stroke="#526455" stroke-opacity=".23" stroke-width="1"/></pattern><clipPath id="${safeUid}-plot"><rect x="68" y="150" width="416" height="216"/></clipPath></defs><rect width="720" height="460" fill="#f6f1e8"/>${text(36,44,'CALCULATION ATELIER','C5-masthead')}${text(684,44,`0${p+1} / 05`,'C5-small C5-soft','text-anchor="end"')}${line(36,66,684,66)}${body}${line(36,419,684,419)}${text(36,444,'Illustrative · normalized','C5-small C5-soft')}${[0,1,2,3,4].map(n=>`<circle cx="${600+n*19}" cy="438" r="${n===p?4:2}" fill="${n===p?'#b3432e':'#a4a99b'}"/>`).join('')}</svg>`;
}
