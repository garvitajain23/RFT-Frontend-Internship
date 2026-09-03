import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

export default function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);
  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const t = setTimeout(next, 4000);
    return () => clearTimeout(t);
  }, [current, next]);

  return (
    <div className="slider">
      <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${title} ${i + 1}`} loading="lazy" />
        ))}
      </div>
      <button className="slider-btn prev" onClick={prev} aria-label="Previous">‹</button>
      <button className="slider-btn next" onClick={next} aria-label="Next">›</button>
      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}