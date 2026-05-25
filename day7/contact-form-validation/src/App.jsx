// Importing the main Contact Form component
import ContactForm from "./components/ContactForm";

function App() {
  return (
    // Main container of the application
    <div className="app-container">
      {/* Main heading */}
      <h1>React Contact Form Validation</h1>

      {/* Contact form component */}
      <ContactForm />
    </div>
  );
}

// Exporting App so it can be used in main.jsx
export default App;
