import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userList = JSON.parse(localStorage.getItem("userList")) || [];

    const user = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
      alert("Logged In Successfully");
    } else {
      alert("Incorrect Credentials");
    }
  };
  return (
    <>
      <div className="maincard">
        <div className="Login-card">
          <h2>Welcome Back!!!</h2>

          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label>Email Id</label>
              <input
                placeholder="Enter your Email ID"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                placeholder="Enter your Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="createAccount">
            <h4>Don't Have an Account!!</h4>
            <Link to="/signup">Create an Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
