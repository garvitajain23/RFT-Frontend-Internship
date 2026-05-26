// Summary.jsx — Shows the total spending and a quick stat bar
//
// Props:
// total = the sum of all visible expenses (calculated in App.jsx)
// count = how many expenses are currently shown
// filter = which category is currently active

function Summary({ total, count, filter }) {
  // Format as Indian Rupees
  const formattedTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <div className="summary-card">
      <div className="summary-label">
        {/* Show context-aware label based on which filter is active */}
        {filter === "All" ? "Total Spending" : `Total: ${filter}`}
      </div>
      <div className="summary-amount">{formattedTotal}</div>
      <div className="summary-count">
        {count} expense{count !== 1 ? "s" : ""}{" "}
        {/* "1 expense" vs "3 expenses" */}
      </div>
    </div>
  );
}

export default Summary;
