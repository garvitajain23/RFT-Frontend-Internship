import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>🎬 MovieSearch</Link>
      <Link to="/favorites" style={styles.link}>❤️ Favorites</Link>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 24px',
    background: '#1a1a2e',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  brand: {
    color: '#e94560',
    fontSize: '1.3rem',
    fontWeight: 700,
    textDecoration: 'none',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  }
}