import React from "react";

const InputField = ({ handleInputState, name, value }) => {
  return (
    <>
      <input
        type="number"
        name={name}
        value={value}
        onChange={handleInputState}
      />
    </>
  );
};

export default InputField;
