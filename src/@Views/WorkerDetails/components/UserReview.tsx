import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  IconButton,
  styled,
  Button,
  useMediaQuery,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { interfaces } from "@Utils/index";
import dayjs from "dayjs";
import MenuDropdown from "@Primitives/MenuDropdown";
import { EditNormalIcon } from "@Icons/EditIcon";
import { DeleteIcon } from "@Icons/DeleteIcon";
import { ThreeDots } from "@Icons/ThreeDots";
interface PropsI {
  isBorder?: boolean;
  data: interfaces.Review;
  isComment?: boolean;
  isThreeDot?: boolean;
  handleThreeDotsValue?: (data: {
    commentId: string;
    description: string;
  }) => void;
  handleLike?: (val: string) => void;
  isLikeLoading?: boolean;
  optionThreeDot?: {
    id: number;
    label: string;
    icon: React.ReactNode;
  }[];
  isDeleteLoading?: boolean;
}
const ReviewCard = styled(Box)<{ isBorder: boolean; isMobile: boolean }>(
  ({ theme, isBorder, isMobile }) => ({
    padding: theme.spacing(10, 2),
    // width:"100%",
    // borderTop:isBorder&& `1px solid ${theme.misc.borderColor}`,
    // borderBottom:isBorder&&  `1px solid ${theme.misc.borderColor}`,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),

    ".headers": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
    },

    ".user-info": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(6),
    },

    ".rating-row": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      margin: theme.spacing(1, 0),
    },

    ".review-text": {
      margin: theme.spacing(2, 0),
    },

    ".image-box": {
      width: 100,
      height: 100,
      borderRadius: theme.spacing(2),
      overflow: "hidden",
      cursor: "pointer",
      marginTop: theme.spacing(2),
      "&:hover img": {
        transform: "scale(1.1)",
      },
    },

    ".review-img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease-in-out",
    },

    ".action-bar": {
      marginTop: theme.spacing(3),
      display: "flex",
      gap: !isMobile && theme.spacing(15),
      paddingTop: theme.spacing(1),
      ...(isMobile && {
        justifyContent: "space-between",
      }),
      ".disable": {
        opacity: "0.5",
      },
      ".btnBox": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(3),
        cursor: "pointer",
      },
    },

    // ".action-btn": {
    //   textTransform: "none",
    //   color: "#000",
    //   fontWeight: 500,
    //   "& .MuiSvgIcon-root": {
    //     fontSize: "1.2rem",
    //     marginRight: theme.spacing(1),
    //   },
    // },
  }),
);

const UserReview = ({
  isBorder = true,
  data,
  isComment = true,
  isThreeDot,
  handleLike,
  handleThreeDotsValue,
  isLikeLoading,
  optionThreeDot,
  isDeleteLoading,
}: PropsI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {data && (
        <ReviewCard isBorder={isBorder} isMobile={isMobile}>
          <Box className="headers">
            <Box className="user-info">
              <Avatar src={data?.reviewerId?.picture} variant="rounded">
                {data?.reviewerId?.name &&
                  data?.reviewerId?.name.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="h5">
                {data?.reviewerId?.name || data?.userId?.name}
              </Typography>
            </Box>
            <Box className="user-info">
              <Typography variant="body1" color="text.secondary">
                {dayjs(data.createdAt).format("DD-MMM-YYYY hh:mm A")}
              </Typography>
              {isThreeDot &&
                (user?._id === data.reviewerId?._id ||
                  user?._id === data.userId?._id) && (
                  <MenuDropdown
                    disabled={isDeleteLoading}
                    handleClickOnMenu={(val) => {
                      if (val === "Edit Comment") {
                        handleThreeDotsValue({
                          commentId: data._id,
                          description: data.description,
                        });
                      } else {
                        handleThreeDotsValue({
                          commentId: data._id,
                          description: val,
                        });
                      }
                    }}
                    options={optionThreeDot}
                  />
                )}
            </Box>
          </Box>

          {isComment && <Rating value={data.rating} readOnly size="small" />}

          <Typography variant="body1" className="review-text">
            {data.description}
          </Typography>

          {data?.images?.length > 0 &&
            data.images.map((data) => (
              <Box className="image-box">
                <img className="review-img" src={data.url} />
              </Box>
            ))}

          {isComment && (
            <Box className="action-bar">
              <Button
                disabled={isLikeLoading}
                className={`btnBox ${isLikeLoading ? "disable" : ""}`}
                onClick={() => handleLike(data._id)}
              >
                <ThumbUpOutlinedIcon
                  color={data.likes.includes(user?._id) ? "info" : "primary"}
                />

                <Typography variant="subtitle1">
                  {" "}
                  Helpful {data.likes.length > 0 && data.likes.length}
                </Typography>
              </Button>

              <Button
                disabled={isLikeLoading}
                className={`btnBox ${isLikeLoading ? "disable" : ""}`}
                onClick={() => {
                  navigate(`/ocwSocial/post/${data._id}`);
                }}
              >
                <ChatBubbleOutlineOutlinedIcon color="primary" />

                <Typography variant="subtitle1">
                  Comment {data.total_comments > 0 && data.total_comments}
                </Typography>
              </Button>
            </Box>
          )}
        </ReviewCard>
      )}
    </>
  );
};

export default UserReview;
