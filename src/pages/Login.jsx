import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import mail from "../assets/icons/mailLogin.svg";
import lock from "../assets/icons/lockLogin.svg";
import loginImg from "../assets/images/login.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [close, setClose] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  const handleClose = () => {
    setClose(true);
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
        
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        // console.log(err.response);
        setError(err.response.data.error);
      });
  };

  return (
    <div className="content-center w-screen h-screen bg-emerald-900">
      <div className="flex">
        <div className="flex flex-col items-center justify-center gap-5 w-110">
          <h1 className="mb-5 text-3xl font-bold text-white">Welcome</h1>
          {token && (
            <div className={close ? "hidden" : "flex"}>
              <div
                id="toast-success"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-2"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">Login Success</div>
                <button
                  onClick={handleClose}
                  type="button"
                  class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-5 w-5 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-success"
                  aria-label="Close"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className={close ? "hidden" : "flex"}>
              <div
                id="toast-danger"
                class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                  </svg>
                  <span class="sr-only">Error icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">
                  {error}
                </div>
                <button
                  onClick={handleClose}
                  type="button"
                  class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-danger"
                  aria-label="Close"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

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

            <div className="flex">
              <img src={lock} alt="lock" />
              <input
                className="p-3 text-white transition-colors duration-300 ease-linear delay-300 bg-transparent border-b w-96 focus:outline-none focus:border-yellow-500"
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>

            <div className="flex items-center gap-1 mt-2 mb-5">
              <input type="checkbox" className="w-5" />
              <label className="text-xs text-white">Remember me</label>
            </div>

            <button
              className="w-full py-2 text-xl font-bold duration-300 ease-out transform bg-yellow-500 rounded-xl text-emerald-900 hover:rounded-sm hover:bg-yellow-400 hover:text-white "
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className="text-white">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-500">
              Register
            </Link>
          </p>
        </div>

        <img className="h-96" src={loginImg} alt="loginLogo" />
      </div>
    </div>
  );
};

export default Login;
