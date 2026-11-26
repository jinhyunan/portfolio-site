import test from 'node:test';
import assert from 'node:assert/strict';
import { Playback } from '../bori/playback.mjs';

test('time advances only while playback is visible and requested', () => {
  const p = new Playback(36);
  p.advance(2); assert.equal(p.time, 0);
  p.visible = true;
  p.advance(2); assert.equal(p.time, 2);
  p.pause(); p.advance(5); assert.equal(p.time, 2);
  p.play(); p.advance(1); assert.equal(p.time, 3);
});
test('hidden and offscreen suspension do not erase play intent', () => {
  const p = new Playback(36); p.visible = true;
  p.hidden = true; p.advance(10); assert.equal(p.time, 0);
  p.hidden = false; p.advance(1); assert.equal(p.time, 1);
  p.visible = false; p.advance(10); assert.equal(p.time, 1);
  p.visible = true; p.advance(1); assert.equal(p.time, 2);
  p.pause(); p.visible = false; p.visible = true;
  assert.equal(p.playing, false);
});
test('completion is finite and explicit replay starts at zero', () => {
  const p = new Playback(36); p.visible = true;
  p.advance(100); assert.equal(p.time, 36); assert.equal(p.playing, false);
  p.advance(100); assert.equal(p.time, 36);
  p.play(); assert.equal(p.time, 0); assert.equal(p.playing, true);
});
test('seeking clamps boundaries and pauses for inspection', () => {
  const p = new Playback(36); p.visible = true;
  p.seek(12); assert.equal(p.time, 12); assert.equal(p.playing, false);
  p.play(); p.advance(1); assert.equal(p.time, 13);
  p.seek(-1); assert.equal(p.time, 0);
  p.seek(80); assert.equal(p.time, 36);
  p.seek(NaN); assert.equal(p.time, 36);
});
test('reduced motion prevents autoplay and pauses when preference changes', () => {
  const p = new Playback(36, true); p.visible = true;
  p.advance(2); assert.equal(p.time, 0);
  p.play(); p.advance(2); assert.equal(p.time, 2);
  p.setReduced(true); p.advance(2); assert.equal(p.time, 2);
  p.setReduced(false); assert.equal(p.playing, false);
});
