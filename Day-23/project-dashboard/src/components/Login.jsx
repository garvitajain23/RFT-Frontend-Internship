import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email || !pass) {
      setError("Please fill in both fields.");
      return;
    }
    onLogin();
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome back 👋</h2>
        <p>Login to your project dashboard</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", fontSize: "0.78rem", marginBottom: "8px" }}>
            {error}
          </p>
        )}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="login-hint">Use any email & password to continue</p>
      </div>
    </div>
  );
}