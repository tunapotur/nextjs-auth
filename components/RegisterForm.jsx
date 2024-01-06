"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Register() {
  const [name, setName] = useState("Ahmet Tuna POTUR");
  const [email, setEmail] = useState("tunapotur@yahoo.com");
  const [password, setPassword] = useState("tunapotur41");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      setLoading(true);
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPassword("");
        const form = e.target;
        form.reset();
        setLoading(false);
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <div className="form-container">
        <h2 className="form-header">Register</h2>
        <form className="form" onSubmit={handleSubmit}>
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

          <div className="flex flex-row justify-between">
            <button className="form-button" disabled={loading}>
              {loading ? "Please wait..." : "Sign Up"}
            </button>

            {error && (
              <div className="flex items-center rounded-md bg-red-500 px-4 text-sm text-white">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
