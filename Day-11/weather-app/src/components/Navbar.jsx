import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: 'rgba(17,24,39,0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{
          fontFamily: 'Rajdhani',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--accent)',
          letterSpacing: '2px',
        }}>
          ⛅ WEATHERAPP
        </h1>
      </Link>
      <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
        Day 11 — GOW AI Academy
      </span>
    </nav>
  )
}