import { useState } from "react";

function BookingForm({ packageName = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <h3>Booking Request Received ✅</h3>
        <p>
          Thanks {form.name}, we've noted your request for {packageName || "your trip"}.
          Our team will contact you at {form.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} id="booking">
      <h3>Book This Package</h3>

      <div className="form-row">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className="form-row">
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-row">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="10-digit number"
        />
      </div>

      <div className="form-row-split">
        <div className="form-row">
          <label>Travelers</label>
          <input
            type="number"
            name="travelers"
            min="1"
            value={form.travelers}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Travel Date</label>
          <input type="date" name="date" required value={form.date} onChange={handleChange} />
        </div>
      </div>

      <button type="submit" className="btn-primary full-width">
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;