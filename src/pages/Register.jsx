import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Register</button>
      {token && <p>Registered successfully!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
export default Register;
