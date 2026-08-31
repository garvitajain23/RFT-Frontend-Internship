import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <span className="card-category">{post.category}</span>
      <h2 className="card-title">{post.title}</h2>
      <p className="card-summary">{post.summary}</p>
      <div className="card-footer">
        <span className="card-author">✍️ {post.author}</span>
        <span className="card-date">{post.date}</span>
      </div>
      <Link to={`/post/${post.id}`} className="card-btn">Read More →</Link>
    </div>
  )
}

export default BlogCard