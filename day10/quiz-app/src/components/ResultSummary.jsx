// ============================================================
// RESULT SUMMARY COMPONENT
// ============================================================
// The final screen shown after all questions are answered.
// Shows:
//   - Player name
//   - Final score with dynamic grade/message
//   - Visual score ring
//   - Full question review (what they got right/wrong)
//   - A "Play Again" button
//
// CONCEPT: Derived State
// We don't store "percentage" or "grade" in state.
// We CALCULATE them on the fly from the props we receive.
// This avoids stale or inconsistent data.
// ============================================================

// Props received from App.jsx:
//   - score:     final score (number of correct answers)
//   - total:     total number of questions
//   - playerName: name entered on the start screen
//   - answers:   array of { question, selected, correct } objects
//   - onRestart: function to call when "Play Again" is clicked
const ResultSummary = ({ score, total, playerName, answers, onRestart }) => {
  // Calculate percentage (derived, not stored in state)
  const percentage = Math.round((score / total) * 100);

  // Determine grade and message based on percentage
  // This is a clean way to handle multiple conditions
  const getGrade = () => {
    if (percentage === 100)
      return {
        grade: "S",
        message: "Perfect Score! You're a React Master! 🏆",
        color: "#f59e0b",
      };
    if (percentage >= 80)
      return {
        grade: "A",
        message: "Excellent! Great React knowledge! 🎉",
        color: "#22c55e",
      };
    if (percentage >= 60)
      return {
        grade: "B",
        message: "Good job! Keep learning! 👍",
        color: "#3b82f6",
      };
    if (percentage >= 40)
      return {
        grade: "C",
        message: "Not bad! Review the concepts and try again.",
        color: "#f97316",
      };
    return {
      grade: "D",
      message: "Keep practicing! You'll get there. 💪",
      color: "#ef4444",
    };
  };

  const { grade, message, color } = getGrade();

  return (
    <div className="result-screen">
      {/* ---- Header ---- */}
      <div className="result-header">
        <h1 className="result-title">Quiz Complete!</h1>
        <p className="result-player">
          Great effort, <strong>{playerName}</strong>!
        </p>
      </div>

      {/* ---- Score Display ---- */}
      <div className="score-display">
        {/* Large grade letter */}
        <div className="grade-badge" style={{ borderColor: color, color }}>
          {grade}
        </div>

        <div className="score-numbers">
          <span className="score-big" style={{ color }}>
            {score}
            <span className="score-total">/{total}</span>
          </span>
          <span className="score-percentage">{percentage}% Correct</span>
        </div>
      </div>

      {/* Result message */}
      <p className="result-message">{message}</p>

      {/* ---- Stats Row ---- */}
      <div className="result-stats">
        <div className="result-stat">
          <span className="stat-val correct-color">{score}</span>
          <span className="stat-key">Correct</span>
        </div>
        <div className="result-stat">
          <span className="stat-val incorrect-color">{total - score}</span>
          <span className="stat-key">Incorrect</span>
        </div>
        <div className="result-stat">
          <span className="stat-val">{percentage}%</span>
          <span className="stat-key">Score</span>
        </div>
      </div>

      {/* ---- Question Review ---- */}
      <div className="review-section">
        <h3 className="review-title">Question Review</h3>
        <div className="review-list">
          {/* Map through all answers to show a review of each question */}
          {answers.map((item, index) => (
            <div
              key={index}
              className={`review-item ${item.correct ? "review-correct" : "review-incorrect"}`}
            >
              {/* Status icon */}
              <span className="review-icon">{item.correct ? "✅" : "❌"}</span>

              <div className="review-content">
                <p className="review-question">
                  <strong>Q{index + 1}:</strong> {item.question}
                </p>

                {/* Only show "your answer" if they selected something */}
                {item.selected && !item.correct && (
                  <p className="review-wrong">
                    Your answer: <em>{item.selected}</em>
                  </p>
                )}

                {/* Always show the correct answer */}
                <p className="review-answer">
                  Correct: <strong>{item.answer}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Play Again Button ---- */}
      <button className="restart-btn" onClick={onRestart}>
        🔄 Play Again
      </button>
    </div>
  );
};

export default ResultSummary;
