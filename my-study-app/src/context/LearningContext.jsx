import { createContext, useContext, useState } from "react";
import { generateFlashcards, generateQuiz } from "../api/aiApi";

const LearningContext = createContext();

export function LearningProvider({ children }) {
  const [content, setContent] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [mode, setMode] = useState("ELI5");
  const [loading, setLoading] = useState(false);

  const styles = {
    badge: {
      padding: "6px 16px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.1)",
      marginRight: "10px",
      cursor: "pointer",
    },
  };

  const loadFlashcards = async () => {
    setLoading(true);
    const data = await generateFlashcards(content);
    setFlashcards(data);
    setLoading(false);
  };

  const loadQuiz = async () => {
    setLoading(true);
    const data = await generateQuiz(content);
    setQuiz(data);
    setLoading(false);
  };

  return (
    <LearningContext.Provider
      value={{
        content,
        setContent,
        flashcards,
        quiz,
        mode,
        setMode,
        loading,
        styles,
        loadFlashcards,
        loadQuiz,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export const useLearningContext = () => useContext(LearningContext);
