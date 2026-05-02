import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const ContainerStyled = styled(Box)<{isMobile:boolean}>(({ theme,isMobile }) => ({
  ".image-container": {
    width: isMobile?"100%":theme.spacing(125),
    height: theme.spacing(isMobile?60:75),
    borderRadius: theme.spacing(6),
    overflow: "hidden", 
    cursor: "pointer",
    "&:hover .image": {
      transform: "scale(1.1)", 
    },
  },

  ".image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease-in-out",
    display: "block",
  },

  '.heading': {
    fontWeight: 500,
    marginTop: theme.spacing(2),
    paddingTop:theme.spacing(5),
    paddingBottom:theme.spacing(3)
  }
}));

const ImageCard = () => {
  const isMobile=useMediaQuery((theme)=>theme.breakpoints.only("xs"))
  return (
    <ContainerStyled isMobile={isMobile}>
      {/* Wrap the image in a Box that acts as the boundary */}
      <Box className="image-container">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW1LFVLrTeSynKd6fZW2JFbbIwM3-jBJilg&s"
          alt="Gallery"
        />
      </Box>
      
      <Typography className="heading" variant="h5">By Owner</Typography>
      <Typography variant="body1">68 Photos</Typography>
    </ContainerStyled>
  );
};

export default ImageCard;