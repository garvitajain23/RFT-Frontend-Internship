import { useState } from 'react'

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: '0.75rem',
      width: '100%',
      maxWidth: '500px',
    }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        disabled={loading}
        style={{
          flex: 1,
          padding: '0.85rem 1.25rem',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          color: 'var(--text)',
          fontSize: '1rem',
          fontFamily: 'Inter',
          outline: 'none',
          transition: 'border 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
      <button
        type="submit"
        disabled={loading || !city.trim()}
        style={{
          padding: '0.85rem 1.5rem',
          background: loading ? 'var(--muted)' : 'var(--accent)',
          color: '#0a0f1e',
          border: 'none',
          borderRadius: '10px',
          fontFamily: 'Rajdhani',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '1px',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s, transform 0.1s',
        }}
        onMouseDown={e => { if (!loading) e.target.style.transform = 'scale(0.97)' }}
        onMouseUp={e => e.target.style.transform = 'scale(1)'}
      >
        SEARCH
      </button>
    </form>
  )
}