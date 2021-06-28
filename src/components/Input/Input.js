
import React from "react";
import styles from './style.module.css';


const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <InputWrapper
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={styles.input}
    />
  );
};



export default Input;
