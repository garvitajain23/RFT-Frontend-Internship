import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import { posts as initialPosts } from './data/posts'

function App() {
  const [posts, setPosts] = useState(initialPosts)

  const addPost = (newPost) => {
    setPosts(prev => [newPost, ...prev])
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App