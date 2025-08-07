import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");

    if (!name || !password) {
      setMessage("Please enter both name and password.");
      return;
    }

    if (name === storedName && password === storedPassword) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid credentials. Please try again or sign up first.");
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default Login;