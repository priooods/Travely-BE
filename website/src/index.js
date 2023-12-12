import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from "@nextui-org/react";
import RouterConfig from "./router/router_config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterConfig />
    </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();
