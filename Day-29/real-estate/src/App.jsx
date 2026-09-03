import { useState, useMemo } from 'react';
import { useTheme } from './hooks/useTheme';
import { properties as allProperties } from './data/properties';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import PropertyGrid from './components/PropertyGrid';
import PropertyModal from './components/PropertyModal';
import MapSection from './components/MapSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();
  const [filters, setFilters] = useState({ query: '', type: 'All Types', status: 'All Status', maxPrice: null });
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return allProperties.filter(p => {
      const q = filters.query.toLowerCase();
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q);
      const matchType = filters.type === 'All Types' || p.type === filters.type;
      const matchStatus = filters.status === 'All Status' || p.status === filters.status;
      const matchPrice = !filters.maxPrice || p.price <= filters.maxPrice;
      return matchQuery && matchType && matchStatus && matchPrice;
    });
  }, [filters]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <SearchFilter onFilter={setFilters} />
      <PropertyGrid properties={filtered} onSelect={setSelected} />
      <MapSection properties={filtered} onSelect={setSelected} />
      <ContactForm />
      <Footer />
      {selected && <PropertyModal property={selected} onClose={() => setSelected(null)} />}
    </>
  );
}