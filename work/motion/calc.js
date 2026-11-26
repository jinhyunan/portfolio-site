export const id = 'FCALC';
export const title = 'The hydraulic balance';
export const summary = 'A physical head witness becomes an analytical operating point, with assumptions still attached.';

const pump = q => 1 - .45 * q * q;
const state = k => { const q = Math.sqrt(.88 / (.45 + k)); return { k, q, h: pump(q) }; };
const base = state(.7);
const currentStates = [base, state(1.5)];
const value = n => n.toFixed(3);
const descriptions = currentStates.flatMap((s, i) => {
  const en = i ? 'Higher resistance' : 'Base resistance';
  const ko = i ? '저항 증가' : '기본 저항';
  const interval = `${value(state(s.k + .1).q)}–${value(state(s.k - .1).q)}`;
  return [
    [`Dimensional specimens show diameter, length and roughness. Actual input records, units and boundaries remain open.`, '치수 표본으로 직경, 길이, 조도를 보여 줍니다. 실제 입력 기록, 단위 및 경계 조건은 미확인입니다.'],
    [`${en}: relative head ${value(s.h)} falls through one aggregate system loss to fixed head 0.12. Ribbon width encodes relative flow ${value(s.q)}. This is a conceptual model, not a measured valve pressure drop.`, `${ko}: 상대 수두 ${value(s.h)}에서 계통 전체의 손실을 거쳐 고정 수두 0.12로 내려갑니다. 띠의 폭은 상대 유량 ${value(s.q)}을 나타냅니다. 측정된 밸브 차압이 아닌 개념 모형입니다.`],
    [`${en}: K ${s.k.toFixed(2)}, relative flow ${value(s.q)} and head ${value(s.h)}. The same pump curve meets the system curve on fixed relative axes.${i ? ' The hollow base point and left arrow show lower flow.' : ' The filled point is the base operating point.'}`, `${ko}: K ${s.k.toFixed(2)}, 상대 유량 ${value(s.q)}, 상대 수두 ${value(s.h)}입니다. 고정된 상대 좌표에서 동일 펌프 곡선과 계통 곡선이 만납니다.${i ? ' 빈 기준점과 왼쪽 화살표는 유량 감소를 나타냅니다.' : ' 채워진 점은 기본 운전점입니다.'}`],
    [`${en}: an assumed K plus or minus 0.10 produces relative flow ${interval}. This is sensitivity only, not a confidence interval. The selected flow remains ${value(s.q)}; input records and OEM evidence are open.`, `${ko}: K를 ±0.10으로 가정하면 상대 유량은 ${interval}입니다. 신뢰구간이 아닌 민감도 예시입니다. 선택한 유량 ${value(s.q)}을 유지하며 입력 기록과 제작사 근거는 미확인입니다.`],
    [`${en}: the calibrated indicator retains relative flow ${value(s.q)} and head ${value(s.h)}. Two unranked pipe candidates retain open inputs, OEM evidence and human review. No equipment is selected.`, `${ko}: 눈금 지시계가 상대 유량 ${value(s.q)}와 상대 수두 ${value(s.h)}를 유지합니다. 순위를 정하지 않은 두 배관 후보에 입력, 제작사 근거 및 사람의 검토가 미해결로 남습니다. 장비는 선정하지 않았습니다.`]
  ];
});
const words = [
  [title, '수력 균형 실험대'],
  [summary, '물리적인 수두 표식이 해석적 운전점으로 이어지며 가정을 함께 보존합니다.'],
  ['Input records', '입력 기록'], ['Boundary', '경계 조건'], ['Units', '단위'],
  ['Open', '미확인'], ['Aggregate resistance', '계통 전체 저항'],
  ['System loss', '계통 손실'], ['Height = head', '높이 = 수두'],
  ['Width = flow', '폭 = 유량'], ['Conceptual model', '개념 모형'],
  ['Same pump', '동일 펌프'], ['System', '계통'],
  ['Base resistance', '기본 저항'], ['Higher resistance', '저항 증가'],
  ['Relative flow', '상대 유량'], ['Sensitivity only', '민감도 예시'],
  ['Assumed K ± 0.10', '가정 K ± 0.10'], ['OEM curve', '제작사 곡선'],
  ['Candidates', '후보'], ['Unselected', '미선정'], ['Inputs', '입력값'],
  ['OEM evidence', '제작사 근거'], ['Human review', '사람의 검토'],
  ['Selection open', '선정 미결'],
];
const technical = ['D [m]', 'L [m]', 'ε [m]', 'H', 'Q', 'KQ²', 'H₀ = 0.12', 'A', 'B'];
for (const s of currentStates) technical.push(`K = ${s.k.toFixed(2)}`, `H = ${value(s.h)}`, `Q ${value(s.q)}`, `Q ${value(state(s.k+.1).q)}–${value(state(s.k-.1).q)}`, `K ${s.k.toFixed(2)} · H ${value(s.h)}`);
export const translations = [...words, ...descriptions, ...technical.map(s => [s, s])];

export const css = `
.entry-FCALC{display:block;width:100%;height:auto;background:#eaf2ed;color:#173e42;font-family:Arial,"Noto Sans KR",sans-serif;isolation:isolate}
.entry-FCALC text{fill:#173e42;font-size:28px;font-weight:550}
.entry-FCALC .FCALC-secondary{font-size:22px;font-weight:500;fill:#42666a}
.entry-FCALC .FCALC-math{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:26px;letter-spacing:-.7px}
.entry-FCALC .FCALC-number{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:54px;font-weight:500;letter-spacing:-2px}
.entry-FCALC .FCALC-teal{fill:#066e70}
.entry-FCALC .FCALC-copper{fill:#92552e}
.entry-FCALC .FCALC-rule{fill:none;stroke:#9db6ae;stroke-width:1.6}
.entry-FCALC .FCALC-axis{fill:none;stroke:#5c7d7d;stroke-width:2}
.entry-FCALC .FCALC-pump{fill:none;stroke:#126c70;stroke-width:5;stroke-linecap:round}
.entry-FCALC .FCALC-system{fill:none;stroke:#a56c3b;stroke-width:4;stroke-linecap:round}
.entry-FCALC .FCALC-guide{fill:none;stroke:#8fa6a1;stroke-width:1.8;stroke-dasharray:5 7}
.entry-FCALC .FCALC-ghost{fill:none;stroke:#657c7b;stroke-width:2.3;stroke-dasharray:7 7}
.entry-FCALC .FCALC-glass{fill:#f7fffb;fill-opacity:.4;stroke:#648b89;stroke-width:2.4}
.entry-FCALC .FCALC-liquid{fill:#62c7bc;fill-opacity:.6;transform-box:fill-box;transform-origin:center bottom}
.entry-FCALC .FCALC-meniscus{fill:#9be3d3;stroke:#1c8d85;stroke-width:2}
.entry-FCALC .FCALC-ribbon{fill:none;stroke:#248e88;stroke-linejoin:round;stroke-linecap:round}
.entry-FCALC .FCALC-draw{stroke-linecap:round;stroke-linejoin:round}
.entry-FCALC .FCALC-point{fill:#143f42;stroke:#eaf2ed;stroke-width:3}
.entry-FCALC .FCALC-open{fill:#eaf2ed;stroke:#95683d;stroke-width:2.5}
.entry-FCALC .FCALC-sense{fill:#bca267;fill-opacity:.18;stroke:none}
.entry-FCALC .FCALC-rise,.entry-FCALC .FCALC-point-shift{transform-box:fill-box;transform-origin:center}
.animating .entry-FCALC .FCALC-rise{animation:FCALC-rise .95s var(--FCALC-delay,0s) ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FCALC .FCALC-draw{stroke-dasharray:1;animation:FCALC-draw 1.6s var(--FCALC-delay,.1s) ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FCALC .FCALC-liquid{animation:FCALC-level 1.5s .25s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FCALC .FCALC-point-shift{animation:FCALC-point 1.5s .4s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FCALC .FCALC-needle{transform-box:view-box;transform-origin:0px 0px;animation:FCALC-needle 1.5s .35s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FCALC .FCALC-sensitivity{animation:FCALC-sensitivity 1.3s .4s ease-out both;animation-play-state:var(--motion-play,running)}
@keyframes FCALC-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes FCALC-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes FCALC-level{from{transform:scaleY(var(--FCALC-start,1))}to{transform:scaleY(1)}}
@keyframes FCALC-point{from{transform:translate(var(--FCALC-dx,0px),var(--FCALC-dy,0px))}to{transform:translate(0,0)}}
@keyframes FCALC-needle{from{transform:rotate(var(--FCALC-turn,0deg))}to{transform:rotate(0deg)}}
@keyframes FCALC-sensitivity{from{opacity:0}to{opacity:1}}
@media(prefers-reduced-motion:reduce){.animating .entry-FCALC .FCALC-rise,.animating .entry-FCALC .FCALC-draw,.animating .entry-FCALC .FCALC-liquid,.animating .entry-FCALC .FCALC-point-shift,.animating .entry-FCALC .FCALC-needle,.animating .entry-FCALC .FCALC-sensitivity{animation:none;stroke-dasharray:none}}
`;

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const f = n => Number(n.toFixed(3));
const text = (x,y,s,cls='',anchor='start') => `<text x="${f(x)}" y="${f(y)}" class="${cls}" text-anchor="${anchor}">${esc(s)}</text>`;
const path = (d,cls='FCALC-rule',attrs='') => `<path d="${d}" class="${cls}" ${attrs}/>`;
const line = (x1,y1,x2,y2,cls='FCALC-rule',attrs='') => path(`M${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}`,cls,attrs);
const dot = (x,y,r,cls='FCALC-open',attrs='') => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" class="${cls}" ${attrs}/>`;
const openLabel = (x,y,label) => dot(x,y-8,7)+text(x+21,y,label,'FCALC-secondary');
function glass(x,top,w,bottom,head,scale,uid,compare=false) {
  const level=bottom-scale*head;
  const ratio=compare ? base.h/head : 1;
  return `<defs><clipPath id="${uid}-glass"><rect x="${x+2}" y="${top-5}" width="${w-4}" height="${bottom-top+8}" rx="${w/2}"/></clipPath></defs>
    <path d="M${x} ${top}V${bottom-10}Q${x} ${bottom+6} ${x+w/2} ${bottom+6}Q${x+w} ${bottom+6} ${x+w} ${bottom-10}V${top}" class="FCALC-glass"/>
    <g clip-path="url(#${uid}-glass)"><g class="FCALC-liquid" style="--FCALC-start:${ratio}"><rect x="${x+2}" y="${f(level)}" width="${w-4}" height="${f(bottom-level+6)}"/><ellipse cx="${x+w/2}" cy="${f(level)}" rx="${w/2-2}" ry="6" class="FCALC-meniscus"/></g></g>
    <ellipse cx="${x+w/2}" cy="${top}" rx="${w/2}" ry="7" fill="none" stroke="#648b89" stroke-width="2.4"/>
    ${line(x+12,top+18,x+12,bottom-18,'','stroke="#fff" stroke-width="4" opacity=".8"')}
    ${[.2,.4,.6,.8,1].map(h=>line(x+w-14,bottom-scale*h,x+w-3,bottom-scale*h,'FCALC-axis')).join('')}
    ${compare?line(x+1,bottom-scale*base.h,x+w-1,bottom-scale*base.h,'FCALC-ghost'):''}`;
}
function pipeBore(x,y,rx,ry,depth,uid,rough=false) {
  return `<g class="FCALC-rise"><path d="M${x} ${y-ry}L${x+depth} ${y-ry*.8}Q${x+depth+rx*.7} ${y} ${x+depth} ${y+ry*.8}L${x} ${y+ry}" fill="url(#${uid}-metal)" stroke="#7b9a94" stroke-width="2"/>
    <ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#c4d9d0" stroke="#577c7a" stroke-width="2.2"/>
    <ellipse cx="${x}" cy="${y}" rx="${rx*.72}" ry="${ry*.72}" fill="#f6faf3" stroke="#577c7a" stroke-width="2"/>
    ${rough?path(`M${x+53} ${y+19}l16 -7 13 6 14 -7 13 7 14 -6 14 6 15 -6 14 6 14 -6 13 6 15 -7 14 7 14 -6 14 6 14 -7 16 7`,'','fill="none" stroke="#537e78" stroke-width="2.4"'):''}</g>`;
}
function context(uid) {
  return `<ellipse cx="365" cy="322" rx="288" ry="18" fill="#d9e7de"/>
    ${pipeBore(147,205,68,86,430,uid,true)}
    ${path('M64 127H77M64 283H77M70 127V283','FCALC-axis')}${text(51,81,'D [m]','FCALC-math')}
    ${path('M153 315V329H573V315','FCALC-axis')}${text(364,367,'L [m]','FCALC-math','middle')}
    ${path('M492 108V150L473 216','FCALC-guide')}${text(493,81,'ε [m]','FCALC-math','middle')}
    ${line(40,390,680,390)}
    ${openLabel(52,428,'Input records')}${openLabel(305,428,'Boundary')}${openLabel(536,428,'Units')}
    ${text(678,48,'Open','FCALC-secondary','end')}`;
}
function budget(s,uid) {
  const bottom=342, scale=270, top=bottom-scale*s.h, fixed=bottom-scale*.12;
  const ribbon=`M104 ${f(top)}H250C326 ${f(top)} 369 ${f(fixed)} 454 ${f(fixed)}H637`;
  return `${text(42,46,'Aggregate resistance')}${text(680,46,`K = ${s.k.toFixed(2)}`,'FCALC-math','end')}
    ${line(49,bottom,676,bottom,'FCALC-guide')}
    <path d="M260 ${f(top)}H306L486 ${f(fixed)}H452Z" fill="url(#${uid}-resistance)" opacity=".65"/>
    ${glass(69,70,70,bottom,s.h,scale,uid)}
    ${path(ribbon,'FCALC-ribbon FCALC-draw',`stroke-width="${f(38*s.q)}" pathLength="1" style="--FCALC-delay:.2s"`)}
    ${path(`M271 ${f(top-22)}H302L480 ${f(fixed-22)}`,'FCALC-guide')}
    ${text(440,112,'System loss','','middle')}${text(440,150,'KQ²','FCALC-math FCALC-copper','middle')}
    ${line(510,top,510,fixed,'FCALC-axis')}${line(502,top,518,top,'FCALC-axis')}${line(502,fixed,518,fixed,'FCALC-axis')}
    ${path(`M624 ${f(fixed-8)}L638 ${f(fixed)}L624 ${f(fixed+8)}`,'FCALC-axis')}
    ${text(135,385,`H = ${value(s.h)}`,'FCALC-math','middle')}${text(578,385,'H₀ = 0.12','FCALC-math','middle')}
    ${text(360,385,'Conceptual model','FCALC-secondary','middle')}
    ${text(42,435,'Height = head','FCALC-secondary')}${text(680,435,'Width = flow','FCALC-secondary','end')}`;
}
function plotGeometry(review=false) {
  const left=review?76:186, bottom=review?277:326, width=review?574:464, scale=review?182:222;
  return {left,bottom,width,scale,X:q=>left+q/1.1*width,Y:h=>bottom-scale*h};
}
function curve(g,fn,reverse=false) {
  return Array.from({length:65},(_,i)=>{const q=(reverse?64-i:i)*1.1/64;return `${i?'L':'M'}${f(g.X(q))} ${f(g.Y(fn(q)))}`;}).join(' ');
}
function chart(s,uid,{review=false}={}) {
  const g=plotGeometry(review),{left,bottom,width,X,Y}=g,alt=s.k>1;
  const pointX=X(s.q),pointY=Y(s.h),dX=X(base.q)-pointX,dY=Y(base.h)-pointY;
  const lo=state(s.k+.1),hi=state(s.k-.1);
  const band=curve(g,q=>.12+(s.k-.1)*q*q)+' '+curve(g,q=>.12+(s.k+.1)*q*q,true).replace(/^M/,'L')+'Z';
  return `<defs><clipPath id="${uid}-chart"><rect x="${left}" y="${f(Y(1.12))}" width="${width}" height="${f(bottom-Y(1.12))}"/></clipPath></defs>
    ${[.5,1].map(h=>line(left,Y(h),left+width,Y(h))).join('')}
    ${line(left,Y(1.1),left,bottom,'FCALC-axis')}${line(left,bottom,left+width+6,bottom,'FCALC-axis')}
    <g clip-path="url(#${uid}-chart)">
      ${review?`<path d="${band}" class="FCALC-sense FCALC-sensitivity"/><path d="${curve(g,q=>.12+(s.k-.1)*q*q)}" class="FCALC-guide"/><path d="${curve(g,q=>.12+(s.k+.1)*q*q)}" class="FCALC-guide"/>`:''}
      ${alt?path(curve(g,q=>.12+.7*q*q),'FCALC-ghost'):''}
      ${path(curve(g,pump),'FCALC-pump FCALC-draw','pathLength="1"')}
      ${path(curve(g,q=>.12+s.k*q*q),'FCALC-system FCALC-draw','pathLength="1" style="--FCALC-delay:.25s"')}
    </g>
    ${line(pointX,pointY,pointX,bottom,'FCALC-guide')}
    ${!review?line(128,pointY,pointX,pointY,'FCALC-guide'):''}
    ${alt&&!review?`${dot(X(base.q),Y(base.h),7,'FCALC-open','style="stroke:#718984"')}${line(X(base.q),Y(base.h)+10,X(base.q),bottom,'FCALC-guide')}${path(`M${f(X(base.q))} ${bottom+19}H${f(pointX+6)}l10 -6m-10 6 10 6`,'FCALC-axis')}`:''}
    ${review?`${line(X(lo.q),Y(lo.h),X(lo.q),bottom,'FCALC-guide')}${line(X(hi.q),Y(hi.h),X(hi.q),bottom,'FCALC-guide')}${path(`M${f(X(lo.q))} ${bottom-9}v16H${f(X(hi.q))}v-16`,'FCALC-system')}`:''}
    <g class="FCALC-point-shift" style="--FCALC-dx:${f(alt&&!review?dX:0)}px;--FCALC-dy:${f(alt&&!review?dY:0)}px">${dot(pointX,pointY,11,'FCALC-point')}${dot(pointX,pointY,3,'','fill="#f7fff8"')}</g>
    ${text(left-5,bottom+30,'0','FCALC-secondary')}${text(X(1),bottom+30,'1','FCALC-secondary','middle')}${text(left+width+18,bottom+9,'Q','FCALC-secondary','middle')}`;
}
function explore(s,uid) {
  const g=plotGeometry(),alt=s.k>1;
  return `${text(42,42,`H = ${value(s.h)}`,'FCALC-math')}
    ${line(244,34,270,34,'FCALC-pump')}${text(284,42,'Same pump','FCALC-secondary')}
    ${line(523,34,549,34,'FCALC-system')}${text(563,42,'System','FCALC-secondary')}
    ${glass(54,76,72,g.bottom,s.h,g.scale,uid,alt)}
    ${chart(s,uid)}
    ${text(42,416,`Q ${value(s.q)}`,'FCALC-number FCALC-teal')}${text(45,448,'Relative flow','FCALC-secondary')}
    <g class="FCALC-rise" style="--FCALC-delay:.5s">${text(365,413,alt?'Higher resistance':'Base resistance')}${text(365,448,`K = ${s.k.toFixed(2)}`,'FCALC-math')}</g>`;
}
function review(s,uid) {
  return `${text(42,42,'Sensitivity only')}
    ${line(322,34,348,34,'FCALC-pump')}${text(362,42,'Same pump','FCALC-secondary')}
    ${line(546,34,572,34,'FCALC-system')}${text(586,42,'System','FCALC-secondary')}
    ${chart(s,uid,{review:true})}${text(50,78,'H','FCALC-secondary')}
    <g class="FCALC-rise" style="--FCALC-delay:.5s">${text(42,356,'Assumed K ± 0.10','FCALC-secondary')}${text(678,356,`Q ${value(state(s.k+.1).q)}–${value(state(s.k-.1).q)}`,'FCALC-math','end')}</g>
    ${line(42,379,678,379)}${openLabel(51,421,'Input records')}${openLabel(406,421,'OEM curve')}`;
}
function gauge(s) {
  const cx=176,cy=210,r=116,angle=Math.PI+s.q*Math.PI;
  const px=cx+Math.cos(angle)*r*.8,py=cy+Math.sin(angle)*r*.8;
  const ticks=Array.from({length:11},(_,i)=>{const a=Math.PI+i*Math.PI/10;return line(cx+Math.cos(a)*(r-2),cy+Math.sin(a)*(r-2),cx+Math.cos(a)*(r-(i%5===0?20:12)),cy+Math.sin(a)*(r-(i%5===0?20:12)),'FCALC-axis');}).join('');
  // The needle is already at its final analytic angle without animation.
  const theta=(base.q-s.q)*180;
  return `${path(`M${cx-r} ${cy}A${r} ${r} 0 0 1 ${cx+r} ${cy}`,'FCALC-rule','stroke-width="14"')}${ticks}
    ${path(`M${cx-r} ${cy}A${r} ${r} 0 0 1 ${f(cx+Math.cos(angle)*r)} ${f(cy+Math.sin(angle)*r)}`,'FCALC-pump FCALC-draw','pathLength="1"')}
    <g transform="translate(${cx} ${cy})"><g class="FCALC-needle" style="--FCALC-pivot:0px 0px;--FCALC-turn:${f(theta)}deg">${line(0,0,px-cx,py-cy,'FCALC-system','stroke-width="4"')}</g></g>${dot(cx,cy,7,'FCALC-point')}
    ${text(cx-r,cy+29,'0','FCALC-secondary','middle')}${text(cx+r,cy+29,'1','FCALC-secondary','middle')}
    ${text(cx,287,value(s.q),'FCALC-number FCALC-teal','middle')}${text(cx,329,`K ${s.k.toFixed(2)} · H ${value(s.h)}`,'FCALC-secondary','middle')}`;
}
function outcome(s,uid) {
  return `${text(42,47,'Relative flow')}${text(516,47,'Candidates','','middle')}
    ${gauge(s)}
    ${pipeBore(436,184,39,53,28,uid)}${pipeBore(578,184,50,68,28,uid)}
    ${text(436,193,'A','FCALC-math','middle')}${text(578,193,'B','FCALC-math','middle')}
    ${path('M385 274V291H645V274','FCALC-rule')}${text(515,329,'Unselected','','middle')}
    ${line(42,360,678,360)}
    ${openLabel(51,400,'Inputs')}${openLabel(245,400,'OEM evidence')}${openLabel(502,400,'Human review')}
    ${text(360,445,'Selection open','FCALC-copper','middle')}`;
}
export function render(phase=0,choice='base',uid='FCALC') {
  const n=Number(phase),p=Math.max(0,Math.min(4,Number.isFinite(n)?Math.trunc(n):0));
  const alt=choice==='alternate',s=currentStates[alt?1:0];
  const u=String(uid).replace(/[^A-Za-z0-9_-]/g,'_')||'FCALC';
  const body=[()=>context(u),()=>budget(s,u),()=>explore(s,u),()=>review(s,u),()=>outcome(s,u)][p]();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" class="entry-FCALC" aria-label="${esc(descriptions[(alt?5:0)+p][0])}"><defs><linearGradient id="${u}-metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#dcebe2"/><stop offset=".52" stop-color="#f9fdf6"/><stop offset="1" stop-color="#a9c5bc"/></linearGradient><pattern id="${u}-resistance" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)"><line x1="0" y1="0" x2="0" y2="12" stroke="#b78a4f" stroke-width="3"/></pattern></defs><rect width="720" height="460" fill="#eaf2ed"/>${body}</svg>`;
}
