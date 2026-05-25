// FilterBar.jsx — Renders the 3 filter buttons: All / Pending / Completed
//
// CONCEPT: CONDITIONAL RENDERING with className
// We add the "active" CSS class to whichever button matches the current filter.
// This highlights the active button — pure UI logic, no new concepts needed!

// filters is an array of objects we'll loop over to create buttons
const FILTERS = [
  { label: "📋 All", value: "all" },
  { label: "⏳ Pending", value: "pending" },
  { label: "✅ Completed", value: "completed" },
];

function FilterBar({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      <span className="filter-label">Show:</span>
      <div className="filter-buttons">
        {/* Array.map() loops over FILTERS and creates a button for each one */}
        {FILTERS.map(({ label, value }) => (
          <button
            key={value} // React needs a unique "key" when rendering lists
            className={`filter-btn ${currentFilter === value ? "active" : ""}`}
            // ↑ Ternary operator: condition ? "if true" : "if false"
            // If this button's value matches currentFilter → add "active" class
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
