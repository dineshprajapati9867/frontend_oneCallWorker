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
  },

  ".service-name": {
    paddingBottom: theme.spacing(1),
    textAlign: "center",
        [theme.breakpoints.down("sm")]: {
   fontSize:`${theme.spacing(6)} !important`
  },
  },
}));

export const ServiceCategoryCard = ({ title, url, handleClick }: PropI) => {
  return (
    <StyledServiceCard onClick={handleClick}>
      <IKImage loading="lazy" src={url} className="image-box" />
      <Typography className="service-name" variant="h6">
        {title}
      </Typography>
    </StyledServiceCard>
  );
};
