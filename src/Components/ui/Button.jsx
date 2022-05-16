import React from "react";

const Button = ({ children, onClick, disabled, customStyle }) => {
  const disableStyle = {
    background: "#999",
    color: "#333",
    cursor: "default",
  };
  const style = {
    padding: "0.25rem 1rem",
    background: "#ddd",
    color: "#212121",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    ...customStyle,
    ...(disabled && disableStyle),
  };

  return (
    <button style={style} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
