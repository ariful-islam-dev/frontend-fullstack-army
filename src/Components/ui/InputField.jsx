import React from "react";

const InputField = ({ name, value, handleInputChange }) => {
  const style = {
    padding: "0.5rem",
    borderRadius: "0.1rem",
    border: "1px solid gray",
    background: "#fff",
    outline: "none",
    width: "100%",
  };
  return (
    <input
      style={style}
      type="number"
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default InputField;
