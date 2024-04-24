import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import {
  Logo,
  MenuWrapper,
  SideMenuState,
  Wrapper,
} from "@components/layout/sideMenu/style";
import { isSideMenuState } from "@store/store";
import { menus } from "@components/layout/sideMenu/menus";

export default function SideMenu() {
  const router = useLocation();
  const navigate = useNavigate();
  const [isSideMenu, setIsSideMenu] = useRecoilState<boolean>(isSideMenuState);

  const toggleCollapsed = () => {
    setIsSideMenu(!isSideMenu);
  };

  const handleMoveToMenu: MenuProps["onClick"] = (e) => {
    let router = "";

    if (e.key === "dashboard") {
      navigate("/");
      return;
    }

    e.keyPath.forEach((route) => {
      router = `/${route}` + router;
    });

    void navigate(router);
  };

  useState(() => {
    console.log(router.pathname);
  });

  return (
    <Wrapper isSideMenu={isSideMenu}>
      <Logo>
        <h1>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.svg`}
            alt=""
          />
        </h1>
      </Logo>
      <MenuWrapper>
        <Menu
          onClick={handleMoveToMenu}
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          inlineCollapsed={isSideMenu}
          items={menus}
        />
      </MenuWrapper>
      <SideMenuState>
        <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {isSideMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </SideMenuState>
    </Wrapper>
  );
}
