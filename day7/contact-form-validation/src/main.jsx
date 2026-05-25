// ReactDOM is used to connect React with the browser
import ReactDOM from "react-dom/client";

// Importing main App component
import App from "./App";

// Global CSS file
import "./styles/App.css";

// React creates the entire app inside the div with id="root"
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
