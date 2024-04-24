import styled from "@emotion/styled";
import { Default } from "@commons/styles/emotion";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;

  .ant-table-thead .ant-table-cell,
  .ant-table-tbody .ant-table-cell {
    text-align: center;
  }

  .ant-pagination {
    justify-content: center !important;
  }
  .ant-table-wrapper
    .ant-table-tbody
    .ant-table-row.ant-table-row-selected
    > .ant-table-cell {
    background: ${Default.bg};
  }
  .ant-checkbox-inner:after,
  .ant-checkbox-inner:hover:after {
    background: ${Default.color} !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${Default.color} !important;
    border-color: ${Default.color} !important;
  }
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-pagination .ant-pagination-item-active {
    border-color: ${Default.color} !important;
  }
  .ant-pagination .ant-pagination-item-active a {
    color: ${Default.color} !important;
  }
`;

export const DeleteBtn = styled.button`
  margin-bottom: 12px;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 4px;
  background: ${Default.color};
  border: 1px solid ${Default.color};
  color: #fff;
  span {
    display: inline-block;
    padding-top: 1px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
