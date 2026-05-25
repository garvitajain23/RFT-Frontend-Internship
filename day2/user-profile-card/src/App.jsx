// src/App.jsx — Parent component
// It owns the data and PASSES it down as props

import UserCard from "./components/UserCard/UserCard";
import users from "./data/users";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>User Profiles</h1>

      <div className="cards-grid">
        {/* Map over users array — renders one card per user */}
        {users.map((user) => (
          <UserCard
            key={user.id} // Required! Helps React track list items
            name={user.name} // Passing props ↓ to child
            age={user.age}
            role={user.role}
            avatar={user.avatar}
            isOnline={user.isOnline}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
