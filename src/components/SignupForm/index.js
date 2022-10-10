import Input from "../../basic/Input";
import Button from "../../basic/Button";
import useSignupForm from "../../pages/hooks/useSignupForm";
import CardForm from "../CardForm";

const SignupForm = ({ onSubmit }) => {
  const { handleChange, handleSubmit, emailError, passwordError } =
    useSignupForm({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validate: ({ email, password }) => {
        const newErrors = {};
        if (!email) newErrors.email = "이메일을 입력해주세요.";
        if (!password) newErrors.password = "비밀번호를 입력해주세요.";
        return newErrors;
      },
    });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="email"
        placeholder="이메일을 입력해 주세요"
        onChange={handleChange}
      ></Input>
      {emailError && "이메일 에러"}
      <Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleChange}
      ></Input>
      {passwordError && "패스워드 에러"}
      <Button type="submit" disabled={emailError || passwordError}>
        회원가입
      </Button>
    </CardForm>
  );
};

export default SignupForm;
