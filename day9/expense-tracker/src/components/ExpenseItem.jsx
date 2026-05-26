// ExpenseItem.jsx — A single expense row (card)
//
// 🧠 CONCEPT: "Dumb" / Presentational Component
// This component ONLY displays data — it has NO state of its own.
// It receives everything via props and just renders it.
// This is a best practice in React — keep components small and focused.
//
// Props:
// expense = a single expense object { id, title, amount, category, date }
// onDelete = the delete function (originally from App.jsx, passed through ExpenseList)
// onEdit = the edit function

// A map of category names to emoji icons — for visual flair
const CATEGORY_ICONS = {
  Food: "🍔",
  Transport: "🚌",
  Shopping: "🛍️",
  Health: "💊",
  Entertainment: "🎬",
  Other: "📦",
};

// A map of category to color class names — for color-coded badges
const CATEGORY_COLORS = {
  Food: "badge-food",
  Transport: "badge-transport",
  Shopping: "badge-shopping",
  Health: "badge-health",
  Entertainment: "badge-entertainment",
  Other: "badge-other",
};

function ExpenseItem({ expense, onDelete, onEdit }) {
  const { id, title, amount, category, date } = expense; // Destructure for cleaner code

  // Format the date from "2026-05-20" to "May 20, 2026" for display
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(
    "en-IN",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  // Format amount as Indian Rupees with commas (e.g., ₹1,500)
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="expense-item">
      {/* LEFT: icon + info */}
      <div className="expense-icon">
        {/* Look up the emoji for this category */}
        {CATEGORY_ICONS[category] || "💰"}
      </div>

      <div className="expense-info">
        <span className="expense-title">{title}</span>
        <div className="expense-meta">
          {/* Category badge with dynamic color class */}
          <span className={`badge ${CATEGORY_COLORS[category]}`}>
            {category}
          </span>
          <span className="expense-date">📅 {formattedDate}</span>
        </div>
      </div>

      {/* RIGHT: amount + action buttons */}
      <div className="expense-right">
        <span className="expense-amount">{formattedAmount}</span>

        <div className="expense-actions">
          {/* EDIT BUTTON: calls onEdit with this specific expense object */}
          <button
            className="btn-icon btn-edit"
            onClick={() => onEdit(expense)} // Arrow function so we can pass the argument
            title="Edit expense"
            aria-label="Edit expense"
          >
            ✏️
          </button>

          {/* DELETE BUTTON: calls onDelete with this expense's ID */}
          <button
            className="btn-icon btn-delete"
            onClick={() => onDelete(id)}
            title="Delete expense"
            aria-label="Delete expense"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
