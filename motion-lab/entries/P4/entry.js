export const id = 'P4';
export const title = 'Port choreography';
export const summary = 'Follow an equipment outline into its ports, then see how one bypass changes the review.';

const copy = {
  context: 'An outline becomes a connection.',
  structure: 'Zoom into the handshake.',
  explore: 'One branch changes the question.',
  review: 'Follow the change back to its source.',
  outcome: 'Connected. Still accountable.',
};

const descriptions = [
  'Illustrative P&ID: pump, valve and vessel silhouettes connect through highlighted equipment ports.',
  'Illustrative P&ID: a pump outlet is magnified into an identified port and connected to a valve inlet.',
  'Illustrative P&ID: the base route passes through Valve B with a continuous highlighted connection.',
  'Illustrative P&ID: an added bypass connects two stable ports around Valve B and introduces another path to review.',
  'Illustrative P&ID review: the original route remains traceable; calculation and approval are still pending.',
  'Illustrative P&ID review: the added bypass is highlighted against the original route; calculation and approval are still pending.',
  'Illustrative P&ID outcome: source drawing, port identities and proposed route are traceable; human approval is required.',
];

export const translations = [
  [title, '포트의 안무'],
  [summary, '설비의 윤곽에서 포트까지 따라가며 우회 연결 하나가 검토 대상을 어떻게 바꾸는지 봅니다.'],
  [copy.context, '윤곽이 연결로 바뀝니다.'],
  [copy.structure, '연결의 접점으로 확대합니다.'],
  [copy.explore, '분기 하나가 검토를 바꿉니다.'],
  [copy.review, '변경을 원본까지 추적합니다.'],
  [copy.outcome, '연결되어도, 검토는 남습니다.'],
  ['PORT CHOREOGRAPHY', '포트의 안무'],
  ['Illustrative only', '설명용 예시'],
  ['Pump A', '펌프 A'],
  ['Valve B', '밸브 B'],
  ['Vessel', '용기'],
  ['Equipment', '설비'],
  ['Port identity', '포트 식별자'],
  ['Connection', '연결'],
  ['Same identity. Closer view.', '확대해도 식별자는 같습니다.'],
  ['Outlet', '출구'],
  ['Inlet', '입구'],
  ['Stable identities', '유지되는 식별자'],
  ['Base route', '기본 경로'],
  ['Added bypass', '추가한 우회 연결'],
  ['One route to review', '검토할 경로 하나'],
  ['Another path to calculate', '계산할 경로가 추가됩니다'],
  ['Original route', '원래 경로'],
  ['Proposed route', '제안 경로'],
  ['Change retained', '변경 이력 보존'],
  ['Source retained', '원본 보존'],
  ['Calculation pending', '계산 대기'],
  ['Approval pending', '승인 대기'],
  ['Source', '원본'],
  ['Ports', '포트'],
  ['Change', '변경'],
  ['Traceable candidate', '추적 가능한 후보안'],
  ['Human approval required', '사람의 승인이 필요합니다'],
  [descriptions[0], '설명용 P&ID: 펌프, 밸브, 용기의 윤곽이 강조된 설비 포트를 통해 연결됩니다.'],
  [descriptions[1], '설명용 P&ID: 펌프 출구를 식별된 포트로 확대하고 밸브 입구와 연결합니다.'],
  [descriptions[2], '설명용 P&ID: 기본 경로가 밸브 B를 통과하며 연속된 연결로 강조됩니다.'],
  [descriptions[3], '설명용 P&ID: 추가한 우회 연결은 밸브 B 양쪽의 고정된 포트를 연결하며 검토할 경로를 추가합니다.'],
  [descriptions[4], '설명용 P&ID 검토: 원래 경로는 추적 가능하게 유지되며 계산과 승인은 대기 중입니다.'],
  [descriptions[5], '설명용 P&ID 검토: 추가한 우회 연결을 원래 경로와 비교하여 강조하며 계산과 승인은 대기 중입니다.'],
  [descriptions[6], '설명용 P&ID 결과: 원본 도면, 포트 식별자, 제안 경로를 추적할 수 있으며 사람의 승인이 필요합니다.'],
];

export const css = `
.entry-P4 { width:100%; height:auto; display:block; background:#111e2a; color:#f4f0e7; font-family:Inter,Arial,sans-serif; }
.entry-P4 text { fill:#f4f0e7; }
.entry-P4 .eyebrow { font-size:16px; font-weight:650; letter-spacing:2.5px; fill:#92b5b8; }
.entry-P4 .heading { font-size:29px; font-weight:550; letter-spacing:-.9px; }
.entry-P4 .label { font-size:20px; font-weight:500; }
.entry-P4 .small { font-size:17px; font-weight:500; }
.entry-P4 .code { font-family:ui-monospace,SFMono-Regular,monospace; font-size:20px; letter-spacing:.5px; }
.entry-P4 .muted { fill:#9cabb6; }
.entry-P4 .mint-text { fill:#a2e8cf; }
.entry-P4 .amber-text { fill:#f6b46f; }
.entry-P4 .outline { fill:none; stroke:#7a929e; stroke-width:2; }
.entry-P4 .construction { fill:none; stroke:#45606d; stroke-width:1; }
.entry-P4 .pipe { fill:none; stroke:#52717d; stroke-width:9; stroke-linejoin:round; stroke-linecap:round; }
.entry-P4 .live { fill:none; stroke:#a2e8cf; stroke-width:4; stroke-linejoin:round; stroke-linecap:round; }
.entry-P4 .proposed { fill:none; stroke:#f6b46f; stroke-width:4; stroke-linejoin:round; stroke-linecap:round; }
.entry-P4 .flow { fill:none; stroke:#f4f0e7; stroke-width:4; stroke-dasharray:2 25; stroke-linecap:round; }
.entry-P4 .port-ring { fill:#111e2a; stroke:#a2e8cf; stroke-width:3; transform-box:fill-box; transform-origin:center; }
.entry-P4 .port-core { fill:#a2e8cf; }
.entry-P4 .amber { stroke:#f6b46f; }
.entry-P4 .amber-core { fill:#f6b46f; }
.entry-P4 .wire { fill:none; stroke:#a2e8cf; stroke-width:2; }
.entry-P4 .paper { fill:#182b37; stroke:#7a929e; stroke-width:2; }
.entry-P4 .lift { transform-box:fill-box; transform-origin:center; }
.animating .entry-P4 .flow { animation:P4-conduct 2s linear 3; animation-play-state:var(--motion-play,running); }
.animating .entry-P4 .draw { animation:P4-draw 1.5s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-P4 .port-ring { animation:P4-port 1.3s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-P4 .lift { animation:P4-zoom 1.2s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P4 .review-mark { animation:P4-review 1.5s ease-out both; animation-play-state:var(--motion-play,running); }
@keyframes P4-conduct { from { stroke-dashoffset:108; } to { stroke-dashoffset:0; } }
@keyframes P4-draw { from { stroke-dasharray:1; stroke-dashoffset:1; opacity:.25; } to { stroke-dasharray:1; stroke-dashoffset:0; opacity:1; } }
@keyframes P4-port { 0% { transform:scale(.55); opacity:.2; } 65% { transform:scale(1.12); } 100% { transform:scale(1); opacity:1; } }
@keyframes P4-zoom { from { transform:scale(.88); opacity:.25; } to { transform:scale(1); opacity:1; } }
@keyframes P4-review { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
@media(prefers-reduced-motion:reduce) {
  .entry-P4 *, .animating .entry-P4 * { animation:none!important; transition:none!important; }
}
`;

const label = (x, y, text, classes = 'label', anchor = 'middle') => `<text x="${x}" y="${y}" class="${classes}" text-anchor="${anchor}">${text}</text>`;
const port = (x, y, amber = false, radius = 10) => `<circle cx="${x}" cy="${y}" r="${radius + 8}" fill="none" stroke="${amber ? '#f6b46f' : '#a2e8cf'}" opacity=".15" stroke-width="8"/><circle class="port-ring${amber ? ' amber' : ''}" cx="${x}" cy="${y}" r="${radius}"/><circle class="${amber ? 'amber-core' : 'port-core'}" cx="${x}" cy="${y}" r="3"/>`;
const pump = (x, y, r = 40) => `<g><path d="M${x - r * .7} ${y + r + 14} H${x + r * .7} L${x + r * .4} ${y + r * .8} H${x - r * .4}Z" fill="#263e49"/><circle cx="${x}" cy="${y}" r="${r}" fill="#1b3440" stroke="#a2e8cf" stroke-width="2.5"/><path d="M${x - r * .28} ${y - r * .5} L${x + r * .54} ${y} L${x - r * .28} ${y + r * .5} Z" fill="#a2e8cf"/></g>`;
const valve = (x, y, size = 24, amber = false) => `<g fill="#111e2a" stroke="${amber ? '#f6b46f' : '#a2e8cf'}" stroke-width="2.5"><path d="M${x - size} ${y - size * .72} L${x + size} ${y + size * .72} V${y - size * .72} L${x - size} ${y + size * .72}Z"/><path d="M${x} ${y} V${y - size - 12} M${x - 12} ${y - size - 12} H${x + 12}"/></g>`;
const vessel = (x, y) => `<path d="M${x - 26} ${y - 55} Q${x} ${y - 73} ${x + 26} ${y - 55} V${y + 55} Q${x} ${y + 73} ${x - 26} ${y + 55}Z" fill="#203642" stroke="#7a929e" stroke-width="2"/>`;
const path = (d, cls = 'live', animate = false) => `<path d="${d}" class="${cls}${animate ? ' draw' : ''}"${animate ? ' pathLength="1"' : ''}/>`;

function context() {
  return `
    <circle cx="180" cy="230" r="114" class="construction"/>
    <circle cx="180" cy="230" r="97" class="construction" stroke-dasharray="2 10"/>
    <path d="M50 230H670 M180 114V350" class="construction" stroke-dasharray="5 8"/>
    ${path('M64 230H180H602', 'pipe')}
    ${path('M64 230H602', 'live', true)}
    ${path('M242 230H600', 'flow')}
    ${pump(180, 230, 64)}
    ${valve(400, 230, 33)}
    ${vessel(602, 230)}
    ${port(244, 230)}${port(367, 230)}${port(576, 230)}
    <path d="M244 249V296H289 M367 249V296H323" class="wire"/>
    ${label(306, 326, 'Connection', 'label mint-text')}
    ${label(180, 133, 'Pump A')}${label(400, 165, 'Valve B')}${label(602, 133, 'Vessel')}
    ${label(112, 377, 'Equipment', 'small muted')}
    <path d="M210 371H250 M240 366L250 371L240 376" class="construction"/>
    ${label(353, 377, 'Port identity', 'small mint-text')}
    <path d="M449 371H489 M479 366L489 371L479 376" class="construction"/>
    ${label(591, 377, 'Connection', 'small muted')}
  `;
}

function structure(uid) {
  return `
    <defs><linearGradient id="${uid}-focus" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a2e8cf" stop-opacity=".02"/><stop offset="1" stop-color="#a2e8cf" stop-opacity=".12"/></linearGradient></defs>
    <path d="M201 236L370 139V339L201 254Z" fill="url(#${uid}-focus)"/>
    <path d="M201 236L370 139 M201 254L370 339" class="construction" stroke-dasharray="5 7"/>
    ${path('M47 245H235', 'pipe')}${pump(137, 245, 54)}${port(191, 245, false, 9)}
    ${label(137, 335, 'Pump A')}${label(137, 365, 'A.OUT', 'code mint-text')}
    <g class="lift">
      <circle cx="449" cy="238" r="112" fill="#182e38" stroke="#476975" stroke-width="1.5"/>
      <circle cx="449" cy="238" r="99" fill="none" stroke="#577885" stroke-width="1" stroke-dasharray="3 9"/>
      <path d="M332 238H660" class="pipe"/>
      ${path('M365 238H627', 'live', true)}${path('M380 238H624', 'flow')}
      <path d="M370 196V280M382 204V272" stroke="#7a929e" stroke-width="3"/>
      ${port(407, 238, false, 19)}${port(535, 238, false, 19)}
      ${valve(606, 238, 23)}
      ${label(407, 190, 'A.OUT', 'code mint-text')}${label(535, 190, 'B.IN', 'code mint-text')}
      ${label(407, 292, 'Outlet', 'small')}${label(535, 292, 'Inlet', 'small')}
    </g>
    ${label(449, 378, 'Same identity. Closer view.', 'label')}
  `;
}

function explore(alternate) {
  const route = 'M185 264H583';
  const bypass = 'M225 264V157H513V264';
  return `
    <path d="M77 264H644" class="construction" stroke-dasharray="4 8"/>
    ${path('M76 264H612', 'pipe')}
    ${path(route, 'live', true)}${path(route, 'flow')}
    ${pump(139, 264, 46)}${valve(369, 264, 29)}${vessel(612, 264)}
    ${alternate ? `${path(bypass, 'pipe')}${path(bypass, 'proposed', true)}${path(bypass, 'flow')}${valve(369, 157, 22, true)}${port(225, 264, true)}${port(513, 264, true)}${label(369, 115, 'Added bypass', 'label amber-text')}` : `${label(369, 163, 'Base route', 'label mint-text')}<path d="M306 183H432" stroke="#a2e8cf" stroke-width="2"/><path d="M355 192L369 207L383 192" class="wire"/>${port(225, 264)}${port(513, 264)}`}
    ${label(139, 350, 'Pump A')}${label(369, 324, 'Valve B')}${label(612, 350, 'Vessel')}
    ${label(225, 307, 'A.OUT', 'small muted')}${label(513, 307, 'V.IN', 'small muted')}
    ${label(360, 390, alternate ? 'Another path to calculate' : 'One route to review', alternate ? 'label amber-text' : 'label mint-text')}
  `;
}

function review(alternate) {
  const changed = alternate ? 'M158 251V175H480V251' : 'M158 251H480';
  return `
    <path d="M69 119V331H549" class="construction"/>
    <path d="M62 119H77 M62 331H77 M549 324V338" class="construction"/>
    ${label(75, 145, 'Original route', 'small muted', 'start')}
    ${path('M81 251H576', 'pipe')}${path('M81 251H576', 'live')}
    ${valve(317, 251, 24)}
    ${alternate ? `${path(changed, 'proposed', true)}${valve(317, 175, 21, true)}<path d="M140 173Q143 153 165 153H473Q499 153 499 178V265" class="proposed review-mark" stroke-dasharray="8 7" opacity=".5"/>` : `<ellipse cx="317" cy="251" rx="187" ry="49" class="proposed review-mark" stroke-dasharray="8 7" opacity=".5"/>`}
    ${port(158, 251, alternate)}${port(480, 251, alternate)}
    ${label(158, 296, 'A.OUT', 'code mint-text')}${label(480, 296, 'V.IN', 'code mint-text')}
    ${label(317, 211, alternate ? 'Proposed route' : 'Stable identities', alternate ? 'small amber-text' : 'small mint-text')}
    <path d="M576 225V277 M588 225V277" stroke="#f6b46f" stroke-width="5"/>
    <path d="M600 251H657" class="construction" stroke-dasharray="5 8"/>
    ${label(647, 232, '?', 'heading amber-text')}
    <g class="review-mark">
      <circle cx="82" cy="366" r="5" fill="#a2e8cf"/>
      ${label(98, 373, alternate ? 'Change retained' : 'Source retained', 'small', 'start')}
      <circle cx="308" cy="366" r="5" fill="#f6b46f"/>
      ${label(324, 373, 'Calculation pending', 'small amber-text', 'start')}
      ${label(587, 328, 'Approval pending', 'small amber-text')}
    </g>
  `;
}

function outcome(alternate) {
  return `
    <circle cx="360" cy="248" r="121" fill="#182b37" stroke="#365461" stroke-width="1.5"/>
    <path d="M245 217A121 121 0 0 1 472 204M480 264A121 121 0 0 1 356 369M316 361A121 121 0 0 1 239 266" class="live draw" pathLength="1"/>
    <path d="M245 217A121 121 0 0 1 472 204M480 264A121 121 0 0 1 356 369M316 361A121 121 0 0 1 239 266" class="flow"/>
    <g transform="translate(127 193)">
      <path d="M0 0H52L73 21V96H0Z" class="paper"/>
      <path d="M52 0V21H73 M16 43H55 M16 58H40 M16 73H55" class="construction"/>
      <path d="M73 47H108" class="wire"/>
    </g>
    ${port(239, 240)}
    ${label(164, 323, 'Source', 'label')}
    <g class="lift">
      ${path('M283 248H436', 'pipe')}${path('M283 248H436', 'live')}
      ${port(296, 248)}${valve(360, 248, 23)}${port(424, 248)}
      ${alternate ? path('M310 248V207H411V248', 'proposed', true) : ''}
      ${label(360, 302, 'Ports', 'label mint-text')}
      ${label(360, 180, 'A.OUT → B.IN', 'small muted')}
    </g>
    ${port(477, 218, true)}
    <path d="M495 218H552 M544 210L552 218L544 226" class="proposed"/>
    <g transform="translate(580 218)" class="review-mark">
      <path d="M0 -34L31 -17V17L0 34L-31 17V-17Z" fill="#3a3028" stroke="#f6b46f" stroke-width="2"/>
      <path d="M-6 -12V12M6 -12V12" stroke="#f6b46f" stroke-width="4"/>
    </g>
    ${label(580, 280, 'Change', 'label amber-text')}
    ${label(580, 310, 'Approval pending', 'small amber-text')}
    ${label(360, 397, 'Human approval required', 'label amber-text')}
    ${label(360, 126, 'Traceable candidate', 'small muted')}
  `;
}

export function render(phase = 0, choice = 'base', uid = 'P4') {
  const p = Number.isInteger(phase) && phase >= 0 && phase <= 4 ? phase : 0;
  const alternate = choice === 'alternate';
  const prefix = String(uid).replace(/[^a-zA-Z0-9_-]/g, '_');
  const headings = [copy.context, copy.structure, copy.explore, copy.review, copy.outcome];
  const description = descriptions[p === 2 ? (alternate ? 3 : 2) : p === 3 ? (alternate ? 5 : 4) : p === 4 ? 6 : p];
  const scenes = [context, () => structure(prefix), () => explore(alternate), () => review(alternate), () => outcome(alternate)];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${description}" class="entry-P4">
    <rect width="720" height="460" fill="#111e2a"/>
    <path d="M0 420H720" stroke="#2a4350"/>
    ${label(34, 34, 'PORT CHOREOGRAPHY', 'eyebrow', 'start')}
    ${label(34, 76, headings[p], 'heading', 'start')}
    ${scenes[p]()}
    ${label(34, 446, 'Illustrative only', 'small muted', 'start')}
    ${label(686, 446, `0${p + 1} / 05`, 'small muted', 'end')}
  </svg>`;
}
