import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonList({ lessons, courseId }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {lessons.map((lesson, index) => (
        <Link
          key={lesson.id}
          to={`/courses/${courseId}/lesson/${lesson.id}`}
          style={{ textDecoration: 'none' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            transition: 'var(--transition)',
            cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: lesson.completed ? 'var(--success)' : 'var(--bg-hover)',
              color: lesson.completed ? '#fff' : 'var(--text-dim)',
              fontSize: '13px', fontWeight: '700',
            }}>
              {lesson.completed ? '✓' : index + 1}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', color: lesson.completed ? 'var(--text-dim)' : 'var(--text-primary)', fontWeight: '500' }}>
                {lesson.title}
              </p>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-dim)', flexShrink: 0 }}>{lesson.duration}</span>
            <span style={{ fontSize: '18px' }}>▶</span>
          </div>
        </Link>
      ))}
    </div>
  );
}