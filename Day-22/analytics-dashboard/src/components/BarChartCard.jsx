import React from "react";
import {
  ResponsiveContainer, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", sessions: 320 },
  { day: "Tue", sessions: 480 },
  { day: "Wed", sessions: 410 },
  { day: "Thu", sessions: 560 },
  { day: "Fri", sessions: 720 },
  { day: "Sat", sessions: 390 },
  { day: "Sun", sessions: 270 },
];

export default function BarChartCard({ dark }) {
  return (
    <div style={{
      background: dark ? "#13131f" : "#fff",
      border: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
      borderRadius: "14px", padding: "20px",
    }}>
      <h3 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 600, color: dark ? "#fff" : "#111" }}>
        Weekly Sessions
      </h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#1e1e2e" : "#f0f0f0"} vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: dark ? "#1a1a2e" : "#fff",
              border: dark ? "1px solid #2a2a3e" : "1px solid #e5e7eb",
              borderRadius: 8, color: dark ? "#fff" : "#111",
            }}
          />
          <Bar dataKey="sessions" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}