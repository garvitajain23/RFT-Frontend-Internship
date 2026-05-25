import { useState } from "react";

// Reusable Input Component
import FormInput from "./FormInput";

// Validation Functions
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../utils/validation";

// CSS
import "../styles/Form.css";

function ContactForm() {
  // =====================================
  // FORM STATE
  // =====================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // =====================================
  // ERROR STATE
  // =====================================

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update form values
    setFormData({
      ...formData,
      [name]: value,
    });

    let errorMessage = "";

    // Dynamic validation
    if (name === "name") {
      errorMessage = validateName(value);
    }

    if (name === "email") {
      errorMessage = validateEmail(value);
    }

    if (name === "password") {
      errorMessage = validatePassword(value);
    }

    // Update errors
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  // =====================================
  // VALIDATE FORM
  // =====================================

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    setErrors(newErrors);

    // Check if all errors are empty
    return Object.values(newErrors).every((error) => error === "");
  };

  // =====================================
  // HANDLE SUBMIT
  // =====================================

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      alert("Form Submitted Successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Clear errors
      setErrors({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  // =====================================
  // CHECK IF FORM IS VALID
  // =====================================

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    !errors.name &&
    !errors.email &&
    !errors.password;

  // =====================================
  // UI
  // =====================================

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your name"
        />

        {/* Email Input */}
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
        />

        {/* Submit Button */}
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
