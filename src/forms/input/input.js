import React from "react";
import "../../styles/inputForm.css";

const InputForm = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <div>
        {label && <label>{label}</label>}

        <input className="input" onChange={handleChange} {...otherProps} />
      </div>
    </>
  );
};

export default InputForm;
