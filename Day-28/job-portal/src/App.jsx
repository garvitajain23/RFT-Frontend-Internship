import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SavedJobsProvider } from "./context/SavedJobsContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Landing from "./pages/Landing";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Company from "./pages/Company";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <SavedJobsProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/company/:id" element={<Company />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </SavedJobsProvider>
    </ThemeProvider>
  );
}