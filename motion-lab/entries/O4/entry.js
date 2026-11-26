export const id = 'O4';
export const title = 'The Knowledge Cabinet';
export const summary = 'Turn a physical index leaf to distinguish types, instances, evidence and review.';

export const translations = [
  ['The Knowledge Cabinet', '지식 서랍장'],
  ['Turn a physical index leaf to distinguish types, instances, evidence and review.', '색인지를 넘기며 유형, 개체, 근거, 검토를 구분합니다.'],
  ['Five kinds of knowledge', '다섯 가지 지식 유형'],
  ['A place for every kind', '유형마다 제자리에'],
  ['System', '계통'], ['Equipment', '장비'], ['Property', '속성'],
  ['Method', '계산 방법'], ['Evidence', '근거'],
  ['Illustrative index', '설명용 색인'], ['Illustrative only', '설명용 예시'],
  ['A type is not an instance', '유형과 개체는 다릅니다'],
  ['Type', '유형'], ['Instance', '개체'], ['Pump', '펌프'], ['Pump A', '펌프 A'],
  ['instance of', '유형에 속함'], ['Shared definition', '공통 정의'], ['One identified item', '식별된 하나의 개체'],
  ['Choose where to begin', '탐색의 시작점을 선택하세요'],
  ['Same facts · new entry point', '같은 사실 · 다른 시작점'],
  ['Equipment entry', '장비에서 시작'], ['Method entry', '계산 방법에서 시작'], ['Evidence entry', '근거에서 시작'],
  ['Head balance', '수두 수지'], ['Flow condition', '유량 조건'], ['Reference excerpt', '참고 자료 발췌'],
  ['applies to', '적용 대상'], ['requires input', '필요 입력'], ['supported by', '뒷받침하는 근거'],
  ['A link is not an approval', '연결이 검토 승인은 아닙니다'],
  ['Provenance', '출처'], ['Illustrative source', '설명용 출처'],
  ['Applicability', '적용 적합성'], ['Pending review', '검토 대기'], ['reviewed as', '검토 상태'],
  ['Keep the context with the claim', '주장과 맥락을 함께 보존합니다'],
  ['Class & instance', '유형과 개체'], ['Inputs & provenance', '입력과 출처'],
  ['Applicability pending review', '적용 적합성 검토 대기'],
  ['Knowledge cabinet showing five distinct engineering knowledge types.', '서로 다른 다섯 가지 엔지니어링 지식 유형을 보여 주는 지식 서랍장.'],
  ['An open index distinguishes the Pump type from the Pump A instance.', '펼친 색인에서 펌프 유형과 펌프 A 개체를 구분합니다.'],
  ['Equipment entry shows that Pump A is an instance of Pump.', '장비 시작점은 펌프 A가 펌프 유형에 속함을 보여 줍니다.'],
  ['Method entry shows Head balance applies to Pump A and requires Flow condition.', '계산 방법 시작점은 수두 수지의 적용 대상이 펌프 A이며 유량 조건이 필요함을 보여 줍니다.'],
  ['Evidence entry shows Head balance is supported by Reference excerpt.', '근거 시작점은 참고 자료 발췌가 수두 수지를 뒷받침함을 보여 줍니다.'],
  ['A provenance leaf supports a method while applicability remains pending review.', '출처 색인지는 계산 방법을 뒷받침하지만 적용 적합성은 검토 대기 상태입니다.'],
  ['An organized index retains class, instance, inputs, provenance and pending applicability review.', '정리된 색인은 유형, 개체, 입력, 출처와 적용 적합성 검토 대기 상태를 함께 보존합니다.']
];

export const css = `
.entry-O4{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#203d47;isolation:isolate}
.entry-O4 text{fill:#203d47;font-weight:520;letter-spacing:-.35px}
.entry-O4 .o4-heading{font-size:27px;font-weight:650;letter-spacing:-.8px}
.entry-O4 .o4-label{font-size:22px;font-weight:620}
.entry-O4 .o4-small{font-size:17px;letter-spacing:.05px}
.entry-O4 .o4-meta{font-size:16px;letter-spacing:.65px}
.entry-O4 .o4-muted{fill:#62727a}
.entry-O4 .o4-teal{fill:#127c75}
.entry-O4 .o4-amber{fill:#946120}
.entry-O4 .o4-white{fill:#fffdf6}
.entry-O4 .o4-rule{stroke:#c8cec6;stroke-width:1.2}
.entry-O4 .o4-edge{stroke:#42626b;stroke-width:1.4;stroke-linejoin:round}
.entry-O4 .o4-arrive{transform-box:fill-box;transform-origin:12% 90%}
.entry-O4 .o4-seal{transform-box:fill-box;transform-origin:center}
.animating .entry-O4 .o4-arrive{animation:O4-leaf 2.2s cubic-bezier(.2,.7,.2,1) both;animation-play-state:var(--motion-play,running)}
.animating .entry-O4 .o4-second{animation-delay:.18s}
.animating .entry-O4 .o4-third{animation-delay:.32s}
.animating .entry-O4 .o4-trace{animation:O4-trace 2.4s ease both;animation-play-state:var(--motion-play,running)}
.animating .entry-O4 .o4-seal{animation:O4-stamp 2.6s ease both;animation-play-state:var(--motion-play,running)}
@keyframes O4-leaf{0%{opacity:0;transform:translateY(18px) rotate(-6deg)}30%{opacity:1}100%{opacity:1;transform:translateY(0) rotate(0)}}
@keyframes O4-trace{0%,28%{stroke-dasharray:800;stroke-dashoffset:800}100%{stroke-dasharray:800;stroke-dashoffset:0}}
@keyframes O4-stamp{0%,45%{opacity:0;transform:scale(1.13) rotate(-5deg)}70%{opacity:1;transform:scale(.97) rotate(1deg)}100%{opacity:1;transform:scale(1) rotate(0)}}
@media(prefers-reduced-motion:reduce){.entry-O4 *{animation:none!important}}
`;

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const text = (x,y,label,cls='o4-small',extra='') => `<text x="${x}" y="${y}" class="${cls}" ${extra}>${escape(label)}</text>`;
const rule = (x1,y1,x2,y2,extra='') => `<path d="M${x1} ${y1}H${x2}" class="o4-rule" ${extra}/>`;
const hole = (x,y) => `<circle cx="${x}" cy="${y}" r="5" fill="#e2e5dc" stroke="#b5bdb3" stroke-width="1.2"/>`;
const rivet = (x,y) => `<circle cx="${x}" cy="${y}" r="7" fill="#b4955c" stroke="#7f704e"/><path d="M${x-3} ${y}h6" stroke="#fff4d5" stroke-width="1.5"/>`;
const pump = (x,y,instance=false) => `<g transform="translate(${x} ${y})" fill="none" stroke="${instance?'#127c75':'#526e77'}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M-60 12h31M29-18h31v18H37M-29 12v-12a29 29 0 1 1 58 0v12M-33 41h66M-22 26l-7 15M22 26l7 15"/><circle r="24"/><path d="M-8-12L13 0-8 12Z" fill="${instance?'#127c75':'none'}"/>${instance?'<circle cx="51" cy="36" r="6" fill="#c39a54" stroke="#c39a54"/>':''}</g>`;
const arrow = (x1,y1,x2,y2,color='#127c75',dash=false) => `<path class="o4-trace" d="M${x1} ${y1}L${x2} ${y2}m-7-5 7 5-7 5" fill="none" stroke="${color}" stroke-width="1.8" ${dash?'stroke-dasharray="4 5"':''}/>`;

function context(n) {
  const rows = [
    ['System',0,'#314e5b'],['Equipment',1,'#49717a'],['Property',2,'#6d8d8b'],['Method',3,'#127c75'],['Evidence',4,'#b78b48']
  ];
  return `${text(44,55,'Five kinds of knowledge','o4-heading')}${text(45,83,'A place for every kind','o4-small o4-muted')}
    <path d="M92 364V151l41-35h458l36 35v213l-22 27H114Z" fill="#d5ddd3" stroke="#71867f" stroke-width="1.5"/>
    <path d="M92 151h535M114 391v11h491v-11" fill="none" stroke="#71867f" stroke-width="1.5"/>
    <path d="M111 170h497v189H111Z" fill="#627b74"/>
    ${rows.map(([label,i,color]) => `<g class="o4-arrive" style="animation-delay:${i*.09}s"><g transform="translate(${125+i*4} ${157+i*38})"><path d="M0 0h${368-i*10}l12-12h91v48H0Z" fill="url(#${n}-paper)" class="o4-edge"/><path d="M${368-i*10} 0l12-12h91v36h-103Z" fill="${color}"/>${text(23,27,label,'o4-label')}${text(427-i*10,14,`0${i+1}`,'o4-meta o4-white','text-anchor="middle"')}${hole(8,19)}</g></g>`).join('')}
    <path d="M92 354h535v28H92Z" fill="#b7c6b7" stroke="#71867f" stroke-width="1.5"/>
    ${rivet(110,368)}${rivet(609,368)}<rect x="278" y="357" width="164" height="28" rx="3" fill="#ede6d3" stroke="#927d52"/>${text(360,377,'Illustrative index','o4-meta','text-anchor="middle"')}`;
}

function structure(n) {
  return `${text(44,55,'A type is not an instance','o4-heading')}
    <path d="M75 119h570v249H75Z" fill="#ccd8cd" stroke="#6c817b" stroke-width="1.5"/>
    <g class="o4-arrive"><path d="M88 108h259l13 16v224l-13-13H88Z" fill="url(#${n}-paper)" class="o4-edge"/>${text(119,148,'Type','o4-small o4-muted')}${text(219,192,'Pump','o4-heading','text-anchor="middle"')}${pump(219,250)}${text(219,322,'Shared definition','o4-small','text-anchor="middle"')}
    <path d="M632 108H373l-13 16v224l13-13h259Z" fill="url(#${n}-paper)" class="o4-edge"/>${text(403,148,'Instance','o4-small o4-teal')}${text(501,192,'Pump A','o4-heading','text-anchor="middle"')}${pump(501,250,true)}${text(501,322,'One identified item','o4-small','text-anchor="middle"')}
    <path d="M347 108v227l13 13 13-13V108" fill="none" stroke="#acb9b0" stroke-width="1.2"/>${rivet(360,156)}${rivet(360,305)}</g>
    <g class="o4-arrive o4-second"><path d="M477 350v36H243" fill="none" stroke="#127c75" stroke-width="1.8" class="o4-trace"/><path d="M252 380l-9 6 9 6" fill="none" stroke="#127c75" stroke-width="1.8"/><rect x="287" y="369" width="146" height="32" rx="16" fill="#f1eee4"/>${text(360,391,'instance of','o4-small o4-teal','text-anchor="middle"')}</g>`;
}

function explore(n,choice) {
  const selected = {equipment:0,method:1,evidence:2}[choice];
  const tabs = ['Equipment','Method','Evidence'];
  const accent = ['#49717a','#127c75','#a47734'][selected];
  const labels = {
    equipment:['Equipment entry','Pump A','instance of','Pump'],
    method:['Method entry','Head balance','applies to','Pump A'],
    evidence:['Evidence entry','Head balance','supported by','Reference excerpt']
  }[choice];
  return `${text(44,55,'Choose where to begin','o4-heading')}${text(45,83,'Same facts · new entry point','o4-small o4-muted')}
    <path d="M91 155h540v235H91Z" fill="#bdcdbf" stroke="#648074" stroke-width="1.5"/>
    <path d="M105 144h510v231H105Z" fill="#e1e4d7" class="o4-edge"/>
    ${tabs.map((label,i) => `<path d="M${121+i*163} ${i===selected?110:124}h142l12 12v34H${121+i*163}Z" fill="${i===selected?accent:'#dde4d9'}" stroke="#607c72" stroke-width="1.2"/>${text(192+i*163,i===selected?140:153,label,`o4-small ${i===selected?'o4-white':'o4-muted'}`,'text-anchor="middle"')}`).join('')}
    <g class="o4-arrive"><path d="M112 168h500v207H112Z" fill="url(#${n}-paper)" class="o4-edge"/><path d="M112 168h14v207h-14Z" fill="${accent}"/>${hole(146,193)}${hole(146,346)}${text(174,198,labels[0],'o4-meta o4-muted')}
    ${text(174,242,labels[1],'o4-heading')}${text(174,282,labels[2],'o4-small o4-teal')}${arrow(374,275,566,275,accent)}${text(174,322,labels[3],'o4-heading')}
    ${choice==='method'?`${text(174,357,'requires input','o4-small o4-muted')}${text(363,357,'Flow condition','o4-small')}`:`<path d="M174 350h390" stroke="#d0d5cb" stroke-width="1.2"/>`}
    </g>${rivet(99,183)}${rivet(99,352)}
    <path d="M91 390h540v10H91Z" fill="#9db39f" stroke="#648074" stroke-width="1.2"/>`;
}

function review(n) {
  return `${text(44,55,'A link is not an approval','o4-heading')}
    <g class="o4-arrive"><path d="M88 114h330v249H88Z" fill="#cad6cb" stroke="#71877c" stroke-width="1.5"/>
    <path d="M100 103h323v249H100Z" fill="url(#${n}-paper)" class="o4-edge"/>
    <path d="M100 103h323v42H100Z" fill="#dce5d9" stroke="#71877c" stroke-width="1.2"/>${text(127,132,'Provenance','o4-label')}${text(127,184,'Head balance','o4-label')}${text(127,222,'supported by','o4-small o4-teal')}${text(127,266,'Reference excerpt','o4-label')}
    <path d="M127 286h264M127 297h237M127 308h254" stroke="#c7d0c5" stroke-width="1.3"/>${text(127,336,'Illustrative source','o4-meta o4-muted')}${hole(113,123)}</g>
    <g class="o4-arrive o4-second"><path d="M454 124h169l16 16v219H454Z" fill="#f2e7cf" stroke="#a58850" stroke-width="1.4"/><path d="M623 124v17h16" fill="#e1cb9f" stroke="#a58850" stroke-width="1.2"/>${text(546,172,'Applicability','o4-label','text-anchor="middle"')}
    <g class="o4-seal"><circle cx="546" cy="258" r="66" fill="none" stroke="#ae8137" stroke-width="2"/><circle cx="546" cy="258" r="59" fill="none" stroke="#ae8137" stroke-width="1" stroke-dasharray="2 5"/><path d="M533 225h26m-24 0c0 13 22 16 22 30s-22 17-22 30m22-60c0 13-22 16-22 30s22 17 22 30m-24 0h26" fill="none" stroke="#ae8137" stroke-width="1.7"/>${text(546,310,'Pending review','o4-small o4-amber','text-anchor="middle"')}</g></g>
    <path d="M261 364v23h284v-23" class="o4-trace" fill="none" stroke="#9a7b43" stroke-width="1.5" stroke-dasharray="4 5"/><rect x="345" y="370" width="119" height="31" fill="#f1eee4"/>${text(404,391,'reviewed as','o4-small o4-amber','text-anchor="middle"')}`;
}

function outcome(n) {
  return `${text(44,55,'Keep the context with the claim','o4-heading')}
    <path d="M80 130h80l18-23h176l17 23h269v243H80Z" fill="#b9cdbd" stroke="#5e7c6d" stroke-width="1.5"/>
    <g class="o4-arrive"><path d="M105 124h511v231H105Z" fill="#e3e6da" class="o4-edge"/>
    <path d="M117 112h486v230H117Z" fill="url(#${n}-paper)" class="o4-edge"/>${hole(134,136)}${hole(134,318)}<path d="M153 112v230" stroke="#c1cbc0" stroke-width="1.1"/>
    ${text(176,150,'Class & instance','o4-small o4-muted')}${text(176,184,'Pump A','o4-label')}${text(327,184,'instance of','o4-small o4-teal')}${text(491,184,'Pump','o4-label')}
    <path d="M176 201h398" stroke="#c7d0c5" stroke-width="1.2"/>
    ${text(176,230,'Inputs & provenance','o4-small o4-muted')}${text(176,262,'Head balance','o4-label')}
    ${text(176,292,'requires input','o4-small o4-teal')}${text(385,292,'Flow condition','o4-small')}
    ${text(176,322,'supported by','o4-small o4-teal')}${text(385,322,'Reference excerpt','o4-small')}</g>
    <g class="o4-seal"><path d="M144 361h432v41H144Z" fill="#f0e3c6" stroke="#b08a46" stroke-width="1.4"/><circle cx="168" cy="381.5" r="8" fill="none" stroke="#a27731" stroke-width="1.6"/><path d="M168 376v6l4 2" fill="none" stroke="#a27731" stroke-width="1.5"/>${text(193,388,'Applicability pending review','o4-small o4-amber')}</g>`;
}

export function render(phase=0,choice='base',uid='O4') {
  const p = Number.isInteger(phase) && phase>=0 && phase<=4 ? phase : 0;
  const c = ['equipment','method','evidence'].includes(choice) ? choice : 'equipment';
  const n = String(uid).replace(/[^A-Za-z0-9_-]/g,'-');
  const descriptions = [
    'Knowledge cabinet showing five distinct engineering knowledge types.',
    'An open index distinguishes the Pump type from the Pump A instance.',
    {equipment:'Equipment entry shows that Pump A is an instance of Pump.',method:'Method entry shows Head balance applies to Pump A and requires Flow condition.',evidence:'Evidence entry shows Head balance is supported by Reference excerpt.'}[c],
    'A provenance leaf supports a method while applicability remains pending review.',
    'An organized index retains class, instance, inputs, provenance and pending applicability review.'
  ];
  const content = [context,structure,(ns)=>explore(ns,c),review,outcome][p](n);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="${escape(descriptions[p])}" class="entry-O4"><defs><linearGradient id="${n}-paper" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fffdf6"/><stop offset="1" stop-color="#edeedf"/></linearGradient><pattern id="${n}-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" fill="none" stroke="#d1d8cb" stroke-width=".5"/></pattern></defs><rect width="720" height="460" fill="#f1eee4"/><rect x="44" y="104" width="632" height="307" fill="url(#${n}-grid)" opacity=".55"/><path d="M44 99h632M44 420h632" stroke="#c4ccbf" stroke-width="1"/>${content}${text(44,444,'Illustrative only','o4-meta o4-muted')}${text(676,444,`0${p+1} / 05`,'o4-meta o4-muted','text-anchor="end"')}</svg>`;
}
