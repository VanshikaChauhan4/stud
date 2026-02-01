export function formatFlashcards(cards) {
  return cards.map((card) => ({
    ...card,
    easeFactor: 2.5,
    interval: 1,
    nextReview: Date.now(),
  }));
}
export function updateSpacedRepetition(card, quality) {
  let { easeFactor, interval } = card;
  if (quality < 3) interval = 1;
  else interval = Math.round(interval * easeFactor);
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * 0.08)
  );
  return {
    ...card,
    easeFactor,
    interval,
    nextReview: Date.now() + interval * 86400000,
  };
}
export const flashcardStyle = {
  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
};
