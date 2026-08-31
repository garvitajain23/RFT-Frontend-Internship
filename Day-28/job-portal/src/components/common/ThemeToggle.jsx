import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{
        width: 38,
        height: 38,
        borderRadius: "var(--radius)",
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        transition: "background var(--transition)",
        flexShrink: 0
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}