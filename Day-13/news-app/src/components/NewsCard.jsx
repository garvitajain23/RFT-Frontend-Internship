function NewsCard({ article }) {
  const { title, description, url, image, source, publishedAt } = article

  return (
    <div style={styles.card}>
      {image && (
        <img src={image} alt={title} style={styles.img}
          onError={e => e.target.style.display = 'none'} />
      )}
      <div style={styles.body}>
        <span style={styles.source}>{source?.name || 'Unknown'}</span>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{description || 'No description available.'}</p>
        <div style={styles.footer}>
          <span style={styles.date}>
            {publishedAt ? new Date(publishedAt).toDateString() : ''}
          </span>
          <a href={url} target="_blank" rel="noreferrer" style={styles.link}>
            Read More →
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: '#16213e',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
  },
  img: { width: '100%', height: '180px', objectFit: 'cover' },
  body: { padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 },
  source: {
    background: '#e94560', color: '#fff',
    padding: '2px 10px', borderRadius: '12px',
    fontSize: '11px', width: 'fit-content'
  },
  title: { color: '#eee', fontSize: '15px', margin: 0, lineHeight: '1.4' },
  desc: { color: '#aaa', fontSize: '13px', margin: 0, lineHeight: '1.5', flex: 1 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' },
  date: { color: '#666', fontSize: '12px' },
  link: { color: '#e94560', fontSize: '13px', fontWeight: 'bold', textDecoration: 'none' }
}

export default NewsCard