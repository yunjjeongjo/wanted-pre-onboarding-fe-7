import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
  &:active {
    background-color: #888;
  }
  &:disabled {
    background-color: #999;
  }
`;

export default Button;