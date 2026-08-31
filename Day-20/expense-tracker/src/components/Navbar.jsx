import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>💰 Expense Tracker</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/history" style={styles.link}>History</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '12px 30px', backgroundColor: '#4f46e5', color: 'white'
  },
  logo: { margin: 0, fontSize: '20px' },
  links: { display: 'flex', gap: '20px' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }
}

export default Navbar