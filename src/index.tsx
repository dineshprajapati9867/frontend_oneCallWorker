import React from "react";
import ReactDOM from "react-dom/client";
import { theme, snack } from "@Utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import './i18n.ts'
import { GoogleOAuthProvider } from '@react-oauth/google';
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
          <GoogleOAuthProvider clientId="699175373946-pg70q1ja5rip6alu1t0ks1ddqjlped20.apps.googleusercontent.com">
          <App />
          </GoogleOAuthProvider>
          <ReactQueryDevtools position="bottom" />
        </SnackBarProvider>
      </QueryClientProvider>
    </CustomMuiThemeProvider>
  </React.StrictMode>
);
