export default function SearchBar({ query, location, onQuery, onLocation }) {
  return (
    <div style={{
      display: "flex",
      gap: 10,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "8px 8px 8px 16px",
      boxShadow: "var(--shadow-sm)",
    }}>
      <div style={{ flex: 1.5, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--text-muted)", fontSize: 16 }}>🔍</span>
        <input
          type="text"
          placeholder="Role, skill, or company"
          value={query}
          onChange={e => onQuery(e.target.value)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            fontSize: 14,
            color: "var(--text-primary)",
            padding: "4px 0",
          }}
        />
      </div>
      <div style={{
        width: 1,
        background: "var(--border)",
        margin: "4px 0",
        flexShrink: 0
      }} />
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--text-muted)", fontSize: 16 }}>📍</span>
        <input
          type="text"
          placeholder="Location or Remote"
          value={location}
          onChange={e => onLocation(e.target.value)}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            fontSize: 14,
            color: "var(--text-primary)",
            padding: "4px 0",
          }}
        />
      </div>
      <button style={{
        padding: "8px 18px",
        background: "var(--accent)",
        color: "#fff",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: 600,
        flexShrink: 0,
      }}>
        Search
      </button>
    </div>
  );
}