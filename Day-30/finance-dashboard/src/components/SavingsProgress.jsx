function SavingsProgress({ transactions }) {
  const income = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const saved = income - expenses;
  const savingsRate = income > 0 ? Math.round((saved / income) * 100) : 0;

  return (
    <div className="card">
      <h2 className="section-title">Savings This Month</h2>
      <p className="savings-amount">₹{saved.toLocaleString("en-IN")}</p>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${Math.min(savingsRate, 100)}%` }} />
      </div>
      <p className="savings-rate">{savingsRate}% of income saved</p>
    </div>
  );
}

export default SavingsProgress;