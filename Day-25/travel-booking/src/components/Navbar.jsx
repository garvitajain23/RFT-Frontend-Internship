import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Wander<span>ly</span>
        </Link>

        <nav className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#testimonials">Reviews</a>
          <a href="#booking">Book Now</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;