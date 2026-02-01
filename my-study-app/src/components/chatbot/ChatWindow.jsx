import Message from "./Message";

export default function ChatWindow({ messages }) {
  const styles = {
    window: {
      height: "360px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      marginBottom: "15px",
    },
    empty: {
      opacity: 0.6,
      textAlign: "center",
      marginTop: "120px",
    },
  };

  return (
    <div style={styles.window}>
      {messages.length === 0 ? (
        <p style={styles.empty}>🤖 Ask me anything from your study material</p>
      ) : (
        messages.map((msg, i) => (
          <Message key={i} role={msg.role} text={msg.text} />
        ))
      )}
    </div>
  );
}
