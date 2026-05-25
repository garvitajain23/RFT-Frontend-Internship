import { useState } from "react";
import "./App.css";

function App() {
  // Step 1: Create state for each input field
  // useState("") means it starts as an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Step 2: Track whether the form was submitted
  const [submitted, setSubmitted] = useState(false);

  // Step 3: Validation — both fields must have real text
  // .trim() removes spaces so "   " doesn't count as valid
  const isValid = name.trim() !== "" && email.trim() !== "";

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT: prevents page from reloading
    if (isValid) {
      setSubmitted(true); // flip the flag to show results
    }
  };

  // Step 5: Reset button — clears everything
  const handleReset = () => {
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <p className="subtitle">Day 4 — Controlled Components</p>

      {/* Show form OR submitted data — not both at the same time */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          {/* NAME FIELD */}
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name} // React controls the displayed value
              onChange={(e) => setName(e.target.value)} // update state on every keystroke
            />
          </div>

          {/* EMAIL FIELD */}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* SUBMIT — disabled when fields are empty (bonus task) */}
          <button
            type="submit"
            disabled={!isValid}
            className={`btn ${isValid ? "btn-active" : "btn-disabled"}`}
          >
            Submit
          </button>

          {/* Helpful hint when button is disabled */}
          {!isValid && (
            <p className="hint">Please fill in both fields to continue</p>
          )}
        </form>
      ) : (
        /* RESULT SECTION — shown after submit */
        <div className="result">
          <div className="result-icon">✓</div>
          <h2>Form Submitted!</h2>
          <p>Here is what you entered:</p>
          <div className="result-data">
            <div className="result-row">
              <span className="result-label">Name</span>
              <span className="result-value">{name}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Email</span>
              <span className="result-value">{email}</span>
            </div>
          </div>
          <button onClick={handleReset} className="btn btn-active">
            Submit Another
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
