import styled from '@emotion/styled';
import { Default } from '@commons/styles/emotion';

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;
export const EditorBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background: ${Default.color};
  border: 1px solid ${Default.color};
  color: #fff;

  &.line-btn {
    background: #fff;
    color: ${Default.color};
  }
`;
