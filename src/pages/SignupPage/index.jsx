import SignupForm from "../../components/SignupForm";
import { onSignup } from "../../utils/api/auth";
import { Link, useNavigate } from "react-router-dom";
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
