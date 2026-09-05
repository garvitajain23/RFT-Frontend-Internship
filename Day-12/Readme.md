# 🔍 GitHub UserFinder

A React.js project built during **Day 12** of the GOW AI Academy RFT Frontend Internship.

## 📌 Project Overview

GitHub UserFinder is a web app that allows you to search any GitHub user by their username and view their profile details and repositories.

## ✨ Features

- 🔎 Search GitHub users by username
- 👤 Display user profile (Name, Avatar, Bio)
- 👥 Show Followers, Following, and Public Repos count
- 📦 List top 6 repositories with stars, forks, and language
- ❌ Handle "User Not Found" gracefully
- 🔗 Direct link to GitHub profile

## 🛠️ Tech Stack

- React.js (Vite)
- React Router DOM
- GitHub REST API (no API key required)

## 📁 Folder Structure

github-userfinder/
├── public/
├── src/
│   ├── components/
│   │   └── RepoCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── UserProfile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aman-Sharma-0007/RFT-INTERNSHIP-FRONTEND/tree/main/Day-12
cd github-userfinder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open in browser

```txt
http://localhost:5173
```

## 🌐 API Used

- GitHub REST API:

```txt
https://api.github.com/users/{username}
```

- GitHub Repos API:

```txt
https://api.github.com/users/{username}/repos
```

## 📚 Concepts Practiced

- API Integration (`fetch`)
- Conditional Rendering
- React Router DOM (`useParams`, `useNavigate`)
- Dynamic Data Rendering
- `useState` & `useEffect` Hooks

## Author

**Aman Sharma**
-Gmail: garvitajain.in@gmail.com



---
