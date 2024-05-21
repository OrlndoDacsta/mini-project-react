import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        // console.log(res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      {token && <h1>Login Success</h1>}
      {error && <h1>{error}</h1>}

      <div>
        <input onChange={handleEmailChange} placeholder="Email" />
        <input onChange={handlePasswordChange} placeholder="Password" />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
