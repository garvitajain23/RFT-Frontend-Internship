import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

export default function PropertyGrid({ properties, onSelect }) {
  return (
    <section className="grid-section" id="properties">
      <div className="container">
        <div className="section-head">
          <h2>Available Properties</h2>
          <p>{properties.length} listing{properties.length !== 1 ? 's' : ''} found</p>
        </div>

        {properties.length === 0 ? (
          <div className="empty-state">
            <p>No properties match your search. Try adjusting the filters.</p>
          </div>
        ) : (
          <div className="property-grid">
            {properties.map(p => (
              <PropertyCard key={p.id} property={p} onClick={onSelect} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}