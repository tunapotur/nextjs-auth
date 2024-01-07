"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("tunapotur@yahoo.com");
  const [password, setPassword] = useState("tunapotur41");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main">
      <div className="form-container">
        <h2 className="form-header">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
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
            disabled={loading || !email || !password}
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;