import styled from "styled-components";

const Button = styled.button`
  background: lightgray;
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: white;
    background: darkgray;
  }
`;

export default Button;
