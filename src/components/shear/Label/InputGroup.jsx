import React from "react";
import styled from "styled-components";
import TextInput from "../../ui/inputs/TextInput";
import Label from "../../ui/texts/Label";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  error,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        name="name"
        id="name"
        placeholder={placeholder ?? ""}
        value={value ?? ""}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputGroup;
