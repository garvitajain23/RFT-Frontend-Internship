const types = ["All", "Full-time", "Contract", "Part-time"];
const locations = ["All", "Remote", "San Francisco, CA", "New York, NY", "Bangalore, IN"];

export default function JobFilters({ filters, onChange }) {
  const setFilter = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: 20,
      position: "sticky",
      top: 74,
    }}>
      <h3 style={{
        fontSize: 13,
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        color: "var(--text-muted)",
        marginBottom: 16,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }}>
        Filters
      </h3>

      <Section label="Job type">
        {types.map(t => (
          <Pill
            key={t}
            active={filters.type === t}
            onClick={() => setFilter("type", t)}
          >
            {t}
          </Pill>
        ))}
      </Section>

      <Section label="Location">
        {locations.map(l => (
          <Pill
            key={l}
            active={filters.location === l}
            onClick={() => setFilter("location", l)}
          >
            {l}
          </Pill>
        ))}
      </Section>

      <Section label="Salary range">
        <input
          type="range"
          min={0}
          max={50}
          value={filters.salary || 50}
          onChange={e => setFilter("salary", Number(e.target.value))}
          style={{ width: "100%", accentColor: "var(--accent)" }}
        />
        <p style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }}>
          Up to ₹{filters.salary || 50} LPA
        </p>
      </Section>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {children}
      </div>
    </div>
  );
}

function Pill({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 500,
        border: "1px solid",
        borderColor: active ? "var(--accent)" : "var(--border)",
        background: active ? "var(--accent-light)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-secondary)",
        cursor: "pointer",
        transition: "all var(--transition)",
      }}
    >
      {children}
    </button>
  );
}