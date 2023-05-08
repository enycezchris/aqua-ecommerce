import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  Login,
  AccountContainer,
} from "../styled-components/RegisterForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegisterModal from "./assets/RegisterModal";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const registerURL = "/auth/register";

  const handleRegister = async (event) => {
    event.preventDefault();
    await axios
      .post(registerURL, { username, email, password })
      .then((response) => {
        console.log("responseRegister", response);
      });
  };
  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleRegister}>
          <Title>Register</Title>
          <Input
            placeholder="Enter Email"
            autoComplete="new-email"
            name="email"
            value={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            placeholder="Enter Username"
            autoComplete="new-username"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            placeholder="Enter Password"
            name="password"
            value={password}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <AccountContainer>
            <Login to="/login">Already Have An Account?</Login>
          </AccountContainer>
          <RegisterModal
            username={username}
            password={password}
            email={email}
          />
        </Form>
      </Container>
      <Footer />
    </>
  );
};

{
  /* <form onSubmit={handleSubmit}>
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
</form> */
}

export default RegisterForm;
