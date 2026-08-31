import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import LessonList from '../components/course/LessonList';
import ProgressRing from '../components/ui/ProgressRing';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));

  if (!course) return (
    <div className="page-wrapper" style={{ textAlign: 'center', paddingTop: '80px' }}>
      <p style={{ fontSize: '40px' }}>😕</p>
      <h2 style={{ marginTop: '16px' }}>Course not found</h2>
      <Link to="/courses"><Button style={{ marginTop: '20px' }}>Back to Courses</Button></Link>
    </div>
  );

  const firstLesson = course.lessonList[0];

  return (
    <div className="page-wrapper">
      <Link to="/courses" style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
        ← Back to Courses
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Badge label={course.category} />
            <Badge label={course.level} />
            <Badge label={course.price} />
          </div>

          <h1 style={{ fontSize: '28px', marginBottom: '12px', lineHeight: '1.3' }}>{course.title}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '16px' }}>{course.description}</p>

          <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: 'var(--text-dim)', marginBottom: '32px', flexWrap: 'wrap' }}>
            <span>👨‍🏫 {course.instructor}</span>
            <span>⭐ {course.rating}</span>
            <span>👥 {course.students.toLocaleString()} students</span>
            <span>📹 {course.lessons} lessons</span>
            <span>⏱ {course.duration}</span>
          </div>

          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Course Content</h2>
          <LessonList lessons={course.lessonList} courseId={course.id} />
        </div>

        {/* Right sticky card */}
        <div style={{
          position: 'sticky',
          top: '88px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
        }}>
          <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {course.progress > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ProgressRing percent={course.progress} size={64} stroke={6} />
                <div>
                  <p style={{ fontWeight: '600', fontSize: '15px' }}>{course.progress}% complete</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                    {Math.round((course.progress / 100) * course.lessons)}/{course.lessons} lessons done
                  </p>
                </div>
              </div>
            )}
            <Link to={`/courses/${course.id}/lesson/${firstLesson.id}`}>
              <Button style={{ width: '100%', justifyContent: 'center' }} size="lg">
                {course.progress > 0 ? '▶ Continue Learning' : '▶ Start Course'}
              </Button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {course.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '12px', color: 'var(--text-dim)',
                  padding: '4px 10px', background: 'var(--bg-hover)',
                  borderRadius: '4px', display: 'inline-block', width: 'fit-content',
                }}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}