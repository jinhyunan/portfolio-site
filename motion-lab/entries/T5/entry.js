export const id = 'T5';
export const title = 'The review relay';
export const summary = 'A clause advances only as far as its evidence allows.';

export const translations = [
  ['The review relay', '검토의 릴레이'],
  ['A clause advances only as far as its evidence allows.', '조항은 근거가 허용하는 지점까지만 나아갑니다.'],
  ['Illustrative only', '설명용 예시'],
  ['Every clause carries a question.', '조항마다 확인할 질문이 있습니다.'],
  ['Requirement', '요구사항'], ['Vendor reply', '공급업체 답변'],
  ['Confirm the applicable', '적용 가능한'], ['operating envelope.', '운전 범위를 확인하세요.'],
  ['Refer to the proposed', '제안된'], ['equipment schedule.', '장비 목록을 참조하세요.'],
  ['Two gates. No shortcuts.', '두 관문. 생략은 없습니다.'],
  ['Clause', '조항'], ['Evidence', '근거'], ['Human review', '사람의 검토'],
  ['Link the source', '출처 연결'], ['Check applicability', '적용성 확인'],
  ['Movement needs evidence.', '근거가 있어야 나아갑니다.'],
  ['Evidence missing', '근거 미연결'], ['Evidence linked', '관련 근거 연결'],
  ['Awaiting evidence', '근거 대기 중'], ['Ask for evidence', '근거 요청'],
  ['Draft only', '검토용 초안'], ['Review still pending', '검토 대기 중'],
  ['No support. No passage.', '근거 없이는 통과할 수 없습니다.'],
  ['Source linked. Judgment remains human.', '근거는 연결됐고 판단은 사람이 합니다.'],
  ['A person checks the fit.', '사람이 적용성을 확인합니다.'],
  ['Original', '원문'], ['Proposed change', '수정 제안'], ['Rationale', '수정 사유'],
  ['Retained', '보존'], ['Question unresolved', '미해결 질문'],
  ['Applicability', '적용성'], ['Human decision', '사람의 판단'],
  ['Illustrative reference fragment', '설명용 참고자료 조각'],
  ['Evidence not supplied', '근거 미제공'],
  ['Keep the question open.', '확인할 질문을 남겨 둡니다.'],
  ['A draft, ready for review.', '사람의 검토를 기다리는 초안.'],
  ['Clarification', '추가 확인 요청'], ['Review draft', '검토 초안'],
  ['Original preserved', '원문 보존'], ['Changes + rationale', '변경사항 및 사유'],
  ['No conclusion issued', '결론 미발행'], ['Human approval pending', '사람의 승인 대기'],
  ['Evidence requested', '근거 요청됨'], ['Ready for human review', '사람의 검토 준비'],
  ['Illustrative review relay showing an original requirement and a vendor reply.', '요구사항 원문과 공급업체 답변을 보여주는 설명용 검토 릴레이.'],
  ['Illustrative relay with separate evidence and human review gates.', '근거 관문과 사람의 검토 관문을 구분한 설명용 릴레이.'],
  ['Illustrative clause stopped at a closed evidence gate because evidence is missing.', '근거가 없어 닫힌 근거 관문에서 조항의 이동이 멈춘 설명용 예시.'],
  ['Illustrative clause passing linked evidence and stopping at human review, without approval.', '연결된 근거를 거쳐 사람의 검토 앞에 멈춘 조항의 설명용 예시. 승인을 뜻하지 않습니다.'],
  ['Illustrative human review preserving the original and an unresolved evidence question.', '원문과 미해결 근거 질문을 보존하는 사람의 검토 설명용 예시.'],
  ['Illustrative human review of source applicability, original text, proposed changes and rationale.', '근거 적용성, 원문, 수정 제안과 사유를 사람이 검토하는 설명용 예시.'],
  ['Illustrative clarification output retaining the original; no unsupported conclusion is issued.', '원문을 보존하는 추가 확인 요청의 설명용 결과. 근거 없는 결론은 발행하지 않습니다.'],
  ['Illustrative draft prepared for human review with original text, changes and rationale preserved; approval is pending.', '원문, 변경사항과 사유를 보존하여 사람의 검토를 준비한 초안의 설명용 예시. 승인은 대기 상태입니다.'],
];

export const css = `
.entry-T5{background:#f3eee4;color:#243d3a;font-family:Arial,'Noto Sans KR',sans-serif;isolation:isolate}
.entry-T5 text{fill:#243d3a}
.entry-T5 .T5-title{font-size:30px;font-weight:700;letter-spacing:-.8px}
.entry-T5 .T5-label{font-size:19px;font-weight:700}
.entry-T5 .T5-copy{font-size:20px}
.entry-T5 .T5-small{font-size:16px;font-weight:500}
.entry-T5 .T5-mono{font-family:ui-monospace,SFMono-Regular,monospace;font-size:18px}
.entry-T5 .T5-light{fill:#fffaf0}
.entry-T5 .T5-muted{fill:#65716a}
.entry-T5 .T5-orange{fill:#b45a31}
.entry-T5 .T5-danger{fill:#a34e3e}
.entry-T5 .T5-paper{fill:#fffaf1;stroke:#c9c2b4;stroke-width:1.5}
.entry-T5 .T5-rule{fill:none;stroke:#c9c2b4;stroke-width:1.5}
.entry-T5 .T5-ink{fill:none;stroke:#243d3a;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.entry-T5 .T5-track{fill:none;stroke:#baa98c;stroke-width:2;stroke-dasharray:5 7}
.entry-T5 .T5-hot-track{fill:none;stroke:#b45a31;stroke-width:4;stroke-linecap:round}
.entry-T5 .T5-pivot{transform-box:fill-box;transform-origin:center}
.entry-T5 .T5-gate-leaf{transform-box:fill-box;transform-origin:50% 100%}
.animating .entry-T5 .T5-arrive{animation:T5-arrive 1.1s cubic-bezier(.22,1,.36,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-unfold{animation:T5-unfold 1.6s cubic-bezier(.22,1,.36,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-trace{animation:T5-trace 2.2s ease both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-stop{animation:T5-stop 2.6s cubic-bezier(.2,.65,.3,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-pass{animation:T5-pass 4.8s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-open{animation:T5-open 4.8s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-inspect{animation:T5-inspect 2.8s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-T5 .T5-file{animation:T5-file 1.8s cubic-bezier(.22,1,.36,1) both;animation-play-state:var(--motion-play,running)}
@keyframes T5-arrive{from{opacity:0;transform:translateX(-44px)}to{opacity:1;transform:translateX(0)}}
@keyframes T5-unfold{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes T5-trace{from{stroke-dasharray:0 1000}to{stroke-dasharray:1000 0}}
@keyframes T5-stop{0%{transform:translateX(-184px)}65%,100%{transform:translateX(0)}}
@keyframes T5-pass{0%{transform:translateX(-416px)}36%,53%{transform:translateX(-220px)}84%,100%{transform:translateX(0)}}
@keyframes T5-open{0%,36%{transform:rotate(0deg)}49%,100%{transform:rotate(-80deg)}}
@keyframes T5-inspect{0%{transform:translate(-65px,-20px)}48%{transform:translate(0,-20px)}100%{transform:translate(0,0)}}
@keyframes T5-file{from{opacity:0;transform:translateY(42px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.animating .entry-T5 *{animation:none!important;transition:none!important}}
`;

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const txt = (s,x,y,cls='T5-label',extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${escape(s)}</text>`;
const line = (x1,y1,x2,y2,cls='T5-rule') => `<path class="${cls}" d="M${x1} ${y1}H${x2}"${y2 !== y1 ? ` transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI} ${x1} ${y1})"` : ''}/>`;
const lines = (x,y,w,n=3) => Array.from({length:n},(_,i)=>`<path d="M${x} ${y+i*12}h${w-(i===n-1 ? 26:0)}" stroke="#c9c2b4" stroke-width="2"/>`).join('');
const footer = () => `<path d="M36 421H684" class="T5-rule"/>${txt('Illustrative only',36,446,'T5-small T5-muted')}<g fill="#b45a31"><circle cx="643" cy="440" r="3"/><circle cx="658" cy="440" r="3"/><circle cx="673" cy="440" r="3"/></g>`;
const baton = (x,y,cls='',label='Clause') => `<g transform="translate(${x} ${y})"><g class="${cls}"><path d="M-50 -27H43L55 -15V27H-50Z" fill="#243d3a"/><path d="M43 -27V-15H55" fill="#bbaa8e"/>${txt(label,-36,7,'T5-label T5-light')}<path d="M-35 16h56" stroke="#75938a" stroke-width="2"/></g></g>`;
const checkpoint = (x,y,{open=false,human=false}={}) => `<g transform="translate(${x} ${y})"><path d="M-13 37v-97h26v97" fill="#c9b79b"/><path d="M-18 37h36" class="T5-ink"/><circle cy="-46" r="5" fill="#243d3a"/>${human ? `<path d="M0 -42v73" stroke="#243d3a" stroke-width="9"/><circle cy="-71" r="15" fill="#243d3a"/><path d="M-19 -46q19 -15 38 0" fill="none" stroke="#243d3a" stroke-width="7"/>` : `<g${open ? ' class="T5-open T5-gate-leaf"' : ''}${open ? ' style="transform:rotate(-80deg)"' : ''}><path d="M0 31v-91" stroke="#b45a31" stroke-width="10"/><path d="M-5 -51l10 7m-10 16l10 7m-10 16l10 7m-10 16l10 7" stroke="#f3eee4" stroke-width="4"/></g>`}</g>`;

function context() {
  return `${txt('Every clause carries a question.',36,58,'T5-title')}
  <path d="M34 320C78 320 88 302 105 277S140 225 184 225H602" class="T5-track"/>
  <path d="M36 326C92 326 85 232 184 232H614" class="T5-hot-track T5-trace"/>
  <g transform="translate(82 94) rotate(-5 255 130)"><g class="T5-arrive">
    <path d="M8 17H499V247H8Z" fill="#dfd4c0"/><path d="M0 0H508V229H0Z" class="T5-paper"/>
    <path d="M0 0H14V229H0Z" fill="#b45a31"/>
    ${txt('Requirement',38,43,'T5-small T5-orange')}
    ${txt('Confirm the applicable',38,77,'T5-copy')}${txt('operating envelope.',38,104,'T5-copy')}
    <path d="M37 124H470" class="T5-rule"/>
    ${txt('Vendor reply',38,153,'T5-small T5-muted')}
    ${txt('Refer to the proposed',38,181,'T5-copy')}${txt('equipment schedule.',38,208,'T5-copy')}
    <path d="M488 0v17m0 12v17m0 12v17m0 12v17m0 12v17m0 12v17m0 12v17m0 12v17" stroke="#d0c6b3" stroke-width="3"/>
  </g></g>
  <g transform="translate(568 269) rotate(16)"><path d="M0 0H83V88H0Z" fill="#243d3a"/><path d="M12 17h59m-59 13h43m-43 13h59" stroke="#c9b79b" stroke-width="3"/>${txt('?',30,77,'T5-title T5-light')}</g>
  <path d="M118 367H525" class="T5-rule"/>${txt('Clause',118,394,'T5-small T5-muted')}${txt('Evidence',414,394,'T5-small T5-muted')}`;
}

function structure() {
  return `${txt('Two gates. No shortcuts.',36,58,'T5-title')}
  <path d="M50 239H647L671 266L647 293H50Z" fill="#e5dccb"/>
  <path d="M50 267H659" class="T5-track"/><path d="M50 267H243" class="T5-hot-track T5-trace"/>
  ${baton(118,266,'T5-arrive')}
  <g class="T5-unfold">${checkpoint(322,266)}${checkpoint(563,266,{human:true})}</g>
  <path d="M322 174V139H253m310 34V110H470" class="T5-ink"/>
  ${txt('Evidence',216,126)}${txt('Human review',449,97)}
  ${txt('Clause',69,340)}${txt('Link the source',254,340)}${txt('Check applicability',448,340)}
  <path d="M78 360h104m96 0h127m62 0h160" class="T5-rule"/>
  <g fill="#baa98c"><circle cx="80" cy="382" r="3"/><circle cx="95" cy="382" r="3"/><circle cx="110" cy="382" r="3"/></g>
  <path d="M312 370h16v18h-16zM552 370h20v18h-20z" fill="none" stroke="#baa98c" stroke-width="1.5"/>`;
}

function explore(linked) {
  return `${txt('Movement needs evidence.',36,58,'T5-title')}
  <path d="M43 226H675V288H43Z" fill="#e5dccb"/><path d="M43 257H675" class="T5-track"/>
  <path d="M43 257H${linked ? 509:260}" class="T5-hot-track"/>
  <path d="M${linked ? 510:261} 257H${linked ? 592:326}" stroke="#b45a31" stroke-width="4" stroke-dasharray="5 7"/>
  ${checkpoint(327,257,{open:linked})}${checkpoint(595,257,{human:true})}
  ${baton(linked?510:260,257,linked?'T5-pass':'T5-stop')}
  ${txt('Evidence',279,128)}${txt('Human review',535,128,'T5-label','text-anchor="middle"')}
  <path d="M327 142v26m268 -26v20" class="T5-rule"/>
  ${linked ? `<g class="T5-unfold"><path d="M172 322H390V382H172Z" fill="#fffaf1" stroke="#baa98c" stroke-width="1.5"/><path d="M184 336l9 -5v25l-9 5zm20 -5v25" fill="none" stroke="#b45a31" stroke-width="2"/>${txt('Evidence linked',219,347,'T5-small')}${txt('Draft only',219,371,'T5-small T5-muted')}<path d="M327 295v20" class="T5-ink"/></g>${txt('Review still pending',465,345,'T5-small T5-orange')}${txt('Source linked. Judgment remains human.',36,404,'T5-small')}` : `<path d="M338 227h40m-40 60h40" stroke="#a34e3e" stroke-width="2"/><g class="T5-unfold"><path d="M174 322H386V382H174Z" fill="#f3dfce"/>${txt('Evidence missing',194,347,'T5-small T5-danger')}${txt('Ask for evidence',194,371,'T5-small')}${txt('Awaiting evidence',448,345,'T5-small T5-muted')}</g>${txt('No support. No passage.',36,404,'T5-small')}`}`;
}

function review(linked) {
  return `${txt('A person checks the fit.',36,58,'T5-title')}
  <path d="M60 103H453V389H60Z" fill="#dfd4c0"/>
  <path d="M48 90H441V377H48Z" class="T5-paper"/><path d="M48 90H62V377H48Z" fill="#243d3a"/>
  <path d="M79 172H412M79 252H412" class="T5-rule"/>
  ${txt('Original',82,120,'T5-small T5-muted')}${txt('Retained',299,120,'T5-small T5-orange')}${lines(83,141,243,2)}
  ${txt('Proposed change',82,201,'T5-small T5-muted')}${linked ? lines(83,223,229,2) : txt('Question unresolved',83,237,'T5-small T5-danger')}
  ${txt('Rationale',82,281,'T5-small T5-muted')}${txt(linked?'Illustrative reference fragment':'Evidence not supplied',83,312,'T5-small')}
  <path d="M83 334H378m-295 12h174" stroke="#c9c2b4" stroke-width="2"/>
  <g transform="translate(405 238)"><g class="T5-inspect"><circle r="67" fill="#f3eee4" fill-opacity=".75" stroke="#b45a31" stroke-width="8"/><circle r="51" fill="none" stroke="#b45a31" stroke-opacity=".25" stroke-width="2"/><path d="M48 48l54 54" stroke="#243d3a" stroke-width="17" stroke-linecap="round"/><path d="M-29 -5h58m-58 15h42" stroke="#243d3a" stroke-width="3"/>${linked ? '<path d="M-21 -27h43" stroke="#b45a31" stroke-width="7"/>' : txt('?',-10,-20,'T5-title T5-orange')}</g></g>
  <path d="M528 179v-39h112v220H528v-37" class="T5-ink"/>
  <circle cx="582" cy="206" r="21" fill="#243d3a"/><path d="M547 266v-15q35 -40 70 0v15" fill="#243d3a"/>
  ${txt('Applicability',582,295,'T5-small','text-anchor="middle"')}${txt('Human decision',582,324,'T5-small','text-anchor="middle"')}
  <path d="M456 121h50m-14 -7l14 7l-14 7" class="T5-ink"/>`;
}

function outcome(linked) {
  return `${txt(linked?'A draft, ready for review.':'Keep the question open.',36,58,'T5-title')}
  <path d="M48 331H668V389H48Z" fill="#d7c8b0"/><path d="M48 331l35 -35h550l35 35" fill="#e5dccb"/>
  <g transform="rotate(-8 212 247)"><path d="M84 115H301V356H84Z" class="T5-paper"/><path d="M104 142h39" stroke="#b45a31" stroke-width="5"/>${txt('Original',104,174)}${lines(105,201,168,6)}${txt('Retained',105,319,'T5-small T5-muted')}</g>
  <g class="T5-file"><path d="M276 92H595L623 120V356H276Z" fill="#fffaf1" stroke="#243d3a" stroke-width="2" stroke-dasharray="${linked?'7 4':'none'}"/><path d="M595 92v28h28" fill="#dfd4c0"/>
  ${txt(linked?'Review draft':'Clarification',301,142,'T5-title')}
  <path d="M302 163H594" class="T5-rule"/>
  ${txt(linked?'Changes + rationale':'Ask for evidence',301,197,'T5-label')}
  ${lines(302,220,268,4)}
  <path d="M302 282H594" class="T5-rule"/>
  ${txt(linked?'Human approval pending':'No conclusion issued',301,313,'T5-small T5-orange')}
  <path d="M302 334h168" stroke="#bbaa8e" stroke-width="1.5" stroke-dasharray="4 5"/>
  </g>
  <path d="M48 356H668V389H48Z" fill="#243d3a"/>
  ${txt('Original preserved',64,378,'T5-small T5-light')}${txt(linked?'Ready for human review':'Evidence requested',648,378,'T5-small T5-light','text-anchor="end"')}`;
}

export function render(phase = 0, choice = 'base', uid = 'T5') {
  const p = Number.isInteger(phase) && phase >= 0 && phase <= 4 ? phase : 0;
  const linked = choice === 'linked';
  const scope = escape(String(uid).replace(/[^a-zA-Z0-9_-]/g, '_'));
  const aria = [
    'Illustrative review relay showing an original requirement and a vendor reply.',
    'Illustrative relay with separate evidence and human review gates.',
    linked ? 'Illustrative clause passing linked evidence and stopping at human review, without approval.' : 'Illustrative clause stopped at a closed evidence gate because evidence is missing.',
    linked ? 'Illustrative human review of source applicability, original text, proposed changes and rationale.' : 'Illustrative human review preserving the original and an unresolved evidence question.',
    linked ? 'Illustrative draft prepared for human review with original text, changes and rationale preserved; approval is pending.' : 'Illustrative clarification output retaining the original; no unsupported conclusion is issued.'
  ][p];
  const content = [context, structure, () => explore(linked), () => review(linked), () => outcome(linked)][p]();
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-T5" viewBox="0 0 720 460" role="img" aria-label="${escape(aria)}" data-phase="${p}" data-choice="${linked?'linked':'missing'}"><defs><pattern id="${scope}-paper-grain" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r=".55" fill="#8e7954" opacity=".14"/></pattern></defs><rect width="720" height="460" fill="#f3eee4"/><rect width="720" height="460" fill="url(#${scope}-paper-grain)"/>${content}${footer()}</svg>`;
}
