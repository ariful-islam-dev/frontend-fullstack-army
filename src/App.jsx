/**
 * @Done: Handle User Input
 * @Done: Handle Operations
 * @TODO: List of histories
 * @TODO: Render History list
 * @TODO: Restore the History
 *
 */
import React, { useState } from "react";

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
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <div>
        <p>Input</p>
        <input
          type="number"
          name="a"
          value={inputState.a}
          onChange={handleInputState}
        />{" "}
        <br />
        <br />
        <input
          type="number"
          name="b"
          value={inputState.b}
          onChange={handleInputState}
        />
      </div>
      <div>
        <p>Operators</p>
        <button onClick={() => handleArithmeticOps("+")}>+</button>
        <button onClick={() => handleArithmeticOps("-")}>-</button>
        <button onClick={() => handleArithmeticOps("*")}>*</button>
        <button onClick={() => handleArithmeticOps("/")}>/</button>
        <button onClick={() => handleArithmeticOps("%")}>%</button>
        <button onClick={handleClearOps}>Clear</button>
      </div>
      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history here</small>
          </p>
        ) : (
          <ul>
            {histories &&
              histories.map((historyItem) => (
                <li key={historyItem.id}>
                  <p>
                    Operation: {historyItem.a} {historyItem.operation}{" "}
                    {historyItem.b}, result: {historyItem.result}
                  </p>{" "}
                  <small>
                    {historyItem.date.toLocaleDateString()}{" "}
                    {historyItem.date.toLocaleTimeString()}
                  </small>
                  <button
                    onClick={() => handleRestoreHistory(historyItem)}
                    disabled={
                      restoreHistory != null &&
                      restoreHistory === historyItem.id
                    }
                  >
                    restore
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
