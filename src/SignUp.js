import React from "react";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    const user = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
      gender,
    };

    if (user.password === user.confirmPassword) {
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Password should match!!");
    }
  }
  return (
    <div className="wrapper">
      <div className="signUpForm">
        <h2>Register Here !!!</h2>
        <div className="form-structure">
          <form onSubmit={submitHandler} class="user-data">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-data"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Create a Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              minlength="8"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <label>Phone No.</label>
            <input
              type="tel"
              value={phone}
              placeholder="Enter your phone no."
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[6-9]{1}[0-9]{9}"
            />

            <label for="user" className="gender-label">
              Gender:
            </label>
            <select name="user" className="dropdown-menu">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="blank">Prefer not to say</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
