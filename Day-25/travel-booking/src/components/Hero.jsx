function Hero() {
  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Plan your next trip with ease</p>
        <h1>Discover Places Worth Traveling For</h1>
        <p className="hero-subtext">
          Handpicked destinations, transparent pricing, and packages built around
          how you actually like to travel.
        </p>
        <button className="btn-primary" onClick={scrollToDestinations}>
          Explore Destinations
        </button>
      </div>
    </section>
  );
}

export default Hero;