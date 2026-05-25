import { useState } from "react";
import "./App.css";

function App() {
  // 🗒️ STATE 1: The list of tasks (each task is an object)
  const [tasks, setTasks] = useState([]);

  // ✏️ STATE 2: Whatever the user is currently typing
  const [inputValue, setInputValue] = useState("");

  // ➕ FUNCTION: Add a new task
  function addTask() {
    // Don't add empty tasks
    if (inputValue.trim() === "") return;

    // Create a new task object
    const newTask = {
      id: Date.now(), // unique id using current timestamp
      text: inputValue, // the task text
      completed: false, // not done yet
    };

    // Add it to the list (spread old tasks, add new one)
    setTasks([...tasks, newTask]);

    // Clear the input box
    setInputValue("");
  }

  // 🗑️ FUNCTION: Delete a task by its id
  function deleteTask(id) {
    // Keep all tasks EXCEPT the one with this id
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // ✅ FUNCTION: Toggle completed on/off
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  // 📊 Count how many tasks are done
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      {/* Task counter */}
      <p className="counter">
        {completedCount} / {tasks.length} tasks completed
      </p>

      {/* Input area */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "task done" : "task"}>
            <span onClick={() => toggleComplete(task.id)}>
              {task.completed ? "✅" : "⬜"} {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;
