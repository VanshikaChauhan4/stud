import { useEffect, useState } from "react";

export default function Timer({ duration, onTimeUp }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) return onTimeUp();
    const id = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <div style={timer}>
      ⏳ {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
    </div>
  );
}

const timer = {
  background: "#ef4444",
  padding: "8px 14px",
  borderRadius: "10px",
  fontWeight: "600",
};
