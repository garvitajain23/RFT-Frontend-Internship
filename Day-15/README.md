# 🎲 Random User Generator

> **GOW AI Academy — RFT Frontend Internship | Day 15 Project**

---

## 📌 Project Overview

A React-based web application that fetches and displays random user profiles using the [RandomUser.me API](https://randomuser.me/). Users can generate single or multiple profiles, view their details, and save them to a list.

---

## 🎯 Concepts Practiced

- ✅ API Integration & Re-fetching
- ✅ Dynamic UI Updates with React State
- ✅ Component-based Architecture
- ✅ React Router DOM (v6)
- ✅ Conditional Rendering
- ✅ Bonus: Generate Multiple Users & Save List

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend framework & build tool |
| React Router DOM | Client-side routing |
| RandomUser.me API | Random user data source |
| CSS3 | Styling & layout |

---

## 📁 Folder Structure

```
random-user-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── UserCard.jsx       # Single user profile card
│   │   └── UserList.jsx       # Saved users list
│   ├── pages/
│   │   └── Home.jsx           # Main page with controls
│   ├── App.jsx                # Route definitions
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point with BrowserRouter
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/Aman-Sharma-0007/RFT-INTERNSHIP-FRONTEND/tree/main/Day-15

# 2. Navigate into the project
cd random-user-generator

# 3. Install dependencies
npm install

# 4. Install React Router DOM
npm install react-router-dom

# 5. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✨ Features

### Core Features
- **Generate User** — Fetches a random user from the API on button click
- **Profile Display** — Shows name, email, profile image, and location
- **Re-fetch** — Click "Generate User" again to load a new profile

### Bonus Features
- **Generate Multiple Users** — Use the number input (1–10) to fetch multiple users at once
- **Save List** — Save currently displayed users to a persistent saved section below

---

## 🔌 API Used

**RandomUser.me** — Free, open-source random user data API

```
GET https://randomuser.me/api/?results={count}
```

**Data used from response:**
- `name.first`, `name.last`
- `email`
- `picture.large`
- `location.city`, `location.country`

---

## 📸 How to Use

1. Open the app in your browser
2. (Optional) Change the number input to generate more than 1 user
3. Click **"Generate User"** to fetch random profiles
4. Click **"Save to List"** to append current users to the saved section
5. Click **"Generate User"** again to re-fetch new profiles

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---



## 📢 Internship Submission Checklist

- [ ] Task completed before 11 PM
- [ ] Code pushed to GitHub (`rftinternship` repository)
- [ ] Commit message is descriptive (e.g. `Day 15: Random User Generator with API fetch`)
- [ ] LinkedIn post with day number, learning, GitHub link, project video
- [ ] Hashtags added: `#gowaiacademy` `#rftinternship`
- [ ] Form submitted before deadline

---

## 👨‍💻 Author

**Aman Sharma**

-Gmail: amanshonak16@gmail.com



