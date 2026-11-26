export const id = 'P2';
export const title = 'A route you can walk';
export const summary = 'An isometric plant makes a proposed bypass and its review boundary tangible.';

const words = {
  context: ['Follow the physical route', '실제 연결 경로를 따라가기'],
  structure: ['One identity. Every connection.', '모든 연결에 이어지는 동일한 식별자'],
  explore: ['Give the flow another path', '유체에 새로운 경로 만들기'],
  review: ['The change has a boundary', '변경에는 검토 범위가 있습니다'],
  outcome: ['Traceable. Still proposed.', '추적 가능하며, 아직 제안 단계입니다'],
  contextSub: ['A drawing becomes a connected assembly.', '도면이 연결된 설비로 드러납니다.'],
  structureSub: ['Equipment, ports and drawing stay linked.', '기기, 포트, 도면의 연결을 유지합니다.'],
  exploreSub: ['A new route brings new calculation paths.', '새 경로에는 새로운 계산 경로가 따릅니다.'],
  reviewSub: ['Tie-ins and missing inputs need review.', '접속부와 미확정 입력을 검토해야 합니다.'],
  outcomeSub: ['Keep the source, change and open questions.', '원본, 변경 사항, 남은 질문을 보존합니다.'],
  pump: ['Pump A', '펌프 A'],
  valve: ['Valve B', '밸브 B'],
  inlet: ['Inlet', '유입'],
  outlet: ['Outlet', '유출'],
  base: ['Base route', '기본 경로'],
  alternate: ['Add bypass', '우회 연결 추가'],
  proposed: ['Proposed bypass', '제안된 우회 배관'],
  ports: ['Stable port identities', '일관된 포트 식별자'],
  graph: ['DesignGraph links', 'DesignGraph 연결'],
  tieIns: ['Check both tie-ins', '두 접속부 확인'],
  inputs: ['Inputs unresolved', '입력 미확정'],
  calculation: ['Calculate changed paths', '변경 경로 계산'],
  original: ['Original kept', '원본 보존'],
  change: ['Change linked', '변경 연결'],
  pending: ['Review pending', '검토 대기'],
  notApproved: ['Not an approved design', '승인된 설계가 아닙니다'],
  illustrative: ['Illustrative assembly · no plant data', '예시 설비 · 실제 플랜트 데이터 없음'],
  ar0: ['An illustrative isometric pump and valve connected by a base pipeline. Arrows show the route from inlet to outlet.', '예시 입체 펌프와 밸브가 기본 배관으로 연결되어 있습니다. 화살표는 유입에서 유출까지의 경로를 나타냅니다.'],
  ar1: ['An exploded isometric assembly reveals stable pump and valve port identities linked through DesignGraph.', '분리된 입체 설비가 DesignGraph로 연결된 펌프와 밸브 포트의 일관된 식별자를 보여줍니다.'],
  ar2base: ['The selected base route passes through Pump A and Valve B. No bypass is included.', '선택된 기본 경로는 펌프 A와 밸브 B를 통과합니다. 우회 배관은 포함되지 않습니다.'],
  ar2alternate: ['A proposed elevated bypass connects before and after Valve B. Copper arrows show an additional possible flow path that requires calculation and review.', '제안된 고가 우회 배관이 밸브 B의 전후에 접속됩니다. 구리색 화살표는 계산과 검토가 필요한 추가 유동 가능 경로를 보여줍니다.'],
  ar3: ['A close review of the proposed bypass highlights both tie-in points and unresolved inputs. The assembly is not an approved design.', '제안된 우회 배관을 검토하며 두 접속부와 미확정 입력을 강조합니다. 이 설비는 승인된 설계가 아닙니다.'],
  ar4: ['The original pipeline and the proposed bypass remain traceable on a layered drawing. Original kept, change linked, review pending. Not an approved design.', '원래 배관과 제안된 우회 배관을 중첩 도면에서 추적할 수 있습니다. 원본 보존, 변경 연결, 검토 대기 상태이며 승인된 설계가 아닙니다.']
};
export const translations = [
  [title, '직접 따라갈 수 있는 경로'],
  [summary, '입체 플랜트가 제안된 우회 배관과 검토 범위를 분명하게 보여줍니다.'],
  ...Object.values(words)
];

export const css = `
.entry-P2{display:block;width:100%;height:auto;background:#f2f0e9;color:#173d42;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.entry-P2 .p2-title{font-size:29px;font-weight:750;letter-spacing:-.8px;fill:#173d42}
.entry-P2 .p2-sub{font-size:17px;fill:#536966}
.entry-P2 .p2-label{font-size:18px;font-weight:650;fill:#234c50}
.entry-P2 .p2-small{font-size:16px;fill:#536966}
.entry-P2 .p2-mono{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:16px;font-weight:600;letter-spacing:.5px;fill:#173d42}
.entry-P2 .p2-copper{fill:#a24c29}
.entry-P2 .p2-leader{fill:none;stroke:#81958d;stroke-width:1.5}
.entry-P2 .p2-grid{fill:none;stroke:#8fa49b;stroke-width:1;opacity:.16}
.entry-P2 .p2-shadow{fill:#193f43;opacity:.12}
.entry-P2 .p2-flow{fill:none;stroke:#eafff9;stroke-width:3;stroke-linecap:round;stroke-dasharray:9 40;opacity:.95}
.entry-P2 .p2-guide{fill:none;stroke:#73968e;stroke-width:2;stroke-dasharray:4 7}
.entry-P2 .p2-ring{fill:none;stroke:#b6633c;stroke-width:2;stroke-dasharray:5 5}
.entry-P2 .p2-outline{fill:none;stroke:#163f44;stroke-width:1.6;stroke-linejoin:round}
.entry-P2 .p2-route{stroke-linecap:round;stroke-linejoin:round;fill:none}
.entry-P2 .p2-rise{transform-box:fill-box;transform-origin:center}
.animating .entry-P2 .p2-rise{animation:P2-rise 1.1s cubic-bezier(.2,.7,.3,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-P2 .p2-appear{animation:P2-appear 1.3s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-P2 .p2-flow{animation:P2-flow 6s linear 1;animation-play-state:var(--motion-play,running)}
.animating .entry-P2 .p2-new{animation:P2-build 1.8s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-P2 .p2-ring{animation:P2-review 2.4s ease-in-out 2;animation-play-state:var(--motion-play,running)}
@keyframes P2-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes P2-appear{from{opacity:0}to{opacity:1}}
@keyframes P2-flow{from{stroke-dashoffset:98}to{stroke-dashoffset:0}}
@keyframes P2-build{from{opacity:0;stroke-dasharray:0 900}to{opacity:1;stroke-dasharray:900 0}}
@keyframes P2-review{0%,100%{opacity:1;stroke-width:2}50%{opacity:.5;stroke-width:3}}
@media(prefers-reduced-motion:reduce){.entry-P2 *{animation:none!important;transition:none!important}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const label = (key, x, y, cls='p2-label', extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${esc(words[key][0])}</text>`;
const text = (value, x, y, cls='p2-mono', extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${esc(value)}</text>`;
const baseRoute = 'M100 326 L211 262 M270 229 L320 200 L570 345';
const bypassRoute = 'M350 217 L350 172 L440 120 L590 207 L590 252 L500 304';

function definitions(u) {
  return `<defs>
    <linearGradient id="${u}-metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b7d0c4"/><stop offset=".45" stop-color="#6f9d92"/><stop offset="1" stop-color="#315e61"/></linearGradient>
    <linearGradient id="${u}-face" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e6eee3"/><stop offset="1" stop-color="#8fb2a4"/></linearGradient>
    <linearGradient id="${u}-copper" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#dc9a6d"/><stop offset="1" stop-color="#a34e2c"/></linearGradient>
    <pattern id="${u}-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><path d="M0 0 V8" stroke="#a34e2c" stroke-width="2" opacity=".2"/></pattern>
  </defs>`;
}

function floor(mode='normal') {
  const drawing = mode === 'drawing';
  return `<g class="p2-appear">
    ${drawing ? '<path d="M75 291 L371 120 L650 281 L354 452 Z" fill="#d2dacf" stroke="#a3b4a7"/><path d="M75 281 L371 110 L650 271 L354 442 Z" fill="#e4e7dc" stroke="#a3b4a7"/>' : ''}
    <path d="M75 271 L371 100 L650 261 L354 432 Z" fill="${drawing ? '#fafbf3' : '#e2e8dc'}" stroke="#c6d1c2" stroke-width="1.5"/>
    <g class="p2-grid">
      <path d="M124 299 L420 128 M174 328 L470 157 M224 357 L520 186 M274 386 L570 215 M324 415 L620 244"/>
      <path d="M124 243 L404 404 M174 214 L454 375 M224 185 L504 346 M274 156 L554 317 M324 127 L604 288"/>
    </g>
    <path d="M75 271 L75 281 L354 442 L650 271 L650 261 L354 432 Z" fill="#bfcdbd" opacity=".45"/>
  </g>`;
}

function pipe(d, color='base', u='', flow=false, extra='') {
  const copper = color === 'copper';
  const top = copper ? '#c87949' : '#447d79';
  return `<g class="p2-route ${extra}">
    <path d="${d}" stroke="#0e3035" stroke-width="20" opacity=".9"/>
    <path d="${d}" stroke="${copper ? '#9b492b' : '#285359'}" stroke-width="16" transform="translate(0 2)"/>
    <path d="${d}" stroke="${top}" stroke-width="13"/>
    <path d="${d}" stroke="${copper ? '#e9b287' : '#a6c7b9'}" stroke-width="3" transform="translate(0 -4)" opacity=".8"/>
    ${flow ? `<path d="${d}" class="p2-flow"/>` : ''}
  </g>`;
}

function flange(x,y,angle=30,copper=false) {
  return `<g transform="translate(${x} ${y}) rotate(${angle})"><rect x="-5" y="-15" width="10" height="30" rx="2" fill="${copper ? '#c98a61' : '#b4cbbd'}" stroke="#234c50" stroke-width="1.6"/><path d="M-1 -15 V15" stroke="#466967" stroke-width="2"/><circle cx="1" cy="-10" r="1.8" fill="#234c50"/><circle cx="1" cy="10" r="1.8" fill="#234c50"/></g>`;
}

function pump(u, exploded=false) {
  return `<g ${exploded ? 'transform="translate(-17 -42)"' : ''}><g class="p2-rise">
    <path d="M187 283 L245 317 L322 272 L264 238 Z" class="p2-shadow" transform="translate(0 10)"/>
    <path d="M184 276 L245 311 L323 266 L262 231 Z" fill="#cad6c8" stroke="#678a7e" stroke-width="1.5"/>
    <path d="M184 276 V286 L245 321 L323 276 V266 L245 311 Z" fill="#94b0a0" stroke="#678a7e" stroke-width="1.5"/>
    <path d="M241 280 L262 292 L291 275 L270 263 Z" fill="#3e6a65"/>
    <path d="M240 239 L282 215 Q304 218 308 239 L266 264 Z" fill="url(#${u}-metal)" stroke="#234c50" stroke-width="2"/>
    <ellipse cx="283" cy="228" rx="24" ry="29" transform="rotate(30 283 228)" fill="#5f8c80" stroke="#234c50" stroke-width="2"/>
    <path d="M266 211 L279 219 M272 206 L286 214 M280 203 L293 211 M258 218 L272 226" stroke="#b5cdbb" stroke-width="3"/>
    <path d="M221 220 L247 205 Q278 214 280 242 L254 259 Z" fill="url(#${u}-metal)" stroke="#234c50" stroke-width="2"/>
    <ellipse cx="237" cy="245" rx="29" ry="34" transform="rotate(30 237 245)" fill="url(#${u}-face)" stroke="#234c50" stroke-width="2.5"/>
    <ellipse cx="237" cy="245" rx="19" ry="23" transform="rotate(30 237 245)" fill="#e8eee3" stroke="#648d80" stroke-width="1.5"/>
    <path d="M226 250 L246 231 L248 253 Z" fill="#2b6b69"/>
    <circle cx="218" cy="233" r="2.4" fill="#476f67"/><circle cx="255" cy="255" r="2.4" fill="#476f67"/>
    <path d="M222 274 L218 283 L237 294 L245 277" fill="#4c7c71" stroke="#234c50" stroke-width="1.7"/>
    ${flange(205,265,-30)}${flange(280,223,-30)}
  </g></g>`;
}

function valve(u, exploded=false, accent=false) {
  return `<g ${exploded ? 'transform="translate(25 -49)"' : ''}><g class="p2-rise">
    <path d="M399 247 L422 247 L427 262 L447 263 L453 279 L427 270 L406 263 Z" fill="${accent ? '#c78658' : '#a6c0ae'}" stroke="#234c50" stroke-width="2"/>
    <path d="M399 247 L427 262 L422 280 Z M427 262 L452 260 L453 279 Z" fill="${accent ? '#deb08b' : '#d7e2cf'}" stroke="#234c50" stroke-width="2" stroke-linejoin="round"/>
    <path d="M427 260 V218" stroke="#244f50" stroke-width="6"/>
    <path d="M425 255 V220" stroke="#c9d8c7" stroke-width="2"/>
    <path d="M414 231 L426 224 L439 231 L427 239 Z" fill="#789c86" stroke="#234c50" stroke-width="1.5"/>
    <ellipse cx="427" cy="213" rx="24" ry="12" fill="none" stroke="${accent ? '#a95831' : '#214f50'}" stroke-width="5"/>
    <path d="M403 213 H451 M427 201 V225" stroke="${accent ? '#a95831' : '#214f50'}" stroke-width="3"/>
    ${flange(392,242,30)}${flange(463,283,30)}
  </g></g>`;
}

function supports(bypass=false) {
  return `<g stroke="#638879" stroke-width="2" fill="#b8cbb6">
    <path d="M313 211 V248 L320 252 L327 248 V215"/><path d="M302 250 L320 260 L338 250 L320 240 Z"/>
    <path d="M548 343 V367 L555 371 L562 367 V347"/><path d="M538 369 L555 379 L572 369 L555 359 Z"/>
    ${bypass ? '<path d="M434 137 V170 L440 174 L446 170 V137"/><path d="M424 172 L440 181 L456 172 L440 163 Z"/><path d="M584 220 V274 L590 278 L596 274 V220"/><path d="M574 276 L590 285 L606 276 L590 267 Z"/>' : ''}
  </g>`;
}

function flowArrows(copper=false) {
  if (copper) return `<g fill="#fff0dc" stroke="#a75630" stroke-width="1"><path d="M385 151 L396 142 L392 155 L390 149 Z"/><path d="M490 147 L505 153 L492 156 L497 151 Z"/><path d="M555 278 L543 288 L547 275 L549 281 Z"/></g>`;
  return `<g fill="#effff4" stroke="#2c6864" stroke-width="1"><path d="M143 299 L158 290 L152 304 L151 297 Z"/><path d="M359 219 L373 227 L358 230 L365 225 Z"/><path d="M526 313 L540 322 L525 324 L532 320 Z"/></g>`;
}

function bypass(u, opacity=1) {
  return `<g opacity="${opacity}" class="p2-appear">
    <path d="M350 230 L440 178 L590 265 L500 317" fill="none" stroke="#5a5842" stroke-width="15" stroke-linejoin="round" opacity=".08"/>
    ${pipe(bypassRoute,'copper',u,true,'p2-new')}
    ${flange(350,193,90,true)}${flange(574,262,-30,true)}
    <circle cx="350" cy="217" r="6" fill="#f5d4ad" stroke="#85513c" stroke-width="2"/>
    <circle cx="500" cy="304" r="6" fill="#f5d4ad" stroke="#85513c" stroke-width="2"/>
    ${flowArrows(true)}
  </g>`;
}

function assembly(u, options={}) {
  const {add=false, exploded=false, faded=false, flow=true} = options;
  return `<g ${faded ? 'opacity=".3"' : ''}>
    ${supports(add)}
    <path d="${baseRoute}" stroke="#234c50" stroke-width="24" fill="none" opacity=".09" transform="translate(0 17)"/>
    ${pipe(baseRoute,'base',u,flow)}
    ${flange(119,315,-30)}${flange(550,333,30)}
    ${pump(u,exploded)}${valve(u,exploded)}
    ${flow ? flowArrows() : ''}
  </g>`;
}

function header(phase) {
  const key = ['context','structure','explore','review','outcome'][phase];
  return `${label(key,32,42,'p2-title')}${label(key+'Sub',33,70,'p2-sub')}`;
}

function port(x,y,id,tx,ty) {
  return `<g class="p2-appear"><circle cx="${x}" cy="${y}" r="11" fill="#eef5e9" stroke="#286b66" stroke-width="2"/><circle cx="${x}" cy="${y}" r="4" fill="#286b66"/><path d="M${x} ${y} L${tx} ${ty-7}" class="p2-leader"/>${text(id,tx,ty)}</g>`;
}

function context(u) {
  return `${floor()}${assembly(u)}
    <path d="M132 194 H181 L215 224" class="p2-leader"/>${label('pump',90,185)}
    <path d="M482 171 H456 L440 199" class="p2-leader"/>${label('valve',481,166)}
    ${label('inlet',57,356)}${label('outlet',578,370)}
    <g transform="translate(34 402)"><path d="M0 0 H39" stroke="#397773" stroke-width="7" stroke-linecap="round"/>${label('base',52,6)}</g>`;
}

function structure(u) {
  return `${floor()}<g opacity=".55">${supports()}${pipe(baseRoute)}</g>
    <path d="M205 265 L188 223 M280 223 L263 181 M392 242 L417 193 M463 283 L488 234" class="p2-guide"/>
    ${pump(u,true)}${valve(u,true)}
    ${port(188,223,'P-101:IN',60,237)}${port(263,181,'P-101:OUT',184,113)}
    ${port(417,193,'V-201:IN',472,158)}${port(488,234,'V-201:OUT',531,230)}
    <path d="M209 282 L314 343 L475 250" class="p2-guide"/>
    <circle cx="314" cy="343" r="8" fill="#2c746e"/><path d="M314 351 V377" class="p2-leader"/>
    ${label('graph',314,398,'p2-label','text-anchor="middle"')}
    ${label('ports',34,429,'p2-small')}`;
}

function explore(u,choice) {
  const add = choice === 'alternate';
  return `${floor()}${assembly(u,{add,flow:!add})}${add ? bypass(u) : ''}
    ${add ? `<path d="M457 109 H568" stroke="#b9673c" stroke-width="1.5"/>${label('proposed',470,98,'p2-label p2-copper')}<path d="M471 373 L503 340" class="p2-leader"/>${label('calculation',333,398,'p2-label p2-copper')}` : `${label('pump',117,208)}${label('valve',461,209)}${label('base',407,385)}`}
    <g transform="translate(34 395)"><circle cx="10" cy="8" r="8" fill="${add ? '#b9693f' : '#31736d'}"/>${label(add?'alternate':'base',29,14)}</g>`;
}

function review(u) {
  return `${floor()}${assembly(u,{add:true,faded:true,flow:false})}${bypass(u)}
    <path d="M350 217 L350 172 L440 120 L590 207 L590 252 L500 304" fill="none" stroke="url(#${u}-hatch)" stroke-width="40" opacity=".8"/>
    <g class="p2-appear"><circle cx="350" cy="217" r="27" class="p2-ring"/><circle cx="500" cy="304" r="27" class="p2-ring"/>
    <path d="M326 209 L271 176 H123 M479 320 L453 366 H330" stroke="#a85d38" stroke-width="1.5" fill="none"/>
    ${label('tieIns',56,163,'p2-label p2-copper')}${label('inputs',303,391,'p2-label p2-copper')}
    <circle cx="285" cy="385" r="10" fill="#b56b43"/>${text('?',285,391,'p2-label','text-anchor="middle" style="fill:#fff4df"')}
    </g><path d="M37 416 H683" stroke="#d0b7a0" stroke-width="1"/>
    ${label('notApproved',360,442,'p2-small','text-anchor="middle"')}`;
}

function outcome(u) {
  return `<g transform="translate(0 -2)">${floor('drawing')}</g>
    <g transform="translate(32 -12) scale(.9)">
      <path d="${baseRoute}" stroke="#779588" stroke-width="2" stroke-dasharray="5 5" fill="none" transform="translate(-18 35)"/>
      ${assembly(u,{add:true,flow:false})}${bypass(u)}
    </g>
    <path d="M487 112 H659 V175" fill="none" stroke="#b76c43" stroke-width="1.4"/>
    ${label('pending',503,103,'p2-label p2-copper')}
    <g transform="translate(42 386)"><circle cx="0" cy="-5" r="5" fill="#467c71"/>${label('original',12,0)}
      <circle cx="227" cy="-5" r="5" fill="#b56b43"/>${label('change',239,0)}
      <circle cx="442" cy="-5" r="6" fill="none" stroke="#ad653e" stroke-width="2"/>${label('pending',455,0,'p2-label p2-copper')}</g>
    <path d="M34 406 H686" stroke="#a9b9a8"/>
    ${label('notApproved',360,433,'p2-label','text-anchor="middle"')}`;
}

export function render(phase = 0, choice = 'base', uid = 'P2') {
  const p = Number.isInteger(phase) ? Math.max(0,Math.min(4,phase)) : 0;
  const u = `${String(uid).replace(/[^a-zA-Z0-9_-]/g,'-')}-P2`;
  const chosen = choice === 'alternate' ? 'alternate' : 'base';
  const aria = p === 2 ? `ar2${chosen}` : `ar${p}`;
  const artwork = [context,structure,explore,review,outcome][p](u,chosen);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${esc(words[aria][0])}" class="entry-P2">
    ${definitions(u)}<rect width="720" height="460" fill="#f2f0e9"/>
    ${header(p)}${artwork}
    ${p < 3 ? label('illustrative',686,445,'p2-small','text-anchor="end"') : ''}
  </svg>`;
}
