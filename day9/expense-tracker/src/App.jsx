// App.jsx — This is the PARENT component (the boss of all other components)
//
// 🧠 KEY CONCEPT: STATE
// State = data that your app remembers and can change.
// When state changes → React automatically re-renders (updates) the UI.
// Think of state like a whiteboard: you can write on it, erase, rewrite.
//
// 🧠 KEY CONCEPT: PROPS
// Props = data you pass FROM a parent component TO a child component.
// Like passing a note from teacher to student.
// The child receives props and uses them to display things.

import { useState } from "react"; // useState = the hook that lets us create state
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import FilterBar from "./components/FilterBar";
import EditModal from "./components/EditModal";

// CATEGORIES: A constant array (never changes) — used across the whole app
// We define it here and pass it down as props to child components
export const CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Health",
  "Entertainment",
  "Other",
];

function App() {
  // ─────────────────────────────────────────────
  // STATE DECLARATIONS
  // useState(initialValue) returns [currentValue, setterFunction]
  // When you call setterFunction with a new value, React re-renders the component
  // ─────────────────────────────────────────────

  // expenses = the list of all expense objects
  // Each expense will look like: { id, title, amount, category, date }
  const [expenses, setExpenses] = useState([
    // Pre-loaded sample data so the app doesn't look empty on first load
    {
      id: 1,
      title: "Grocery Shopping",
      amount: 850,
      category: "Food",
      date: "2026-05-20",
    },
    {
      id: 2,
      title: "Metro Card",
      amount: 200,
      category: "Transport",
      date: "2026-05-21",
    },
    {
      id: 3,
      title: "New Shoes",
      amount: 1500,
      category: "Shopping",
      date: "2026-05-22",
    },
  ]);

  // filterCategory = which category tab the user has selected ('All' by default)
  const [filterCategory, setFilterCategory] = useState("All");

  // editingExpense = the expense object being edited (null = no edit modal open)
  const [editingExpense, setEditingExpense] = useState(null);

  // ─────────────────────────────────────────────
  // HANDLER FUNCTIONS
  // These are functions we define and pass DOWN to child components as props
  // Child components call these functions when something happens (user clicks, types, etc.)
  // ─────────────────────────────────────────────

  // ADD EXPENSE: Called when user submits the Add Expense form
  // newExpense = the expense object coming from the AddExpense component
  const handleAddExpense = (newExpense) => {
    // setExpenses updates our state with a NEW array
    // [...expenses] = "spread" (copy) all existing expenses
    // Then add the new one at the end
    // Date.now() = a unique number based on current time, used as a unique ID
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  // DELETE EXPENSE: Called when user clicks the delete button on an expense
  // id = the ID of the expense to remove
  const handleDeleteExpense = (id) => {
    // filter() = creates a NEW array keeping only items where the condition is true
    // Here: keep all expenses EXCEPT the one with the matching id
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // OPEN EDIT MODAL: Called when user clicks the edit button on an expense
  // expense = the full expense object to edit
  const handleEditOpen = (expense) => {
    setEditingExpense(expense); // Store it in state → this will open the modal
  };

  // SAVE EDIT: Called when user submits the edit form inside the modal
  // updatedExpense = the modified expense object
  const handleEditSave = (updatedExpense) => {
    // map() = loop over every expense, return a NEW array
    // If the expense's ID matches → replace it with the updated one
    // Otherwise → keep the original
    setExpenses(
      expenses.map((exp) =>
        exp.id === updatedExpense.id ? updatedExpense : exp,
      ),
    );
    setEditingExpense(null); // Close the modal by setting this back to null
  };

  // CLOSE MODAL: Called when user cancels or clicks outside the modal
  const handleEditClose = () => {
    setEditingExpense(null); // Null = no editing = modal closes
  };

  // ─────────────────────────────────────────────
  // DERIVED DATA (calculated FROM state, not stored in state separately)
  // This is a KEY React concept: always derive/calculate from existing state
  // ─────────────────────────────────────────────

  // filteredExpenses = the list to show based on which category filter is active
  const filteredExpenses =
    filterCategory === "All"
      ? expenses // Show all
      : expenses.filter((exp) => exp.category === filterCategory); // Show only matching

  // totalAmount = add up all the amounts in the current filtered list
  // reduce() = goes through each item, adding the amount to a running total
  // 0 = starting value of the total
  const totalAmount = filteredExpenses.reduce(
    (total, exp) => total + Number(exp.amount),
    0,
  );

  // ─────────────────────────────────────────────
  // JSX (the HTML-like syntax React uses to describe the UI)
  // ─────────────────────────────────────────────
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>💸 Expense Tracker</h1>
        <p className="app-subtitle">Manage your spending with ease</p>
      </header>

      <main className="app-main">
        {/* LEFT PANEL: Form to add new expenses */}
        <section className="panel panel-left">
          {/* We pass handleAddExpense as a prop called "onAdd"
              AddExpense will call this function when the form is submitted */}
          <AddExpense onAdd={handleAddExpense} categories={CATEGORIES} />
        </section>

        {/* RIGHT PANEL: Summary + Filter + List */}
        <section className="panel panel-right">
          {/* Summary: shows total spending */}
          <Summary
            total={totalAmount}
            count={filteredExpenses.length}
            filter={filterCategory}
          />

          {/* FilterBar: category buttons */}
          <FilterBar
            categories={CATEGORIES}
            activeFilter={filterCategory}
            onFilterChange={setFilterCategory} // Pass the setter directly as a prop
          />

          {/* ExpenseList: shows all expenses */}
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={handleDeleteExpense}
            onEdit={handleEditOpen}
          />
        </section>
      </main>

      {/* EditModal: only renders if editingExpense is not null */}
      {/* This is called "conditional rendering" — a core React pattern */}
      {editingExpense && (
        <EditModal
          expense={editingExpense}
          categories={CATEGORIES}
          onSave={handleEditSave}
          onClose={handleEditClose}
        />
      )}
    </div>
  );
}

export default App;
