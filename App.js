// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// <div id="parent">
//      <div id="child">
//              <h1>hello world</h1>
//
//  </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello world")
  )
);

root.render(parent);
