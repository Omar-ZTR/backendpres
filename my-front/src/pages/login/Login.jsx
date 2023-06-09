import React, { useState } from "react";
import "./Login.css";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
  <div>
  <div className="logo">
    <div className="marj">
                    <Link className="link" to="/">
                        <span className="textlogo">Give</span>
                    </Link>
                    <span className="dot">&</span>
                    <span className="textlogo">Get</span>
                </div></div>
  </div>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
