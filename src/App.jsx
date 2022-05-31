import React from "react";
import styled from "styled-components";

const fontSize = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const BaseButton = styled.button`
  border: none;
  border-radius: 0.15rem;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${(props) => fontSize[props.size] ?? "1rem"};
  padding: ${(props) => (props.size === "lg" ? "50px" : "5px")};
`;

const PrimaryButton = styled(BaseButton)`
  background-color: red;
  color: white;
`;

const App = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton size="sm">I am Clickable button</BaseButton>
      <PrimaryButton size="lg">I am Clickable button</PrimaryButton>
    </div>
  );
};

export default App;
