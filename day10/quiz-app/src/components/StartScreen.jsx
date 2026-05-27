// ============================================================
// START SCREEN COMPONENT
// ============================================================
// The first screen the user sees. Shows:
//   - App title & description
//   - An input for the player's name
//   - A "Start Quiz" button
//
// CONCEPT: Controlled Input
// In React, form inputs are "controlled" — meaning React's
// state is the SINGLE SOURCE OF TRUTH for the input's value.
// We do this by:
//   1. Storing the value in state: const [name, setName] = useState("")
//   2. Setting value={name} on the input (React controls what it shows)
//   3. Calling setName on every keystroke via onChange
//
// This makes it easy to validate, read, or reset the input.
// ============================================================

import { useState } from "react";

// Props received from App.jsx:
//   - onStart: function to call when the quiz starts
//             App.jsx passes the player name to this function
const StartScreen = ({ onStart }) => {
  // Local state for the name input
  // Initial value is an empty string ""
  const [name, setName] = useState("");

  // Called when the "Start Quiz" button is clicked
  const handleStart = () => {
    // trim() removes whitespace from both ends: "  Alex  " → "Alex"
    const trimmedName = name.trim();

    // Basic validation: don't start if name is empty
    if (!trimmedName) {
      alert("Please enter your name to start! 🙂");
      return; // Exit function early — don't call onStart
    }

    // Call the onStart function from App.jsx, passing the name up
    // This is called "lifting state up" — passing data to the parent
    onStart(trimmedName);
  };

  // Handle "Enter" key press on the input field
  // This is a better UX than forcing users to click the button
  const handleKeyDown = (e) => {
    // e.key gives us the key that was pressed
    if (e.key === "Enter") handleStart();
  };

  return (
    <div className="start-screen">
      {/* Decorative emoji header */}
      <div className="start-icon">⚡</div>

      <h1 className="start-title">React Quiz Challenge</h1>
      <p className="start-subtitle">
        Test your React knowledge with 10 questions. You have 20 seconds per
        question. Good luck!
      </p>

      {/* Quiz info cards */}
      <div className="start-stats">
        <div className="stat-card">
          <span className="stat-number">10</span>
          <span className="stat-label">Questions</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">20s</span>
          <span className="stat-label">Per Question</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">+1</span>
          <span className="stat-label">Per Correct</span>
        </div>
      </div>

      {/* Name input section */}
      <div className="name-input-group">
        <label htmlFor="player-name" className="input-label">
          Enter your name
        </label>
        <input
          id="player-name"
          type="text"
          placeholder="e.g. Alex"
          className="name-input"
          value={name} // Controlled: React sets this value
          onChange={(e) => setName(e.target.value)} // Update state on every keystroke
          onKeyDown={handleKeyDown} // Start quiz on Enter key
          maxLength={30} // Don't allow very long names
          autoFocus // Automatically focus this input on load
        />
      </div>

      <button className="start-btn" onClick={handleStart}>
        Start Quiz →
      </button>
    </div>
  );
};

export default StartScreen;
