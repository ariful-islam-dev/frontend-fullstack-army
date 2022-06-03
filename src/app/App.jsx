import React, { useState } from "react";
import InputGroup from "../components/shear/Label/InputGroup";
import Button from "../components/ui/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const App = () => {
  const [state, setState] = useState(deepClone(init));
  const [hasError, setHasErrors] = useState(false);

  const mapStateToValues = (state) => {
    return Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;
      return acc;
    }, {});
  };

  // Change Handler
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    oldState[key].value = value;
    const { errors } = checkValidate(values);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  const checkValidate = (values) => {
    const errors = {};

    const { title, bio, skills } = values;

    if (!title) errors.title = "Invalid Title";
    if (!bio) errors.bio = "Invalid Bio";
    if (!skills) errors.skills = "Invalid Skills";

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  //Focus Handler
  const handleFocus = (e) => {
    const { name } = e.target;
    const oldState = deepClone(state);
    oldState[name].focus = true;
    setState(oldState);
  };

  // Blur Handler
  const handleBlur = (e) => {
    const key = e.target.name;
    const values = mapStateToValues(state);
    const { errors } = checkValidate(values);
    const oldState = deepClone(state);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  // submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = mapStateToValues(state);
    const { isValid, errors } = checkValidate(values);
    if (isValid) {
      console.log(state);
    } else {
      const oldState = deepClone(state);
      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });
      setState(oldState);
    }
  };
  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <InputGroup
            name={"title"}
            value={state.title.value}
            placeholder={"Enter Your Title"}
            label={"Title"}
            error={state.title.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"bio"}
            value={state.bio.value}
            placeholder={"Hi, I am a web developer........"}
            label={"Bio"}
            error={state.bio.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"skills"}
            value={state.skills.value}
            placeholder={"Enter Your Earned Skills"}
            label={"Skills"}
            error={state.skills.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default App;
