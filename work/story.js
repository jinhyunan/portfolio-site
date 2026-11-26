(() => {
  'use strict';
  const scenes = [...document.querySelectorAll('.story-scene')];
  const chapters = [...document.querySelectorAll('[data-go]')];
  if (!scenes.length) return;
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const toggle = document.getElementById('motion-toggle');
  const replay = document.getElementById('replay');
  const status = document.getElementById('motion-status');
  const progress = document.querySelector('.motion-progress i');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 8000;
  const t = window.portfolioI18n.t;
  let index = 0, paused = false, visible = true, elapsed = 0, last = 0, frame = 0;

  function running() {
    return !paused && visible && !document.hidden && !reduced.matches && elapsed < duration;
  }
  function controls() {
    const finished = elapsed >= duration;
    toggle.disabled = reduced.matches || finished;
    replay.disabled = reduced.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = t(paused ? '모션 계속 보기' : '모션 일시정지');
    status.textContent = t(reduced.matches ? '모션 줄이기 적용' : finished ? '모션 완료' : paused ? '일시정지' : '장면 모션');
    document.documentElement.style.setProperty('--motion-play', running() ? 'running' : 'paused');
    progress.style.transform = `scaleX(${reduced.matches ? 1 : elapsed / duration})`;
  }
  function tick(now) {
    frame = 0;
    if (!running()) { last = 0; controls(); return; }
    if (last) elapsed = Math.min(duration, elapsed + now - last);
    last = now;
    controls();
    if (running()) frame = requestAnimationFrame(tick);
    else { scenes[index].classList.remove('animating'); last = 0; }
  }
  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; last = 0;
    controls();
    if (running()) frame = requestAnimationFrame(tick);
  }
  function resetMotion() {
    elapsed = 0;
    scenes[index].classList.remove('animating');
    // Flush the old animation before restarting this finite sequence.
    void scenes[index].offsetWidth;
    if (!reduced.matches && !paused) scenes[index].classList.add('animating');
    sync();
  }
  function show(nextIndex, { historyMode = 'push', focus = true } = {}) {
    index = Math.max(0, Math.min(scenes.length - 1, nextIndex));
    scenes.forEach((scene, i) => {
      scene.hidden = i !== index;
      scene.classList.toggle('is-active', i === index);
      if (i !== index) scene.classList.remove('animating');
      if (i === index) chapters[i].setAttribute('aria-current', 'step');
      else chapters[i].removeAttribute('aria-current');
    });
    previous.disabled = index === 0;
    next.disabled = index === scenes.length - 1;
    document.getElementById('counter').textContent = `0${index + 1} / 05`;
    const hash = '#' + scenes[index].id;
    if (historyMode !== 'none' && location.hash !== hash) {
      history[historyMode === 'replace' ? 'replaceState' : 'pushState'](null, '', hash);
    }
    visible = true;
    resetMotion();
    if (focus) {
      scenes[index].querySelector('h2').focus({ preventScroll: true });
      document.querySelector('.chapters').scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
  function fromHash({ initial = false } = {}) {
    const found = scenes.findIndex(scene => '#' + scene.id === location.hash);
    show(found < 0 ? 0 : found, { historyMode: found < 0 ? 'replace' : 'none', focus: !initial });
  }

  document.documentElement.classList.add('js');
  document.querySelector('.chapters').hidden = false;
  document.querySelector('.player').hidden = false;
  document.querySelectorAll('.explorer').forEach(el => { el.hidden = false; });
  document.querySelector('.skip').addEventListener('click', event => {
    event.preventDefault();
    scenes[index].querySelector('h2').focus({ preventScroll: true });
    document.querySelector('.chapters').scrollIntoView({ block: 'start', behavior: 'instant' });
  });
  chapters.forEach(button => button.addEventListener('click', () => show(Number(button.dataset.go))));
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  toggle.addEventListener('click', () => { paused = !paused; if (!paused && !scenes[index].classList.contains('animating')) resetMotion(); else sync(); });
  replay.addEventListener('click', () => { paused = false; resetMotion(); });
  scenes.forEach(scene => {
    scene.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
      scene.dataset.choice = button.dataset.choice;
      scene.querySelectorAll('[data-choice]').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
      scene.querySelector('.choice-note').textContent = button.dataset.explanation;
    }));
  });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.defaultPrevented) return;
    if (event.target.closest('button,a,input,select,textarea,[contenteditable="true"]')) return;
    const target = { ArrowRight: index + 1, PageDown: index + 1, ArrowLeft: index - 1, PageUp: index - 1, Home: 0, End: scenes.length - 1 }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    if (target !== index && target >= 0 && target < scenes.length) show(target);
  });
  // popstate and hashchange may both fire; only hashchange is needed for fragment navigation.
  window.addEventListener('hashchange', () => fromHash());
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('portfolio:languagechange', controls);
  window.addEventListener('portfolio:motionchoice', resetMotion);
  reduced.addEventListener('change', () => resetMotion());
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const active = entries.find(entry => entry.target === scenes[index]);
      if (active) { visible = active.isIntersecting; sync(); }
    }, { threshold: 0.05 });
    scenes.forEach(scene => observer.observe(scene));
  }
  fromHash({ initial: true });
})();
