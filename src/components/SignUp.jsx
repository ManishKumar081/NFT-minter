import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    // For demo: save user in localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/nft-minter");
  };

  return (
    <form className="auth-form" onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
      {error && <div className="status-message">{error}</div>}
      <div>
        Already have an account? <a href="/signin">Sign In</a>
      </div>
    </form>
  );
}

export default SignUp;
