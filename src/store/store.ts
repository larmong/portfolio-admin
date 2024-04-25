import { atom } from "recoil";
import { ITypeProject } from "@commons/libraries/firebase/data.types";
import { ProjectDataType } from "@pages/project/type";

export const loginUserState = atom<any>({
  key: "loginUserState",
  default: null,
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

export const isPostsState = atom<ProjectDataType>({
  key: "isPostsState",
  default: {
    key: "",
    categoryId: "",
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
