/**
 * @Done: Handle User Input
 * @Done: Handle Operations
 * @TODO: List of histories
 * @TODO: Render History list
 * @TODO: Restore the History
 *
 */
import React, { useState } from "react";
import "./App.css";
import HistoryListItem from "./HistoryListItem";
import InputField from "./InputField";
import OperationButton from "./OperationButton";

const initialInputState = {
  a: 0,
  b: 0,
};

function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const getId = generateId();

const App = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState(null);

  const handleInputState = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleArithmeticOps = (operators) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Inputs");
      return;
    }

    const f = new Function(
      "operators",
      `return ${inputState.a} ${operators} ${inputState.b}`
    );

    const result = f(operators);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      input: { ...inputState },
      operation: operators,
      result,
      date: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };

  const handleRestoreHistory = (historyItem) => {
    setInputState({ ...historyItem.input });
    setResult(historyItem.result);
    setRestoreHistory(historyItem.id);
  };

  return (
    <div className="rootArea">
      <div className="calculationArea">
        <h1>Result: {result}</h1>
        <div className="inputArea">
          <p>Input</p>

          {Object.entries(inputState).map((item, i) => (
            <InputField
              key={i}
              name={item[0]}
              value={item[1]}
              handleInputState={handleInputState}
            />
          ))}
        </div>
        <div className="operateArea">
          <p>Operators</p>
          <OperationButton handleArithmeticOps={handleArithmeticOps} />
          <button onClick={handleClearOps}>Clear</button>
        </div>
        <div className="historyArea">
          <p>History</p>
          {histories.length === 0 ? (
            <p>
              <small>There is no history here</small>
            </p>
          ) : (
            <ul>
              {histories &&
                histories.map((historyItem) => (
                  <HistoryListItem
                    key={historyItem.id}
                    historyItem={historyItem}
                    handleRestoreHistory={handleRestoreHistory}
                    restoreHistory={restoreHistory}
                  />
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
