import { describe, expect, it } from 'vitest';
import { parseReply } from './localLlm';

// real outputs from the model during testing
describe('free AI reply parsing', () => {
  it('keeps a plain reply as it is', () => {
    expect(parseReply('What kind of games did you play?')).toBe('What kind of games did you play?');
  });
  it('removes labels, quotes and extra lines', () => {
    expect(parseReply('REPLY: "Nice! What did you watch?"\n\nCORRECTION: NONE')).toBe('Nice! What did you watch?');
    expect(parseReply('Jake: Cool. Do you play online?')).toBe('Cool. Do you play online?');
  });
  it('keeps at most three sentences', () => {
    expect(parseReply('One. Two. Three? Four. Five.')).toBe('One. Two. Three?');
  });
});
