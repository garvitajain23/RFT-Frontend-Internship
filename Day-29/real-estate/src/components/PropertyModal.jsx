import { useEffect } from 'react';
import ImageSlider from './ImageSlider';
import './PropertyModal.css';

const fmt = (n) => n >= 100000
  ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
  : `₹${n.toLocaleString('en-IN')}`;

export default function PropertyModal({ property, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); };
  }, [onClose]);

  if (!property) return null;

  const contactScroll = () => {
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <ImageSlider images={property.images} title={property.title} />

        <div className="modal-body">
          <div className="modal-header">
            <div>
              <span className={`p-badge ${property.status === 'For Sale' ? 'sale' : 'rent'}`}>
                {property.status}
              </span>
              <h2>{property.title}</h2>
              <p className="modal-loc">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {property.location}
              </p>
            </div>
            <div className="modal-price">
              {fmt(property.price)}
              {property.status === 'For Rent' && <small>/mo</small>}
            </div>
          </div>

          <div className="modal-specs">
            <div className="spec"><strong>{property.beds}</strong><span>Bedrooms</span></div>
            <div className="spec"><strong>{property.baths}</strong><span>Bathrooms</span></div>
            <div className="spec"><strong>{property.area.toLocaleString()}</strong><span>Sq Ft</span></div>
            <div className="spec"><strong>{property.type}</strong><span>Type</span></div>
          </div>

          <p className="modal-desc">{property.description}</p>

          <div className="modal-agent">
            <div className="agent-avatar">{property.agent.name[0]}</div>
            <div className="agent-info">
              <p className="agent-name">{property.agent.name}</p>
              <p className="agent-detail">{property.agent.phone}</p>
              <p className="agent-detail">{property.agent.email}</p>
            </div>
            <div className="agent-actions">
              <a href={`tel:${property.agent.phone}`} className="btn-primary">Call Agent</a>
              <button className="btn-outline" onClick={contactScroll}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}