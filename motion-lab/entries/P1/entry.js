export const id = 'P1';
export const title = 'The Living Redline';
export const summary = 'A drafting bench turns source ink into a traceable, reviewable proposal.';
export const translations = [
  ['The Living Redline', '살아 있는 레드라인'],
  ['A drafting bench turns source ink into a traceable, reviewable proposal.', '제도대 위 원본 선이 추적하고 검토할 수 있는 제안으로 바뀝니다.'],
  ['Start with the source', '원본에서 시작'],
  ['Names survive the drawing', '도면이 바뀌어도 유지되는 식별자'],
  ['A bypass changes the path', '우회 연결은 경로를 바꿉니다'],
  ['Follow the redline', '변경선을 따라 검토'],
  ['A proposal, with its history', '이력을 품은 설계 제안'],
  ['One drawing', '한 장의 도면'],
  ['Pump A', '펌프 A'], ['Valve B', '밸브 B'],
  ['Keep the source', '원본 보존'], ['Drawing', '도면'], ['Ports', '연결 포트'],
  ['Same identity', '동일한 식별자'], ['Base route', '기본 경로'],
  ['Proposed bypass', '제안된 우회 연결'], ['One path', '경로 한 개'],
  ['Two paths to review', '검토할 경로 두 개'],
  ['No branch added', '분기 추가 없음'], ['Changed scope', '검토 범위 변경'],
  ['Size unresolved', '관경 미확정'], ['Route check', '경로 검토'],
  ['Calculation needed', '계산 필요'], ['Review needed', '검토 필요'],
  ['Source retained', '원본 유지'], ['Change recorded', '변경 기록'],
  ['Approval pending', '승인 대기'], ['PROPOSED', '제안 단계'],
  ['Illustrative · not approved', '예시 도면 · 승인되지 않음'],
  ['Original drawing of a pump and valve on a drafting bench. Illustrative, not approved.', '제도대 위 펌프와 밸브의 원본 도면. 예시이며 승인되지 않았습니다.'],
  ['Equipment symbols align with persistent connection port identities below the drawing.', '장비 기호와 도면 아래의 지속적인 연결 포트 식별자가 정렬됩니다.'],
  ['Base route through the pump and valve, with one path requiring review.', '펌프와 밸브를 통과하는 기본 경로. 경로 한 개를 검토해야 합니다.'],
  ['A proposed bypass around the valve creates a second path requiring calculation and review.', '밸브를 우회하는 제안 연결이 계산과 검토가 필요한 두 번째 경로를 만듭니다.'],
  ['Redline review of the proposed bypass: pipe size unresolved, calculation and review needed.', '제안된 우회 연결의 변경 검토: 관경 미확정, 계산과 검토 필요.'],
  ['Base route review: calculation and review are still needed without an added branch.', '기본 경로 검토: 분기가 추가되지 않아도 계산과 검토가 필요합니다.'],
  ['A proposed drawing retains its source and route history while approval remains pending.', '제안 도면은 원본과 경로 이력을 보존하며 승인을 기다립니다.']
];

export const css = `
.entry-P1{display:block;width:100%;height:auto;color:#183c45;font-family:Inter,Arial,sans-serif;background:#173c43;border-radius:20px;isolation:isolate}
.entry-P1 .paper{fill:#f7f3e8}
.entry-P1 .ink{fill:none;stroke:#21454c;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.entry-P1 .fine{fill:none;stroke:#21454c;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.entry-P1 .guide{fill:none;stroke:#b8c9c5;stroke-width:1.5;stroke-dasharray:6 7}
.entry-P1 .red{fill:none;stroke:#c14e36;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.entry-P1 .blue{fill:none;stroke:#407a89;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.entry-P1 .port{fill:#f7f3e8;stroke:#407a89;stroke-width:3}
.entry-P1 .label{fill:#21454c;font-size:20px;font-weight:560;letter-spacing:-.25px}
.entry-P1 .small{fill:#526e70;font-size:17px;letter-spacing:.2px}
.entry-P1 .headline{fill:#21454c;font-size:29px;font-weight:650;letter-spacing:-.8px}
.entry-P1 .technical{font-family:'Courier New',monospace;font-size:19px;letter-spacing:1px;fill:#21454c}
.entry-P1 .redtext{fill:#b54a35}
.entry-P1 .white{fill:#f7f3e8}
.entry-P1 .soft{fill:#dfe9e3}
.entry-P1 .draw{stroke-dasharray:1000;stroke-dashoffset:0}
.entry-P1 .lift{transform-box:fill-box;transform-origin:center}
.animating .entry-P1 .draw{animation:P1-draw 2.3s cubic-bezier(.25,.5,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-P1 .late{animation:P1-reveal 1.2s .55s both;animation-play-state:var(--motion-play,running)}
.animating .entry-P1 .lift{animation:P1-lift 1.5s cubic-bezier(.2,.75,.3,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-P1 .trace{animation:P1-trace 2.2s .65s both;animation-play-state:var(--motion-play,running)}
@keyframes P1-draw{from{stroke-dashoffset:1000}to{stroke-dashoffset:0}}
@keyframes P1-reveal{from{opacity:0}to{opacity:1}}
@keyframes P1-lift{from{opacity:.2;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes P1-trace{0%{opacity:0;stroke-dasharray:700;stroke-dashoffset:700}25%{opacity:1}100%{opacity:1;stroke-dasharray:700;stroke-dashoffset:0}}
@media(prefers-reduced-motion:reduce){.entry-P1 .draw,.entry-P1 .late,.entry-P1 .lift,.entry-P1 .trace{animation:none!important;transform:none!important;opacity:1!important;stroke-dashoffset:0!important}}
`;

const headings = ['Start with the source', 'Names survive the drawing', 'A bypass changes the path', 'Follow the redline', 'A proposal, with its history'];
const escapeText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const text = (x, y, value, cls = 'label', extra = '') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${escapeText(value)}</text>`;
const line = (d, cls = 'ink', extra = '') => `<path d="${d}" class="${cls}" ${extra}/>`;
const pump = (x, y, r = 35, cls = 'ink') => `<g>${line(`M${x-r} ${y}h${-42} M${x+r} ${y}h42`, cls)}<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>${line(`M${x-12} ${y-19}L${x+19} ${y}L${x-12} ${y+19}Z`, cls)}</g>`;
const valve = (x, y, cls = 'ink') => `<g>${line(`M${x-23} ${y-19}L${x+23} ${y+19}V${y-19}L${x-23} ${y+19}Z M${x} ${y}V${y-39} M${x-12} ${y-39}h24`, cls)}</g>`;
const pin = (x, y, r = 6) => `<circle cx="${x}" cy="${y}" r="${r}" class="port"/>`;
const flow = (x, y, color = '#21454c') => `<path d="M${x-7} ${y-6}L${x+6} ${y}L${x-7} ${y+6}Z" fill="${color}"/>`;

function context() {
  return `<g>
    ${line('M80 255H635 M205 135V351 M495 145V350 M80 206H635 M80 304H635', 'guide')}
    ${line('M160 160H538 M160 151V169 M538 151V169', 'fine')}
    ${text(350, 145, 'One drawing', 'small', 'text-anchor="middle"')}
    ${line('M85 255H170 M240 255H472 M518 255H635', 'ink draw')}
    <g class="lift">${pump(205, 255)}${valve(495, 255)}</g>
    ${flow(324, 255)}${flow(603, 255)}
    <g class="late">${text(205, 337, 'Pump A', 'label', 'text-anchor="middle"')}${text(495, 337, 'Valve B', 'label', 'text-anchor="middle"')}
    ${line('M83 377h30 M98 362v30', 'fine')}${text(127, 384, 'Keep the source')}
    <path d="M576 362l26-19 28 28-19 26Z" fill="#e5b96d" transform="rotate(-7 603 371)"/>
    <path d="M576 362l-14 30 30-9Z" fill="#d0ab77"/><path d="M562 392l7-15 8 8Z" fill="#21454c"/>
    </g></g>`;
}

function structure() {
  return `<g>
    ${line('M190 200V313 M260 200V313 M452 200V313 M498 200V313', 'guide')}
    <g class="lift"><rect x="137" y="139" width="436" height="103" rx="2" fill="#e6eade"/>
    ${line('M144 191H190 M260 191H452 M498 191H568', 'ink draw')}${pump(225, 191)}${valve(475, 191)}
    ${text(225, 135, 'P-01', 'technical', 'text-anchor="middle"')}${text(475, 135, 'V-01', 'technical', 'text-anchor="middle"')}</g>
    ${text(72, 185, 'Drawing', 'small', 'transform="rotate(-90 72 185)" text-anchor="middle"')}
    <g class="late">${text(72, 307, 'Ports', 'small', 'transform="rotate(-90 72 307)" text-anchor="middle"')}
    ${line('M190 303H260 M260 303H452 M452 303H498', 'blue draw')}
    ${pin(190, 303, 9)}${pin(260, 303, 9)}${pin(452, 303, 9)}${pin(498, 303, 9)}
    ${text(190, 338, 'IN', 'technical', 'text-anchor="middle"')}${text(260, 338, 'OUT', 'technical', 'text-anchor="middle"')}
    ${text(452, 338, 'IN', 'technical', 'text-anchor="middle"')}${text(498, 338, 'OUT', 'technical', 'text-anchor="middle"')}
    ${line('M190 355v10H498v-10', 'fine')}${text(348, 394, 'Same identity', 'label', 'text-anchor="middle"')}
    <circle cx="608" cy="303" r="23" fill="#407a89"/>${line('M596 303l8 8 16-18', 'fine white')}
    </g></g>`;
}

function explore(alternate) {
  const bypass = alternate ? `<g class="late">${line('M335 278V171H595V278', 'red draw')}${pin(335, 278)}${pin(595, 278)}${flow(465, 171, '#c14e36')}${text(465, 148, 'Proposed bypass', 'label redtext', 'text-anchor="middle"')}</g>` : `${line('M335 190V171H595V190', 'guide')}${text(465, 151, 'No branch added', 'small', 'text-anchor="middle"')}`;
  return `<g>
    ${line('M82 278H635', 'guide')}
    ${line('M84 278H156 M226 278H452 M498 278H635', 'ink draw')}
    ${pump(191, 278)}${valve(475, 278)}${flow(290, 278)}${flow(555, 278)}
    ${bypass}
    ${text(191, 343, 'Pump A', 'label', 'text-anchor="middle"')}${text(475, 343, 'Valve B', 'label', 'text-anchor="middle"')}
    <g class="lift"><rect x="83" y="370" width="552" height="38" rx="2" fill="${alternate ? '#f0dace' : '#dfe9e3'}"/>
    <circle cx="108" cy="389" r="5" fill="${alternate ? '#c14e36' : '#407a89'}"/>
    ${text(127, 396, alternate ? 'Two paths to review' : 'One path', 'label')}
    ${text(613, 396, alternate ? '02' : '01', 'technical', 'text-anchor="end"')}</g>
    </g>`;
}

function review(alternate) {
  const route = alternate ? `<g>${line('M153 270V172H375V270', 'red trace')}${pin(153,270)}${pin(375,270)}${flow(262,172,'#c14e36')}
    ${line('M123 166C109 141 208 137 276 145C354 135 413 151 403 182C418 204 381 218 353 211', 'red trace')}
    ${text(265, 128, 'Changed scope', 'label redtext', 'text-anchor="middle"')}
    ${line('M376 173L441 144H625', 'red')}${text(463, 132, 'Size unresolved', 'label redtext')}
    </g>` : `<g>${text(254, 173, 'Base route', 'label', 'text-anchor="middle"')}${line('M174 194H339', 'fine')}${line('M309 270L436 144H625', 'blue')}${text(464, 132, 'Route check')}</g>`;
  return `<g>
    <rect x="84" y="214" width="338" height="112" rx="2" fill="#e8ecdf"/>
    ${line('M91 270H127 M197 270H242 M288 270H414', 'ink draw')}${pump(162,270)}${valve(265,270)}
    ${route}
    <g class="late">
    <circle cx="452" cy="250" r="13" fill="#f7f3e8" stroke="#c14e36" stroke-width="2"/>
    ${line('M447 245l10 10 M457 245l-10 10', 'red')}${text(476, 257, 'Calculation needed')}
    <circle cx="452" cy="300" r="13" fill="#f7f3e8" stroke="#c14e36" stroke-width="2"/>
    ${line('M452 294v8 M452 307v1', 'red')}${text(476, 307, 'Review needed')}
    ${line('M105 362C178 347 254 358 332 351', 'red trace')}
    ${text(106, 390, 'Approval pending', 'label redtext')}
    </g></g>`;
}

function outcome(alternate) {
  return `<g>
    <path d="M89 164H393V365H89Z" fill="#cddbd5" stroke="#8aa8a6" stroke-width="1.5"/>
    ${line('M103 181H337 M103 194H307 M103 347H244', 'fine')}
    <g class="lift"><path d="M114 144H418V345H114Z" fill="#ebe9d9" stroke="#94aaa4" stroke-width="1.5"/>
    <path d="M138 122H443V324H138Z" fill="#faf7ee" stroke="#21454c" stroke-width="2"/>
    ${line('M155 250H179 M235 250H316 M352 250H425', 'ink draw')}
    <circle cx="207" cy="250" r="28" class="ink"/>${line('M198 234l26 16-26 16Z', 'ink')}
    ${line('M316 234l36 32v-32l-36 32Z M334 250v-35 M324 215h20', 'ink')}
    ${alternate ? line('M266 250V174H392V250', 'red trace') : line('M266 174H392', 'guide')}
    ${text(158, 153, 'P-01 / V-01', 'technical')}${text(421, 304, 'R1', 'technical', 'text-anchor="end"')}
    <g transform="rotate(-10 286 367)"><rect x="168" y="346" width="231" height="43" rx="1" fill="#f7f3e8" stroke="#c14e36" stroke-width="2"/>
    ${text(284, 376, 'PROPOSED', 'label redtext', 'text-anchor="middle" letter-spacing="4"')}</g></g>
    <g class="late">${line('M483 163V325', 'blue')}
    <circle cx="483" cy="163" r="7" fill="#407a89"/>${text(506, 170, 'Source retained')}
    <circle cx="483" cy="239" r="7" fill="#407a89"/>${text(506, 246, alternate ? 'Change recorded' : 'No branch added')}
    <circle cx="483" cy="325" r="9" fill="#f7f3e8" stroke="#c14e36" stroke-width="3"/>
    ${text(506, 332, 'Approval pending', 'label redtext')}
    </g></g>`;
}

export function render(phase = 0, choice = 'base', uid = 'P1') {
  const p = Math.min(4, Math.max(0, Math.trunc(Number(phase)) || 0));
  const u = String(uid).replace(/[^A-Za-z0-9_-]/g, '_');
  const alternate = choice === 'alternate';
  const labels = [
    'Original drawing of a pump and valve on a drafting bench. Illustrative, not approved.',
    'Equipment symbols align with persistent connection port identities below the drawing.',
    alternate ? 'A proposed bypass around the valve creates a second path requiring calculation and review.' : 'Base route through the pump and valve, with one path requiring review.',
    alternate ? 'Redline review of the proposed bypass: pipe size unresolved, calculation and review needed.' : 'Base route review: calculation and review are still needed without an added branch.',
    'A proposed drawing retains its source and route history while approval remains pending.'
  ];
  const scenes = [context, structure, () => explore(alternate), () => review(alternate), () => outcome(alternate)];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${labels[p]}" class="entry-P1">
    <defs><pattern id="${u}-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#aac3bb" stroke-width=".5" opacity=".32"/></pattern></defs>
    <rect width="720" height="460" fill="#173c43"/>
    <rect x="22" y="20" width="676" height="424" rx="5" fill="#102f35"/>
    <rect x="16" y="14" width="676" height="424" rx="3" class="paper"/>
    <rect x="16" y="14" width="676" height="424" fill="url(#${u}-grid)"/>
    <path d="M16 98H692 M16 417H692" stroke="#c7d3c7" stroke-width="1"/>
    <path d="M39 34v15 M33 41h15 M665 34v15 M657 41h15" stroke="#7b9891" stroke-width="1.5"/>
    ${text(58, 49, 'P&ID / 0' + (p + 1), 'technical')}
    ${text(58, 82, headings[p], 'headline')}
    ${scenes[p]()}
    ${text(675, 434, 'Illustrative · not approved', 'small', 'text-anchor="end"')}
  </svg>`;
}
