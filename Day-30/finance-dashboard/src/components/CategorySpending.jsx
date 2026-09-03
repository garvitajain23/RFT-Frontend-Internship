import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#f59e0b", "#ef4444", "#22c55e", "#3b82f6", "#ec4899"];

function CategorySpending({ transactions }) {
  const categoryMap = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    });

  const data = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

  return (
    <div className="card">
      <h2 className="section-title">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={230}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategorySpending;