import React from "react";

export default function ProgressChart({ attempts = [] }) {
  // attempts = [{ topic: "DBMS", score: 70 }, ...]

  const avgScore =
    attempts.length === 0
      ? 0
      : Math.round(
          attempts.reduce((a, b) => a + b.score, 0) / attempts.length
        );

  const styles = {
    container: {
      background: "rgba(255,255,255,0.1)",
      padding: "20px",
      borderRadius: "20px",
      marginBottom: "30px",
    },
    barContainer: {
      height: "14px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "10px",
      overflow: "hidden",
      marginTop: "10px",
    },
    bar: {
      height: "100%",
      width: `${avgScore}%`,
      background: "linear-gradient(135deg,#00e5ff,#7f5cff)",
      transition: "0.5s ease",
    },
    label: {
      marginTop: "10px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h3>📊 Overall Progress</h3>

      <div style={styles.barContainer}>
        <div style={styles.bar}></div>
      </div>

      <div style={styles.label}>
        Average Accuracy: {avgScore}%
      </div>
    </div>
  );
}
