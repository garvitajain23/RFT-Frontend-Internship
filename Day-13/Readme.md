# 📰 News App

A React.js News Application built during **GOW AI Academy RFT Frontend Internship - Day 13**.

## 🚀 Live Demo
> Run locally with `npm run dev`

---

## 📌 Project Info

| Detail | Info |
|--------|------|
| Project | Project 13 — News App |
| Internship | GOW AI Academy React.js Internship |
| Day | Day 13 |
| Developer | Aman Sharma |

---

## ✨ Features

- 🗞️ Fetch latest news using **GNews API**
- 📂 **Filter by Category** — Business, Technology, Sports, Health, Entertainment
- 📄 **Pagination** — Browse through multiple pages
- 🔗 Each article shows **Title, Description, and Read More link**
- ⚡ Built with **Vite** for fast development

---

## 🧠 Concepts Used

- API Data Handling
- List Rendering
- React Router DOM
- useState & useEffect Hooks
- Component-based Architecture

---

## 🗂️ Folder Structure

```
news-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NewsCard.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CategoryPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ Tech Stack

- **React.js** — UI Library
- **Vite** — Build Tool
- **React Router DOM** — Client-side Routing
- **GNews API** — News Data Source

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/garvitajain23/RFT-Frontend-Internship/tree/main/Day-13

# 2. Go into the project directory
cd news-app

# 3. Install dependencies
npm install

# 4. Add your GNews API key in Home.jsx and CategoryPage.jsx
const API_KEY = 'your_gnews_api_key_here'

# 5. Start the development server
npm run dev
```

---

## 🔑 API Used

- **GNews API** — [https://gnews.io](https://gnews.io)
- Free tier: 100 requests/day
- Endpoint used:
```
GET https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=6&page=1&token=YOUR_KEY
```

---

## 📸 Screenshots

> ![alt text](image.png)

---

## 🔖 Hashtags

`#gowaiacademy` `#rftinternship` `#reactjs` `#vite` `#newsapp` `#javascript`
