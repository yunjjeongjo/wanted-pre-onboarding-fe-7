import Input from "../../basic/Input";
import Button from "../../basic/Button";
import useSignupForm from "../../pages/hooks/useSignupForm";
import CardForm from "../CardForm";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Text from "../../basic/Text";

const Title = styled(Text)`
  margin-bottom: 40px;
`;

const StyledInput = styled(Input)`
  position: relative;
  height: 50px;
  width: 300px;
  padding-left: 15px;
  border: none;
  border-radius: 10px;
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

const ErrorText = styled(Text)`
  position: relative;
  left: -75px;
  top: 3px;
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
`;

const SuccessText = styled(Text)`
  color: white;
  font-size: 12px;
  margin-bottom: 15px;
`;

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
      <Title size={30} color={"#555555"}>
        SIGN UP
      </Title>
      <StyledInput
        type="text"
        name="email"
        placeholder="이메일을 입력해 주세요"
        onChange={handleChange}
      ></StyledInput>
      {emailError ? (
        <ErrorText>*이메일 형식이 아닙니다</ErrorText>
      ) : (
        <SuccessText>성공</SuccessText>
      )}
      <StyledInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        onChange={handleChange}
      ></StyledInput>
      {passwordError ? (
        <ErrorText>*8자 이상 입력해 주세요</ErrorText>
      ) : (
        <SuccessText>성공</SuccessText>
      )}
      <StyledButton type="submit" disabled={emailError || passwordError}>
        회원가입
      </StyledButton>
      <LinkText to="/">계정이 있으신가요? 로그인</LinkText>
    </CardForm>
  );
};

export default SignupForm;
