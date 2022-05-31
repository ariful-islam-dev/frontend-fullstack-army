import React from "react";
import InputGroup from "../components/shear/Label/InputGroup";

const App = () => {
  return (
    <div className="root">
      <InputGroup
        name={"title"}
        placeholder="Enter Your Title"
        label={"Title"}
        error="something is wrong"
      />
    </div>
  );
};

export default App;
