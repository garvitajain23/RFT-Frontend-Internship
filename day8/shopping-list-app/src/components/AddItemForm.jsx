// AddItemForm.jsx — A component that renders the form for adding new items.
// This is a "child" component — it receives instructions (props) from App.jsx

// useState — we need state here too, to track what the user is typing
import { useState } from "react";

// Props are the "inputs" to this component.
// `onAddItem` is a FUNCTION passed from App.jsx
// When called, it sends the new item data UP to App.jsx (this is called "lifting state up")
function AddItemForm({ onAddItem }) {
  // `itemName` stores what the user is currently typing in the name input
  // Starts as empty string ''
  const [itemName, setItemName] = useState("");

  // `quantity` stores the quantity number the user typed
  // Starts at 1 (minimum 1 item)
  const [quantity, setQuantity] = useState(1);

  // This runs every time the form is submitted (user clicks "Add Item" button)
  const handleSubmit = (e) => {
    // e.preventDefault() stops the browser's DEFAULT form behavior
    // Default behavior = refresh the page. We DON'T want that in React!
    e.preventDefault();

    // .trim() removes leading/trailing spaces
    // If the user typed only spaces, we treat it as empty and stop
    if (!itemName.trim()) return; // early return = do nothing

    // Call the function that App.jsx gave us.
    // We pass UP the data App needs to create the item.
    onAddItem({
      name: itemName.trim(), // cleaned item name
      quantity: Number(quantity), // convert string → number (inputs always give strings)
    });

    // After adding, RESET the form to empty/default
    setItemName("");
    setQuantity(1);
  };

  return (
    // `onSubmit` runs when the user presses Enter or clicks the submit button
    <form className="add-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        {/* 
          CONTROLLED INPUT — the key React pattern for forms.
          
          value={itemName}         → the input always shows the state value
          onChange={...}           → every keystroke updates the state
          
          This creates a "controlled" input: React is in charge of the value,
          not the browser. This is the CORRECT way to handle inputs in React.
        */}
        <input
          type="text"
          className="item-input"
          placeholder="Add an item... (e.g. Milk)"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          // e.target.value is the current text inside the input box
        />

        {/* Quantity input — same controlled pattern */}
        <input
          type="number"
          className="quantity-input"
          min="1" /* browser won't allow less than 1 */
          max="99" /* browser won't allow more than 99 */
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      {/* Submit button — inside a <form>, type="submit" triggers onSubmit */}
      <button type="submit" className="add-btn">
        + Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
