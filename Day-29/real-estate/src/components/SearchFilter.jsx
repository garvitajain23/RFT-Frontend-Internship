import { useState } from 'react';
import { propertyTypes, statusOptions } from '../data/properties';
import './SearchFilter.css';

export default function SearchFilter({ onFilter }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All Types');
  const [status, setStatus] = useState('All Status');
  const [maxPrice, setMaxPrice] = useState('');

  const apply = () => onFilter({ query, type, status, maxPrice: maxPrice ? Number(maxPrice) : null });
  const reset = () => {
    setQuery(''); setType('All Types'); setStatus('All Status'); setMaxPrice('');
    onFilter({ query: '', type: 'All Types', status: 'All Status', maxPrice: null });
  };

  return (
    <section className="search-section" id="search">
      <div className="container">
        <div className="search-card">
          <div className="search-row">
            <div className="search-field grow">
              <label>Location or keyword</label>
              <input
                type="text"
                placeholder="e.g. Mumbai, penthouse, Bandra…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && apply()}
              />
            </div>
            <div className="search-field">
              <label>Type</label>
              <select value={type} onChange={e => setType(e.target.value)}>
                {propertyTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="search-field">
              <label>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)}>
                {statusOptions.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="search-field">
              <label>Max Price (₹)</label>
              <input
                type="number"
                placeholder="Any"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="search-actions">
            <button className="btn-primary" onClick={apply}>Search</button>
            <button className="btn-outline" onClick={reset}>Clear</button>
          </div>
        </div>
      </div>
    </section>
  );
}