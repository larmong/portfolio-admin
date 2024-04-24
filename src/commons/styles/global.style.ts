import { css } from "@emotion/react";
import { Common, Default } from "./emotion";
import { mediaQuery } from "@commons/styles/mediaQuery";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Noto+Sans+KR:wght@100..900&display=swap");
  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
      format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    font-family: ${Default.font};
    color: ${Default.color};
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
  }

  em,
  i {
    font-style: normal;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }

  button,
  input,
  textarea {
    border: ${Default.border};
  }

  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  button {
    transition: opacity 0.4s ease;
  }
  button:hover {
    opacity: 0.8;
  }

  .container {
    width: 100%;
    min-width: 1000px;
    margin: 0 auto;
  }

  // antd
  .ant-input {
    padding: 0;
    margin: 0;
    border-bottom: ${Default.border};
    border-radius: 0;
    input,
    span,
    .ant-input-affix-wrapper,
    .ant-input-outlined:focus {
      padding: 0;
      margin: 0;
      border: none !important;
      box-shadow: none !important;
    }
    input::placeholder {
      font-size: 13px;
    }
    &.ant-input-border {
      border: ${Default.border};
      border-radius: 6px;
      padding: 0 10px;
    }
  }

  .ant-form-item {
    margin: 0;
    padding: 0;

    .ant-btn {
      width: 100%;
      height: 40px;
      text-transform: uppercase;
      background: ${Default.color};
    }
    .ant-button {
      border: none;
      color: #fff;
      &:hover,
      &:active,
      &:focus {
        border: none;
        background: ${Default.color} !important;
        color: #fff !important;
        > div {
          display: none;
        }
      }
    }
  }
  .ant-radio-group {
    span {
      font-size: 12px !important;
    }
    .ant-radio {
      > div {
        display: none;
      }
      .ant-radio-checked::after {
        border: none;
      }
      .ant-radio-checked:hover {
        border: none;
      }
    }
    label {
      .ant-radio-inner {
        border: 1px solid ${Common.color.lightGray};
        &:hover {
          border: 1px solid ${Common.color.lightGray};
        }
      }
      .ant-radio-checked {
        .ant-radio-inner {
          border-color: ${Default.color} !important;
          background-color: ${Default.color} !important;
        }
      }
    }
  }
`;
