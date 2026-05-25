# 🛒 ShoppingListManager

## Day 8 — GOW AI Academy React.js Internship

A fully functional Shopping List Manager built using **React 18 + Vite**.

---

# 📋 Project Summary

This project demonstrates core React concepts such as:

- Components
- Props
- useState Hook
- Controlled Inputs
- Conditional Rendering
- Array State Updates
- Component Communication

The app allows users to manage shopping items efficiently with a clean UI and real-time updates.

---

# 🎯 Features

✅ Add shopping items  
✅ Remove items  
✅ Mark items as bought  
✅ Quantity tracking  
✅ Separate "To Buy" and "In Cart" sections  
✅ Live summary statistics  
✅ Empty state handling

---

# 📁 Folder Structure

```bash
shopping-list-app/
│
├── src/
│   ├── components/
│   │   ├── AddItemForm.jsx
│   │   ├── ShoppingList.jsx
│   │   ├── ShoppingItem.jsx
│   │   └── Summary.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# 🧩 Component Structure

```text
<App />
 ├── <AddItemForm />
 ├── <Summary />
 └── <ShoppingList />
       └── <ShoppingItem />
```

---

# ⚛️ React Concepts Used

## 1. Components

Components are reusable JavaScript functions that return JSX.

```jsx
function MyComponent() {
  return <div>Hello World</div>;
}
```

---

## 2. useState Hook

Used for storing and updating component state.

```jsx
const [items, setItems] = useState([]);
```

---

## 3. Props

Props allow parent components to pass data/functions to child components.

```jsx
<ShoppingList items={items} onRemove={removeItem} />
```

---

## 4. Controlled Inputs

```jsx
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />;
```

---

## 5. Array Methods

| Method            | Purpose             |
| ----------------- | ------------------- |
| `.map()`          | Render/update items |
| `.filter()`       | Remove items        |
| `.reduce()`       | Calculate totals    |
| `spread operator` | Add new items       |

---

# ⚡ Quick Cheatsheet

## State Update Patterns

### Add Item

```js
setItems([...items, newItem]);
```

### Remove Item

```js
setItems(items.filter((item) => item.id !== id));
```

### Toggle Bought

```js
setItems(
  items.map((item) =>
    item.id === id ? { ...item, bought: !item.bought } : item,
  ),
);
```

---

# 🖥️ Installation & Setup

## Create Project

```bash
npm create vite@latest shopping-list-app -- --template react
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 📦 Technologies Used

- React 18
- Vite
- JavaScript (ES6+)
- CSS3

---

# 📱 LinkedIn Learning Summary

Built a fully functional Shopping List Manager using React + Vite.

### Practised:

- useState
- Props
- Component Structure
- Controlled Forms
- Conditional Rendering
- Array Methods in State Management

---

# 🚀 Future Improvements

- Local Storage Support
- Edit Existing Items
- Search & Filter
- Dark Mode
- Backend Integration

---

# ❤️ Credits

Made with ❤️ during the GOW AI Academy React.js Internship.

## Hashtags

`#gowaiacademy` `#rftinternship` `#reactjs` `#javascript` `#webdevelopment`
