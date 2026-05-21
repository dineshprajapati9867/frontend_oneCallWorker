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
  handleThreeDot?:()=>void
}
const CardWrapper = styled(Box)<{ isMobile: boolean; isThreeDot: boolean }>(
  ({ theme, isMobile, isThreeDot }) => ({
    border: !isMobile && `1px solid ${theme.misc.borderColor}`,
    borderRadius: "12px",
    padding: !isMobile && theme.spacing(8),
    width: isMobile ? "100%" : !isThreeDot ? theme.spacing(240) : "100%",
    minWidth: isMobile ? "100%" : theme.spacing(240),
    minHeight: !isMobile && theme.spacing(105),
    boxSizing: "border-box",
    backgroundColor:!isMobile&& theme.misc.cardBG,
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

function WorkerReviewCard({ isThreeDot,handleThreeDot }: PropsI) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  return (
    <CardWrapper isMobile={isMobile} isThreeDot={isThreeDot}>
      <Box className="flex" gap={isMobile ? 5 : 10}>
        <img
          className="image"
          src="data:image/jpeg;base64,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"
          alt="worker"
        />

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
            <Typography variant="h4">Dinesh Prajapati</Typography>
          </Box>

          <Box className="ratingRow flex">
            <Typography variant="h5" className="ratingBox">
              4.5
            </Typography>

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              size={isMobile ? "small" : "medium"}
            />

            <Typography className="ratingText" variant="body1">
              306 Ratings
            </Typography>
          </Box>

          <Box className="iconBox flex">
            <BlackNormalLocationIcon />
            <Typography className="font15" variant="body1">
              MALAD WEST Malad West, Mumbai
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="contained" className="callBtn">
        09845436409
      </Button>
    </CardWrapper>
  );
}

export default WorkerReviewCard;
