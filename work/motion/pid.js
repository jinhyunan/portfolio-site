export const id = 'FPID';
export const title = 'A route, held in register';
export const summary = 'One connection model keeps the source, identified ports and proposed change aligned.';

const words = {
  original: ['Original', '원본'],
  candidate: ['Candidate', '후보안'],
  pump: ['Pump A', '펌프 A'],
  valve: ['Valve B', '밸브 B'],
  retained: ['Source kept', '원본 보존'],
  identity: ['Same identity', '동일한 식별자'],
  base: ['Base route', '기본 경로'],
  bypass: ['Bypass proposed', '우회 연결 제안'],
  one: ['1 path', '경로 1개'],
  two: ['2 paths', '경로 2개'],
  calculation: ['Calculation open', '계산 미완료'],
  joins: ['Check both joins', '두 접속부 검토'],
  routeCheck: ['Route check', '경로 검토'],
  inputs: ['Inputs open', '입력 미확정'],
  review: ['Human review open', '사람의 검토 대기'],
  approval: ['Approval open', '승인 대기'],
  ar0: [
    'Illustrative source: Pump A and Valve B share one connected route. The physical relief resolves onto the drawing axis; the original has no proposed bypass.',
    '예시 원본: 펌프 A와 밸브 B가 하나의 경로로 연결됩니다. 입체 설비가 도면 축에 정렬되며, 원본에는 제안된 우회 연결이 없습니다.'
  ],
  ar1: [
    'Source connection inspection: the actual outlet of Pump A, A.OUT, and inlet of Valve B, B.IN, project vertically onto enlarged rings with the same identities. This is connectivity, not calculated flow.',
    '원본 연결 검사: 펌프 A의 실제 출구 A.OUT과 밸브 B의 입구 B.IN이 수직으로 투영되어 같은 식별자의 확대된 포트 고리에 정렬됩니다. 계산된 유량이 아닌 연결 관계를 보여 줍니다.'
  ],
  ar2base: [
    'Base route selected: one depicted path passes through Pump A and Valve B. No branch is added. Calculation remains open.',
    '기본 경로 선택: 표시된 경로 하나가 펌프 A와 밸브 B를 통과합니다. 분기는 추가되지 않았으며 계산은 미완료입니다.'
  ],
  ar2alternate: [
    'Bypass proposed: an additional branch joins at T1 after Pump A and before Valve B, then at T2 after Valve B. The original valve route remains. Both depicted paths require calculation and review.',
    '우회 연결 제안: 펌프 A 뒤이자 밸브 B 앞인 T1에서 분기하여 밸브 B 뒤의 T2로 연결됩니다. 원래 밸브 경로는 유지됩니다. 표시된 두 경로 모두 계산과 검토가 필요합니다.'
  ],
  ar3base: [
    'Base route review: the same pump and valve remain connected with no bypass. Diameter and pressure loss are unknown. Human review remains open.',
    '기본 경로 검토: 같은 펌프와 밸브가 우회 연결 없이 연결되어 있습니다. 관경과 압력 손실은 미확정이며 사람의 검토가 남아 있습니다.'
  ],
  ar3alternate: [
    'Proposed bypass review: the same T1 and T2 tie-ins are inspected, both outside the pump and on opposite sides of Valve B. Original ink is retained. Diameter and pressure loss are unknown; human review remains open.',
    '제안 우회 연결 검토: 펌프 외부이자 밸브 B 양쪽에 있는 동일한 접속부 T1과 T2를 검토합니다. 원본 선은 유지됩니다. 관경과 압력 손실은 미확정이며 사람의 검토가 남아 있습니다.'
  ],
  ar4base: [
    'Registered outcome: the immutable Original and separate Candidate both retain the single pump-and-valve route with the same equipment and ports. No bypass is present. Approval remains open.',
    '정렬된 결과: 변경되지 않은 원본과 별도 후보안 모두 같은 기기와 포트로 연결된 펌프·밸브 경로 하나를 유지합니다. 우회 연결은 없으며 승인은 대기 중입니다.'
  ],
  ar4alternate: [
    'Registered outcome: the immutable Original has only the pump-and-valve route. The separate Candidate adds the T1-to-T2 bypass around Valve B while preserving equipment and port identities. It remains an unapproved proposal.',
    '정렬된 결과: 변경되지 않은 원본에는 펌프·밸브 경로만 있습니다. 별도 후보안에는 기기와 포트 식별자를 유지하면서 밸브 B를 우회하는 T1–T2 연결을 추가했습니다. 아직 승인되지 않은 제안입니다.'
  ]
};

export const translations = [
  [title, '경로와 식별자를 함께 정렬하다'],
  [summary, '하나의 연결 모델로 원본, 식별된 포트, 제안된 변경을 함께 정렬합니다.'],
  ...Object.values(words)
];

export const css = `
.entry-FPID{display:block;width:100%;height:auto;background:#102a32;color:#eff3df;font-family:Inter,"Noto Sans KR",Arial,sans-serif;isolation:isolate}
.entry-FPID text{fill:#eff3df;font-size:28px;font-weight:560;letter-spacing:-.5px}
.entry-FPID .FPID-code{font:500 23px ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.25px;fill:#b9ddd0}
.entry-FPID .FPID-question{font:500 35px ui-monospace,SFMono-Regular,Consolas,monospace;fill:#f1bc8a}
.entry-FPID .FPID-small{font-size:23px;fill:#b2c5be}
.entry-FPID .FPID-warm{fill:#f1bc8a}
.entry-FPID .FPID-muted{fill:#b2c5be}
.entry-FPID .FPID-ink{fill:none;stroke:#b9ddd0;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.entry-FPID .FPID-axis{fill:none;stroke:#45676b;stroke-width:1.5;stroke-dasharray:4 9}
.entry-FPID .FPID-guide{fill:none;stroke:#789a93;stroke-width:1.7;stroke-dasharray:5 7}
.entry-FPID .FPID-register-mark{fill:none;stroke:#789a93;stroke-width:1.6}
.entry-FPID .FPID-port{fill:#102a32;stroke:#b9ddd0;stroke-width:3}
.entry-FPID .FPID-change{fill:none;stroke:#f1a17a;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
.entry-FPID .FPID-join{fill:#102a32;stroke:#f1a17a;stroke-width:3}
.entry-FPID .FPID-review-contour{fill:#f1a17a;fill-opacity:.025;stroke:#d9a17e;stroke-width:2;stroke-dasharray:8 8}
.entry-FPID .FPID-review-ring{fill:none;stroke:#f1bc8a;stroke-width:2.5;stroke-dasharray:6 6}
.entry-FPID .FPID-separate{fill:#1a363d;stroke:#4b6d70;stroke-width:1.5}
.entry-FPID .FPID-ground{fill:#061e27;opacity:.8}
.entry-FPID .FPID-detail{fill:none;stroke:#56847d;stroke-width:2}
.animating .entry-FPID .FPID-trace{stroke-dasharray:100;animation:FPID-ink 1.8s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-relief{animation:FPID-relief 2.1s cubic-bezier(.2,.7,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-project{stroke-dasharray:100;animation:FPID-ink 1.3s .5s both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-inspect{animation:FPID-inspect 2.3s .5s cubic-bezier(.2,.7,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-redline{stroke-dasharray:100;animation:FPID-ink 2.1s .35s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-review-ring{animation:FPID-focus 2.3s .35s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-lift-check{animation:FPID-check 1.4s 1.1s cubic-bezier(.2,.7,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-FPID .FPID-register-candidate{animation:FPID-register 2.4s cubic-bezier(.2,.7,.2,1) both;animation-play-state:var(--motion-play,running)}
@keyframes FPID-ink{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}
@keyframes FPID-relief{from{opacity:.25;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
@keyframes FPID-inspect{from{opacity:0;transform:translateY(-42px)}to{opacity:1;transform:translateY(0)}}
@keyframes FPID-focus{0%{opacity:0;stroke-width:1}45%{opacity:1;stroke-width:5}100%{opacity:1;stroke-width:2.5}}
@keyframes FPID-check{from{opacity:0;transform:translateY(-28px)}to{opacity:1;transform:translateY(0)}}
@keyframes FPID-register{from{opacity:.4;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
@media(prefers-reduced-motion:reduce){.entry-FPID *{animation:none!important;transition:none!important;stroke-dashoffset:0!important}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (value, x, y, cls = '', anchor = 'start') => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${esc(value)}</text>`;
const label = (key, x, y, cls = '', anchor = 'start') => text(words[key][0], x, y, cls, anchor);
const path = (d, cls, extra = '') => `<path d="${d}" class="${cls}" ${extra}/>`;

// Every record uses these same equipment, port and tie-in coordinates.
// Both bypass tie-ins are outside Pump A and on opposite sides of Valve B.
const model = Object.freeze({start:64, end:656, pump:170, radius:46, valve:456, halfValve:28, t1:300, t2:590});
const ports = Object.freeze({aIn:124, aOut:216, bIn:428, bOut:484});
const backbone = y => `M${model.start} ${y}H${ports.aIn}M${ports.aOut} ${y}H${ports.bIn}M${ports.bOut} ${y}H${model.end}`;
const branch = (y, height) => `M${model.t1} ${y}V${y-height}H${model.t2}V${y}`;

function register(x, y) {
  return path(`M${x-10} ${y}H${x+10}M${x} ${y-10}V${y+10}`, 'FPID-register-mark');
}

function port(x, y, r = 6) {
  return `<circle cx="${x}" cy="${y}" r="${r}" class="FPID-port"/><circle cx="${x}" cy="${y}" r="${r > 10 ? 5 : 2}" fill="#b9ddd0"/>`;
}

function join(x, y) {
  return `<rect x="${x-7}" y="${y-7}" width="14" height="14" class="FPID-join"/><path d="M${x-3} ${y}H${x+3}M${x} ${y-3}V${y+3}" stroke="#f1a17a" stroke-width="1.5"/>`;
}

function equipment(y, physical, u) {
  const x = model.pump;
  const v = model.valve;
  return `<g class="${physical ? 'FPID-relief' : ''}">
    ${physical ? `<ellipse cx="185" cy="${y+73}" rx="85" ry="13" class="FPID-ground"/>
      <path d="M${x-29} ${y+39}L${x+42} ${y+39}L${x+60} ${y+68}H${x-43}Z" fill="#2d5151" stroke="#608b7e" stroke-width="2"/>
      <path d="M${x} ${y-46}l21-13A46 46 0 0 1 ${x+21} ${y+33}L${x} ${y+46}Z" fill="url(#${u}-metal)" stroke="#608b7e" stroke-width="2"/>
      <path d="M${v-28} ${y-21}l12-10 56 42-12 10Z M${v+28} ${y-21}l12-10v42l-12 10Z" fill="#456d62"/>
      <path d="M${ports.aIn-5} ${y-14}V${y+14}M${ports.aOut+5} ${y-14}V${y+14}M${ports.bIn-5} ${y-14}V${y+14}M${ports.bOut+5} ${y-14}V${y+14}" stroke="#9abbaa" stroke-width="5"/>` : ''}
    <circle cx="${x}" cy="${y}" r="${model.radius}" fill="${physical ? `url(#${u}-metal)` : '#17373d'}" stroke="#b9ddd0" stroke-width="3.5"/>
    <path d="M${x-13} ${y-25}L${x+27} ${y}L${x-13} ${y+25}Z" fill="#c8e6d3"/>
    ${physical ? `<circle cx="${x}" cy="${y}" r="37" class="FPID-detail"/>` : path(`M${x-22} ${y+40}l-10 17h64l-10-17`, 'FPID-detail')}
    <path d="M${v-28} ${y-21}L${v+28} ${y+21}V${y-21}L${v-28} ${y+21}Z" fill="#17373d" stroke="#b9ddd0" stroke-width="3.5"/>
    <path d="M${v} ${y}V${y-49}" class="FPID-ink"/>
    ${physical ? `<ellipse cx="${v}" cy="${y-54}" rx="30" ry="10" fill="#17373d" stroke="#b9ddd0" stroke-width="3"/><path d="M${v-29} ${y-54}H${v+29}M${v} ${y-64}V${y-44}" class="FPID-ink"/>` : path(`M${v-15} ${y-49}H${v+15}`, 'FPID-ink')}
  </g>`;
}

function route(y, {alternate = false, physical = false, height = 118, showPorts = false, record = 'candidate'} = {}, u) {
  return `<g data-record="${record}" data-topology="${alternate ? 'valve-bypass' : 'base'}">
    ${path(`M44 ${y}H676`, 'FPID-axis')}
    ${physical ? `<path d="${backbone(y)}" fill="none" stroke="#2c5657" stroke-width="16" stroke-linecap="round"/>` : ''}
    ${path(backbone(y), 'FPID-ink FPID-trace', 'pathLength="100"')}
    ${equipment(y, physical, u)}
    ${showPorts ? Object.values(ports).map(x => port(x, y)).join('') : ''}
    ${alternate ? `<g data-proposed="bypass">${path(branch(y, height), 'FPID-change FPID-redline', 'pathLength="100"')}${join(model.t1,y)}${join(model.t2,y)}</g>` : ''}
  </g>`;
}

function context(u) {
  return `${label('original',44,58)}${register(44,88)}${register(676,88)}
    ${path('M170 100V332M456 100V332', 'FPID-axis')}
    ${route(244,{physical:true,record:'original'},u)}
    ${label('pump',170,365,'','middle')}${label('valve',456,365,'','middle')}
    ${register(44,394)}${register(676,394)}${label('retained',44,435,'FPID-small')}`;
}

function structure(u) {
  return `${label('original',44,48)}
    ${route(144,{showPorts:true,record:'original'},u)}
    ${label('pump',170,80,'','middle')}${label('valve',456,80,'','middle')}
    ${path(`M${ports.aOut} 153V310M${ports.bIn} 153V310`, 'FPID-guide FPID-project', 'pathLength="100"')}
    <g class="FPID-inspect">
      ${path(`M${ports.aOut} 337H${ports.bIn}`, 'FPID-ink')}
      ${port(ports.aOut,337,27)}${port(ports.bIn,337,27)}
      ${path(`M${ports.aOut-39} 320V354M${ports.bIn+39} 320V354`, 'FPID-detail')}
      ${text('A.OUT',ports.aOut,396,'','middle')}${text('B.IN',ports.bIn,396,'','middle')}
    </g>${label('identity',360,444,'FPID-small','middle')}`;
}

function explore(u, alternate) {
  const y = 282;
  return `${label(alternate ? 'bypass' : 'base',445,alternate ? 104 : 147,alternate ? 'FPID-warm' : '', 'middle')}
    ${alternate ? `${register(280,126)}${register(610,126)}` : path('M360 169H530', 'FPID-register-mark')}
    ${route(y,{alternate,height:140},u)}
    ${alternate ? `${text('T1',model.t1,330,'FPID-code','middle')}${text('T2',model.t2,330,'FPID-code','middle')}` : ''}
    ${label('pump',170,368,'','middle')}${label('valve',456,368,'','middle')}
    ${path('M44 394H676', 'FPID-register-mark')}
    ${label(alternate ? 'two' : 'one',44,436)}${label('calculation',676,436,'FPID-small','end')}`;
}

function review(u, alternate) {
  const y = 232;
  const contour = alternate
    ? 'M277 101Q267 83 289 80H605Q625 80 615 101Q632 111 619 128V223Q634 241 615 253Q612 269 594 258H294Q275 269 273 252Q256 240 272 225V127Q255 112 277 101Z'
    : 'M413 173Q401 157 424 152H488Q511 157 499 173Q517 188 503 202V237Q515 255 498 265H413Q396 255 409 237V201Q394 187 413 173Z';
  return `${label(alternate ? 'joins' : 'routeCheck',445,alternate ? 48 : 102, 'FPID-warm','middle')}
    ${path(contour, 'FPID-review-contour')}
    ${route(y,{alternate,height:118},u)}
    ${[alternate ? model.t1 : ports.bIn, alternate ? model.t2 : ports.bOut].map(x => `<circle cx="${x}" cy="${y}" r="23" class="FPID-review-ring"/>`).join('')}
    ${label('pump',170,313,'','middle')}${label('valve',456,313,'','middle')}
    <g class="FPID-lift-check">
      ${path('M44 345H676V414H44Z','FPID-separate')}
      ${label('inputs',64,387,'FPID-small')}${text('D = ?',320,389,'FPID-question','middle')}${text('Δp = ?',552,389,'FPID-question','middle')}
    </g>${label('review',360,449,'FPID-small FPID-warm','middle')}`;
}

function outcome(u, alternate) {
  return `${label('pump',170,40,'','middle')}${label('valve',456,40,'','middle')}
    ${label('original',44,89)}${register(44,111)}${register(676,111)}
    ${route(158,{showPorts:true,record:'original'},u)}
    ${path(`M${ports.aOut} 173V225M${ports.aOut} 283V336M${ports.bIn} 173V225M${ports.bIn} 283V336`, 'FPID-guide')}
    <g class="FPID-register-candidate">
      ${label('candidate',44,272)}${label(alternate ? 'bypass' : 'base',445,251,alternate ? 'FPID-small FPID-warm' : 'FPID-small','middle')}
      ${route(355,{alternate,height:82,showPorts:true,record:'candidate'},u)}
      ${register(44,385)}${register(676,385)}
    </g>
    ${label(alternate ? 'two' : 'one',44,440)}${label('approval',676,440,'FPID-small FPID-warm','end')}`;
}

export function render(phase = 0, choice = 'base', uid = 'FPID') {
  const p = Math.min(4,Math.max(0,Math.trunc(Number(phase)) || 0));
  const alternate = choice === 'alternate';
  const u = `${String(uid).replace(/[^A-Za-z0-9_-]/g,'_')}-FPID`;
  const ariaKey = p < 2 ? `ar${p}` : `ar${p}${alternate ? 'alternate' : 'base'}`;
  const scene = [context,structure,explore,review,outcome][p](u,alternate);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-FPID" viewBox="0 0 720 460" role="img" aria-label="${esc(words[ariaKey][0])}">
    <defs>
      <linearGradient id="${u}-metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#89ac98"/><stop offset=".55" stop-color="#456d62"/><stop offset="1" stop-color="#244b4f"/></linearGradient>
      <pattern id="${u}-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#83a79c" stroke-width=".6" opacity=".09"/></pattern>
    </defs>
    <rect width="720" height="460" fill="#102a32"/><rect width="720" height="460" fill="url(#${u}-grid)"/>
    ${scene}
  </svg>`;
}
