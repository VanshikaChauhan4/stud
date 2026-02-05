import { useEffect } from "react";

export default function Flashcard({ card, flipped, onFlip }) {
  return (
    <div style={container} onClick={onFlip}>
      <div
        style={{
          ...cardStyle,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={{ ...face, ...front }}>
          {card.question}
        </div>
        <div style={{ ...face, ...back }}>
          {card.answer}
        </div>
      </div>
    </div>
  );
}

const container = {
  perspective: "1000px",
  width: "100%",
  maxWidth: "420px",
};

const cardStyle = {
  position: "relative",
  width: "100%",
  height: "240px",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  cursor: "pointer",
};

const face = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  fontSize: "18px",
  fontWeight: "600",
  textAlign: "center",
};

const front = {
  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
  color: "#fff",
};

const back = {
  background: "#111827",
  color: "#d1d5db",
  transform: "rotateY(180deg)",
};
v