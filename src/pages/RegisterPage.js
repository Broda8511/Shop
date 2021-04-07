import React from "react";
import "../styles/login.css";
import Register from "../components/Register";

const RegisterPage = (props) => {
  return (
    <>
      <div className="login__header">
        <h2>Register</h2>
      </div>

      <div className="login">
        <div className="login__paragraph">
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
