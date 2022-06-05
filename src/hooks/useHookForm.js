import { useState } from "react";
import { deepClone, isObjectEmpty } from "../utils/object-utils";

/**
 *
 * @typedef {object} Param;
 * @property {object} init;
 * @property {Object|boolean} validate;
 *
 * create forms using this useForm hook easily
 * @param {Param} param;
 * @returns;
 */

const useHookForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  // Change Handler

  console.log(state);
  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;

    const oldState = deepClone(state);

    if (type === "checkbox") {
      oldState[key].value = checked;
    } else {
      oldState[key].value = value;
    }

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      console.log("I am inside else");
      oldState[key].error = "";
    }
  };

  // Focus Handler
  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  // Blur Handler
  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = getErrors();

    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  // Validate Function
  const getErrors = () => {
    let hasError = null;
    let errors = null;

    const values = mapStateToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;
    } else if (typeof validate === "function") {
      const errorsFromCB = validate(values);
      hasError = !isObjectEmpty(errorsFromCB);
      errors = errorsFromCB;
    } else {
      throw new Error("Validate Property must be boolean or function");
    }
    return {
      values,
      errors,
      hasError,
    };
  };

  // Handle Submit
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { hasError, errors, values } = getErrors();

    cb({
      hasError,
      errors,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };

  // Clear State
  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };
  return {
    state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

export default useHookForm;

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};

const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};
