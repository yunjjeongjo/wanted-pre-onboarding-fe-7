import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../utils/api/todoApi";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const getTodos = async (token) => {
    const data = await getTodo(token);
    setTodos(data.data);
  };

  const createTodos = async (token, content) => {
    const data = await createTodo(token, content);
    setTodos([...todos, data.data]);
  };

  const updateTodos = async (id, status, content, token) => {
    const data = await updateTodo(id, token, content, status);
    setTodos(todos.map((item) => (item.id === id ? data.data : item)));
  };

  const removeTodo = async (token, id) => {
    await deleteTodo(token, id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, updateTodos, removeTodo, createTodos, getTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
