import { describe, expect, it } from 'vitest';
import { voiceChunks } from './jakeVoice';

describe("Jake's voice chunks", () => {
  it('splits a reply into sentences and joins tiny ones', () => {
    expect(voiceChunks("Brazil with the squad? Sounds like elite vibes, babe. Did you survive the samba parties?"))
      .toEqual(['Brazil with the squad?', 'Sounds like elite vibes, babe.', 'Did you survive the samba parties?']);
    expect(voiceChunks('Oh, nice! Tell me more about it.')).toEqual(['Oh, nice! Tell me more about it.']);
  });
  it('keeps at most four pieces', () => {
    expect(voiceChunks('One two three. Four five six. Seven eight nine. Ten eleven twelve. Thirteen fourteen.').length).toBe(4);
  });
});
