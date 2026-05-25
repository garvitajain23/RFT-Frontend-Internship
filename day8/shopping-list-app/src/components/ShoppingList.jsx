// ShoppingList.jsx — renders the full list of items, or an empty state message.
// It's a "container" component — its job is to MANAGE the list,
// using ShoppingItem to render each individual row.

import ShoppingItem from "./ShoppingItem";

// Props:
//   items    → array of all item objects
//   onRemove → delete function (gets passed down to ShoppingItem)
//   onToggle → toggle function (gets passed down to ShoppingItem)
function ShoppingList({ items, onRemove, onToggle }) {
  // CONDITIONAL RENDERING based on whether the list is empty
  // If items.length is 0 (no items), show a friendly empty state
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>🛍️</p>
        <p>Your list is empty!</p>
        <p>Add some items above to get started.</p>
      </div>
    );
  }

  // If we have items, render the list
  return (
    <div className="shopping-list-container">
      {/* 
        Separate bought vs not-bought items for better UX.
        .filter() creates a NEW array based on a condition.
      */}
      {/* Items still to buy */}
      {items.filter((item) => !item.bought).length > 0 && (
        <div>
          <p className="list-section-label">To buy</p>
          <ul className="shopping-list">
            {/*
              .map() loops over the array and renders a ShoppingItem for each.
              
              KEY RULE: when rendering a LIST of components, each needs a unique `key` prop.
              React uses `key` to track which item is which when the list changes.
              We use item.id (our unique Date.now() number) as the key.
              NEVER use the array index as key — it causes bugs when items are removed!
            */}
            {items
              .filter((item) => !item.bought)
              .map((item) => (
                <ShoppingItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              ))}
          </ul>
        </div>
      )}

      {/* Items already bought */}
      {items.filter((item) => item.bought).length > 0 && (
        <div>
          <p className="list-section-label bought-label">✓ In cart</p>
          <ul className="shopping-list">
            {items
              .filter((item) => item.bought)
              .map((item) => (
                <ShoppingItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
