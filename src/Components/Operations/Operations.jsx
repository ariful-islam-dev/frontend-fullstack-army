import PropTypes from "prop-types";
import React from "react";
import { getId } from "../../utils/utils";
import Button from "../ui/Button";

const Operations = ({ handleArithmeticOps, handleClearOps }) => {
  const operationalBtn = [
    {
      id: getId.next().value,
      text: "+",
      onClick: () => handleArithmeticOps("+"),
    },
    {
      id: getId.next().value,
      text: "-",
      onClick: () => handleArithmeticOps("-"),
    },
    {
      id: getId.next().value,
      text: "*",
      onClick: () => handleArithmeticOps("*"),
    },
    {
      id: getId.next().value,
      text: "/",
      onClick: () => handleArithmeticOps("/"),
    },
    {
      id: getId.next().value,
      text: "%",
      onClick: () => handleArithmeticOps("%"),
    },
    {
      id: getId.next().value,
      text: "Clear",
      onClick: handleClearOps,
    },
  ];
  return (
    <div>
      <h3>Operation</h3>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {" "}
        {operationalBtn.map((btn) => (
          <Button key={btn.id} onClick={btn.onClick}>
            {btn.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

Operations.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default Operations;
