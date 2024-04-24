import styled from "@emotion/styled";
import { Default } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${Default.bg};
`;

export const LoginWrapper = styled.div`
  width: 400px;
  height: 450px;
  padding: 20px 40px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Logo = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    width: 120px;
    //opacity: 0.1;
  }
`;

export const LoginForm = styled.div`
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const InputItem = styled.div`
  font-family: ${Default.font};
  color: ${Default.color};
  font-size: 14px;
  > span {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;
