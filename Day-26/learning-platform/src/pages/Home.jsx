import React from 'react';
import { Link } from 'react-router-dom';
import CourseGrid from '../components/course/CourseGrid';
import { courses } from '../data/courses';
import { user } from '../data/user';
import Button from '../components/ui/Button';
import Footer from '../components/layout/Footer';

export default function Home() {
  const featured = courses.slice(0, 3);
  const inProgress = courses.filter(c => user.enrolledCourseIds.includes(c.id) && c.progress > 0 && c.progress < 100);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '48px 40px',
        marginBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <p style={{ fontSize: '13px', color: 'var(--accent-light)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Welcome back 👋
        </p>
        <h1 style={{ fontSize: '36px', fontFamily: 'var(--font-display)', marginBottom: '12px', lineHeight: '1.2' }}>
          Hello, {user.name.split(' ')[0]}.<br />
          <span style={{ color: 'var(--accent-light)' }}>Ready to learn today?</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '28px', maxWidth: '480px' }}>
          You're on a {user.streak}-day streak. Keep the momentum going — your next lesson is waiting.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/courses">
            <Button size="lg">Browse Courses →</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" size="lg">My Dashboard</Button>
          </Link>
        </div>
      </div>

      {/* Continue Learning */}
      {inProgress.length > 0 && (
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px' }}>Continue Learning</h2>
            <Link to="/dashboard" style={{ fontSize: '14px', color: 'var(--accent-light)' }}>View all →</Link>
          </div>
          <CourseGrid courses={inProgress} />
        </section>
      )}

      {/* Featured */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px' }}>Featured Courses</h2>
          <Link to="/courses" style={{ fontSize: '14px', color: 'var(--accent-light)' }}>See all →</Link>
        </div>
        <CourseGrid courses={featured} />
      </section>

      <Footer />
    </div>
  );
}