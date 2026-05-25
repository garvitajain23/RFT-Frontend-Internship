// main.jsx — This is the VERY FIRST file React reads.
// Think of it as the "front door" of your app.

// We import React itself — needed to understand JSX (HTML-like syntax in JS)
import React from "react";

// ReactDOM connects React to the actual browser page (the real HTML)
import ReactDOM from "react-dom/client";

// Our main App component — this is the "boss" component that holds everything
import App from "./App.jsx";

// Import global CSS styles that apply everywhere
import "./index.css";

// ReactDOM.createRoot() finds the <div id="root"> in index.html
// and tells React: "THIS is where you will live in the browser"
// .render(<App />) means: "now put the App component inside that div"
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is like a "safety inspector" — it warns you about bad practices
  // It only runs in development, not when you deploy. Very useful for learning!
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
