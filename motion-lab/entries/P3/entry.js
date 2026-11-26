export const id = 'P3';
export const title = 'Revision Studio';
export const summary = 'Register two engineering sheets, reveal one changed route, and carry its evidence into review.';

const headings = [
  'Two sheets. One evolving plant.',
  'Align drawings. Keep identity.',
  'A local change creates a new path.',
  'Keep the change traceable.',
  'A packet for human review.'
];
const descriptions = [
  'Illustrative P&ID: translucent original and proposed engineering sheets overlap on a drafting table.',
  'Illustrative P&ID: original and revised sheets register around the same equipment, ports and connections.',
  'Illustrative P&ID: the base route passes through the pump and valve; no bypass is added.',
  'Illustrative P&ID: a proposed bypass branches around the valve and reconnects to the original line; both paths need review.',
  'Illustrative P&ID: the original drawing, linked route and unresolved inputs remain traceable for review.',
  'Illustrative P&ID: an assembled drawing and review packet remains proposed and is not an approved design.'
];

export const translations = [
  ['Revision Studio', '리비전 스튜디오'],
  [summary, '두 엔지니어링 도면을 정렬하고 변경 경로를 드러내어 근거와 함께 검토에 전달합니다.'],
  [headings[0], '두 도면, 이어지는 하나의 설계.'],
  [headings[1], '도면을 맞추고 식별자를 유지합니다.'],
  [headings[2], '국소 변경으로 새 경로가 생깁니다.'],
  [headings[3], '변경의 근거를 추적합니다.'],
  [headings[4], '사람의 검토를 위한 묶음.'],
  [descriptions[0], '예시 P&ID: 반투명 원본 도면과 제안 도면이 제도대 위에서 겹쳐집니다.'],
  [descriptions[1], '예시 P&ID: 원본과 변경 도면이 동일한 장비, 포트, 연결 식별자를 기준으로 정렬됩니다.'],
  [descriptions[2], '예시 P&ID: 기본 경로는 펌프와 밸브를 통과하며 우회 연결이 없습니다.'],
  [descriptions[3], '예시 P&ID: 제안된 우회 경로가 밸브를 돌아 원래 배관에 연결됩니다. 두 경로 모두 검토가 필요합니다.'],
  [descriptions[4], '예시 P&ID: 원본 도면, 연결된 경로, 미확정 입력을 검토 시 추적할 수 있습니다.'],
  [descriptions[5], '예시 P&ID: 도면과 검토 자료를 묶었지만 여전히 제안 상태이며 승인된 설계가 아닙니다.'],
  ['Original', '원본'], ['Revision', '변경본'],
  ['Same equipment', '동일 장비'], ['New revision', '새 변경본'],
  ['Stable identities', '일관된 식별자'], ['Drawing / ports / paths', '도면 / 포트 / 경로'],
  ['Base route', '기본 경로'], ['Bypass proposed', '우회 경로 제안'],
  ['Added branch', '추가 분기'], ['One route to review', '검토할 경로 1개'],
  ['Two paths to review', '검토할 경로 2개'],
  ['Original kept', '원본 보존'], ['Change linked', '변경 연결'], ['Route linked', '경로 연결'],
  ['Inputs open', '입력 미확정'], ['Review required', '검토 필요'],
  ['Review packet', '검토 자료'], ['Review open', '검토 대기'], ['Review', '검토'], ['open', '대기'],
  ['Drawing', '도면'], ['Paths', '경로'], ['Open inputs', '미확정 입력'],
  ['Proposed / not approved', '제안 / 미승인'],
  ['Illustrative only', '설명용 예시']
];

export const css = `
.entry-P3 { display:block; width:100%; height:auto; overflow:hidden; color:#eaf2e8; font-family:Inter,"Noto Sans KR",ui-sans-serif,system-ui,sans-serif; }
.entry-P3 text { fill:currentColor; font-size:19px; font-weight:500; }
.entry-P3 .P3-title { font-size:27px; font-weight:650; letter-spacing:-.75px; }
.entry-P3 .P3-kicker { font-size:16px; fill:#91a8ad; letter-spacing:1.4px; }
.entry-P3 .P3-note { font-size:17px; fill:#a8babd; }
.entry-P3 .P3-paper { fill:#e7eee4; fill-opacity:.92; stroke:#c7ddd3; stroke-width:1.5; }
.entry-P3 .P3-back-paper { fill:#b8d5d5; fill-opacity:.19; stroke:#83aaaf; stroke-opacity:.6; stroke-width:1.5; }
.entry-P3 .P3-paper-label { fill:#294b51; font-size:21px; font-weight:650; }
.entry-P3 .P3-tech { fill:#4c6d70; font-size:19px; font-family:ui-monospace,SFMono-Regular,Consolas,monospace; letter-spacing:.6px; }
.entry-P3 .P3-back .P3-paper-label,.entry-P3 .P3-back .P3-tech { fill:#b9d6d7; }
.entry-P3 .P3-ink { fill:none; stroke:#235962; stroke-width:3; stroke-linejoin:round; stroke-linecap:round; }
.entry-P3 .P3-base { fill:none; stroke:#235962; stroke-width:4; stroke-linejoin:round; stroke-linecap:round; }
.entry-P3 .P3-back .P3-ink,.entry-P3 .P3-back .P3-base { stroke:#88b8c0; }
.entry-P3 .P3-back .P3-symbol { fill:#88b8c0; }
.entry-P3 .P3-symbol { fill:#235962; }
.entry-P3 .P3-coral { fill:none; stroke:#e57760; stroke-width:4.5; stroke-linecap:round; stroke-linejoin:round; }
.entry-P3 .P3-cloud { fill:#ee8a6b; fill-opacity:.055; stroke:#d26f58; stroke-width:1.6; }
.entry-P3 .P3-red-label { fill:#b4523e; font-size:20px; font-weight:650; }
.entry-P3 .P3-port { fill:#edf3e7; stroke:#1f6e75; stroke-width:2.5; }
.entry-P3 .P3-new-port { fill:#e57760; stroke:#e7eee4; stroke-width:2; }
.entry-P3 .P3-registration { stroke:#ed9d72; stroke-width:1.5; fill:none; }
.entry-P3 .P3-guide { stroke:#719296; stroke-width:1; fill:none; opacity:.48; }
.entry-P3 .P3-rule { stroke:#739395; stroke-width:1; opacity:.46; }
.entry-P3 .P3-footer { fill:#c4d6d5; font-size:19px; }
.entry-P3 .P3-amber { fill:#edb67c; }
.entry-P3 .P3-review-ring { fill:#183b43; stroke:#e4a77c; stroke-width:2; }
.entry-P3 .P3-review-number { fill:#edb67c; font-size:18px; font-family:ui-monospace,monospace; }
.entry-P3 .P3-scan { opacity:0; }
.entry-P3 .P3-motion { transform-box:fill-box; transform-origin:center; }
.animating .entry-P3 .P3-split-left { animation:P3-unstack-left 2.2s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-split-right { animation:P3-unstack-right 2.6s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-register-left { animation:P3-register-left 2.8s cubic-bezier(.2,.8,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-register-right { animation:P3-register-right 2.8s cubic-bezier(.2,.8,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-draw { stroke-dasharray:100; animation:P3-draw 3.2s cubic-bezier(.3,0,.3,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-redline { stroke-dasharray:100; animation:P3-draw 2.6s .7s cubic-bezier(.3,0,.3,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-reveal { animation:P3-reveal 1s 1.6s both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-review-1 { animation:P3-reveal .8s .4s both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-review-2 { animation:P3-reveal .8s 1.2s both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-review-3 { animation:P3-reveal .8s 2s both; animation-play-state:var(--motion-play,running); }
.animating .entry-P3 .P3-scan { animation:P3-scan 4.4s .2s both; animation-play-state:var(--motion-play,running); }
@keyframes P3-unstack-left { from { transform:translate(55px,35px) rotate(5deg); opacity:.25; } to { transform:translate(0,0) rotate(0); opacity:1; } }
@keyframes P3-unstack-right { from { transform:translate(-60px,-32px) rotate(-5deg); opacity:.25; } to { transform:translate(0,0) rotate(0); opacity:1; } }
@keyframes P3-register-left { from { transform:translate(-45px,-12px) rotate(-5deg); } to { transform:translate(0,0) rotate(0); } }
@keyframes P3-register-right { from { transform:translate(48px,18px) rotate(5deg); } to { transform:translate(0,0) rotate(0); } }
@keyframes P3-draw { from { stroke-dashoffset:100; } to { stroke-dashoffset:0; } }
@keyframes P3-reveal { from { opacity:0; } to { opacity:1; } }
@keyframes P3-scan { 0% { opacity:0; transform:translateX(0); } 12% { opacity:.5; } 85% { opacity:.4; } 100% { opacity:0; transform:translateX(480px); } }
@media (prefers-reduced-motion:reduce) { .animating .entry-P3 * { animation:none !important; } }
`;

function escape(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' }[c]));
}

function text(x, y, label, cls = '', anchor = '') {
  return `<text x="${x}" y="${y}"${cls ? ` class="${cls}"` : ''}${anchor ? ` text-anchor="${anchor}"` : ''}>${escape(label)}</text>`;
}

function register(x, y) {
  return `<g class="P3-registration" transform="translate(${x} ${y})"><circle r="8"/><path d="M-15 0H15M0-15V15"/></g>`;
}

function drawing(bypass = false, ports = false) {
  return `<g>
    <path class="P3-base P3-draw" pathLength="100" d="M40 166H146M194 166H302M338 166H477"/>
    <g class="P3-ink"><circle cx="170" cy="166" r="24"/><path d="M302 151L320 166L302 181ZM338 151L320 166L338 181Z"/></g>
    <path class="P3-symbol" d="M159 152L184 166L159 180ZM477 160L489 166L477 172Z"/>
    <path class="P3-ink" d="M160 190L152 202H188L180 190M222 166V117"/>
    <circle class="P3-ink" cx="222" cy="103" r="14"/>
    <path class="P3-ink" d="M212 103H232"/>
    ${text(170, 230, 'P-101', 'P3-tech', 'middle')}
    ${text(320, 230, 'V-201', 'P3-tech', 'middle')}
    ${ports ? `<g class="P3-reveal"><rect class="P3-port" x="141" y="161" width="10" height="10"/><rect class="P3-port" x="189" y="161" width="10" height="10"/><circle class="P3-port" cx="257" cy="166" r="5"/><circle class="P3-port" cx="397" cy="166" r="5"/></g>` : ''}
    ${bypass ? `<g><path class="P3-cloud P3-reveal" d="M242 94Q230 84 242 74Q242 59 260 65Q271 52 285 62Q299 51 313 61Q327 51 341 61Q355 51 370 61Q388 52 398 65Q417 60 421 77Q433 86 422 99Q432 111 423 124Q434 139 424 151Q432 172 416 179Q409 194 395 183Q381 193 369 182Q354 193 341 182Q326 193 312 182Q299 193 286 183Q270 194 258 182Q239 187 236 171Q225 159 237 146Q225 132 236 120Q224 105 242 94Z"/>
      <path class="P3-coral P3-redline" pathLength="100" d="M257 166V91H397V166"/>
      <path class="P3-new-port P3-reveal" d="M321 85L333 91L321 97Z"/>
      <circle class="P3-new-port P3-reveal" cx="257" cy="166" r="6"/><circle class="P3-new-port P3-reveal" cx="397" cy="166" r="6"/>
    </g>` : ''}
  </g>`;
}

function sheet(prefix, label, options = {}) {
  const { back = false, bypass = false, ports = false, content = true, footer = 'A-104 / 01', motion = '' } = options;
  return `<g class="${back ? 'P3-back ' : ''}P3-motion ${motion}">
    <path class="${back ? 'P3-back-paper' : 'P3-paper'}" d="M0 0H494L516 22V280H0Z"/>
    <path d="M494 0V22H516" class="P3-guide"/>
    <path d="M16 49H500M16 249H500M395 249V280" class="P3-rule"/>
    <rect x="17" y="50" width="482" height="198" fill="url(#${prefix}-grid)" opacity="${back ? '.35' : '.75'}"/>
    ${text(20, 32, label, 'P3-paper-label')}${text(478, 32, footer, 'P3-tech', 'end')}
    ${content ? drawing(bypass, ports) : ''}
    ${text(20, 271, 'P&ID', 'P3-tech')}${text(495, 271, '01', 'P3-tech', 'end')}
  </g>`;
}

export function render(phase = 0, choice = 'base', uid = 'P3') {
  const p = Number.isInteger(phase) ? Math.max(0, Math.min(4, phase)) : 0;
  const alternate = choice === 'alternate';
  const prefix = `${String(uid).replace(/[^a-zA-Z0-9_-]/g, '-')}-P3`;
  const description = descriptions[p < 2 ? p : p === 2 ? (alternate ? 3 : 2) : p + 1];
  let art = '';

  if (p === 0) {
    art = `<path class="P3-guide" stroke-dasharray="4 8" d="M69 371L620 133M81 127L651 392"/>
      <g transform="translate(48 122) rotate(-6 258 140) scale(.9)">${sheet(prefix, 'Original', {back:true, motion:'P3-split-left'})}</g>
      <g transform="translate(216 148) rotate(5 220 120) scale(.84)">${sheet(prefix, 'Revision', {bypass:true, footer:'A-104 / 02', motion:'P3-split-right'})}</g>
      ${register(69, 123)}${register(651, 393)}
      ${text(46, 424, 'Same equipment', 'P3-footer')}${text(674, 424, 'New revision', 'P3-footer', 'end')}`;
  }

  if (p === 1) {
    art = `<path class="P3-guide" stroke-dasharray="4 8" d="M360 86V401M65 278H655"/>
      <g transform="translate(94 122)">${sheet(prefix, 'Original', {back:true, motion:'P3-register-left'})}</g>
      <g transform="translate(102 114)">${sheet(prefix, 'Stable identities', {ports:true, footer:'A-104', motion:'P3-register-right'})}
        <rect class="P3-scan" x="18" y="50" width="2" height="198" fill="#d97d59"/>
      </g>
      <g class="P3-reveal">${register(102, 114)}${register(618, 114)}${register(102, 394)}${register(618, 394)}</g>
      ${text(360, 424, 'Drawing / ports / paths', 'P3-footer', 'middle')}`;
  }

  if (p === 2) {
    art = `<g transform="translate(102 114)">${sheet(prefix, alternate ? 'Bypass proposed' : 'Base route', {bypass:alternate, ports:true, footer:alternate ? 'A-104 / 02' : 'A-104 / 01'})}</g>
      ${alternate ? `<g class="P3-reveal"><path class="P3-registration" d="M500 205H653V111"/>${text(657, 102, 'Added branch', 'P3-footer', 'end')}<circle class="P3-review-ring" cx="653" cy="205" r="16"/>${text(653, 211, '01', 'P3-review-number', 'middle')}</g>` : ''}
      <circle cx="${alternate ? 233 : 250}" cy="419" r="4" fill="${alternate ? '#e9987b' : '#90c2bc'}"/>
      ${text(370, 425, alternate ? 'Two paths to review' : 'One route to review', 'P3-footer', 'middle')}`;
  }

  if (p === 3) {
    art = `<g transform="translate(32 149) rotate(-3 216 118) scale(.82)">${sheet(prefix, 'Original', {back:true})}</g>
      <g transform="translate(44 133) scale(.82)">${sheet(prefix, 'Revision', {bypass:alternate, ports:true, footer:'A-104 / 02'})}</g>
      <path class="P3-guide" d="M496 120V350"/>
      <g class="P3-review-1"><path class="P3-guide" d="M46 153H22V109H496V156"/><circle class="P3-review-ring" cx="496" cy="156" r="17"/>${text(496, 162, '01', 'P3-review-number', 'middle')}${text(523, 163, 'Original kept', 'P3-footer')}</g>
      <g class="P3-review-2"><path class="P3-registration" d="M370 209H440V240H479"/><circle class="P3-review-ring" cx="496" cy="240" r="17"/>${text(496, 246, '02', 'P3-review-number', 'middle')}${text(523, 247, alternate ? 'Change linked' : 'Route linked', 'P3-footer')}</g>
      <g class="P3-review-3"><path class="P3-registration" stroke-dasharray="4 5" d="M306 285V324H479"/><circle class="P3-review-ring" cx="496" cy="324" r="17"/>${text(496, 330, '03', 'P3-review-number', 'middle')}${text(523, 331, 'Inputs open', 'P3-footer')}</g>
      <path class="P3-registration" d="M44 382V395H466V382"/>
      ${text(255, 424, 'Review required', 'P3-footer P3-amber', 'middle')}`;
  }

  if (p === 4) {
    art = `<g transform="translate(83 130) rotate(-4 258 140)">${sheet(prefix, 'Original', {back:true, content:false, motion:'P3-register-left'})}</g>
      <g transform="translate(120 113) rotate(3 258 140)">${sheet(prefix, 'Revision', {back:true, content:false, motion:'P3-register-right'})}</g>
      <g transform="translate(102 114)">${sheet(prefix, 'Review packet', {bypass:alternate, ports:true, footer:'A-104 / 02'})}</g>
      <g class="P3-reveal"><path d="M126 103V128M142 103V128M574 103V128M590 103V128" stroke="#92afaa" stroke-width="5" stroke-linecap="round"/>
        <path d="M126 103V128M142 103V128M574 103V128M590 103V128" stroke="#eff3dc" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="601" cy="349" r="48" fill="#173a41" stroke="#e9a67a" stroke-width="1.5"/>
        <path d="M570 320A43 43 0 0 1 634 376" fill="none" stroke="#e9a67a" stroke-width="4"/>
        ${text(601, 344, 'Review', 'P3-review-number', 'middle')}
        ${text(601, 368, 'open', 'P3-review-number', 'middle')}
      </g>
      ${text(63, 427, 'Proposed / not approved', 'P3-footer')}
      ${text(657, 427, 'Open inputs', 'P3-footer P3-amber', 'end')}`;
  }

  return `<svg class="entry-P3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${escape(description)}">
    <defs>
      <linearGradient id="${prefix}-table" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0e2833"/><stop offset="1" stop-color="#193c42"/></linearGradient>
      <pattern id="${prefix}-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#799f9c" stroke-width=".55" opacity=".48"/></pattern>
      <pattern id="${prefix}-bench" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#9cbcb4" stroke-width=".6" opacity=".1"/></pattern>
    </defs>
    <rect width="720" height="460" rx="12" fill="url(#${prefix}-table)"/>
    <rect width="720" height="460" rx="12" fill="url(#${prefix}-bench)"/>
    <path d="M24 89V24H89M631 24H696V89M24 371V436H89M631 436H696V371" fill="none" stroke="#6a8f90" stroke-width="1" opacity=".45"/>
    ${text(42, 47, headings[p], 'P3-title')}
    ${text(43, 75, 'Revision Studio', 'P3-kicker')}
    ${text(677, 75, 'Illustrative only', 'P3-note', 'end')}
    ${art}
  </svg>`;
}
