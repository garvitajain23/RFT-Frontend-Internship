import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import { useFavorites } from '../context/FavoritesContext'

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(r => r.json())
      .then(data => { setMovie(data); setLoading(false) })
  }, [id])

  if (loading) return <Loader />
  if (!movie) return <p style={{ color: '#fff', textAlign: 'center' }}>Not found.</p>

  const fav = isFavorite(movie.imdbID)
  const poster = movie.Poster !== 'N/A' ? movie.Poster : null

  return (
    <div style={styles.page}>
      <Link to="/" style={styles.back}>← Back</Link>
      <div style={styles.container}>
        {poster && <img src={poster} alt={movie.Title} style={styles.poster} />}
        <div style={styles.info}>
          <h1 style={styles.title}>{movie.Title}</h1>
          <p style={styles.meta}>{movie.Year} • {movie.Genre} • {movie.Runtime}</p>
          <p style={styles.meta}>⭐ {movie.imdbRating} / 10</p>
          <p style={styles.plot}>{movie.Plot}</p>
          <p style={styles.meta}><b>Director:</b> {movie.Director}</p>
          <p style={styles.meta}><b>Cast:</b> {movie.Actors}</p>
          <button
            onClick={() => fav ? removeFavorite(movie.imdbID) : addFavorite(movie)}
            style={{ ...styles.btn, background: fav ? '#e94560' : '#16213e' }}
          >
            {fav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '24px', background: '#0f0f1a', minHeight: '100vh' },
  back: { color: '#e94560', textDecoration: 'none', fontSize: '1rem' },
  container: { display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' },
  poster: { width: '280px', borderRadius: '10px', objectFit: 'cover' },
  info: { flex: 1, minWidth: '250px' },
  title: { color: '#fff', fontSize: '1.8rem', marginBottom: '10px' },
  meta: { color: '#aaa', marginBottom: '8px' },
  plot: { color: '#ccc', lineHeight: 1.6, margin: '16px 0' },
  btn: {
    marginTop: '12px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.95rem',
  }
}