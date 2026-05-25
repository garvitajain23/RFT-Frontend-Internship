import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: isDark ? "#1a1a2e" : "#f0f4f8",
    color: isDark ? "#e0e0e0" : "#1a1a2e",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    fontFamily: "sans-serif",
  };

  const buttonStyle = {
    padding: "12px 28px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: isDark ? "#e0e0e0" : "#1a1a2e",
    color: isDark ? "#1a1a2e" : "#e0e0e0",
    marginTop: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <p>The background and text color change based on state!</p>
      <button style={buttonStyle} onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
