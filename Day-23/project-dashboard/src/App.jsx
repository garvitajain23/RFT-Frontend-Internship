import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import TeamSection from "./components/TeamSection";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("board");

  return (
    <ThemeProvider>
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <div className="app-layout">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
          <main className="main-content">
            {activePage === "board" && <KanbanBoard />}
            {activePage === "team" && <TeamSection />}
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}