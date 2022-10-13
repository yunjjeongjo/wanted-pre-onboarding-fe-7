import { useState } from "react";
import Button from "../../basic/Button";
import { useTodos } from "../../contexts/TodoProvider";
import styled from "@emotion/styled";
import { message } from "antd";

const CancleButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: red;
  border-radius: 8px;
  border: red 1px solid;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    color: white;
    border: none;
    background-color: red;
  }
`;

const SaveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 80px;
  color: green;
  border-radius: 8px;
  border: green 1px solid;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    color: white;
    border: none;
    background-color: green;
  }
`;

const StyledInput = styled.input`
  margin-left: 12px;
  font-size: 14px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const TodoEdit = ({ setIsEdit, todo, id, token, complete }) => {
  const [editTodo, setEditTodo] = useState(todo);
  const { updateTodos } = useTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodos(id, complete, editTodo, token);
    setIsEdit(false);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          autoFocus
        ></StyledInput>
        <SaveButton type="submit">저장</SaveButton>
      </StyledForm>
      <CancleButton
        onClick={() => {
          setIsEdit(false);
        }}
      >
        취소
      </CancleButton>
    </>
  );
};

export default TodoEdit;
