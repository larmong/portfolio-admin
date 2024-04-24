import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .breadcrumb {
    display: flex;
    gap: 30px;
    li {
      opacity: 0.6;
      position: relative;
      &:not(:last-of-type)::before {
        content: ">";
        position: absolute;
        right: -17px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-of-type {
        opacity: 1;
        font-weight: bold;
      }
    }
  }
`;
