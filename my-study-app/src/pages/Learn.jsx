import "../styles/app.css";

export default function Learn() {
  return (
    <div className="page">
      <h1 className="title">Learning Mode 🧠</h1>

      <div className="mode-switch">
        <button>ELI5</button>
        <button>Exam</button>
        <button>Quick Revise</button>
      </div>

      <div className="flashcard">
        <h2>What is DBMS?</h2>
        <p>Click to flip</p>
      </div>
    </div>
  );
}
