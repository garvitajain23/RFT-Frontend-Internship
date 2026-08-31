import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingSection from "./components/TrendingSection";
import Categories from "./components/Categories";
import MovieModal from "./components/MovieModal";

const API_KEY="fb17a059e1c25245598be94b85a8396e";
const IMG_BASE = "https://image.tmdb.org/t/p/";

const GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 53: "Thriller",
  10752: "War", 37: "Western",
};

export const categories = ["All", "Action", "Sci-Fi", "Drama", "Thriller", "Comedy", "Horror"];

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        const mapped = data.results
          .filter((m) => m.poster_path && m.backdrop_path)
          .map((m) => ({
            id: m.id,
            title: m.title,
            description: m.overview,
            year: m.release_date?.split("-")[0],
            rating: m.vote_average?.toFixed(1),
            genre: GENRE_MAP[m.genre_ids?.[0]] || "Movie",
            poster: `${IMG_BASE}w400${m.poster_path}`,
            banner: `${IMG_BASE}w1280${m.backdrop_path}`,
          }));

        setMovies(mapped);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchMovies, searchQuery ? 400 : 0);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  const filteredMovies = activeCategory === "All"
    ? movies
    : movies.filter((m) => m.genre === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {movies[0] && <Hero movie={movies[0]} onPlay={() => setSelectedMovie(movies[0])} />}
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <TrendingSection movies={filteredMovies} onSelect={setSelectedMovie} loading={loading} />

      <AnimatePresence>
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}