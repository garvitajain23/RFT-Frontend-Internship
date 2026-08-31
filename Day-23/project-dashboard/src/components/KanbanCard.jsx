export default function KanbanCard({ card, onDragStart, onToggleDone }) {
  const colors = {
    Design: { bg: "#ede9fe", color: "#7c3aed" },
    Dev: { bg: "#dbeafe", color: "#2563eb" },
    Testing: { bg: "#d1fae5", color: "#059669" },
    Review: { bg: "#fef3c7", color: "#d97706" },
  };

  const tagStyle = colors[card.tag] || { bg: "#f3f4f6", color: "#374151" };

  return (
    <div
      className={`kanban-card ${card.done ? "completed" : ""}`}
      draggable
      onDragStart={(e) => onDragStart(e, card.id)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          className="card-tag"
          style={{ background: tagStyle.bg, color: tagStyle.color }}
        >
          {card.tag}
        </span>
        <button
          onClick={() => onToggleDone(card.id)}
          title={card.done ? "Mark incomplete" : "Mark complete"}
          style={{
            background: card.done ? "#d1fae5" : "var(--border)",
            border: "none",
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            cursor: "pointer",
            fontSize: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: card.done ? "#059669" : "var(--muted)",
          }}
        >
          {card.done ? "✓" : "○"}
        </button>
      </div>

      <div className="card-title">{card.title}</div>
      <div className="card-desc">{card.desc}</div>

      <div className="card-footer">
        {card.done ? (
          <span className="done-badge">✓ Done</span>
        ) : (
          <span className={`card-priority priority-${card.priority}`}>
            {card.priority}
          </span>
        )}
        <div className="card-avatar">{card.assignee[0]}</div>
      </div>
    </div>
  );
}