import React from "react";
import InputGroup from "../components/sheared/forms/InputGroup";
import useHookForm from "../hooks/useHookForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be 6 character";
  }

  return errors;
};

const App = () => {
  const cb = ({ hasError, errors, values }) => {
    if (hasError) {
      alert(`[ERROR] ${JSON.stringify(errors)}`);
    } else {
      alert(`[SUCCESS] ${JSON.stringify(values)}`);
    }
  };
  const { state, handleBlur, handleChange, handleFocus, handleSubmit, clear } =
    useHookForm(init, validate);

  console.log(state);
  return (
    <div>
      <h1>My Custom Hook Form</h1>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <div>
          <InputGroup
            label={"First Name"}
            name={"firstName"}
            value={state.firstName.value}
            placeholder={"John"}
            error={state.firstName.error}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <InputGroup
            label={"Last Name"}
            name={"lastName"}
            value={state.lastName.value}
            placeholder={"Doe"}
            error={state.lastName.error}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <InputGroup
            label={"Email Address"}
            name={"email"}
            value={state.email.value}
            placeholder={"example@xxx.com"}
            error={state.email.error}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <InputGroup
            label={"Your Password"}
            name={"password"}
            value={state.password.value}
            placeholder={"**************"}
            error={state.password.error}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
      </form>
    </div>
  );
};

export default App;
