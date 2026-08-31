import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/jobs", label: "Browse Jobs" },
  { to: "/company/1", label: "Companies" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "var(--surface)",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        height: 58,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 30,
            height: 30,
            background: "var(--accent)",
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white"/>
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white"/>
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.3px" }}>
            Jobbr
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                padding: "5px 12px",
                borderRadius: "var(--radius)",
                fontSize: 14,
                fontWeight: 500,
                color: pathname.startsWith(l.to) ? "var(--accent)" : "var(--text-secondary)",
                background: pathname.startsWith(l.to) ? "var(--accent-light)" : "transparent",
                transition: "all var(--transition)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle />
          <Link to="/dashboard" style={{
            padding: "6px 14px",
            borderRadius: "var(--radius)",
            background: "var(--accent)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
          }}>
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}