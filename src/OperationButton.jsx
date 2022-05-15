import React from "react";

const OperationButton = ({ handleArithmeticOps }) => {
  return (
    <>
      <button onClick={() => handleArithmeticOps("+")}>+</button>
      <button onClick={() => handleArithmeticOps("-")}>-</button>
      <button onClick={() => handleArithmeticOps("*")}>*</button>
      <button onClick={() => handleArithmeticOps("/")}>/</button>
      <button onClick={() => handleArithmeticOps("%")}>%</button>
    </>
  );
};

export default OperationButton;
