import React, { useState } from "react";
import Histories from "./Components/Histories/Histories";
import Inputs from "./Components/Inputs/Inputs";
import Operations from "./Components/Operations/Operations";
import { getId } from "./utils/utils";

const style = {
  width: "50%",
  margin: "0 auto",
  background: "#51b3a5",
  padding: "2rem",
  borderRadius: "1rem",
};

const initialInputs = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState(initialInputs);
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [historyRestore, setHistoryRestore] = useState(null);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleArithmeticOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }
    const f = Function(
      "operation",
      `return ${inputState.a}${operation}${inputState.b}`
    );
    const result = f(operation);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleClearOps = () => {
    setInputState(initialInputs);
    setResult(0);
  };
  const handleRestore = (item) => {
    setInputState(item.inputs);
    setResult(item.result);
    setHistoryRestore(item.id);
  };

  return (
    <div style={style}>
      <h1
        style={{
          color: "purple",
          textShadow: "2px 0 #ed9b09",
          fontSize: "40px",
          fontFamily: "Arial",
        }}
      >
        Result: {result}
      </h1>
      <Inputs inputs={inputState} handleInputChange={handleInputChange} />
      <Operations
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />
      <Histories
        historyRestore={historyRestore}
        histories={histories}
        handleRestore={handleRestore}
      />
    </div>
  );
};

export default App;
