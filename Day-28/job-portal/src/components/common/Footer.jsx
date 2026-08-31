import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "32px 24px",
      marginTop: 80,
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
          © 2026 Jobbr — built for Day 28
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}