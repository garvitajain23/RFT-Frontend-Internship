import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import SaveJobButton from "./SaveJobButton";

export default function JobCard({ job }) {
  const typeVariant = job.type === "Full-time" ? "green" : "yellow";

  return (
    <Link
      to={`/jobs/${job.id}`}
      style={{
        display: "block",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "18px 20px",
        transition: "border-color var(--transition), box-shadow var(--transition)",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <img
          src={job.logo}
          alt={job.company}
          style={{
            width: 44, height: 44,
            borderRadius: 10,
            border: "1px solid var(--border)",
            objectFit: "contain",
            background: "var(--bg)",
            flexShrink: 0,
          }}
          onError={e => { e.target.style.display = "none"; }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 10
          }}>
            <div>
              <h3 style={{
                fontSize: 15,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 2,
              }}>
                {job.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                {job.company} · {job.location}
              </p>
            </div>
            <SaveJobButton jobId={job.id} size="sm" />
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: 12,
            alignItems: "center"
          }}>
            <Badge variant={typeVariant}>{job.type}</Badge>
            {job.tags.map(tag => (
              <Badge key={tag} variant="blue">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 14,
        paddingTop: 12,
        borderTop: "1px solid var(--border)",
        fontSize: 12,
        color: "var(--text-muted)",
      }}>
        <span style={{ fontWeight: 600, color: "var(--success)", fontSize: 13 }}>
          {job.salary}
        </span>
        <span>{job.applicants} applicants · {job.posted}</span>
      </div>
    </Link>
  );
}