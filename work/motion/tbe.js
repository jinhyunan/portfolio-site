export const id = 'FTBE';
export const title = 'The clause proofing folio';
export const summary = 'One retained clause, an evidence interlock, and a separate human judgment.';

export const translations = [
  ['The clause proofing folio', '조항을 검토하는 문서철'],
  ['One retained clause, an evidence interlock, and a separate human judgment.', '보존된 조항 하나, 근거에 따른 진행 조건, 그리고 별도로 남는 사람의 판단.'],
  ['Requirement', '요구사항'], ['Vendor reply', '공급사 회신'], ['Evidence', '근거'],
  ['Confirm the applicable', '적용 가능한'], ['operating envelope.', '운전 범위를 확인하세요.'],
  ['Refer to the proposed', '제안된 장비'], ['equipment schedule.', '목록을 참조하세요.'],
  ['Operating envelope', '운전 범위'], ['Equipment schedule', '장비 목록'],
  ['Operating', '운전'], ['envelope', '범위'], ['Equipment', '장비'], ['schedule', '목록'],
  ['Missing', '미연결'], ['Linked', '연결됨'],
  ['Evidence missing', '근거 미연결'], ['Reference linked', '참조 근거 연결'],
  ['Original retained', '원문 보존'], ['Same clause', '같은 조항'],
  ['Ask for', '근거를'], ['evidence', '요청하세요'],
  ['Ask for evidence', '근거 요청'], ['Clarification', '확인 요청'],
  ['Human', '사람의'], ['review', '검토'], ['Human review', '사람의 검토'],
  ['Draft for human review', '사람 검토용 초안'],
  ['Original', '원문'], ['Draft', '초안'], ['Change', '변경'], ['Rationale', '판단 이유'],
  ['Confirm', '적용 가능성을'], ['applicability', '확인하세요'],
  ['Judgment pending', '판단 대기 중'], ['No final judgment', '최종 판단 전'],
  ['Evidence needed', '근거 필요'], ['Review pending', '검토 대기 중'],
  ['Retained', '보존'],
  ['Illustrative source folio: the exact requirement and vendor reply are retained; the evidence position is empty.', '설명용 문서철: 요구사항과 공급사 회신 원문을 보존하고, 근거 자리는 비워 둡니다.'],
  ['Illustrative source folio: the exact requirement and vendor reply are retained with a linked reference; human judgment is still pending.', '설명용 문서철: 요구사항과 공급사 회신 원문 및 연결된 참조 근거를 보존하며, 사람의 판단은 대기 중입니다.'],
  ['One illustrative clause aligns the requirement, vendor reply and empty evidence position; no conclusion is produced.', '설명용 조항 하나에서 요구사항, 공급사 회신, 비어 있는 근거 자리를 정렬하며 결론을 만들지 않습니다.'],
  ['One illustrative clause aligns the requirement, vendor reply and linked reference; linkage does not establish applicability.', '설명용 조항 하나에서 요구사항, 공급사 회신, 연결된 참조 근거를 정렬하며, 연결만으로 적용 가능성을 판단하지 않습니다.'],
  ['The whole operating-envelope excerpt stops above a closed evidence interlock. A side fold requests evidence; the separate human-review boundary remains unresolved.', '운전 범위 발췌문 전체가 닫힌 근거 진행 장치 위에서 멈춥니다. 옆으로 접힌 확인 요청은 근거를 요구하며, 별도의 사람 검토 단계는 미결 상태입니다.'],
  ['The operating-envelope excerpt waits entirely above the evidence interlock until both halves retract, then moves only to the separate human-review boundary. The result is a draft, not approval.', '운전 범위 발췌문 전체가 근거 진행 장치 위에서 기다리다가 양쪽 장치가 모두 열린 뒤 별도의 사람 검토 경계까지만 이동합니다. 결과는 초안이며 승인이 아닙니다.'],
  ['The retained original sits beside a clarification whose change requests evidence and whose rationale records the missing support. No final judgment is made.', '보존된 원문 옆에 확인 요청을 놓고, 변경란에는 근거 요청을, 판단 이유란에는 근거 미연결을 남깁니다. 최종 판단은 내리지 않습니다.'],
  ['The retained original sits beside a draft whose proposed change asks a human to confirm applicability. A linked reference is recorded as rationale; final judgment remains pending.', '보존된 원문 옆에 사람에게 적용 가능성 확인을 요청하는 초안을 놓습니다. 판단 이유에 연결된 참조 근거를 남기며, 최종 판단은 대기 중입니다.'],
  ['An illustrative archive retains original, change and rationale beside a clarification that still requests evidence. No unsupported draft or conclusion is issued.', '설명용 보관철에 원문, 변경, 판단 이유와 여전히 근거를 요청하는 확인 요청을 함께 보존합니다. 근거 없는 초안이나 결론을 발행하지 않습니다.'],
  ['An illustrative archive retains original, change and rationale beside a draft with linked evidence. Human review remains pending; no approval is represented.', '설명용 보관철에 원문, 변경, 판단 이유와 근거가 연결된 초안을 함께 보존합니다. 사람의 검토는 대기 중이며 승인을 나타내지 않습니다.'],
];

export const css = `
.entry-FTBE{display:block;width:100%;height:auto;isolation:isolate;color:#253d36;font-family:Arial,"Noto Sans KR","Apple SD Gothic Neo",sans-serif}
.entry-FTBE text{fill:#253d36;font-size:28px;font-weight:500;letter-spacing:-.45px}
.entry-FTBE .FTBE-label{font-size:26px;font-weight:650;letter-spacing:-.35px}
.entry-FTBE .FTBE-large{font-size:32px;font-weight:600;letter-spacing:-.65px}
.entry-FTBE .FTBE-quote{font-size:30px;font-family:Georgia,"Noto Sans KR","Apple SD Gothic Neo",serif;letter-spacing:-.45px}
.entry-FTBE .FTBE-muted{fill:#52675b}
.entry-FTBE .FTBE-coral{fill:#a34831}
.entry-FTBE .FTBE-blue{fill:#344f9b}
.entry-FTBE .FTBE-white{fill:#fffdf5}
.entry-FTBE .FTBE-rule{fill:none;stroke:#b9c2af;stroke-width:2}
.entry-FTBE .FTBE-trace{fill:none;stroke:#718773;stroke-width:2.5;stroke-dasharray:5 7}
.entry-FTBE .FTBE-proof{fill:none;stroke:#a34831;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.entry-FTBE .FTBE-left-open{transform:translateX(-190px)}
.entry-FTBE .FTBE-right-open{transform:translateX(190px)}
.animating .entry-FTBE .FTBE-settle{animation:FTBE-settle 1.2s cubic-bezier(.2,.75,.25,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-offset{animation:FTBE-settle 1.2s .2s cubic-bezier(.2,.75,.25,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-align{animation:FTBE-align 3.2s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-after-scan{animation:FTBE-reveal .7s 3.2s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-stop{animation:FTBE-stop 3s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-pass{animation:FTBE-pass 5.6s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-left-open{animation:FTBE-left-gate 5.6s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-right-open{animation:FTBE-right-gate 5.6s ease-in-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-clarification{animation:FTBE-fold 1s 1.5s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-after-gate{animation:FTBE-result 5.6s ease both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-mark{animation:FTBE-mark 2s .5s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FTBE .FTBE-file{animation:FTBE-file 1.7s .2s cubic-bezier(.2,.75,.25,1) both;animation-play-state:var(--motion-play,running)}
@keyframes FTBE-settle{from{opacity:.1;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes FTBE-align{0%{transform:translateY(-210px)}42%,55%{transform:translateY(-105px)}88%,100%{transform:translateY(0)}}
@keyframes FTBE-reveal{from{opacity:0}to{opacity:1}}
@keyframes FTBE-stop{0%{transform:translateY(-62px)}38%,100%{transform:translateY(0)}}
@keyframes FTBE-pass{0%{transform:translateY(-216px)}28%,58%{transform:translateY(-154px)}86%,100%{transform:translateY(0)}}
@keyframes FTBE-left-gate{0%,34%{transform:translateX(0)}50%,100%{transform:translateX(-190px)}}
@keyframes FTBE-right-gate{0%,34%{transform:translateX(0)}50%,100%{transform:translateX(190px)}}
@keyframes FTBE-fold{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
@keyframes FTBE-result{0%,86%{opacity:0}100%{opacity:1}}
@keyframes FTBE-mark{from{stroke-dasharray:240;stroke-dashoffset:240}to{stroke-dasharray:240;stroke-dashoffset:0}}
@keyframes FTBE-file{from{opacity:.15;transform:translateY(-36px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.animating .entry-FTBE *{animation:none!important;transition:none!important}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x,y,value,cls='',extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${esc(value)}</text>`;
const centered = (x,y,value,cls='') => text(x,y,value,cls,'text-anchor="middle"');
const rule = (x,y,w) => `<path d="M${x} ${y}h${w}" class="FTBE-rule"/>`;

function sheet(x,y,w,h,uid,fill='#fffdf5',dashed=false) {
  return `<path d="M${x} ${y}h${w-22}l22 22v${h-22}h-${w}Z" fill="${fill}" stroke="${dashed?'#344f9b':'#9ead98'}" stroke-width="2"${dashed?' stroke-dasharray="8 6"':''} filter="url(#${uid}-paper-shadow)"/><path d="M${x+w-22} ${y}v22h22" fill="#e8e8d9" stroke="#9ead98" stroke-width="2"/>`;
}

function evidencePocket(x,y,w,h,linked,uid) {
  return linked
    ? `${sheet(x,y,w,h,uid,'#e8eddf')}<path d="M${x+19} ${y+25}h${w-52}" stroke="#718773" stroke-width="3"/>${centered(x+w/2,y+h-25,'Linked','FTBE-label')}`
    : `<path d="M${x} ${y}h${w-22}l22 22v${h-22}h-${w}Z" fill="#f5f1e7" stroke="#a34831" stroke-width="2.5" stroke-dasharray="8 7"/><path d="M${x+w/2-15} ${y+31}h30" stroke="#a34831" stroke-width="3"/>${centered(x+w/2,y+h-25,'Missing','FTBE-label FTBE-coral')}`;
}

function context(uid,linked) {
  return `<path d="M46 102v226h124" class="FTBE-trace"/><circle cx="46" cy="102" r="7" fill="#718773"/>
  <g transform="rotate(-3 294 133)"><g class="FTBE-settle">${sheet(75,50,441,164,uid,'#e8eddf')}
  ${text(103,89,'Requirement','FTBE-label')}${text(103,134,'Confirm the applicable','FTBE-quote')}
  <path d="M100 146h322v39H100Z" fill="#e5da9d" opacity=".75"/>
  ${text(103,174,'operating envelope.','FTBE-quote')}</g></g>
  <g class="FTBE-offset">${centered(605,63,'Evidence','FTBE-label')}${evidencePocket(535,80,140,129,linked,uid)}</g>
  <g transform="rotate(2 420 306)"><g class="FTBE-offset">${sheet(177,230,474,158,uid)}
  ${text(208,268,'Vendor reply','FTBE-label')}${text(208,311,'Refer to the proposed','FTBE-quote')}
  <path d="M206 324h328v37H206Z" fill="#e5da9d" opacity=".55"/>
  ${text(208,351,'equipment schedule.','FTBE-quote')}</g></g>
  ${text(48,438,'Original retained','FTBE-label FTBE-muted')}`;
}

function structure(uid,linked) {
  return `<path d="M54 48h612v350H54Z" fill="#d7decc"/><g class="FTBE-settle">
  <path d="M66 42h589l-13 105 13 105-13 137H66l12-137-12-105Z" fill="#fffdf5" stroke="#9ead98" stroke-width="2"/>
  <path d="M67 147h575M79 252h576" class="FTBE-rule"/><path d="M266 62v304" class="FTBE-trace"/>
  ${text(89,104,'Requirement','FTBE-label')}${text(300,104,'Operating envelope','FTBE-quote')}
  ${text(89,209,'Vendor reply','FTBE-label')}${text(300,209,'Equipment schedule','FTBE-quote')}
  ${text(89,314,'Evidence','FTBE-label')}
  <path d="M293 274h335v76H293Z" fill="${linked?'#e8eddf':'#fffdf5'}" stroke="${linked?'#718773':'#a34831'}" stroke-width="2.5"${linked?'':' stroke-dasharray="8 7"'}/>
  ${centered(460,319,linked?'Reference linked':'Evidence missing',linked?'FTBE-label':'FTBE-label FTBE-coral')}
  </g><g class="FTBE-align"><path d="M57 270h606v84H57Z" fill="#e9d795" opacity=".23"/><path d="M57 270v84m606-84v84" stroke="#9b703f" stroke-width="3"/></g>
  <path d="M283 375h337" stroke="#718773" stroke-width="2"/>
  <g class="FTBE-after-scan">${centered(360,436,'Same clause','FTBE-label FTBE-muted')}</g>`;
}

function excerpt(linked) {
  const y = linked ? 300 : 146;
  return `<g transform="translate(370 ${y})"><g class="${linked?'FTBE-pass':'FTBE-stop'}">
  <path d="M-130-48H108l22 22v74H-130Z" fill="#fffdf5" stroke="${linked?'#344f9b':'#253d36'}" stroke-width="2.5"${linked?' stroke-dasharray="8 5"':''}/><path d="M108-48v22h22" fill="#dce3d2" stroke="#9ead98" stroke-width="2"/>
  <path d="M-116-31v62" stroke="#a34831" stroke-width="5"/>
  ${centered(0,-8,'Operating','FTBE-quote')}${centered(0,29,'envelope','FTBE-quote')}
  </g></g>`;
}

function interlock(linked) {
  return `<g class="${linked?'FTBE-left-open':''}"><path d="M225 218h145" stroke="#a34831" stroke-width="13"/><path d="m236 212 8 12m17-12 8 12m17-12 8 12m17-12 8 12m17-12 8 12" stroke="#fffdf5" stroke-width="3"/></g>
  <g class="${linked?'FTBE-right-open':''}"><path d="M370 218h145" stroke="#a34831" stroke-width="13"/><path d="m382 212 8 12m17-12 8 12m17-12 8 12m17-12 8 12m17-12 8 12" stroke="#fffdf5" stroke-width="3"/></g>`;
}

function explore(uid,linked) {
  // The complete excerpt is x=240..500. At the hold it ends at y=194,
  // before the gate's upper edge y=211.5. Both jaws clear x=180..560
  // by 50%; passage begins only at 58%. Human boundary never opens.
  return `<path d="M213 39h314v366H213Z" fill="#e5e5d6"/><path d="M230 40v364m280-364v364" stroke="#b8c3ad" stroke-width="2"/><path d="M370 40v345" class="FTBE-trace"/>
  ${text(40,48,'Evidence','FTBE-label')}
  <g class="FTBE-settle">${evidencePocket(40,67,154,112,linked,uid)}</g>
  <path d="M117 181v18h108" class="FTBE-trace"/>
  ${excerpt(linked)}${interlock(linked)}
  ${linked?'':`<g class="FTBE-clarification"><path d="M500 146h39" class="FTBE-proof"/><path d="M544 79h140v112l-70-17-70 17Z" fill="#f2dfcc" stroke="#a34831" stroke-width="2.5"/><path d="M544 79l70 32 70-32" fill="none" stroke="#a34831" stroke-width="2"/>${centered(614,139,'Ask for','FTBE-label')}${centered(614,172,'evidence','FTBE-label')}</g>`}
  <path d="M224 388h292m-292-12v24m292-24v24" stroke="#253d36" stroke-width="7" fill="none"/>
  <path d="M518 382h63" class="FTBE-rule"/>
  <circle cx="617" cy="343" r="13" fill="#253d36"/><path d="M593 382v-13q24-25 48 0v13" fill="#253d36"/>
  ${centered(617,283,'Human','FTBE-label')}${centered(617,315,'review','FTBE-label')}
  <g class="${linked?'FTBE-after-gate':'FTBE-clarification'}">${centered(360,438,linked?'Draft for human review':'Clarification',linked?'FTBE-blue':'FTBE-coral')}</g>`;
}

function review(uid,linked) {
  return `<g class="FTBE-settle">${sheet(43,73,284,325,uid,'#e8eddf')}
  ${text(70,116,'Original','FTBE-large')}${rule(70,135,226)}
  ${text(70,186,'Operating','FTBE-quote')}${text(70,222,'envelope','FTBE-quote')}
  ${rule(70,245,226)}${text(70,287,'Equipment','FTBE-quote')}${text(70,323,'schedule','FTBE-quote')}
  ${text(70,376,'Retained','FTBE-label FTBE-muted')}</g>
  <path d="M327 204h27m-27 108h27" class="FTBE-trace"/>
  <g class="FTBE-offset">${sheet(353,42,324,356,uid,linked?'#f9fbf4':'#fff8ee',linked)}
  ${text(382,88,linked?'Draft':'Clarification','FTBE-large '+(linked?'FTBE-blue':'FTBE-coral'))}
  ${rule(382,109,267)}${text(382,148,'Change','FTBE-label FTBE-muted')}
  ${text(396,189,linked?'Confirm':'Ask for','FTBE-quote')}${text(396,226,linked?'applicability':'evidence','FTBE-quote')}
  <path d="M381 166h-9v68h9" class="FTBE-proof FTBE-mark"/>
  ${rule(382,252,267)}${text(382,289,'Rationale','FTBE-label FTBE-muted')}
  ${text(382,329,linked?'Reference linked':'Evidence missing','FTBE-label '+(linked?'':'FTBE-coral'))}
  ${text(382,376,'Judgment pending','FTBE-label FTBE-muted')}</g>
  ${centered(360,438,'No final judgment','FTBE-label FTBE-muted')}`;
}

function outcome(uid,linked) {
  return `<path d="M49 147l24-30h218l27 21h351v282H49Z" fill="#d7dec9" stroke="#9ead98" stroke-width="2"/>
  <g class="FTBE-settle"><path d="M74 73h259v289H74Z" fill="#d2dbc7" stroke="#9ead98" stroke-width="2"/>
  ${sheet(62,58,259,292,uid,'#e8eddf')}${text(88,103,'Original','FTBE-large')}
  ${rule(88,122,204)}${text(88,170,'Operating','FTBE-quote')}${text(88,207,'envelope','FTBE-quote')}
  ${rule(88,239,192)}${rule(88,260,165)}${text(88,318,'Retained','FTBE-label FTBE-muted')}</g>
  <g class="FTBE-file">${sheet(348,85,310,272,uid,'#fffdf5',linked)}
  ${text(374,136,linked?'Draft':'Clarification','FTBE-large '+(linked?'FTBE-blue':'FTBE-coral'))}
  ${rule(374,159,255)}${text(374,205,linked?'Human review':'Evidence needed')}
  ${text(374,248,linked?'Review pending':'Ask for evidence','FTBE-label '+(linked?'FTBE-muted':'FTBE-coral'))}
  ${rule(374,280,227)}${rule(374,301,184)}</g>
  <path d="M49 353l145 24h330l145-24v67H49Z" fill="#253d36"/>
  <path d="M270 379v26m191-26v26" stroke="#a7b49a" stroke-width="2"/>
  ${centered(155,401,'Original','FTBE-label FTBE-white')}${centered(365,401,'Change','FTBE-label FTBE-white')}${centered(565,401,'Rationale','FTBE-label FTBE-white')}`;
}

const descriptions = [
  ['Illustrative source folio: the exact requirement and vendor reply are retained; the evidence position is empty.','Illustrative source folio: the exact requirement and vendor reply are retained with a linked reference; human judgment is still pending.'],
  ['One illustrative clause aligns the requirement, vendor reply and empty evidence position; no conclusion is produced.','One illustrative clause aligns the requirement, vendor reply and linked reference; linkage does not establish applicability.'],
  ['The whole operating-envelope excerpt stops above a closed evidence interlock. A side fold requests evidence; the separate human-review boundary remains unresolved.','The operating-envelope excerpt waits entirely above the evidence interlock until both halves retract, then moves only to the separate human-review boundary. The result is a draft, not approval.'],
  ['The retained original sits beside a clarification whose change requests evidence and whose rationale records the missing support. No final judgment is made.','The retained original sits beside a draft whose proposed change asks a human to confirm applicability. A linked reference is recorded as rationale; final judgment remains pending.'],
  ['An illustrative archive retains original, change and rationale beside a clarification that still requests evidence. No unsupported draft or conclusion is issued.','An illustrative archive retains original, change and rationale beside a draft with linked evidence. Human review remains pending; no approval is represented.'],
];

export function render(phase=0,choice='missing',uid='FTBE') {
  const p = Number.isInteger(phase) ? Math.max(0,Math.min(4,phase)) : 0;
  const linked = choice === 'linked';
  const scope = `${String(uid).replace(/[^A-Za-z0-9_-]/g,'_')||'folio'}-FTBE`;
  const description = descriptions[p][linked?1:0];
  const art = [context,structure,explore,review,outcome][p](scope,linked);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-FTBE" viewBox="0 0 720 460" role="img" aria-label="${esc(description)}" data-phase="${p}" data-choice="${linked?'linked':'missing'}"><title id="${scope}-title">${esc(description)}</title><defs><filter id="${scope}-paper-shadow" x="-10%" y="-10%" width="130%" height="135%"><feDropShadow dx="2" dy="5" stdDeviation="3" flood-color="#263b2d" flood-opacity=".09"/></filter></defs><rect width="720" height="460" rx="10" fill="#f5f1e7"/>${art}</svg>`;
}
