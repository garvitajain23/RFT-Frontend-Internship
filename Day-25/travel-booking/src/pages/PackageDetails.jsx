import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";
import BookingForm from "../components/BookingForm";

function PackageDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === Number(id));

  if (!destination) {
    return (
      <div className="container not-found">
        <h2>Package not found</h2>
        <Link to="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    );
  }

  const { name, image, price, rating, duration, description, highlights } = destination;

  return (
    <section className="section">
      <div className="container details-layout">
        <div className="details-main">
          <img src={image} alt={name} className="details-image" />

          <h1>{name}</h1>
          <div className="details-meta">
            <span>★ {rating}</span>
            <span>{duration}</span>
            <span>₹{price.toLocaleString()} / person</span>
          </div>

          <p className="details-description">{description}</p>

          <h3>Highlights</h3>
          <ul className="highlight-list">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="details-sidebar">
          <BookingForm packageName={name} />
        </div>
      </div>
    </section>
  );
}

export default PackageDetails;