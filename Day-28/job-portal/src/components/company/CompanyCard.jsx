import { Link } from "react-router-dom";
import Badge from "../common/Badge";

export default function CompanyCard({ company }) {
  return (
    <Link
      to={`/company/${company.id}`}
      style={{
        display: "block",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "20px",
        transition: "border-color var(--transition), box-shadow var(--transition)",
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
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <img
          src={company.logo}
          alt={company.name}
          style={{
            width: 40, height: 40,
            borderRadius: 9,
            border: "1px solid var(--border)",
            objectFit: "contain",
            background: "var(--bg)",
          }}
          onError={e => { e.target.style.display = "none"; }}
        />
        <div>
          <h3 style={{ fontSize: 15, fontFamily: "Inter", fontWeight: 600 }}>
            {company.name}
          </h3>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{company.industry}</p>
        </div>
      </div>
      <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12, lineHeight: 1.5 }}>
        {company.tagline}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Badge variant="blue">{company.openRoles} open roles</Badge>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{company.size}</span>
      </div>
    </Link>
  );
}