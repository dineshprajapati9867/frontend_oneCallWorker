import { CrossBigIcon, RedCrossIcon } from "@Icons/index";
import {
  Box,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
interface PropsI {
  link: string;
  name?: string;
  total?: string | number;
  handleCrossIcon?: (val: string) => void;
}
const ContainerStyled = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    position: "relative",
    ".image-container": {
      width: isMobile ? theme.spacing(70) : theme.spacing(125),
      height: theme.spacing(isMobile ? 65 : 75),
      borderRadius: theme.spacing(6),
      overflow: "hidden",

      cursor: "pointer",
      "&:hover .image": {
        transform: "scale(1.1)",
      },
    },
    ".crossIcon": {
      position: "absolute",
      top: 0,
      right: 0,
        zIndex: 2,
    },
    ".image": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease-in-out",
      display: "block",
    },

    ".heading": {
      fontWeight: 500,
      marginTop: theme.spacing(2),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3),
    },
  }),
);

const ImageCard = ({ link, name, total, handleCrossIcon }: PropsI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <ContainerStyled isMobile={isMobile}>
      {handleCrossIcon && (
        <IconButton
          onClick={() => {
            handleCrossIcon(link);
          }}
          className="crossIcon"
        >
          <RedCrossIcon />
        </IconButton>
      )}
      <Box className="image-container">
        <img className="image" src={link} alt="Gallery" />
      </Box>

      {name && (
        <Typography className="heading" variant="h5">
          {name}
        </Typography>
      )}
      {total && <Typography variant="body1">{total} Photos</Typography>}
    </ContainerStyled>
  );
};

export default ImageCard;
