export const id = 'O1';
export const title = 'Semantic Atlas';
export const summary = 'Read engineering knowledge as typed terrain, traceable routes, and an explicit review frontier.';
export const translations = [
  ['Semantic Atlas', '의미의 지도'],
  ['Read engineering knowledge as typed terrain, traceable routes, and an explicit review frontier.', '공학 지식을 유형의 지형, 추적 가능한 경로, 명확한 검토 경계로 읽습니다.'],
  ['01 / CONTEXT', '01 / 맥락'], ['02 / STRUCTURE', '02 / 구조'], ['03 / EXPLORE', '03 / 탐색'], ['04 / REVIEW', '04 / 검토'], ['05 / OUTCOME', '05 / 결과'],
  ['Find the territory.', '지식의 지형을 찾다.'], ['Types are not instances.', '유형과 개체를 구별하다.'], ['Choose where to enter.', '출발점을 선택하다.'], ['A route is not approval.', '연결과 승인을 구별하다.'], ['Keep the context intact.', '맥락을 온전히 보존하다.'],
  ['System', '시스템'], ['Equipment', '장비'], ['Property', '속성'], ['Method', '계산 방법'], ['Evidence', '근거'],
  ['Five distinct kinds of knowledge', '서로 다른 다섯 가지 지식 유형'], ['Illustrative atlas · No engineering performed', '예시 지도 · 실제 공학 검증 미수행'],
  ['TYPE', '유형'], ['INSTANCE', '개체'], ['Pump', '펌프'], ['Pump A', '펌프 A'], ['Head balance', '양정 평형'], ['Flow condition', '유량 조건'], ['Reference excerpt', '참고 문헌 발췌'],
  ['applies to', '적용 대상'], ['requires input', '필요 입력'], ['supported by', '뒷받침 근거'], ['reviewed as', '검토 상태'], ['A named relation carries meaning', '이름 있는 관계가 의미를 전달합니다'],
  ['A named relation', '이름 있는 관계가'], ['carries meaning', '의미를 전달합니다'], ['Reference', '참고 문헌'], ['excerpt', '발췌'],
  ['ENTRY / EQUIPMENT', '출발점 / 장비'], ['ENTRY / METHOD', '출발점 / 계산 방법'], ['ENTRY / EVIDENCE', '출발점 / 근거'],
  ['Same facts. A different reading path.', '사실은 그대로, 읽는 경로는 다르게.'], ['Head balance applies to Pump A', '양정 평형의 적용 대상은 펌프 A'], ['Head balance requires input: Flow condition', '양정 평형의 필요 입력: 유량 조건'], ['Head balance supported by Reference excerpt', '양정 평형의 뒷받침 근거: 참고 문헌 발췌'],
  ['PROPOSED ROUTE', '제안된 연결'], ['Human review', '사람의 검토'], ['Pending', '대기 중'], ['Applicability pending review', '적용 가능성 검토 대기'],
  ['Type + instance', '유형 + 개체'], ['Named relation', '이름 있는 관계'], ['Source + state', '출처 + 상태'], ['Context preserved', '맥락 보존'],
  ['Map of five distinct engineering knowledge types: System, Equipment, Property, Method, and Evidence. All data is illustrative.', '시스템, 장비, 속성, 계산 방법, 근거라는 서로 다른 다섯 가지 공학 지식 유형의 지도. 모든 데이터는 예시입니다.'],
  ['A Pump type encloses the Pump A instance. Head balance applies to Pump A through a named relation. Applicability has not been verified.', '펌프 유형 안에 펌프 A 개체가 있습니다. 양정 평형은 이름 있는 관계로 펌프 A에 연결됩니다. 적용 가능성은 검증되지 않았습니다.'],
  ['Equipment entry highlights the applies to relation from Head balance to Pump A. The facts are unchanged and applicability remains pending review.', '장비 출발점은 양정 평형에서 펌프 A로 이어지는 적용 대상 관계를 강조합니다. 사실은 바뀌지 않으며 적용 가능성은 검토 대기 상태입니다.'],
  ['Method entry highlights the requires input relation from Head balance to Flow condition. The facts are unchanged and applicability remains pending review.', '계산 방법 출발점은 양정 평형에서 유량 조건으로 이어지는 필요 입력 관계를 강조합니다. 사실은 바뀌지 않으며 적용 가능성은 검토 대기 상태입니다.'],
  ['Evidence entry highlights the supported by relation from Head balance to Reference excerpt. The facts are unchanged and applicability remains pending review.', '근거 출발점은 양정 평형에서 참고 문헌 발췌로 이어지는 뒷받침 근거 관계를 강조합니다. 사실은 바뀌지 않으며 적용 가능성은 검토 대기 상태입니다.'],
  ['A proposed applicability route crosses a human review frontier. The relation is reviewed as Pending; a connection is not proof of applicability.', '제안된 적용 관계가 사람의 검토 경계를 지납니다. 관계의 검토 상태는 대기 중이며, 연결 자체가 적용 가능성의 증거는 아닙니다.'],
  ['A folded semantic atlas preserves the Pump type, Pump A instance, Head balance method, Reference excerpt evidence, and applicability pending review state. Illustrative only.', '접힌 의미 지도는 펌프 유형, 펌프 A 개체, 양정 평형 계산 방법, 참고 문헌 발췌 근거, 적용 가능성 검토 대기 상태를 보존합니다. 예시입니다.']
];

export const css = `
.entry-O1 { --ink:#243c32; --paper:#f6f2e8; --lime:#d6ed86; --rust:#a34b31; width:100%; height:auto; display:block; background:var(--paper); color:var(--ink); }
.entry-O1 text { font-family:Arial,Helvetica,sans-serif; fill:var(--ink); font-size:20px; }
.entry-O1 .O1-title { font-family:Georgia,'Times New Roman',serif; font-size:34px; letter-spacing:-.7px; }
.entry-O1 .O1-kicker { font-size:16px; font-weight:700; letter-spacing:2px; }
.entry-O1 .O1-small { font-size:18px; }
.entry-O1 .O1-tiny { font-size:16px; }
.entry-O1 .O1-label { font-size:22px; font-weight:700; }
.entry-O1 .O1-value { font-size:25px; font-family:Georgia,'Times New Roman',serif; }
.entry-O1 .O1-contour { fill:none; stroke:#849b88; stroke-width:1.4; opacity:.65; }
.entry-O1 .O1-edge { stroke:var(--ink); stroke-width:2; stroke-linejoin:round; }
.entry-O1 .O1-trail { fill:none; stroke:var(--ink); stroke-width:3.5; stroke-linecap:round; stroke-linejoin:round; }
.entry-O1 .O1-primary { fill:none; stroke:var(--ink); stroke-width:5; stroke-linecap:round; stroke-linejoin:round; }
.entry-O1 .O1-route-under { fill:none; stroke:var(--lime); stroke-width:16; stroke-linecap:round; stroke-linejoin:round; }
.entry-O1 .O1-pending { stroke:var(--rust); stroke-dasharray:8 7; }
.entry-O1 .O1-caption { font-size:18px; fill:#56665a; }
.entry-O1 .O1-rust { fill:var(--rust); }
.entry-O1 .O1-halo { paint-order:stroke; stroke:var(--paper); stroke-width:8px; stroke-linejoin:round; }
.entry-O1 .O1-pin { fill:var(--ink); stroke:var(--paper); stroke-width:3; }
.animating .entry-O1 .O1-arrive { animation:O1-arrive 1.2s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-O1 .O1-primary { stroke-dasharray:1; animation:O1-route 2.8s .35s ease-in-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-O1 .O1-review { animation:O1-review 1.4s .8s ease-out both; transform-box:fill-box; transform-origin:center; animation-play-state:var(--motion-play,running); }
@keyframes O1-arrive { from { opacity:.15; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
@keyframes O1-route { from { stroke-dashoffset:1; } to { stroke-dashoffset:0; } }
@keyframes O1-review { from { opacity:.2; transform:scale(.92); } to { opacity:1; transform:scale(1); } }
@media(prefers-reduced-motion:reduce) { .animating .entry-O1 .O1-arrive, .animating .entry-O1 .O1-primary, .animating .entry-O1 .O1-review { animation:none; stroke-dashoffset:0; } }
`;

const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[ch]));
const text = (x,y,value,cls='',anchor='start') => `<text x="${x}" y="${y}"${cls ? ` class="${cls}"` : ''} text-anchor="${anchor}">${esc(value)}</text>`;
const pin = (x,y) => `<path d="M${x} ${y-9}l9 9-9 9-9-9Z" class="O1-pin"/>`;
const contour = d => `<path d="${d}" class="O1-contour"/>`;
const path = (d,cls='O1-trail',more='') => `<path d="${d}" class="${cls}" ${more}/>`;
const aria = [
  'Map of five distinct engineering knowledge types: System, Equipment, Property, Method, and Evidence. All data is illustrative.',
  'A Pump type encloses the Pump A instance. Head balance applies to Pump A through a named relation. Applicability has not been verified.',
  '',
  'A proposed applicability route crosses a human review frontier. The relation is reviewed as Pending; a connection is not proof of applicability.',
  'A folded semantic atlas preserves the Pump type, Pump A instance, Head balance method, Reference excerpt evidence, and applicability pending review state. Illustrative only.'
];

function context() {
  return `<g class="O1-arrive">
    <path d="M48 190Q60 139 131 140L206 151 231 204 201 255 111 263 49 237Z" fill="#e7e0cc" class="O1-edge"/>
    <path d="M206 151Q286 111 361 139L388 201 336 253 231 248 231 204Z" fill="#d6ed86" class="O1-edge"/>
    <path d="M49 237L111 263 201 255 231 248 267 313 223 361 120 362 65 321Z" fill="#dce7db" class="O1-edge"/>
    <path d="M388 201L361 139Q439 128 484 169L515 241 454 288 365 279 336 253Z" fill="#eee5ca" class="O1-edge"/>
    <path d="M515 241L484 169Q562 124 643 165L678 226 651 304 571 335 502 292 454 288Z" fill="#dce8e5" class="O1-edge"/>
    ${contour('M65 187Q112 154 188 177M63 218Q129 188 211 214M236 160Q296 141 344 160M245 181Q294 168 356 184M86 294Q152 270 231 301M99 319Q155 297 231 325M389 165Q459 159 476 220M377 189Q437 172 459 240M523 185Q587 150 643 194M540 211Q587 178 650 222M550 282Q601 308 639 264')}
    ${text(78,217,'System','O1-label')}${text(249,222,'Equipment','O1-label')}${text(106,344,'Property','O1-label')}${text(376,256,'Method','O1-label')}${text(550,253,'Evidence','O1-label')}
  </g>
  ${path('M103 389H617','O1-trail')}
  ${[103,231,360,489,617].map(x => pin(x,389)).join('')}
  ${text(360,420,'Five distinct kinds of knowledge','O1-small','middle')}`;
}

function structure(uid) {
  return `<g class="O1-arrive">
    <path d="M54 202Q79 128 186 130L286 142Q346 171 336 245L320 310Q247 364 132 349L61 312Z" fill="#dce7db" class="O1-edge"/>
    ${contour('M73 210Q103 147 182 151L273 161Q322 188 314 246L299 294Q237 338 138 329L82 299ZM95 220Q115 175 185 173L260 181Q296 199 292 244L276 281Q227 313 147 309L104 284Z')}
    <path d="M119 230Q134 197 190 196L247 203Q270 219 267 248L252 269Q214 290 159 283L124 266Z" fill="#d6ed86" class="O1-edge"/>
    ${text(96,174,'Equipment','O1-small')}
    ${text(153,232,'Pump','O1-label')}
    ${pin(188,261)}
    ${text(54,387,'TYPE','O1-kicker')}${text(119,387,'Pump','O1-value')}
    ${text(54,415,'INSTANCE','O1-kicker')}${text(167,415,'Pump A','O1-value')}
    <path d="M438 146L587 133 659 172 649 274 588 311 461 293 426 225Z" fill="#eee5ca" class="O1-edge"/>
    ${contour('M454 167L578 153 634 182 627 261 580 288 478 274 450 225ZM475 186L573 175 609 196 608 247 573 265 495 254 475 224Z')}
    ${text(463,193,'Method','O1-small')}${text(463,227,'Head balance','O1-label')}
    ${path('M470 249C408 326 283 330 188 261','O1-route-under')}
    ${path('M470 249C408 326 283 330 188 261','O1-primary',`pathLength="1" marker-end="url(#${uid}-arrow)"`)}
    ${text(352,335,'applies to','O1-halo','middle')}
    ${text(378,387,'A named relation','O1-small')}${text(378,413,'carries meaning','O1-small')}
  </g>`;
}

function explore(choice,uid) {
  const selection = {
    equipment: { label:'ENTRY / EQUIPMENT', sentence:'Head balance applies to Pump A', route:'M351 255C294 295 209 297 151 256', start:[151,256], tag:[247,325,'applies to'], aria:'Equipment entry highlights the applies to relation from Head balance to Pump A. The facts are unchanged and applicability remains pending review.' },
    method: { label:'ENTRY / METHOD', sentence:'Head balance requires input: Flow condition', route:'M351 255C353 295 283 337 176 344', start:[351,255], tag:[354,334,'requires input'], aria:'Method entry highlights the requires input relation from Head balance to Flow condition. The facts are unchanged and applicability remains pending review.' },
    evidence: { label:'ENTRY / EVIDENCE', sentence:'Head balance supported by Reference excerpt', route:'M351 255C416 341 514 359 579 307', start:[579,307], tag:[470,371,'supported by'], aria:'Evidence entry highlights the supported by relation from Head balance to Reference excerpt. The facts are unchanged and applicability remains pending review.' }
  }[choice];
  const chosenFill = key => choice === key ? '#d6ed86' : '#e5e7dc';
  return { aria:selection.aria, art:`
    ${text(41,117,selection.label,'O1-kicker')}
    <g class="O1-arrive">
      <path d="M37 193L84 155 189 156 247 198 228 273 161 301 70 278Z" fill="${chosenFill('equipment')}" class="O1-edge"/>
      <path d="M253 177L310 148 400 169 453 217 426 277 352 302 279 268Z" fill="${chosenFill('method')}" class="O1-edge"/>
      <path d="M464 210L518 178 622 181 681 228 662 305 587 326 497 295Z" fill="${chosenFill('evidence')}" class="O1-edge"/>
      ${contour('M59 204L94 176 181 175 224 207 208 258 158 280 87 258ZM80 215L109 197 172 195 201 215 189 244 154 260 105 242ZM274 190L316 169 390 188 429 223 409 259 353 281 295 254ZM294 205L321 192 380 210 405 231 391 243 353 259 314 240ZM486 223L524 199 613 202 657 235 640 286 584 305 516 277ZM510 236L534 222 604 224 633 245 617 269 581 283 536 263Z')}
      ${text(75,208,'Equipment','O1-small')}${text(75,238,'Pump A','O1-label')}
      ${text(287,203,'Method','O1-small')}${text(287,233,'Head balance','O1-label')}
      ${text(510,236,'Evidence','O1-small')}${text(510,267,'Reference','O1-label')}${text(510,293,'excerpt','O1-label')}
      ${path(selection.route,'O1-route-under')}${path(selection.route,'O1-primary',`pathLength="1" marker-end="url(#${uid}-arrow)"`)}
      ${pin(...selection.start)}
      ${text(selection.tag[0],selection.tag[1],selection.tag[2],'O1-halo O1-small','middle')}
      <path d="M64 349Q132 324 211 347" class="O1-contour"/>
      ${pin(176,344)}${text(43,374,'Flow condition','O1-small')}
    </g>
    ${text(360,411,selection.sentence,'O1-small','middle')}` };
}

function review() {
  return `<g class="O1-arrive">
    <path d="M36 179Q123 114 254 142L303 194 287 268 235 309 68 301 40 249Z" fill="#e8e2d0" class="O1-edge"/>
    <path d="M425 153Q524 126 651 166L680 225 651 293 503 313 420 272 408 207Z" fill="#dce7db" class="O1-edge"/>
    ${contour('M60 193Q127 139 244 163L280 200 266 255 227 287 84 279 64 246ZM85 209Q137 163 230 184L256 209 244 243 217 262 103 258 91 239ZM444 174Q526 150 631 186L654 226 632 270 509 290 442 255 431 211ZM466 197Q526 174 610 209L630 227 610 249 514 266 464 239 456 218Z')}
    <path d="M354 125C324 171 378 201 347 243S377 300 354 331" fill="none" stroke="#bfd7d2" stroke-width="42"/>
    <path d="M354 125C324 171 378 201 347 243S377 300 354 331" fill="none" stroke="#738f87" stroke-width="2" stroke-dasharray="4 7"/>
    ${text(72,191,'Method','O1-small')}${text(72,225,'Head balance','O1-label')}${text(468,194,'Equipment','O1-small')}${text(468,228,'Pump A','O1-label')}
    ${path('M168 255C245 286 434 285 528 255','O1-trail O1-pending')}
    ${pin(168,255)}${pin(528,255)}
    ${text(359,120,'PROPOSED ROUTE','O1-kicker','middle')}
    <g class="O1-review"><circle cx="353" cy="273" r="26" fill="#f6f2e8" stroke="#a34b31" stroke-width="3"/><path d="M341 261l24 24m0-24-24 24" stroke="#a34b31" stroke-width="3"/></g>
    ${text(353,326,'Human review','O1-halo O1-small','middle')}
  </g>
  <g class="O1-review">
    ${text(232,372,'reviewed as','O1-small','end')}
    <path d="M251 347H468V386H251Z" fill="#f0ddd0" stroke="#a34b31" stroke-width="1.5"/>
    ${text(360,374,'Pending','O1-label O1-rust','middle')}
    ${text(360,418,'Applicability pending review','O1-small','middle')}
  </g>`;
}

function outcome(uid) {
  return `<g class="O1-arrive">
    <path d="M50 166L254 133 458 164 669 134V335L458 365 254 336 50 368Z" fill="#e6e2d3" class="O1-edge"/>
    <path d="M50 166L254 133V336L50 368Z" fill="#e0e7d1"/>
    <path d="M254 133L458 164V365L254 336Z" fill="#f0e9d5"/>
    <path d="M458 164L669 134V335L458 365Z" fill="#dce8e5"/>
    ${contour('M60 185Q139 134 241 162M61 205Q149 158 241 184M63 330Q146 363 239 314M64 347Q157 373 242 336M268 155Q371 211 447 180M267 178Q364 232 447 203M269 309Q365 279 446 330M270 331Q359 300 446 349M470 185Q556 123 657 161M471 207Q568 144 656 184M472 337Q557 372 657 315M472 351Q568 383 657 337')}
    <path d="M254 133V336M458 164V365" stroke="#243c32" stroke-width="1.5" stroke-dasharray="4 5"/>
    ${text(69,201,'TYPE','O1-kicker')}${text(69,231,'Pump','O1-value')}
    ${text(69,273,'INSTANCE','O1-kicker')}${text(69,305,'Pump A','O1-label')}
    ${text(274,231,'Method','O1-small')}${text(274,264,'Head balance','O1-label')}
    ${text(481,204,'Evidence','O1-small')}${text(481,237,'Reference','O1-label')}${text(481,265,'excerpt','O1-label')}
    ${path('M349 287C302 329 208 341 158 323','O1-route-under')}
    ${path('M349 287C302 329 208 341 158 323','O1-primary',`pathLength="1" marker-end="url(#${uid}-arrow)"`)}
    ${text(294,357,'applies to','O1-halo O1-small','middle')}
    ${text(60,120,'Type + instance','O1-small')}${text(272,120,'Named relation','O1-small')}${text(482,120,'Source + state','O1-small')}
  </g>
  <g class="O1-review"><path d="M58 390H661" stroke="#a34b31" stroke-width="2"/>${text(360,420,'Applicability pending review','O1-small O1-rust','middle')}</g>`;
}

export function render(phase = 0, choice = 'base', uid = 'O1') {
  const p = Number.isInteger(phase) && phase >= 0 && phase <= 4 ? phase : 0;
  const c = ['equipment','method','evidence'].includes(choice) ? choice : 'equipment';
  const key = `${String(uid).replace(/[^a-zA-Z0-9_-]/g,'-')}-O1`;
  const labels = ['01 / CONTEXT','02 / STRUCTURE','03 / EXPLORE','04 / REVIEW','05 / OUTCOME'];
  const titles = ['Find the territory.','Types are not instances.','Choose where to enter.','A route is not approval.','Keep the context intact.'];
  let art, description = aria[p];
  if (p === 0) art = context();
  if (p === 1) art = structure(key);
  if (p === 2) { const exploration = explore(c,key); art = exploration.art; description = exploration.aria; }
  if (p === 3) art = review();
  if (p === 4) art = outcome(key);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-O1" viewBox="0 0 720 460" role="img" aria-label="${esc(description)}">
    <defs><marker id="${key}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M1 1L9 5 1 9" fill="none" stroke="#243c32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
    <rect width="720" height="460" fill="#f6f2e8"/>
    ${text(38,34,labels[p],'O1-kicker')}${text(38,78,titles[p],'O1-title')}
    <g aria-hidden="true"><circle cx="669" cy="52" r="22" fill="none" stroke="#819184"/><path d="M669 34L675 57 669 53 663 57Z" fill="#243c32"/><path d="M669 53V70M652 52H658M680 52H686" stroke="#819184"/></g>
    ${art}
    ${text(360,448,'Illustrative atlas · No engineering performed','O1-tiny','middle')}
  </svg>`;
}
