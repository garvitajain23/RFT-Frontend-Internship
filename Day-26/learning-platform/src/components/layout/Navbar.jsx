import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import { user } from '../../data/user';

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: '64px',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      zIndex: 100,
      gap: '16px',
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: '700',
        fontSize: '20px',
        color: 'var(--accent-light)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexShrink: 0,
      }}>
        ⚡ LearnFlow
      </Link>

      <div style={{ flex: 1 }}>
        <div style={{
          maxWidth: '400px',
          position: 'relative',
        }}>
          <input
            placeholder="Search courses..."
            style={{
              width: '100%',
              padding: '8px 16px 8px 36px',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '14px',
            }}
          />
          <span style={{
            position: 'absolute', left: '12px', top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-dim)',
            fontSize: '14px',
          }}>🔍</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <Link to="/profile">
          <img
            src={user.avatar}
            alt="avatar"
            style={{
              width: '36px', height: '36px',
              borderRadius: '50%',
              border: '2px solid var(--accent)',
              background: 'var(--bg-card)',
            }}
          />
        </Link>
      </div>
    </nav>
  );
}