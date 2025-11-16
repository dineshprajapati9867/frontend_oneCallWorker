import React from "react";
import ReactDOM from "react-dom/client";
import { theme, snack } from "@Utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./i18n.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IKContext } from "imagekitio-react";
const { CustomMuiThemeProvider } = theme;

const { SnackBarProvider } = snack;

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CustomMuiThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SnackBarProvider>
          <IKContext urlEndpoint={process.env.IMAGEKIT_URL_ENDPOINT}>
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
              <App />
            </GoogleOAuthProvider>
          </IKContext>
          {/* <ReactQueryDevtools position="bottom" /> */}
        </SnackBarProvider>
      </QueryClientProvider>
    </CustomMuiThemeProvider>
  </React.StrictMode>
);
