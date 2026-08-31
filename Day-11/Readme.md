# ⛅ WeatherApp — Day 11 | GOW AI Academy RFT Frontend Internship

A real-time weather application built with React.js, Vite, and the OpenWeatherMap API.

---

## 🚀 Tech Stack

- **React.js** — UI & component logic
- **Vite** — Fast development build tool
- **React Router DOM** — Client-side routing
- **OpenWeatherMap API** — Live weather data
- **CSS-in-JS** — Inline styles with CSS variables

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature, feels like, humidity, wind speed, visibility
- 🎨 Dynamic background changes based on weather condition
- ⛅ Weather condition icons (emoji-based)
- ⏳ Loading indicator while fetching
- ⚠️ Error handling for invalid city / bad API key
- 🏙️ Auto-loads weather for Chandigarh on startup

---

## 📁 Folder Structure

weather-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── SearchBar.jsx
│ │ ├── WeatherCard.jsx
│ │ └── Loader.jsx
│ ├── pages/
│ │ └── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
└── vite.config.js

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/garvitajain23/RFT-Backend-internship/Day-11.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the root directory and add:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your free key at 👉 https://openweathermap.org/api

### 4. Run the app

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 Dependencies

```bash
npm install react-router-dom
```

| Package          | Version |
| ---------------- | ------- |
| react            | ^18.x   |
| react-dom        | ^18.x   |
| react-router-dom | ^6.x    |
| vite             | ^5.x    |

---

## 🧠 Concepts Practiced

| Concept             | Where Used                                 |
| ------------------- | ------------------------------------------ |
| `useState`          | City, weather data, loading, error state   |
| `useEffect`         | Auto-fetch weather on component mount      |
| API Fetching        | OpenWeatherMap REST API via `fetch()`      |
| State Updates       | Dynamic UI on user search action           |
| React Router DOM    | `BrowserRouter`, `Routes`, `Route`, `Link` |
| Component Structure | Navbar, SearchBar, WeatherCard, Loader     |
| Error Handling      | 404 city not found, 401 invalid API key    |

---

## 🌐 API Used

**OpenWeatherMap — Current Weather Data**

```http
GET https://api.openweathermap.org/data/2.5/weather
?q={city}
&appid={API_KEY}
&units=metric
```

---

## 📸 Project Preview

> Search any city and get live weather with dynamic UI that changes based on the condition.

---

## 📌 Internship Info

- 🏫 **Academy:** GOW AI Academy
- 📅 **Day:** 11 of RFT Frontend Internship
- 🔖 **Project:** WeatherApp
- 📂 **Repo:** `rftinternship`

---

## 🔗 Connect

-Gmail: amanshonak16@gmail.com

Hashtags: `#gowaiacademy` `#rftinternship` `#reactjs` `#weatherapp` `#webdevelopment`

---
