import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import User from "./pages/User";
import { useRoutes } from "react-router-dom";
import routeList from "./routes/routeList";

const App = () => {
  const element = useRoutes(routeList);
  return element;
};
export default App;
