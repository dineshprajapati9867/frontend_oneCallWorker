import { Box, styled } from "@mui/material";
import React from "react";

interface PropsI {
  children: React.ReactNode;
}

const MainLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.misc.bgGrey,
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
}));

const InnerLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    width: "95%",
  },
}));

function HomeLayout({ children }: PropsI) {
  return (
    <MainLayout>
      <InnerLayout>
        <Box className="content-layout" >
          {children}
        </Box>
      </InnerLayout>
    </MainLayout>
  );
}

export default HomeLayout;
