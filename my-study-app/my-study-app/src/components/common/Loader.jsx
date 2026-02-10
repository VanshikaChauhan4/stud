export default function Loader({ text = "Loading..." }) {
  return (
    <div style={container}>
      <div style={spinner}></div>
      <p style={label}>{text}</p>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "20px",
  color: "#9ca3af",
};

const spinner = {
  width: "40px",
  height: "40px",
  border: "4px solid #374151",
  borderTop: "4px solid #6366f1",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const label = {
  fontSize: "14px",
};
