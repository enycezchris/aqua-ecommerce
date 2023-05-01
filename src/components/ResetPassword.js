import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const resetURL = "/auth/reset";
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(resetURL, { email }).then((response) => {
      console.log("resetResponse", response);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          placeholder="Enter Email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
