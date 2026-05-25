// =============================
// Keeping validation here makes our component cleaner.

// -----------------------------------------
// Validate Name
// -----------------------------------------
export const validateName = (name) => {
  // trim() removes extra spaces
  // Example: "   John   " becomes "John"
  if (!name.trim()) {
    return "Name is required";
  }

  // If validation passes
  return "";
};

// -----------------------------------------
// Validate Email
// -----------------------------------------
export const validateEmail = (email) => {
  // Check if email field is empty
  if (!email.trim()) {
    return "Email is required";
  }

  // Regular Expression for email validation
  // Regex checks if email format is correct
  // Example:
  // valid -> test@gmail.com
  // invalid -> testgmail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // test() checks if pattern matches
  if (!emailRegex.test(email)) {
    return "Please enter a valid email";
  }

  return "";
};

// -----------------------------------------
// Validate Password
// -----------------------------------------
export const validatePassword = (password) => {
  // Empty password check
  if (!password.trim()) {
    return "Password is required";
  }

  // Password length validation
  // Here we require minimum 6 characters
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
};
