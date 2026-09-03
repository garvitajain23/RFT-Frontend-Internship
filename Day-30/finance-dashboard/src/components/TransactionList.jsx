import { useState } from "react";

function TransactionList({ transactions }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) => {
    const matchType = filter === "all" || t.type === filter;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="card">
      <h2 className="section-title">Transactions</h2>

      <div className="txn-filters">
        <input
          className="txn-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-btns">
          {["all", "income", "expense"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="txn-list">
        {filtered.length === 0 && <p className="empty">No transactions found.</p>}
        {filtered.map((t) => (
          <div key={t.id} className="txn-item">
            <div>
              <p className="txn-title">{t.title}</p>
              <p className="txn-meta">{t.category} · {t.date}</p>
            </div>
            <p className={`txn-amount ${t.type}`}>
              {t.type === "income" ? "+" : "-"}₹{t.amount.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;