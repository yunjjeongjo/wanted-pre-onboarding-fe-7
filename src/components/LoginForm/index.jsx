import Input from "../basic/Input";
import Button from "../basic/Button";
import useForm from "../../hooks/useForm";
import CardForm from "../CardForm";
import styled from "@emotion/styled";
import Text from "../basic/Text";
import { Link } from "react-router-dom";

const Title = styled(Text)`
  margin-bottom: 40px;
`;

const StyledInput = styled(Input)`
  height: 50px;
  width: 300px;
  padding-left: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  background-color: #f1f0f5;
  color: #666666;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  height: 50px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 15px;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: #666666;
  font-size: 15px;
  &:hover {
    color: #222222;
  }
`;

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
      <Title size={30} color={"#555555"}>
        LOG IN
      </Title>
      <StyledInput
        type="text"
        name="email"
        placeholder="이메일을 입력해 주세요"
        onChange={handleChange}
      ></StyledInput>
      <StyledInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleChange}
      ></StyledInput>
      <StyledButton type="submit" disabled={isLoading}>
        로그인
      </StyledButton>
      <LinkText to="/signup">계정이 없으신가요? 회원가입</LinkText>
    </CardForm>
  );
};

export default LoginForm;
