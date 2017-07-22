// UI jsx file

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


// Probably export the objects from other js files with good descriptions of them and as objects
var dummyArray = [ "Bio", "Mad Manan Movie Review", "Emacs Init Configuration" ];


// Render onto web page
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
