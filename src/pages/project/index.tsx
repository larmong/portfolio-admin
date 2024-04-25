import { Wrapper } from "@pages/project/style";
import { ReactElement } from "react";
import { Outlet } from "react-router";
import Modal from "@components/modal";

export default function Project({ children }: IPropsLayout) {
  return (
    <Wrapper>
      <Modal />
      {children || <Outlet />}
    </Wrapper>
  );
}

interface IPropsLayout {
  children?: ReactElement;
}
