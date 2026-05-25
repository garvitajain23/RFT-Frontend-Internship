# 📝 Day 6 — Advanced To-Do App

### GOW AI Academy · React.js Internship · Ruhil Future Technologies

> **This file is two things in one:**
>
> 1. A `README.md` for your GitHub repo (paste it at the root of `todo-app/`)
> 2. A personal revision cheatsheet — read it before any React interview or assessment

---

## 📁 Project Overview

| Field                | Detail                                                                       |
| -------------------- | ---------------------------------------------------------------------------- |
| **Project**          | Advanced To-Do App                                                           |
| **Day**              | Day 6                                                                        |
| **Tech Stack**       | React 18, Vite, CSS Variables                                                |
| **Architecture**     | Component-based (professional structure)                                     |
| **Concepts Covered** | State arrays, updating items, conditional rendering, filter logic, edit mode |
| **Bonus Features**   | Edit task inline, Filter (All / Pending / Completed)                         |

---

## 🗂️ Folder Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx       ← Displays title + live stats (total/pending/done)
│   │   ├── TaskInput.jsx    ← Input box + Add button (controlled component)
│   │   ├── FilterBar.jsx    ← All / Pending / Completed filter buttons
│   │   ├── TaskItem.jsx     ← Single task row with edit/delete/complete
│   │   └── TaskList.jsx     ← Loops over tasks and renders TaskItem for each
│   ├── App.jsx              ← Brain: all state + all handler functions live here
│   ├── main.jsx             ← Entry point: attaches React to the HTML page
│   └── index.css            ← All styles using CSS variables
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 How to Run

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/rftinternship.git
cd rftinternship/todo-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## ✨ Features

- ✅ Add a new task
- 🗑️ Delete any task
- ✔️ Mark task as completed (with strikethrough)
- ✏️ Edit a task inline (bonus)
- 🔍 Filter tasks: All / Pending / Completed (bonus)
- 📊 Live stats counter in the header
- ⌨️ Keyboard support: Enter to add/save, Escape to cancel edit

---

---

# 🧠 REVISION CHEATSHEET

> Read this section before your LinkedIn post, assessments, or the next day's task.
> Every concept used in this project is explained from scratch.

---

## 1. What is React?

React is a **JavaScript library for building UIs**.

Instead of manually updating HTML elements when data changes, you:

1. Store your data in **state**
2. Describe what the UI _should look like_ based on that state
3. React **automatically updates the DOM** when state changes

Think of it like Excel: when you change a cell value, formulas referencing it update automatically. React does the same for your UI.

---

## 2. JSX — HTML inside JavaScript

```jsx
// JSX looks like HTML but it's actually JavaScript
// React converts this to real DOM elements

function Greeting() {
  const name = "Arjun";
  return (
    <div className="box">
      {" "}
      {/* className, not class */}
      <h1>Hello, {name}!</h1> {/* {} lets you use JS expressions */}
    </div>
  );
}
```

**Rules:**

- Use `className` instead of `class`
- Every component must return **one root element** (wrap in `<div>` or `<>`)
- Close every tag: `<input />`, `<br />`
- Use `{}` curly braces to embed any JavaScript expression

---

## 3. Components — Building Blocks

A component is just a **JavaScript function that returns JSX**.

```jsx
// Define a component (capital letter is required!)
function TaskCard() {
  return <div>I am a task!</div>;
}

// Use it like an HTML tag
function App() {
  return (
    <div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}
```

**Types of components:**

- **Smart / Container** — has state, handles logic (e.g., `App.jsx`)
- **Dumb / Presentational** — only receives props and renders UI (e.g., `Header.jsx`)

---

## 4. Props — Passing Data Down

Props = **properties** = data you pass from a parent component to a child component.

```jsx
// Parent passes data via attributes (like HTML attributes)
function App() {
  return <Header title="My Tasks" count={5} />;
}

// Child RECEIVES props as a function argument
function Header({ title, count }) {
  //              ↑ destructuring — same as props.title, props.count
  return (
    <div>
      <h1>{title}</h1>
      <p>You have {count} tasks</p>
    </div>
  );
}
```

**Key rules:**

- Props flow **one direction**: Parent → Child (never child → parent)
- Props are **read-only** — the child should never modify them
- To send data back up, pass a **function as a prop** (see Lifting State Up)

---

## 5. useState — The State Hook

`useState` lets a component **remember** data that can change.

```jsx
import { useState } from "react";

function Counter() {
  // useState(0) = initial value is 0
  // Returns [currentValue, functionToUpdateIt]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* Every time setCount is called, React re-renders this component */}
    </div>
  );
}
```

**Golden rule:** NEVER modify state directly. Always use the setter function.

```jsx
// ❌ WRONG — React won't know state changed, UI won't update
count = count + 1;
tasks.push(newTask);

// ✅ CORRECT — tells React to re-render
setCount(count + 1);
setTasks([...tasks, newTask]);
```

---

## 6. CONCEPT: State Arrays (The Core of This Project)

Our tasks are stored as an **array of objects** in state:

```jsx
const [tasks, setTasks] = useState([
  { id: 1, text: "Buy milk", completed: false, isEditing: false },
  { id: 2, text: "Go for walk", completed: true, isEditing: false },
]);
```

Each task is an object with 4 properties:
| Property | Type | Purpose |
|---|---|---|
| `id` | Number | Unique identifier (we use `Date.now()`) |
| `text` | String | The task description |
| `completed` | Boolean | Whether task is done |
| `isEditing` | Boolean | Whether task is in edit mode |

---

## 7. CONCEPT: Updating Items in a State Array

To change ONE item in an array, use `Array.map()`:

```jsx
// Toggle completed for task with id=2
const toggleComplete = (id) => {
  setTasks(
    tasks.map(
      (task) =>
        task.id === id
          ? { ...task, completed: !task.completed } // ← Matched task: update it
          : task, // ← Other tasks: return unchanged
    ),
  );
};
```

**Why `{ ...task, completed: !task.completed }` ?**

The **spread operator** `...task` copies ALL existing properties of the task object. Then we override just the ones we want to change. This creates a brand new object — we never mutate the original.

```jsx
const task = { id: 1, text: "Buy milk", completed: false };

// Spread copies all fields, then we override "completed"
const updated = { ...task, completed: true };
// Result: { id: 1, text: "Buy milk", completed: true }
```

---

## 8. CONCEPT: Conditional Rendering

Show different UI based on a condition (a boolean in state):

```jsx
// Method 1: Ternary operator (if/else in one line)
{
  isLoggedIn ? <Dashboard /> : <LoginPage />;
}

// Method 2: && (short-circuit) — only renders if condition is true
{
  error && <p className="error">{error}</p>;
}

// Method 3: if statement (outside JSX)
function TaskItem({ task }) {
  if (task.isEditing) {
    return <input defaultValue={task.text} />;
  }
  return <span>{task.text}</span>;
}
```

**In our project:** `TaskItem.jsx` uses conditional rendering to show either an `<input>` (edit mode) or a `<span>` (view mode) based on `task.isEditing`.

---

## 9. Rendering Lists with .map()

To render an array of data as JSX elements:

```jsx
const fruits = ["Apple", "Banana", "Mango"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
        //  ↑ key is REQUIRED for lists!
        //    React uses it internally to track which item changed
        //    Use a unique ID, not index when possible
      ))}
    </ul>
  );
}
```

**Why is `key` required?**
Without keys, if you delete the middle item, React doesn't know which item was removed. Keys help React match old elements to new ones efficiently.

---

## 10. CONCEPT: Lifting State Up

When multiple components need the same data, put state in their **common parent**.

```
App.jsx          ← State lives here (tasks, filter)
├── Header       ← Receives: total, completed, pending (read-only)
├── TaskInput    ← Receives: onAdd function (to add tasks)
├── FilterBar    ← Receives: currentFilter + onFilterChange
└── TaskList     ← Receives: tasks array + onDelete, onToggle, onEdit, onSave
```

The parent passes **data down** via props, and **functions down** so children can trigger updates:

```jsx
// In App.jsx
const addTask = (text) => {
  setTasks([...tasks, { id: Date.now(), text, completed: false, isEditing: false }])
}

// Pass the function down as a prop
<TaskInput onAdd={addTask} />

// In TaskInput.jsx — call the function when user submits
<button onClick={() => onAdd(inputValue)}>Add</button>
```

---

## 11. Controlled Inputs

In React, form inputs should be "controlled" — meaning React state drives the value:

```jsx
const [value, setValue] = useState('')

<input
  value={value}                          // React controls the value
  onChange={(e) => setValue(e.target.value)}  // Update state on every keystroke
/>
```

**Uncontrolled** (bad in React): the DOM owns the value, React doesn't know about it.
**Controlled** (good): React state is the single source of truth.

---

## 12. Event Handling

```jsx
// onClick — triggered on button click
<button onClick={handleClick}>Click me</button>

// Don't call the function — pass a REFERENCE
<button onClick={handleClick}>     ✅ Correct
<button onClick={handleClick()}>   ❌ Wrong — runs immediately on render!

// If you need to pass arguments, wrap in arrow function
<button onClick={() => deleteTask(task.id)}>Delete</button>

// onChange — triggered when input value changes
<input onChange={(e) => setName(e.target.value)} />
//                ↑ e = event object, e.target.value = what user typed

// onKeyDown — triggered on key press
<input onKeyDown={(e) => {
  if (e.key === 'Enter') handleSubmit()
  if (e.key === 'Escape') handleCancel()
}} />
```

---

## 13. CONCEPT: Filter Logic (Derived State)

We never store "filtered tasks" separately in state. We **compute** them on every render:

```jsx
// Main state — all tasks
const [tasks, setTasks] = useState([...])
const [filter, setFilter] = useState('all')  // 'all' | 'pending' | 'completed'

// Derived state — computed from main state
const filteredTasks = tasks.filter(task => {
  if (filter === 'completed') return task.completed
  if (filter === 'pending')   return !task.completed
  return true  // 'all'
})

// Render the filtered tasks
<TaskList tasks={filteredTasks} />
```

This pattern keeps state minimal. The filtered view is always in sync because it's recalculated every time `tasks` or `filter` changes.

---

## 14. Array Methods You Must Know

```jsx
const tasks = [
  { id: 1, text: "Task A", completed: false },
  { id: 2, text: "Task B", completed: true },
  { id: 3, text: "Task C", completed: false },
];

// .map() — transform every item, returns NEW array of same length
tasks.map((t) => t.text);
// → ["Task A", "Task B", "Task C"]

// .filter() — keep only items that pass the test, returns NEW array
tasks.filter((t) => !t.completed);
// → [{ id:1, text:"Task A"... }, { id:3, text:"Task C"... }]

// .find() — returns the FIRST matching item (or undefined)
tasks.find((t) => t.id === 2);
// → { id: 2, text: "Task B", completed: true }

// Spread operator — copy an array/object
const newTasks = [...tasks, { id: 4, text: "Task D", completed: false }];
// → Original + new item, original tasks array unchanged
```

---

## 15. Component Communication Summary

```
Direction        Method              Example
─────────────────────────────────────────────────────────
Parent → Child   Props               <Child name="Arjun" />
Child → Parent   Function props      <Child onSave={handleSave} />
Sibling → Sibling  Lift to parent   Both get data from App.jsx
```

---

## 16. Quick Reference: Common Mistakes

| Mistake                     | Fix                                       |
| --------------------------- | ----------------------------------------- |
| `tasks.push(item)`          | `setTasks([...tasks, item])`              |
| `task.completed = true`     | `setTasks(tasks.map(...))`                |
| `onClick={handleClick()}`   | `onClick={handleClick}`                   |
| `class="box"` in JSX        | `className="box"`                         |
| No `key` in list            | Add `key={item.id}` to each list item     |
| Using `for` in JSX          | Use `Array.map()` instead                 |
| State not updating visually | You mutated state instead of replacing it |

---

## 17. The 5 Operations on a State Array (Cheatsheet)

```jsx
// ── ADD ────────────────────────────────────────────────
setTasks([...tasks, newTask]);

// ── DELETE ─────────────────────────────────────────────
setTasks(tasks.filter((t) => t.id !== id));

// ── UPDATE ONE FIELD ───────────────────────────────────
setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)));

// ── REPLACE TEXT ───────────────────────────────────────
setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));

// ── CLEAR ALL ──────────────────────────────────────────
setTasks([]);
```

---

## 📌 LinkedIn Post Template

```
🚀 Day 6 of React.js Internship at GOW AI Academy!

Today I built an Advanced To-Do App with:
✅ Add / Delete / Mark Complete
✏️ Edit tasks inline
🔍 Filter: All / Pending / Completed

💡 Concepts I learned:
- State Arrays with useState
- Updating items with Array.map() + spread operator
- Conditional Rendering (edit mode vs view mode)
- Lifting State Up
- Controlled Inputs
- Derived state for filters



#gowaiacemy #rftinternship #ReactJS #Day6 #WebDevelopment
```

---

## 📚 What's Next (Day 7 Preview)

Based on what you've learned, here's what to expect:

- `useEffect` — side effects (fetching data, timers, localStorage)
- Persisting tasks in `localStorage` so they survive page refresh
- Possibly fetching data from a real API

**To prepare:** Understand that `useEffect` runs code _after_ the component renders, and it can run every render, or only when specific state changes.

---

_Made with 💜 during GOW AI Academy React Internship — Day 6_
_Ruhil Future Technologies × Kurukshetra University_
