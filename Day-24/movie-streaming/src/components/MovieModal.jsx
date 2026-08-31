import { motion } from "framer-motion";
import { X, Play, Star, Clock } from "lucide-react";

export default function MovieModal({ movie, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          width: "min(680px, 92vw)",
          background: "var(--surface)",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Banner */}
        <div style={{ position: "relative", height: 260 }}>
          <img
            src={movie.banner}
            alt={movie.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, var(--surface) 5%, transparent 60%)"
          }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              background: "rgba(0,0,0,0.6)", border: "none",
              borderRadius: "50%", width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "0 28px 28px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>{movie.title}</h2>
          <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-muted)", marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#f5c518" }}>
              <Star size={13} fill="#f5c518" /> {movie.rating}
            </span>
            <span>{movie.year}</span>
            <span style={{
              background: "var(--accent-dim)", color: "var(--accent)",
              padding: "1px 8px", borderRadius: 4,
            }}>{movie.genre}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} /> 2h 15m
            </span>
          </div>
          <p style={{ color: "#bbb", lineHeight: 1.75, fontSize: 14, marginBottom: 24 }}>
            {movie.description}
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{
              background: "var(--accent)", color: "#fff",
              padding: "11px 28px", borderRadius: "var(--radius)",
              fontWeight: 600, fontSize: 14,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <Play size={15} fill="#fff" /> Play Now
            </button>
            <button
              onClick={onClose}
              style={{
                background: "var(--surface2)", color: "var(--text-muted)",
                padding: "11px 20px", borderRadius: "var(--radius)",
                fontWeight: 500, fontSize: 14,
              }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}