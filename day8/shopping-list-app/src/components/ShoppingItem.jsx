// ShoppingItem.jsx — renders ONE single item in the list.
// This is the SMALLEST unit — one row with a name, quantity, toggle, and delete.

// Props this component receives:
//   item   → the item object { id, name, quantity, bought }
//   onRemove → function to call when delete button is clicked
//   onToggle → function to call when checkmark is clicked
function ShoppingItem({ item, onRemove, onToggle }) {
  return (
    // If item.bought is true, add the class "bought" to apply strikethrough styling
    // Template literal with ternary: `base-class ${condition ? 'extra-class' : ''}`
    <li className={`shopping-item ${item.bought ? "bought" : ""}`}>
      {/* LEFT SIDE: the checkmark button to toggle bought status */}
      <button
        className={`check-btn ${item.bought ? "checked" : ""}`}
        onClick={() => onToggle(item.id)}
        // () => onToggle(item.id) is an arrow function.
        // We WRAP onToggle in an arrow function so it only runs on click,
        // not immediately when the page loads.
        // We pass item.id so the parent knows WHICH item to toggle.
        aria-label={item.bought ? "Mark as not bought" : "Mark as bought"}
      >
        {/* Show ✓ if bought, empty circle if not */}
        {item.bought ? "✓" : "○"}
      </button>

      {/* MIDDLE: item name and quantity */}
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        {/* We only show the quantity badge if quantity > 1
            This is CONDITIONAL RENDERING: `condition && <JSX>` 
            If condition is false, nothing is rendered */}
        {item.quantity > 1 && (
          <span className="item-quantity">×{item.quantity}</span>
        )}
      </div>

      {/* RIGHT SIDE: delete button */}
      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
        // Same pattern: arrow function wrapping the parent's function
        aria-label={`Remove ${item.name}`}
      >
        🗑️
      </button>
    </li>
  );
}

export default ShoppingItem;
