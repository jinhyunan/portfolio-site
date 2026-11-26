(() => {
  'use strict';
  const host = document.getElementById('art'), svg = host.querySelector('svg');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)'), duration = 12;
  const button = document.getElementById('motion');
  const t = window.portfolioI18n.t;
  let time = reduce.matches ? duration : 0, paused = reduce.matches, last = 0, visible = true, frame = 0;
  const q = id => svg.querySelector('#' + id);
  const ease = x => { x = Math.max(0, Math.min(1, x)); return x*x*x*(x*(x*6-15)+10); };
  const phase = (a, b) => ease((time-a)/(b-a)), mix = (a,b,t) => a+(b-a)*t;
  const cards = [
    {el:q('card-a'),from:[102,124,-13],to:[95,190,0],start:1.6},
    {el:q('card-b'),from:[300,356,9],to:[310,190,0],start:2},
    {el:q('card-c'),from:[505,115,12],to:[525,190,0],start:2.4}
  ];
  function update() {
    cards.forEach(c => { const t=phase(c.start,c.start+2), p=c.from.map((v,i)=>mix(v,c.to[i],t)); c.el.setAttribute('transform',`translate(${p[0]} ${p[1]}) rotate(${p[2]} 90 82)`); });
    q('workspace').setAttribute('opacity',phase(2.3,4.5));
    ['a','b','c'].forEach((c,i) => { const line=q('link-'+c); line.style.strokeDasharray='1'; line.style.strokeDashoffset=1-phase(4.5+i*.25,6.2+i*.25); });
    const r=phase(6.7,8.2);
    q('result').setAttribute('opacity',r);
    q('result').setAttribute('transform',`translate(0 ${18*(1-r)})`);
    q('scan').setAttribute('opacity',time>=5.4&&time<7.3?Math.sin(Math.PI*phase(5.4,7.3)):0);
    q('scan').setAttribute('transform',`translate(0 ${38*phase(5.4,7.3)})`);
    document.getElementById('phase').textContent=t(time<4.5?'01 / 맥락을 모으다':time<7?'02 / 관계를 연결하다':'03 / 쓸 수 있는 형태로');
    document.getElementById('progress').style.width=time/duration*100+'%';
  }
  function ui() {
    button.disabled=reduce.matches;
    button.setAttribute('aria-pressed',String(paused));
    document.getElementById('motion-icon').textContent=paused?'▷':'Ⅱ';
    document.getElementById('motion-label').textContent=t(reduce.matches?'Motion reduced':time>=duration?'Replay motion':paused?'Play motion':'Pause motion');
    document.body.classList.toggle('paused',paused && time<duration);
    document.body.classList.toggle('motion-hidden',document.hidden);
  }
  function running() { return !paused && !reduce.matches && visible && !document.hidden && time<duration; }
  function tick(now) {
    frame=0;
    if (!running()) { last=0; return; }
    if (last) time=Math.min(duration,time+Math.min((now-last)/1000,.1));
    last=now;
    if (time===duration) paused=true;
    update(); ui();
    if (running()) frame=requestAnimationFrame(tick);
  }
  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame=0; last=0; update(); ui();
    if (running()) frame=requestAnimationFrame(tick);
  }
  button.onclick=()=>{ if(reduce.matches)return; if(time>=duration){time=0;paused=false;}else paused=!paused; sync(); };
  reduce.addEventListener('change',e=>{paused=e.matches;if(e.matches)time=duration;sync();});
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('portfolio:languagechange',()=>{update();ui();});
  new IntersectionObserver(es=>{visible=es[0].isIntersecting;sync();}).observe(host);
  sync();
})();
