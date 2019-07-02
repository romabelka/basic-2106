import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./app";

it("Приложение не падает", () => {
  const div = document.createElement("div");
  render(<App />, div);
  unmountComponentAtNode(div);
});
