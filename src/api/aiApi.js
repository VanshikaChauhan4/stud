import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/ai",
});

// FLASHCARDS
export const generateFlashcards = async (content) => {
  try {
    const res = await API.post("/flashcards", {
      text: content,
    });
    return res.data;
  } catch (error) {
    console.error("Flashcard error:", error);
    throw error;
  }
};

// QUIZ
export const generateQuiz = async (content) => {
  try {
    const res = await API.post("/quiz", {
      text: content,
    });
    return res.data;
  } catch (error) {
    console.error("Quiz error:", error);
    throw error;
  }
};

// CHATBOT (context-aware)
export const askAI = async (question, context) => {
  try {
    const res = await API.post("/chat", {
      question,
      context,
    });
    return res.data;
  } catch (error) {
    console.error("Chatbot error:", error);
    throw error;
  }
};
