import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const rooms = [
  { id: 'general',   label: '# general',    desc: 'All-purpose chat',         count: 4 },
  { id: 'random',    label: '# random',     desc: 'Anything goes here',       count: 2 },
  { id: 'tech-talk', label: '# tech-talk',  desc: 'Code, tools, nerdy stuff', count: 6 },
]

export default function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [err, setErr]   = useState(false)

  function enter(roomId) {
    if (!name.trim()) { setErr(true); return }
    sessionStorage.setItem('chatUser', name.trim())
    navigate(`/chat/${roomId}`)
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.logo}>💬</div>
        <h1 style={styles.title}>ChatterBox</h1>
        <p style={styles.sub}>Pick a room. Jump in. No fluff.</p>

        <div style={styles.field}>
          <input
            style={{ ...styles.input, ...(err ? styles.inputErr : {}) }}
            placeholder="Your name..."
            value={name}
            onChange={e => { setName(e.target.value); setErr(false) }}
            onKeyDown={e => e.key === 'Enter' && enter(rooms[0].id)}
            maxLength={20}
          />
          {err && <span style={styles.errMsg}>Enter a name first ↑</span>}
        </div>

        <div style={styles.rooms}>
          {rooms.map(r => (
            <button key={r.id} style={styles.room} onClick={() => enter(r.id)}>
              <div style={styles.roomLeft}>
                <span style={styles.roomLabel}>{r.label}</span>
                <span style={styles.roomDesc}>{r.desc}</span>
              </div>
              <span style={styles.badge}>{r.count} online</span>
            </button>
          ))}
        </div>
      </div>

      {/* bg orbs */}
      <div style={{ ...styles.orb, top: '10%', left: '15%',  background: '#7c6af730' }} />
      <div style={{ ...styles.orb, bottom: '10%', right: '10%', background: '#f76a8a20', width: 320, height: 320 }} />
    </div>
  )
}

const styles = {
  wrap: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  orb: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none',
  },
  card: {
    background: '#17171f',
    border: '1px solid #2a2a3d',
    borderRadius: 24,
    padding: '48px 40px',
    width: '100%',
    maxWidth: 440,
    animation: 'fadeUp .5s ease both',
    position: 'relative',
    zIndex: 1,
  },
  logo: { fontSize: 40, textAlign: 'center', marginBottom: 12 },
  title: {
    fontFamily: 'Syne, sans-serif',
    fontSize: 32,
    fontWeight: 800,
    textAlign: 'center',
    color: '#e8e8f0',
    letterSpacing: '-1px',
  },
  sub: {
    color: '#6b6b80',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 28,
  },
  field: { marginBottom: 20 },
  input: {
    width: '100%',
    padding: '12px 16px',
    background: '#0e0e12',
    border: '1.5px solid #2a2a3d',
    borderRadius: 12,
    color: '#e8e8f0',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color .2s',
  },
  inputErr: { borderColor: '#f76a8a' },
  errMsg: { color: '#f76a8a', fontSize: 12, marginTop: 4, display: 'block' },
  rooms: { display: 'flex', flexDirection: 'column', gap: 10 },
  room: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#1f1f2e',
    border: '1.5px solid #2a2a3d',
    borderRadius: 14,
    padding: '14px 18px',
    cursor: 'pointer',
    transition: 'border-color .2s, transform .15s',
    color: 'inherit',
    textAlign: 'left',
  },
  roomLeft: { display: 'flex', flexDirection: 'column', gap: 2 },
  roomLabel: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: 15,
    color: '#7c6af7',
  },
  roomDesc: { fontSize: 12, color: '#6b6b80' },
  badge: {
    fontSize: 11,
    background: '#7c6af720',
    color: '#7c6af7',
    padding: '4px 10px',
    borderRadius: 20,
    fontWeight: 500,
  },
}