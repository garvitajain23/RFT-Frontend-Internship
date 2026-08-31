import { useState } from 'react'
import UserCard from '../components/UserCard'
import UserList from '../components/UserList'

function Home() {
  const [user, setUser] = useState(null)
  const [savedList, setSavedList] = useState([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(1)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${count}`)
      const data = await res.json()
      setUser(data.results)
    } catch (err) {
      console.error('Error fetching user:', err)
    }
    setLoading(false)
  }

  const saveList = () => {
    if (user) {
      setSavedList(prev => [...prev, ...user])
    }
  }

  return (
    <div className="container">
      <h1>Random User Generator</h1>

      <div className="controls">
        <input
          type="number"
          min="1"
          max="10"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="How many users?"
        />
        <button onClick={fetchUser} disabled={loading}>
          {loading ? 'Loading...' : 'Generate User'}
        </button>
        {user && (
          <button onClick={saveList} className="save-btn">
            Save to List
          </button>
        )}
      </div>

      {/* Current generated users */}
      {user && (
        <div className="user-grid">
          {user.map((u, i) => (
            <UserCard key={i} user={u} />
          ))}
        </div>
      )}

      {/* Saved list */}
      {savedList.length > 0 && <UserList list={savedList} />}
    </div>
  )
}

export default Home