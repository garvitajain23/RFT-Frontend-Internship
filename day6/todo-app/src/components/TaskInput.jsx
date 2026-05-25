// TaskInput.jsx — Handles user INPUT for adding new tasks.
//
// CONCEPT: CONTROLLED COMPONENT
// In React, form inputs are "controlled" — meaning React STATE controls the value.
// The input's value is always equal to our state variable.
// When user types → onChange fires → we update state → React re-renders with new value.
// This keeps React as the "single source of truth" for what's in the input box.

import { useState } from "react";

// "onAdd" is a prop — it's actually the addTask function from App.jsx
function TaskInput({ onAdd }) {
  // Local state just for this component's input value
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Trim removes whitespace from both ends: "  hello  " → "hello"
    const trimmed = inputValue.trim();

    // Validation — don't add empty tasks
    if (!trimmed) {
      setError("Please enter a task!");
      return; // Stop the function here
    }

    onAdd(trimmed); // Call the parent's addTask function with the text
    setInputValue(""); // Clear the input box
    setError(""); // Clear any error message
  };

  // Allow pressing Enter key to submit (better UX)
  const handleKeyDown = (e) => {
    // e is the keyboard EVENT object. e.key tells us which key was pressed.
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="task-input-section">
      <div className="input-row">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task... (press Enter)"
          value={inputValue} // CONTROLLED: value comes from state
          onChange={(e) => setInputValue(e.target.value)} // Update state on every keystroke
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={handleSubmit}>
          + Add Task
        </button>
      </div>
      {/* CONDITIONAL RENDERING: Only show error paragraph if error string is not empty */}
      {error && <p className="error-msg">⚠️ {error}</p>}
    </div>
  );
}

export default TaskInput;
