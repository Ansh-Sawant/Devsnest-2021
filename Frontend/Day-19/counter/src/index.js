import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <p>
      There are 4 counter component instances that each manage their own state.
    </p>
    <App />
    <App />
    <App />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
