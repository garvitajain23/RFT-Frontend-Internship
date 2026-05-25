// App.jsx — THE BRAIN of our application.
// In React, we use "state" to store data that can CHANGE over time.
// When state changes, React automatically RE-RENDERS the UI. Magic!
//
// CONCEPT: STATE ARRAYS
// Our tasks are stored as an ARRAY of objects in state.
// Each task looks like: { id: 1, text: "Buy milk", completed: false, isEditing: false }
//
// CONCEPT: LIFTING STATE UP
// All state lives HERE in App.jsx so ALL child components can access it.
// We pass data DOWN via "props" and pass functions DOWN to let children update state.

import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function App() {
  // useState([]) creates a state variable "tasks" initialized as an empty array.
  // "setTasks" is the ONLY way to update tasks — never modify the array directly!
  const [tasks, setTasks] = useState([
    // Pre-loaded sample tasks so the app doesn't look empty on start
    {
      id: 1,
      text: "Learn React useState hook",
      completed: true,
      isEditing: false,
    },
    { id: 2, text: "Build the To-Do App", completed: false, isEditing: false },
    { id: 3, text: "Push code to GitHub", completed: false, isEditing: false },
  ]);

  // "filter" state controls which tasks are visible: 'all' | 'completed' | 'pending'
  const [filter, setFilter] = useState("all");

  // ─── ADD TASK ──────────────────────────────────────────────────────────────
  // Called when user submits a new task from TaskInput.
  // We use SPREAD OPERATOR [...tasks] to copy the old array and ADD a new item.
  // NEVER do: tasks.push(newTask) — that mutates state directly (React won't re-render!)
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Date.now() gives a unique number based on current time
      text: text,
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]); // Create a NEW array with old tasks + new task
  };

  // ─── DELETE TASK ───────────────────────────────────────────────────────────
  // Array.filter() creates a NEW array keeping only items that DON'T match the id.
  // This is the standard React way to remove an item from a state array.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    //              ↑ Keep every task EXCEPT the one with this id
  };

  // ─── TOGGLE COMPLETED ──────────────────────────────────────────────────────
  // CONCEPT: UPDATING ITEMS in a state array.
  // Array.map() loops through every task and returns a NEW array.
  // We find the matching task and flip its "completed" boolean.
  // All other tasks are returned UNCHANGED using spread: { ...task }
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === id
            ? { ...task, completed: !task.completed } // Flip completed: true↔false
            : task, // Return all other tasks as-is
      ),
    );
  };

  // ─── TOGGLE EDIT MODE ──────────────────────────────────────────────────────
  // When user clicks "Edit", we set isEditing: true for that task.
  // This causes TaskItem to CONDITIONALLY RENDER an input box instead of text.
  // CONCEPT: CONDITIONAL RENDERING — show different UI based on state!
  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    );
  };

  // ─── SAVE EDITED TASK ──────────────────────────────────────────────────────
  // Called when user finishes editing and presses Enter or Save button.
  // Updates the text AND turns off edit mode in one go.
  const saveEdit = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task,
      ),
    );
  };

  // ─── FILTER LOGIC ──────────────────────────────────────────────────────────
  // CONCEPT: DERIVED STATE — we don't store filtered tasks in state.
  // Instead, we COMPUTE them on every render from the main tasks array.
  // This keeps our state simple and the UI always in sync.
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed; // Only done tasks
    if (filter === "pending") return !task.completed; // Only undone tasks
    return true; // 'all' — show everything
  });

  // ─── STATS FOR HEADER ──────────────────────────────────────────────────────
  const totalTasks = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = totalTasks - completedCount;

  return (
    // className is React's version of HTML's class attribute
    <div className="app-wrapper">
      <div className="app-container">
        {/* Pass data DOWN to child components via props */}
        <Header
          total={totalTasks}
          completed={completedCount}
          pending={pendingCount}
        />

        <TaskInput onAdd={addTask} />
        {/*        ↑ "onAdd" is a prop — we're passing the addTask FUNCTION
                     so TaskInput can call it when user submits */}

        <FilterBar currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
          onEdit={toggleEdit}
          onSave={saveEdit}
        />
      </div>
    </div>
  );
}

export default App;
