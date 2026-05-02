import React from "react";
import { Box, styled, useMediaQuery } from "@mui/material";
import UserReview from "./UserReview";
import WorkerReviewCard from "./WorkerReviewCard";
import { TextInput } from "@Primitives/index";
import CommentInput from "@Components/CommentInput";

const ReviewCommentsStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    display: "flex",
    gap: theme.spacing(10),
    padding: theme.spacing(isMobile ? 5 : 10),
    flexDirection: isMobile ? "column-reverse" : "row",
    ".left": {
      border: `1px solid ${theme.misc.borderColor}`,
      borderRadius: theme.spacing(3),
    },
    ".CommentInputBox": {
      backgroundColor: `${theme.misc.lightGrayBG}`,
      ...(isMobile && {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
      }),
    },
  }),
);

const ReviewComments = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  return (
    <ReviewCommentsStyle isMobile={isMobile}>
      <Box className="left">
        <Box padding={10}>
          <UserReview isBorder={false} />
        </Box>
        <Box className="CommentInputBox">
          <Box paddingX={isMobile ? 5 : 10} py={4}>
            <CommentInput
              avatarSrc="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
              postButtonText={"Post"}
              placeholder="Add a Comment"
            />
          </Box>
        </Box>
      </Box>
      <WorkerReviewCard />
    </ReviewCommentsStyle>
  );
};

export default ReviewComments;
