import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/jobs/JobCard";
import JobFilters from "../components/jobs/JobFilters";
import SearchBar from "../components/jobs/SearchBar";
import { jobs } from "../data/mockData";

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [location, setLocation] = useState(searchParams.get("loc") || "");
  const [filters, setFilters] = useState({ type: "All", location: "All", salary: 50 });

  const filtered = useMemo(() => {
    return jobs.filter(job => {
      const q = query.toLowerCase();
      const matchQuery = !q || job.title.toLowerCase().includes(q)
        || job.company.toLowerCase().includes(q)
        || job.tags.some(t => t.toLowerCase().includes(q));

      const matchLoc = !location || job.location.toLowerCase().includes(location.toLowerCase());
      const matchType = filters.type === "All" || job.type === filters.type;
      const matchFilterLoc = filters.location === "All" || job.location === filters.location;
      const matchSalary = parseInt(job.salary) <= filters.salary || filters.salary === 50;

      return matchQuery && matchLoc && matchType && matchFilterLoc && matchSalary;
    });
  }, [query, location, filters]);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: 24 }}>
        <SearchBar query={query} location={location} onQuery={setQuery} onLocation={setLocation} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, alignItems: "flex-start" }}>
        <JobFilters filters={filters} onChange={setFilters} />

        <div>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
            {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
          </p>
          {filtered.length === 0 ? (
            <div style={{
              padding: 48,
              textAlign: "center",
              border: "1px dashed var(--border)",
              borderRadius: "var(--radius-lg)",
              color: "var(--text-muted)",
            }}>
              <p style={{ fontSize: 32, marginBottom: 8 }}>🔍</p>
              <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>No matches</p>
              <p style={{ fontSize: 13 }}>Try different keywords or clear the filters.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.map(j => <JobCard key={j.id} job={j} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}