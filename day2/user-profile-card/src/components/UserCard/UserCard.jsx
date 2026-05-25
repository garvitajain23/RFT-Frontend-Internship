// src/components/UserCard/UserCard.jsx
// A reusable component — one template, infinite users

import { useState } from "react";
import "./UserCard.css";

// Props destructured directly in the function parameter
function UserCard({ name, age, role, avatar, isOnline }) {
  // useState — local state for this card only
  // Each card has its OWN follow state — they don't share
  const [isFollowing, setIsFollowing] = useState(false);

  // Get initials for avatar fallback (e.g. "Priya Sharma" → "PS")
  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // Toggle follow/unfollow
  const handleFollow = () => setIsFollowing((prev) => !prev);

  return (
    <div className="user-card">
      {/* ✅ Conditional rendering — online or offline badge */}
      <span className={`status-badge ${isOnline ? "online" : "offline"}`}>
        <span className="status-dot"></span>
        {isOnline ? "Online" : "Offline"}
      </span>

      {/* Profile image OR initials fallback */}
      {avatar ? (
        <img src={avatar} alt={name} className="avatar" />
      ) : (
        <div className="avatar-fallback">{getInitials(name)}</div>
      )}

      <p className="user-name">{name}</p>
      <p className="user-meta">
        Age {age} · {role}
      </p>

      {/* Follow button with dynamic label */}
      <button
        onClick={handleFollow}
        className={`follow-btn ${isFollowing ? "following" : ""}`}
      >
        {isFollowing ? "✓ Following" : "+ Follow"}
      </button>
    </div>
  );
}

export default UserCard;
