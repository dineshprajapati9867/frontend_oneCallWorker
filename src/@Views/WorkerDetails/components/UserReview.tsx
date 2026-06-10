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
import { Loader } from "@Primitives/Loader";
import dayjs from "dayjs";
import { ThreeDots } from "@Icons/ThreeDots";
import MenuDropdown from "@Primitives/MenuDropdown";
import { EditNormalIcon } from "@Icons/EditIcon";
import { DeleteIcon } from "@Icons/DeleteIcon";

interface PropsI {
  isBorder?: boolean;
  data: interfaces.Review;
  isComment?: boolean;
  isThreeDot?: boolean;
  handleThreeDotsValue?: (data: {
    commentId: string;
    description: string;
  }) => void;
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
    },

    ".action-btn": {
      textTransform: "none",
      color: "#000",
      fontWeight: 500,
      "& .MuiSvgIcon-root": {
        fontSize: "1.2rem",
        marginRight: theme.spacing(1),
      },
    },
  }),
);

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
const UserReview = ({
  isBorder = true,
  data,
  isComment = true,
  isThreeDot,
  handleThreeDotsValue,
}: PropsI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();

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
              {isThreeDot && (
                <MenuDropdown
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
                className="action-btn"
                startIcon={<ThumbUpOutlinedIcon />}
              >
                Helpful (2)
              </Button>
              <Button
                className="action-btn"
                startIcon={<ChatBubbleOutlineOutlinedIcon />}
                onClick={() => {
                  navigate(`/ocwSocial/post/${data._id}`);
                }}
              >
                Comment (2)
              </Button>
              {/* <Button
          className="action-btn"
          startIcon={<ReplyOutlinedIcon sx={{ transform: "scaleX(-1)" }} />}
        >
          Share
        </Button> */}
            </Box>
          )}
        </ReviewCard>
      )}
    </>
  );
};

export default UserReview;
