// ============================================================
// QUESTION CARD COMPONENT
// ============================================================
// The heart of the quiz — shows:
//   - Current question text
//   - 4 answer options as clickable buttons
//   - Visual feedback: green (correct) / red (wrong) after selection
//   - A "Next Question" button (only visible after answering)
//   - Timer and progress bar at the top
//
// CONCEPT: Local Component State
// This component manages its own state for:
//   - selectedOption: which option the user clicked
//   - answered: whether the user has clicked an answer yet
// When the user moves to the next question (via onNext),
// the parent (App.jsx) changes the question, which causes
// this component to re-render with fresh state.
// But wait — actually we need to RESET state when question changes!
// We handle this with a useEffect that watches the question.id
// ============================================================

import { useState } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import ScoreBadge from "./ScoreBadge";
import useTimer from "../hooks/useTimer";

// How many seconds allowed per question
const TIME_PER_QUESTION = 20;

// Props received from App.jsx:
//   - question:       current question object {id, question, options, answer}
//   - questionNumber: which question this is (1-based for display)
//   - total:          total number of questions
//   - score:          current score
//   - onNext:         function to call when moving to next question
//                     receives (wasCorrect: boolean) argument
const QuestionCard = ({ question, questionNumber, total, score, onNext }) => {
  // Which option button the user clicked (null if not yet answered)
  const [selectedOption, setSelectedOption] = useState(null);

  // Has the user submitted an answer? Controls showing feedback + Next button
  const [answered, setAnswered] = useState(false);

  // Called by useTimer when the countdown reaches 0
  const handleTimeExpire = () => {
    // Time ran out — treat as a wrong answer (no selection)
    if (!answered) {
      setAnswered(true); // Show correct answer highlighted
      setSelectedOption(null); // No option was selected
    }
  };

  // Our custom hook — handles the countdown logic
  // Returns timeLeft (number) and resetTimer (function)
  const { timeLeft } = useTimer(TIME_PER_QUESTION, handleTimeExpire);

  // CONCEPT: useEffect with Dependency Array
  // This effect runs whenever `question` changes.
  // When App.jsx passes a new question, we reset the local state
  // so the card shows fresh (no old selection, no old feedback).

  // Called when the user clicks an answer option
  const handleOptionClick = (option) => {
    // Don't allow changing answer after submitting
    if (answered) return;

    setSelectedOption(option); // Remember which option was clicked
    setAnswered(true); // Lock in the answer
  };

  // Called when "Next Question" button is clicked
  const handleNext = () => {
    const isCorrect = selectedOption === question.answer;
    onNext(isCorrect, selectedOption); // Also pass what they selected
  };

  // Determines the CSS class for each option button
  // This creates the green/red visual feedback after answering
  const getOptionClass = (option) => {
    if (!answered) return "option-btn"; // Not answered yet — default style

    if (option === question.answer) {
      return "option-btn correct"; // Always highlight the correct answer
    }

    if (option === selectedOption && option !== question.answer) {
      return "option-btn incorrect"; // Highlight wrong selection in red
    }

    return "option-btn dimmed"; // Dim other options
  };

  return (
    <div className="question-card">
      {/* ---- Header: Progress + Score + Timer ---- */}
      <div className="card-header">
        <ProgressBar current={questionNumber} total={total} />
        <div className="header-right">
          <ScoreBadge score={score} />
          <Timer timeLeft={timeLeft} duration={TIME_PER_QUESTION} />
        </div>
      </div>

      {/* ---- Question Text ---- */}
      <div className="question-section">
        {/* Small label showing question number */}
        <span className="question-number-label">Question {questionNumber}</span>
        <h2 className="question-text">{question.question}</h2>
      </div>

      {/* ---- Answer Options ---- */}
      {/* We use Array.map() to render each option as a button */}
      {/* .map() loops through the array and returns JSX for each item */}
      <div className="options-grid">
        {question.options.map((option, index) => (
          // key prop is required when rendering lists — helps React track items
          <button
            key={index}
            className={getOptionClass(option)} // Dynamic class for feedback
            onClick={() => handleOptionClick(option)}
            disabled={answered} // Disable buttons after answering
          >
            {/* Option letter: A, B, C, D */}
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
              {/* String.fromCharCode(65) = "A", 66 = "B", etc. */}
            </span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      {/* ---- Feedback + Next Button (shown only after answering) ---- */}
      {/* Conditional rendering: { condition && <JSX /> } */}
      {/* If answered is false, nothing renders. If true, the div renders. */}
      {answered && (
        <div className="feedback-section">
          {/* Show different message based on correct/incorrect */}
          <div
            className={`feedback-message ${selectedOption === question.answer ? "feedback-correct" : "feedback-incorrect"}`}
          >
            {selectedOption === question.answer ? (
              <span>✅ Correct! Well done.</span>
            ) : selectedOption === null ? (
              <span>⏰ Time's up! The correct answer was highlighted.</span>
            ) : (
              <span>
                ❌ Incorrect. The correct answer is highlighted in green.
              </span>
            )}
          </div>

          {/* Explanation of the correct answer */}
          <p className="explanation-text">💡 {question.explanation}</p>

          {/* Next button */}
          <button className="next-btn" onClick={handleNext}>
            {questionNumber === total ? "See Results 🎉" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
