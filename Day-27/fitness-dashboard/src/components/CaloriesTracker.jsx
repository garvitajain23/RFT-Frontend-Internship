import ProgressRing from "./ProgressRing";

export default function CaloriesTracker() {
  const rings = [
    { label: "Burned", value: 480, max: 600, color: "var(--pink)", unit: "kcal" },
    { label: "Intake", value: 1840, max: 2200, color: "var(--sky)", unit: "kcal" },
    { label: "Exercise", value: 47, max: 60, color: "var(--green)", unit: "min" },
  ];

  return (
    <div className="card">
      <div className="section-title">Today's Goals</div>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: 8 }}>
        {rings.map((r) => (
          <ProgressRing key={r.label} {...r} size={90} />
        ))}
      </div>
    </div>
  );
}