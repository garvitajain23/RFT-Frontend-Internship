import { useFavorites } from '../context/FavoritesContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>❤️ My Favorites</h1>
      {favorites.length === 0
        ? <p style={styles.empty}>No favorites yet. Go search some movies!</p>
        : (
          <div style={styles.grid}>
            {favorites.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )
      }
    </div>
  )
}

const styles = {
  page: { padding: '24px', background: '#0f0f1a', minHeight: '100vh' },
  heading: { color: '#fff', textAlign: 'center', marginBottom: '20px' },
  empty: { color: '#aaa', textAlign: 'center', marginTop: '40px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
}