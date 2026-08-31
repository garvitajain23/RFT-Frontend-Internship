import { useParams, Link } from "react-router-dom";
import { companies, jobs } from "../data/mockData";
import JobCard from "../components/jobs/JobCard";
import Badge from "../components/common/Badge";

export default function Company() {
  const { id } = useParams();
  const company = companies.find(c => c.id === Number(id));
  const companyJobs = jobs.filter(j => j.companyId === Number(id));

  if (!company) return (
    <div style={{ maxWidth: 700, margin: "60px auto", textAlign: "center" }}>
      <p>Company not found. <Link to="/jobs" style={{ color: "var(--accent)" }}>Browse jobs</Link></p>
    </div>
  );

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px 80px" }}>
      <Link to="/jobs" style={{ fontSize: 13, color: "var(--text-muted)", display: "inline-block", marginBottom: 28 }}>
        ← Back
      </Link>

      {/* Company header */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "28px",
        marginBottom: 24,
      }}>
        <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 18 }}>
          <img
            src={company.logo}
            alt={company.name}
            style={{ width: 60, height: 60, borderRadius: 14, border: "1px solid var(--border)", objectFit: "contain", background: "var(--bg)" }}
            onError={e => { e.target.style.display = "none"; }}
          />
          <div>
            <h1 style={{ fontSize: 26, letterSpacing: "-0.5px", marginBottom: 4 }}>{company.name}</h1>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{company.industry} · {company.location} · Est. {company.founded}</p>
          </div>
        </div>

        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 18 }}>
          {company.description}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          <Badge variant="blue">{company.openRoles} open roles</Badge>
          <Badge>{company.size}</Badge>
          {company.techStack.map(t => <Badge key={t}>{t}</Badge>)}
        </div>

        <div style={{ display: "flex", gap: 16, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
              Perks
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {company.perks.map(p => (
                <span key={p} style={{
                  fontSize: 12,
                  color: "var(--success)",
                  background: "var(--success-light)",
                  padding: "3px 9px",
                  borderRadius: 20,
                }}>
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Jobs */}
      <h2 style={{ fontSize: 18, marginBottom: 16, letterSpacing: "-0.3px" }}>
        Open roles at {company.name}
      </h2>
      {companyJobs.length === 0 ? (
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>No open roles right now.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {companyJobs.map(j => <JobCard key={j.id} job={j} />)}
        </div>
      )}
    </div>
  );
}