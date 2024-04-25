export interface ProjectDataType {
  key?: string;
  categoryId: string;
  startDate: string;
  endDate: string;
  title: string;
  thumb: string;
  cont: {
    unit: string;
    optimization: string[];
    percent: string;
  };
  skills: string[];
  view: {
    code: string;
    page: string;
  };
  num: number;
  dec: string;
}
