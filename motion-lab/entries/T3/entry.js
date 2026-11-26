export const id = 'T3';
export const title = 'Reply Press';
export const summary = 'Evidence controls the press; people decide what the draft means.';
export const translations = [
  ['Reply Press', '리플라이 프레스'],
  ['Evidence controls the press; people decide what the draft means.', '근거가 인쇄를 제어하고, 사람이 초안의 의미를 판단합니다.'],
  ['Before ink, evidence.', '인쇄 전에, 근거.'],
  ['Three feeds. One trail.', '세 입력, 하나의 이력.'],
  ['The press must wait.', '인쇄는 기다립니다.'],
  ['Evidence opens the feed.', '근거가 경로를 엽니다.'],
  ['A draft meets judgment.', '초안은 판단을 만납니다.'],
  ['Keep the whole trail.', '전체 이력을 남깁니다.'],
  ['REVIEW & REPLY', '검토와 회신'],
  ['Illustrative workflow', '설명용 흐름'],
  ['Requirement', '요구사항'],
  ['Vendor reply', '공급사 회신'],
  ['Evidence', '근거'],
  ['Operating envelope', '운전 범위'],
  ['Equipment schedule', '장비 일람표'],
  ['Reference fragment', '참조 문서 조각'],
  ['A reply needs support.', '회신에는 근거가 필요합니다.'],
  ['Align before printing.', '인쇄 전에 대응 관계를 맞춥니다.'],
  ['Source stays visible.', '원문이 계속 보입니다.'],
  ['Evidence missing', '근거 미연결'],
  ['Evidence linked', '관련 근거 연결'],
  ['OUTPUT HELD', '출력 보류'],
  ['DRAFT ONLY', '초안만 생성'],
  ['Ask for evidence', '근거 요청'],
  ['Prepare draft', '초안 준비'],
  ['Human review', '사람의 검토'],
  ['No evidence, no conclusion.', '근거 없이는 결론도 없습니다.'],
  ['Linked is not approved.', '연결은 승인이 아닙니다.'],
  ['Original', '원문'],
  ['Change', '변경'],
  ['Rationale', '사유'],
  ['Check applicability', '적용성 확인'],
  ['Preserve the original.', '원문을 보존합니다.'],
  ['Judgment stays human.', '판단은 사람이 합니다.'],
  ['DRAFT', '초안'],
  ['Original + change + rationale', '원문 + 변경 + 사유'],
  ['Traceable, still a draft.', '추적 가능하지만, 아직 초안.'],
  ['Two source fragments approach a reply press, awaiting supporting evidence.', '두 원문 조각이 회신 인쇄기로 들어가며 뒷받침할 근거를 기다립니다.'],
  ['Requirement, vendor reply and evidence feed a press while the source trail is retained.', '요구사항, 공급사 회신, 근거가 인쇄기로 들어가며 원문 이력을 유지합니다.'],
  ['Missing evidence physically stops the output. A clarification fold asks for evidence.', '근거가 없으면 출력이 물리적으로 멈추고, 접힌 요청지가 근거를 요청합니다.'],
  ['Linked evidence opens the press feed and produces an illustrative draft for human review.', '연결된 근거가 인쇄 경로를 열고 사람의 검토를 위한 설명용 초안을 만듭니다.'],
  ['An illustrative draft retains the original and change, with applicability awaiting human judgment.', '설명용 초안이 원문과 변경을 유지하며 적용성은 사람의 판단을 기다립니다.'],
  ['An open archive retains original, change and rationale beside a draft awaiting human judgment.', '열린 보관철에 원문, 변경, 사유와 사람의 판단을 기다리는 초안이 함께 남습니다.']
];

export const css = `
.entry-T3{display:block;width:100%;height:auto;background:#f5f1e5;color:#202a35;font-family:Arial,"Noto Sans KR",sans-serif}
.entry-T3 .t3-head{font-size:39px;font-weight:750;letter-spacing:-1.5px;fill:#202a35}
.entry-T3 .t3-label{font-size:20px;font-weight:650;fill:#202a35}
.entry-T3 .t3-small{font-size:17px;font-weight:500;fill:#58616b}
.entry-T3 .t3-eyebrow{font-size:17px;font-weight:700;letter-spacing:2px;fill:#3037c7}
.entry-T3 .t3-white{fill:#fffdf5}
.entry-T3 .t3-blue{fill:#3037c7}
.entry-T3 .t3-coral{fill:#b74735}
.entry-T3 .t3-paper{fill:#fffdf5;stroke:#202a35;stroke-width:2}
.entry-T3 .t3-line{fill:none;stroke:#202a35;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.entry-T3 .t3-rule{fill:none;stroke:#a6aaa5;stroke-width:2;stroke-linecap:round}
.entry-T3 .t3-dotted{stroke-dasharray:5 7}
.entry-T3 .t3-ink{fill:none;stroke:#3037c7;stroke-width:5;stroke-linecap:round}
.entry-T3 .t3-feed,.entry-T3 .t3-drop,.entry-T3 .t3-output,.entry-T3 .t3-reveal,.entry-T3 .t3-hand,.entry-T3 .t3-block,.entry-T3 .t3-ring{opacity:1}
.animating .entry-T3 .t3-feed{animation:T3-feed 1.4s cubic-bezier(.2,.75,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-drop{animation:T3-drop 1.35s .55s cubic-bezier(.16,.75,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-ring{transform-box:fill-box;transform-origin:center;animation:T3-roll 2.3s .6s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-output{animation:T3-output 1.3s 1.7s cubic-bezier(.2,.75,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-reveal{animation:T3-reveal 1.1s .85s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-block{animation:T3-stop .65s .55s cubic-bezier(.12,.85,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T3 .t3-hand{animation:T3-hand 1.7s 1.2s ease-out both;animation-play-state:var(--motion-play,running)}
@keyframes T3-feed{from{transform:translateX(-34px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes T3-drop{from{transform:translateY(-42px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes T3-roll{from{transform:rotate(-115deg)}to{transform:rotate(0)}}
@keyframes T3-output{from{transform:translateY(-32px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes T3-reveal{from{opacity:0}to{opacity:1}}
@keyframes T3-stop{from{transform:translateY(25px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes T3-hand{0%{stroke-dasharray:300;stroke-dashoffset:300;opacity:0}15%{opacity:1}100%{stroke-dasharray:300;stroke-dashoffset:0;opacity:1}}
@media(prefers-reduced-motion:reduce){.animating .entry-T3 .t3-feed,.animating .entry-T3 .t3-drop,.animating .entry-T3 .t3-ring,.animating .entry-T3 .t3-output,.animating .entry-T3 .t3-reveal,.animating .entry-T3 .t3-block,.animating .entry-T3 .t3-hand{animation:none!important;transform:none;opacity:1}}
`;

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const txt = (x,y,value,cls='t3-label',extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${escape(value)}</text>`;
const rule = (x,y,w) => `<path d="M${x} ${y}h${w}" class="t3-rule"/>`;
function page(x,y,w,h,label,sub='',accent='#e4eb9a') {
  return `<rect x="${x+5}" y="${y+6}" width="${w}" height="${h}" fill="#202a35" opacity=".08"/><path d="M${x} ${y}h${w-24}l24 24v${h-24}h-${w}Z" class="t3-paper"/><path d="M${x+w-24} ${y}v24h24" class="t3-line"/><rect x="${x+16}" y="${y+18}" width="8" height="23" fill="${accent}"/>${txt(x+34,y+36,label)}${sub?txt(x+16,y+72,sub,'t3-small'):''}${rule(x+17,y+h-43,w-50)}${rule(x+17,y+h-28,w-78)}`;
}
function wheel(cx,cy,r=35) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f5f1e5" stroke="#202a35" stroke-width="3"/><g class="t3-ring"><circle cx="${cx}" cy="${cy}" r="${r-9}" fill="#3037c7"/><path d="M${cx-r+15} ${cy}h${2*r-30}M${cx} ${cy-r+15}v${2*r-30}" stroke="#fffdf5" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="6" fill="#e4eb9a"/></g>`;
}
function press(x,y,w=200) {
  return `<path d="M${x+17} ${y+125}V${y+30}Q${x+17} ${y} ${x+47} ${y}H${x+w-47}Q${x+w-17} ${y} ${x+w-17} ${y+30}v95" fill="none" stroke="#3037c7" stroke-width="24" stroke-linecap="square"/><rect x="${x+2}" y="${y+114}" width="${w-4}" height="21" rx="5" fill="#202a35"/><rect x="${x+37}" y="${y+34}" width="${w-74}" height="46" rx="23" fill="#202a35"/>${wheel(x+43,y+57)}${wheel(x+w-43,y+57)}<path d="M${x+8} ${y+147}h${w-16}" stroke="#202a35" stroke-width="4"/>`;
}
const headings = ['Before ink, evidence.','Three feeds. One trail.','The press must wait.','A draft meets judgment.','Keep the whole trail.'];
const arias = [
  'Two source fragments approach a reply press, awaiting supporting evidence.',
  'Requirement, vendor reply and evidence feed a press while the source trail is retained.',
  'Missing evidence physically stops the output. A clarification fold asks for evidence.',
  'An illustrative draft retains the original and change, with applicability awaiting human judgment.',
  'An open archive retains original, change and rationale beside a draft awaiting human judgment.'
];

export function render(phase=0,choice='base',uid='T3') {
  const p = Math.max(0,Math.min(4,Math.trunc(Number(phase)||0)));
  const linked = choice === 'linked';
  const safe = String(uid).replace(/[^a-zA-Z0-9_-]/g,'_') || 'T3';
  const aria = p===2 && linked ? 'Linked evidence opens the press feed and produces an illustrative draft for human review.' : arias[p];
  const heading = p===2 && linked ? 'Evidence opens the feed.' : headings[p];
  let art='';
  if(p===0) {
    art=`<path d="M72 353H648" stroke="#c6c8bc" stroke-width="2"/><g transform="rotate(-7 187 229)"><g class="t3-feed">${page(50,137,246,171,'Requirement','Operating envelope')}<path d="M72 229h173" class="t3-ink"/></g></g><g transform="rotate(7 314 273)"><g class="t3-drop">${page(216,217,248,149,'Vendor reply','Equipment schedule','#b9bef9')}</g></g><path d="M412 184h70m-12-10 12 10-12 10" class="t3-line t3-dotted"/><g transform="translate(0 0)">${press(464,156,192)}</g><rect x="506" y="315" width="109" height="38" fill="#f5f1e5" stroke="#b74735" stroke-width="2" stroke-dasharray="5 6"/>${txt(560,341,'Evidence','t3-small','text-anchor="middle"')}${txt(440,393,'A reply needs support.','t3-small','text-anchor="middle"')}`;
  } else if(p===1) {
    art=`<g class="t3-feed">${page(37,131,207,121,'Requirement','','#e4eb9a')}</g><g class="t3-drop">${page(257,131,207,121,'Vendor reply','','#b9bef9')}</g><g class="t3-reveal">${page(477,131,207,121,'Evidence','','#f1b59e')}</g><path d="M140 253v28h168M360 253v28M580 253v28H412" class="t3-line"/><path d="M139 263l-6-8m6 8 6-8M359 263l-6-8m6 8 6-8M579 263l-6-8m6 8 6-8" class="t3-line"/><path d="M309 273h102v66H309Z" fill="#e4eb9a" stroke="#202a35" stroke-width="2"/><rect x="210" y="293" width="300" height="62" rx="31" fill="#3037c7"/>${wheel(240,324,34)}${wheel(480,324,34)}<path d="M284 324h152" stroke="#b9bef9" stroke-width="3" stroke-dasharray="3 12"/>${txt(360,390,'Align before printing.','t3-label','text-anchor="middle"')}${txt(360,414,'Source stays visible.','t3-small','text-anchor="middle"')}`;
  } else if(p===2) {
    art=`<path d="M38 342h644" stroke="#d0d0c2" stroke-width="2"/><g class="t3-feed"><path d="M39 186H263V260H39l10-9-10-9 10-9-10-9 10-9-10-9Z" class="t3-paper"/>${txt(65,215,'Requirement')}${txt(65,242,'Vendor reply','t3-small')}</g><path d="M256 223h37" class="t3-line"/>${linked?`<g class="t3-drop"><path d="M313 117h105v77H313Z" fill="#e4eb9a" stroke="#202a35" stroke-width="2"/><path d="M328 138h75M328 151h61M328 164h75" stroke="#53602a" stroke-width="3"/></g>`:`<path d="M315 119h101v76H315Z" fill="none" stroke="#b74735" stroke-width="2" stroke-dasharray="5 6"/><path d="M350 141l31 31m0-31-31 31" stroke="#b74735" stroke-width="3"/>`}${press(265,181,201)}${linked?`<g class="t3-output"><path d="M301 306h132v84H301Z" fill="#e4eb9a" stroke="#202a35" stroke-width="2"/>${txt(367,338,'DRAFT','t3-label','text-anchor="middle"')}${rule(315,355,104)}${rule(315,369,75)}</g><g class="t3-reveal"><path d="M470 245h29l-10-8m10 8-10 8" class="t3-line"/>${txt(509,219,'Evidence linked','t3-small')}${txt(509,252,'Prepare draft')}${txt(509,279,'Human review','t3-small')}<path d="M509 294h155" stroke="#3037c7" stroke-width="3"/></g>${txt(367,414,'Linked is not approved.','t3-small','text-anchor="middle"')}`:`<g class="t3-block"><rect x="280" y="307" width="171" height="46" rx="3" fill="#b74735"/><path d="M289 311v38m151-38v38" stroke="#f2c6b6" stroke-width="2"/>${txt(366,337,'OUTPUT HELD','t3-label t3-white','text-anchor="middle"')}</g><g class="t3-output"><path d="M487 204h166v116l-83-16-83 16Z" fill="#f2c6b6" stroke="#b74735" stroke-width="2"/><path d="M487 204l83 37 83-37" fill="none" stroke="#b74735" stroke-width="2"/>${txt(570,277,'Ask for evidence','t3-label','text-anchor="middle"')}</g>${txt(570,180,'Evidence missing','t3-small','text-anchor="middle"')}${txt(366,392,'No evidence, no conclusion.','t3-small','text-anchor="middle"')}`}`;
  } else if(p===3) {
    art=`<path d="M63 163h213v179H63Z" fill="#e6e4d9" stroke="#202a35" stroke-width="2"/>${txt(86,197,'Original')}${rule(86,221,165)}${rule(86,238,140)}${rule(86,255,165)}${rule(86,272,120)}${txt(86,321,'Preserve the original.','t3-small')}<path d="M206 286C300 286 285 162 344 162" class="t3-line t3-dotted"/><g transform="rotate(3 445 256)"><g class="t3-output"><path d="M300 122h279l30 30v234H300Z" class="t3-paper"/><path d="M579 122v30h30" class="t3-line"/><rect x="320" y="142" width="114" height="32" fill="#3037c7"/>${txt(377,165,'DRAFT','t3-label t3-white','text-anchor="middle"')}${txt(325,204,'Human review')}${rule(325,226,241)}<path d="M325 247h206" stroke="#dce79a" stroke-width="20"/>${txt(330,253,'Change','t3-small')}${rule(325,278,199)}${txt(325,314,'Check applicability','t3-label t3-coral')}<path d="M324 323q112 14 225-1" stroke="#b74735" stroke-width="3" fill="none" class="t3-hand"/>${txt(325,359,'Rationale','t3-small')}</g></g><path d="M624 292l33-72 13 6-33 72-13 9Z" fill="#b74735" stroke="#202a35" stroke-width="2"/><path d="m624 292 13 6-13 9Z" fill="#fffdf5"/>${txt(360,418,'Judgment stays human.','t3-small','text-anchor="middle"')}`;
  } else {
    art=`<path d="M54 167l278-22 24 20 30-18 278 20v218l-278-18-30 17-24-17-278 18Z" fill="#3037c7" stroke="#202a35" stroke-width="2"/><path d="M356 170v196" stroke="#9196ef" stroke-width="2"/><g transform="rotate(-4 204 252)"><g class="t3-feed"><rect x="79" y="148" width="250" height="197" fill="#e1dece" stroke="#202a35" stroke-width="2"/><rect x="88" y="137" width="250" height="197" class="t3-paper"/>${txt(110,174,'Original')}${rule(111,193,199)}<rect x="110" y="215" width="204" height="38" fill="#e4eb9a"/>${txt(122,241,'Change')}${txt(111,284,'Rationale','t3-small')}${rule(111,304,169)}</g></g><g transform="rotate(4 511 260)"><g class="t3-output"><path d="M389 138h221l25 25v183H389Z" class="t3-paper"/><path d="M610 138v25h25" class="t3-line"/>${txt(410,182,'DRAFT ONLY','t3-label t3-blue')}${rule(410,203,198)}${rule(410,220,162)}<text x="511" y="284" font-size="47" font-weight="800" fill="#3037c7" opacity=".16" text-anchor="middle">DRAFT</text>${txt(410,323,'Human review','t3-small')}</g></g><path d="M292 364q64-34 128 0" stroke="#e4eb9a" stroke-width="8" fill="none" class="t3-hand"/>${txt(360,411,'Original + change + rationale','t3-label','text-anchor="middle"')}`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-T3" viewBox="0 0 720 460" role="img" aria-label="${escape(aria)}"><defs><pattern id="${safe}-T3-grain" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".6" fill="#202a35" opacity=".1"/></pattern></defs><rect width="720" height="460" fill="#f5f1e5"/><rect width="720" height="460" fill="url(#${safe}-T3-grain)"/><path d="M18 30V18h12m660 0h12v12M18 430v12h12m660 0h12v-12" fill="none" stroke="#9b9f92" stroke-width="1"/>${txt(34,40,'REVIEW & REPLY','t3-eyebrow')}${txt(34,91,heading,'t3-head')}${txt(678,43,`0${p+1}`,'t3-small','text-anchor="end"')}${art}<path d="M34 432h150" stroke="#c6c8bc"/><circle cx="197" cy="432" r="3" fill="#3037c7"/>${txt(212,438,'Illustrative workflow','t3-small')}</svg>`;
}
