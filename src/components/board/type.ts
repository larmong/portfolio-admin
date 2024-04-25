import { MembersDataType } from "@pages/members/type";
import { ProjectDataType } from "@pages/project/type";

export interface IPropsBoard {
  data: MembersDataType[] | ProjectDataType[];
}
