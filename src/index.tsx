import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";

import GlobalContainer from "./app/global/Global.styled";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Fragment>
      <GlobalContainer />
      <App />
    </Fragment>
  </QueryClientProvider>
);
