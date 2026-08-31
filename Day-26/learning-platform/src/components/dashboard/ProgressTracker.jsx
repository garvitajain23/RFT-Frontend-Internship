import React from 'react';
import { courses } from '../../data/courses';
import { user } from '../../data/user';
import ProgressRing from '../ui/ProgressRing';

export default function ProgressTracker() {
  const enrolled = courses.filter(c => user.enrolledCourseIds.includes(c.id));

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px',
    }}>
      <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>Course Progress</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {enrolled.map(course => (
          <div key={course.id} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <ProgressRing percent={course.progress} size={56} stroke={5} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {course.title}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>
                {Math.round((course.progress / 100) * course.lessons)}/{course.lessons} lessons
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}