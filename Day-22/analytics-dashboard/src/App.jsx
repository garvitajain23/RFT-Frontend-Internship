import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import LineChartCard from "./components/LineChartCard";
import BarChartCard from "./components/BarChartCard";
import RecentTable from "./components/RecentTable";
import "./App.css";

const stats = [
  { title: "Total Revenue", value: "$94,210", change: "12.4%", positive: true, icon: "💰", color: "#6366f1" },
  { title: "Active Users", value: "38,402", change: "8.1%", positive: true, icon: "👥", color: "#22c55e" },
  { title: "New Sessions", value: "12,870", change: "3.2%", positive: false, icon: "📊", color: "#f59e0b" },
  { title: "Bounce Rate", value: "28.6%", change: "1.4%", positive: true, icon: "↩️", color: "#ec4899" },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Auto-close sidebar on small screens
    const handler = () => {
      if (window.innerWidth < 768) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: dark ? "#0d0d1a" : "#f5f6fa",
      fontFamily: "'Inter', sans-serif",
    }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} dark={dark} />

      <div style={{
        marginLeft: sidebarOpen && window.innerWidth >= 768 ? "240px" : "0",
        transition: "margin-left 0.3s ease",
        minHeight: "100vh",
      }}>
        <Topbar
          onMenuClick={() => setSidebarOpen(o => !o)}
          dark={dark}
          toggleTheme={() => setDark(d => !d)}
          search={search}
          setSearch={setSearch}
        />

        <main style={{ padding: "24px", maxWidth: "1400px" }}>

          {/* Page Title */}
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: dark ? "#fff" : "#111" }}>
              Dashboard Overview
            </h1>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "#888" }}>
              Welcome back, Aman 👋 Here's what's happening today.
            </p>
          </div>

          {/* Stat Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}>
            {stats.map((s, i) => (
              <StatCard key={i} {...s} loading={loading} dark={dark} />
            ))}
          </div>

          {/* Charts */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}>
            <LineChartCard dark={dark} />
            <BarChartCard dark={dark} />
          </div>

          {/* Table */}
          <RecentTable dark={dark} search={search} />

        </main>
      </div>
    </div>
  );
}