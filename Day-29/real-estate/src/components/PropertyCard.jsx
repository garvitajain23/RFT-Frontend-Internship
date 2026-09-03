import './PropertyCard.css';

const fmt = (n) => n >= 100000
  ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
  : `₹${n.toLocaleString('en-IN')}`;

export default function PropertyCard({ property, onClick }) {
  return (
    <div className="p-card" onClick={() => onClick(property)}>
      <div className="p-card-img">
        <img src={property.images[0]} alt={property.title} loading="lazy" />
        <span className={`p-badge ${property.status === 'For Sale' ? 'sale' : 'rent'}`}>
          {property.status}
        </span>
        {property.featured && <span className="p-featured">Featured</span>}
      </div>
      <div className="p-card-body">
        <div className="p-price">
          {fmt(property.price)}
          {property.status === 'For Rent' && <span>/mo</span>}
        </div>
        <h3 className="p-title">{property.title}</h3>
        <p className="p-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {property.location}
        </p>
        <div className="p-meta">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.area.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  );
}