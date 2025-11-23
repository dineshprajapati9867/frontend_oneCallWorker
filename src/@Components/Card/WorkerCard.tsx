import React from "react";
import {
  SmallLocationWithInsideCircle,
  StarMuiIcon,
  WhatsAppIcon,
  CallMuiIcon,
  ChatMuiIcon
} from "@Icons/index";
import { Box, Button, styled, Typography } from "@mui/material";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import { VerifyAnimation } from "@Primitives/index";

const WorkerCardStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(5),
  cursor: "pointer",
  width: '100%',
  height: theme.spacing(132.5),
  border: `1px solid ${theme.misc.borderColor}`,
  boxSizing: "border-box",
  display: "flex",
  // flexDirection: "column",
  position: "relative",
  padding:theme.spacing(7.5),
  ".flex": {
    display: "flex",
    alignItems: "center",
  },
  ".font15": {
    fontSize: theme.spacing(7.5),
  },
  ".VerifyAnimation": {
    position: "absolute",
    right: theme.spacing(2.5),
    top: theme.spacing(2.5),
    height: theme.spacing(20),
    width: theme.spacing(20),
  },
  ".rightSide": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
    padding: theme.spacing(10),
    paddingRight:'0px'
  },
  ".image": {
    height: '100%',
    width: theme.spacing(100),
    borderRadius: theme.spacing(4),
    objectFit:"cover"
  },
  ".ratingBox": {
    gap: theme.spacing(6),
  },
  ".commonIconStyle": {
    width: theme.spacing(7.5),
    height: theme.spacing(7.5),
  },
  ".starRatingBox": {
    display: "flex",
    alignItems: "center",
    minHeight: theme.spacing(13.5),
    width: theme.spacing(26),
    gap: theme.spacing(1),
    backgroundColor: theme.misc.verdantGreen,
    padding: theme.spacing(0, 2.5),
    borderRadius: theme.spacing(3),
    justifyContent: "center",
    color: theme.graph.secondary,
    boxSizing: "border-box",
    ".rating": {
      color: theme.graph.secondary,
    },
  },
  ".ratings": {
    color: theme.text.darkGrey,
    fontSize: theme.spacing(7.5),
  },
  ".iconBox": {
    gap: theme.spacing(2),
  },
  ".btnGroup": {
    display: "flex",
    gap: theme.spacing(6),
    ".btn": {
      padding: theme.spacing(0, 8),
      height: theme.spacing(17.5),
      fontSize:theme.spacing(7.5),
      fontWeight:500,
      minWidth:theme.spacing(63)
    },
    '.enquiryBtn':{
      backgroundColor:theme.text.lightBlue,
      color:theme.graph.secondary,
      border:'none'
    }
  },
}));
const WorkerCard = () => {
  return (
    <WorkerCardStyle>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjz0S_eXnprzunfLmYiQEBNzmWbs8_iWR5A&s"
        alt="image"
        className="image"
      />
      {/* <Box className="VerifyAnimation">
        <VerifyAnimation />
      </Box> */}
      <Box className="rightSide">
        <Typography variant="h4">Dinesh Prajapati</Typography>
        <Box className="ratingBox flex">
          <Box className="starRatingBox">
            <Typography className="rating font15" variant="h5">
              4.2
            </Typography>
            <StarMuiIcon className="commonIconStyle" />
          </Box>

          <Typography className="ratings" variant="body1">
            50 Ratings
          </Typography>
        </Box>
        <Box className="iconBox flex">
          <SmallLocationWithInsideCircle />
          <Typography className="font15" variant="body1">
            MALAD WEST Malad West, Mumbai
          </Typography>
        </Box>

        <Box className="btnGroup">
          <Button
            className="btn"
            variant="contained"
            startIcon={<CallMuiIcon className="commonIconStyle" />}
          >
            7039824822
          </Button>
          <Button
            className="btn"
            variant="outlined"
            startIcon={<WhatsAppIcon width={15} height={15} />}
          >
            WhatsApp
          </Button>
          <Button
          variant="outlined"
          startIcon={<ChatMuiIcon />}
          className="btn enquiryBtn"
          >
            Send Enquiry
          </Button>
        </Box>
      </Box>
    </WorkerCardStyle>
  );
};

export default WorkerCard;
