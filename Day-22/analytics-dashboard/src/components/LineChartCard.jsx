import React from "react";
import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", revenue: 4200, users: 1800 },
  { month: "Feb", revenue: 5800, users: 2200 },
  { month: "Mar", revenue: 5100, users: 2000 },
  { month: "Apr", revenue: 7200, users: 3100 },
  { month: "May", revenue: 6800, users: 2900 },
  { month: "Jun", revenue: 8900, users: 3800 },
  { month: "Jul", revenue: 9400, users: 4200 },
];

export default function LineChartCard({ dark }) {
  return (
    <div style={{
      background: dark ? "#13131f" : "#fff",
      border: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
      borderRadius: "14px", padding: "20px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: dark ? "#fff" : "#111" }}>Revenue vs Users</h3>
        <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
          <span style={{ color: "#6366f1" }}>● Revenue</span>
          <span style={{ color: "#22c55e" }}>● Users</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#1e1e2e" : "#f0f0f0"} />
          <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: dark ? "#1a1a2e" : "#fff",
              border: dark ? "1px solid #2a2a3e" : "1px solid #e5e7eb",
              borderRadius: 8, color: dark ? "#fff" : "#111",
            }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="users" stroke="#22c55e" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}