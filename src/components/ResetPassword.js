import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Container,
  Form,
  Input,
  Button,
  Title,
} from "../styled-components/ResetPassword";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const resetURL = "/auth/reset";
  const handleResetPassword = async (event) => {
    event.preventDefault();
    await axios.post(resetURL, { email }).then((response) => {
      console.log("resetResponse", response);
    });
  };
  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleResetPassword}>
          <Title>Reset Password</Title>
          <Input
            name="email"
            value={email}
            placeholder="Enter Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Button>Reset Password</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default ResetPassword;
