function GoalSection({ goals }) {
  return (
    <div className="card">
      <h2 className="section-title">Financial Goals</h2>
      <div className="goals-list">
        {goals.map((goal) => {
          const pct = Math.round((goal.saved / goal.target) * 100);
          return (
            <div key={goal.id} className="goal-item">
              <div className="goal-header">
                <p className="goal-name">{goal.name}</p>
                <p className="goal-pct">{pct}%</p>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill goal-fill"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="goal-meta">
                ₹{goal.saved.toLocaleString("en-IN")} of ₹{goal.target.toLocaleString("en-IN")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoalSection;