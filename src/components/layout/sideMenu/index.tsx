import { useEffect, useState } from "react";
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
  const [defaultMenu, setDefaultMenu] = useState<{
    active: string[];
    openMenu: string;
  }>({
    active: [""],
    openMenu: "",
  });

  const toggleCollapsed = () => {
    setIsSideMenu(!isSideMenu);
  };

  const handleMoveToMenu: MenuProps["onClick"] = (e) => {
    let router = "";
    e.keyPath.forEach((route) => {
      if (route === "dashboard") {
        navigate("/");
        return;
      }
      router = `/${route}` + router;
    });

    void navigate(router);
  };

  useEffect(() => {
    let routes = router.pathname.split("/").slice(1);

    setDefaultMenu({
      active: routes,
      openMenu: routes.length > 1 ? routes[0] : "",
    });
  }, [router]);

  return (
    <Wrapper isSideMenu={isSideMenu}>
      <Logo isSideMenu={isSideMenu}>
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
          defaultOpenKeys={["members", "project"]}
          defaultSelectedKeys={["dashboard"]}
          selectedKeys={defaultMenu.active}
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
