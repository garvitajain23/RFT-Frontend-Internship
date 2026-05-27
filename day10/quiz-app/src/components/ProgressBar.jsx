// ============================================================
// PROGRESS BAR COMPONENT
// ============================================================
// Shows the user which question they're on and how far along
// they are in the quiz.
//
// CONCEPT: "Presentational Component" (also called "Dumb Component")
// This component has NO state and NO logic.
// It just receives props and returns JSX.
// Pure components like this are easy to test and reuse.
//
// Props received:
//   - current:  the current question index (0-based, so we add 1)
//   - total:    total number of questions
// ============================================================

const ProgressBar = ({ current, total }) => {
  // Calculate what percentage of the quiz is done
  // Example: question 3 of 10 → (3/10) * 100 = 30%
  const percentage = (current / total) * 100;

  return (
    <div className="progress-wrapper">
      {/* Top row: "Question X of Y" text + percentage */}
      <div className="progress-info">
        <span className="progress-label">
          Question <strong>{current}</strong> of {total}
        </span>
        <span className="progress-percent">{Math.round(percentage)}%</span>
      </div>

      {/* The visual bar: a gray track with a colored fill inside */}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }} // Dynamic width!
          // Note: inline styles are fine for dynamic values
          // Use CSS classes for static styles
        />
      </div>
    </div>
  );
};

export default ProgressBar;
