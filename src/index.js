// UI jsx file

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import App from "./App";
import "./styles.css";

// Render onto web page
ReactDOM.render(
  <div>
    <Layout/>
    <App/>
  </div>,
  document.getElementById("root")
);
