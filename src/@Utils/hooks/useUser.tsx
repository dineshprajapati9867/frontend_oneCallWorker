import React, { createContext, useContext, useState } from "react";

interface userI {
  openProfileDrawer: boolean;
  handleCloseProfileDrawer:()=>void
  handleOpenProfileDrawer:()=>void
}

const userContext = createContext<userI>({} as userI);

export const useUser = () => useContext(userContext);

const useUserData = () => {
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);

  /**
   *  open and close profile drawer
   */
  const handleOpenProfileDrawer = () => {
    setOpenProfileDrawer(true);
  };
  const handleCloseProfileDrawer = () => {
    setOpenProfileDrawer(false);
  };
  return {
    openProfileDrawer,
    handleOpenProfileDrawer,
    handleCloseProfileDrawer
  };
};

interface ProvideUserI {
  children: React.ReactNode;
}

export function ProvideUser({ children }: ProvideUserI) {
  const userData = useUserData();
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
}
