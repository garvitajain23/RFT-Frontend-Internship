import React from 'react';
import { courses } from '../data/courses';
import { user } from '../data/user';
import StatCard from '../components/dashboard/StatCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import CourseGrid from '../components/course/CourseGrid';
import Footer from '../components/layout/Footer';

export default function Dashboard() {
  const enrolled = courses.filter(c => user.enrolledCourseIds.includes(c.id));

  return (
    <div className="page-wrapper">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '6px' }}>Dashboard</h1>
        <p style={{ color: 'var(--text-muted)' }}>Track your learning progress</p>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <StatCard icon="🔥" label="Day Streak" value={`${user.streak}`} color="var(--warning)" />
        <StatCard icon="⏱" label="Total Hours" value={`${user.totalHours}h`} />
        <StatCard icon="📚" label="Courses Enrolled" value={enrolled.length} />
        <StatCard icon="🏆" label="Completed" value={user.completedCourses} color="var(--success)" />
        <StatCard icon="🎓" label="Certificates" value={user.certificates} />
      </div>

      {/* Middle section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <ProgressTracker />
        <ActivityFeed />
      </div>

      {/* Enrolled courses */}
      <section>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>My Courses</h2>
        <CourseGrid courses={enrolled} />
      </section>

      <Footer />
    </div>
  );
}