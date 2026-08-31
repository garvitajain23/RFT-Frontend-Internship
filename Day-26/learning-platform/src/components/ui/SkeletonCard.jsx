import React from 'react';

export default function SkeletonCard() {
  const shimmer = {
    background: 'linear-gradient(90deg, var(--bg-card) 25%, var(--bg-hover) 50%, var(--bg-card) 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.4s infinite',
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
      }}>
        <div style={{ height: '180px', ...shimmer }} />
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ height: '14px', borderRadius: '4px', width: '60%', ...shimmer }} />
          <div style={{ height: '20px', borderRadius: '4px', width: '85%', ...shimmer }} />
          <div style={{ height: '14px', borderRadius: '4px', width: '40%', ...shimmer }} />
          <div style={{ height: '8px', borderRadius: '4px', marginTop: '8px', ...shimmer }} />
        </div>
      </div>
    </>
  );
}