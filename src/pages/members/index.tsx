import { BoardFilter, Page, Wrapper } from "@pages/members/style";
import { ReactElement } from "react";
import { Outlet } from "react-router";
import Filter from "@components/filter";
import Title from "@components/title";

export default function Members({ children }: IPropsLayout) {
  return (
    <Wrapper>
      <Title />
      <BoardFilter>
        <Filter />
      </BoardFilter>
      <Page>{children || <Outlet />}</Page>
    </Wrapper>
  );
}

interface IPropsLayout {
  children?: ReactElement;
}
