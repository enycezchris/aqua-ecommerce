import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  Button,
  Title,
} from "../styled-components/UpdatePassword";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const resetPasswordToken = useParams().token;
  const updatePasswordURL = `/auth/reset/${resetPasswordToken}`;
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    await axios.post(updatePasswordURL, { password }).then((response) => {
      console.log("responseUPDATEPW", response);
    });
  };
  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleUpdatePassword}>
          <Title>Update Password</Title>
          <Input
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button>Update Password</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UpdatePassword;
