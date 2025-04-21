import "./sign-up.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const sendLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("User registered successfully");
        setUsername("");
        setEmail("");
        setPassword("");
        //set accessToken and refreshToken in local storage
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        //set
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        console.log("Failed to register user");
        setUsername("");
        setEmail("");
        setPassword("");
        setError("Failed to register user.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form onSubmit={sendLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="background-wrapper">
        <button type="submit">Sign Up</button>
      </div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </form>
  );
};

export default SignUp;
