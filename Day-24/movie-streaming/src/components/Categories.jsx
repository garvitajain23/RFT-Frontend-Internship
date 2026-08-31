import { categories } from "../App";

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <div style={{
      padding: "24px 40px 8px",
      display: "flex", gap: 10, flexWrap: "wrap",
    }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          style={{
            padding: "7px 18px",
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 500,
            border: activeCategory === cat ? "none" : "1px solid var(--surface2)",
            background: activeCategory === cat ? "var(--accent)" : "var(--surface)",
            color: activeCategory === cat ? "#fff" : "var(--text-muted)",
            transition: "all 0.2s",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}