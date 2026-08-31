function SearchFilter({ search, setSearch, tag, setTag, sortBy, setSortBy, tags }) {
  return (
    <div className="filter-panel">
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-input"
      />

      <select value={tag} onChange={(e) => setTag(e.target.value)} className="filter-select">
        <option value="All">All Categories</option>
        {tags.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="filter-select"
      >
        <option value="default">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default SearchFilter;