// Summary.jsx — shows stats about the shopping list
// This is a PURE DISPLAY component — it takes data and just shows it.
// It has NO state of its own and doesn't change anything.
// This is called a "presentational" or "dumb" component.

function Summary({ items }) {
  // Calculate stats from the items array
  // These are regular JS variables, NOT state — they don't need to persist
  // React recalculates them every time this component re-renders

  const totalItems = items.length;
  // Reduce items to total units. e.g. [Milk×2, Eggs×12] → 14
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
  // How many items are marked as bought
  const boughtCount = items.filter((item) => item.bought).length;
  // Remaining items
  const remainingCount = totalItems - boughtCount;

  // Don't show the summary bar if there are no items
  if (totalItems === 0) return null; // returning null renders NOTHING

  return (
    <div className="summary">
      <div className="summary-stat">
        <span className="stat-number">{totalItems}</span>
        <span className="stat-label">items</span>
      </div>
      <div className="summary-divider" />
      <div className="summary-stat">
        <span className="stat-number">{totalUnits}</span>
        <span className="stat-label">units</span>
      </div>
      <div className="summary-divider" />
      <div className="summary-stat">
        <span className="stat-number">{remainingCount}</span>
        <span className="stat-label">remaining</span>
      </div>
      <div className="summary-divider" />
      <div className="summary-stat">
        <span className="stat-number bought-count">{boughtCount}</span>
        <span className="stat-label">in cart</span>
      </div>
    </div>
  );
}

export default Summary;
