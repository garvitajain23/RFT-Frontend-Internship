// ============================================================
// SCORE BADGE COMPONENT
// ============================================================
// A small badge displayed during the quiz showing current score.
// Simple, focused, single-purpose — the ideal component size.
//
// Props:
//   - score: current number of correct answers
// ============================================================

const ScoreBadge = ({ score }) => {
  return (
    <div className="score-badge">
      {/* Trophy emoji for a fun visual touch */}
      <span className="score-icon">🏆</span>
      <span className="score-text">
        Score: <strong>{score}</strong>
      </span>
    </div>
  );
};

export default ScoreBadge;
