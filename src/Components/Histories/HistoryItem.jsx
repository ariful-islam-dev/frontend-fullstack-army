import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../ui/Button";

const HistoryItem = ({ item, handleRestore, disabled }) => {
  const [show, setShow] = useState(false);
  return (
    <li
      style={{
        listStyle: "none",
        padding: "1rem",
        background: "powderblue",
        margin: "10px 0",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <p>
          Operation: {item.inputs.a} {item.operation} {item.inputs.b} ={" "}
          {item.result}
        </p>
        <div>
          <Button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
      {show && (
        <>
          <small>
            {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
          </small>
          <Button onClick={() => handleRestore(item)} disabled={disabled}>
            Restore
          </Button>
        </>
      )}
    </li>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }),
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired,
  handleRestore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
