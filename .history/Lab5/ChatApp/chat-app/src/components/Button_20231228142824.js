import React from "react";
const Button = ({ onclick, children }) => (
  <button onclick={onclick}>{children}</button>
);
export default Button;
