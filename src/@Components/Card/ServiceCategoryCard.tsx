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
  },

  ".service-name": {
    paddingBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

export const ServiceCategoryCard = ({ title, url, handleClick }: PropI) => {
  return (
    <StyledServiceCard onClick={handleClick}>
      <Box className="imageBox">
        <IKImage loading="lazy" src={url} alt={title} className="image" />
      </Box>
      <Typography className="service-name" variant="h6">
        {title}
      </Typography>
    </StyledServiceCard>
  );
};
