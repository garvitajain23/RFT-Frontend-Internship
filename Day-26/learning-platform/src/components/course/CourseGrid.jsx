import React from 'react';
import CourseCard from './CourseCard';
import SkeletonCard from '../ui/SkeletonCard';
import { useSkeleton } from '../../hooks/useSkeleton';

export default function CourseGrid({ courses }) {
  const loading = useSkeleton(1200);

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  };

  if (loading) {
    return (
      <div style={grid}>
        {Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  return (
    <div style={grid}>
      {courses.map(course => <CourseCard key={course.id} course={course} />)}
    </div>
  );
}