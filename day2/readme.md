# 👤 Day 2 — User Profile Card (Props & Component Reuse)

> **GOW AI Academy — React.js Internship**
> Built with React + Vite

---

## 📸 Preview

A reusable `UserCard` component that displays user name, age, role, and online/offline status — with a Follow/Unfollow toggle button. Multiple cards are rendered from a single data source.

---

## 🎯 Concepts Covered

| Concept                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| **Props**                 | Passing data from parent (App) to child (UserCard) |
| **Component Reuse**       | One component, multiple users                      |
| **useState Hook**         | Managing follow/unfollow state per card            |
| **Conditional Rendering** | Online/Offline badge using ternary operator        |
| **Array.map()**           | Rendering a list of cards from data                |
| **key prop**              | Unique identifier for list items                   |

---

## 🗂️ Folder Structure

```
src/
├── components/
│   └── UserCard/
│       ├── UserCard.jsx      ← Reusable card component
│       └── UserCard.css      ← Component styles
├── data/
│   └── users.js              ← User data (simulates API)
├── App.jsx                   ← Parent component
└── main.jsx                  ← Entry point (Vite)
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/garvitajain23/rftinternship.git
cd rftinternship
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 🧩 Component: UserCard

### Props accepted

| Prop       | Type    | Required | Description                                |
| ---------- | ------- | -------- | ------------------------------------------ |
| `name`     | string  | ✅       | Full name of the user                      |
| `age`      | number  | ✅       | Age of the user                            |
| `role`     | string  | ✅       | Job title or role                          |
| `avatar`   | string  | ❌       | Profile image URL (shows initials if null) |
| `isOnline` | boolean | ✅       | Online/Offline status                      |

### Usage example

```jsx
<UserCard
  name="Priya Sharma"
  age={24}
  role="Frontend Developer"
  avatar={null}
  isOnline={true}
/>
```

---

## ✨ Features

- ✅ Reusable `UserCard` component using **Props**
- ✅ Renders multiple cards with different data using `.map()`
- ✅ **Follow / Unfollow** toggle button with `useState`
- ✅ **Online / Offline** badge — conditional rendering
- ✅ Avatar **initials fallback** when no image is provided
- ✅ Clean, responsive card grid layout

---

## 🛠️ Built With

- [React](https://reactjs.org/) — UI library
- [Vite](https://vitejs.dev/) — Fast build tool
- CSS — Component styling

---

## 📚 Key Learnings

- Props are **read-only** — data flows one way (parent → child)
- `useState` gives each component its **own independent state**
- `.map()` is the standard way to **render lists** in React
- The `key` prop helps React **track and update** list items efficiently
- Conditional rendering with ternary `? :` is standard React practice

---

---

## 👨‍💻 Author

**Garvita Jain**
React.js Intern — GOW AI Academy
`#gowaiacademy` `#rftinternship`
