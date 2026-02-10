export default function Button({
  children,
  onClick,
  type = "primary",
  disabled = false,
}) {
  const styles = {
    base: {
      padding: "12px 20px",
      borderRadius: "12px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
    },
    primary: {
      background: "linear-gradient(135deg, #6c63ff, #4f46e5)",
      color: "#fff",
    },
    secondary: {
      background: "#1f2937",
      color: "#fff",
    },
    danger: {
      background: "#ef4444",
      color: "#fff",
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles.base,
        ...styles[type],
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
}
