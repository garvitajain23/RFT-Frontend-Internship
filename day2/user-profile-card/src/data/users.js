// src/data/users.js — Simulates an API response
// In a real app, this data comes from a backend API call

const users = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 24,
    role: "Frontend Developer",
    isOnline: true,
    avatar: null, // will show initials fallback
  },
  {
    id: 2,
    name: "Arjun Mehta",
    age: 27,
    role: "UI/UX Designer",
    isOnline: false,
    avatar: null,
  },
  {
    id: 3,
    name: "Neha Gupta",
    age: 22,
    role: "React Intern",
    isOnline: true,
    avatar: null,
  },
];

export default users;
