import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Sample from "./Sample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Sample />
  </BrowserRouter>,
  rootElement
);
