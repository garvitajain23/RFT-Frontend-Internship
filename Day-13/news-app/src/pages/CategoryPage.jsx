import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import Pagination from '../components/Pagination'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const PAGE_SIZE = 6

// GNews uses different topic names
const categoryMap = {
  business: 'business',
  technology: 'technology',
  sports: 'sports',
  health: 'health',
  entertainment: 'entertainment'
}

function CategoryPage() {
  const { name } = useParams()
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setPage(1)
  }, [name])

  useEffect(() => {
    setLoading(true)
    setError('')
    const topic = categoryMap[name] || 'general'
    fetch(
     `/gnews/api/v4/top-headlines?topic=${topic}&country=in&lang=en&max=${PAGE_SIZE}&page=${page}&token=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles)
          setTotalArticles(data.totalArticles)
        } else {
          setError('Failed to load news.')
        }
        setLoading(false)
      })
      .catch(() => {
        setError('Network error. Try again.')
        setLoading(false)
      })
  }, [name, page])

  const totalPages = Math.min(Math.ceil(totalArticles / PAGE_SIZE), 10)

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        📂 {name.charAt(0).toUpperCase() + name.slice(1)} News
      </h2>
      {loading && <p style={styles.msg}>Loading...</p>}
      {error && <p style={{ ...styles.msg, color: '#e94560' }}>{error}</p>}
      <div style={styles.grid}>
        {articles.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
      {!loading && totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', background: '#0f3460', padding: '24px' },
  heading: { color: '#fff', textAlign: 'center', marginBottom: '24px', fontSize: '26px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
  msg: { textAlign: 'center', color: '#aaa', fontSize: '16px' }
}

export default CategoryPage