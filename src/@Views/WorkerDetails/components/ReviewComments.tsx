import React, { useState } from "react";
import { Box, Button, styled, useMediaQuery } from "@mui/material";
import UserReview from "./UserReview";
import WorkerReviewCard from "./WorkerReviewCard";
import { Loader, TextInput } from "@Primitives/index";
import CommentInput from "@Components/CommentInput";
import { hooks } from "@Utils/index";
import { useParams } from "react-router-dom";

const ReviewCommentsStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    display: "flex",
    gap: theme.spacing(10),
    padding: theme.spacing(isMobile ? 5 : 10),
    flexDirection: isMobile ? "column-reverse" : "row",
    justifyContent: "space-between",
    ".left": {
      border: `1px solid ${theme.misc.borderColor}`,
      borderRadius: theme.spacing(3),
      width: "100%",
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
  const { id } = useParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const {
    useGetReviewDetailsById,
    handleCommentOnReview,
    isCommentOnReviewLoading,
  } = hooks.useMisc();
  const { data, isLoading } = useGetReviewDetailsById(id);
  const user = JSON.parse(localStorage.getItem("user"));

  const [comment, setComment] = useState("");

  const handleSubmitComment = () => {
    if (!comment.trim()) return;
    handleCommentOnReview({ reviewId: id,comment }); 
    setComment(""); 
  };
  return (
    <>
      {isLoading ? (
        <Loader type="table" />
      ) : (
        data && (
          <ReviewCommentsStyle isMobile={isMobile}>
            <Box className="left">
              <Box padding={10}>
                <UserReview
                  data={data}
                  isLoading={isLoading}
                  isBorder={false}
                />
              </Box>
              <Box className="CommentInputBox">
                <Box paddingX={isMobile ? 5 : 10} py={4}>
                  <CommentInput
                    avatarSrc={user?.picture}
                    isAvatar={true}
                    postButtonText={
                      <span onClick={handleSubmitComment}>Post</span>
                    }
                    placeholder="Add a Comment"
                    disabled={isCommentOnReviewLoading}
                    value={comment}
                    onChange={(val) => setComment(val.target.value)}
                  />
                </Box>
              </Box>
            </Box>
            <WorkerReviewCard data={data.workerId} />
          </ReviewCommentsStyle>
        )
      )}
    </>
  );
};

export default ReviewComments;
