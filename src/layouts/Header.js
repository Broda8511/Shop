import React from "react";
import "../styles/header.css";
import Nav from "../layouts/Nav";

const Header = (props) => {
  return <div>{<Nav {...props} />}</div>;
};

export default Header;
