// FilterBar.jsx — Row of buttons to filter expenses by category
//
// 🧠 CONCEPT: Lifting State Up
// The filter value lives in App.jsx (the parent), not here.
// This component just DISPLAYS the buttons and TELLS the parent when one is clicked.
// The parent then updates state, which causes App.jsx to re-render with filtered data.
// This is called "lifting state up" — keep shared state at the lowest common ancestor.
//
// Props:
// categories = array of category strings
// activeFilter = currently selected category (from App.jsx state)
// onFilterChange = function to call when a button is clicked (updates App.jsx state)

function FilterBar({ categories, activeFilter, onFilterChange }) {
  // All filter options = "All" + every category
  const filters = ["All", ...categories];

  return (
    <div className="filter-bar">
      <span className="filter-label">Filter:</span>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            // Add "active" class if this filter is the currently selected one
            // Template literals (backticks) let us build dynamic class names
            className={`filter-btn ${activeFilter === filter ? "filter-btn-active" : ""}`}
            onClick={() => onFilterChange(filter)} // Tell parent to update the filter
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
