import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { IKImage } from "imagekitio-react";

interface PropI {
  title: string;
  url: string;
}
const StyledServiceCard = styled(Box)(({ theme }) => ({
  width:" 233px",
  height: "245px",
  borderRadius: theme.spacing(3),
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  ".image-box": {
    height:'90%',
    width:'100%',
    objectFit: "cover",
  },

  ".service-name": {
    paddingBottom: theme.spacing(1),
  },
}));

export const ServiceCategoryCard = ({ title, url }: PropI) => {
  return (
    <StyledServiceCard>
        <IKImage  loading="lazy" src={url} alt={title} className="image-box" />
        <Typography className="service-name" variant="h6">{title}</Typography>
    </StyledServiceCard>
  );
};
