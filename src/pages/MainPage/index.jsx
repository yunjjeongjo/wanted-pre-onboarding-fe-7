import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";
import Text from "../../components/basic/Text";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import Header from "../../components/Header";

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
      <Header></Header>
      <Text size={30} color={"#555555"}>
        TODO LIST
      </Text>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </>
  );
};

export default MainPage;
