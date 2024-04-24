import styled from "@emotion/styled";
import { Default } from "@commons/styles/emotion";
import { IsSideMenuStateType } from "@components/layout/sideMenu/type";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Page = styled.div`
  transition: padding 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  background: ${Default.bg};
  padding-left: ${(props: IsSideMenuStateType) =>
    props.isSideMenu ? "80px" : "240px"};
  section {
    min-height: calc(100vh - 110px);
    padding: 20px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 40px;
    gap: 20px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #fff;
    .login {
      padding: 8px 20px;
      background: ${Default.color};
      color: #fff;
      text-transform: uppercase;
      border-radius: 6px;
      cursor: pointer;
    }
    .user-info {
      letter-spacing: 1.2px;
      color: #999;
      span {
        color: ${Default.color};
      }
    }
  }
  footer {
    display: flex;
    opacity: 0.8;
    height: 50px;
    align-items: center;
    justify-content: center;
  }
`;
