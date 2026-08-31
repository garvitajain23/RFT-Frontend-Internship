import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/jobs/SearchBar";
import CompanyCard from "../components/company/CompanyCard";
import JobCard from "../components/jobs/JobCard";
import { companies, jobs } from "../data/mockData";

const stats = [
  { value: "4,200+", label: "Active jobs" },
  { value: "680+", label: "Companies" },
  { value: "12k+", label: "Candidates placed" },
];

export default function Landing() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/jobs?q=${query}&loc=${location}`);
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "72px 24px 56px",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 48,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--success-light)",
            color: "var(--success)",
            fontSize: 12,
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: 20,
            marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)", display: "inline-block" }} />
            340 new jobs this week
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5vw, 54px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: 20,
            color: "var(--text-primary)",
          }}>
            Find work that<br />
            <span style={{ color: "var(--accent)" }}>fits your life.</span>
          </h1>

          <p style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 460,
            marginBottom: 32,
          }}>
            Jobbr connects you with product companies hiring seriously — not aggregated job boards, just real roles from teams you'd want to join.
          </p>

          <div onKeyDown={e => e.key === "Enter" && handleSearch()}>
            <SearchBar
              query={query}
              location={location}
              onQuery={setQuery}
              onLocation={setLocation}
            />
          </div>

          <div style={{
            display: "flex",
            gap: 32,
            marginTop: 36,
          }}>
            {stats.map(s => (
              <div key={s.label}>
                <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                  {s.value}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured jobs card */}
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
        }}>
          <div style={{
            padding: "14px 18px",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Featured this week</span>
            <span style={{ fontSize: 12, color: "var(--accent)", cursor: "pointer" }}
              onClick={() => navigate("/jobs")}>
              View all →
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {jobs.slice(0, 3).map((job, i) => (
              <div key={job.id} style={{
                padding: "14px 18px",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                transition: "background var(--transition)",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--bg-secondary)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                onClick={() => navigate(`/jobs/${job.id}`)}
              >
                <img
                  src={job.logo}
                  alt={job.company}
                  style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border)", objectFit: "contain", background: "var(--bg)", flexShrink: 0 }}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{job.title}</p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{job.company} · {job.location}</p>
                </div>
                <span style={{ fontSize: 12, color: "var(--success)", fontWeight: 600, flexShrink: 0 }}>{job.salary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 80px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, letterSpacing: "-0.5px" }}>Companies hiring now</h2>
          <a href="/jobs" style={{ fontSize: 13, color: "var(--accent)" }}>Browse all →</a>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {companies.map(c => <CompanyCard key={c.id} company={c} />)}
        </div>
      </section>

      {/* Recent jobs */}
      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 80px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, letterSpacing: "-0.5px" }}>Recent openings</h2>
          <a href="/jobs" style={{ fontSize: 13, color: "var(--accent)" }}>See all jobs →</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {jobs.slice(0, 4).map(j => <JobCard key={j.id} job={j} />)}
        </div>
      </section>
    </div>
  );
}