import LoginForm from "../../components/LoginForm";
import { onLogin } from "../../utils/api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("ACCESS_TOKEN", null);
    console.log(token);
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
    } catch (e) {
      alert(e.response.data.message);
      console.log(e);
    }
  };
  return (
    <>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
      <Link to="/signup">계정이 없으신가요? 회원가입</Link>
    </>
  );
};

export default LoginPage;
