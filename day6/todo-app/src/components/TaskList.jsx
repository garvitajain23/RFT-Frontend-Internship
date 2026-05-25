// TaskList.jsx — Renders the FULL LIST of tasks.
// It loops over the tasks array and renders one <TaskItem> per task.
//
// CONCEPT: RENDERING LISTS
// In React, we use Array.map() to transform an array of DATA into an array of JSX elements.
// Each element needs a unique "key" prop so React can track which item changed.

import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle, onEdit, onSave }) {
  // CONDITIONAL RENDERING: If no tasks match the filter, show a friendly message
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🎉</span>
        <p>No tasks here! Add one above or change the filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {/* Map over tasks array → return a TaskItem for each task object */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Unique key — React uses this internally for performance
          task={task} // Pass the whole task object as a prop
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default TaskList;
