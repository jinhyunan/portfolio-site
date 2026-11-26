const manifest=await fetch('./manifest.json').then(r=>r.json());
const names={pid:'P&ID Agent',calc:'Calc Agent',ontology:'Engineering Ontology',tbe:'TBE Review & Reply'};
let topic=new URLSearchParams(location.search).get('topic') || 'pid';
if(!names[topic])topic='pid';
let generation=0;
let resultData;try{const response=await fetch('./results.json');if(response.ok)resultData=await response.json();}catch{}
for(const [slug,name] of Object.entries(names)){const b=document.createElement('button');b.type='button';b.dataset.topic=slug;b.textContent=name;b.addEventListener('click',()=>{topic=slug;history.replaceState(null,'',`?topic=${slug}`);show();});document.querySelector('#topics').append(b);}
async function show(){
 const current=++generation;
 document.querySelectorAll('[data-topic]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.topic===topic)));
 const entries=document.querySelector('#entries');entries.replaceChildren();
 for(const item of manifest.filter(x=>x.topic===topic)){
   let notes;try{const r=await fetch('./'+item.notes);if(r.ok)notes=await r.json();}catch{}
   if(current!==generation)return;
   const article=document.createElement('article');article.className='entry';
   const head=document.createElement('div');head.className='entry-head';const h=document.createElement('h2');h.textContent=`${item.id} · ${notes?.title || 'Independent study'}`;const a=document.createElement('a');a.href=`preview.html?id=${item.id}`;a.textContent='OPEN ↗';head.append(h,a);
   const frame=document.createElement('iframe');frame.src=`preview.html?id=${item.id}&compact=1${new URLSearchParams(location.search).has('still')?'&still=1':''}`;frame.title=`${item.id} interactive motion study`;frame.loading=new URLSearchParams(location.search).has('still')?'eager':'lazy';
   const desc=document.createElement('p');desc.textContent=notes?.concept || item.seed;
   article.append(head,frame,desc);entries.append(article);
 }
 const summary=document.querySelector('#final-summary'),results=document.querySelector('#results');summary.replaceChildren();results.replaceChildren();
 if(resultData?.topics?.[topic]){
   const data=resultData.topics[topic],copy=document.createElement('div');const label=document.createElement('strong');label.textContent='The new final composition';const paragraph=document.createElement('p');paragraph.textContent=data.synthesis;copy.append(label,paragraph);const a=document.createElement('a');a.className='final-link';a.href=`../work/${topic}/`;a.textContent='Explore the final story ↗';summary.append(copy,a);
   const h=document.createElement('h2');h.textContent='Complete panel results';const note=document.createElement('p');note.textContent='Five independent AI ballots. Each panel assessed all twenty proposals. Borda: five points for first place through one for fifth. Scores inform synthesis; they do not select a finished design.';results.append(h,note);const record=document.createElement('p');record.className='voting-record';for(const juror of resultData.jurors){const link=document.createElement('a');link.href=`ballots/${juror.id}.json`;link.textContent=`${juror.id} · ${juror.lens}`;record.append(link);}results.append(record);
   const wrap=document.createElement('div');wrap.className='table-wrap';const table=document.createElement('table');table.innerHTML='<thead><tr><th>Entry</th><th>Borda / 25</th><th>Mean / 100</th><th>Contribution to the final</th></tr></thead>';const body=document.createElement('tbody');for(const row of data.entries){const tr=document.createElement('tr');for(const value of [row.id,row.borda,row.mean,row.contribution]){const td=document.createElement('td');td.textContent=value;tr.append(td);}body.append(tr);}table.append(body);wrap.append(table);results.append(wrap);
 }
}
show();
