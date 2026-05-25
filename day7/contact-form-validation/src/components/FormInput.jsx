// Reusable Input Component

// This component helps us avoid repeating code.
// In professional React apps, reusable components are very important.

function FormInput({ label, type, name, value, onChange, error, placeholder }) {
  return (
    <div className="form-group">
      {/* Input Label */}
      <label>{label}</label>

      {/*
        Controlled Input

        value comes from React state.
        onChange updates the state.

        React fully controls this input.

        This is called a CONTROLLED COMPONENT.
      */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {/*
        Dynamic Error Message

        This will only show if error exists.
      */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FormInput;
