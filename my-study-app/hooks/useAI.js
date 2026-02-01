import { useState } from "react";
import { generateFlashcards, generateQuiz, askAI } from "../api/aiApi";

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Inline UI styles (optional usage)
  const styles = {
    loader: {
      color: "#00e5ff",
      fontWeight: "bold",
      marginTop: "10px",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
  };

  const getFlashcards = async (text) => {
    try {
      setLoading(true);
      setError(null);
      return await generateFlashcards(text);
    } catch (err) {
      setError("Failed to generate flashcards");
    } finally {
      setLoading(false);
    }
  };

  const getQuiz = async (text) => {
    try {
      setLoading(true);
      setError(null);
      return await generateQuiz(text);
    } catch (err) {
      setError("Failed to generate quiz");
    } finally {
      setLoading(false);
    }
  };

  const askTutor = async (question, context) => {
    try {
      setLoading(true);
      setError(null);
      return await askAI(question, context);
    } catch (err) {
      setError("AI failed to respond");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    styles,
    getFlashcards,
    getQuiz,
    askTutor,
  };
}
