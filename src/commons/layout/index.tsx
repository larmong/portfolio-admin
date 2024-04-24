import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { Outlet } from "react-router";

import { Page, Wrapper } from "@commons/layout/style";
import { isSideMenuState } from "@store/store";
import SideMenu from "@components/layout/sideMenu";

export default function Layout({ children }: IPropsLayout) {
  const isSideMenu = useRecoilValue<boolean>(isSideMenuState);

  const user = "홍길동";

  return (
    <Wrapper>
      <SideMenu />
      <Page isSideMenu={isSideMenu}>
        <header>
          <div className="user-info">
            <span>{user}</span>님
          </div>
          <div className="login">login</div>
        </header>
        <section>{children || <Outlet />}</section>
        <footer>copyright ⓒ 2024 All rights reserved by larmong.</footer>
      </Page>
    </Wrapper>
  );
}

interface IPropsLayout {
  children?: ReactElement;
}
