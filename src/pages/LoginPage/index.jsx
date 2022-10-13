import LoginForm from "../../components/LoginForm";
import { onLogin } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("ACCESS_TOKEN", null);

    if (token) {
      navigate("/todo", { replace: true });
    }
  }, []);

  const handleSubmit = async ({ email, password }) => {
    try {
      await onLogin({
        email,
        password,
      });

      navigate(`/todo`);
      message.success("로그인에 성공했습니다");
    } catch (e) {
      alert(e.response.data.message);
      console.log(e);
    }
  };
  return (
    <>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
    </>
  );
};

export default LoginPage;
