import { useState } from 'react'

const allUsers = [
  { id: 1, name: 'Arjun Sharma', email: 'arjun@gmail.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Priya Mehta', email: 'priya@gmail.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Rahul Verma', email: 'rahul@gmail.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Sneha Kapoor', email: 'sneha@gmail.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Karan Singh', email: 'karan@gmail.com', role: 'Viewer', status: 'inactive' },
]

function UserTable() {
  const [search, setSearch] = useState('')

  const filtered = allUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="table-section">
      <div className="table-header">
        <h2>Recent Users</h2>
        <input
          className="search-input"
          placeholder="Search by name or email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? filtered.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`badge ${user.status}`}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', color: '#aaa', padding: '20px' }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable