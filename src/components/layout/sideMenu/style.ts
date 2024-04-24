import styled from "@emotion/styled";
import { Default } from "@commons/styles/emotion";
import { IsSideMenuStateType } from "@components/layout/sideMenu/type";

export const Wrapper = styled.div`
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #fff;
  border-right: 1px solid ${Default.bg};
  width: ${(props: IsSideMenuStateType) =>
    props.isSideMenu ? "80px" : "240px"};
`;

export const Logo = styled.div`
  h1 {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${(props: IsSideMenuStateType) =>
        props.isSideMenu ? "50px" : "100px"};
      height: 20px;
    }
  }
`;

export const MenuWrapper = styled.div`
  height: calc(100vh - 120px);
  .ant-menu {
    width: 100%;
  }
  .ant-menu-light.ant-menu-root.ant-menu-inline,
  .ant-menu-light.ant-menu-root.ant-menu-vertical {
    border: none;
    border-inline-end: none;
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title,
  .ant-menu-item,
  .ant-menu-submenu,
  .ant-menu-title-content,
  .ant-menu-item-icon,
  .ant-menu-submenu-title {
    color: #000;
    text-transform: uppercase;
  }

  .ant-menu-item-selected {
    background-color: ${Default.color};
    color: #fff;
    .ant-menu-title-content {
      color: #fff;
    }
  }
`;

export const SideMenuState = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 20px;
  button {
    margin: 0 !important;
  }
`;
