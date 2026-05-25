# ⚡ React Counter App — Day 1

> **GOW AI Academy × Ruhil Future Technologies**
> React.js Internship — Day 1 Project

---

---

## 📌 About The Project

A fully functional **Counter Application** built with React.js as part of my Day 1 internship task at **GOW AI Academy**. This project demonstrates the core React concepts of `useState` hook and event handling.

---

## ✨ Features

- ➕ **Increment** — Increase counter by selected step
- ➖ **Decrement** — Decrease counter by selected step
- 🔄 **Reset** — Reset counter back to zero
- 🚫 **Prevent Negative Values** — Counter never goes below 0 _(Bonus)_
- 🔢 **Step Increment** — Choose step size: +1, +5, +10 _(Bonus)_
- 🎨 **Dynamic UI** — Color changes based on counter value
- 📱 **Responsive Design** — Works on mobile and desktop

---

## 🧠 Concepts Learned

| Concept               | Description                             |
| --------------------- | --------------------------------------- |
| `useState`            | Managing component state in React       |
| Event Handling        | `onClick`, `onChange` handlers          |
| Conditional Rendering | Dynamic class names and status messages |
| Props & Components    | Functional component architecture       |
| JSX                   | Writing HTML-like syntax in JavaScript  |
| Responsive CSS        | Flexbox and media queries               |

---

## 🛠️ Built With

- ⚛️ **React.js** v19
- ⚡ **Vite** v8 — Build tool
- 🎨 **CSS3** — Styling & animations
- 📦 **npm** — Package manager

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your machine.

```bash
node --version   # Should be v18 or higher
npm --version
```

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/garvitajain23/RFT-Frontend-Internship.git

# 2. Navigate to Day 1 folder
cd RFT-Frontend-Internship/day1/my-counter-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## 📁 Folder Structure

```
my-counter-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Counter/
│   │       ├── Counter.jsx       ← Main counter component
│   │       └── Counter.css       ← Counter styles
│   ├── App.jsx                   ← Root component
│   ├── App.css
│   └── main.jsx                  ← Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 💡 Key Code Snippet

```jsx
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);

const handleIncrement = () => setCount(count + step);
const handleDecrement = () => setCount(Math.max(0, count - step));
const handleReset = () => setCount(0);
```

---

## 🎯 What I Learned Today

- How **React State** works and why it's needed
- The difference between regular variables and state
- How to handle **user events** in React
- Writing clean, reusable **functional components**
- How to prevent **negative state values**
- Industry-standard **folder structure** for React projects
- How **Vite** speeds up React development

---

## 📈 Bonus Features Implemented

- [x] Prevent negative values
- [x] Step increment (1, 5, 10)
- [x] Disabled button when count = 0
- [x] Dynamic color based on count
- [x] Status message based on count value
- [x] Responsive mobile design

---

---

## 📜 Internship Info

| Detail          | Info                                       |
| --------------- | ------------------------------------------ |
| 🏢 Organization | GOW AI Academy × Ruhil Future Technologies |
| 📅 Day          | Day 1 of 30                                |
| 🎯 Task         | Counter Application                        |
| 📧 Contact      | kuk@gyansetu.ai                            |

---

> _"Every expert was once a beginner."_ — Built with ❤️ during my React.js Internship

#gowaiacademy #rftinternship #ReactJS #WebDevelopment
