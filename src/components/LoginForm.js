import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/authContext";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginURL = "/auth/login";
  const handleLogin = async (event) => {
    event.preventDefault();
    axios
      .post(
        loginURL,
        { username, password },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((response) => {
        console.log("responseLogin", response);
        if (response) {
          window.location.href = "/";
        } else {
          window.location.href = "/login";
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          height: "300px",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <input
          style={{ width: "80%", marginBottom: "10px" }}
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          style={{ width: "80%", marginBottom: "10px" }}
          placeholder="Enter Password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/reset">Forgot Password?</Link>
        <Link to="/register">Don't have an account?</Link>
        <button
          disabled={!username || !password}
          style={{ width: "50%", padding: "10px", marginTop: "10px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
