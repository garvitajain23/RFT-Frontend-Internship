import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: '🏠', label: 'Home', path: '/' },
  { icon: '📚', label: 'Courses', path: '/courses' },
  { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '👤', label: 'Profile', path: '/profile' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside style={{
      position: 'fixed',
      left: 0, top: '64px', bottom: 0,
      width: '260px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      zIndex: 90,
      overflowY: 'auto',
    }}>
      <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-dim)', letterSpacing: '0.08em', padding: '0 12px', marginBottom: '8px', textTransform: 'uppercase' }}>
        Navigation
      </p>
      {navItems.map(item => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              fontWeight: active ? '600' : '400',
              color: active ? 'var(--accent-light)' : 'var(--text-muted)',
              background: active ? 'var(--accent-glow)' : 'transparent',
              transition: 'var(--transition)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--bg-hover)'; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}

      <div style={{ marginTop: 'auto', padding: '16px 12px', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '6px' }}>Daily Streak 🔥</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '28px', color: 'var(--warning)' }}>12 days</p>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>Keep it going!</p>
      </div>
    </aside>
  );
}