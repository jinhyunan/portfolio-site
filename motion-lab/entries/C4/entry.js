export const id = 'C4';
export const title = 'The balance landscape';
export const summary = 'A contour field reveals how resistance moves the operating point along the same pump curve.';

export const translations = [
  ['The balance landscape', '균형의 지형'],
  ['A contour field reveals how resistance moves the operating point along the same pump curve.', '등고선으로 표현한 장에서 저항 변화가 같은 펌프 곡선 위의 운전점을 어떻게 이동시키는지 보여 줍니다.'],
  ['Read the landscape', '지형을 읽다'],
  ['Find where supply meets demand.', '공급과 요구가 만나는 지점을 찾습니다.'],
  ['Trace two laws', '두 관계식을 따라가다'],
  ['The crossing closes the head balance.', '교점에서 양정의 균형이 성립합니다.'],
  ['Change the resistance', '저항을 바꾸다'],
  ['The field bends. The pump stays.', '저항장은 변하고 펌프 곡선은 유지됩니다.'],
  ['Inspect the evidence', '근거를 살피다'],
  ['A precise crossing can still have unknown inputs.', '교점이 정밀해도 입력에는 미확인이 남을 수 있습니다.'],
  ['Keep the decision open', '선정 판단은 열어 두다'],
  ['Higher resistance moves the point toward lower flow.', '저항이 커지면 운전점은 더 낮은 유량으로 이동합니다.'],
  ['Pump head', '펌프 양정'],
  ['System demand', '계통 요구 양정'],
  ['Relative flow', '상대 유량'],
  ['Relative head', '상대 양정'],
  ['Same pump', '같은 펌프'],
  ['Base resistance', '기본 저항'],
  ['Higher resistance', '저항 증가'],
  ['Head balance', '양정 균형'],
  ['Lower flow', '유량 감소'],
  ['Operating point', '운전점'],
  ['Contour offsets', '등고선 오프셋'],
  ['Units', '단위'],
  ['Boundaries', '경계 조건'],
  ['OEM evidence', '제작사 근거'],
  ['Unknown', '미확인'],
  ['Inputs unresolved', '입력 미확인'],
  ['Illustrative envelope', '설명용 범위'],
  ['Calculation ≠ selection', '계산 ≠ 기기 선정'],
  ['Candidates need evidence.', '후보에는 근거가 필요합니다.'],
  ['Illustrative · relative axes · no plant values', '설명용 · 상대 좌표 · 실제 플랜트 수치 아님'],
  ['Illustrative contour atlas of pump head and system demand on relative axes.', '상대 좌표에서 펌프 양정과 계통 요구 양정을 나타낸 설명용 등고선 지도입니다.'],
  ['Illustrative pump and system curves meet at the head balance; ruled lines show the gap elsewhere.', '설명용 펌프 곡선과 계통 곡선은 양정 균형점에서 만나며, 연결선은 다른 지점의 차이를 나타냅니다.'],
  ['Base resistance contour field with its operating point on the fixed illustrative pump curve.', '고정된 설명용 펌프 곡선 위에 기본 저항장의 운전점을 표시합니다.'],
  ['Higher resistance steepens the contour field and moves the operating point to lower flow on the same illustrative pump curve.', '저항 증가로 등고선이 가팔라지고, 같은 설명용 펌프 곡선 위의 운전점이 낮은 유량 쪽으로 이동합니다.'],
  ['Magnified illustrative operating point with an unquantified envelope and unresolved units, boundaries and OEM evidence.', '설명용 운전점 확대도와 정량화되지 않은 범위를 보여 줍니다. 단위, 경계 조건, 제작사 근거는 미확인 상태입니다.'],
  ['Two illustrative operating points on one pump curve show lower flow at higher resistance; calculation is not equipment selection.', '하나의 펌프 곡선 위에 표시한 두 설명용 운전점은 저항 증가 시 유량이 감소함을 보여 줍니다. 계산 완료가 기기 선정을 뜻하지는 않습니다.']
];

export const css = `
.entry-C4 { display:block; width:100%; height:auto; background:#0b2430; color:#eff5e9; font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
.entry-C4 text { fill:#eef3e9; font-size:18px; font-weight:450; letter-spacing:.1px; }
.entry-C4 .c4-title { font-size:30px; font-weight:560; letter-spacing:-.7px; }
.entry-C4 .c4-note { fill:#a8bdbe; font-size:17px; }
.entry-C4 .c4-small { font-size:16px; }
.entry-C4 .c4-green { fill:#8fe2c5; }
.entry-C4 .c4-amber { fill:#f3bf7c; }
.entry-C4 .c4-formula { font-family:ui-monospace,SFMono-Regular,Consolas,monospace; font-size:18px; }
.entry-C4 .c4-line { fill:none; stroke-linecap:round; stroke-linejoin:round; }
.entry-C4 .c4-contour { fill:none; stroke:#dcaa73; stroke-width:1.2; opacity:.46; }
.entry-C4 .c4-rule { fill:none; stroke:#a1b6b7; stroke-width:1; opacity:.36; }
.entry-C4 .c4-pump { fill:none; stroke:#8fe2c5; stroke-width:4; stroke-linecap:round; }
.entry-C4 .c4-system { fill:none; stroke:#f3bf7c; stroke-width:3; stroke-linecap:round; }
.entry-C4 .c4-dash { stroke-dasharray:5 6; }
.entry-C4 .c4-point { fill:#0b2430; stroke:#eff5e9; stroke-width:2; }
.animating .entry-C4 .c4-draw { animation:C4-draw 1.9s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C4 .c4-field { animation:C4-field 1.45s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C4 .c4-locate { transform-box:fill-box; transform-origin:center; animation:C4-locate 2s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-C4 .c4-witness { animation:C4-witness 1.8s ease-out both; animation-play-state:var(--motion-play,running); }
@keyframes C4-draw { from { stroke-dasharray:1 1; stroke-dashoffset:1; opacity:.2; } to { stroke-dasharray:1 1; stroke-dashoffset:0; opacity:1; } }
@keyframes C4-field { from { opacity:.12; transform:translateY(9px); } to { opacity:1; transform:translateY(0); } }
@keyframes C4-locate { 0% { opacity:0; transform:scale(1.6); } 55% { opacity:1; } 100% { opacity:1; transform:scale(1); } }
@keyframes C4-witness { from { opacity:.15; } to { opacity:1; } }
@media(prefers-reduced-motion:reduce) { .animating .entry-C4 .c4-draw,.animating .entry-C4 .c4-field,.animating .entry-C4 .c4-locate,.animating .entry-C4 .c4-witness { animation:none; } }
`;

const box = { x: 92, y: 349, w: 510, h: 220, q: 1.1, head: 1.1 };
const f = n => Number(n.toFixed(2));
const pt = (q, h) => [f(box.x + q / box.q * box.w), f(box.y - h / box.head * box.h)];
const pump = q => 1 - .45 * q * q;
const system = (q, k) => .12 + k * q * q;
const operating = k => { const q = Math.sqrt(.88 / (.45 + k)); return { q, h: pump(q), xy: pt(q, pump(q)) }; };
const base = operating(.7);
const higher = operating(1.5);
const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' }[c]));
const label = (x, y, value, cls = '', anchor = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${escape(value)}</text>`;
const line = (a, b, cls = 'c4-rule', extra = '') => `<path d="M${a.join(',')} L${b.join(',')}" class="${cls}" ${extra}/>`;
function curve(fn, a = 0, b = 1.1, steps = 55) {
  return Array.from({ length: steps + 1 }, (_, i) => `${i ? 'L' : 'M'}${pt(a + (b-a)*i/steps, fn(a + (b-a)*i/steps)).join(',')}`).join(' ');
}
function band(k, offset, width) {
  const a = Array.from({ length: 56 }, (_, i) => pt(i*.02, system(i*.02,k)+offset+width));
  const b = Array.from({ length: 56 }, (_, i) => pt((55-i)*.02, system((55-i)*.02,k)+offset-width));
  return `M${a.concat(b).map(p => p.join(',')).join(' L')}Z`;
}
function contours(k, clip, dense = false) {
  const offsets = dense ? [-.75,-.6,-.45,-.3,-.15,0,.15,.3,.45,.6,.75] : [-.6,-.3,0,.3,.6];
  return `<g clip-path="url(#${clip})" class="c4-field">${[-.6,0,.6].map((v,i) => `<path d="${band(k,v,.145)}" fill="#dfac74" opacity="${i === 1 ? '.09' : '.035'}"/>`).join('')}${offsets.map(v => `<path d="${curve(q => system(q,k)+v)}" class="c4-contour"/>`).join('')}</g>`;
}
function axes() {
  return `<path d="M92,125 V349 H615 M86,137 L92,125 L98,137 M603,343 L615,349 L603,355" class="c4-line" stroke="#829c9f" stroke-width="1.3"/>${label(94,115,'Relative head','c4-note')}${label(614,382,'Relative flow','c4-note','end')}`;
}
function dot(xy, halo = true) {
  const [x,y] = xy;
  return `<g class="c4-locate">${halo ? `<circle cx="${x}" cy="${y}" r="17" fill="none" stroke="#eff5e9" stroke-width="1" opacity=".45"/>` : ''}<circle cx="${x}" cy="${y}" r="6" class="c4-point"/><circle cx="${x}" cy="${y}" r="2" fill="#eff5e9"/></g>`;
}
function pumpStroke() { return `<path d="${curve(pump)}" class="c4-pump c4-draw" pathLength="1"/>`; }
function systemStroke(k, cls = 'c4-system c4-draw') { return `<path d="${curve(q => system(q,k))}" class="${cls}" pathLength="1"/>`; }
function phaseAtlas(clip) {
  return `<g transform="matrix(.98 -.12 .15 .84 -14 57)">${contours(.7,clip,true)}<g clip-path="url(#${clip})">${pumpStroke()}${systemStroke(.7)}${[.2,.4,.6,.8,1].map(q => line(pt(q,0),pt(q,1.1),'c4-rule')).join('')}</g><path d="M92,129 V349 H602 V129 Z" class="c4-rule"/>${dot(base.xy)}</g>
    <path d="M196,301 L165,370 H53 M487,234 L550,370 H665" class="c4-rule"/>
    ${label(52,398,'Pump head','c4-green')}${label(665,398,'System demand','c4-amber','end')}
    ${label(400,119,'Contour offsets','c4-note','middle')}`;
}
function phaseLaws(clip) {
  const rules = [.12,.28,.44,.60,.76,.94,1.06].map(q => {
    const a=pt(q,pump(q)), b=pt(q,system(q,.7));
    return line(a,b,'c4-rule')+`<circle cx="${a[0]}" cy="${a[1]}" r="2" fill="#8fe2c5"/><circle cx="${b[0]}" cy="${b[1]}" r="2" fill="#f3bf7c"/>`;
  }).join('');
  return `<g clip-path="url(#${clip})">${rules}${pumpStroke()}${systemStroke(.7)}</g>
    ${label(100,146,'Pump head','c4-green')}${label(100,173,'H = 1 − 0.45 Q²','c4-formula c4-green')}
    ${label(100,389,'System demand','c4-amber')}${label(305,389,'H = 0.12 + 0.7 Q²','c4-formula c4-amber')}
    ${line(base.xy,[base.xy[0],319],'c4-rule c4-dash')}${dot(base.xy)}
    ${label(620,322,'Head balance','','end')}<path d="M538,313 L${base.xy[0]+14},${base.xy[1]+18}" class="c4-rule"/>`;
}
function phaseExplore(k, clip, alternate) {
  const op=operating(k), [x,y]=op.xy;
  return `${axes()}${contours(k,clip,true)}<g clip-path="url(#${clip})">${pumpStroke()}${systemStroke(k)}${alternate ? `<path d="${curve(q=>system(q,.7))}" class="c4-line c4-dash" stroke="#f3bf7c" stroke-width="1.5" opacity=".35"/>` : ''}</g>
    ${label(274,147,'Same pump','c4-green')}
    ${line([x,y],[x,349],'c4-rule c4-dash')}${dot(op.xy)}
    ${alternate ? `<circle cx="${base.xy[0]}" cy="${base.xy[1]}" r="5" fill="none" stroke="#a8bdbe" stroke-width="1.5"/><path d="M${base.xy[0]},${base.xy[1]+12} V349" class="c4-rule c4-dash"/><path d="M${base.xy[0]},365 H${x} l9,-5 m-9,5 l9,5" class="c4-line" stroke="#eff5e9" stroke-width="2"/>${label((x+base.xy[0])/2,400,'Lower flow','','middle')}` : `${label(x,400,'Operating point','','middle')}`}
    ${label(43,400,alternate ? 'Higher resistance' : 'Base resistance','c4-amber')}`;
}
function phaseReview(k, lens) {
  const op=operating(k), [x,y]=op.xy;
  const cx=222,cy=246,zoom=2.45;
  return `<circle cx="${cx}" cy="${cy}" r="132" fill="#102e39" stroke="#506f76" stroke-width="1"/>
    <g clip-path="url(#${lens})"><g transform="translate(${f(cx-zoom*x)} ${f(cy-zoom*y)}) scale(${zoom})"><path d="${band(k,0,.065)}" fill="#f3bf7c" opacity=".13"/><path d="${curve(q=>system(q,k)+.065)}" class="c4-contour c4-dash"/><path d="${curve(q=>system(q,k)-.065)}" class="c4-contour c4-dash"/>${pumpStroke()}${systemStroke(k)}</g></g>
    <path d="M222,103 V127 M222,365 V389 M79,246 H103 M341,246 H365" class="c4-rule"/>
    <circle cx="222" cy="246" r="26" class="c4-point" fill="none" stroke-dasharray="3 5"/>${dot([222,246],false)}
    ${label(222,408,'Illustrative envelope','c4-note','middle')}
    <path d="M327,164 H397 M354,246 H397 M327,326 H397" class="c4-rule"/>
    <g class="c4-witness">${[['Units',160],['Boundaries',242],['OEM evidence',324]].map(([name,yy])=>`<circle cx="414" cy="${yy-4}" r="7" fill="none" stroke="#f3bf7c" stroke-width="1.5" stroke-dasharray="2 3"/>${label(437,yy,name)}${label(437,yy+25,'Unknown','c4-note c4-small')}`).join('')}</g>
    ${label(437,401,'Inputs unresolved','c4-amber')}`;
}
function phaseOutcome(clip) {
  const [bx,by]=base.xy,[hx,hy]=higher.xy;
  return `<g clip-path="url(#${clip})"><path d="${curve(q=>system(q,.7))}" class="c4-contour c4-dash"/><path d="${curve(q=>system(q,1.5))}" class="c4-contour"/>${pumpStroke()}<path d="${curve(pump,base.q,higher.q)}" class="c4-line c4-draw" stroke="#eff5e9" stroke-width="7" pathLength="1"/></g>
    ${label(108,163,'Same pump','c4-green')}
    <path d="M${bx},${by+13} V303 H${hx} M${hx+9},298 L${hx},303 L${hx+9},308 M${hx},${hy+13} V303" class="c4-line" stroke="#a8bdbe" stroke-width="1.5"/>
    ${dot(base.xy,false)}${dot(higher.xy,false)}
    ${label(611,252,'Base resistance','c4-note','end')}${label(373,160,'Higher resistance','c4-amber','middle')}${line([390,169],[hx-7,hy-12],'c4-rule')}
    ${label((bx+hx)/2,333,'Lower flow','','middle')}
    <path d="M44,367 H676" class="c4-rule"/>
    ${label(44,399,'Calculation ≠ selection','c4-amber')}${label(676,399,'Candidates need evidence.','c4-note','end')}`;
}

export function render(phase = 0, choice = 'base', uid = 'C4') {
  const index=Math.max(0,Math.min(4,Math.trunc(Number(phase)||0)));
  const alternate=choice==='alternate', k=alternate?1.5:.7;
  const safeUid=String(uid).replace(/[^a-zA-Z0-9_-]/g,'_');
  const clip=`${safeUid}-C4-field`, lens=`${safeUid}-C4-lens`;
  const headings=['Read the landscape','Trace two laws','Change the resistance','Inspect the evidence','Keep the decision open'];
  const decks=['Find where supply meets demand.','The crossing closes the head balance.','The field bends. The pump stays.','A precise crossing can still have unknown inputs.','Higher resistance moves the point toward lower flow.'];
  const aria=[
    'Illustrative contour atlas of pump head and system demand on relative axes.',
    'Illustrative pump and system curves meet at the head balance; ruled lines show the gap elsewhere.',
    alternate ? 'Higher resistance steepens the contour field and moves the operating point to lower flow on the same illustrative pump curve.' : 'Base resistance contour field with its operating point on the fixed illustrative pump curve.',
    'Magnified illustrative operating point with an unquantified envelope and unresolved units, boundaries and OEM evidence.',
    'Two illustrative operating points on one pump curve show lower flow at higher resistance; calculation is not equipment selection.'
  ];
  const scenes=[()=>phaseAtlas(clip),()=>phaseLaws(clip),()=>phaseExplore(k,clip,alternate),()=>phaseReview(k,lens),()=>phaseOutcome(clip)];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" class="entry-C4" role="img" aria-label="${escape(aria[index])}"><defs><clipPath id="${clip}"><path d="M80,122 H622 V355 H80Z"/></clipPath><clipPath id="${lens}"><circle cx="222" cy="246" r="131"/></clipPath></defs><rect width="720" height="460" fill="#0b2430"/><path d="M40,95 H680" class="c4-rule"/>${label(40,48,headings[index],'c4-title')}${label(40,78,decks[index],'c4-note')}${scenes[index]()}${label(40,441,'Illustrative · relative axes · no plant values','c4-note c4-small')}</svg>`;
}
