import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/posts'

function CreatePost({ addPost }) {   
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    category: 'React',
    summary: '',
    content: '',
    author: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.title || !form.summary || !form.author) return

    const newPost = {
      ...form,
      id: Date.now(),           
      date: new Date().toISOString().split('T')[0],  
    }

    addPost(newPost)            
    setSubmitted(true)
    setTimeout(() => navigate('/'), 2000)
  }

  if (submitted) {
    return (
      <div className="success-msg">
        <h2>✅ Post Created Successfully!</h2>
        <p>Redirecting to home...</p>
      </div>
    )
  }

  return (
    <div className="create-post">
      <h1>Create a New Post</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter post title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.filter(c => c !== 'All').map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label>Summary</label>
        <textarea
          name="summary"
          placeholder="Short summary of the post"
          value={form.summary}
          onChange={handleChange}
          rows={3}
          required
        />

        <label>Content</label>
        <textarea
          name="content"
          placeholder="Full content of the post"
          value={form.content}
          onChange={handleChange}
          rows={6}
          required
        />

        <label>Author</label>
        <input
          name="author"
          type="text"
          placeholder="Your name"
          value={form.author}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Publish Post 🚀</button>
      </form>
    </div>
  )
}

export default CreatePost