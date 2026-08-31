import React from 'react';

const colorMap = {
  Frontend: { bg: 'rgba(124,58,237,0.15)', color: '#A78BFA' },
  Backend: { bg: 'rgba(16,185,129,0.15)', color: '#10B981' },
  DSA: { bg: 'rgba(245,158,11,0.15)', color: '#F59E0B' },
  Design: { bg: 'rgba(236,72,153,0.15)', color: '#EC4899' },
  Tools: { bg: 'rgba(99,102,241,0.15)', color: '#818CF8' },
  Beginner: { bg: 'rgba(16,185,129,0.15)', color: '#10B981' },
  Intermediate: { bg: 'rgba(245,158,11,0.15)', color: '#F59E0B' },
  Advanced: { bg: 'rgba(239,68,68,0.15)', color: '#EF4444' },
  Free: { bg: 'rgba(124,58,237,0.15)', color: '#A78BFA' },
};

export default function Badge({ label }) {
  const style = colorMap[label] || { bg: 'rgba(148,163,184,0.15)', color: '#94A3B8' };
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '0.03em',
      background: style.bg,
      color: style.color,
      textTransform: 'uppercase',
    }}>
      {label}
    </span>
  );
}