import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

export default function TrendingSection({ movies, onSelect, loading }) {
  return (
    <section style={{ padding: "32px 40px 60px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
        Trending Now
        {!loading && (
          <span style={{ marginLeft: 8, fontSize: 13, color: "var(--text-muted)", fontWeight: 400 }}>
            {movies.length} titles
          </span>
        )}
      </h2>

      {loading ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}>
          {Array(12).fill(0).map((_, i) => (
            <div key={i} style={{
              aspectRatio: "2/3",
              borderRadius: "var(--radius)",
              background: "var(--surface)",
              animation: "pulse 1.5s ease-in-out infinite",
            }} />
          ))}
        </div>
      ) : movies.length === 0 ? (
        <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "60px 0" }}>
          No movies found.
        </p>
      ) : (
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {movies.map((movie, i) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              layout
            >
              <MovieCard movie={movie} onSelect={onSelect} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}