import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import VideoPlayer from '../components/course/VideoPlayer';
import Button from '../components/ui/Button';

export default function VideoLesson() {
  const { courseId, lessonId } = useParams();
  const course = courses.find(c => c.id === Number(courseId));
  const [currentLessonId, setCurrentLessonId] = useState(Number(lessonId));

  if (!course) return <div className="page-wrapper">Course not found.</div>;

  const lesson = course.lessonList.find(l => l.id === currentLessonId);
  const currentIndex = course.lessonList.findIndex(l => l.id === currentLessonId);
  const prevLesson = course.lessonList[currentIndex - 1];
  const nextLesson = course.lessonList[currentIndex + 1];

  return (
    <div className="page-wrapper">
      <Link to={`/courses/${courseId}`} style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
        ← Back to {course.title}
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '28px', alignItems: 'start' }}>
        {/* Video + info */}
        <div>
          <VideoPlayer videoId={lesson.videoId} title={lesson.title} />
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginBottom: '8px' }}>
              Lesson {currentIndex + 1} of {course.lessonList.length}
            </p>
            <h1 style={{ fontSize: '22px', marginBottom: '20px' }}>{lesson.title}</h1>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {prevLesson && (
                <Button variant="outline" onClick={() => setCurrentLessonId(prevLesson.id)}>
                  ← Previous
                </Button>
              )}
              {nextLesson && (
                <Button onClick={() => setCurrentLessonId(nextLesson.id)}>
                  Next Lesson →
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Lesson sidebar */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '16px',
          position: 'sticky',
          top: '88px',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dim)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Course Lessons
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {course.lessonList.map((l, idx) => (
              <div
                key={l.id}
                onClick={() => setCurrentLessonId(l.id)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  background: l.id === currentLessonId ? 'var(--accent-glow)' : 'transparent',
                  border: `1px solid ${l.id === currentLessonId ? 'var(--accent)' : 'transparent'}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { if (l.id !== currentLessonId) e.currentTarget.style.background = 'var(--bg-hover)'; }}
                onMouseLeave={e => { if (l.id !== currentLessonId) e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: l.completed ? 'var(--success)' : 'var(--border-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', color: l.completed ? '#fff' : 'var(--text-dim)',
                  flexShrink: 0, fontWeight: '700',
                }}>
                  {l.completed ? '✓' : idx + 1}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize: '13px',
                    color: l.id === currentLessonId ? 'var(--accent-light)' : 'var(--text-muted)',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    fontWeight: l.id === currentLessonId ? '600' : '400',
                  }}>
                    {l.title}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{l.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}