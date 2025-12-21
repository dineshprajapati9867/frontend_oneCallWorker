import Navbar from "@Components/Navbar";
import { Box, styled } from "@mui/material";
import { hooks } from "@Utils/index";
import ProfileDrawer from "@Views/User/components/ProfileDrawer";
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
    width: "85%",
  },
}));

function HomeLayout({ children }: PropsI) {
  const { openProfileDrawer, handleCloseProfileDrawer } = hooks.useUser();

  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Navbar />
          <Box className="content-layout">{children}</Box>
        </InnerLayout>
      </MainLayout>
      {openProfileDrawer && (
        <ProfileDrawer
          onClose={handleCloseProfileDrawer}
          open={openProfileDrawer}
        />
      )}
    </>
  );
}

export default HomeLayout;
