function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div style={styles.wrap}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        style={{ ...styles.btn, opacity: page === 1 ? 0.4 : 1 }}
      >
        ← Prev
      </button>
      <span style={styles.info}>Page {page} of {totalPages}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        style={{ ...styles.btn, opacity: page === totalPages ? 0.4 : 1 }}
      >
        Next →
      </button>
    </div>
  )
}

const styles = {
  wrap: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', margin: '32px 0' },
  btn: {
    background: '#e94560', color: '#fff', border: 'none',
    padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px'
  },
  info: { color: '#aaa', fontSize: '14px' }
}

export default Pagination