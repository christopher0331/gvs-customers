"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/signin.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate the user
    // For simplicity, we'll just redirect to the dashboard
    console.log("User signed in with email:", email);
    router.push("/dashboard");
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSignIn} className="signin-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
} 