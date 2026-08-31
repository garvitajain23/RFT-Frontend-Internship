import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  const { id, name, image, price, rating, duration, tag } = destination;

  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={image} alt={name} className="card-image" loading="lazy" />
        <span className="card-tag">{tag}</span>
      </div>

      <div className="card-body">
        <div className="card-top-row">
          <h3>{name}</h3>
          <span className="card-rating">★ {rating}</span>
        </div>
        <p className="card-duration">{duration}</p>

        <div className="card-bottom-row">
          <span className="card-price">₹{price.toLocaleString()}</span>
          <Link to={`/package/${id}`} className="btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;