import { Play, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ movie, onPlay }) {
  return (
    <div style={{
      position: "relative",
      height: "92vh",
      minHeight: 500,
      overflow: "hidden",
    }}>
      {/* Background */}
      <img
        src={movie.banner}
        alt={movie.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.85) 40%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
      }} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          position: "relative",
          padding: "0 40px",
          paddingTop: "22vh",
          maxWidth: 600,
        }}
      >
        <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          Featured Film
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
          {movie.title}
        </h1>
        <div style={{ display: "flex", gap: 12, fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
          <span style={{ color: "#f5c518" }}>★ {movie.rating}</span>
          <span>{movie.year}</span>
          <span style={{
            background: "var(--accent-dim)", color: "var(--accent)",
            padding: "1px 8px", borderRadius: 4,
          }}>{movie.genre}</span>
        </div>
        <p style={{ color: "#ccc", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
          {movie.description}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={onPlay}
            style={{
              background: "var(--accent)", color: "#fff",
              padding: "12px 28px", borderRadius: "var(--radius)",
              fontWeight: 600, fontSize: 15,
              display: "flex", alignItems: "center", gap: 8,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#c40812"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
          >
            <Play size={16} fill="#fff" /> Play Now
          </button>
          <button
            onClick={onPlay}
            style={{
              background: "rgba(255,255,255,0.12)", color: "#fff",
              padding: "12px 24px", borderRadius: "var(--radius)",
              fontWeight: 600, fontSize: 15, backdropFilter: "blur(4px)",
              display: "flex", alignItems: "center", gap: 8,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            <Info size={16} /> More Info
          </button>
        </div>
      </motion.div>
    </div>
  );
}