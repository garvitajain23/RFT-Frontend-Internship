function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Wanderly. All rights reserved.</p>
        <div className="footer-links">
          <a href="#destinations">Destinations</a>
          <a href="#testimonials">Reviews</a>
          <a href="#booking">Book Now</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;