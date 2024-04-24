import { atom } from "recoil";
import { ITypeProject } from "@commons/libraries/firebase/data.types";

export const routeState = atom<string>({
  key: "routeState",
  default: "/",
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "123",
});

export const isSideMenuState = atom<boolean>({
  key: "isSideMenuState",
  default: false,
});

export const projectCategoryState = atom<string>({
  key: "projectCategoryState",
  default: "all",
});

export const getPostDataState = atom<ITypeProject[] | []>({
  key: "getPostDataState",
  default: [],
});

export const isPostDataState = atom<ITypeProject[] | []>({
  key: "isPostDataState",
  default: [],
});

export const isPostsState = atom<ITypeProject>({
  key: "isPostsState",
  default: {
    id: "",
    categoryId: "",
    date: "",
    startDate: "",
    endDate: "",
    title: "",
    thumb: "",
    cont: {
      unit: "",
      optimization: [""],
      percent: "",
    },
    skills: [""],
    view: {
      code: "",
      page: "",
    },
    num: 0,
    dec: "",
  },
});
