export default function Badge({ children, variant = "default" }) {
  const styles = {
    default: { background: "var(--bg-secondary)", color: "var(--text-secondary)" },
    blue: { background: "var(--accent-light)", color: "var(--accent)" },
    green: { background: "var(--success-light)", color: "var(--success)" },
    yellow: { background: "var(--warning-light)", color: "var(--warning)" },
  };

  return (
    <span style={{
      ...styles[variant],
      fontSize: "12px",
      fontWeight: 500,
      padding: "3px 9px",
      borderRadius: "20px",
      display: "inline-block",
      whiteSpace: "nowrap"
    }}>
      {children}
    </span>
  );
}