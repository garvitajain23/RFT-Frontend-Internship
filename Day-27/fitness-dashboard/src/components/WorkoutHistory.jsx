const workouts = [
  { name: "Morning Run", date: "Today", duration: "32 min", cal: 310, type: "Cardio" },
  { name: "Upper Body", date: "Yesterday", duration: "45 min", cal: 280, type: "Strength" },
  { name: "Yoga Flow", date: "Mon", duration: "30 min", cal: 150, type: "Flexibility" },
  { name: "Cycling", date: "Sun", duration: "55 min", cal: 420, type: "Cardio" },
  { name: "Core & Abs", date: "Sat", duration: "20 min", cal: 190, type: "Strength" },
];

const typeColor = {
  Cardio: "var(--sky)",
  Strength: "var(--pink)",
  Flexibility: "var(--green)",
};

export default function WorkoutHistory() {
  return (
    <div className="card">
      <div className="section-title">Workout History</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {workouts.map((w, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 14px", background: "var(--surface2)",
            borderRadius: 8, border: "1px solid var(--border)"
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{w.name}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{w.date} · {w.duration}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{
                fontSize: 11, padding: "2px 8px", borderRadius: 20,
                background: typeColor[w.type] + "20", color: typeColor[w.type],
                marginBottom: 4
              }}>{w.type}</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{w.cal} kcal</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}