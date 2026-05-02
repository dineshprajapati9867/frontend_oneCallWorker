import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  IconButton,
  styled,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useNavigate } from "react-router-dom";

interface PropsI{
  isBorder?:boolean
}
const ReviewCard = styled(Box)<{isBorder:boolean,isMobile:boolean}>(({ theme,isBorder ,isMobile}) => ({
  padding: theme.spacing(10, 2),
  width:"100%",
  borderTop:isBorder&& `1px solid ${theme.misc.borderColor}`,
  borderBottom:isBorder&&  `1px solid ${theme.misc.borderColor}`,

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
    gap:!isMobile&& theme.spacing(15),
    paddingTop: theme.spacing(1),
    ...(isMobile&&{
      justifyContent:"space-between"
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
}));

const UserReview = ({isBorder=true}:PropsI) => {
  const isMobile=useMediaQuery((theme)=>theme.breakpoints.only("xs"))
    const navigate=useNavigate();
  
  return (
    <ReviewCard isBorder={isBorder} isMobile={isMobile}>
      <Box className="headers">
        <Box className="user-info">
          <Avatar
            src="https://via.placeholder.com/40"
            alt="Neha Sharma"
            variant="rounded"
          />
          <Typography variant="h5">Neha Sharma</Typography>
        </Box>
        <Box className="user-info">
          <Typography variant="body1" color="text.secondary">
            28 Jan 2025
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <Rating value={1} readOnly size="small" />

      <Typography variant="body1" className="review-text">
        “Very bad experience.. Maine ghar par satyanarayan ki katha rakhi thi
        Pandit ji khud nahi aaye apne shishya ko bhej diya.. Aur bataya bhi nahi
        ki Khud nahi aayenge.. Shishya ko kuch ata hi nahi tha.. Puja samagri ke
        1500 rupye liye par theek se saman bhi nahi laye.. Shankh, ghanta
        vagerah kuch nahi tha.. Akshat ki jagah khandit chaval lekar aaye the..
      </Typography>

      <Box className="image-box">
        <img
          className="review-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW1LFVLrTeSynKd6fZW2JFbbIwM3-jBJilg&s"
          alt="Review attachment"
        />
      </Box>

      <Box className="action-bar">
        <Button className="action-btn" startIcon={<ThumbUpOutlinedIcon />}>
          Helpful (2)
        </Button>
        <Button
          className="action-btn"
          startIcon={<ChatBubbleOutlineOutlinedIcon />}
          onClick={()=>{
            navigate('/ocwSocial/post/09898')
          }}
        >
          Comment (2)
        </Button>
        <Button
          className="action-btn"
          startIcon={<ReplyOutlinedIcon sx={{ transform: "scaleX(-1)" }} />}
        >
          Share
        </Button>
      </Box>
    </ReviewCard>
  );
};

export default UserReview;
