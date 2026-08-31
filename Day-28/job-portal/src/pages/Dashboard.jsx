import { Link } from "react-router-dom";
import { jobs, user } from "../data/mockData";
import { useSaved } from "../context/SavedJobsContext";
import JobCard from "../components/jobs/JobCard";
import Badge from "../components/common/Badge";

export default function Dashboard() {
  const { savedIds } = useSaved();
  const savedJobs = jobs.filter(j => savedIds.includes(j.id));
  const appliedJobs = jobs.filter(j => user.appliedJobs.includes(j.id));

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 24px 80px" }}>
      {/* Profile header */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "24px 28px",
        marginBottom: 28,
        display: "flex",
        gap: 20,
        alignItems: "center",
      }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          color: "#fff",
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {user.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 20, letterSpacing: "-0.3px", marginBottom: 2 }}>{user.name}</h1>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{user.role} · {user.location}</p>
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {user.skills.map(s => <Badge key={s} variant="blue">{s}</Badge>)}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          {user.resumeUploaded && (
            <div style={{ fontSize: 12, color: "var(--success)", display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end", marginBottom: 8 }}>
              ✓ Resume uploaded
            </div>
          )}
          <button style={{
            padding: "7px 14px",
            fontSize: 13,
            fontWeight: 500,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            color: "var(--text-secondary)",
            background: "var(--bg-secondary)",
          }}>
            Edit profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 14,
        marginBottom: 32,
      }}>
        {[
          { label: "Applications sent", value: appliedJobs.length, color: "var(--accent)" },
          { label: "Jobs saved", value: savedJobs.length, color: "var(--warning)" },
          { label: "Profile views", value: 27, color: "var(--success)" },
        ].map(stat => (
          <div key={stat.label} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "18px 20px",
          }}>
            <p style={{ fontSize: 28, fontWeight: 700, color: stat.color, letterSpacing: "-1px" }}>
              {stat.value}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Applied */}
      <Section title={`Applied (${appliedJobs.length})`}>
        {appliedJobs.map(j => (
          <div key={j.id} style={{ position: "relative" }}>
            <JobCard job={j} />
            <div style={{
              position: "absolute",
              top: 14,
              right: 52,
              background: "var(--warning-light)",
              color: "var(--warning)",
              fontSize: 11,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 20,
            }}>
              Under review
            </div>
          </div>
        ))}
      </Section>

      {/* Saved */}
      <Section title={`Saved (${savedJobs.length})`}>
        {savedJobs.length === 0 ? (
          <div style={{
            padding: "32px",
            textAlign: "center",
            border: "1px dashed var(--border)",
            borderRadius: "var(--radius-lg)",
            color: "var(--text-muted)",
          }}>
            <p style={{ marginBottom: 8 }}>No saved jobs yet.</p>
            <Link to="/jobs" style={{ fontSize: 13, color: "var(--accent)" }}>Browse jobs →</Link>
          </div>
        ) : (
          savedJobs.map(j => <JobCard key={j.id} job={j} />)
        )}
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 16, fontFamily: "Inter", fontWeight: 600, marginBottom: 14 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </div>
  );
}