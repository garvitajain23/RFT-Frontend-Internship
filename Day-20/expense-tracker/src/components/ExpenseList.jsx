function ExpenseList({ expenses, deleteExpense, onEdit }) {
  if (expenses.length === 0)
    return <p style={{ textAlign: 'center', color: '#888' }}>No expenses yet. Add one!</p>

  return (
    <div style={styles.list}>
      {expenses.map(e => (
        <div key={e.id} style={styles.card}>
          <div>
            <strong style={{ fontSize: '16px' }}>{e.title}</strong>
            <span style={styles.badge}>{e.category}</span>
            <p style={{ margin: '4px 0', color: '#666', fontSize: '13px' }}>📅 {e.date}</p>
          </div>
          <div style={styles.right}>
            <span style={styles.amount}>₹{e.amount}</span>
            <button onClick={() => onEdit(e)} style={styles.editBtn}>✏️</button>
            <button onClick={() => deleteExpense(e.id)} style={styles.delBtn}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  )
}

const styles = {
  list: { display: 'flex', flexDirection: 'column', gap: '10px' },
  card: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '14px 18px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' },
  badge: { marginLeft: '10px', backgroundColor: '#e0e7ff', color: '#4f46e5', padding: '2px 8px', borderRadius: '20px', fontSize: '12px' },
  right: { display: 'flex', alignItems: 'center', gap: '10px' },
  amount: { fontWeight: 'bold', fontSize: '16px', color: '#16a34a' },
  editBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' },
  delBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }
}

export default ExpenseList