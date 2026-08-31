import { useState } from 'react'
import BlogCard from '../components/BlogCard'
import { categories } from '../data/posts'

function Home({ posts }) {   // 👈 receive posts as prop
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="home">
      <h1 className="home-title">Latest Blog Posts</h1>

      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'filter-active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {filtered.length > 0
          ? filtered.map(post => <BlogCard key={post.id} post={post} />)
          : <p className="no-results">No posts found. Try a different search!</p>
        }
      </div>
    </div>
  )
}

export default Home