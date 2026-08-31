import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          transition: 'var(--transition)',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ position: 'relative' }}>
          <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', top: '10px', left: '10px',
            display: 'flex', gap: '6px',
          }}>
            <Badge label={course.category} />
            <Badge label={course.level} />
          </div>
          {course.progress === 100 && (
            <div style={{
              position: 'absolute', top: '10px', right: '10px',
              background: 'var(--success)', color: '#fff',
              fontSize: '11px', fontWeight: '700',
              padding: '3px 8px', borderRadius: '20px',
            }}>✓ Done</div>
          )}
        </div>

        <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.4' }}>
            {course.title}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>by {course.instructor}</p>

          <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
            <span>📹 {course.lessons} lessons</span>
            <span>⏱ {course.duration}</span>
            <span>⭐ {course.rating}</span>
          </div>

          {course.progress > 0 && (
            <div style={{ marginTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Progress</span>
                <span style={{ fontSize: '12px', color: 'var(--accent-light)', fontWeight: '600' }}>{course.progress}%</span>
              </div>
              <div style={{ height: '4px', background: 'var(--border-light)', borderRadius: '2px' }}>
                <div style={{
                  height: '100%',
                  width: `${course.progress}%`,
                  background: course.progress === 100 ? 'var(--success)' : 'var(--accent)',
                  borderRadius: '2px',
                  transition: 'width 0.8s ease',
                }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}