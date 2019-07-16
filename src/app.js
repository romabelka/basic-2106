import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import HomePage from "./components/routes/home";

export default function App() {
  return <Route path="/" component={HomePage} />;
}
