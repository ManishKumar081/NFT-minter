import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid credentials.");
      return;
    }
    setUser(storedUser);
    navigate("/");
  };

  return (
    <form className="auth-form" onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign In</button>
      {error && <div className="status-message">{error}</div>}
      <div>
        New user? <a href="/signup">Sign Up</a>
      </div>
    </form>
  );
}

export default SignIn;
