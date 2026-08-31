import { useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

const categories = ['All', 'Food', 'Transport', 'Shopping', 'Health', 'Education', 'Other']

function Home({ expenses, addExpense, deleteExpense, editExpense }) {
  const [editingExpense, setEditingExpense] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? expenses : expenses.filter(e => e.category === filter)
  const total = filtered.reduce((sum, e) => sum + Number(e.amount), 0)

  return (
    <div style={styles.container}>
      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        editExpense={editExpense}
        cancelEdit={() => setEditingExpense(null)}
      />

      {/* Total */}
      <div style={styles.totalBox}>
        <span>Total Expenses</span>
        <strong style={{ color: '#4f46e5', fontSize: '20px' }}>₹{total}</strong>
      </div>

      {/* Filter */}
      <div style={styles.filters}>
        {categories.map(c => (
          <button
            key={c} onClick={() => setFilter(c)}
            style={{ ...styles.filterBtn, backgroundColor: filter === c ? '#4f46e5' : '#e0e7ff', color: filter === c ? 'white' : '#4f46e5' }}
          >
            {c}
          </button>
        ))}
      </div>

      <ExpenseList
        expenses={filtered}
        deleteExpense={deleteExpense}
        onEdit={setEditingExpense}
      />
    </div>
  )
}

const styles = {
  container: { maxWidth: '650px', margin: '30px auto', padding: '0 16px' },
  totalBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '14px 20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)', marginBottom: '16px' },
  filters: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' },
  filterBtn: { padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }
}

export default Home