import "./App.css";
import ActivityCards from "./components/ActivityCards";
import CaloriesTracker from "./components/CaloriesTracker";
import WorkoutHistory from "./components/WorkoutHistory";
import WeeklyChart from "./components/WeeklyChart";
import BMICalculator from "./components/BMICalculator";

export default function App() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long"
  });

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>Fitness Dashboard</h1>
          <p>Track your daily activity and progress</p>
        </div>
        <div className="date-badge">{today}</div>
      </div>

      <ActivityCards />

      <div className="grid-3">
        <WeeklyChart />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <CaloriesTracker />
          <BMICalculator />
        </div>
      </div>

      <WorkoutHistory />
    </div>
  );
}