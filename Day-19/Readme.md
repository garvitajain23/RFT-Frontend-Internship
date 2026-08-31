````md
# 💬 ChatterBox — Real-Time Chat UI (Simulation)

> Day 19 Project | GOW AI Academy — RFT Frontend Internship

A real-time chat UI built with React, simulating live multi-user conversations using state management and component-driven architecture. No backend — pure React state magic.

---

## 🚀 Tech Stack

- **React 18** — UI & state
- **Vite** — blazing fast dev server
- **React Router DOM v6** — client-side routing

---

## ✨ Features

- 💬 Send and receive messages in real time (simulated)
- 🕐 Timestamps on every message
- 📜 Persistent chat history within session
- ⬇️ Auto-scroll to latest message
- 👥 Multiple simulated bot users with unique avatars
- 🏠 Multiple chat rooms — general, random, tech-talk
- 🟢 Online users list in sidebar
- ⌨️ Typing indicator animation

---

## 📁 Folder Structure

```text
chat-app/
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Room selection + name entry
│   │   └── Chat.jsx          # Main chat page with state logic
│   ├── components/
│   │   ├── MessageBubble.jsx # Individual message UI
│   │   ├── ChatInput.jsx     # Input bar + send button
│   │   └── Sidebar.jsx       # Room switcher + online users
│   ├── App.jsx               # Route definitions
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles + CSS variables
├── index.html
├── vite.config.js
└── package.json
````

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clonehttps://github.com/Aman-Sharma-0007/RFT-FRONTEND-INTERNSHIP/tree/main/Day-19.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧠 Concepts Practiced

| Concept               | Where Used                                           |
| --------------------- | ---------------------------------------------------- |
| `useState`            | Messages array, input field, name entry              |
| `useEffect`           | Auto-scroll, bot reply simulation, idle bot messages |
| `useRef`              | Scroll to bottom ref                                 |
| `useParams`           | Reading room ID from URL                             |
| `useNavigate`         | Redirecting between Home and Chat                    |
| React Router DOM      | `/` → Home, `/chat/:roomId` → Chat                   |
| Props                 | Passing data between parent and child components     |
| Component Composition | Layout built from small focused components           |

---

## 🤖 How the Simulation Works

* When you send a message, 1–2 random bot users reply after a short delay (800ms–2s)
* Every 12 seconds, a bot sends an idle message to keep the chat feeling alive
* Each room has its own set of contextual bot replies
* Bots are stateless — they react to your message timing, not content

---



## 📌 Tags

`#gowaiacademy` `#rftinternship` `#reactjs` `#vite` `#javascript` `#frontenddevelopment` `#day19`

