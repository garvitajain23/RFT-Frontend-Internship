import { useState } from "react";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import MonthlyChart from "./components/MonthlyChart";
import TransactionList from "./components/TransactionList";
import CategorySpending from "./components/CategorySpending";
import SavingsProgress from "./components/SavingsProgress";
import GoalSection from "./components/GoalSection";
import { transactions, monthlyData, goals } from "./data/mockData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SummaryCards transactions={transactions} />
        <div className="grid-2">
          <MonthlyChart data={monthlyData} />
          <CategorySpending transactions={transactions} />
        </div>
        <div className="grid-2">
          <SavingsProgress transactions={transactions} />
          <GoalSection goals={goals} />
        </div>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;