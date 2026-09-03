function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  const cards = [
    { label: "Total Income", value: income, color: "#22c55e", prefix: "₹" },
    { label: "Total Expenses", value: expenses, color: "#ef4444", prefix: "₹" },
    { label: "Net Balance", value: balance, color: "#6366f1", prefix: "₹" },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card) => (
        <div key={card.label} className="card">
          <p className="card-label">{card.label}</p>
          <p className="card-value" style={{ color: card.color }}>
            {card.prefix}{card.value.toLocaleString("en-IN")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;