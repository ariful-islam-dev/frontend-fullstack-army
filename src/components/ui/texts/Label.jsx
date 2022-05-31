import styled from "styled-components";

const fontSizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.1rem",
};
const lineHight = {
  sm: 1.3,
  md: 1.4,
  lg: 1.6,
};

const Label = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
  color: #222;
  line-height: ${(props) => lineHight[props.line] ?? 1.3};
  &user-select: none;
`;

export default Label;
