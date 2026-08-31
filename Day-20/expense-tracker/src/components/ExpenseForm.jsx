import { useState } from 'react'

const categories = ['Food', 'Transport', 'Shopping', 'Health', 'Education', 'Other']

function ExpenseForm({ addExpense, editingExpense, editExpense, cancelEdit }) {
  const [form, setForm] = useState(
    editingExpense || { title: '', amount: '', category: 'Food', date: '' }
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.amount || !form.date) return alert('Fill all fields!')

    if (editingExpense) {
      editExpense(editingExpense.id, form)
      cancelEdit()
    } else {
      addExpense(form)
    }
    setForm({ title: '', amount: '', category: 'Food', date: '' })
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>{editingExpense ? '✏️ Edit Expense' : '➕ Add Expense'}</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="title" placeholder="Title" value={form.title}
          onChange={handleChange} style={styles.input}
        />
        <input
          name="amount" type="number" placeholder="Amount (₹)" value={form.amount}
          onChange={handleChange} style={styles.input}
        />
        <select name="category" value={form.category} onChange={handleChange} style={styles.input}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <input
          name="date" type="date" value={form.date}
          onChange={handleChange} style={styles.input}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={styles.btn}>
            {editingExpense ? 'Update' : 'Add Expense'}
          </button>
          {editingExpense && (
            <button type="button" onClick={cancelEdit} style={{ ...styles.btn, backgroundColor: '#aaa' }}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

const styles = {
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' },
  heading: { marginTop: 0, color: '#4f46e5' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' },
  btn: { padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
}

export default ExpenseForm