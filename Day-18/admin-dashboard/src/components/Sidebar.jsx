import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', icon: '🏠', label: 'Dashboard' },
  { to: '/users', icon: '👥', label: 'Users' },
  { to: '/settings', icon: '⚙️', label: 'Settings' },
]

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">⚡ AdminPanel</div>
      <nav>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar