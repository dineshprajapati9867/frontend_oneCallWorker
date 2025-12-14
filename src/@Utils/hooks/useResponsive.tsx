import { useMediaQuery } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

interface PropsI {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop:boolean;
  isDeskTop: boolean;
}
const resposiveContext = createContext<PropsI>({} as PropsI);

export const useResponsive = () => useContext(resposiveContext);

const useResponsiveData = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm','md'));
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.between('md','lg'));
  const isDeskTop = useMediaQuery((theme) => theme.breakpoints.up('lg')); 

  
  return {
    isMobile,
    isTablet,
    isLaptop,
    isDeskTop,
  };
};

interface ProvideResponsiveData {
  children: React.ReactNode;
}

export function ProvideResponsive({ children }: ProvideResponsiveData) {
  const responsiveData = useResponsiveData();
  return (
    <resposiveContext.Provider value={responsiveData}>
      {children}
    </resposiveContext.Provider>
  );
}
