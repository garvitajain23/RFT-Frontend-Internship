import { useState, useMemo } from "react";
import DestinationCard from "./DestinationCard";
import SearchFilter from "./SearchFilter";
import destinations from "../data/destinations";

function DestinationGrid() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const tags = [...new Set(destinations.map((d) => d.tag))];

  const filtered = useMemo(() => {
    let result = destinations.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );

    if (tag !== "All") {
      result = result.filter((d) => d.tag === tag);
    }

    if (sortBy === "priceLow") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "priceHigh") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, tag, sortBy]);

  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-subtitle">Browse packages picked by our travel team</p>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          tag={tag}
          setTag={setTag}
          sortBy={sortBy}
          setSortBy={setSortBy}
          tags={tags}
        />

        <div className="grid">
          {filtered.length > 0 ? (
            filtered.map((d) => <DestinationCard key={d.id} destination={d} />)
          ) : (
            <p className="no-results">No destinations match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default DestinationGrid;