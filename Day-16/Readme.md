# 📝 Multi-Page Blog Application

A React.js blog application built during **GOW AI Academy RFT Frontend Internship - Day 16**.

## 🚀 Tech Stack

- **React.js** - UI Library
- **Vite** - Build Tool
- **React Router DOM** - Client-side Routing
- **CSS** - Styling (no external UI library)

## 📁 Folder Structure

```txt
my-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── BlogCard.jsx      # Reusable blog card component
│   ├── pages/
│   │   ├── Home.jsx          # Home page with all posts
│   │   ├── PostDetail.jsx    # Single post detail page
│   │   └── CreatePost.jsx    # Create new post form
│   ├── data/
│   │   └── posts.js          # Mock data + categories
│   ├── App.jsx               # Root component + routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
└── package.json
```

## ✨ Features

- 🏠 **Home Page** — Lists all blog posts as cards
- 📄 **Post Detail Page** — View full content of any post
- ➕ **Create Post** — Add new posts via form (visible instantly)
- 🔍 **Search Posts** — Filter posts by title or summary
- 🗂️ **Filter by Category** — Filter posts by category tags
- 🧭 **Navigation Bar** — Sticky navbar with active link highlighting

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/garvitajain23/RFT-Frontend-Internship/tree/main/Day-16

# 2. Navigate into the project
cd my-blog

# 3. Install dependencies
npm install

# 4. Install React Router DOM
npm install react-router-dom

# 5. Start the development server
npm run dev
```

## 🛣️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | All blog posts with search & filter |
| `/post/:id` | Post Detail | Full content of a single post |
| `/create` | Create Post | Form to add a new post |

## 🧠 Concepts Covered

- ✅ React Router DOM (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
- ✅ Dynamic routing with `useParams()`
- ✅ Navigation with `useNavigate()`
- ✅ State lifting — shared state managed in `App.jsx`
- ✅ Component reuse (`BlogCard`, `Navbar`)
- ✅ `useState` for search, filter, and form handling
- ✅ Props passing between parent and child components
- ✅ Conditional rendering
- ✅ Array filtering for search and category features



## 👤 Author

** Garvita Jain**  
-Gmail: garvitajain.in@gmail.com

## 📌 Internship Info

- 🏫 GOW AI Academy — RFT Frontend Internship
- 📅 Day 16 — Project 16
- #gowaiacademy #rftinternship
