import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const resetPasswordToken = useParams().token;
  const updatePasswordURL = `/auth/reset/${resetPasswordToken}`;
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(updatePasswordURL, { password }).then((response) => {
      console.log("responseUPDATEPW", response);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
