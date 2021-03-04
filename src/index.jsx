import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const defaults = {
  selector: "",
};
const renderComponent = ({ selector, ...props } = defaults) => {
  let ROOT = null;
  if (__IS_DEV__) {
    ROOT = document.querySelector("#root");
  } else {
    ROOT = document.querySelector(selector);
  }

  try {
    ROOT && ReactDOM.render(<App {...props} />, ROOT);
  } catch (err) {
    console.log(err);
  }
};

//ReactDOM.render(<App />, document.getElementById("root"));

export default {
  render: renderComponent,
};
