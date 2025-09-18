import React from "react";
import ContextContainer from "./Context";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeLayout from "@Views/Layout";
import { HomeLayouts } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <ContextContainer>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <Outlet />
              </HomeLayout>
            }
          >
            {HomeLayouts.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Route>
        </Routes>
      </ContextContainer>
    </BrowserRouter>
  );
}

export default App;
