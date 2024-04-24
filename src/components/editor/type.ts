import { Dispatch, SetStateAction } from 'react';

export interface IEditorType {
  contents: string;
  setContents: Dispatch<SetStateAction<string>>;
}
