// Playback intent is separate from viewport/tab suspension.
export class Playback {
  constructor(duration, reduced = false) {
    this.duration = duration;
    this.time = 0;
    this.visible = false;
    this.hidden = false;
    this.reduced = reduced;
    this.requested = !reduced;
  }
  get playing() {
    return this.requested && this.visible && !this.hidden && this.time < this.duration;
  }
  advance(seconds) {
    if (!this.playing || !Number.isFinite(seconds) || seconds < 0) return;
    this.time = Math.min(this.duration, this.time + seconds);
    if (this.time === this.duration) this.requested = false;
  }
  play() {
    if (this.time === this.duration) this.time = 0;
    this.requested = true;
  }
  pause() { this.requested = false; }
  seek(seconds) {
    if (!Number.isFinite(seconds)) return;
    this.time = Math.max(0, Math.min(this.duration, seconds));
    this.pause();
  }
  setReduced(reduced) {
    this.reduced = reduced;
    if (reduced) this.pause();
  }
}
