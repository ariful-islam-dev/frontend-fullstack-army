import React from "react";

const HistoryListItem = ({
  historyItem,
  handleRestoreHistory,
  restoreHistory,
}) => {
  return (
    <li key={historyItem.id}>
      <p>
        Operation: {historyItem.a} {historyItem.operation} {historyItem.b},
        result: {historyItem.result}
      </p>{" "}
      <small>
        {historyItem.date.toLocaleDateString()}{" "}
        {historyItem.date.toLocaleTimeString()}
      </small>
      <button
        onClick={() => handleRestoreHistory(historyItem)}
        disabled={restoreHistory != null && restoreHistory === historyItem.id}
      >
        restore
      </button>
    </li>
  );
};

export default HistoryListItem;
