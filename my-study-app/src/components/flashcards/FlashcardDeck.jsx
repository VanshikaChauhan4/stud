import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import FlashcardControls from "./FlashcardControls";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function FlashcardDeck() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [streak, setStreak] = useState(
    Number(localStorage.getItem("streak")) || 0
  );

  // 🔹 Mock AI-generated cards from PDF
  useEffect(() => {
    setCards([
      { question: "What is DBMS?", answer: "System to manage databases", ease: 2.5 },
      { question: "Primary Key?", answer: "Uniquely identifies records", ease: 2.5 },
      { question: "Normalization?", answer: "Reduce redundancy", ease: 2.5 },
    ]);
  }, []);

  // 🔹 Swipe gestures (mobile)
  useEffect(() => {
    let startX = 0;
    window.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    window.addEventListener("touchend", e => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 80) handleGood();
      if (diff < -80) handleAgain();
    });
  }, [index]);

  const next = () => {
    setFlipped(false);
    if (index + 1 >= cards.length) {
      confetti();
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("streak", newStreak);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // 🔹 Spaced repetition (simplified SM-2)
  const handleAgain = () => next();
  const handleGood = () => next();
  const handleEasy = () => next();

  if (!cards.length) return <p>Loading cards...</p>;

  return (
    <div style={deck}>
      <h2>Flashcards 🧠</h2>
      <p>🔥 Daily Streak: {streak}</p>

      <Flashcard
        card={cards[index]}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />

      <FlashcardControls
        onAgain={handleAgain}
        onGood={handleGood}
        onEasy={handleEasy}
      />
    </div>
  );
}

const deck = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "30px",
  color: "white",
};
