// AddExpense.jsx — The form component for adding a new expense
//
// 🧠 CONCEPT: Controlled Components
// In React, form inputs are "controlled" — meaning React STATE controls their value.
// Every keystroke updates state, and state updates the input's displayed value.
// This gives React full control over the form data.
//
// 🧠 CONCEPT: Props Destructuring
// We receive props from the parent (App.jsx) and "destructure" them:
// { onAdd, categories } = props  ← pull out just what we need

import { useState } from "react";

// The component receives:
// onAdd = the function from App.jsx to call when form is submitted
// categories = the array of category options to show in the dropdown
function AddExpense({ onAdd, categories }) {
  // formData = a STATE OBJECT holding all the form field values together
  // Using a single object is a professional pattern — cleaner than separate states
  const [formData, setFormData] = useState({
    title: "", // Text input
    amount: "", // Number input
    category: categories[0], // Dropdown — default to first category
    date: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD format
  });

  // error = a string message to show if the user forgets to fill something
  const [error, setError] = useState("");

  // handleChange: called every time the user types or selects something
  // e = the "event" object — contains info about WHAT the user did
  // e.target.name = which input was changed (matches the `name` attribute on the input)
  // e.target.value = what value the user typed/selected
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure for cleaner code

    // setFormData: update ONLY the field that changed, keep everything else the same
    // { ...formData } = copy all existing fields
    // [name]: value = update the specific field (computed property name)
    setFormData({ ...formData, [name]: value });

    if (error) setError(""); // Clear error when user starts typing
  };

  // handleSubmit: called when the form is submitted (user clicks "Add Expense")
  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT: Prevents the browser from refreshing the page (default form behavior)

    // VALIDATION: Check that required fields are filled
    if (!formData.title.trim()) {
      setError("Please enter a title.");
      return; // Stop here — don't proceed
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // All good! Call the parent's function with our form data
    // Number(formData.amount) = convert the string "850" to the number 850
    onAdd({ ...formData, amount: Number(formData.amount) });

    // RESET the form back to empty/default values after successful submission
    setFormData({
      title: "",
      amount: "",
      category: categories[0],
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="add-expense-card">
      <h2 className="section-title">➕ Add New Expense</h2>

      {/* The form — onSubmit calls our handleSubmit function */}
      <form onSubmit={handleSubmit} className="expense-form">
        {/* TITLE INPUT */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          {/* CONTROLLED INPUT:
              value={formData.title} — React controls what's shown
              onChange={handleChange} — updates state on every keystroke
              name="title" — handleChange uses this to know WHICH field to update */}
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Grocery Shopping"
            className="form-input"
          />
        </div>

        {/* AMOUNT INPUT */}
        <div className="form-group">
          <label htmlFor="amount">Amount (₹)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="e.g. 500"
            min="1"
            className="form-input"
          />
        </div>

        {/* CATEGORY DROPDOWN */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
          >
            {/* LIST RENDERING: map() turns the array into a list of <option> elements
                key={cat} — React needs a unique "key" on each item in a list
                This helps React efficiently update only what changed */}
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* DATE INPUT */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* ERROR MESSAGE: only shown when error state is not empty */}
        {error && <p className="error-msg">⚠️ {error}</p>}

        {/* SUBMIT BUTTON */}
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
