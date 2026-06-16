import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/material";
import UserReview from "./UserReview";
import WorkerReviewCard from "./WorkerReviewCard";
import { Loader } from "@Primitives/index";
import CommentInput from "@Components/CommentInput";
import { hooks } from "@Utils/index";
import { useParams } from "react-router-dom";
import { EditNormalIcon } from "@Icons/EditIcon";
import { DeleteIcon } from "@Icons/DeleteIcon";

const optionThreeDot = [
  {
    id: 1,
    label: "Edit Comment",
    icon: <EditNormalIcon width={20} height={20} />,
  },
  {
    id: 2,
    label: "Delete Comment",
    icon: <DeleteIcon />,
  },
];
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
    useGetAllCommentsOfReview,
    handleDeleteReviewComment,
    handleUpdateReviewComment,
    isUpdateReviewCommentLoading,
    handleToggleReviewLike,
    isToggleReviewLikeLoading,
  } = hooks.useMisc();
  const { data, isLoading } = useGetReviewDetailsById(id);
  const {
    data: getAllCommentsOfReview,
    isLoading: isGetAllCommentsOfReviewLoading,
  } = useGetAllCommentsOfReview(id);

  const user = JSON.parse(localStorage.getItem("user"));

  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmitComment = () => {
    if (!comment) return;

    if (isEdit) {
      handleUpdateReviewComment({
        commentId: editingCommentId,
        description: comment,
      });

      setIsEdit(false);
      setEditingCommentId("");
      setComment("");
      return;
    }

    handleCommentOnReview({
      reviewId: id,
      description: comment,
    });

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
                <UserReview                           isLikeLoading={isToggleReviewLikeLoading}
                          handleLike={(val) => {
                            handleToggleReviewLike(val);
                          }} data={data} isBorder={false} />
              </Box>
              <>
                <Box className="CommentInputBox">
                  <Box paddingX={isMobile ? 5 : 10} py={4}>
                    <CommentInput
                      avatarSrc={user?.picture}
                      isAvatar={true}
                      postButtonText={
                        <span
                          onClick={
                            isCommentOnReviewLoading ||
                            isUpdateReviewCommentLoading
                              ? undefined
                              : handleSubmitComment
                          }
                        >
                          {isEdit ? "Update" : "Post"}
                        </span>
                      }
                      placeholder="Add a Comment"
                      disabled={isCommentOnReviewLoading}
                      value={comment}
                      onChange={(val) => setComment(val.target.value)}
                    />
                  </Box>
                </Box>

                <>
                  {isGetAllCommentsOfReviewLoading ? (
                    <Loader type="table" />
                  ) : (
                    getAllCommentsOfReview &&
                    getAllCommentsOfReview.comments.map((val) => (
                      <Box padding={10} key={val._id}>
                        <UserReview
                          data={val}
                          isBorder={false}
                          isThreeDot={val.userId?._id === user?._id}
                          isComment={false}
                          handleThreeDotsValue={(data) => {
                            if (data.description === "Delete Comment") {
                              handleDeleteReviewComment(data.commentId);
                            } else {
                              setComment(data.description);
                              setEditingCommentId(data.commentId);
                              setIsEdit(true);
                            }
                          }}
                          optionThreeDot={optionThreeDot}
                        />
                      </Box>
                    ))
                  )}
                </>
              </>
            </Box>
            <WorkerReviewCard data={data.workerId} />
          </ReviewCommentsStyle>
        )
      )}
    </>
  );
};

export default ReviewComments;
