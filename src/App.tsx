import React, { useEffect, useState } from "react";
import ContextContainer from "./Context";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomeLayout from "@Views/Layout";
import { HomeLayouts, PublicRoute } from "./routes";
import NotFoundPage from "@Components/404Page";

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDisconnected, setIsDisconnected] = useState(false);

  /**
   * Handles the connection change event.
   * @returns None
   */
  const handleConnectionChange = () => {
    const networkDetector = navigator.onLine ? "online" : "offline";
    if (networkDetector === "offline") {
      return setIsDisconnected(true);
    }
    return setIsDisconnected(false);
  };

  /**
   * Handles the connection change event.
   * @returns None
   */
  useEffect(() => {
    handleConnectionChange();
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, [handleConnectionChange]);

  /**
   * Handles the disconnected page
   */
  const handleIsDisconnected = () => {
    if (isDisconnected) {
      return navigate("/no-internet");
    }
    return undefined;
  };

  useEffect(() => {
    handleIsDisconnected();
  }, [isDisconnected, location.pathname]);

  return <Outlet /> 
}
function App() {
  return (
    <BrowserRouter>
      <ContextContainer>
        <Routes>
          <Route path="/" element={<AppLayout />}>
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
            {/*  Public Routes */}
            {PublicRoute.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            {/*  Public Routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ContextContainer>
    </BrowserRouter>
  );
}

export default App;
