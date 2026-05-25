# 🌙 Theme Toggle — Light/Dark Mode

A React.js project built during **Day 3** of the GOW AI Academy React.js Internship.

---

## 📌 Project Overview

This app demonstrates how to toggle between **light and dark themes** using React state. The UI reacts instantly to state changes, and the user's theme preference is saved in `localStorage` so it persists across browser sessions.

---

## 🎯 Concepts Covered

| Concept             | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `useState`          | Holds the current theme (light or dark) as a boolean              |
| Conditional Styling | Applies different background/text colors based on state           |
| `useEffect`         | Runs side effects — saves theme to `localStorage` on every change |
| `localStorage`      | Persists the theme preference across page refreshes               |
| Event Handling      | `onClick` on the button triggers the toggle                       |

---

## ✨ Features

- ☀️ Light mode with soft background and dark text
- 🌙 Dark mode with deep background and light text
- 🔁 One-click toggle button
- 💾 Theme preference saved in `localStorage` (persists on refresh)
- 🎨 Smooth CSS transition on theme switch

---

## 🗂️ Project Structure

```
theme-toggle/
├── public/
├── src/
│   ├── App.jsx       ← Main component (all logic lives here)
│   └── App.css       ← Empty / minimal styles
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- A terminal / command prompt

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/garvitajain23/RFT-Frontend-Internship.git

# 2. Navigate into the project folder
cd theme-toggle

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 🧠 How It Works

### 1. State initialised from localStorage

```jsx
const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem("theme");
  return saved === "dark";
});
```

On first load, React checks `localStorage` for a saved preference. If none exists, it defaults to light mode.

### 2. Saving preference on every change

```jsx
useEffect(() => {
  localStorage.setItem("theme", isDark ? "dark" : "light");
}, [isDark]);
```

Every time `isDark` changes, the new value is saved to `localStorage`.

### 3. Conditional styling

```jsx
backgroundColor: isDark ? '#1a1a2e' : '#f0f4f8',
color: isDark ? '#e0e0e0' : '#1a1a2e',
```

Styles are applied inline using the ternary operator — if `isDark` is true, dark colours are used; otherwise light colours are applied.

### 4. Toggle on button click

```jsx
<button onClick={() => setIsDark(!isDark)}>
  Switch to {isDark ? "Light" : "Dark"} Mode
</button>
```

Clicking the button flips `isDark` from `true` to `false` or vice versa, triggering a re-render.

---

## 📸 Screenshots

| Light Mode                       | Dark Mode                        |
| -------------------------------- | -------------------------------- |
| White/grey background, dark text | Deep navy background, light text |

---

## 📚 What I Learned

- How `useState` makes the UI reactive to data changes
- How to write conditional inline styles in JSX using the ternary operator (`? :`)
- How `useEffect` works and when it runs
- How to persist data in the browser using `localStorage`
- The difference between a "controlled" re-render and a direct DOM manipulation

---

---

## 👨‍💻 Author

**Garvita Jain**
GOW AI Academy — React.js Internship, Day 3
📧 kuk@gyansetu.ai

---

## 🏷️ Tags

`#reactjs` `#vite` `#javascript` `#darkmode` `#useState` `#useEffect` `#localStorage` `#gowaiacademy` `#rftinternship`
