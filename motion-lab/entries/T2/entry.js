export const id = 'T2';
export const title = 'Alignment, before judgment';
export const summary = 'A moving review band aligns requirements, replies and evidence before a human decision.';

export const translations = [
  ['Alignment, before judgment', '판단에 앞서 정렬'],
  ['A moving review band aligns requirements, replies and evidence before a human decision.', '검토 띠가 요구사항과 회신, 근거를 정렬하고 최종 판단은 사람이 내립니다.'],
  ['Three sources. One question.', '세 가지 자료, 하나의 질문.'],
  ['Give each clause a lane.', '조항마다 검토 행을 만듭니다.'],
  ['Follow the evidence.', '근거를 따라 확인합니다.'],
  ['Keep the original in view.', '원문을 함께 확인합니다.'],
  ['A draft still needs judgment.', '초안에도 사람의 판단이 필요합니다.'],
  ['A gap becomes a question.', '빈 근거는 질문으로 남깁니다.'],
  ['REQUIREMENT', '요구사항'], ['VENDOR REPLY', '업체 회신'], ['EVIDENCE', '근거'],
  ['Envelope', '운전 범위'], ['Interface', '연결 조건'], ['Scope', '범위'],
  ['Operating envelope', '운전 범위'], ['Equipment schedule', '장비 목록'],
  ['Reference fragment', '참조 자료 일부'], ['No reference', '참조 없음'],
  ['Requirement', '요구사항'], ['Reply', '회신'], ['Evidence', '근거'],
  ['Align the sources', '자료를 나란히 정렬'], ['Read across', '행을 따라 비교'],
  ['Evidence linked', '관련 근거 연결'], ['Evidence missing', '근거 미연결'],
  ['Ask for evidence', '근거 요청'], ['Prepare draft', '초안 준비'],
  ['Relevance still needs review', '관련성 검토는 여전히 필요'],
  ['Do not infer a conclusion', '결론을 추정하지 않음'],
  ['Original', '원문'], ['Change', '변경'], ['Rationale', '판단 이유'],
  ['Sources retained', '출처 보존'], ['Review applicability', '적용 가능성 검토'],
  ['Draft', '초안'], ['Clarification', '질의'], ['For human review', '사람의 검토 대기'],
  ['Evidence requested', '근거 요청 상태'], ['Human judgment', '사람의 판단'],
  ['Remains open', '미결 상태 유지'], ['Illustrative only', '설명용 예시'],
  ['TBE alignment matrix: requirements, vendor replies and evidence are separate illustrative sources.', '기술검토 정렬표: 요구사항, 업체 회신, 근거는 서로 구분된 설명용 자료입니다.'],
  ['TBE alignment matrix: three requirement lanes align with reply and evidence columns.', '기술검토 정렬표: 세 요구사항 행을 회신 및 근거 열과 정렬합니다.'],
  ['TBE alignment matrix: missing evidence produces a clarification request, not a conclusion.', '기술검토 정렬표: 근거가 없으면 결론 대신 질의를 작성합니다.'],
  ['TBE alignment matrix: linked evidence supports a draft that still requires human review.', '기술검토 정렬표: 연결된 근거는 초안 작성을 돕지만 사람의 검토가 필요합니다.'],
  ['TBE alignment matrix: original sources, changes and rationale are retained for human review.', '기술검토 정렬표: 사람의 검토를 위해 원문과 변경 사항, 판단 이유를 보존합니다.'],
  ['TBE alignment matrix: a draft awaits human judgment; no approval is asserted.', '기술검토 정렬표: 초안은 사람의 판단을 기다리며 승인을 의미하지 않습니다.'],
  ['TBE alignment matrix: a clarification request keeps the missing evidence visible.', '기술검토 정렬표: 질의서에 근거가 누락된 상태를 명확히 남깁니다.'],
];

export const css = `
.entry-T2{font-family:Inter,"Noto Sans KR",Arial,sans-serif;color:#273a3b;isolation:isolate}
.entry-T2 text{fill:#273a3b;font-size:18px;font-weight:500;letter-spacing:-.25px}
.entry-T2 .t2-heading{font-size:29px;font-weight:650;letter-spacing:-1px}
.entry-T2 .t2-small{font-size:16px;letter-spacing:0}
.entry-T2 .t2-label{font-size:16px;font-weight:650;letter-spacing:.8px}
.entry-T2 .t2-mono{font-family:ui-monospace,SFMono-Regular,monospace;font-size:16px;letter-spacing:0}
.entry-T2 .t2-muted{fill:#69746e}
.entry-T2 .t2-white{fill:#fffdf4}
.entry-T2 .t2-orange{fill:#a74b2c}
.entry-T2 .t2-teal{fill:#246760}
.entry-T2 .t2-heavy{font-size:34px;font-weight:650;letter-spacing:-1px}
.entry-T2 .t2-rule{stroke:#c9cabd;stroke-width:1.5;fill:none}
.entry-T2 .t2-ink{stroke:#284b48;stroke-width:2;fill:none}
.entry-T2 .t2-fine{stroke:#9caaa0;stroke-width:1.5;fill:none}
.entry-T2 .t2-dash{stroke-dasharray:5 5}
.entry-T2 .t2-paper{fill:#fffdf4;stroke:#bfc4b5;stroke-width:1.5}
.entry-T2 .t2-band{mix-blend-mode:multiply}
.entry-T2 .t2-trace{stroke-dasharray:900;stroke-dashoffset:0}
.animating .entry-T2 .t2-arrive{animation:T2-arrive .9s both;animation-play-state:var(--motion-play,running)}
.animating .entry-T2 .t2-late{animation:T2-arrive 1s .28s both;animation-play-state:var(--motion-play,running)}
.animating .entry-T2 .t2-latest{animation:T2-arrive 1s .56s both;animation-play-state:var(--motion-play,running)}
.animating .entry-T2 .t2-scan{animation:T2-scan 4.6s cubic-bezier(.3,0,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T2 .t2-trace{animation:T2-trace 2.1s .35s both;animation-play-state:var(--motion-play,running)}
.animating .entry-T2 .t2-resolve{animation:T2-resolve 1s 1.7s both;animation-play-state:var(--motion-play,running)}
@keyframes T2-arrive{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes T2-scan{0%{transform:translateY(140px);opacity:.25}45%{transform:translateY(70px);opacity:1}78%{transform:translateY(0);opacity:1}100%{transform:translateY(0);opacity:1}}
@keyframes T2-trace{from{stroke-dashoffset:900}to{stroke-dashoffset:0}}
@keyframes T2-resolve{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
@media(prefers-reduced-motion:reduce){.animating .entry-T2 .t2-arrive,.animating .entry-T2 .t2-late,.animating .entry-T2 .t2-latest,.animating .entry-T2 .t2-scan,.animating .entry-T2 .t2-trace,.animating .entry-T2 .t2-resolve{animation:none;transform:none;opacity:1}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x, y, content, cls = '', more = '') => `<text x="${x}" y="${y}" class="${cls}" ${more}>${esc(content)}</text>`;
const rules = (x, y, width, count = 3, gap = 14) => Array.from({length:count}, (_, i) => `<path d="M${x} ${y + i * gap}h${width - (i === count - 1 ? 24 : 0)}" class="t2-rule"/>`).join('');
const arrow = (x, y, color = '#a74b2c') => `<path d="M${x - 8} ${y - 6}l8 6-8 6M${x - 29} ${y}h28" stroke="${color}" stroke-width="2" fill="none"/>`;

function header(phase, heading) {
  return `${text(36, 39, 'TBE / ' + String(phase + 1).padStart(2, '0'), 't2-mono t2-muted')}${text(36, 80, heading, 't2-heading')}<path d="M36 100H684" class="t2-rule"/>`;
}

function foot() {
  return `<path d="M36 419H684" class="t2-rule"/><circle cx="43" cy="441" r="4" fill="#a74b2c"/>${text(56, 446, 'Illustrative only', 't2-small t2-muted')}${text(684, 446, 'T2', 't2-mono t2-muted', 'text-anchor="end"')}`;
}

function band(u, x = 48, y = 164, width = 624, height = 64, scanning = true) {
  return `<g class="${scanning ? 't2-scan' : ''}"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="url(#${u}-beam)" class="t2-band"/><path d="M${x} ${y}v${height}M${x + width} ${y}v${height}" stroke="#a74b2c" stroke-width="3"/><path d="M${x} ${y}h14M${x + width - 14} ${y}h14M${x} ${y + height}h14M${x + width - 14} ${y + height}h14" stroke="#a74b2c" stroke-width="1.5"/></g>`;
}

function context(u) {
  const sheets = [
    {x:48, y:131, w:194, name:'REQUIREMENT', tone:'#dfe7dd', label:'Operating envelope', ref:'R1'},
    {x:263, y:149, w:194, name:'VENDOR REPLY', tone:'#e7e6d9', label:'Equipment schedule', ref:'V1'},
    {x:478, y:131, w:194, name:'EVIDENCE', tone:'#f0dfc9', label:'No reference', ref:'—'},
  ];
  return header(0, 'Three sources. One question.') + sheets.map((s, i) => `<g class="${['t2-arrive','t2-late','t2-latest'][i]}"><path d="M${s.x} ${s.y}h${s.w - 22}l22 22v195h-${s.w}Z" class="t2-paper"/><path d="M${s.x + s.w - 22} ${s.y}v22h22" class="t2-fine"/><path d="M${s.x + 15} ${s.y + 19}h87" stroke="${s.tone}" stroke-width="9"/>${text(s.x + 15, s.y + 54, s.name, 't2-label')}${text(s.x + 15, s.y + 98, s.ref, 't2-mono t2-orange')}${i < 2 ? `${text(s.x + 15, s.y + 129, s.label, 't2-small')}${rules(s.x + 15, s.y + 151, 154, 3)}` : `<rect x="${s.x + 15}" y="${s.y + 112}" width="164" height="74" rx="2" fill="#f8f3e7" stroke="#b98663" stroke-width="1.5" stroke-dasharray="5 5"/>${text(s.x + 97, s.y + 154, s.label, 't2-small t2-orange', 'text-anchor="middle"')}`}</g>`).join('') + `<path d="M145 368v12h430v-12M360 380v15" class="t2-ink t2-trace"/>${text(360, 407, 'Align the sources', 't2-small', 'text-anchor="middle"')}`;
}

function matrix(u, linked, active = false) {
  const rowY = [158, 228, 298];
  const labels = ['Envelope','Interface','Scope'];
  return `<path d="M48 120h624v253H48Z" class="t2-paper"/>
    <path d="M48 120h624v38H48Z" fill="#e3e7db"/>
    <path d="M104 120V373M290 120V373M480 120V373M48 158H672M48 228H672M48 298H672" class="t2-rule"/>
    ${text(121,145,'REQUIREMENT','t2-label')}${text(308,145,'VENDOR REPLY','t2-label')}${text(502,145,'EVIDENCE','t2-label')}
    ${rowY.map((y,i)=>`<g>${text(63,y+41,`R${i+1}`,'t2-mono t2-muted')}${text(121,y+41,labels[i])}${rules(310,y+23,144,3,12)}${i===0&&active ? (linked ? `<path d="M514 ${y+15}h32l10 10v30h-42Z" fill="#dde9df" stroke="#426f62" stroke-width="1.5"/><path d="M546 ${y+15}v10h10" class="t2-fine"/>${text(575,y+41,'E1','t2-mono t2-teal')}` : `<rect x="507" y="${y+16}" width="137" height="39" fill="none" stroke="#a74b2c" stroke-width="1.5" stroke-dasharray="5 5"/>${text(575,y+43,'—','t2-orange','text-anchor="middle"')}`) : `<path d="M512 ${y+24}h29v26h-29Z" fill="none" stroke="#9caaa0" stroke-width="1.5"/><path d="M559 ${y+28}h77M559 ${y+43}h55" class="t2-rule"/>`}</g>`).join('')}
    ${band(u,48,160,624,66,true)}`;
}

function structure(u) {
  return header(1, 'Give each clause a lane.') + `<g class="t2-arrive">${matrix(u,false)}</g><path d="M120 395h480" class="t2-ink t2-trace"/>${arrow(620,395,'#284b48')}<rect x="292" y="382" width="138" height="26" fill="#f3f0e5"/>${text(360,402,'Read across','t2-small','text-anchor="middle"')}`;
}

function explore(u, linked) {
  return header(2, 'Follow the evidence.') + `<g class="t2-arrive">${matrix(u,linked,true)}</g><g class="t2-resolve"><rect x="48" y="379" width="624" height="32" fill="${linked ? '#dce9df' : '#f2dfcb'}"/>${text(62,401,linked?'Evidence linked':'Evidence missing','t2-small '+(linked?'t2-teal':'t2-orange'))}${arrow(322,395,linked?'#246760':'#a74b2c')}${text(340,401,linked?'Prepare draft':'Ask for evidence','t2-small')}</g>`;
}

function review(u, linked) {
  return header(3, 'Keep the original in view.') + `
    <g class="t2-arrive"><path d="M48 126h255v253H48Z" class="t2-paper"/><path d="M48 126h10v253H48Z" fill="#d6dfd1"/>
    ${text(76,158,'Original','t2-label')}${text(76,197,'Requirement')}${rules(76,213,192,2)}${text(76,262,'Reply')}${rules(76,279,192,2)}${text(76,328,'Evidence')}${linked ? `<path d="M76 347h171" stroke="#76988a" stroke-width="3"/>` : `<path d="M76 347h171" stroke="#b77c54" stroke-width="2" stroke-dasharray="5 5"/>`}
    </g>
    <path d="M303 210h34v80h35M303 345h34v-55" class="t2-ink t2-trace"/>${arrow(374,290,'#284b48')}
    <g class="t2-late"><path d="M385 126h267l20 20v233H385Z" class="t2-paper"/><path d="M652 126v20h20" class="t2-fine"/>
    <path d="M405 147h72" stroke="#e4ad87" stroke-width="5"/>${text(405,180,linked?'Draft':'Clarification','t2-heavy')}
    <path d="M405 199H649" class="t2-rule"/>${text(405,229,'Change','t2-label')}${text(405,255,linked?'Prepare draft':'Ask for evidence')}
    ${text(405,295,'Rationale','t2-label')}${text(405,322,linked?'Review applicability':'Evidence missing','t2-small')}
    <rect x="405" y="344" width="242" height="22" fill="url(#${u}-beam)"/>
    </g>
    <path d="M50 396h16m-8-8v16" stroke="#426f62" stroke-width="1.5"/>${text(79,402,'Sources retained','t2-small')}${text(671,402,'For human review','t2-small t2-orange','text-anchor="end"')}`;
}

function outcome(u, linked) {
  return header(4,linked?'A draft still needs judgment.':'A gap becomes a question.') + `
    <g class="t2-arrive"><g transform="translate(46 140)"><path d="M0 11h176v229H0Z" fill="#dde4d8" stroke="#aebcae" stroke-width="1.5"/><path d="M8 5h176v229H8Z" fill="#edf0e5" stroke="#aebcae" stroke-width="1.5"/><path d="M16 0h176v229H16Z" class="t2-paper"/>
    ${text(35,35,'Original','t2-label')}${text(35,77,'R1','t2-mono')}${rules(35,91,135,2)}${text(35,139,'V1','t2-mono')}${rules(35,153,135,2)}${text(35,201,linked?'E1':'—','t2-mono t2-orange')}
    <path d="M16 214h176" stroke="#d9b596" stroke-width="2"/></g></g>
    <path d="M239 255h54" class="t2-ink t2-trace"/>${arrow(300,255,'#284b48')}
    <g class="t2-late"><path d="M312 127h334l26 26v209H312Z" class="t2-paper"/><path d="M646 127v26h26" class="t2-fine"/>
    <rect x="334" y="149" width="6" height="48" fill="${linked?'#426f62':'#b16b43'}"/>
    ${text(356,183,linked?'Draft':'Clarification','t2-heavy')}${text(336,224,linked?'For human review':'Evidence requested')}
    <path d="M336 245H648" class="t2-rule"/>
    ${text(336,278,linked?'Relevance still needs review':'Do not infer a conclusion','t2-small')}
    <path d="M337 306H590" class="t2-rule"/><path d="M337 322H553" class="t2-rule"/>
    <path d="M333 344H650" stroke="#d9b596" stroke-width="2"/>
    </g>
    <g class="t2-resolve"><path d="M493 363v29h100" class="t2-ink"/><circle cx="605" cy="392" r="10" fill="#f3f0e5" stroke="#a74b2c" stroke-width="2"/>
    ${text(361,399,linked?'Human judgment':'Remains open','t2-small t2-orange','text-anchor="end"')}</g>`;
}

export function render(phase = 0, choice = 'base', uid = 'T2') {
  const p = Number.isFinite(phase) ? Math.max(0, Math.min(4, Math.trunc(phase))) : 0;
  const linked = choice === 'linked';
  const u = esc(uid);
  const labels = [
    'TBE alignment matrix: requirements, vendor replies and evidence are separate illustrative sources.',
    'TBE alignment matrix: three requirement lanes align with reply and evidence columns.',
    linked ? 'TBE alignment matrix: linked evidence supports a draft that still requires human review.' : 'TBE alignment matrix: missing evidence produces a clarification request, not a conclusion.',
    'TBE alignment matrix: original sources, changes and rationale are retained for human review.',
    linked ? 'TBE alignment matrix: a draft awaits human judgment; no approval is asserted.' : 'TBE alignment matrix: a clarification request keeps the missing evidence visible.',
  ];
  const scenes = [context, structure, explore, review, outcome];
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-T2" viewBox="0 0 720 460" role="img" aria-label="${labels[p]}"><defs><linearGradient id="${u}-beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8b477" stop-opacity=".36"/><stop offset=".49" stop-color="#f2d6a5" stop-opacity=".12"/><stop offset="1" stop-color="#e8b477" stop-opacity=".44"/></linearGradient></defs><rect width="720" height="460" rx="4" fill="#f3f0e5"/>${scenes[p](u,linked)}${foot()}</svg>`;
}
