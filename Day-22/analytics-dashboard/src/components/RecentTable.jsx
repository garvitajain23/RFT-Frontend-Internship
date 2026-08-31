import React from "react";

const allRows = [
  { name: "Homepage", users: 4821, bounce: "32%", duration: "2m 14s", status: "Live" },
  { name: "Pricing Page", users: 2310, bounce: "45%", duration: "1m 52s", status: "Live" },
  { name: "Blog - React Tips", users: 1870, bounce: "28%", duration: "3m 41s", status: "Live" },
  { name: "Contact Us", users: 940, bounce: "61%", duration: "0m 48s", status: "Draft" },
  { name: "Sign Up", users: 3210, bounce: "19%", duration: "2m 05s", status: "Live" },
];

export default function RecentTable({ dark, search }) {
  const rows = allRows.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      background: dark ? "#13131f" : "#fff",
      border: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
      borderRadius: "14px", padding: "20px", overflowX: "auto",
    }}>
      <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 600, color: dark ? "#fff" : "#111" }}>
        Top Pages
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr>
            {["Page", "Users", "Bounce Rate", "Avg Duration", "Status"].map(h => (
              <th key={h} style={{
                textAlign: "left", padding: "10px 12px",
                color: "#888", fontWeight: 500, fontSize: 12,
                borderBottom: dark ? "1px solid #1e1e2e" : "1px solid #f0f0f0",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: 24, color: "#888" }}>
                No results found
              </td>
            </tr>
          ) : rows.map((row, i) => (
            <tr key={i} style={{ transition: "background 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.background = dark ? "#1a1a2e" : "#f9f9ff"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <td style={{ padding: "12px 12px", color: dark ? "#fff" : "#111", fontWeight: 500 }}>{row.name}</td>
              <td style={{ padding: "12px 12px", color: dark ? "#ccc" : "#444" }}>{row.users.toLocaleString()}</td>
              <td style={{ padding: "12px 12px", color: dark ? "#ccc" : "#444" }}>{row.bounce}</td>
              <td style={{ padding: "12px 12px", color: dark ? "#ccc" : "#444" }}>{row.duration}</td>
              <td style={{ padding: "12px 12px" }}>
                <span style={{
                  padding: "3px 10px", borderRadius: "20px", fontSize: 12, fontWeight: 600,
                  background: row.status === "Live" ? "#22c55e22" : "#f59e0b22",
                  color: row.status === "Live" ? "#22c55e" : "#f59e0b",
                }}>{row.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}