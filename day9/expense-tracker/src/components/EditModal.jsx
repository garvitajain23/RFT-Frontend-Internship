// EditModal.jsx — A modal popup to edit an existing expense
//
// 🧠 CONCEPT: Modal / Overlay Pattern
// A modal is a popup that appears on top of everything else.
// We pre-fill the form with the expense's existing data.
// The user edits and saves, or cancels.
//
// Props:
// expense = the expense object to edit (comes from App.jsx's editingExpense state)
// categories = array of category options
// onSave = function to call when user clicks "Save Changes"
// onClose = function to call when user cancels or clicks the backdrop

import { useState } from "react";

function EditModal({ expense, categories, onSave, onClose }) {
  // Initialize form state WITH the existing expense data
  // This is how we "pre-fill" the form — set initial state to the current values
  const [formData, setFormData] = useState({
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Title cannot be empty.");
      return;
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // Call parent's save function with the updated data
    // expense.id — we keep the original ID so the parent can find and replace it
    onSave({ ...formData, amount: Number(formData.amount), id: expense.id });
  };

  return (
    // BACKDROP: The dark overlay behind the modal
    // onClick={onClose} — clicking the dark area closes the modal
    <div className="modal-backdrop" onClick={onClose}>
      {/* MODAL CONTENT BOX
          e.stopPropagation() — CRITICAL: without this, clicking INSIDE the modal
          would bubble up and trigger the backdrop's onClick, closing it immediately! */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="section-title">✏️ Edit Expense</h2>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="expense-form">
          <div className="form-group">
            <label htmlFor="edit-title">Title</label>
            <input
              type="text"
              id="edit-title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-amount">Amount (₹)</label>
            <input
              type="number"
              id="edit-amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="1"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-category">Category</label>
            <select
              id="edit-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="edit-date">Date</label>
            <input
              type="date"
              id="edit-date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {error && <p className="error-msg">⚠️ {error}</p>}

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
