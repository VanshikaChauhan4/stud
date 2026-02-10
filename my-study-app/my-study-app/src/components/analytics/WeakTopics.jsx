import React from "react";

export default function WeakTopics({ attempts = [] }) {
  const weakTopics = attempts.filter((a) => a.score < 50);

  const styles = {
    container: {
      background: "rgba(255,255,255,0.1)",
      padding: "20px",
      borderRadius: "20px",
    },
    topic: {
      padding: "10px 15px",
      borderRadius: "15px",
      background: "rgba(255,0,0,0.15)",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    badge: {
      padding: "4px 10px",
      borderRadius: "12px",
      background: "red",
      fontSize: "0.8rem",
    },
    empty: {
      opacity: 0.7,
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h3>⚠️ Weak Topics</h3>

      {weakTopics.length === 0 && (
        <p style={styles.empty}>No weak topics 🎉 Keep going!</p>
      )}

      {weakTopics.map((item, index) => (
        <div key={index} style={styles.topic}>
          <span>{item.topic}</span>
          <span style={styles.badge}>{item.score}%</span>
        </div>
      ))}
    </div>
  );
}
