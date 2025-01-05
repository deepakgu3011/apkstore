import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.jsx"; // Import the auth instance from your Firebase config
import { signInWithEmailAndPassword } from "firebase/auth";
import bg from "../../images/loginbg.gif";
import h from "../../images/loginhbg.gif";
import "../../pages-style/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages

    try {
      // Attempt to log in the user with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Get user details from the userCredential object
      const user = userCredential.user;

      // Successful login
      setMessage("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/profile");
      window.location.reload(); // Redirect to the profile page
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error.message);
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="login__container">
        <h2
          id="login_heading"
          style={{
            backgroundImage: `url(${h})`,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Login
        </h2>
        <form onSubmit={handleSubmit} id="login">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {message && <p id="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
