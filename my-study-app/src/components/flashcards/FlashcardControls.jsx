export default function FlashcardControls({ onAgain, onGood, onEasy }) {
  return (
    <div style={controls}>
      <button style={again} onClick={onAgain}>😵 Again</button>
      <button style={good} onClick={onGood}>🙂 Good</button>
      <button style={easy} onClick={onEasy}>😎 Easy</button>
    </div>
  );
}

const controls = {
  display: "flex",
  gap: "12px",
  marginTop: "20px",
};

const baseBtn = {
  flex: 1,
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
};

const again = {
  ...baseBtn,
  background: "#ef4444",
  color: "#fff",
};

const good = {
  ...baseBtn,
  background: "#facc15",
};

const easy = {
  ...baseBtn,
  background: "#22c55e",
  color: "#fff",
};
