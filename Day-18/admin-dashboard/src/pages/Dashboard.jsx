import StatCard from '../components/StatCard'
import UserTable from '../components/UserTable'
import Chart from '../components/Chart'

const stats = [
  { icon: '👤', label: 'Total Users', value: '1,284', change: '↑ 12% this month' },
  { icon: '📦', label: 'Orders', value: '340', change: '↑ 5% this week' },
  { icon: '💰', label: 'Revenue', value: '₹84,200', change: '↑ 8% this month' },
  { icon: '📉', label: 'Bounce Rate', value: '24%', change: '↓ 3% this week' },
]

function Dashboard() {
  return (
    <div>
      <div className="page-heading">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
      <Chart />
      <UserTable />
    </div>
  )
}

export default Dashboard