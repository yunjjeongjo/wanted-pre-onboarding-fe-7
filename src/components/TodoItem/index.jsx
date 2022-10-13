import styled from "@emotion/styled";
import Toggle from "../Toggle";
import { useTodos } from "../../contexts/TodoProvider";
import { getItem } from "../../utils/storage";
import { useState } from "react";
import TodoEdit from "../TodoEdit";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 45px;
  align-items: center;
  padding: 0 8px;
  border-radius: 18px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const RemoveButton = styled.button`
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

const EditButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
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

const TodoItem = ({ id, content, complete, ...props }) => {
  const { updateTodos, removeTodo } = useTodos();
  const [isEdit, setIsEdit] = useState(false);
  const token = getItem("ACCESS_TOKEN", null);
  return (
    <ListItem {...props}>
      {isEdit ? (
        <TodoEdit
          setIsEdit={setIsEdit}
          todo={content}
          id={id}
          token={token}
          complete={complete}
        ></TodoEdit>
      ) : (
        <>
          <Toggle
            on={complete}
            onChange={(e) => {
              updateTodos(id, e.target.checked, content, token);
            }}
          />
          <Content complete={complete}>{content}</Content>
          <EditButton
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </EditButton>
          <RemoveButton
            onClick={() => {
              removeTodo(token, id);
            }}
          >
            삭제
          </RemoveButton>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
