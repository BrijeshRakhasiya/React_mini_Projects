import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup_Form from "./Signup_Form";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Signup</Link>
          <Link to="/login">Login</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Signup_Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;