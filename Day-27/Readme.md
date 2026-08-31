# 🏋️ Fitness Tracking Dashboard

A responsive fitness tracking dashboard built with **React + Vite** and **Recharts**. Built as Day 27 of the RFT Frontend Internship.

## 📸 Features

- **Daily Activity Cards** — Steps, Calories, Active Minutes, Distance
- **Weekly Progress Charts** — Bar chart for steps, Line chart for calories burned
- **Animated Progress Rings** — SVG rings for daily goal tracking
- **Workout History** — Recent sessions with type badges and calorie info
- **BMI Calculator** — Live BMI with color-coded result and scale
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Dark Mode** — Dark by default, easy on the eyes

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite | Build tool & dev server |
| Recharts | Charts (bar, line) |
| CSS Variables | Theming & dark mode |
| SVG | Animated progress rings |

## 📁 Folder Structure

```
fitness-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ActivityCards.jsx     # 4 daily stat cards
│   │   ├── BMICalculator.jsx     # Live BMI with scale
│   │   ├── CaloriesTracker.jsx   # Progress rings layout
│   │   ├── ProgressRing.jsx      # Animated SVG ring
│   │   ├── WeeklyChart.jsx       # Steps + calories charts
│   │   └── WorkoutHistory.jsx    # Workout log list
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```powershell
npm create vite@latest fitness-dashboard -- --template react
cd fitness-dashboard
npm install
npm install recharts
```

### Create component files

```powershell
New-Item -ItemType Directory -Path "src/components"
New-Item -ItemType File -Path "src/components/ActivityCards.jsx"
New-Item -ItemType File -Path "src/components/BMICalculator.jsx"
New-Item -ItemType File -Path "src/components/CaloriesTracker.jsx"
New-Item -ItemType File -Path "src/components/ProgressRing.jsx"
New-Item -ItemType File -Path "src/components/WeeklyChart.jsx"
New-Item -ItemType File -Path "src/components/WorkoutHistory.jsx"
```

### Run the dev server

```powershell
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📊 Components Overview

### `ActivityCards`
Displays four key daily metrics — Steps, Calories, Active Minutes, and Distance — each with a distinct accent color.

### `WeeklyChart`
Two Recharts visualizations stacked vertically:
- Bar chart showing step count for each day of the week
- Line chart tracking calories burned day by day

### `ProgressRing`
Reusable animated SVG ring component. Accepts `value`, `max`, `color`, `label`, and `unit` as props. Animates from 0 on mount using a CSS transition.

### `CaloriesTracker`
Uses three `ProgressRing` instances to show progress toward daily Calories Burned, Intake, and Exercise goals.

### `WorkoutHistory`
A scrollable list of recent workout sessions. Each entry shows the workout name, date, duration, calorie burn, and a color-coded type badge (Cardio / Strength / Flexibility).

### `BMICalculator`
Accepts height (cm) and weight (kg) as inputs. Computes BMI in real time and displays the result with a category label and a color-scaled gradient bar.

## 🎨 Design Tokens

```css
--bg:      #0F172A   /* Page background   */
--surface: #1E293B   /* Card background   */
--border:  #334155   /* Card borders      */
--sky:     #38BDF8   /* Steps / Intake    */
--green:   #34D399   /* Active / Normal   */
--pink:    #F472B6   /* Calories          */
--amber:   #FBBF24   /* Distance / Over   */
--red:     #F87171   /* Obese BMI range   */
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 768px | 4-column stats, 2:1 chart/sidebar grid |
| ≤ 768px | 2-column stats, single column layout |
| ≤ 480px | 2-column stats maintained |

