import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

/**
 * Generate flashcards from PDF text
 */
export async function generateFlashcards(text) {
  const prompt = `
Create concise flashcards from the content.
Each flashcard:
- question
- short answer
- difficulty (easy/medium/hard)

Return JSON array only.
Content:
${text.slice(0, 4000)}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const cards = JSON.parse(response.choices[0].message.content);

  return cards.map((card) => ({
    ...card,
    easeFactor: 2.5,
    interval: 1,
    nextReview: Date.now(),
  }));
}

/**
 * SM-2 inspired spaced repetition update
 */
export function updateSpacedRepetition(card, quality) {
  let { easeFactor, interval } = card;

  if (quality < 3) interval = 1;
  else interval = Math.round(interval * easeFactor);

  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * 0.08));

  return {
    ...card,
    easeFactor,
    interval,
    nextReview: Date.now() + interval * 86400000,
  };
}

/* Inline CSS (optional visual debug) */
const __flashcardStyle = {
  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
};
