import { useTheme } from "../context/ThemeContext";

const pages = [
  { id: "board", icon: "📋", label: "Kanban Board" },
  { id: "team", icon: "👥", label: "Team" },
];

export default function Sidebar({ activePage, setActivePage }) {
  const { dark, setDark } = useTheme();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">📌 PM App</div>

      <nav>
        {pages.map((p) => (
          <button
            key={p.id}
            className={`nav-item ${activePage === p.id ? "active" : ""}`}
            onClick={() => setActivePage(p.id)}
          >
            <span>{p.icon}</span>
            <span className="nav-label">{p.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="dark-toggle" onClick={() => setDark(!dark)}>
          <span>{dark ? "☀️" : "🌙"}</span>
          <span>{dark ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </aside>
  );
}