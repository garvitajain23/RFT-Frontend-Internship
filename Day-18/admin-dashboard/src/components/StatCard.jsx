function StatCard({ icon, label, value, change }) {
  return (
    <div className="stat-card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      <div className="change">{change}</div>
    </div>
  )
}

export default StatCard