import { useState, useEffect, useRef } from 'react'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY

export default function Home() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const debounceRef = useRef(null)

  useEffect(() => {
    if (!query.trim()) { setMovies([]); return }

    // Debouncing
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      fetchMovies(query)
    }, 500)

    return () => clearTimeout(debounceRef.current)
  }, [query])

  const fetchMovies = async (search) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      const data = await res.json()
      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setMovies([])
        setError(data.Error)
      }
    } catch {
      setError('Something went wrong.')
    }
    setLoading(false)
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Search Movies</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Type a movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <Loader />}
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.grid}>
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '24px', background: '#0f0f1a', minHeight: '100vh' },
  heading: { color: '#fff', textAlign: 'center', marginBottom: '20px' },
  input: {
    display: 'block',
    margin: '0 auto 30px',
    width: '100%',
    maxWidth: '500px',
    padding: '12px 18px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #e94560',
    background: '#16213e',
    color: '#fff',
    outline: 'none',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  error: { color: '#e94560', textAlign: 'center' },
}