import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSection.css';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const fmt = (n) => n >= 100000
  ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
  : `₹${n.toLocaleString('en-IN')}`;

export default function MapSection({ properties, onSelect }) {
  const [active, setActive] = useState(null);

  return (
    <section className="map-section" id="map">
      <div className="container">
        <div className="section-head">
          <h2>Properties on Map</h2>
          <p>Click a marker to explore</p>
        </div>
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: '500px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {properties.map(p => (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              icon={goldIcon}
              eventHandlers={{ click: () => setActive(p) }}
            >
              <Popup>
                <div className="map-popup">
                  <img src={p.images[0]} alt={p.title} />
                  <div className="popup-body">
                    <strong>{p.title}</strong>
                    <span>{fmt(p.price)}{p.status === 'For Rent' ? '/mo' : ''}</span>
                    <button onClick={() => onSelect(p)}>View Details</button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}