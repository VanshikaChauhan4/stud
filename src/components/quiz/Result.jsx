export default function Result({ questions, answers }) {
  let score = 0;

  questions.forEach((q) => {
    if (answers[q.id] === q.correct) score += 2;
    else if (answers[q.id] !== undefined) score -= 0.66;
  });

  const rank = Math.max(1, Math.floor(1000 - score * 50));

  return (
    <div style={box}>
      <h2>Result 📊</h2>
      <p>Score: {score.toFixed(2)}</p>
      <p>Predicted Rank 📈: {rank}</p>

      <h3>Question Review</h3>
      {questions.map((q) => (
        <div key={q.id} style={review}>
          <p><b>{q.question}</b></p>
          <p>Correct: {q.options[q.correct]}</p>
          <p>Your Answer: {q.options[answers[q.id]] || "Not Attempted"}</p>
        </div>
      ))}
    </div>
  );
}

const box = {
  maxWidth: "700px",
  margin: "auto",
  padding: "30px",
  color: "#fff",
};

const review = {
  background: "#1f2937",
  padding: "12px",
  borderRadius: "12px",
  marginTop: "10px",
};
