// main.jsx — This is the ENTRY POINT of every React app.
// React needs ONE root HTML element to attach itself to.
// That element is <div id="root"> in index.html
// ReactDOM.createRoot finds it and renders our <App /> inside it.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a helper that shows extra warnings during development.
  // It doesn't affect the final build.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
