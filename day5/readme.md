# ✅ To-Do App — React.js

A simple and clean To-Do List application built with **React + Vite** as part of the **GOW AI Academy React.js Internship – Day 5**.

---

## 📸 Features

- ➕ Add tasks via input field or pressing `Enter`
- 🗑️ Delete any task from the list
- ✅ Mark tasks as completed (with strikethrough)
- 📊 Live task counter showing completed vs total
- 🧹 Empty state message when no tasks exist

---

## 🧠 Concepts Practiced

| Concept               | Where used                                  |
| --------------------- | ------------------------------------------- |
| `useState` hook       | Managing task list and input value          |
| State arrays          | Storing multiple task objects in state      |
| List rendering        | `tasks.map()` to render each task as `<li>` |
| `.filter()`           | Deleting tasks and counting completed ones  |
| `.map()`              | Toggling task completion                    |
| Conditional rendering | Showing empty state, done/undone styles     |
| Event handling        | `onClick`, `onChange`, `onKeyDown`          |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/garvitajain23/RFT-Frontend-Internship.git
cd RFT-Frontend-Internship/day-5-todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run at `http://localhost:5173`

---

## 📁 Project Structure

```
todo-app/
├── public/
├── src/
│   ├── App.jsx        # Main component with all logic
│   ├── App.css        # Styles
│   └── main.jsx       # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ How It Works

### Adding a Task

The input field is controlled by `inputValue` state. When the user clicks **Add** (or presses `Enter`), a new task object is created and added to the `tasks` array using the spread operator:

```js
setTasks([...tasks, newTask]);
```

### Deleting a Task

Uses `.filter()` to return a new array that excludes the task with the matching `id`:

```js
setTasks(tasks.filter((task) => task.id !== id));
```

### Toggling Completion

Uses `.map()` to flip the `completed` boolean on the target task:

```js
setTasks(
  tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  ),
);
```

---

## 📌 Internship Rules Followed

- [x] Task completed before 11 PM deadline
- [x] Code pushed to `rftinternship` GitHub repository
- [x] LinkedIn post with day number, learnings, GitHub link, and hashtags
- [x] Form submitted before deadline

---

## 🏷️ Tags

`#gowaiacademy` `#rftinternship` `#reactjs` `#vite` `#webdevelopment` `#javascript` `#frontenddevelopment`

---

## 👨‍💻 Author

**Garvita Jain**

---

## 📄 License

This project is part of an internship program at [GOW AI Academy](mailto:kuk@gyansetu.ai) in collaboration with Ruhil Future Technologies.
