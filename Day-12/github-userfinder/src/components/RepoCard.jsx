function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" style={styles.card}>
      <div style={styles.name}>📁 {repo.name}</div>
      <div style={styles.desc}>
        {repo.description || 'No description'}
      </div>
      <div style={styles.meta}>
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        {repo.language && <span>💻 {repo.language}</span>}
      </div>
    </a>
  )
}

const styles = {
  card: {
    display: 'block',
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '8px',
    padding: '14px 16px',
    marginBottom: '10px',
    transition: 'border-color 0.2s',
    cursor: 'pointer',
  },
  name: {
    color: '#58a6ff',
    fontWeight: '600',
    marginBottom: '4px',
    fontSize: '15px',
  },
  desc: {
    color: '#8b949e',
    fontSize: '13px',
    marginBottom: '8px',
  },
  meta: {
    display: 'flex',
    gap: '14px',
    fontSize: '12px',
    color: '#8b949e',
  },
}

export default RepoCard