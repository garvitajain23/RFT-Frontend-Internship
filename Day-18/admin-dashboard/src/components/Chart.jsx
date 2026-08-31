import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Jan', users: 40 },
  { month: 'Feb', users: 75 },
  { month: 'Mar', users: 60 },
  { month: 'Apr', users: 110 },
  { month: 'May', users: 90 },
  { month: 'Jun', users: 140 },
]

function Chart() {
  return (
    <div className="chart-section">
      <h2>User Growth</h2>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#a78bfa"
            strokeWidth={2.5}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart