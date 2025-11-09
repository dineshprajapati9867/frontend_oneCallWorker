import Navbar from "@Views/Navbar";
import React from "react";
import homePage from "@Assets/Images/homePage.png";
import { Box, styled, Typography } from "@mui/material";
const HomeStyle = styled(Box)(({ theme }) => ({
      // height:"100vh",
      // backgroundColor:"red",
    '.main':{
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
  //  backgroundColor:"#EDF9FF",
      '.image':{
        width:'50%'
      }
    }
}));
function HomePage() {
  return (
    <>
      <Navbar />
      <HomeStyle>
        <Box className="main">
          <Typography variant="h1">Find Skilled Workers Near You</Typography>
          <img className="image" src={homePage} />
        </Box>
      </HomeStyle>
    </>
  );
}

export default HomePage;
