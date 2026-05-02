import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { IKImage } from "imagekitio-react";

interface PropI {
  title: string;
  url: string;
  handleClick?: () => void;
}
const StyledServiceCard = styled(Box)(({ theme }) => ({
  cursor: "pointer",
<<<<<<< HEAD
  width: theme.spacing(50),
  height: theme.spacing(50),
    [theme.breakpoints.down("sm")]: {
    width: "20%", // mobile pe 4 cards in row
  },
  ".image-box": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(5),
    overflow: "hidden",
=======
  width: " 100px",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  ".imageBox": {
    padding: theme.spacing(5),
    border: `1px solid ${theme.misc.borderColor}`,
    borderRadius: theme.spacing(7),

    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      // transform: "scale(1.05)",
    },
  },
  ".image": {
    width: " 100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: theme.spacing(7),
     transition: "all 0.3s ease",
       "&:hover": {
       transform: "scale(1.05)",
    },
>>>>>>> 734ea66160114f5070653290df007ffa37992be1
  },

  ".service-name": {
    paddingBottom: theme.spacing(1),
    textAlign: "center",
<<<<<<< HEAD
        [theme.breakpoints.down("sm")]: {
   fontSize:`${theme.spacing(6)} !important`
  },
=======
>>>>>>> 734ea66160114f5070653290df007ffa37992be1
  },
}));

export const ServiceCategoryCard = ({ title, url, handleClick }: PropI) => {
  return (
    <StyledServiceCard onClick={handleClick}>
<<<<<<< HEAD
      <IKImage loading="lazy" src={url} className="image-box" />
=======
      <Box className="imageBox">
        <IKImage loading="lazy" src={url} alt={title} className="image" />
      </Box>
>>>>>>> 734ea66160114f5070653290df007ffa37992be1
      <Typography className="service-name" variant="h6">
        {title}
      </Typography>
    </StyledServiceCard>
  );
};
