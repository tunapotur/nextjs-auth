"use client";

import { useState } from "react";

function Register() {
  const [name, setName] = useState("tunapotur");
  const [email, setEmail] = useState("tunapotur@yahoo.com");
  const [password, setPassword] = useState("tunapotur41");
  const [loading, setLoading] = useState(false);

  return (
    <main className="main">
      <div className="form-container">
        <h2 className="form-header">Register</h2>
        <form className="form">
          <input
            className="form-input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter your name"
          />

          <input
            className="form-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your e-mail"
          />

          <input
            className="form-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />

          <button
            className="form-button"
            disabled={loading || !name || !email || !password}
          >
            {loading ? "Please wait..." : "Sign Up"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
