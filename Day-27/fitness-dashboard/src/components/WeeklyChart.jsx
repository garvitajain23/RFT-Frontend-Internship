import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", steps: 7200, cal: 380 },
  { day: "Tue", steps: 9100, cal: 510 },
  { day: "Wed", steps: 6500, cal: 290 },
  { day: "Thu", steps: 11000, cal: 620 },
  { day: "Fri", steps: 8420, cal: 480 },
  { day: "Sat", steps: 5300, cal: 210 },
  { day: "Sun", steps: 4800, cal: 180 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 8, padding: "8px 12px", fontSize: 12 }}>
      <div style={{ color: "#94A3B8", marginBottom: 4 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color }}>{p.name}: {p.value}</div>
      ))}
    </div>
  );
};

export default function WeeklyChart() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="card">
        <div className="section-title">Steps This Week</div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data} barSize={22}>
            <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#263348" }} />
            <Bar dataKey="steps" name="Steps" fill="#38BDF8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="section-title">Calories Burned</div>
        <ResponsiveContainer width="100%" height={140}>
          <LineChart data={data}>
            <CartesianGrid stroke="#263348" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="cal" name="Calories" stroke="#F472B6" strokeWidth={2} dot={{ fill: "#F472B6", r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}