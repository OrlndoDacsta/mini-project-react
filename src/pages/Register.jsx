import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import mail from "../assets/icons/mailLogin.svg";
import lock from "../assets/icons/lockLogin.svg";
import registerImg from "../assets/images/register.png";

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
      <div className="content-center w-screen h-screen bg-emerald-900">
        {token && <h1>Login Success</h1>}
        {error && <h1>{error}</h1>}
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-5 w-110">
            <h1 className="mb-5 text-3xl font-bold text-white">
              Create Your Account
            </h1>
            <div>
              <div className="mb-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
              </div>

              <div className="flex mb-5">
                <img src={mail} alt="mail" />
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500"
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="text-white ">
                  Password
                </label>
              </div>

              <div className="flex mb-5">
                <img src={lock} alt="lock" />
                <input
                  className="p-3 text-white transition-colors duration-300 ease-out delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
              </div>

              <button
                className="w-full py-2 text-xl font-bold duration-300 ease-out transform bg-yellow-500 rounded-xl text-emerald-900 hover:rounded-sm hover:bg-yellow-400 hover:text-white"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </div>

          <img className="h-96" src={registerImg} alt="loginLogo" />
        </div>
        {token && <p>Registered successfully!</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default Register;
