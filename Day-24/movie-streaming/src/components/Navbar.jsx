import { useState } from "react";
import { Search, Menu, X, Film } from "lucide-react";

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)",
      padding: "16px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Film size={22} color="var(--accent)" />
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 1, color: "var(--accent)" }}>
          StreamX
        </span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: 28, fontSize: 14 }} className="desktop-links">
        {["Home", "Movies", "Series", "My List"].map((link) => (
          <a key={link} href="#" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--text)"}
            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Search */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {searchOpen ? (
          <input
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            style={{
              background: "var(--surface)",
              border: "1px solid var(--surface2)",
              borderRadius: "var(--radius)",
              padding: "6px 12px",
              color: "var(--text)",
              fontSize: 14,
              outline: "none",
              width: 200,
            }}
          />
        ) : null}
        <button
          onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) setSearchQuery(""); }}
          style={{ background: "none", color: "var(--text-muted)", padding: 4 }}
        >
          {searchOpen ? <X size={20} /> : <Search size={20} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", color: "var(--text-muted)", padding: 4, display: "none" }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}