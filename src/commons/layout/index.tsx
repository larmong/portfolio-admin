import { ReactElement } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { Outlet, useNavigate } from "react-router";

import { Page, Wrapper } from "@commons/layout/style";
import { isSideMenuState } from "@store/store";
import { authService } from "@commons/libraries/firebase/firebase.config";
import SideMenu from "@components/layout/sideMenu";

export default function Layout({ children }: IPropsLayout) {
  const navigate = useNavigate();
  const [cookies, _, removeCookie] = useCookies(["accessToken", "loginUser"]);
  const isSideMenu = useRecoilValue<boolean>(isSideMenuState);

  const handleClickLogout = async () => {
    if (cookies.accessToken) {
      try {
        await authService.signOut();
        navigate("/");
      } catch (error) {
        window.alert(`비정상적인 오류입니다. \n ${error}`);
      }
    }
  };

  return (
    <Wrapper>
      <SideMenu />
      <Page isSideMenu={isSideMenu}>
        <header>
          <div className="user-info">
            <span>{cookies.loginUser?.split("@")[0]}</span>님 환영합니다!
          </div>
          <div className="login" onClick={handleClickLogout}>
            logout
          </div>
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
