import "../index.css";

export default function QuizPage() {
  return (
    <div className="page">
      <h1 className="title">Quiz Time 🎯</h1>

      <div className="quiz-card">
        <h3>Q1. What is normalization?</h3>

        <ul>
          <li>A. Data redundancy</li>
          <li>B. Data organization</li>
          <li>C. Indexing</li>
          <li>D. Encryption</li>
        </ul>

        <button className="primary-btn">Next Question</button>
      </div>
    </div>
  );
}
