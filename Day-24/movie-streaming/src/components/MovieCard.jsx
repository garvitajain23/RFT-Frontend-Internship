import { useState } from "react";
import { Play, Star } from "lucide-react";

export default function MovieCard({ movie, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onSelect(movie)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "var(--radius)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        aspectRatio: "2/3",
        background: "var(--surface)",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.25s ease",
        boxShadow: hovered ? "0 12px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.1) 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.25s",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: 14,
      }}>
        <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{movie.title}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{movie.year} · {movie.genre}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, color: "#f5c518" }}>
            <Star size={11} fill="#f5c518" /> {movie.rating}
          </span>
        </div>
        <button style={{
          marginTop: 10, background: "var(--accent)", color: "#fff",
          border: "none", borderRadius: 6, padding: "7px 0", fontSize: 13,
          fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          width: "100%",
        }}>
          <Play size={13} fill="#fff" /> Watch
        </button>
      </div>

      {/* Always-visible title at bottom */}
      {!hovered && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "24px 10px 10px",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
        }}>
          <p style={{ fontSize: 12, fontWeight: 600 }}>{movie.title}</p>
        </div>
      )}
    </div>
  );
}