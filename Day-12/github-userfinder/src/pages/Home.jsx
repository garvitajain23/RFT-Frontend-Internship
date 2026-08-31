import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (username.trim()) {
      navigate(`/user/${username.trim()}`)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔍 GitHub UserFinder</h1>
        <p style={styles.subtitle}>Search any GitHub user instantly</p>

        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          style={styles.input}
        />

        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '480px',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#58a6ff',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#8b949e',
    marginBottom: '28px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #30363d',
    background: '#0d1117',
    color: '#c9d1d9',
    fontSize: '16px',
    marginBottom: '14px',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    background: '#238636',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
  },
}

export default Home