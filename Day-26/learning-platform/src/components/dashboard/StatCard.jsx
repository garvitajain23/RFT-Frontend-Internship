import React from 'react';

export default function StatCard({ icon, label, value, color = 'var(--accent-light)' }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      transition: 'var(--transition)',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        width: '48px', height: '48px',
        borderRadius: '12px',
        background: 'var(--accent-glow)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '22px', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-display)', color }}>{value}</p>
        <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '2px' }}>{label}</p>
      </div>
    </div>
  );
}