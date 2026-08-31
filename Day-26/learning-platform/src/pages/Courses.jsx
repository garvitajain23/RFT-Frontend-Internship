import React, { useState } from 'react';
import { courses, categories } from '../data/courses';
import CourseGrid from '../components/course/CourseGrid';
import Footer from '../components/layout/Footer';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');

  const filtered = courses.filter(c => {
    const matchCategory = activeCategory === 'All' || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLevel = levelFilter === 'All' || c.level === levelFilter;
    return matchCategory && matchSearch && matchLevel;
  });

  return (
    <div className="page-wrapper">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '6px' }}>All Courses</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{courses.length} courses available — all free</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
        <input
          placeholder="Search by title or instructor..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            padding: '10px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '14px',
            maxWidth: '400px',
          }}
        />

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'var(--transition)',
                background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              {cat}
            </button>
          ))}

          <select
            value={levelFilter}
            onChange={e => setLevelFilter(e.target.value)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              cursor: 'pointer',
              background: 'var(--bg-card)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              marginLeft: '8px',
            }}
          >
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-dim)' }}>
          <p style={{ fontSize: '40px' }}>🔍</p>
          <p style={{ fontSize: '18px', marginTop: '12px' }}>No courses found</p>
          <p style={{ fontSize: '14px', marginTop: '6px' }}>Try a different filter or search term</p>
        </div>
      ) : (
        <CourseGrid courses={filtered} />
      )}

      <Footer />
    </div>
  );
}