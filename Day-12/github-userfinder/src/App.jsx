import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>
  )
}

export default App