// Header.jsx — A PRESENTATIONAL component (also called a "dumb" component).
// It has NO state of its own. It just RECEIVES data via props and DISPLAYS it.
// Props = properties = data passed from parent (App.jsx) to child (Header.jsx)
// Think of props like ARGUMENTS to a function.

function Header({ total, completed, pending }) {
  // { total, completed, pending } is called DESTRUCTURING.
  // Instead of writing props.total, props.completed — we unpack them directly.

  return (
    <div className="header">
      <div className="header-title">
        <span className="header-icon">✅</span>
        <h1>My Task Manager</h1>
        <p className="header-subtitle">Stay focused. Stay productive.</p>
      </div>

      {/* Stats Bar — shows live counts that update automatically when tasks change */}
      <div className="stats-bar">
        <div className="stat-card stat-total">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-card stat-pending">
          <span className="stat-number">{pending}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-card stat-completed">
          <span className="stat-number">{completed}</span>
          <span className="stat-label">Done</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
