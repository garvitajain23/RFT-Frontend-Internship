import { useSaved } from "../../context/SavedJobsContext";

export default function SaveJobButton({ jobId, size = "md" }) {
  const { toggle, isSaved } = useSaved();
  const saved = isSaved(jobId);

  const sizes = {
    sm: { width: 30, height: 30, fontSize: 14 },
    md: { width: 36, height: 36, fontSize: 16 },
  };
  const s = sizes[size];

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(jobId); }}
      title={saved ? "Unsave" : "Save job"}
      style={{
        ...s,
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        background: saved ? "var(--accent-light)" : "var(--bg-secondary)",
        color: saved ? "var(--accent)" : "var(--text-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "all var(--transition)",
      }}
    >
      {saved ? "♥" : "♡"}
    </button>
  );
}