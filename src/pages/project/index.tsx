import { Wrapper } from "@pages/project/style";
import { ReactElement } from "react";
import { Outlet } from "react-router";

export default function Project({ children }: IPropsLayout) {
  return <Wrapper>{children || <Outlet />}</Wrapper>;
}

interface IPropsLayout {
  children?: ReactElement;
}
