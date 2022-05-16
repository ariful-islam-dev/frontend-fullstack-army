import PropTypes from "prop-types";
import React from "react";
import HistoryItem from "./HistoryItem";

const Histories = ({ histories, handleRestore, historyRestore }) => {
  return (
    <div>
      <h3>Histories</h3>
      {histories && histories.length === 0 ? (
        <p>
          <small>There are no history here</small>
        </p>
      ) : (
        <ul style={{ margin: "0", padding: "0" }}>
          {histories.map((item) => (
            <HistoryItem
              key={item.id}
              item={item}
              handleRestore={handleRestore}
              disabled={historyRestore === item.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

Histories.propType = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }),
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ).isRequired,
  handleRestore: PropTypes.func.isRequired,
  historyRestore: PropTypes.object.isRequired,
};

export default Histories;
