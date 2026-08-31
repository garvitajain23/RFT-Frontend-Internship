import React from 'react';
import { user } from '../data/user';
import { courses } from '../data/courses';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Footer from '../components/layout/Footer';

export default function Profile() {
  const completed = courses.filter(c => user.enrolledCourseIds.includes(c.id) && c.progress === 100);
  const enrolled = courses.filter(c => user.enrolledCourseIds.includes(c.id));

  return (
    <div className="page-wrapper">
      {/* Profile header */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        marginBottom: '32px',
        flexWrap: 'wrap',
      }}>
        <img src={user.avatar} alt="avatar" style={{
          width: '88px', height: '88px',
          borderRadius: '50%',
          border: '3px solid var(--accent)',
          background: 'var(--bg-secondary)',
        }} />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '24px', marginBottom: '4px' }}>{user.name}</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px', marginBottom: '12px' }}>{user.email}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 Joined {user.joinDate}</span>
            <span style={{ fontSize: '13px', color: 'var(--warning)' }}>🔥 {user.streak} day streak</span>
            <span style={{ fontSize: '13px', color: 'var(--accent-light)' }}>⏱ {user.totalHours}h learned</span>
          </div>
        </div>
        <Button variant="outline">Edit Profile</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Stats */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '17px', marginBottom: '20px' }}>Learning Stats</h2>
          {[
            { label: 'Courses Enrolled', value: enrolled.length, icon: '📚' },
            { label: 'Courses Completed', value: completed.length, icon: '✅' },
            { label: 'Certificates Earned', value: user.certificates, icon: '🏆' },
            { label: 'Total Hours Learned', value: `${user.totalHours}h`, icon: '⏱' },
          ].map(s => (
            <div key={s.label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{s.icon} {s.label}</span>
              <span style={{ fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--accent-light)' }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* Completed / Certificates */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '17px', marginBottom: '20px' }}>Certificates 🏆</h2>
          {completed.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-dim)' }}>
              <p style={{ fontSize: '32px' }}>🎯</p>
              <p style={{ marginTop: '10px', fontSize: '14px' }}>Complete a course to earn your first certificate!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {completed.map(c => (
                <div key={c.id} style={{
                  padding: '14px', borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-hover)', border: '1px solid var(--border)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '500' }}>{c.title}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>{c.instructor}</p>
                  </div>
                  <Badge label={c.category} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}