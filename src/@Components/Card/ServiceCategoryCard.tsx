import React from "react";
import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import { IKImage } from "imagekitio-react";

interface PropI {
  title: string;
  url: string;
  handleClick?: () => void;
}
const StyledServiceCard = styled(Box)<{isMobile:boolean}>(({ theme,isMobile }) => ({
  cursor: "pointer",
  width:isMobile?"100px": " 150px",
  // height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  boxSizing:"border-box",
  ".imageBox": {
    padding: theme.spacing(5),
    border: `1px solid ${theme.misc.borderColor}`,
    borderRadius: theme.spacing(7),

    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  ".image": {
    width:isMobile?'80px': " 120px",
    height:isMobile?'80px': " 120px",
    objectFit: "cover",
    borderRadius: theme.spacing(7),
     transition: "all 0.3s ease",
       "&:hover": {
       transform: "scale(1.05)",
    },
  },

  ".service-name": {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

export const ServiceCategoryCard = ({ title, url, handleClick }: PropI) => {
  const isMobile=useMediaQuery((theme)=>theme.breakpoints.only("xs"))
  return (
    <StyledServiceCard onClick={handleClick} isMobile={isMobile}>
      <Box className="imageBox">
        <IKImage loading="lazy" src={url} alt={title} className="image" />
      </Box>
      <Typography className="service-name" variant="h6">
        {title}
      </Typography>
    </StyledServiceCard>
  );
};
