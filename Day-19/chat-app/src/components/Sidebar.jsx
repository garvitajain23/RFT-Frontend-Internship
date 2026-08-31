import { useNavigate } from 'react-router-dom'

const rooms = ['general', 'random', 'tech-talk']

const BOTS = ['Alex', 'Priya', 'Sam', 'Zoe']

export default function Sidebar({ currentRoom, onlineUsers }) {
  const navigate = useNavigate()

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <span style={styles.logoText}>💬 ChatterBox</span>
      </div>

      <div style={styles.section}>
        <p style={styles.label}>ROOMS</p>
        {rooms.map(r => (
          <button
            key={r}
            style={{
              ...styles.roomBtn,
              background: r === currentRoom ? '#7c6af720' : 'transparent',
              color: r === currentRoom ? '#7c6af7' : '#6b6b80',
              borderLeft: r === currentRoom ? '3px solid #7c6af7' : '3px solid transparent',
            }}
            onClick={() => navigate(`/chat/${r}`)}
          >
            # {r}
          </button>
        ))}
      </div>

      <div style={styles.section}>
        <p style={styles.label}>ONLINE — {onlineUsers.length + 1}</p>
        <div style={styles.user}>
          <div style={{ ...styles.dot, background: '#4ade80' }} />
          <span style={{ color: '#e8e8f0', fontSize: 13 }}>
            {sessionStorage.getItem('chatUser') || 'You'} <em style={{ color: '#6b6b80', fontSize: 11 }}>(you)</em>
          </span>
        </div>
        {onlineUsers.map(u => (
          <div key={u.name} style={styles.user}>
            <div style={{ ...styles.dot, background: '#4ade80' }} />
            <span style={{ color: '#6b6b80', fontSize: 13 }}>{u.name}</span>
          </div>
        ))}
      </div>

      <button style={styles.leave} onClick={() => navigate('/')}>
        ← Leave
      </button>
    </div>
  )
}

const styles = {
  sidebar: {
    width: 220,
    background: '#17171f',
    borderRight: '1px solid #2a2a3d',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    flexShrink: 0,
  },
  logo: { padding: '0 18px 20px', borderBottom: '1px solid #2a2a3d' },
  logoText: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: 16,
    color: '#e8e8f0',
  },
  section: { padding: '18px 0', borderBottom: '1px solid #2a2a3d' },
  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.2,
    color: '#6b6b80',
    padding: '0 18px',
    marginBottom: 8,
  },
  roomBtn: {
    display: 'block',
    width: '100%',
    padding: '8px 18px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 500,
    transition: 'color .15s',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '5px 18px',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
    animation: 'pulse 2s infinite',
  },
  leave: {
    marginTop: 'auto',
    marginInline: 18,
    padding: '10px',
    background: 'transparent',
    border: '1.5px solid #2a2a3d',
    borderRadius: 12,
    color: '#6b6b80',
    fontSize: 13,
    cursor: 'pointer',
  },
}