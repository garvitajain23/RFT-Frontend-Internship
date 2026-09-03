import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">E</span>
          <span className="brand-name">EstateX</span>
          <p>Premium real estate across India. Curated listings, trusted agents.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            <a href="#properties">All Properties</a>
            <a href="#map">Map View</a>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Company</p>
            <a href="#contact">Contact Us</a>
            <a href="#contact">List Property</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} EstateX. Built by Aman as part of his GyanSetu Internship.</p>
        </div>
      </div>
    </footer>
  );
}