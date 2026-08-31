import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import VideoLesson from './pages/VideoLesson';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Sidebar />
        <main style={{ flex: 1, marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={<VideoLesson />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}