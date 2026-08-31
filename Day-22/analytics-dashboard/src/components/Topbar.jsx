import React from "react";
import { Menu, Sun, Moon, Bell, Search } from "lucide-react";

export default function Topbar({ onMenuClick, dark, toggleTheme, search, setSearch }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short", day: "numeric", month: "short", year: "numeric"
  });

  return (
    <header style={{
      height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 24px",
      background: dark ? "#0d0d1a" : "#ffffff",
      borderBottom: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
      position: "sticky", top: 0, zIndex: 30,
    }}>
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button onClick={onMenuClick} style={{ background: "none", border: "none", cursor: "pointer", color: dark ? "#fff" : "#111" }}>
          <Menu size={22} />
        </button>
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: dark ? "#1a1a2e" : "#f3f4f6",
          borderRadius: "8px", padding: "8px 12px",
          width: "clamp(160px, 30vw, 320px)",
        }}>
          <Search size={15} color="#888" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search metrics…"
            style={{
              background: "none", border: "none", outline: "none",
              color: dark ? "#fff" : "#111", fontSize: 14, width: "100%",
            }}
          />
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: 13, color: "#888", display: "none" }}
          className="date-hide">{today}</span>
        <span style={{ fontSize: 12, color: "#888" }}>{today}</span>

        <button onClick={toggleTheme} style={{
          background: dark ? "#1a1a2e" : "#f3f4f6",
          border: "none", borderRadius: "8px", padding: "8px",
          cursor: "pointer", color: dark ? "#fff" : "#111",
          display: "flex", alignItems: "center",
        }}>
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button style={{
          background: dark ? "#1a1a2e" : "#f3f4f6",
          border: "none", borderRadius: "8px", padding: "8px",
          cursor: "pointer", color: dark ? "#fff" : "#111",
          position: "relative", display: "flex", alignItems: "center",
        }}>
          <Bell size={16} />
          <span style={{
            position: "absolute", top: 6, right: 6,
            width: 6, height: 6, borderRadius: "50%",
            background: "#6366f1",
          }} />
        </button>
      </div>
    </header>
  );
}