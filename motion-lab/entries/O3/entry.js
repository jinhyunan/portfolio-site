export const id = 'O3';
export const title = 'Knowledge Stratigraphy';
export const summary = 'Cut through types, instances and evidence without mistaking a connection for approval.';

export const translations = [
  ['Knowledge Stratigraphy', '지식의 지층'],
  ['Cut through types, instances and evidence without mistaking a connection for approval.', '유형·개체·근거의 단면을 살피며 연결과 승인을 구분합니다.'],
  ['Knowledge has depth.', '지식에는 층위가 있습니다.'],
  ['Identity. Context. Evidence.', '정체성. 맥락. 근거.'],
  ['Types', '유형'], ['Instances', '개체'], ['Evidence', '근거'],
  ['Pump', '펌프'], ['Pump A', '펌프 A'], ['Reference excerpt', '참고 문헌 발췌'],
  ['Type is not instance.', '유형과 개체는 다릅니다.'],
  ['Five distinct types', '서로 다른 다섯 유형'],
  ['System', '시스템'], ['Equipment', '장비'], ['Property', '속성'],
  ['Method', '계산 방법'], ['Context', '맥락'],
  ['Flow condition', '유량 조건'], ['Head balance', '양정 수지'],
  ['Type', '유형'], ['Instance', '개체'], ['instance of', '다음 유형의 개체'],
  ['An entry point changes the view.', '진입점이 관점을 바꿉니다.'],
  ['Equipment entry', '장비에서 탐색'], ['Method entry', '계산 방법에서 탐색'],
  ['Evidence entry', '근거에서 탐색'],
  ['Which method applies?', '어떤 방법을 적용하나요?'],
  ['What input is required?', '어떤 입력이 필요한가요?'],
  ['What supports the method?', '무엇이 이 방법을 뒷받침하나요?'],
  ['applies to', '다음에 적용'], ['requires input', '입력으로 요구'],
  ['supported by', '다음 근거로 뒷받침'], ['reviewed as', '다음으로 검토됨'],
  ['Proposed application', '적용 제안'], ['Input dependency', '입력 의존 관계'],
  ['Evidence connection', '근거 연결'], ['Other layers', '다른 층위'],
  ['Same facts. Different cross-section.', '같은 사실, 다른 단면.'],
  ['Connection is not approval.', '연결이 승인은 아닙니다.'],
  ['Proposed relation', '제안된 관계'], ['Review relation', '검토 관계'],
  ['No verdict recorded', '검토 결과 미등록'],
  ['Applicability pending review', '적용 가능성 검토 대기'],
  ['A clear claim. An open review.', '명확한 주장. 아직 열린 검토.'],
  ['Identity clear', '정체성 명확'], ['Relations named', '관계 명시'],
  ['Review pending', '검토 대기'], ['Context retained', '맥락 보존'],
  ['Illustrative ontology · not an engineering review', '설명용 온톨로지 · 실제 공학 검토 아님'],
  ['Three geological layers distinguish the Pump type, the Pump A instance and a reference excerpt. Illustrative only.', '세 지층이 펌프 유형, 펌프 A 개체, 참고 문헌 발췌를 구분합니다. 설명용 예시입니다.'],
  ['Five separate ontology types: system, equipment, property, method and evidence. Pump A is an instance of Pump. Illustrative only.', '시스템, 장비, 속성, 계산 방법, 근거의 다섯 유형을 분리합니다. 펌프 A는 펌프 유형의 개체입니다. 설명용 예시입니다.'],
  ['Equipment entry: Head balance applies to Pump A as a proposed application. Applicability is pending review. Illustrative only.', '장비 진입점: 양정 수지를 펌프 A에 적용하는 제안입니다. 적용 가능성은 검토 대기 중입니다. 설명용 예시입니다.'],
  ['Method entry: Head balance requires input Flow condition. This names a dependency, not a completed calculation. Illustrative only.', '계산 방법 진입점: 양정 수지는 입력으로 유량 조건을 요구합니다. 완료된 계산이 아닌 의존 관계입니다. 설명용 예시입니다.'],
  ['Evidence entry: Head balance is supported by Reference excerpt. Support does not verify applicability. Illustrative only.', '근거 진입점: 양정 수지는 참고 문헌 발췌로 뒷받침됩니다. 근거 연결이 적용 가능성을 검증하지는 않습니다. 설명용 예시입니다.'],
  ['The proposed applies-to relation has supporting evidence, but no reviewed-as verdict is recorded. Applicability remains pending review. Illustrative only.', '제안된 적용 관계에는 지원 근거가 있지만 검토 결과는 등록되지 않았습니다. 적용 가능성은 검토 대기 상태입니다. 설명용 예시입니다.'],
  ['An aligned knowledge cross-section preserves Pump A identity, named method relations and reference evidence while review remains pending. Illustrative only.', '정렬된 지식 단면이 펌프 A의 정체성, 명명된 계산 방법 관계, 참고 근거를 보존합니다. 검토는 대기 중입니다. 설명용 예시입니다.']
];

export const css = `
.entry-O3{width:100%;height:auto;display:block;background:#0c1927;color:#edf5f4;font-family:Inter,"Noto Sans KR",Arial,sans-serif;isolation:isolate}
.entry-O3 text{fill:currentColor;font-weight:500}
.entry-O3 .o3-title{font-size:29px;font-weight:650;letter-spacing:-.8px}
.entry-O3 .o3-sub{font-size:17px;fill:#a5bbca}
.entry-O3 .o3-label{font-size:18px;font-weight:600}
.entry-O3 .o3-value{font-size:25px;font-weight:600;letter-spacing:-.5px}
.entry-O3 .o3-small{font-size:16px;fill:#adc1cf}
.entry-O3 .o3-relation{font-size:18px;fill:#e5b783;font-weight:600}
.entry-O3 .o3-mint{fill:#94e5d7}
.entry-O3 .o3-amber{fill:#efbd89}
.entry-O3 .o3-dim{fill:#839dad}
.entry-O3 .o3-route{fill:none;stroke:#efbd89;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.entry-O3 .o3-rule{stroke:#668395;stroke-width:1;opacity:.42}
.entry-O3 .o3-tick{stroke:#b0c5d0;stroke-width:1.3;opacity:.7}
.entry-O3 .o3-dashed{stroke-dasharray:7 6}
.entry-O3 .o3-layer{transform-box:fill-box;transform-origin:center}
.animating .entry-O3 .o3-layer{animation:O3-settle 1.45s cubic-bezier(.2,.7,.2,1) both;animation-delay:var(--o3-delay,0s);animation-play-state:var(--motion-play,running)}
.animating .entry-O3 .o3-route{animation:O3-route 1.8s ease-out both;animation-delay:.65s;animation-play-state:var(--motion-play,running)}
.animating .entry-O3 .o3-section{animation:O3-section 3.2s ease-out both;animation-play-state:var(--motion-play,running)}
.animating .entry-O3 .o3-verdict{animation:O3-verdict 1.4s ease-out both;animation-delay:1.15s;animation-play-state:var(--motion-play,running)}
@keyframes O3-settle{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes O3-route{from{stroke-dashoffset:180;opacity:0}to{stroke-dashoffset:0;opacity:1}}
@keyframes O3-section{0%{opacity:0;transform:translateX(-12px)}45%{opacity:.85}100%{opacity:1;transform:translateX(0)}}
@keyframes O3-verdict{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.entry-O3 .o3-layer,.entry-O3 .o3-route,.entry-O3 .o3-section,.entry-O3 .o3-verdict{animation:none!important;transform:none!important;opacity:1!important}}
`;

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text = (x, y, value, cls = 'o3-label', attrs = '') => `<text x="${x}" y="${y}" class="${cls}" ${attrs}>${esc(value)}</text>`;
const line = (x1, y1, x2, y2, cls = 'o3-rule') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
const dot = (x, y, color = '#93e3d5', solid = true) => `<circle cx="${x}" cy="${y}" r="5" fill="${solid ? color : '#102331'}" stroke="${color}" stroke-width="2"/>`;

function plate(x, y, w, h, palette, content, delay = 0, extra = '') {
  const [top, face, edge] = palette;
  return `<g class="o3-layer ${extra}" style="--o3-delay:${delay}s">
    <path d="M${x} ${y}h${w}l24 -14H${x + 24}Z" fill="${top}" stroke="${edge}" stroke-opacity=".5"/>
    <path d="M${x + w} ${y}l24 -14v${h}l-24 14Z" fill="${face}" opacity=".72" stroke="${edge}" stroke-opacity=".4"/>
    <path d="M${x} ${y}h${w}v${h}H${x}Z" fill="${face}" stroke="${edge}" stroke-opacity=".6"/>
    ${line(x + 1, y + h - 6, x + w - 1, y + h - 6)}${content}
  </g>`;
}

const palettes = {
  type: ['#335267', '#203b4e', '#7aacc0'],
  instance: ['#30665f', '#19443f', '#85d7c7'],
  evidence: ['#725740', '#46392f', '#d6ae83'],
  method: ['#3b5574', '#273b55', '#9bb8db'],
  property: ['#405c66', '#28424b', '#91bac2']
};

const captions = [
  'Three geological layers distinguish the Pump type, the Pump A instance and a reference excerpt. Illustrative only.',
  'Five separate ontology types: system, equipment, property, method and evidence. Pump A is an instance of Pump. Illustrative only.',
  '',
  'The proposed applies-to relation has supporting evidence, but no reviewed-as verdict is recorded. Applicability remains pending review. Illustrative only.',
  'An aligned knowledge cross-section preserves Pump A identity, named method relations and reference evidence while review remains pending. Illustrative only.'
];

function context(p) {
  return text(40, 47, 'Knowledge has depth.', 'o3-title') + text(40, 76, 'Identity. Context. Evidence.', 'o3-sub') +
    `<path d="M58 117v247m-7 -247h14m-14 247h14" fill="none" stroke="#668395"/>` +
    plate(96, 137, 491, 58, palettes.type,
      text(116, 172, 'Types', 'o3-label') + text(346, 174, 'Pump', 'o3-value') + `<rect x="319" y="156" width="12" height="12" fill="none" stroke="#a9cad9" stroke-width="2"/>`, 0) +
    plate(123, 223, 491, 58, palettes.instance,
      text(143, 258, 'Instances', 'o3-label') + text(373, 260, 'Pump A', 'o3-value') + dot(352, 251), .14) +
    plate(150, 309, 491, 58, palettes.evidence,
      text(170, 344, 'Evidence', 'o3-label') + text(375, 345, 'Reference excerpt', 'o3-label') + `<path d="M350 332h12v15h-12zM352 336h8m-8 4h6" fill="none" stroke="#efbd89" stroke-width="1.5"/>`, .28) +
    `<g class="o3-section"><path d="M285 109l27 -16 54 288 -27 16Z" fill="url(#${p}-cut)"/><path d="M285 109l54 288" stroke="#a1e5d8" stroke-width="1.5" opacity=".65"/></g>` +
    text(40, 407, 'Type is not instance.', 'o3-label o3-mint');
}

function structure(p) {
  const rows = [
    ['System', 'Context', 105, palettes.type],
    ['Equipment', '', 165, palettes.instance],
    ['Property', 'Flow condition', 225, palettes.property],
    ['Method', 'Head balance', 285, palettes.method],
    ['Evidence', 'Reference excerpt', 345, palettes.evidence]
  ];
  return text(40, 47, 'Five distinct types', 'o3-title') +
    `<rect x="391" y="34" width="10" height="10" fill="none" stroke="#a9cad9" stroke-width="2"/>` + text(410, 45, 'Type', 'o3-small') + dot(495, 39) + text(509, 45, 'Instance', 'o3-small') +
    rows.map(([name, value, y, pal], i) => plate(66 + i * 6, y, 556, 43, pal,
      text(84 + i * 6, y + 28, name) +
      (name === 'Equipment'
        ? `<rect x="275" y="180" width="10" height="10" fill="none" stroke="#a9cad9" stroke-width="2"/>` + text(295, 195, 'Pump', 'o3-label') + dot(485, 186) + text(501, 194, 'Pump A', 'o3-label') +
          `<path d="M470 183H363" class="o3-route" marker-end="url(#${p}-arrow)"/>` + text(415, 174, 'instance of', 'o3-small', 'text-anchor="middle"')
        : text(278 + i * 6, y + 29, value, 'o3-label')), i * .1)).join('') +
    `<path d="M54 95v293m-5 -293h10m-10 60h10m-10 60h10m-10 60h10m-10 60h10m-10 53h10" fill="none" stroke="#668395"/>` +
    text(40, 413, 'Type is not instance.', 'o3-small');
}

const views = {
  equipment: {
    entry: 'Equipment entry', question: 'Which method applies?', relation: 'applies to',
    target: 'Pump A', targetType: 'Instance', palette: palettes.instance, state: 'Proposed application',
    other: ['Flow condition', 'Reference excerpt'], dashed: true,
    aria: 'Equipment entry: Head balance applies to Pump A as a proposed application. Applicability is pending review. Illustrative only.'
  },
  method: {
    entry: 'Method entry', question: 'What input is required?', relation: 'requires input',
    target: 'Flow condition', targetType: 'Property', palette: palettes.property, state: 'Input dependency',
    other: ['Pump A', 'Reference excerpt'], dashed: false,
    aria: 'Method entry: Head balance requires input Flow condition. This names a dependency, not a completed calculation. Illustrative only.'
  },
  evidence: {
    entry: 'Evidence entry', question: 'What supports the method?', relation: 'supported by',
    target: 'Reference excerpt', targetType: 'Evidence', palette: palettes.evidence, state: 'Evidence connection',
    other: ['Pump A', 'Flow condition'], dashed: false,
    aria: 'Evidence entry: Head balance is supported by Reference excerpt. Support does not verify applicability. Illustrative only.'
  }
};

function explore(p, choice) {
  const v = views[choice];
  const focusTop = choice === 'method';
  const shift = choice === 'equipment' ? 0 : choice === 'method' ? 14 : 28;
  return text(40, 47, v.question, 'o3-title') + text(40, 77, v.entry, 'o3-sub') +
    `<g class="o3-section"><path d="M${405 + shift} 113l38 -22v236l-38 22Z" fill="url(#${p}-cut)"/></g>` +
    plate(94, 141, 499, 57, palettes.method,
      text(115, 176, 'Method', 'o3-small') + text(302, 177, 'Head balance', 'o3-value') +
      (focusTop ? `<path d="M95 142v54" stroke="#b5f3e5" stroke-width="5"/>` : ''), 0) +
    `<path d="M126 204v99h35" class="o3-route ${v.dashed ? 'o3-dashed' : ''}" marker-end="url(#${p}-arrow)"/>` +
    text(150, 233, v.relation, 'o3-relation') + text(603, 232, v.state, 'o3-small', 'text-anchor="end"') +
    plate(168, 277, 454, 57, v.palette,
      text(188, 312, v.targetType, 'o3-small') + text(350, 313, v.target, v.target.length > 14 ? 'o3-label' : 'o3-value') +
      (!focusTop ? `<path d="M169 278v54" stroke="#b5f3e5" stroke-width="5"/>` : ''), .2) +
    line(40, 368, 680, 368) + text(40, 394, 'Other layers', 'o3-small') + text(235, 394, v.other[0], 'o3-small') + text(438, 394, v.other[1], 'o3-small') +
    text(40, 417, 'Same facts. Different cross-section.', 'o3-small');
}

function review(p) {
  return text(40, 47, 'Connection is not approval.', 'o3-title') + text(40, 77, 'Proposed relation', 'o3-sub') +
    plate(58, 128, 227, 57, palettes.method, text(76, 164, 'Head balance', 'o3-value'), 0) +
    plate(440, 128, 217, 57, palettes.instance, text(474, 164, 'Pump A', 'o3-value'), .12) +
    `<path d="M296 156H428" class="o3-route o3-dashed" marker-end="url(#${p}-arrow)"/>` + text(363, 139, 'applies to', 'o3-relation', 'text-anchor="middle"') +
    `<path d="M324 184l17 17 -13 20 18 23" fill="none" stroke="#718392" stroke-width="1.5" opacity=".5"/>` +
    `<path d="M84 193v64h99" class="o3-route" marker-end="url(#${p}-arrow)"/>` + text(96, 228, 'supported by', 'o3-relation') +
    plate(198, 244, 444, 48, palettes.evidence, text(220, 275, 'Evidence', 'o3-small') + text(380, 276, 'Reference excerpt', 'o3-label'), .24) +
    `<g class="o3-verdict"><path d="M365 179v143" class="o3-rule o3-dashed"/><path d="M59 321H657v88H59Z" fill="url(#${p}-hatch)" stroke="#a98764" stroke-dasharray="5 5"/>` +
    text(79, 347, 'Review relation', 'o3-small') + text(267, 347, 'reviewed as', 'o3-relation') + text(637, 347, 'No verdict recorded', 'o3-small', 'text-anchor="end"') +
    text(79, 386, 'Applicability pending review', 'o3-value o3-amber') + `</g>`;
}

function outcome(p) {
  return text(40, 47, 'A clear claim. An open review.', 'o3-title') + text(40, 76, 'Context retained', 'o3-sub') +
    `<g class="o3-section"><path d="M61 112H653l-19 273H87Z" fill="url(#${p}-cut)" opacity=".8"/></g>` +
    plate(69, 123, 567, 62, palettes.instance,
      text(88, 149, 'Equipment', 'o3-small') + text(88, 174, 'Pump A', 'o3-value') + text(302, 164, 'instance of', 'o3-relation') + text(506, 165, 'Pump', 'o3-label'), 0) +
    plate(83, 211, 553, 70, palettes.method,
      text(102, 238, 'Head balance', 'o3-value') + text(314, 238, 'requires input', 'o3-relation') + text(501, 238, 'Flow condition', 'o3-label') +
      text(314, 266, 'applies to', 'o3-relation') + text(501, 266, 'Pump A', 'o3-label') +
      `<path d="M484 258h8" class="o3-route o3-dashed"/>`, .12) +
    plate(97, 307, 539, 58, palettes.evidence,
      text(117, 332, 'Head balance', 'o3-label') + text(303, 332, 'supported by', 'o3-relation') + text(458, 332, 'Reference excerpt', 'o3-label'), .24) +
    `<g class="o3-verdict">${dot(52, 399)}${text(66, 405, 'Identity clear', 'o3-small')}${dot(263, 399)}${text(277, 405, 'Relations named', 'o3-small')}${dot(486, 399, '#efbd89', false)}${text(500, 405, 'Review pending', 'o3-small o3-amber')}</g>`;
}

export function render(phase = 0, choice = 'base', uid = 'O3') {
  const step = Number.isInteger(phase) && phase >= 0 && phase <= 4 ? phase : 0;
  const selected = Object.hasOwn(views, choice) ? choice : 'equipment';
  const p = esc(String(uid));
  const label = step === 2 ? views[selected].aria : captions[step];
  const body = [context, structure, (prefix) => explore(prefix, selected), review, outcome][step](p);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="entry-O3 o3-phase-${step}" viewBox="0 0 720 460" role="img" aria-label="${esc(label)}">
    <defs>
      <linearGradient id="${p}-cut" x1="0" x2="1"><stop stop-color="#83dfce" stop-opacity=".025"/><stop offset=".6" stop-color="#a4eadb" stop-opacity=".13"/><stop offset="1" stop-color="#cef7e8" stop-opacity=".035"/></linearGradient>
      <pattern id="${p}-hatch" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-2 2l4 -4M0 10L10 0M8 12l4 -4" stroke="#caab84" stroke-width="1" opacity=".11"/></pattern>
      <marker id="${p}-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0l7 3.5 -7 3.5" fill="none" stroke="#efbd89" stroke-width="1.3"/></marker>
    </defs>
    <path d="M0 0H720V460H0Z" fill="#0c1927"/>
    <path d="M686 94v320m-6 -320h12m-12 40h7m-7 40h7m-7 40h12m-12 40h7m-7 40h7m-7 40h12m-12 40h7m-7 40h12" fill="none" stroke="#648296" stroke-width="1" opacity=".3"/>
    ${body}
    ${line(40, 430, 680, 430)}
    ${text(40, 451, 'Illustrative ontology · not an engineering review', 'o3-small')}
    ${text(679, 451, `0${step + 1}`, 'o3-small', 'text-anchor="end"')}
  </svg>`;
}
