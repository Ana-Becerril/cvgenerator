import React from "react";


const Input = ({ type= "text", placeholder, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};



export default Input;
