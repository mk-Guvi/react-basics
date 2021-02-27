import React from "react";
import ReactDom from "react-dom";
//const root = document.getElementById("root");

const h1 = React.createElement("h1", { className: "h1" }, "hello world!");
const container = React.createElement(
  "div",
  { className: "conatiner" },
  React.createElement("div", { className: "des" }),
  React.createElement("p", { className: "text" }, "hello para")
);
const wel = "hello jsx para";
const jsx = (
  <div className="container">
    <div className="des">
      <p className="text">hello jsx para {wel}</p>
    </div>
  </div>
);
// ReactDom.render(jsx, root);
