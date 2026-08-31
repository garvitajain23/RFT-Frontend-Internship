import { useState } from "react";

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", color: "var(--sky)" };
  if (bmi < 25)   return { label: "Normal", color: "var(--green)" };
  if (bmi < 30)   return { label: "Overweight", color: "var(--amber)" };
  return { label: "Obese", color: "var(--red)" };
}

export default function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const { label, color } = getBMICategory(parseFloat(bmi));

  const inputStyle = {
    background: "var(--surface2)", border: "1px solid var(--border)",
    borderRadius: 8, padding: "8px 12px", color: "var(--text)",
    fontSize: 14, width: "100%", outline: "none",
  };

  const labelStyle = { fontSize: 12, color: "var(--muted)", marginBottom: 6, display: "block" };

  return (
    <div className="card">
      <div className="section-title">BMI Calculator</div>
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div style={{
        background: "var(--surface2)", border: `1px solid ${color}40`,
        borderRadius: 10, padding: "16px 20px",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 4 }}>Your BMI</div>
          <div style={{ fontSize: 32, fontWeight: 700, color, letterSpacing: "-0.5px" }}>{bmi}</div>
        </div>
        <div style={{
          background: color + "20", color, borderRadius: 8,
          padding: "6px 14px", fontSize: 13, fontWeight: 500
        }}>{label}</div>
      </div>

      <div style={{ display: "flex", marginTop: 14, borderRadius: 6, overflow: "hidden", height: 6 }}>
        {[["var(--sky)", "18.5"], ["var(--green)", "25"], ["var(--amber)", "30"], ["var(--red)", "40+"]].map(([c], i) => (
          <div key={i} style={{ flex: 1, background: c, opacity: 0.5 }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        {["Thin", "Normal", "Over", "Obese"].map((t, i) => (
          <div key={i} style={{ fontSize: 10, color: "var(--muted)" }}>{t}</div>
        ))}
      </div>
    </div>
  );
}