import React from 'react';

export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'var(--bg-hover)',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'var(--transition)',
        flexShrink: 0,
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}