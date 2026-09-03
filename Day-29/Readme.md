# EstateX — Real Estate Property Listing Website

> Day 29 of my Frontend Internship at GyanSetu 

A fully responsive real estate listing web app built with React + Vite.

## Features

- 🏠 Property listing grid with live search and filters
- 🗺️ Interactive map with property markers (OpenStreetMap + Leaflet)
- 🖼️ Auto-playing image slider on each property
- 🌙 Dark mode with localStorage persistence
- 📋 Property detail modal with agent contact info
- 📬 Contact agent form
- 📱 Fully responsive — mobile, tablet, desktop

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| react-leaflet | Interactive map |
| Leaflet.js | Map engine |
| CSS Variables | Theming + dark mode |
| Google Fonts | Playfair Display + Inter |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Aman-Sharma-0007/Day-29.git
cd real-estate

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Folder Structure

real-estate/
├── index.html
├── vite.config.js
├── public/
└── src/
├── App.jsx
├── main.jsx
├── index.css
├── data/
│ └── properties.js # All property data
├── hooks/
│ └── useTheme.js # Dark mode hook
└── components/
├── Navbar.jsx # Sticky nav + dark mode toggle
├── Hero.jsx # Full-screen landing hero
├── SearchFilter.jsx # Search + filter bar
├── PropertyGrid.jsx # Responsive property grid
├── PropertyCard.jsx # Individual property card
├── PropertyModal.jsx # Property detail popup
├── ImageSlider.jsx # Auto-playing image carousel
├── MapSection.jsx # Leaflet map with markers
├── ContactForm.jsx # Contact agent form
└── Footer.jsx



## What I Learned

- Managing shared state (filters, selected property) in React
- Integrating third-party map libraries with Vite
- Fixing duplicate React instance issues with Vite's `dedupe`
- Building a consistent design system with CSS variables
- Dark mode using `data-theme` attributes and `localStorage`

---

Built by **Aman** · RFT Frontend Internship · Day 29
