// ============================================================
// TIMER COMPONENT
// ============================================================
// This component DISPLAYS the countdown timer.
// It receives timeLeft and duration as props, and shows:
//   - A circular SVG ring that shrinks as time passes
//   - The number of seconds left in the center
//   - Color changes: green → yellow → red as time runs out
//
// CONCEPT: "Controlled Display Component"
// This component doesn't manage any logic itself — it just
// shows what it's told via props. The actual countdown
// logic lives in the useTimer hook. This is called
// "separation of concerns" — a key professional pattern.
// ============================================================

const Timer = ({ timeLeft, duration }) => {
  // ---- SVG Circle Math ----
  // We draw a circle using SVG (Scalable Vector Graphics)
  // The circle has a "stroke-dasharray" trick to show progress:
  //
  // Imagine the circle's outline is a dashed line.
  // The total dash length = circumference of the circle.
  // As time passes, we increase the "gap" so the dash looks shorter.

  const radius = 36; // Circle radius in pixels
  const circumference = 2 * Math.PI * radius; // Full circle length (~226px)

  // How far the "remaining" arc should extend
  // When timeLeft = duration → full circle (no gap)
  // When timeLeft = 0        → no circle (full gap)
  const progress = timeLeft / duration;
  const dashOffset = circumference * (1 - progress);

  // ---- Color Logic ----
  // Change color based on how much time is left
  // This gives users a visual urgency cue
  const getColor = () => {
    const ratio = timeLeft / duration;
    if (ratio > 0.5) return "#22c55e"; // Green  — plenty of time
    if (ratio > 0.25) return "#f59e0b"; // Yellow — getting low
    return "#ef4444"; // Red    — almost out of time
  };

  return (
    // The outer div centers the SVG and number
    <div className="timer-container">
      {/* SVG = Scalable Vector Graphics — draws shapes with code */}
      <svg width="90" height="90" viewBox="0 0 90 90">
        {/* Background circle (gray track) */}
        <circle
          cx="45" // Center X
          cy="45" // Center Y
          r={radius} // Radius
          fill="none" // No fill, just the outline
          stroke="#e5e7eb" // Light gray color
          strokeWidth="6"
        />

        {/* Foreground circle (colored progress arc) */}
        <circle
          cx="45"
          cy="45"
          r={radius}
          fill="none"
          stroke={getColor()} // Dynamic color
          strokeWidth="6"
          strokeDasharray={circumference} // Total dash length = full circle
          strokeDashoffset={dashOffset} // How much to "hide" = elapsed time
          strokeLinecap="round" // Round ends on the arc
          // rotate -90deg so the arc starts at the TOP (12 o'clock position)
          // instead of the right (3 o'clock default)
          transform="rotate(-90 45 45)"
          style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }}
          // CSS transition makes the arc shrink smoothly (not jump)
        />
      </svg>

      {/* Number displayed in the center of the circle */}
      <span
        className="timer-number"
        style={{ color: getColor() }} // Same color as the arc
      >
        {timeLeft}
      </span>
    </div>
  );
};

export default Timer;
