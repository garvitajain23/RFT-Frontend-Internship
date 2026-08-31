import UserCard from './UserCard'

function UserList({ list }) {
  return (
    <div className="saved-section">
      <h2>Saved Users ({list.length})</h2>
      <div className="user-grid">
        {list.map((u, i) => (
          <UserCard key={i} user={u} />
        ))}
      </div>
    </div>
  )
}

export default UserList