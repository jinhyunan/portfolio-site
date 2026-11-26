export const id = 'O5';
export const title = 'A grammar for knowledge';
export const summary = 'Typed words become named statements, while provenance and applicability stay distinct.';

export const translations = [
  ['A grammar for knowledge', '지식을 위한 문법'],
  ['Typed words become named statements, while provenance and applicability stay distinct.', '유형을 가진 단어가 이름 있는 관계 문장이 되고, 출처와 적용성은 구분됩니다.'],
  ['ENGINEERING ONTOLOGY', '엔지니어링 온톨로지'],
  ['Illustrative only', '설명용 예시'],
  ['Knowledge has a grammar.', '지식에도 문법이 있습니다.'],
  ['System', '시스템'], ['Equipment', '장비'], ['Property', '속성'], ['Method', '계산 방법'], ['Evidence', '근거'],
  ['Different types.', '서로 다른 유형.'], ['Named relations.', '이름 있는 관계.'],
  ['Choose words. Name the link.', '단어를 고르고 관계를 명명합니다.'],
  ['A class is not an instance.', '클래스와 인스턴스는 다릅니다.'],
  ['TYPE', '유형'], ['INSTANCE', '인스턴스'], ['Pump', '펌프'], ['Pump A', '펌프 A'],
  ['instance of', '유형에 속함'], ['A family', '하나의 분류'], ['One member', '특정한 개체'],
  ['Type and instance stay distinct.', '유형과 개체를 구분합니다.'],
  ['Begin with equipment.', '장비에서 시작합니다.'], ['Begin with a method.', '계산 방법에서 시작합니다.'], ['Begin with evidence.', '근거에서 시작합니다.'],
  ['SUBJECT', '주어'], ['RELATION', '관계'], ['OBJECT', '목적어'],
  ['Head balance', '양정 수지'], ['Flow condition', '유량 조건'], ['Reference excerpt', '참조 문헌 발췌'],
  ['applies to', '적용 대상'], ['requires input', '필요 입력'], ['supported by', '뒷받침 근거'],
  ['Equipment entry', '장비 진입점'], ['Method entry', '계산 방법 진입점'], ['Evidence entry', '근거 진입점'],
  ['Same facts. A different entry.', '같은 사실, 다른 진입점.'],
  ['Applicability pending review', '적용성 검토 대기'],
  ['A citation is a starting point.', '출처는 검토의 출발점입니다.'],
  ['PROVENANCE', '출처'], ['APPLICABILITY', '적용성'], ['PENDING', '검토 대기'],
  ['Link recorded', '관계 기록됨'], ['Review required', '검토 필요'],
  ['Provenance does not settle applicability.', '출처만으로 적용성이 확정되지는 않습니다.'],
  ['A statement you can inspect.', '검토할 수 있는 문장.'],
  ['Typed terms', '유형이 있는 용어'], ['Named relation', '이름 있는 관계'], ['Visible status', '드러난 검토 상태'],
  ['Read the claim. Keep the question.', '주장을 읽고 검토 과제를 남깁니다.'],
  ['Five engineering types arranged as distinct typographic frames: system, equipment, property, method and evidence.', '시스템, 장비, 속성, 계산 방법, 근거의 다섯 엔지니어링 유형을 별도의 활자 프레임으로 표현합니다.'],
  ['Pump is an equipment type. Pump A is an instance of that type, not the type itself.', '펌프는 장비 유형이며, 펌프 A는 해당 유형에 속하는 특정 인스턴스입니다.'],
  ['Equipment entry highlights the proposed statement: Head balance applies to Pump A. Applicability is pending review.', '장비 진입점은 양정 수지가 펌프 A에 적용된다는 제안 문장을 강조합니다. 적용성은 검토 대기입니다.'],
  ['Method entry highlights the statement: Head balance requires input Flow condition. Applicability is pending review.', '계산 방법 진입점은 양정 수지에 유량 조건 입력이 필요하다는 문장을 강조합니다. 적용성은 검토 대기입니다.'],
  ['Evidence entry highlights the statement: Head balance is supported by Reference excerpt. Applicability is pending review.', '근거 진입점은 참조 문헌 발췌가 양정 수지를 뒷받침한다는 문장을 강조합니다. 적용성은 검토 대기입니다.'],
  ['An illustrative reference excerpt records provenance for Head balance. Applicability remains pending review.', '설명용 참조 문헌 발췌가 양정 수지의 출처로 기록됩니다. 적용성은 검토 대기 상태입니다.'],
  ['A typed statement connects Head balance to Pump A with the named relation applies to. It remains illustrative with applicability pending review.', '유형이 있는 문장에서 양정 수지와 펌프 A가 적용 대상이라는 관계로 연결됩니다. 설명용 예시이며 적용성은 검토 대기입니다.']
];

export const css = `
.entry-O5 { background:#f6f1e5; color:#203a43; font-family:Arial,"Noto Sans KR",sans-serif; }
.entry-O5 .o5-ink { fill:#203a43; }
.entry-O5 .o5-muted { fill:#61716d; }
.entry-O5 .o5-serif { font-family:Georgia,"Noto Serif KR",serif; }
.entry-O5 .o5-caption { font-size:16px; font-weight:700; letter-spacing:1.4px; }
.entry-O5 .o5-title { font-size:31px; font-weight:700; letter-spacing:-1px; }
.entry-O5 .o5-body { font-size:20px; }
.entry-O5 .o5-small { font-size:17px; }
.entry-O5 .o5-word { transform-box:fill-box; transform-origin:center; }
.entry-O5 .o5-rule { stroke-dasharray:900; stroke-dashoffset:0; }
.entry-O5 .o5-stamp { transform-box:fill-box; transform-origin:center; }
.animating .entry-O5 .o5-word { animation:O5-typeset 1.1s cubic-bezier(.16,1,.3,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-O5 .o5-rule { animation:O5-rule 1.6s cubic-bezier(.3,0,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-O5 .o5-stamp { animation:O5-stamp .8s cubic-bezier(.2,.8,.25,1) 1.8s both; animation-play-state:var(--motion-play,running); }
.animating .entry-O5 .o5-d1 { animation-delay:.1s; }
.animating .entry-O5 .o5-d2 { animation-delay:.35s; }
.animating .entry-O5 .o5-d3 { animation-delay:.6s; }
.animating .entry-O5 .o5-d4 { animation-delay:.85s; }
.animating .entry-O5 .o5-d5 { animation-delay:1.1s; }
@keyframes O5-typeset { from { opacity:0; transform:translate(24px,10px) rotate(2deg); } to { opacity:1; transform:translate(0,0) rotate(0); } }
@keyframes O5-rule { from { stroke-dashoffset:900; } to { stroke-dashoffset:0; } }
@keyframes O5-stamp { from { opacity:0; transform:translateY(-12px) scale(1.12); } to { opacity:1; transform:translateY(0) scale(1); } }
@media(prefers-reduced-motion:reduce) {
  .animating .entry-O5 .o5-word, .animating .entry-O5 .o5-rule, .animating .entry-O5 .o5-stamp { animation:none; }
}
`;

const C = { ink:'#203a43', muted:'#61716d', line:'#d5d3c4', paper:'#f6f1e5', blue:'#276f80', sage:'#6b805c', rust:'#bc5134', ochre:'#987328' };
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' }[char]));
const text = (x, y, copy, size = 20, color = C.ink, extra = '') => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" ${extra}>${escape(copy)}</text>`;
const rule = (x1, y1, x2, y2, color = C.line, width = 1.5, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const bracket = (x, y, w, h, color = C.ink, extra = '') => `<path d="M${x+10} ${y}H${x}V${y+h}H${x+10}M${x+w-10} ${y}H${x+w}V${y+h}H${x+w-10}" fill="none" stroke="${color}" stroke-width="2" ${extra}/>`;
const dot = (x, y, color, radius = 5) => `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}"/>`;

const titles = ['Knowledge has a grammar.', 'A class is not an instance.', '', 'A citation is a starting point.', 'A statement you can inspect.'];
const labels = [
  'Five engineering types arranged as distinct typographic frames: system, equipment, property, method and evidence.',
  'Pump is an equipment type. Pump A is an instance of that type, not the type itself.',
  '',
  'An illustrative reference excerpt records provenance for Head balance. Applicability remains pending review.',
  'A typed statement connects Head balance to Pump A with the named relation applies to. It remains illustrative with applicability pending review.'
];

function context() {
  const rows = [
    [66, 148, 'System', 166, C.muted],
    [130, 195, 'Equipment', 242, C.blue],
    [214, 242, 'Property', 196, C.ochre],
    [326, 289, 'Method', 181, C.rust],
    [426, 336, 'Evidence', 218, C.sage]
  ];
  return `<path d="M47 121H36V350H47" fill="none" stroke="${C.ink}" stroke-width="2" class="o5-rule"/>
    ${rows.map(([x,y,label,w,color],i) => `<g class="o5-word o5-d${i+1}">${rule(x,y+13,x+w,y+13,color,2)}${rule(x+w,y+7,x+w,y+19,color,2)}${text(x,y,label,30,color,'font-weight="700"')}${text(x-29,y,String(i+1).padStart(2,'0'),16,C.muted)}</g>`).join('')}
    <g class="o5-word o5-d3">${text(430,143,'Different types.',20)}${text(430,171,'Named relations.',20,C.muted)}</g>
    ${text(36,390,'Choose words. Name the link.',23,C.ink,'class="o5-serif"')}`;
}

function structure() {
  return `${text(36,137,'TYPE',16,C.blue,'class="o5-caption"')}
    <g class="o5-word o5-d1">${bracket(48,158,314,74,C.blue)}${text(77,212,'Pump',53,C.blue,'class="o5-serif"')}${text(402,200,'A family',22,C.muted)}</g>
    ${text(36,278,'INSTANCE',16,C.blue,'class="o5-caption"')}
    <g class="o5-word o5-d3">${dot(68,316,C.blue,8)}${text(94,332,'Pump A',46,C.blue,'class="o5-serif"')}${text(402,325,'One member',22,C.muted)}</g>
    <path d="M329 316H370V244H329" fill="none" stroke="${C.rust}" stroke-width="2" class="o5-rule"/>
    <path d="M337 237L329 244L337 251" fill="none" stroke="${C.rust}" stroke-width="2"/>
    ${text(401,259,'instance of',22,C.rust,'font-style="italic" class="o5-word o5-d4"')}
    ${rule(48,352,362,352,C.blue,1.5)}
    ${text(36,391,'Type and instance stay distinct.',22,C.ink,'class="o5-serif"')}`;
}

const paths = {
  equipment: {
    title:'Begin with equipment.', relation:'applies to', object:'Pump A', category:'Equipment', color:C.blue,
    entry:'Equipment entry', focus:'object',
    aria:'Equipment entry highlights the proposed statement: Head balance applies to Pump A. Applicability is pending review.'
  },
  method: {
    title:'Begin with a method.', relation:'requires input', object:'Flow condition', category:'Property', color:C.ochre,
    entry:'Method entry', focus:'subject',
    aria:'Method entry highlights the statement: Head balance requires input Flow condition. Applicability is pending review.'
  },
  evidence: {
    title:'Begin with evidence.', relation:'supported by', object:'Reference excerpt', category:'Evidence', color:C.sage,
    entry:'Evidence entry', focus:'object',
    aria:'Evidence entry highlights the statement: Head balance is supported by Reference excerpt. Applicability is pending review.'
  }
};

function explore(choice) {
  const p = paths[choice];
  const subjectActive = p.focus === 'subject';
  return `<path d="M95 183V217H231V256H369" fill="none" stroke="${C.line}" stroke-width="2" class="o5-rule"/>
    ${text(38,126,'SUBJECT',16,C.muted,'class="o5-caption"')}
    <g class="o5-word o5-d1">${bracket(36,138,310,57,C.rust)}${subjectActive ? `<rect x="48" y="146" width="286" height="41" fill="${C.rust}" rx="2"/>` : ''}${text(57,177,'Head balance',32,subjectActive ? C.paper : C.rust,'class="o5-serif"')}${text(367,174,'Method',18,C.rust)}${subjectActive ? dot(329,126,C.rust) : ''}</g>
    <g class="o5-word o5-d3">${text(162,223,'RELATION',16,C.muted,'class="o5-caption"')}${text(163,261,p.relation,30,C.ink,'class="o5-serif" font-style="italic"')}${rule(164,271,382,271,C.ink,1.5)}</g>
    ${text(352,293,'OBJECT',16,C.muted,'class="o5-caption"')}
    <g class="o5-word o5-d5">${bracket(348,305,335,57,p.color)}${!subjectActive ? `<rect x="360" y="313" width="311" height="41" fill="${p.color}" rx="2"/>` : ''}${text(369,345,p.object,p.object.length > 15 ? 28 : 32,subjectActive ? p.color : C.paper,'class="o5-serif"')}${!subjectActive ? dot(670,293,p.color) : ''}</g>
    ${text(38,334,p.entry,18,subjectActive ? C.rust : p.color,'font-weight="700"')}
    ${text(352,386,p.category,18,p.color)}
    ${text(38,390,'Same facts. A different entry.',18,C.muted)}
    <path d="M36 403H684" stroke="${C.line}"/>
    ${dot(46,421,C.rust,4)}${text(58,427,'Applicability pending review',17,C.rust)}`;
}

function review() {
  return `${rule(388,127,388,358,C.line,2)}
    ${text(36,137,'PROVENANCE',16,C.sage,'class="o5-caption"')}
    <g class="o5-word o5-d1">${text(77,198,'Head balance',31,C.rust,'class="o5-serif"')}${rule(76,215,333,215,C.rust,1.5)}</g>
    <path d="M211 229V247M204 240L211 247L218 240" fill="none" stroke="${C.sage}" stroke-width="2" class="o5-rule"/>
    <g class="o5-word o5-d3">${text(140,277,'supported by',22,C.ink,'class="o5-serif" font-style="italic"')}${text(34,335,'“',78,C.sage,'class="o5-serif"')}${text(77,320,'Reference excerpt',28,C.sage,'class="o5-serif"')}${text(124,352,'Link recorded',18,C.muted)}</g>
    ${text(420,137,'APPLICABILITY',16,C.rust,'class="o5-caption"')}
    <g class="o5-stamp"><circle cx="549" cy="231" r="72" fill="none" stroke="${C.rust}" stroke-width="2" stroke-dasharray="5 5"/>${text(549,243,'PENDING',25,C.rust,'font-weight="700" text-anchor="middle"')}<path d="M500 260H598" stroke="${C.rust}" stroke-width="2"/></g>
    ${text(549,335,'Review required',20,C.rust,'text-anchor="middle"')}
    ${text(36,391,'Provenance does not settle applicability.',21,C.ink,'class="o5-serif"')}`;
}

function outcome() {
  return `<g class="o5-word o5-d1">${text(38,167,'Head balance',44,C.rust,'class="o5-serif"')}${bracket(36,122,325,61,C.rust)}${text(381,162,'Method',19,C.rust)}</g>
    <g class="o5-word o5-d2">${text(115,228,'applies to',36,C.ink,'class="o5-serif" font-style="italic"')}${rule(114,239,278,239,C.ink,1.5)}</g>
    <g class="o5-word o5-d3">${bracket(292,253,280,66,C.blue)}${dot(314,285,C.blue,6)}${text(335,301,'Pump A',44,C.blue,'class="o5-serif"')}${text(591,294,'Equipment',17,C.blue)}</g>
    <g class="o5-stamp">${dot(48,353,C.rust,5)}${text(62,360,'Applicability pending review',21,C.rust)}${rule(36,374,684,374,C.line)}</g>
    <g class="o5-word o5-d5">${text(36,402,'Typed terms',17,C.rust)}${text(265,402,'Named relation',17)}${text(525,402,'Visible status',17,C.blue)}</g>`;
}

export function render(phase = 0, choice = 'base', uid = 'O5') {
  const stage = Math.max(0, Math.min(4, Math.trunc(Number(phase) || 0)));
  const selected = Object.hasOwn(paths, choice) ? choice : 'equipment';
  const headline = stage === 2 ? paths[selected].title : titles[stage];
  const aria = stage === 2 ? paths[selected].aria : labels[stage];
  const body = stage === 0 ? context() : stage === 1 ? structure() : stage === 2 ? explore(selected) : stage === 3 ? review() : outcome();
  const footerY = 448;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${escape(aria)}" class="entry-O5" data-render-id="${escape(uid)}">
    <rect width="720" height="460" rx="16" fill="${C.paper}"/>
    <path d="M36 52H684" stroke="${C.ink}" stroke-width="1.5"/>
    ${text(36,37,'ENGINEERING ONTOLOGY',16,C.ink,'class="o5-caption"')}
    ${text(684,37,`${String(stage+1).padStart(2,'0')} / 05`,16,C.muted,'text-anchor="end"')}
    ${text(36,94,headline,31,C.ink,'class="o5-title"')}
    ${body}
    ${text(36,footerY,stage === 4 ? 'Read the claim. Keep the question.' : 'Illustrative only',16,C.muted)}
    ${stage === 4 ? text(684,footerY,'Illustrative only',16,C.muted,'text-anchor="end"') : text(684,footerY,'O5',16,C.muted,'text-anchor="end"')}
  </svg>`;
}
