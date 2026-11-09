import { describe, expect, it } from 'vitest';
import { checkSentence, localReport, localTurn } from './freeTutor';
import type { Turn } from './conversation';

/** Plays a conversation and returns Jake's replies. */
function play(answers: string[]) {
  const turns: Turn[] = [{ role: 'tutor', text: localTurn('viajes', []).reply }];
  const out: { reply: string; fix?: string }[] = [];
  for (const a of answers) {
    turns.push({ role: 'me', text: a });
    const r = localTurn('viajes', turns);
    turns.push({ role: 'tutor', text: r.reply });
    out.push({ reply: r.reply, fix: r.correction?.better });
  }
  return { out, turns };
}

describe('free conversation mode', () => {
  it('corrects common mistakes and leaves good sentences alone', () => {
    expect(checkSentence('I have 25 years')?.better).toBe("I'm 25 years old");
    expect(checkSentence("She don't like football")?.better).toBe("She doesn't");
    expect(checkSentence('Does she like football?')).toBeNull();
    expect(checkSentence('Yesterday I go to the beach')?.better).toBe('Yesterday I went');
    expect(checkSentence('I went to the beach with my friends.')).toBeNull();
  });

  it('asks for English, rejects rude words and stays on the question', () => {
    const { out } = play(['hola hola puto', 'hola como estas amigo', 'another day we change the temperature']);
    expect(out[0].reply).toMatch(/language/i);
    expect(out[0].reply).toMatch(/best trip/);
    expect(out[1].reply).toMatch(/in English/i);
    expect(out[1].reply).toMatch(/best trip/);
    expect(out[2].fix).toBe('we changed'); // a finished trip → past simple
  });

  it('reacts to what the learner said and moves through the topic', () => {
    const { out, turns } = play([
      'The best trip I have ever been on was to Bariloche with my family. We went skiing and ate chocolate every day.',
      'I lost my bag at the airport in Madrid once and it was a nightmare because all my clothes were inside.',
    ]);
    expect(out[0].reply).toMatch(/Bariloche/);
    expect(out[0].fix).toBeUndefined();
    expect(out[1].reply).toMatch(/\?/);
    const r = localReport('viajes', turns);
    expect(r.score).toBeGreaterThanOrEqual(4);
  });
});
