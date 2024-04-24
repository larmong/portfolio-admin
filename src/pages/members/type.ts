export interface MembersDataType {
  key: string;
  name: string;
  nickname: string;
  userid: string;
  phone: string;
  state: boolean;
  level: number;
}
export interface IPropsBoard {
  data: MembersDataType[];
}
