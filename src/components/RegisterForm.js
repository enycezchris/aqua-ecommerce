import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const registerURL = "/auth/register";

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(registerURL, { username, email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          placeholder="Enter email"
          name="email"
          value={email}
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Enter Password"
          name="password"
          value={password}
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
