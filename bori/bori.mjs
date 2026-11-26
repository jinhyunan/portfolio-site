import { Playback } from './playback.mjs';

const reel = document.getElementById('reel');
const scenes = [...document.querySelectorAll('[data-scene]')];
const chapters = [...document.querySelectorAll('[data-chapter]')];
const play = document.getElementById('play');
const icon = document.getElementById('play-icon');
const playText = document.getElementById('play-text');
const seek = document.getElementById('seek');
const clock = document.getElementById('time');
const expand = document.getElementById('expand');
const video = document.getElementById('forest-video');
const media = matchMedia('(prefers-reduced-motion: reduce)');
const playback = new Playback(36, media.matches);
const t = text => window.portfolioI18n?.t(text) || text;
let frame = 0, last = 0, current = -1, lastSecond = -1;
let videoPending = false, videoFailed = false;

const write = (element, value) => { if (element.textContent !== value) element.textContent = value; };
function syncVideo(reset = false) {
  const shouldPlay = current === 0 && playback.playing && !playback.reduced && !videoFailed;
  // Seeking must update the visible frame even when playback is paused.
  if (reset && current === 0 && video.readyState >= 1) {
    video.currentTime = Math.min(playback.time, video.duration || 8);
  }
  if (!shouldPlay) { video.pause(); return; }
  if (!video.src) {
    video.src = 'media/forest-motion.mp4';
    video.load();
  }
  if (video.readyState >= 1 && (reset || Math.abs(video.currentTime - playback.time) > 1)) {
    video.currentTime = Math.min(playback.time, video.duration || 8);
  }
  if (video.paused && !videoPending) {
    videoPending = true;
    video.play().then(() => {
      videoPending = false;
      if (current !== 0 || !playback.playing || playback.reduced) video.pause();
      else reel.classList.add('video-ready');
    }).catch(() => { videoPending = false; });
  }
}
function render(force = false) {
  const next = Math.min(scenes.length - 1, Math.floor(playback.time / 6));
  const changed = next !== current;
  if (changed) {
    current = next;
    scenes.forEach((scene, i) => {
      scene.classList.toggle('active', i === current);
      scene.setAttribute('aria-hidden', String(i !== current));
      chapters[i].setAttribute('aria-pressed', String(i === current));
    });
  }
  const local = playback.time - current * 6;
  scenes[current].style.setProperty('--enter', playback.reduced || !playback.playing ? 1 : Math.min(1, local / .7));
  scenes[current].style.setProperty('--drift', playback.reduced ? 0 : Math.min(1, local / 6));
  chapters.forEach((button, i) => button.style.setProperty('--chapter-progress', `${Math.max(0,Math.min(1,(playback.time-i*6)/6))*100}%`));
  seek.value = playback.time;
  seek.style.setProperty('--played', `${playback.time / 36 * 100}%`);
  const second = Math.floor(playback.time);
  if (second !== lastSecond || force || changed) {
    lastSecond = second;
    write(clock, `0:${String(second).padStart(2,'0')} / 0:36`);
    seek.setAttribute('aria-valuetext', `${second} ${t('seconds of 36')}`);
  }
  const ended = playback.time === playback.duration;
  const label = playback.requested && !ended ? 'Pause' : ended ? 'Replay' : 'Play';
  write(playText, t(label));
  write(icon, label === 'Pause' ? 'Ⅱ' : label === 'Replay' ? '↻' : '▶');
  const playLabel = t(`${label} introduction`);
  if (play.getAttribute('aria-label') !== playLabel) play.setAttribute('aria-label', playLabel);
  if (changed || force) syncVideo(changed || force);
}
function tick(now) {
  frame = 0;
  playback.advance(last ? (now - last) / 1000 : 0);
  last = now;
  render();
  if (playback.playing) frame = requestAnimationFrame(tick);
  else { last = 0; syncVideo(); }
}
function update() {
  cancelAnimationFrame(frame); frame = 0; last = 0;
  render(true);
  if (playback.playing) frame = requestAnimationFrame(tick);
}
play.addEventListener('click', () => {
  if (playback.requested && playback.time < playback.duration) playback.pause();
  else playback.play();
  update();
});
seek.addEventListener('input', () => { playback.seek(Number(seek.value)); update(); });
chapters.forEach((button, i) => button.addEventListener('click', () => {
  playback.seek(i * 6);
  // A selected still remains fully visible while paused, including at t = 0.
  update();
  scenes[i].style.setProperty('--enter', 1);
}));
video.addEventListener('loadedmetadata', () => syncVideo(true));
video.addEventListener('error', () => { videoFailed = true; reel.classList.remove('video-ready'); });
media.addEventListener('change', event => {
  playback.setReduced(event.matches);
  if (event.matches) reel.classList.remove('video-ready');
  update();
});
document.addEventListener('visibilitychange', () => { playback.hidden = document.hidden; update(); });
window.addEventListener('portfolio:languagechange', () => update());
window.addEventListener('pagehide', () => { playback.hidden = true; update(); });
window.addEventListener('pageshow', () => { playback.hidden = document.hidden; update(); });
new IntersectionObserver(entries => {
  playback.visible = entries[0].isIntersecting;
  update();
}, { threshold: .18 }).observe(reel);
// A native dialog gives the enlarged view consistent controls on mobile, too.
const cinema = document.createElement('dialog');
cinema.className = 'cinema-dialog';
cinema.setAttribute('aria-label', t('Bori motion introduction'));
document.body.append(cinema);
const reelHome = reel.parentNode;
const reelNext = reel.nextSibling;
let previousOverflow = '';
function expansionLabel() {
  const label = t(cinema.open ? 'Exit expanded view' : 'Expand introduction');
  expand.setAttribute('aria-label', label);
  expand.title = label;
}
expand.hidden = false;
expand.addEventListener('click', () => {
  if (cinema.open) { cinema.close(); return; }
  previousOverflow = document.body.style.overflow;
  cinema.append(reel);
  reel.classList.add('expanded');
  document.body.style.overflow = 'hidden';
  cinema.showModal();
  expansionLabel();
  expand.focus();
});
cinema.addEventListener('close', () => {
  reelHome.insertBefore(reel, reelNext);
  reel.classList.remove('expanded');
  document.body.style.overflow = previousOverflow;
  expansionLabel();
  expand.focus();
});
window.addEventListener('portfolio:languagechange', expansionLabel);
playback.hidden = document.hidden;
reel.classList.add('ready');
document.getElementById('transport').hidden = false;
document.getElementById('chapters').hidden = false;
render(true);
