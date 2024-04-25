export interface ITypeProject {
  id?: string;
  categoryId: string;
  startDate: string;
  endDate: string;
  title: string;
  thumb: string;
  cont: ITypeCont;
  skills: string[];
  view: ITypeView;
  num: number;
  dec: string;
}

export interface ITypeView {
  code: string;
  page: string;
}

export interface ITypeCont {
  unit: string;
  optimization: string[];
  percent: string;
}
