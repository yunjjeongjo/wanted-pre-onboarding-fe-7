import SignupForm from "../../components/SignupForm";
import { onSignup } from "../../utils/api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async ({ email, password }) => {
    try {
      await onSignup({
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
      <SignupForm onSubmit={handleSubmit}></SignupForm>
      <Link to="/">계정이 있으신가요? 로그인</Link>
    </>
  );
};

export default SignupPage;
