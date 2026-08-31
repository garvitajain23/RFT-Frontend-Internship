import React from 'react';
import { user } from '../../data/user';

export default function ActivityFeed() {
  const max = Math.max(...user.activity.map(a => a.minutes));

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px',
    }}>
      <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>This Week's Activity</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '80px' }}>
        {user.activity.map(day => (
          <div key={day.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
            <div
              style={{
                width: '100%',
                height: `${(day.minutes / max) * 100}%`,
                background: day.minutes > 60 ? 'var(--accent)' : 'var(--border-light)',
                borderRadius: '4px 4px 0 0',
                minHeight: '6px',
                transition: 'height 0.8s ease',
              }}
              title={`${day.minutes} min`}
            />
            <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{day.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}