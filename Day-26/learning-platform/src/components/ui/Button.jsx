import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', onClick, style, disabled }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition)',
    border: 'none',
    opacity: disabled ? 0.5 : 1,
  };

  const sizes = {
    sm: { padding: '6px 14px', fontSize: '13px' },
    md: { padding: '10px 20px', fontSize: '14px' },
    lg: { padding: '14px 28px', fontSize: '16px' },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent-light)',
      border: '1px solid var(--accent)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
    },
    danger: {
      background: 'var(--danger)',
      color: '#fff',
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseEnter={e => {
        if (!disabled && variant === 'primary') e.target.style.background = '#6D28D9';
        if (!disabled && variant === 'outline') e.target.style.background = 'var(--accent-glow)';
      }}
      onMouseLeave={e => {
        if (!disabled && variant === 'primary') e.target.style.background = 'var(--accent)';
        if (!disabled && variant === 'outline') e.target.style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
}