// Each subject owns its composition; the shared player owns navigation and timing.
const slug=document.body.dataset.story;
if(['pid','calc','ontology','tbe'].includes(slug)){
 const art=await import(`./motion/${slug}.js`);
 const scenes=[...document.querySelectorAll('.story-scene')];
 for(const scene of scenes)scene.addEventListener('click',event=>{
  const choice=event.target.closest('button[data-choice]');
  if(!choice)return;
  scenes.forEach((target,phase)=>{
   target.dataset.choice=choice.dataset.choice;
   target.querySelector('.topic-stage').innerHTML=art.render(phase,choice.dataset.choice,`final-${slug}-${phase}`);
  });
  window.portfolioI18n.apply();
  window.dispatchEvent(new CustomEvent('portfolio:motionchoice'));
 });
}
