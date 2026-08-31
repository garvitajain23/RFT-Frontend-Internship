import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">📝 MyBlog</Link>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          + Create Post
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar