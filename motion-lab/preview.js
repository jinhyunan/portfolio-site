const params = new URLSearchParams(location.search);
const records = await fetch('./manifest.json').then(r=>r.json());
const record = records.find(r=>r.id===params.get('id')) || records[0];
const topic = await fetch(`./resources/${record.topic}.json`).then(r=>r.json());
if(params.has('compact')) document.body.classList.add('compact');
try {
const entry = await import('./'+record.module);
const style=document.createElement('style'); style.textContent=entry.css; document.head.append(style);
document.title=`${record.id} · ${entry.title}`;
document.querySelector('#entry-id').textContent=record.id;
document.querySelector('#topic').textContent=topic.name;
document.querySelector('#title').textContent=entry.title;
document.querySelector('#summary').textContent=entry.summary;
let phase=Number(params.get('phase') || 2), choice=topic.choices[0][0], language='en', paused=params.has('still'), elapsed=0, last=0, frame=0, inView=true;
try{if(localStorage.getItem('portfolio-language')==='ko')language='ko';}catch{}
const stage=document.querySelector('#stage'), drawing=document.querySelector('#drawing');
const reduced=matchMedia('(prefers-reduced-motion:reduce)');
const pairMap=new Map();
const shellPairs=[['← All studies','← 모든 시안'],['Language','언어'],['Scene','장면'],['Illustrative condition','설명용 조건'],['Pause motion','모션 일시정지'],['Resume motion','모션 계속 보기'],['Replay ↺','다시 보기 ↺'],['Still frame','정지 화면'],['Illustrative study · not an engineering result','설명용 시안 · 실제 엔지니어링 결과 아님'],['P&ID Agent','P&ID 에이전트'],['Calc Agent','계산 에이전트'],['Engineering Ontology','엔지니어링 온톨로지'],['TBE Review & Reply','TBE 검토 및 회신'],...['Context','Structure','Explore','Review','Outcome'].map((name,i)=>[`0${i+1} ${name}`,`0${i+1} ${['맥락','구조','탐색','검토','결과'][i]}`]),...topic.choices.map(([,en,ko])=>[en,ko])];
for(const [en,ko] of [...shellPairs,...(entry.translations || [])]){pairMap.set(en.trim(),{en,ko});pairMap.set(ko.trim(),{en,ko});}
const t=text=>pairMap.get(text.trim())?.[language]||text;
function translate(){
 document.documentElement.lang=language;document.title=`${record.id} · ${t(entry.title)}`;
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){const n=walker.currentNode;if(n.parentElement.closest('script,style'))continue;const p=pairMap.get(n.nodeValue.trim());if(p)n.nodeValue=p[language];}
 for(const el of document.querySelectorAll('[aria-label]'))el.setAttribute('aria-label',t(el.getAttribute('aria-label')));
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
}
function active(){return !paused&&!document.hidden&&inView&&!reduced.matches&&elapsed<8000;}
function tick(now){frame=0;if(active()){if(last)elapsed=Math.min(8000,elapsed+now-last);last=now;frame=requestAnimationFrame(tick);}else last=0;stage.style.setProperty('--motion-play',active()?'running':'paused');}
function sync(){if(frame)cancelAnimationFrame(frame);frame=0;last=0;stage.style.setProperty('--motion-play',active()?'running':'paused');if(active())frame=requestAnimationFrame(tick);document.querySelector('#pause').textContent=t(paused?'Resume motion':'Pause motion');}
function render(){drawing.innerHTML=entry.render(phase,choice,`study-${record.id}-${phase}`);translate();elapsed=0;stage.classList.remove('animating');void stage.offsetWidth;if(!reduced.matches&&!paused)stage.classList.add('animating');sync();document.querySelectorAll('button[data-phase]').forEach(b=>b.setAttribute('aria-current',Number(b.dataset.phase)===phase?'step':'false'));document.querySelectorAll('button[data-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.choice===choice)));}
['Context','Structure','Explore','Review','Outcome'].forEach((name,i)=>{const b=document.createElement('button');b.type='button';b.dataset.phase=i;b.textContent=`0${i+1} ${name}`;b.addEventListener('click',()=>{phase=i;render();});document.querySelector('#phases').append(b);});
for(const [value,en,ko] of topic.choices){const b=document.createElement('button');b.type='button';b.dataset.choice=value;b.textContent=en;b.addEventListener('click',()=>{choice=value;render();});document.querySelector('#choices').append(b);}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.lang;try{localStorage.setItem('portfolio-language',language);}catch{}render();}));
window.addEventListener('storage',event=>{if(event.key==='portfolio-language'){language=event.newValue==='ko'?'ko':'en';render();}});
document.querySelector('#pause').addEventListener('click',()=>{paused=!paused;if(!paused&&!stage.classList.contains('animating'))render();else sync();});
document.querySelector('#replay').addEventListener('click',()=>{paused=false;render();});
document.querySelector('#still').addEventListener('click',()=>{paused=true;elapsed=8000;stage.classList.remove('animating');sync();});
document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',render);
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();}).observe(stage);
render();
} catch(error) {document.querySelector('#title').textContent=`${record.id} · Study in preparation`;document.querySelector('#summary').textContent=error.message;}
