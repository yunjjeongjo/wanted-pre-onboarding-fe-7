import { useState } from "react";
import Button from "../../basic/Button";
import { useTodos } from "../../contexts/TodoProvider";
import styled from "@emotion/styled";

const CancleButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const SaveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 70px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: green;
  cursor: pointer;
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
    console.log(id, complete, editTodo, token);
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
