import styled from "@emotion/styled";
import TodoItem from "../TodoItem";
import { useTodos } from "../../contexts/TodoProvider";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  & > li {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
`;

const TodoList = (props) => {
  const { todos, getTodos } = useTodos();
  const token = getItem("ACCESS_TOKEN", null);

  useEffect(() => {
    if (token) {
      getTodos(token);
    }
  }, []);

  return (
    <UnorderedList {...props}>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            content={item.todo}
            complete={item.isCompleted}
          />
        );
      })}
    </UnorderedList>
  );
};

export default TodoList;
