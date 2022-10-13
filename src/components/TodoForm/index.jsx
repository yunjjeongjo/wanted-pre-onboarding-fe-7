import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../../basic/Button";
import { useTodos } from "../../contexts/TodoProvider";
import { getItem } from "../../utils/storage";

const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  outline: none;
  border: none;
  border-bottom: #cdcdcd 1px solid;
  font-size: 15px;
  /* border-radius: 8px;
  border: 2px solid black; */
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: black;
  border-radius: 8px;
  border: black 1px solid;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    color: white;
    border: none;
    background-color: black;
  }
`;

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const token = getItem("ACCESS_TOKEN", null);
  const { addTodo, createTodos, getTodos } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodos(token, todo);
    setTodo("");
  };

  return (
    <>
      <Form {...props} onSubmit={handleSubmit}>
        <Input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
          placeholder="할 일을 입력해 주세요"
        />
        <SubmitButton>Add</SubmitButton>
      </Form>
    </>
  );
};

export default TodoForm;
