import {
  Box,
  Button,
  IconButton,
  Rating,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import verified from "@Assets/Images/verified.gif";
import new_thumb from "@Assets/Images/new_thumb_icon.svg";
import {
  BlackNormalLocationIcon,
  BookmarkIconMui,
  ThreeDots,
} from "@Icons/index";

interface PropsI {
  isThreeDot?: boolean;
  handleThreeDot?: () => void;
  data: any;
}
const CardWrapper = styled(Box)<{ isMobile: boolean; isThreeDot: boolean }>(
  ({ theme, isMobile, isThreeDot }) => ({
    border: !isMobile && `1px solid ${theme.misc.borderColor}`,
    borderRadius: "12px",
    padding: !isMobile && theme.spacing(8),
    width: isMobile ? "100%" : !isThreeDot ? theme.spacing(240) : "100%",
    minWidth: isMobile ? "100%" : theme.spacing(240),
    maxHeight: !isMobile && theme.spacing(105),
    boxSizing: "border-box",
    backgroundColor: !isMobile && theme.misc.cardBG,
    paddingTop: isMobile && theme.spacing(1),
    paddingBottom: isMobile && theme.spacing(3),
    paddingLeft: isMobile && theme.spacing(2),
    paddingRight: isMobile && theme.spacing(2),
    ".content": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(isMobile ? 1.5 : 3),
    },
    ".image": {
      width: theme.spacing(50),
      height: theme.spacing(50),
      borderRadius: theme.spacing(4),
      objectFit: "cover",
    },
    ".flex": {
      display: "flex",
      alignItems: "center",
    },
    ".thumbBox": {
      gap: theme.spacing(5),
    },

    ".iconBox": {
      gap: theme.spacing(2),
    },
    ".font15": {
      fontSize: theme.spacing(7.5),
    },
    ".ratingRow": {
      gap: theme.spacing(4),
      margin: "4px 0",

      ".ratingText": {
        color: theme.text.darkGrey,
        fontSize: theme.spacing(6.5),
      },
    },

    ".ratingBox": {
      backgroundColor: theme.misc.verdantGreen,
      color: theme.graph.secondary,
      padding: theme.spacing(1, 3),
      borderRadius: theme.spacing(2),
      fontSize: theme.spacing(7),
    },

    ".callBtn": {
      marginTop: "10px",
      height: theme.spacing(17.5),
      width: "100%",
    },
  }),
);

function WorkerReviewCard({ isThreeDot, handleThreeDot, data }: PropsI) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));

  return (
    <CardWrapper isMobile={isMobile} isThreeDot={isThreeDot}>
      <Box className="flex" gap={isMobile ? 5 : 10}>
        <img className="image" src={data.profile.url} alt="worker" />

        <Box className="content">
          <Box className="flex" justifyContent={"space-between"}>
            <img height={20} width={50} src={verified} />
            {isThreeDot && (
              <Box>
                <IconButton onClick={handleThreeDot}>
                  <ThreeDots />
                </IconButton>
              </Box>
            )}
          </Box>

          <Box className="thumbBox flex">
            <img width={22} src={new_thumb} alt="thumb_image" />
            <Typography variant="h4">
              {data.first_name} {data.last_name}
            </Typography>
          </Box>

          <Box className="ratingRow flex">
            <Typography variant="h5" className="ratingBox">
              {data.averageRating}
            </Typography>

            <Rating
              name="half-rating-read"
              defaultValue={data.averageRating}
              precision={0.5}
              readOnly
              size={isMobile ? "small" : "medium"}
            />

            <Typography className="ratingText" variant="body1">
              {data.totalReviews} Ratings
            </Typography>
          </Box>

          <Box className="iconBox flex">
            <BlackNormalLocationIcon />
            <Typography className="font15" variant="body1">
              {data.area}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          window.location.href = `tel:${data.mobile_number}`;
        }}
        variant="contained"
        className="callBtn"
      >
        {data.mobile_number}
      </Button>
    </CardWrapper>
  );
}

export default WorkerReviewCard;
