import { useState } from "react";

export default function InputBox({ onSend, loading }) {
  const [text, setText] = useState("");

  const styles = {
    container: {
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "14px 18px",
      borderRadius: "20px",
      border: "none",
      outline: "none",
    },
    button: {
      padding: "14px 22px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      background: "linear-gradient(135deg,#00e5ff,#7f5cff)",
    },
  };

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your doubt here..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={loading}
      />
      <button style={styles.button} onClick={handleSend} disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
