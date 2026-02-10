import { useEffect, useState } from "react";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");

  // 🔹 AI-generated quiz (mock PDF → Quiz)
  useEffect(() => {
    setQuestions([
      {
        id: 1,
        question: "What is normalization?",
        options: ["Reduce redundancy", "Increase tables", "Indexing", "Encryption"],
        correct: 0,
        difficulty: "easy",
      },
      {
        id: 2,
        question: "Primary Key property?",
        options: ["Nullable", "Duplicate", "Unique", "Composite only"],
        correct: 2,
        difficulty: "medium",
      },
      {
        id: 3,
        question: "3NF removes?",
        options: ["Partial dependency", "Transitive dependency", "Redundancy", "Index"],
        correct: 1,
        difficulty: "hard",
      },
    ]);
  }, []);

  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  if (submitted) {
    return <Result questions={questions} answers={answers} />;
  }

  return (
    <div style={container}>
      <h1>UPSC / SSC Practice Test 📝</h1>

      <div style={topBar}>
        <Timer duration={600} onTimeUp={() => setSubmitted(true)} />
        <select
          style={select}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <Question
        data={questions[current]}
        selected={answers[questions[current]?.id]}
        onSelect={handleSelect}
      />

      <div style={nav}>
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          ⬅ Prev
        </button>

        {current === questions.length - 1 ? (
          <button onClick={() => setSubmitted(true)}>Submit Test</button>
        ) : (
          <button onClick={() => setCurrent(current + 1)}>Next ➡</button>
        )}
      </div>
    </div>
  );
}

const container = {
  maxWidth: "700px",
  margin: "auto",
  padding: "30px",
  color: "#fff",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

const select = {
  padding: "8px",
  borderRadius: "8px",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};
