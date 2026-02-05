export default function Message({ role, text }) {
  const isUser = role === "user";

  const styles = {
    message: {
      maxWidth: "70%",
      padding: "12px 16px",
      borderRadius: "18px",
      marginBottom: "10px",
      alignSelf: isUser ? "flex-end" : "flex-start",
      background: isUser
        ? "linear-gradient(135deg,#7f5cff,#00e5ff)"
        : "rgba(255,255,255,0.15)",
      color: isUser ? "black" : "white",
    },
  };

  return <div style={styles.message}>{text}</div>;
}
