import StarRating from "@Components/StarRating";
import UploadImage from "@Components/UploadImage";
import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Address } from "@Primitives/Address";
import React, { useState } from "react";
const ratingLabels = {
  1: { text: "Terrible", emoji: "😡" },
  2: { text: "Bad", emoji: "😕" },
  3: { text: "Average", emoji: "😐" },
  4: { text: "Good", emoji: "🙂" },
  5: { text: "Excellent", emoji: "😍" },
};
const StyleWrite = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    padding: isMobile && theme.spacing(0, 10),
    ".fW500": {
      fontWeight: 500,
    },
    ".fS20": {
      fontSize: isMobile ? ` ${theme.spacing(8)}!important` : theme.spacing(10),
    },
    ".mt20": {
      marginTop: theme.spacing(10),
    },
    ".main": {
      display: "flex",

      justifyContent: "center",
    },
    ".content": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
    },
    ".header": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(10),

      " .subHeadingText": {
        fontSize: ` ${theme.spacing(7.5)}!important`,
        color: theme.text.darkGrey,
        marginTop: theme.spacing(2.5),
      },
    },
    ".image": {
      widht: theme.spacing(50),
      borderRadius: theme.spacing(5),
      height: theme.spacing(50),
    },
    ".ratingBox": {
      display: "inline-flex",
      width: "fit-content",
      padding: theme.spacing(5, 9),
      height: theme.spacing(20),
      borderRadius: theme.spacing(10),
      border: `1px solid ${theme.misc.borderColor}`,
      boxSizing: "border-box",
      gap: theme.spacing(5),
      alignItems: "center",
    },
    ".submitBtn": {
      width: isMobile ? "100%" : theme.spacing(120),
      marginBottom: !isMobile && theme.spacing(10),
    },
    ".submitBox": {
      ...(isMobile && {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
        backgroundColor: theme.misc.lightGrayBG,
        padding: theme.spacing(5, 10),
        boxSizing: "border-box",
      }),
    },
  }),
);
function WriteReview() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [rating, setRating] = useState(1);
  return (
    <StyleWrite isMobile={isMobile}>
      <Box className="main">
        <Box className="content">
          <Typography variant="h3" className="fW500 mt20">
            Write Review
          </Typography>
          <Box className="header">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNcCdGom-PPruozY501VScVdQTMfQFlAVQQ&s"
            />
            <Box>
              <Typography variant="h5" className="fS20">
                Kulkarni Guruji Dharmik Vidhi Kendra
              </Typography>
              <Typography variant="body1" className="subHeadingText">
                Borivali West
              </Typography>
            </Box>
          </Box>
          <Typography variant="h5" className="fW500">
            How would you rate your experience?
          </Typography>
          <StarRating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
          <Box className="ratingBox">
            <Typography variant="h5" className=" fW500">
              {ratingLabels[rating]?.text}
            </Typography>
            <span>{ratingLabels[rating]?.emoji}</span>
          </Box>
          <Box className="experience">
            <Typography variant="body1" className="fS20">
              Tell us about your experience
            </Typography>

            <Address minRows={5} placeholder="Tell us about your experience" />
          </Box>
          <Typography variant="body1" className="fS20">
            Upload Photos
          </Typography>
          <UploadImage />
          <Box className="submitBox">
            <Button className="submitBtn" variant="contained">
              Submit Review
            </Button>
          </Box>
        </Box>
      </Box>
    </StyleWrite>
  );
}

export default WriteReview;
