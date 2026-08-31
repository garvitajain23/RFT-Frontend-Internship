import { useParams, Link } from 'react-router-dom'

function PostDetail({ posts }) {  
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found!</h2>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <span className="card-category">{post.category}</span>
      <h1 className="detail-title">{post.title}</h1>
      <div className="detail-meta">
        <span>✍️ {post.author}</span>
        <span>📅 {post.date}</span>
      </div>
      <p className="detail-content">{post.content}</p>
    </div>
  )
}

export default PostDetail