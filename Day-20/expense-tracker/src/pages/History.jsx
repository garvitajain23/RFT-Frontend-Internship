function History({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0)

  const byCategory = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount)
    return acc
  }, {})

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Expense History</h2>

      <div style={styles.totalBox}>
        <span>Grand Total</span>
        <strong style={{ color: '#4f46e5', fontSize: '22px' }}>₹{total}</strong>
      </div>

      <h3>By Category</h3>
      {Object.keys(byCategory).length === 0
        ? <p style={{ color: '#888' }}>No expenses recorded yet.</p>
        : Object.entries(byCategory).map(([cat, amt]) => (
          <div key={cat} style={styles.row}>
            <span>{cat}</span>
            <strong style={{ color: '#16a34a' }}>₹{amt}</strong>
          </div>
        ))
      }

      <h3>All Entries</h3>
      {expenses.length === 0
        ? <p style={{ color: '#888' }}>Nothing here yet.</p>
        : expenses.map(e => (
          <div key={e.id} style={styles.row}>
            <div>
              <strong>{e.title}</strong>
              <span style={styles.badge}>{e.category}</span>
              <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{e.date}</p>
            </div>
            <strong style={{ color: '#16a34a' }}>₹{e.amount}</strong>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { maxWidth: '650px', margin: '30px auto', padding: '0 16px' },
  heading: { color: '#4f46e5' },
  totalBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '14px 20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)', marginBottom: '16px' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '12px 18px', borderRadius: '8px', marginBottom: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' },
  badge: { marginLeft: '8px', backgroundColor: '#e0e7ff', color: '#4f46e5', padding: '2px 8px', borderRadius: '20px', fontSize: '12px' }
}

export default History