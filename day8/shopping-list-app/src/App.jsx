// App.jsx — The ROOT component. This is the "manager" of all other components.
// Every React app has ONE root component. All other components live inside it.

// useState is a React "hook" — a special function that lets a component
// REMEMBER information between re-renders (like a component's own notebook)
import { useState } from "react";

// We import our smaller components (like hiring specialists for each job)
import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
import Summary from "./components/Summary";

// Import the CSS file that styles ONLY this component
import "./App.css";

// This is the App COMPONENT.
// A component is just a JavaScript FUNCTION that returns HTML-like code (JSX).
// When React sees <App />, it calls this function and shows what it returns.
function App() {
  // ====== STATE ======
  // State = the "memory" of your component.
  // When state changes, React automatically re-draws (re-renders) the component.
  //
  // useState([]) creates a state variable:
  //   - `items`     → the CURRENT VALUE (starts as empty array [])
  //   - `setItems`  → the FUNCTION to UPDATE the value
  //
  // RULE: NEVER change state directly (items.push(...) is WRONG!)
  //       ALWAYS use the setter function (setItems(...) is CORRECT!)
  const [items, setItems] = useState([]);

  // ====== EVENT HANDLERS ======
  // These are functions that run when something happens (button click, etc.)

  // addItem: called when user submits the form
  // It receives `itemData` — an object like { name: "Milk", quantity: 2 }
  const addItem = (itemData) => {
    // We create a NEW item object.
    // ...itemData means "spread/copy all properties from itemData"
    // So if itemData = { name: "Milk", quantity: 2 }
    // the new item = { name: "Milk", quantity: 2, id: 123456, bought: false }
    const newItem = {
      ...itemData,
      // Date.now() gives milliseconds since 1970 — a unique number for ID
      // We use this as a unique identifier for each item
      id: Date.now(),
      // Every new item starts as NOT bought
      bought: false,
    };

    // setItems updates the state.
    // [...items, newItem] means "make a NEW array with all OLD items PLUS the new one"
    // We NEVER mutate (change) the original array — React needs a NEW array to detect the change
    setItems([...items, newItem]);
  };

  // removeItem: called when user clicks the trash/delete button on an item
  // `id` is the unique number of the item to remove
  const removeItem = (id) => {
    // .filter() creates a NEW array keeping only items where the condition is TRUE
    // So we keep every item EXCEPT the one with matching id
    setItems(items.filter((item) => item.id !== id));
  };

  // toggleBought: called when user clicks the checkmark on an item
  // It flips the `bought` property: false → true, true → false
  const toggleBought = (id) => {
    // .map() creates a NEW array by transforming each item
    setItems(
      items.map((item) =>
        // If this item's id matches the one clicked...
        item.id === id
          ? // ...return a NEW object with bought flipped (! = NOT operator)
            // { ...item } copies all properties, then we OVERRIDE `bought`
            { ...item, bought: !item.bought }
          : // ...otherwise return the item unchanged
            item,
      ),
    );
  };

  // ====== JSX (what the component renders on screen) ======
  // JSX looks like HTML but it's actually JavaScript.
  // Rules:
  //   - className instead of class (class is a reserved word in JS)
  //   - All tags must be closed: <br /> not <br>
  //   - Must return ONE root element (we wrap everything in <div className="app">)
  //   - JavaScript expressions go inside { curly braces }
  return (
    <div className="app">
      {/* The header section */}
      <header className="app-header">
        <h1>🛒 Shopping List</h1>
        <p>Your smart grocery companion</p>
      </header>

      {/* 
        We pass DATA to child components using "props" (properties).
        Props are like arguments you pass to a function.
        
        onAddItem={addItem} means:
          "Give the AddItemForm component access to our addItem function"
          Now AddItemForm can call it when the user submits the form.
      */}
      <AddItemForm onAddItem={addItem} />

      {/* 
        Summary shows stats: total items, how many are bought, etc.
        We pass the entire items array so Summary can calculate stats
      */}
      <Summary items={items} />

      {/* 
        ShoppingList renders the actual list of items.
        We pass:
          items={items}          → the array of items to show
          onRemove={removeItem}  → function to call when delete is clicked
          onToggle={toggleBought}→ function to call when checkmark is clicked
      */}
      <ShoppingList
        items={items}
        onRemove={removeItem}
        onToggle={toggleBought}
      />
    </div>
  );
}

// EVERY component file must export the component
// This is how other files can import and use it
export default App;
