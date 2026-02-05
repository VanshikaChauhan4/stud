import ProgressChart from "../components/analytics/ProgressChart.jsx";
import WeakTopics from "../components/analytics/WeakTopics.jsx";
export default function Dashboard() {
  const attempts = [
    { topic: "DBMS", score: 40 },
    { topic: "OS", score: 75 },
    { topic: "CN", score: 30 },
  ];
  const styles = {
    page: {
      padding: "40px",
      color: "white",
    },
    title: {
      fontSize: "2.2rem",
      marginBottom: "30px",
    },
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    card: {
      background: "rgba(255,255,255,0.1)",
      padding: "25px",
      borderRadius: "20px",
      textAlign: "center",
      fontSize: "1.1rem",
    },
    actions: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      marginBottom: "50px",
    },
    button: {
      padding: "14px 24px",
      borderRadius: "30px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      background: "linear-gradient(135deg,#00e5ff,#7f5cff)",
    },
    analytics: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard 📊</h1>

      {/* 🔹 Stats Section */}
      <div style={styles.stats}>
        <div style={styles.card}>📄 PDFs Uploaded: 3</div>
        <div style={styles.card}>🧠 Flashcards Learned: 42</div>
        <div style={styles.card}>🎯 Quiz Accuracy: 78%</div>
      </div>

      {/* 🔹 Action Buttons */}
      <div style={styles.actions}>
        <button style={styles.button}>📄 Upload New PDF</button>
        <button style={styles.button}>🧠 Continue Learning</button>
        <button style={styles.button}>🤖 Ask AI Tutor</button>
      </div>

      {/* 🔹 Analytics Section */}
      <div style={styles.analytics}>
        <ProgressChart attempts={attempts} />
        <WeakTopics attempts={attempts} />
      </div>
    </div>
  );
}
