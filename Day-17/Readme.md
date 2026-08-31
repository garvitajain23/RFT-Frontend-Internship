# ShopCart — E-Commerce Cart System

A simple e-commerce frontend built with React and Vite. Features product listing, add to cart, quantity controls, and order summary.

## Tech Stack

- React 18
- Vite
- React Router DOM
- Context API (state management)

## Features

- Browse products on the home page
- Add items to cart / increase quantity with one click
- Cart page with quantity controls and remove option
- Live cart count badge in navbar
- Order summary with total price
- Empty cart state with redirect

## Getting Started

**Install dependencies**
```bash
npm install
```

**Start development server**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

## Project Structure
src/
├── components/
│   ├── Navbar.jsx       # Top nav with cart badge
│   ├── ProductCard.jsx  # Single product tile
│   └── CartItem.jsx     # Cart row with qty controls
├── context/
│   └── CartContext.jsx  # Global cart state
├── data/
│   └── products.js      # Static product list
├── pages/
│   ├── Home.jsx         # Product listing page
│   └── Cart.jsx         # Cart + order summary
├── App.jsx
└── main.jsx

## Concepts Covered

- State management with Context API and useContext
- Component hierarchy and prop flow
- React Router DOM for client-side routing
- Conditional rendering
- Array methods (map, filter, reduce) for cart logic

## Routes

| Path | Page |
|------|------|
| `/` | Product listing |
| `/cart` | Cart and order summary |

## Bonus

To enable cart persistence across page refreshes, update `CartContext.jsx`:

```js
// Replace useState initializer
const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
});

// Add after state declaration
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
```

---

Made as part of the GOW AI Academy RFT Frontend Internship — Day 17.