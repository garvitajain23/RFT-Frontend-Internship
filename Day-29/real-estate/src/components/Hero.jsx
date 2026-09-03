import './Hero.css';

export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&auto=format&fit=crop"
          alt="Luxury property"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Premium Real Estate in India</p>
          <h1>Find the home<br />you've earned.</h1>
          <p className="hero-sub">
            Curated properties across Mumbai, Delhi, Bengaluru and beyond —
            presented by agents who know every room.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scroll('properties')}>
              Browse Properties
            </button>
            <button className="btn-ghost" onClick={() => scroll('contact')}>
              Talk to an Agent
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">340+</span>
            <span className="stat-label">Active Listings</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">12</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}