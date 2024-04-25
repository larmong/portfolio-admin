import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { GlobalStyle } from "@commons/styles/global.style";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={GlobalStyle} />
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>
);
