export default function Question({ data, selected, onSelect }) {
  if (!data) return null;

  return (
    <div style={card}>
      <h3>{data.question}</h3>

      {data.options.map((opt, idx) => (
        <div
          key={idx}
          style={{
            ...option,
            background: selected === idx ? "#4f46e5" : "#1f2937",
          }}
          onClick={() => onSelect(data.id, idx)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "20px",
  borderRadius: "16px",
};

const option = {
  padding: "12px",
  marginTop: "10px",
  borderRadius: "10px",
  cursor: "pointer",
};
