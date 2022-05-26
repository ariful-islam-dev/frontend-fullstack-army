import React from "react";
import { useCounter } from "../Hooks/useCounter";

const Counter = (props) => {
  const { handleCountDown, handleCountUp, count, lowerBound, upperBound } =
    useCounter({ ...props });
  return (
    <div>
      <button disabled={count === lowerBound} onClick={handleCountDown}>
        -
      </button>
      <span>
        <strong>{count}</strong>{" "}
      </span>
      <button disabled={count === upperBound} onClick={handleCountUp}>
        +
      </button>
    </div>
  );
};

export default Counter;
