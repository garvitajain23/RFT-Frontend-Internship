import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/mockData";
import Badge from "../components/common/Badge";
import SaveJobButton from "../components/jobs/SaveJobButton";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id));

  if (!job) return (
    <div style={{ maxWidth: 700, margin: "60px auto", padding: "0 24px", textAlign: "center" }}>
      <p style={{ fontSize: 48, marginBottom: 12 }}>🚫</p>
      <h2 style={{ marginBottom: 8 }}>Job not found</h2>
      <Link to="/jobs" style={{ color: "var(--accent)", fontSize: 14 }}>Back to listings</Link>
    </div>
  );

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "36px 24px 80px" }}>
      <Link to="/jobs" style={{
        fontSize: 13,
        color: "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        marginBottom: 28,
      }}>
        ← Back to jobs
      </Link>

      {/* Header */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        marginBottom: 20,
      }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <img
            src={job.logo}
            alt={job.company}
            style={{ width: 52, height: 52, borderRadius: 12, border: "1px solid var(--border)", objectFit: "contain", background: "var(--bg)", flexShrink: 0 }}
            onError={e => { e.target.style.display = "none"; }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 24, letterSpacing: "-0.5px", marginBottom: 4 }}>{job.title}</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
              <Link to={`/company/1`} style={{ color: "var(--accent)" }}>{job.company}</Link>
              {" "}· {job.location}
            </p>
          </div>
          <SaveJobButton jobId={job.id} />
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
          <Badge variant="green">{job.type}</Badge>
          <Badge variant="blue">{job.salary}</Badge>
          {job.tags.map(t => <Badge key={t}>{t}</Badge>)}
        </div>

        <div style={{
          display: "flex",
          gap: 16,
          marginTop: 20,
          paddingTop: 16,
          borderTop: "1px solid var(--border)",
          fontSize: 12,
          color: "var(--text-muted)",
        }}>
          <span>📅 Posted {job.posted}</span>
          <span>👥 {job.applicants} applicants</span>
        </div>
      </div>

      {/* Body */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 240px",
        gap: 20,
        alignItems: "flex-start",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Section title="About the role">
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {job.description}
            </p>
          </Section>

          <Section title="Responsibilities">
            <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              {job.responsibilities.map((r, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{r}</li>
              ))}
            </ul>
          </Section>

          <Section title="Requirements">
            <ul style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              {job.requirements.map((r, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{r}</li>
              ))}
            </ul>
          </Section>
        </div>

        <div style={{ position: "sticky", top: 74, display: "flex", flexDirection: "column", gap: 14 }}>
          <button style={{
            width: "100%",
            padding: "11px",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "var(--radius)",
            fontWeight: 600,
            fontSize: 14,
          }}>
            Apply now
          </button>
          <Section title="Perks">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {job.perks.map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--success)" }}>✓</span> {p}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "20px",
    }}>
      <h3 style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 14,
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}