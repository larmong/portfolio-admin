import styled from "@emotion/styled";
import { Default } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
`;

export const FilterForm = styled.div`
  .filter-form {
    display: flex;
    align-items: center;
    gap: 20px;

    .filter-form-left {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: calc(100% - 120px);
    }
    .ant-button {
      width: 120px;
    }
  }
`;

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${Default.font};
  color: ${Default.color};
  font-size: 14px;
  > span {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: 80px;
    font-size: 12px;
  }
`;
