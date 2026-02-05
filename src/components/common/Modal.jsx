export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <div style={header}>
          <h3>{title}</h3>
          <button onClick={onClose} style={closeBtn}>✖</button>
        </div>

        <div style={body}>{children}</div>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modal = {
  background: "#111827",
  borderRadius: "16px",
  width: "90%",
  maxWidth: "420px",
  padding: "20px",
  color: "#fff",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px",
};

const closeBtn = {
  background: "transparent",
  border: "none",
  color: "#9ca3af",
  fontSize: "18px",
  cursor: "pointer",
};

const body = {
  fontSize: "14px",
  color: "#d1d5db",
};
