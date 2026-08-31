import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const fav = isFavorite(movie.imdbID)

  const poster = movie.Poster !== 'N/A'
    ? movie.Poster
    : 'https://via.placeholder.com/300x445?text=No+Poster'

  return (
    <div style={styles.card}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={poster} alt={movie.Title} style={styles.img} />
      </Link>
      <div style={styles.info}>
        <Link to={`/movie/${movie.imdbID}`} style={styles.title}>{movie.Title}</Link>
        <p style={styles.year}>{movie.Year}</p>
        <button
          onClick={() => fav ? removeFavorite(movie.imdbID) : addFavorite(movie)}
          style={{ ...styles.btn, background: fav ? '#e94560' : '#16213e' }}
        >
          {fav ? '❤️ Saved' : '🤍 Favorite'}
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: '#16213e',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '180px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    transition: 'transform 0.2s',
  },
  img: {
    width: '100%',
    height: '270px',
    objectFit: 'cover',
    display: 'block',
  },
  info: {
    padding: '10px',
  },
  title: {
    color: '#eee',
    fontSize: '0.85rem',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'block',
    marginBottom: '4px',
  },
  year: {
    color: '#aaa',
    fontSize: '0.8rem',
    margin: '0 0 8px',
  },
  btn: {
    width: '100%',
    padding: '6px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem',
  }
}