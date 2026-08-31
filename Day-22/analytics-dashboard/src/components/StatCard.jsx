import React from "react";

export default function StatCard({ title, value, change, positive, icon, color, loading, dark }) {
  if (loading) {
    return (
      <div style={cardStyle(dark)}>
        <div style={{ width: "60%", height: 14, borderRadius: 6, background: dark ? "#1e1e2e" : "#e5e7eb", marginBottom: 12 }} className="shimmer" />
        <div style={{ width: "40%", height: 28, borderRadius: 6, background: dark ? "#1e1e2e" : "#e5e7eb" }} className="shimmer" />
      </div>
    );
  }

  return (
    <div style={cardStyle(dark)}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, color: "#888", fontWeight: 500 }}>{title}</p>
          <h2 style={{ margin: "6px 0 4px", fontSize: 28, fontWeight: 700, color: dark ? "#fff" : "#111" }}>{value}</h2>
          <span style={{
            fontSize: 12, fontWeight: 600,
            color: positive ? "#22c55e" : "#ef4444",
          }}>
            {positive ? "▲" : "▼"} {change} vs last month
          </span>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: "10px",
          background: color + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20,
        }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function cardStyle(dark) {
  return {
    background: dark ? "#13131f" : "#ffffff",
    border: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "20px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  };
}