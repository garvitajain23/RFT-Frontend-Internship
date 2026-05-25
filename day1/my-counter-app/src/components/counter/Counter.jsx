// src/components/Counter/Counter.jsx

import { useState } from "react"; // Import useState hook from React
import "./Counter.css"; // Import our styles

// This is our Counter Component — a functional component
function Counter() {
  // ====================================================
  // STATE DECLARATION
  // count = current value (starts at 0)
  // setCount = function to update count
  // ====================================================
  const [count, setCount] = useState(0);

  // Step value for bonus feature — how much to increment/decrement
  const [step, setStep] = useState(1);

  // ====================================================
  // EVENT HANDLER FUNCTIONS
  // These are called when buttons are clicked
  // ====================================================

  // Increment: adds step to current count
  const handleIncrement = () => {
    setCount(count + step);
  };

  // Decrement: subtracts step but BONUS: never goes below 0
  const handleDecrement = () => {
    if (count - step < 0) {
      setCount(0); // Prevent negative values (BONUS feature!)
    } else {
      setCount(count - step);
    }
  };

  // Reset: brings count back to 0
  const handleReset = () => {
    setCount(0);
  };

  // ====================================================
  // JSX — What the UI looks like
  // ====================================================
  return (
    <div className="counter-container">
      <h1 className="counter-title">⚡ React Counter</h1>

      {/* BONUS: Step Selector — lets user choose increment value */}
      <div className="step-selector">
        <label htmlFor="step">Step Size: </label>
        <select
          id="step"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="step-dropdown"
        >
          <option value={1}>+1</option>
          <option value={5}>+5</option>
          <option value={10}>+10</option>
        </select>
      </div>

      {/* Display the current count */}
      {/* Conditional styling: red if 0, green if positive */}
      <div className={`count-display ${count === 0 ? "zero" : "positive"}`}>
        {count}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button
          className="btn btn-decrement"
          onClick={handleDecrement}
          disabled={count === 0} // Disable when count is 0
        >
          − Decrement
        </button>

        <button className="btn btn-reset" onClick={handleReset}>
          ↺ Reset
        </button>

        <button className="btn btn-increment" onClick={handleIncrement}>
          + Increment
        </button>
      </div>

      {/* Status message */}
      <p className="status-message">
        {count === 0 && "Counter is at zero"}
        {count > 0 && count < 10 && "Just getting started!"}
        {count >= 10 && count < 50 && "Great progress! 🚀"}
        {count >= 50 && "You're on fire! 🔥"}
      </p>
    </div>
  );
}

export default Counter; // Export so other files can use this component
