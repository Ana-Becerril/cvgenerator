import React from "react";

const TextArea = ({ onChange, placeholder, value }) => {
  return (
    <textarea
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};


export default TextArea;
