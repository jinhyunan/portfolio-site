const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const items=[...document.querySelectorAll('[data-motion-topic]')];
const state=new Map(items.map(el=>[el,{visible:false,played:false}]));
const toggle=document.querySelector('[data-toggle-project-motion]');
const replay=document.querySelector('[data-replay-project-motion]');
let paused=false;
function sync(el){const s=state.get(el);el.style.setProperty('--motion-play',!paused&&s.visible&&!document.hidden&&!reduced.matches?'running':'paused');}
function play(el){const s=state.get(el);if(reduced.matches||paused)return;s.played=true;el.classList.remove('animating');void el.offsetWidth;el.classList.add('animating');sync(el);}
function controls(){if(toggle){toggle.disabled=reduced.matches;toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=window.portfolioI18n.t(paused?'Resume project motion':'Pause project motion');}if(replay)replay.disabled=reduced.matches;}
const observer=new IntersectionObserver(entries=>{for(const entry of entries){const el=entry.target,s=state.get(el);s.visible=entry.isIntersecting;if(s.visible&&!s.played)play(el);sync(el);}},{threshold:.2});
for(const el of items)observer.observe(el);
toggle?.addEventListener('click',()=>{paused=!paused;items.forEach(el=>{if(!paused&&state.get(el).visible&&!state.get(el).played)play(el);sync(el);});controls();});
replay?.addEventListener('click',()=>{paused=false;items.forEach(el=>{state.get(el).played=false;el.classList.remove('animating');if(state.get(el).visible)play(el);sync(el);});controls();});
document.addEventListener('visibilitychange',()=>items.forEach(sync));
reduced.addEventListener('change',()=>{items.forEach(el=>{if(reduced.matches)el.classList.remove('animating');else if(state.get(el).visible)play(el);sync(el);});controls();});
window.addEventListener('portfolio:languagechange',controls);controls();
