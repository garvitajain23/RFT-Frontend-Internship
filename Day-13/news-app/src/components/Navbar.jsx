import { Link, useNavigate } from 'react-router-dom'

const categories = ['business', 'technology', 'sports', 'health', 'entertainment']

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>📰 NewsApp</Link>
      <div style={styles.links}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => navigate(`/category/${cat}`)}
            style={styles.btn}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    background: '#1a1a2e',
    flexWrap: 'wrap',
    gap: '10px'
  },
  logo: {
    color: '#e94560',
    fontSize: '22px',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  links: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  btn: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid #e94560',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px'
  }
}

export default Navbar