import PropTypes from "prop-types";
import React from "react";
import InputField from "../ui/InputField";

const Inputs = ({ inputs, handleInputChange }) => {
  return (
    <div
      style={{
        padding: "2rem",
        background: "#efefef",
        borderRadius: "0.5rem",
      }}
    >
      <h3
        style={{
          fontFamily: "Arial",
          textAlign: "center",
          fontSize: "1.5rem",
          color: "#212121",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
        Input Fields
      </h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <InputField
          name="a"
          value={inputs.a}
          handleInputChange={handleInputChange}
        />
        <InputField
          type="number"
          name="b"
          value={inputs.b}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

Inputs.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Inputs;
