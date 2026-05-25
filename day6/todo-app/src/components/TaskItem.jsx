// TaskItem.jsx — Renders ONE single task row.
// This is where all the action happens!
//
// CONCEPT: CONDITIONAL RENDERING
// Based on task.isEditing (boolean), we show EITHER:
//   → An input box (edit mode)  OR
//   → The task text (view mode)
// This is React's superpower — the UI reflects state automatically.

import { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onEdit, onSave }) {
  // Local state to hold the text while the user is editing
  // We initialize it with the current task text
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (!trimmed) return; // Don't save an empty task
    onSave(task.id, trimmed);
  };

  // Save on Enter, cancel on Escape
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") onEdit(task.id); // Toggle edit off = cancel
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* Left side: Checkbox + Task text OR Edit input */}

      {/* CHECKBOX — clicking this calls toggleComplete in App.jsx */}
      <button
        className={`checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
        title="Mark as complete"
      >
        {task.completed ? "✓" : ""}
      </button>

      {/* CONDITIONAL RENDERING — show edit input OR task text */}
      <div className="task-content">
        {task.isEditing ? (
          // EDIT MODE: Show an input field pre-filled with current text
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus // Automatically focus this input when it appears
          />
        ) : (
          // VIEW MODE: Show the task text with strikethrough if completed
          <span
            className={`task-text ${task.completed ? "strikethrough" : ""}`}
          >
            {task.text}
          </span>
        )}
      </div>

      {/* Right side: Action buttons */}
      <div className="task-actions">
        {task.isEditing ? (
          // In edit mode: show Save and Cancel
          <>
            <button className="btn btn-save" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-cancel" onClick={() => onEdit(task.id)}>
              ✕
            </button>
          </>
        ) : (
          // In view mode: show Edit and Delete
          <>
            {/* Don't allow editing a completed task */}
            {!task.completed && (
              <button className="btn btn-edit" onClick={() => onEdit(task.id)}>
                ✏️ Edit
              </button>
            )}
            <button
              className="btn btn-delete"
              onClick={() => onDelete(task.id)}
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
