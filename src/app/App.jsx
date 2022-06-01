import React, { useState } from "react";
import InputGroup from "../components/shear/Label/InputGroup";
import Button from "../components/ui/buttons/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const App = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    const { errors } = checkValidate(values);
    if (!errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
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
    setFocuses((prev) => ({ ...prev, [e.target.name]: true }));
  };

  // Blur Handler
  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidate(values);

    if (errors[key] && focuses[key] === true) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  // submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidate(values);
    if (isValid) {
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }
  };
  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <InputGroup
            name={"title"}
            value={values.title}
            placeholder={"Enter Your Title"}
            label={"Title"}
            error={errors.title}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"bio"}
            value={values.bio}
            placeholder={"Hi, I am a web developer........"}
            label={"Bio"}
            error={errors.bio}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            name={"skills"}
            value={values.skills}
            placeholder={"Enter Your Earned Skills"}
            label={"Skills"}
            error={errors.skills}
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
