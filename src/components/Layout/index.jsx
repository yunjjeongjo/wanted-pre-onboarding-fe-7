import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
