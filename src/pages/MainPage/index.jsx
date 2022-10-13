import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";
import Text from "../../basic/Text";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

const MainPage = () => {
  const navigate = useNavigate();
  const token = getItem("ACCESS_TOKEN", null);

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <Text size={30} color={"#555555"}>
        TODO LIST
      </Text>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </>
  );
};

export default MainPage;
