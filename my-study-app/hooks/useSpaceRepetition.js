import { useState } from "react";

export function useSpacedRepetition() {
  const [history, setHistory] = useState([]);

  // Inline styles (for progress indicators)
  const styles = {
    badge: {
      padding: "6px 14px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.1)",
      fontSize: "0.8rem",
      marginRight: "10px",
    },
  };

  const recordAttempt = (topic, score) => {
    setHistory((prev) => [...prev, { topic, score, time: Date.now() }]);
  };

  const getNextInterval = (score) => {
    if (score >= 80) return "Revise after 5 days";
    if (score >= 50) return "Revise after 2 days";
    return "Revise tomorrow";
  };

  const getWeakTopics = () => {
    return history
      .filter((item) => item.score < 50)
      .map((item) => item.topic);
  };

  return {
    history,
    styles,
    recordAttempt,
    getNextInterval,
    getWeakTopics,
  };
}
