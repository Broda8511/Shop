import React from "react";
const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return <div>{currentYear} All rights reserved by Adam Megger</div>;
};

export default Footer;
