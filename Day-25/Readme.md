# 🌍 Wanderly — Travel Booking Website

A clean and responsive **Travel Booking Website UI** built with **React.js and Vite** as part of my RFT Frontend Internship Journey — Day 25.

The website allows users to explore travel destinations, search and filter packages, view package details, and submit a booking request.


## 📌 Features

* 🏝️ Hero Section with travel call-to-action
* 🌍 Popular destination cards
* 🔎 Search destinations
* 🏷️ Filter destinations by category
* ↕️ Sort packages by price and rating
* 📦 Package Details Page
* 📝 Booking Form
* ⭐ Customer Testimonials
* 🌙 Dark Mode
* 📱 Fully Responsive Design
* 🔗 React Router navigation
* ✨ Smooth scrolling
* ✅ Booking confirmation message after form submission

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript**
* **React Router DOM**
* **CSS3**
* **Unsplash** — Destination Images
* **CSS Variables** — Theme management

## 📂 Project Structure

```text
travel-booking/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationGrid.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BookingForm.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── PackageDetails.jsx
│   │
│   ├── data/
│   │   └── destinations.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash

```

### 2. Navigate to the Project

```bash
cd travel-booking
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 📦 Dependencies

The project uses React Router for page navigation.

Install it using:

```bash
npm install react-router-dom
```

## 🧭 Main Pages

### 🏠 Home Page

The home page contains:

* Navigation bar
* Hero section
* Destination search
* Category filters
* Sorting options
* Destination cards
* Testimonials
* Footer

### 📦 Package Details

Each destination has its own details page.

Example:

```text
/package/1
/package/2
/package/3
```

The page displays:

* Destination image
* Package price
* Rating
* Duration
* Description
* Highlights
* Booking form

## 🔎 Search & Filter

Users can search destinations by name.

Example:

```text
Manali
Goa
Jaipur
Kerala
Ladakh
```

Users can also filter packages by categories such as:

```text
Mountains
Beach
Heritage
Nature
Adventure
```

Packages can be sorted by:

* Price: Low to High
* Price: High to Low
* Rating

## 🌙 Dark Mode

The website includes a dark mode toggle in the navigation bar.

The theme is implemented using CSS variables and React state.

```text
Light Mode ☀️
Dark Mode  🌙
```

## 📱 Responsive Design

The website is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

CSS media queries are used to adapt the layout for smaller screens.

## 📝 Booking Form

Users can submit a booking request by entering:

* Full Name
* Email
* Phone Number
* Number of Travelers
* Travel Date

After submission, a confirmation message is displayed.

> Note: This is a frontend UI project. The booking form does not currently connect to a backend or payment gateway.

## 🏝️ Destinations Included

The current project includes:

| Destination       | Category  |   Price |
| ----------------- | --------- | ------: |
| Manali            | Mountains | ₹12,999 |
| Goa               | Beach     |  ₹9,999 |
| Jaipur            | Heritage  |  ₹8,499 |
| Kerala Backwaters | Nature    | ₹15,999 |
| Ladakh            | Adventure | ₹18,999 |
| Andaman Islands   | Beach     | ₹21,999 |

## 🎨 Design Approach

The design intentionally focuses on a clean and practical travel interface rather than excessive animations or visual effects.

The UI uses:

* Minimal card designs
* Simple navigation
* Consistent spacing
* Responsive grids
* Subtle borders and shadows
* Clean typography
* Simple color palette
* Dark mode support

## 🧠 What I Learned

Through this project, I practiced:

* React component creation
* React state management
* React Router
* Dynamic routes
* Props
* Array methods such as `map()`, `filter()`, and `sort()`
* Search functionality
* Filtering and sorting
* Form handling
* Conditional rendering
* Responsive CSS
* Dark mode implementation
* Organizing a React project using reusable components

## 🔮 Future Improvements

Some features that can be added in the future:

* 🔐 User authentication
* 💳 Online payment integration
* 🗄️ Backend API
* 📊 Admin dashboard
* 🧾 Booking history
* 📧 Email confirmation
* 🗺️ Interactive maps
* 🖼️ Image carousel
* ⭐ User review system
* 🔍 Advanced destination filters

## 👨‍💻 Author

**Garvita Jain**

B.Tech CSE — Artificial Intelligence & Machine Learning

### Connect With Me

* GitHub: `https://github.com/garvitajain23`


