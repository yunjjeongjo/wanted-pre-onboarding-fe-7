import styled from "@emotion/styled";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/storage";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  top: 0px;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-right: 40px;
`;

const LogoutButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: white;
  border: black 1px solid;
  border-radius: 10px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    removeItem("todos");
    removeItem("ACCESS_TOKEN");
    navigate("/", { replace: true });
    message.success("로그아웃 되었습니다");
  };
  return (
    <Container>
      <LogoutButton onClick={() => handleClick()}>로그아웃</LogoutButton>
    </Container>
  );
};

export default Header;
