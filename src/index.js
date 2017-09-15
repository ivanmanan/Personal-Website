// UI jsx file

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./Layout";
import "./styles.css";

// Render onto web page
ReactDOM.render(
  <div>
    <Layout/>
    <App/>
  </div>,
  document.getElementById("root")
);
