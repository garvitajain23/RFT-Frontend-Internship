// ============================================================
// APP.JSX — THE BRAIN OF THE APPLICATION
// ============================================================
// This is the top-level component. It controls:
//   1. WHICH screen to show (start / quiz / results)
//   2. The GLOBAL STATE shared across components:
//      - playerName, score, currentQuestion, answers history
//   3. The flow logic (what happens when user answers or completes quiz)
//
// CONCEPT: State Lifting
// Components lower in the tree (QuestionCard, ResultSummary)
// need to READ and UPDATE shared data.
// We "lift" that state UP to App.jsx (the common ancestor)
// and pass it down via props, along with functions to update it.
//
// CONCEPT: Single Source of Truth
// All important app data lives here in one place.
// This makes debugging easy — there's only one place to check.
// ============================================================

import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultSummary from "./components/ResultSummary";
import { questions } from "./data/questions";
import "./App.css";

// ---- App State Shape ----
// gameState: "start" | "quiz" | "result"
// playerName: string
// currentIndex: number (0-based index into questions array)
// score: number (correct answers so far)
// answers: array of answer history (for result review)

function App() {
  // Controls which screen is visible
  // "start"  → StartScreen
  // "quiz"   → QuestionCard
  // "result" → ResultSummary
  const [gameState, setGameState] = useState("start");

  // Player's name entered on the start screen
  const [playerName, setPlayerName] = useState("");

  // Which question we're currently on (index into the questions array)
  // 0 = first question, 9 = last question (for 10 questions)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of correct answers
  const [score, setScore] = useState(0);

  // History of all answers (used in ResultSummary for review)
  // Each entry: { question, selected, answer, correct }
  const [answers, setAnswers] = useState([]);

  // ---- Called by StartScreen when user clicks "Start Quiz" ----
  const handleStart = (name) => {
    setPlayerName(name); // Save the player's name
    setGameState("quiz"); // Switch to quiz screen
  };

  // ---- Called by QuestionCard when user clicks "Next Question" ----
  // isCorrect: boolean — whether the user got this question right
  // But wait — we also need to know what they selected for the review...
  // We pass a richer object from QuestionCard via onNext
  const handleNext = (isCorrect, selectedOption) => {
    const currentQuestion = questions[currentIndex];

    // Add this answer to our history
    // Spread operator (...prev) copies all previous answers,
    // then we add the new one at the end
    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: selectedOption, // What the user picked (could be null for timeout)
        answer: currentQuestion.answer, // The correct answer
        correct: isCorrect,
      },
    ]);

    // If correct, increment score
    if (isCorrect) {
      setScore((prev) => prev + 1); // prev + 1 ensures we get the latest value
    }

    // Move to next question OR show results
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1); // Go to next question
    } else {
      setGameState("result"); // All questions done → show results
    }
  };

  // ---- Called by ResultSummary when user clicks "Play Again" ----
  const handleRestart = () => {
    // Reset ALL state back to initial values
    setGameState("start");
    setPlayerName("");
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
  };

  // ---- Render ----
  // Conditional rendering based on gameState
  // React renders different JSX depending on the current state
  return (
    <div className="app-container">
      {/* Background decorative shapes (pure CSS, no JS needed) */}
      <div className="bg-shape bg-shape-1" />
      <div className="bg-shape bg-shape-2" />

      <div className="app-inner">
        {/* Show StartScreen when gameState is "start" */}
        {gameState === "start" && <StartScreen onStart={handleStart} />}

        {/* Show QuestionCard when gameState is "quiz" */}
        {/* THIS is the fix — forces full remount on each new question */}
        {gameState === "quiz" && (
          <QuestionCard
            key={currentIndex}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            total={questions.length}
            score={score}
            onNext={handleNext}
          />
        )}

        {/* Show ResultSummary when gameState is "result" */}
        {gameState === "result" && (
          <ResultSummary
            score={score}
            total={questions.length}
            playerName={playerName}
            answers={answers}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
