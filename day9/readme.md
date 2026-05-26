# 💸 Expense Tracker App — Day 9

> **GOW AI Academy · React.js Internship**
> A complete revision cheatsheet + project summary for Day 9.

---

## 📦 Project Overview

A fully functional **Expense Tracker** built with **React + Vite**, covering:

- Add, Edit, Delete expenses
- Filter by category
- Show total spending (derived state)
- Component-based professional architecture

**Tech Stack:** React 18 · Vite · CSS Custom Properties · JavaScript ES6+

---

## 🗂️ Folder Structure

```
expense-tracker/
├── index.html               ← HTML shell (React mounts here)
├── vite.config.js           ← Vite build configuration
├── package.json             ← Project dependencies & scripts
└── src/
    ├── main.jsx             ← Entry point — mounts App into the DOM
    ├── App.jsx              ← Root component — owns ALL state
    ├── App.css              ← Global styles & CSS variables
    └── components/
        ├── AddExpense.jsx   ← Form to add a new expense
        ├── ExpenseList.jsx  ← Renders the full list of expenses
        ├── ExpenseItem.jsx  ← Single expense row (presentational)
        ├── Summary.jsx      ← Total spending display card
        ├── FilterBar.jsx    ← Category filter buttons
        └── EditModal.jsx    ← Popup form to edit an expense
```

---

## ⚡ Setup Commands

```bash
# 1. Create React project with Vite
npm create vite@latest expense-tracker -- --template react

# 2. Enter project folder
cd expense-tracker

# 3. Install dependencies
npm install

# 4. Create components folder
mkdir src/components

# 5. Start development server
npm run dev
# → App runs at http://localhost:5173
```

---

## 🧠 React Concepts Used — Cheatsheet

### 1. `useState` — Storing Data That Changes

```jsx
// Syntax:
const [value, setValue] = useState(initialValue);

// Examples used in this project:
const [expenses, setExpenses] = useState([]); // array
const [filterCategory, setFilterCategory] = useState("All"); // string
const [editingExpense, setEditingExpense] = useState(null); // null or object
const [formData, setFormData] = useState({ title: "", amount: "" }); // object
```

**Rule:** Every time you call `setValue(newValue)`, React **re-renders** the component
with the new value. Never mutate state directly (never do `expenses.push(...)`).

---

### 2. Props — Passing Data Parent → Child

```jsx
// Parent sends data:
<AddExpense onAdd={handleAddExpense} categories={CATEGORIES} />;

// Child receives it:
function AddExpense({ onAdd, categories }) {
  // use onAdd and categories here
}
```

**Rule:** Props flow **down only** (parent → child). They are **read-only** inside the child.
To send data back up, pass a **function** as a prop and call it.

---

### 3. Controlled Inputs — React Owns the Form

```jsx
// Each input's value is bound to state
const [formData, setFormData] = useState({ title: "" });

// The onChange handler updates state on every keystroke
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  //            ↑ copy old fields   ↑ update only the changed field
};

// The input is "controlled" — React controls what it shows
<input
  name="title"
  value={formData.title} // ← React controls the displayed value
  onChange={handleChange} // ← React updates state on every keystroke
/>;
```

**Why?** Because now React always knows exactly what's in the form.
You can validate, reset, or pre-fill it from code at any time.

---

### 4. List Rendering — Displaying Arrays

```jsx
// Use .map() to turn an array into JSX elements
{
  expenses.map((expense) => (
    <ExpenseItem
      key={expense.id} // ← REQUIRED: unique key for each item
      expense={expense}
    />
  ));
}
```

**Why `key`?** React uses it to track which items changed, were added,
or removed — so it only updates the DOM for what actually changed (performance).

**Rule:** Key must be **unique** and **stable** (use IDs, not array indexes).

---

### 5. Conditional Rendering — Show/Hide Based on State

```jsx
// Pattern 1: &&  (show if truthy)
{
  error && <p className="error-msg">{error}</p>;
}

// Pattern 2: ternary (show one of two things)
{
  count !== 1 ? "expenses" : "expense";
}

// Pattern 3: early return (show a different UI entirely)
if (expenses.length === 0) {
  return <div className="empty-state">No expenses yet!</div>;
}
```

**Used for:** showing the Edit Modal only when `editingExpense !== null`,
showing errors only when the `error` state has content,
showing empty state when the list is empty.

---

### 6. Lifting State Up — Shared State Lives in the Parent

```jsx
// The filterCategory state lives in App.jsx (the parent)
const [filterCategory, setFilterCategory] = useState('All')

// App passes BOTH the current value AND the setter down as props
<FilterBar
  activeFilter={filterCategory}       // current value (read)
  onFilterChange={setFilterCategory}  // setter function (write)
/>

// FilterBar just calls it when a button is clicked
function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <button onClick={() => onFilterChange('Food')}>Food</button>
  )
}
```

**Rule:** If two components need the same piece of data, put the state
in their **closest common ancestor** and pass it down via props.

---

### 7. Derived Data — Calculate, Don't Store

```jsx
// ❌ BAD: storing a total separately in state
const [total, setTotal] = useState(0); // you'd have to update this manually everywhere

// ✅ GOOD: calculate it from existing state
const totalAmount = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
```

**Rule:** If a value can be **calculated** from existing state, don't put it
in state — just calculate it during render. Keeping a single source of truth
prevents bugs where your "derived" state gets out of sync.

---

### 8. Event Propagation & `stopPropagation`

```jsx
// The backdrop closes the modal when clicked
<div className="modal-backdrop" onClick={onClose}>
  {/* Without stopPropagation, clicking HERE would ALSO fire the backdrop's onClick */}
  <div className="modal-box" onClick={(e) => e.stopPropagation()}>
    {/* form content */}
  </div>
</div>
```

**Why?** Click events **bubble up** the DOM tree by default.
`e.stopPropagation()` stops the event from travelling up to parent elements.

---

### 9. `e.preventDefault()` — Stop Default Browser Behaviour

```jsx
const handleSubmit = (e) => {
  e.preventDefault() // Stops the page from refreshing (default form submit behaviour)
  // your logic here
}

<form onSubmit={handleSubmit}>
```

**Rule:** Always call `e.preventDefault()` on form `onSubmit` handlers in React.

---

### 10. Spread Operator `...` — Copying Objects & Arrays

```jsx
// Copy an array and add one item
setExpenses([...expenses, newExpense]);

// Copy an object and update one field
setFormData({ ...formData, [name]: value });

// Copy an object and override the id
onSave({ ...formData, id: expense.id });
```

**Why?** React state must be **replaced**, not mutated.
The spread operator creates a new copy so React detects the change and re-renders.

---

## 🔄 Data Flow Diagram

```
App.jsx  (owns all state)
│
├── expenses[]  ──────────────────────────→ ExpenseList → ExpenseItem
│   setExpenses ← handleAddExpense ────── AddExpense
│   setExpenses ← handleDeleteExpense ─── ExpenseItem (via ExpenseList)
│   setExpenses ← handleEditSave ──────── EditModal
│
├── filterCategory ──────────────────────→ FilterBar (activeFilter)
│   setFilterCategory ← onFilterChange ── FilterBar
│
├── editingExpense ──────────────────────→ EditModal (only renders if not null)
│   setEditingExpense ← handleEditOpen ── ExpenseItem (via ExpenseList)
│   setEditingExpense(null) ← onClose ─── EditModal
│
└── filteredExpenses (derived) ──────────→ ExpenseList, Summary
    totalAmount (derived) ───────────────→ Summary
```

---

## 🧩 Component Responsibilities

| Component     | Type                | Responsibility                                              |
| ------------- | ------------------- | ----------------------------------------------------------- |
| `App.jsx`     | Smart (stateful)    | Owns all state, defines all handlers, orchestrates layout   |
| `AddExpense`  | Smart (local state) | Manages its own form state, calls `onAdd` on submit         |
| `ExpenseList` | Presentational      | Loops over expenses, renders `ExpenseItem` for each         |
| `ExpenseItem` | Presentational      | Displays one expense row, calls `onDelete`/`onEdit`         |
| `Summary`     | Presentational      | Displays total and count from props                         |
| `FilterBar`   | Presentational      | Renders filter buttons, calls `onFilterChange` on click     |
| `EditModal`   | Smart (local state) | Pre-fills form with existing data, calls `onSave` on submit |

**Smart component** = has its own `useState`
**Presentational component** = no state, purely renders props

---

## 🔑 Key JavaScript Methods Used

### `array.map()` — Transform every item

```js
// Returns a NEW array with something done to each item
expenses.map((exp) => <ExpenseItem key={exp.id} expense={exp} />);
expenses.map((exp) => (exp.id === id ? updatedExp : exp)); // replace one item
```

### `array.filter()` — Keep items matching a condition

```js
// Returns a NEW array with only items where condition is true
expenses.filter((exp) => exp.id !== id); // remove by id
expenses.filter((exp) => exp.category === "Food"); // filter by category
```

### `array.reduce()` — Accumulate to a single value

```js
// Loops through array, building up a running total
expenses.reduce((total, exp) => total + exp.amount, 0);
//               ↑ accumulator  ↑ current item         ↑ starting value
```

### `Date.now()` — Unique ID generator

```js
{ ...newExpense, id: Date.now() }
// Date.now() returns milliseconds since Jan 1, 1970 — always unique
```

### `Intl.NumberFormat` — Currency formatting

```js
new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
}).format(1500);
// → "₹1,500"
```

---

## 🎨 CSS Concepts Used

### CSS Custom Properties (Variables)

```css
:root {
  --clr-primary: #6c63ff; /* define once */
  --sp-md: 16px;
}

.btn-primary {
  background: var(--clr-primary); /* use everywhere */
  padding: var(--sp-md);
}
```

**Why?** Change the value in one place, updates everywhere.

### CSS Grid — Two-Column Layout

```css
.app-main {
  display: grid;
  grid-template-columns: 360px 1fr; /* fixed left, flexible right */
  gap: 24px;
}

@media (max-width: 768px) {
  .app-main {
    grid-template-columns: 1fr;
  } /* stack on mobile */
}
```

### Flexbox — Row & Column Layouts

```css
.expense-item {
  display: flex;
  align-items: center; /* vertical centre */
  gap: 16px;
}
```

### Dynamic Class Names in JSX

```jsx
// Add "active" class conditionally using a template literal
className={`filter-btn ${activeFilter === filter ? 'filter-btn-active' : ''}`}
```

---

## 📋 Concepts Tested (from the Task Sheet)

| Concept                       | Where It's Used                                         |
| ----------------------------- | ------------------------------------------------------- |
| State management with objects | `formData` object state in `AddExpense` and `EditModal` |
| List rendering                | `ExpenseList` using `.map()` with `key` prop            |
| Calculations using state      | `totalAmount` via `.reduce()` in `App.jsx`              |
| Add expense                   | `handleAddExpense` + `AddExpense` component             |
| Delete expense                | `handleDeleteExpense` passed to `ExpenseItem`           |
| Show expense list             | `ExpenseList` + `ExpenseItem` components                |
| Title, Amount, Category       | Fields in the expense object and form                   |
| Show total expenses           | `Summary` component with derived `totalAmount`          |
| Filter by category            | `FilterBar` + `filterCategory` state                    |
| Edit expense                  | `EditModal` + `handleEditSave`                          |
| Add date                      | `date` field in expense object and form                 |

---

## 🚀 Bonus: What Makes This "Professional"

1. **Separation of concerns** — each component does exactly one thing
2. **Single source of truth** — all state lives in `App.jsx`; children only read/call
3. **Derived data** — `filteredExpenses` and `totalAmount` computed, not stored
4. **Controlled forms** — React owns every form input's value
5. **Validation before submission** — errors shown inline, form doesn't submit bad data
6. **Pre-filled edit form** — `EditModal` initialises its state from the expense prop
7. **CSS variables** — one place to change the whole colour scheme
8. **Responsive layout** — works on mobile with a `@media` query
9. **Accessibility** — `aria-label` on icon buttons, `htmlFor`/`id` pairs on labels
10. **Empty state** — friendly message when no expenses exist

---

## 🏁 How to Run

```bash
cd expense-tracker
npm run dev
```

Open **http://localhost:5173** in your browser.

---

_Day 9 complete ✅ · GOW AI Academy React Internship_
