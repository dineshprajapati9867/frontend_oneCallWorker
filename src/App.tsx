import React from "react";
import ContextContainer from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "@Views/Layout";
import { HomeLayouts } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <ContextContainer>
        <Routes>
          {HomeLayouts.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={
                <HomeLayout>
                  <route.Component />
                </HomeLayout>
              }
            />
          ))}
        </Routes>
      </ContextContainer>
    </BrowserRouter>
  );
}

export default App;
