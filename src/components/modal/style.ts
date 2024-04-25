import styled from "@emotion/styled";
import { Common, Default } from "@commons/styles/emotion";
import { IsModalType } from "@components/modal/type";

export const Wrapper = styled.div`
  transition: all 0.8s ease;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props: IsModalType) => (props.isModal ? "1000" : "-1")};
  background: ${(props: IsModalType) =>
    props.isModal ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"};
  .top-cont {
    display: flex;
    justify-content: space-between;
  }
  .bottom-cont {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .tag-el {
    text-transform: uppercase;
  }
`;

export const ModalContainer = styled.div`
  transition: transform 0.8s ease;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: fixed;
  top: 0;
  right: 0;
  width: 700px;
  height: 100vh;
  padding: 30px;
  background: ${Default.bg};
  transform: ${(props: IsModalType) =>
    props.isModal ? "translateX(0px)" : "translateX(700px)"};
`;

export const TitleWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    width: auto;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${Default.color};
  }
`;

export const CloseBtn = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid ${Default.color};
  padding-bottom: 1px;
  svg {
    width: 25px;
    height: 25px;
    color: ${Default.color};
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${Common.color.lightGray};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TagGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 40px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    color: ${Default.color};
    border: 1px solid ${Default.color};
    cursor: pointer;
    span {
      display: inline-block;
      margin-left: 5px;
    }
  }
`;

export const TextCont = styled.div`
  text-transform: uppercase;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    li {
      &.optimization {
        display: flex;
        gap: 30px;
        opacity: 0.5;
        span {
          position: relative;

          &:not(:last-of-type)::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -15px;
            width: 1px;
            height: 12px;
            background: #fff;
          }
        }
      }
      &.dec {
        text-align: center;
        margin-top: 20px;
        line-height: 24px;
      }
    }
  }
`;
