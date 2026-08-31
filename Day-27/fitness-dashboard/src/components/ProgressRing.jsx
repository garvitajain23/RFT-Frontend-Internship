import { useEffect, useState } from "react";

export default function ProgressRing({ value, max, color, size = 80, label, unit }) {
  const [animated, setAnimated] = useState(0);
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(animated / max, 1);
  const dash = pct * circ;

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(value), 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1E293B" strokeWidth={8} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={8}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color }}>
          {value}<span style={{ fontSize: 10, marginLeft: 2, color: "var(--muted)" }}>{unit}</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--muted)" }}>{label}</div>
      </div>
    </div>
  );
}