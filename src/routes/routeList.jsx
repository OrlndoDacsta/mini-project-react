import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import ProtectedRoute from "./ProtectedRoute";
import DetailUser from "../pages/DetailUser";

const routeList = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/users/:id",
    element: <DetailUser />,
  },
];

export default routeList;
