// ExpenseList.jsx — Displays the full list of expenses
//
// 🧠 CONCEPT: List Rendering
// In React, we use JavaScript's .map() to turn an array into JSX elements.
// Each element needs a unique "key" prop so React can track it efficiently.
//
// Props received from App.jsx:
// expenses = the (possibly filtered) array of expense objects to display
// onDelete = function to call when delete button is clicked
// onEdit = function to call when edit button is clicked

import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  // If there are no expenses to show, display a friendly empty state
  // This is called "conditional rendering" — show different UI based on data
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>🙅 No expenses found.</p>
        <p className="empty-hint">Add one using the form on the left!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2 className="section-title">📋 Expenses ({expenses.length})</h2>

      {/* Map over each expense and render an ExpenseItem component for it */}
      {/* key={expense.id} — unique key is REQUIRED for list rendering in React */}
      {/* We spread each prop individually to keep it readable */}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
