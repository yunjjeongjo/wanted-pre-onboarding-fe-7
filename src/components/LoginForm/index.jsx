import Input from "../../basic/Input";
import Button from "../../basic/Button";
import useForm from "../../pages/hooks/useForm";
import CardForm from "../CardForm";

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
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
      <Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleChange}
      ></Input>
      <Button type="submit" disabled={isLoading}>
        로그인
      </Button>
    </CardForm>
  );
};

export default LoginForm;
