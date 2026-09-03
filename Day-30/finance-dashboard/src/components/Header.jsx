function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div>
        <h1>My Finance</h1>
        <p className="header-sub">September 2025</p>
      </div>
      <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;