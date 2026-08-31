import React from 'react';

export default function VideoPlayer({ videoId, title }) {
  return (
    <div style={{
      background: '#000',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      aspectRatio: '16/9',
      border: '1px solid var(--border)',
    }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block' }}
      />
    </div>
  );
}