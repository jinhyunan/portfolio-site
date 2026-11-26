(() => {
'use strict';
document.documentElement.classList.add('js');
const observer=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('seen');observer.unobserve(e.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const dialog=document.getElementById('details'), close=document.getElementById('close');
let trigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  trigger=button;
  const p=projects[Number(button.dataset.project)];
  document.getElementById('detail-category').textContent=p.category.toUpperCase()+' / '+p.state;
  const highlights=p.highlights?'<ul class="detail-highlights">'+p.highlights.map(h=>'<li>'+h+'</li>').join('')+'</ul>':'';
  const sections=[['문제',p.problem],['내가 정한 방향',p.role],['AI와 함께 만든 것',p.built],['확인 범위와 남은 일',p.limit]].map(([a,b])=>'<section><h3>'+a+'</h3><p>'+b+'</p></section>').join('');
  const evidence=p.evidence?'<aside class="detail-evidence"><strong>근거와 확인 범위</strong><p>'+p.evidence+'</p></aside>':'';
  const link=p.link?'<a class="text-link" target="_blank" rel="noopener" href="'+p.link+'">'+p.linkLabel+' <span>↗</span></a>':'';
  const reviewed=p.reviewed?p.reviewed+' 자료 확인 기준입니다.':'개인 프로젝트 설명은 2026.11.12 검토 기록 기준이며 이번에 재검증하지 않았습니다.';
  document.getElementById('detail-body').innerHTML='<h2 id="detail-title">'+p.name+'</h2><p class="detail-lede">'+p.brief+'</p>'+highlights+'<div class="detail-grid">'+sections+'</div>'+evidence+link+'<p class="detail-note">'+reviewed+' 메인과 프로젝트 카드는 콘셉트 그래픽이며 실제 제품 화면 또는 승인된 공학 모델이 아닙니다.</p>';
  dialog.showModal();close.focus();
}));
close.onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>trigger?.focus());
})();
