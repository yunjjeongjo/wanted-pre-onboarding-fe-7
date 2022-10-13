import SignupForm from "../../components/SignupForm";
import { onSignup } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useEffect } from "react";
import { getItem } from "../../utils/storage";

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItem("ACCESS_TOKEN", null);

    if (token) {
      navigate("/todo", { replace: true });
    }
  }, []);

  const handleSubmit = async ({ email, password }) => {
    try {
      await onSignup({
        email,
        password,
      });
      navigate(`/todo`);
      message.success("회원가입 후 로그인에 성공했습니다");
    } catch (e) {
      alert(e.response.data.message);
      console.log(e);
    }
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit}></SignupForm>
    </>
  );
};

export default SignupPage;
