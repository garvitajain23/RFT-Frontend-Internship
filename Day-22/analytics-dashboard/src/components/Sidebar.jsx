import React from "react";
import {
  LayoutDashboard, BarChart2, FileText,
  Users, DollarSign, Settings, HelpCircle, X
} from "lucide-react";

const navItems = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard" },
  { icon: <BarChart2 size={18} />, label: "Analytics" },
  { icon: <FileText size={18} />, label: "Reports" },
  { icon: <Users size={18} />, label: "Audience" },
  { icon: <DollarSign size={18} />, label: "Revenue" },
];

const bottomItems = [
  { icon: <Settings size={18} />, label: "Settings" },
  { icon: <HelpCircle size={18} />, label: "Help" },
];

export default function Sidebar({ open, onClose, dark }) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 40,
            display: window.innerWidth < 768 ? "block" : "none",
          }}
        />
      )}

      <aside
        style={{
          position: "fixed",
          top: 0, left: 0,
          height: "100vh",
          width: "240px",
          background: dark ? "#0f0f1a" : "#ffffff",
          borderRight: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0",
          zIndex: 50,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 32, height: 32, borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 14,
            }}>M</div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 18,
              color: dark ? "#fff" : "#111",
            }}>Metrik</span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: dark ? "#888" : "#666" }}>
            <X size={18} />
          </button>
        </div>

        {/* Nav Items */}
        <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map(({ icon, label }, i) => (
            <NavItem key={label} icon={icon} label={label} active={i === 0} dark={dark} />
          ))}
        </nav>

        <div style={{ borderTop: dark ? "1px solid #1e1e2e" : "1px solid #e5e7eb", margin: "12px 0" }} />

        <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {bottomItems.map(({ icon, label }) => (
            <NavItem key={label} icon={icon} label={label} dark={dark} />
          ))}
        </div>

        {/* User */}
        <div style={{ margin: "16px 12px 0", padding: "12px", borderRadius: "10px", background: dark ? "#1a1a2e" : "#f3f4f6", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 13,
          }}>AM</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13, color: dark ? "#fff" : "#111" }}>Aman</div>
            <div style={{ fontSize: 11, color: "#888" }}>Intern</div>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ icon, label, active, dark }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "10px 12px", borderRadius: "8px",
        color: active ? "#fff" : dark ? "#aaa" : "#555",
        background: active ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
        textDecoration: "none", fontSize: 14, fontWeight: 500,
        transition: "all 0.2s",
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = dark ? "#1e1e2e" : "#f3f4f6"; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}