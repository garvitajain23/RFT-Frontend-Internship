// main.jsx — This is the STARTING POINT of your entire React app
// React needs to "mount" (attach) itself to an HTML element
// It finds the <div id="root"> in index.html and takes control of it

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // Global styles
import App from "./App.jsx"; // Our main App component

// createRoot: React 18's way to attach your app to the HTML
// document.getElementById('root') = finds <div id="root"> in index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode = helps catch bugs during development (shows warnings) */}
    <App />
  </StrictMode>,
);
