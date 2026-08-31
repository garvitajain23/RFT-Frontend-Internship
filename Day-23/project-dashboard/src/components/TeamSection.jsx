const team = [
  { name: "Aman Sharma", role: "Frontend Dev", tasks: 3 },
  { name: "Priya Singh", role: "UI Designer", tasks: 2 },
  { name: "Rohan Gupta", role: "Backend Dev", tasks: 4 },
  { name: "Sneha Rao", role: "QA Engineer", tasks: 2 },
  { name: "Karan Mehta", role: "DevOps", tasks: 1 },
];

export default function TeamSection() {
  return (
    <div className="team-section">
      <h1>👥 Team Members</h1>
      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="team-avatar">{member.name[0]}</div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
            <span className="team-tasks">{member.tasks} tasks assigned</span>
          </div>
        ))}
      </div>
    </div>
  );
}