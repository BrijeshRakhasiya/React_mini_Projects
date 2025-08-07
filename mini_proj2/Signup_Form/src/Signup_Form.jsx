import React, { useState } from "react";

function Signup_Form() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateName = (name) => /^[A-Za-z\s]{3,}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!validateName(name)) {
      setMessage("Name must be at least 3 characters and contain only letters.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!validateMobile(mobile)) {
      setMessage("Mobile number must be a valid 10-digit.");
      return;
    }

    if (!validatePassword(password)) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    // Save credentials to localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);

    console.log("Form submitted:", { name, mobile, email, password });
    setMessage("Signup successful!");

    setName("");
    setMobile("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
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
          <label>Mobile:</label><br />
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="10-digit mobile number"
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 6 characters"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default Signup_Form;