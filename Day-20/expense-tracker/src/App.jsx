import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import History from './pages/History'

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const editExpense = (id, updated) => {
    setExpenses(expenses.map(e => e.id === id ? { ...updated, id } : e))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            expenses={expenses}
            addExpense={addExpense}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />}
        />
        <Route path="/history" element={<History expenses={expenses} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App