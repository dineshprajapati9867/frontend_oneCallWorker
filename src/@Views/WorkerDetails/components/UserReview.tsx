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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { hooks, interfaces } from "@Utils/index";
import { Loader } from "@Primitives/Loader";
import dayjs from "dayjs";

interface PropsI {
  isBorder?: boolean;
  data:interfaces.Review,isLoading:boolean
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

const UserReview = ({ isBorder = true,isLoading,data }: PropsI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const navigate = useNavigate();

 
  return (
    <>
      {isLoading ? (
        <Loader type="table" />
      ) : (
        data &&
   
        
            <ReviewCard  isBorder={isBorder} isMobile={isMobile}>
              <Box className="headers">
                <Box className="user-info">
                  <Avatar
                    src={data.reviewerId.picture}
                    alt="Neha Sharma"
                    variant="rounded"
                    
                  >
                    {data.reviewerId.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography variant="h5">{data.reviewerId.name}</Typography>
                </Box>
                <Box className="user-info">
                  <Typography variant="body1" color="text.secondary">
                    
                    {dayjs(data.createdAt).format('DD-MMM-YYYY')}
                  </Typography>
                  {/* <IconButton size="small">
            <MoreVertIcon />
          </IconButton> */}
                </Box>
              </Box>

              <Rating value={data.rating} readOnly size="small" />

              <Typography variant="body1" className="review-text">
                {data.description}
              </Typography>

              {data.images.length>0&& data.images.map((data) => (
                <Box className="image-box">
                  <img className="review-img" src={data.url} />
                </Box>
              ))}

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
                  // onClick={() => {
                  //   navigate(`/ocwSocial/post/${data._id}`);
                  // }}
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
            </ReviewCard>
        
      )}
    </>
  );
};

export default UserReview;
