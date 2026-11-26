export const id = 'T4';
export const title = 'Revision Palimpsest';
export const summary = 'Translucent source and reply sheets keep evidence, changes and human judgment visible.';

export const translations = [
  ['Revision Palimpsest', '겹쳐 읽는 수정 이력'],
  ['Translucent source and reply sheets keep evidence, changes and human judgment visible.', '반투명 원본과 회신 용지로 근거, 수정 이력, 인간의 판단을 함께 보여 줍니다.'],
  ['REVISION PALIMPSEST', '겹쳐 읽는 수정 이력'],
  ['Keep the first words.', '처음의 문장을 남깁니다.'],
  ['Read through the layers.', '겹친 기록을 함께 읽습니다.'],
  ['What supports the reply?', '회신의 근거는 무엇인가요?'],
  ['Leave room for judgment.', '판단할 여지를 남깁니다.'],
  ['History travels with the reply.', '회신에 이력이 함께 갑니다.'],
  ['Source', '원본'],
  ['Original', '원문'],
  ['Operating', '운전'],
  ['envelope', '범위'],
  ['Operating envelope', '운전 범위'],
  ['Original retained', '원문 보존'],
  ['Vendor reply', '공급사 회신'],
  ['See equipment', '장비 목록을'],
  ['schedule.', '참조하세요.'],
  ['A pointer is not proof.', '참조 안내만으로는 불충분'],
  ['Equipment schedule', '장비 목록'],
  ['Draft', '초안'],
  ['Evidence + rationale', '근거 + 검토 사유'],
  ['Evidence layer', '근거층'],
  ['Evidence missing', '근거 미연결'],
  ['Reference needed', '참고 근거 필요'],
  ['Reference linked', '참고 근거 연결'],
  ['Illustrative fragment', '설명용 참고 조각'],
  ['Ask for evidence', '근거 요청'],
  ['Draft for review', '검토용 초안'],
  ['Human review', '인간 검토'],
  ['Clarification', '확인 요청'],
  ['Draft reply', '회신 초안'],
  ['Evidence pending', '근거 대기 중'],
  ['Check applicability', '적용 가능성 확인'],
  ['Rationale retained', '검토 사유 보존'],
  ['No final judgment', '최종 판단 전'],
  ['Next step', '다음 단계'],
  ['Review draft', '검토용 초안'],
  ['ready', '준비됨'],
  ['Human judgment remains', '인간의 판단이 필요'],
  ['Source · change · rationale', '원본 · 변경 · 검토 사유'],
  ['Illustrative only', '설명용 예시'],
  ['Illustrative TBE context: original operating-envelope text is preserved beneath a vendor reply.', '설명용 기술 평가 맥락: 공급사 회신 아래 운전 범위 원문을 보존합니다.'],
  ['Illustrative TBE structure: separate source, vendor reply and draft layers retain their lineage.', '설명용 기술 평가 구조: 원본, 공급사 회신, 초안의 각 층에 출처 이력을 남깁니다.'],
  ['Illustrative TBE exploration: evidence is missing, so request supporting evidence.', '설명용 기술 평가 탐색: 근거가 없어 뒷받침할 자료를 요청합니다.'],
  ['Illustrative TBE exploration: a reference is linked, enabling a draft for human review.', '설명용 기술 평가 탐색: 참고 근거가 연결되어 인간 검토용 초안을 준비합니다.'],
  ['Illustrative TBE review: a human reviews the clarification request while evidence remains pending.', '설명용 기술 평가 검토: 근거를 기다리며 사람이 확인 요청을 검토합니다.'],
  ['Illustrative TBE review: a human checks applicability of a draft with linked evidence.', '설명용 기술 평가 검토: 사람이 연결 근거가 있는 초안의 적용 가능성을 확인합니다.'],
  ['Illustrative TBE outcome: a clarification is ready; original text and rationale remain preserved.', '설명용 기술 평가 결과: 확인 요청을 준비했으며 원문과 검토 사유를 보존합니다.'],
  ['Illustrative TBE outcome: a review draft is ready; final judgment remains human.', '설명용 기술 평가 결과: 검토용 초안을 준비했으며 최종 판단은 사람에게 남습니다.']
];

export const css = `
.entry-T4 { color:#283d37; background:#f4f0e7; font-family:Arial,"Apple SD Gothic Neo",sans-serif; }
.entry-T4 .serif { font-family:Georgia,"Times New Roman","Apple SD Gothic Neo",serif; }
.entry-T4 .small { font-size:18px; }
.entry-T4 .muted { fill:#65756b; }
.entry-T4 .ink { fill:#283d37; }
.entry-T4 .accent { fill:#a44d3f; }
.entry-T4 .source-ink { fill:#566b60; }
.entry-T4 .line { fill:none; stroke:#718579; stroke-width:1.4; }
.entry-T4 .proof { fill:none; stroke:#a44d3f; stroke-width:2.2; stroke-linecap:round; stroke-linejoin:round; }
.entry-T4 .paper { transform-box:fill-box; transform-origin:center; }
.entry-T4 .trace { stroke-dasharray:900; stroke-dashoffset:0; }
.animating .entry-T4 .source-layer { animation:T4-settle 1.5s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .draft-layer { animation:T4-unveil 2s .25s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .layer-one { animation:T4-settle 1.3s both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .layer-two { animation:T4-unveil 1.5s .2s both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .layer-three { animation:T4-unveil 1.6s .5s both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .evidence-mark { animation:T4-ink 1s 1.1s both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .trace { animation:T4-trace 2.8s .65s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .pencil { animation:T4-pencil 2s .3s ease-out both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .archive-source { animation:T4-settle 1.4s both; animation-play-state:var(--motion-play,running); }
.animating .entry-T4 .archive-draft { animation:T4-file 2s .2s cubic-bezier(.2,.7,.2,1) both; animation-play-state:var(--motion-play,running); }
@keyframes T4-settle { from { opacity:.15; transform:translate(-10px,25px); } to { opacity:1; transform:translate(0,0); } }
@keyframes T4-unveil { from { opacity:.12; transform:translate(35px,-20px) skewX(-3deg); } to { opacity:1; transform:translate(0,0) skewX(0deg); } }
@keyframes T4-ink { from { opacity:0; } to { opacity:1; } }
@keyframes T4-trace { from { stroke-dashoffset:900; } to { stroke-dashoffset:0; } }
@keyframes T4-pencil { from { opacity:0; transform:translate(34px,-36px); } to { opacity:1; transform:translate(0,0); } }
@keyframes T4-file { from { opacity:.2; transform:translate(76px,-12px); } to { opacity:1; transform:translate(0,0); } }
@media(prefers-reduced-motion:reduce) {
 .entry-T4 .paper, .entry-T4 .evidence-mark, .entry-T4 .trace, .entry-T4 .pencil { animation:none !important; }
}
`;

const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text = (x, y, value, size = 18, cls = '', extra = '') => `<text x="${x}" y="${y}" font-size="${size}" class="${cls}" ${extra}>${escape(value)}</text>`;
const rule = (x1, y, x2, opacity = 1) => `<path d="M${x1} ${y}H${x2}" class="line" opacity="${opacity}"/>`;
function sheet(x,y,w,h,fill='#fbf9f2',alpha=.95) {
  const d = `M${x} ${y}H${x+w-19}L${x+w} ${y+19}V${y+h}H${x}Z`;
  return `<path d="${d}" fill="#31443a" opacity=".055" transform="translate(5 7)"/><path d="${d}" fill="${fill}" fill-opacity="${alpha}" stroke="#a4afa0" stroke-width="1.2"/><path d="M${x+w-19} ${y}V${y+19}H${x+w}" fill="none" stroke="#a4afa0" stroke-width="1.1"/>`;
}
function registration(x,y) {
  return `<path d="M${x-7} ${y}H${x+7}M${x} ${y-7}V${y+7}" class="line" opacity=".65"/>`;
}
function context() {
  return `<g class="paper source-layer"><g transform="rotate(-5 259 252)">${sheet(84,137,350,231,'#e5eadb')}${text(111,170,'Source',18,'source-ink')}${rule(111,183,407,.5)}${text(111,222,'Operating',31,'serif ink')}${text(111,257,'envelope',31,'serif ink')}${rule(111,283,386,.5)}${rule(111,299,350,.4)}${text(111,337,'Original retained',18,'source-ink')}</g></g>
  <g class="paper draft-layer"><g transform="rotate(4 478 264)">${sheet(316,151,325,227,'#fffaf0',.91)}${text(343,185,'Vendor reply',18,'muted')}${rule(343,199,612,.5)}${text(343,243,'See equipment',29,'serif ink')}${text(343,278,'schedule.',29,'serif ink')}<path d="M341 287Q417 294 484 285" class="proof trace"/>${text(343,347,'A pointer is not proof.',18,'accent')}</g></g>`;
}
function structure() {
  return `${registration(60,124)}${registration(652,376)}
  <g class="paper layer-one">${sheet(74,130,481,94,'#e5eadb')}${text(100,160,'Source',18,'source-ink')}${text(100,194,'Operating envelope',27,'serif ink')}${text(526,195,'01',28,'serif muted','text-anchor="end"')}</g>
  <g class="paper layer-two">${sheet(114,203,481,94,'#f8f4e7',.94)}${text(140,233,'Vendor reply',18,'muted')}${text(140,267,'Equipment schedule',27,'serif ink')}${text(566,268,'02',28,'serif muted','text-anchor="end"')}</g>
  <g class="paper layer-three">${sheet(154,276,481,94,'#fbfbf3',.93)}${text(180,306,'Draft',18,'muted')}${text(180,340,'Evidence + rationale',27,'serif ink')}${text(606,341,'03',28,'serif muted','text-anchor="end"')}<path d="M179 350Q310 356 430 349" class="proof trace"/></g>`;
}
function explore(linked) {
  return `<g class="paper source-layer">${sheet(67,137,300,234,'#e5eadb')}${text(91,169,'Source',18,'source-ink')}${rule(91,183,338,.45)}${text(91,222,'Operating',29,'serif ink')}${text(91,257,'envelope',29,'serif ink')}${rule(91,284,250,.55)}${rule(91,299,227,.4)}${text(91,342,'01',30,'serif source-ink')}</g>
  <g class="paper draft-layer">${sheet(290,172,358,197,'#fffcf3',.9)}${text(317,204,'Evidence layer',18,'muted')}
  <g class="evidence-mark">${linked ? `<path d="M317 222H618V308H317Z" fill="#dce9d6" fill-opacity=".9"/><path d="M327 232V298M335 232V298" stroke="#789281" stroke-width="1"/>${text(351,253,'Reference linked',23,'ink')}${text(351,284,'Illustrative fragment',18,'source-ink')}<path d="M348 292Q456 298 582 291" class="proof trace"/>` : `<path d="M317 222H618V308H317Z" fill="none" stroke="#ae7764" stroke-width="1.5" stroke-dasharray="7 7"/>${text(337,253,'Evidence missing',23,'accent')}${text(337,284,'Reference needed',18,'muted')}<path d="M594 228L611 245M611 228L594 245" class="proof"/>`}</g>
  ${text(317,346,linked ? 'Draft for review' : 'Ask for evidence',27,'serif '+(linked?'ink':'accent'))}</g>`;
}
function review(linked) {
  return `<g class="paper source-layer">${sheet(67,141,250,221,'#e5eadb')}${text(91,173,'Original',18,'source-ink')}${rule(91,186,289,.45)}${text(91,225,'Operating',28,'serif ink')}${text(91,259,'envelope',28,'serif ink')}${rule(91,280,268,.45)}${rule(91,295,246,.35)}${text(91,338,'Original retained',18,'source-ink')}</g>
  <g class="paper draft-layer">${sheet(347,121,306,254,'#fffaf0',.96)}${text(372,153,'Human review',18,'muted')}${rule(372,167,625,.45)}${text(372,207,linked ? 'Draft reply' : 'Clarification',32,'serif ink')}${text(372,248,linked ? 'Check applicability' : 'Evidence pending',21,'accent')}<path d="M366 229Q490 216 632 231L631 260Q500 274 365 260Z" class="proof trace"/>${text(372,297,'Rationale retained',18,'muted')}${text(372,349,'No final judgment',18,'accent')}</g>
  <g class="pencil"><path d="M573 326L621 257L633 265L585 334Z" fill="#314a3e"/><path d="M573 326L569 343L585 334Z" fill="#d5b98e"/><path d="M569 343L572 335L576 338Z" fill="#314a3e"/><path d="M621 257L627 249Q630 247 633 250L638 254Q640 256 638 259L633 265Z" fill="#a44d3f"/><path d="M578 326L626 258" stroke="#bcc5ac" stroke-width="1.2"/></g>`;
}
function outcome(linked) {
  return `<path d="M59 163L79 133H310L336 151H631V369H59Z" fill="#dddccb" stroke="#a4afa0" stroke-width="1.2"/>
  <g class="paper archive-source">${sheet(70,145,280,221,'#e5eadb')}${text(95,180,'Source',18,'source-ink')}${text(92,274,'01',92,'serif source-ink')}${rule(95,292,315,.5)}${text(95,338,'Original retained',18,'source-ink')}</g>
  <g class="paper archive-draft"><g transform="rotate(-2 462 272)">${sheet(279,177,367,190,'#fffaf0',.94)}${text(306,209,'Next step',18,'muted')}${text(306,255,linked ? 'Review draft' : 'Clarification',36,'serif ink')}${text(306,293,'ready',36,'serif ink')}${text(306,339,'Human judgment remains',18,'accent')}</g></g>
  ${text(360,399,'Source · change · rationale',20,'source-ink','text-anchor="middle"')}`;
}

const headings = ['Keep the first words.','Read through the layers.','What supports the reply?','Leave room for judgment.','History travels with the reply.'];
const aria = [
  ['Illustrative TBE context: original operating-envelope text is preserved beneath a vendor reply.'],
  ['Illustrative TBE structure: separate source, vendor reply and draft layers retain their lineage.'],
  ['Illustrative TBE exploration: evidence is missing, so request supporting evidence.','Illustrative TBE exploration: a reference is linked, enabling a draft for human review.'],
  ['Illustrative TBE review: a human reviews the clarification request while evidence remains pending.','Illustrative TBE review: a human checks applicability of a draft with linked evidence.'],
  ['Illustrative TBE outcome: a clarification is ready; original text and rationale remain preserved.','Illustrative TBE outcome: a review draft is ready; final judgment remains human.']
];
export function render(phase = 0, choice = 'base', uid = 'T4') {
  const p = Number.isInteger(phase) ? Math.min(4, Math.max(0, phase)) : 0;
  const linked = choice === 'linked';
  const safeUid = String(uid).replace(/[^A-Za-z0-9_-]/g,'_') || 'T4';
  const label = aria[p][linked && p > 1 ? 1 : 0];
  const body = [context,structure,() => explore(linked),() => review(linked),() => outcome(linked)][p]();
  return `<svg class="entry-T4" viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escape(label)}" data-phase="${p}" data-choice="${linked?'linked':'missing'}"><title id="${safeUid}-title">${escape(label)}</title>
  <path d="M0 0H720V460H0Z" fill="#f4f0e7"/>
  ${text(42,33,'REVISION PALIMPSEST',16,'muted','letter-spacing="1.6"')}${rule(42,48,678,.5)}
  ${text(42,100,headings[p],p === 4 ? 37 : 40,'serif ink')}
  ${body}
  ${rule(42,414,678,.35)}${text(42,439,'Illustrative only',16,'muted')}${text(678,439,`${String(p+1).padStart(2,'0')} / 05`,16,'muted','text-anchor="end"')}
  </svg>`;
}
