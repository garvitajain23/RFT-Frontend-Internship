import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulated send — wire up EmailJS or your backend here
    await new Promise(r => setTimeout(r, 1400));
    setStatus('success');
    setTimeout(() => { setForm({ name: '', email: '', phone: '', interest: '', message: '' }); setStatus('idle'); }, 3500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-left">
          <p className="contact-eyebrow">Get in touch</p>
          <h2>Speak with an agent today</h2>
          <p className="contact-sub">
            Whether you're buying, renting, or ready to list — our team responds within one business day.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong>Head Office</strong>
                <span>14, Marine Lines, Mumbai 400 020</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <span>hello@estatex.in</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label>Full Name *</label>
              <input value={form.name} onChange={set('name')} placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label>Email *</label>
              <input type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-field">
              <label>I'm interested in</label>
              <select value={form.interest} onChange={set('interest')}>
                <option value="">Select…</option>
                <option>Buying a property</option>
                <option>Renting a property</option>
                <option>Listing my property</option>
                <option>Investment advice</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea
              value={form.message}
              onChange={set('message')}
              rows={4}
              placeholder="Tell us what you're looking for…"
              required
            />
          </div>

          <button className="btn-primary submit-btn" type="submit" disabled={status === 'sending' || status === 'success'}>
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && 'Sending…'}
            {status === 'success' && '✓ Message Sent'}
            {status === 'error' && 'Try again'}
          </button>

          {status === 'success' && (
            <p className="form-success">We'll be in touch within one business day.</p>
          )}
        </form>
      </div>
    </section>
  );
}