export default function ActivityCards() {
  const stats = [
    { label: "Steps", value: "8,420", unit: "/ 10k", color: "var(--sky)" },
    { label: "Calories", value: "1,840", unit: "kcal", color: "var(--pink)" },
    { label: "Active Min", value: "47", unit: "/ 60 min", color: "var(--green)" },
    { label: "Distance", value: "5.2", unit: "km", color: "var(--amber)" },
  ];

  return (
    <div className="grid-4">
      {stats.map((s) => (
        <div className="card" key={s.label}>
          <div className="card-label">{s.label}</div>
          <div className="card-value" style={{ color: s.color }}>
            {s.value}
          </div>
          <div className="card-sub">{s.unit}</div>
        </div>
      ))}
    </div>
  );
}