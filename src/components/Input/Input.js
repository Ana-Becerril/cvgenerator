import React from "react";
import styles from './style.module.css';


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
