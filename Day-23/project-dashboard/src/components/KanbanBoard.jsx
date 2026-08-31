import { useState } from "react";
import KanbanCard from "./KanbanCard";
import ProgressBar from "./ProgressBar";

const initialData = {
  todo: [
    { id: "1", title: "Design login page mockup", desc: "Figma wireframe for the auth flow", tag: "Design", priority: "high", assignee: "Priya", done: false },
    { id: "2", title: "Set up project repo", desc: "Init Vite + React, configure ESLint", tag: "Dev", priority: "medium", assignee: "Aman", done: false },
    { id: "3", title: "Write test cases for API", desc: "Cover edge cases for user endpoints", tag: "Testing", priority: "low", assignee: "Rohan", done: false },
  ],
  inprogress: [
    { id: "4", title: "Build Kanban board UI", desc: "Drag and drop with column filters", tag: "Dev", priority: "high", assignee: "Aman", done: false },
    { id: "5", title: "Review PR #14", desc: "Auth module changes need review", tag: "Review", priority: "medium", assignee: "Sneha", done: false },
  ],
  done: [
    { id: "6", title: "Project kickoff meeting", desc: "Aligned on scope and deadlines", tag: "Review", priority: "low", assignee: "Priya", done: true },
    { id: "7", title: "Setup CI/CD pipeline", desc: "GitHub Actions for auto deploy", tag: "Dev", priority: "medium", assignee: "Rohan", done: true },
  ],
};

const columns = [
  { id: "todo", label: "To Do", dot: "#f59e0b" },
  { id: "inprogress", label: "In Progress", dot: "#3b82f6" },
  { id: "done", label: "Done", dot: "#10b981" },
];

export default function KanbanBoard() {
  const [cards, setCards] = useState(initialData);
  const [dragging, setDragging] = useState(null);
  const [over, setOver] = useState(null);

  function handleDragStart(e, cardId) {
    setDragging(cardId);
  }

  function handleDrop(e, colId) {
    e.preventDefault();
    if (!dragging) return;

    const updated = { ...cards };
    let card = null;
    let sourceCol = null;

    for (const col in updated) {
      const idx = updated[col].findIndex((c) => c.id === dragging);
      if (idx !== -1) {
        [card] = updated[col].splice(idx, 1);
        sourceCol = col;
        break;
      }
    }

    if (card && sourceCol !== colId) {
      updated[colId] = [...updated[colId], card];
    } else if (card) {
      updated[sourceCol] = [...updated[sourceCol], card];
    }

    setCards(updated);
    setDragging(null);
    setOver(null);
  }

  function handleToggleDone(cardId) {
    const updated = { ...cards };
    for (const col in updated) {
      updated[col] = updated[col].map((c) =>
        c.id === cardId ? { ...c, done: !c.done } : c
      );
    }
    setCards(updated);
  }

  const allCards = Object.values(cards).flat();
  const total = allCards.length;
  const completedCount = allCards.filter((c) => c.done).length;
  const inpCount = cards.inprogress.length;
  const completedPct = total ? Math.round((completedCount / total) * 100) : 0;
  const inpPct = total ? Math.round((inpCount / total) * 100) : 0;

  return (
    <div>
      <div className="kanban-header">
        <h1>📋 Task Board</h1>
        <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
          {completedCount}/{total} tasks completed
        </span>
      </div>

      <div className="kanban-board">
        {columns.map((col) => (
          <div
            key={col.id}
            className="kanban-column"
            onDragOver={(e) => { e.preventDefault(); setOver(col.id); }}
            onDrop={(e) => handleDrop(e, col.id)}
            onDragLeave={() => setOver(null)}
          >
            <div className="column-header">
              <span className="column-title">
                <span className="col-dot" style={{ background: col.dot }} />
                {col.label}
              </span>
              <span className="col-count">{cards[col.id].length}</span>
            </div>
            <div className={`column-cards ${over === col.id ? "drag-over" : ""}`}>
              {cards[col.id].map((card) => (
                <KanbanCard
                  key={card.id}
                  card={card}
                  onDragStart={handleDragStart}
                  onToggleDone={handleToggleDone}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="progress-wrap">
        <h2>Project Progress</h2>
        <div className="progress-row">
          <ProgressBar label="Overall Completion" value={completedPct} />
          <ProgressBar label="In Progress" value={inpPct} />
          <ProgressBar label="Frontend Module" value={65} />
          <ProgressBar label="Backend API" value={40} />
        </div>
      </div>
    </div>
  );
}