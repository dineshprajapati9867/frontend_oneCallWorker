import React from "react";
import {
  BlackNormalLocationIcon,
  StarMuiIcon,
  WhatsAppIcon,
  CallMuiIcon,
  ChatMuiIcon,
} from "@Icons/index";
import { Box, Button, styled, Tooltip, Typography } from "@mui/material";
import { hooks } from "@Utils/index";
import { useNavigate } from "react-router-dom";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import { VerifyAnimation } from "@Primitives/index";
import verified from "@Assets/Images/verified.gif";
import new_thumb from "@Assets/Images/new_thumb_icon.svg";
// import { ToolTip } from "@Primitives/Tooltip";
const WorkerCardStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    ".main": {
      borderRadius: !isMobile && theme.spacing(5),
      cursor: "pointer",
      width: "100%",
      maxHeight: isMobile ? theme.spacing(120) : theme.spacing(132.5),
      height: "100%",
      border: `1px solid ${theme.misc.borderColor}`,
      boxSizing: "border-box",
      //display: "flex",
      // flexDirection: "column",
      position: "relative",
      padding: theme.spacing(7.5),
      //flexDirection:isMobile?'column':"row",
    },
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
      paddingRight: "0px",
    },
    ".thumbBox": {
      gap: theme.spacing(5),
    },
    ".image": {
      height: !isMobile && "100%",
      width: isMobile ? theme.spacing(50) : theme.spacing(100),
      borderRadius: theme.spacing(4),
      objectFit: "cover",
    },
    ".ratingBox": {
      gap: theme.spacing(isMobile ? 3 : 6),
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
        fontSize: theme.spacing(7.5),
        fontWeight: 500,
        minWidth: !isMobile && theme.spacing(63),
        width: isMobile && "100%",
      },
      ".enquiryBtn": {
        backgroundColor: theme.text.lightBlue,
        color: theme.graph.secondary,
        border: "none",
      },
    },
  }),
);

const WorkerCard = () => {
  const { isMobile } = hooks.useResponsive();
  const navigate = useNavigate();
  const ButtonGroups = () => {
    return (
      <>
        <Button
          className="btn"
          variant="contained"
          startIcon={<CallMuiIcon className="commonIconStyle" />}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            window.location.href = "tel:7039824822";  
          }}
        >
          7039824833
        </Button>
        {/* <Button
          variant="outlined"
          startIcon={<ChatMuiIcon />}
          className="btn enquiryBtn"
        >
          Send Enquiry
        </Button> */}
        <Button
          className="btn"
          variant="outlined"
          startIcon={<WhatsAppIcon width={15} height={15} />}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            window.open("https://wa.me/7039824933", "_blank");
             (e.currentTarget as HTMLButtonElement).blur();
          }}
        >
          WhatsApp
        </Button>
      </>
    );
  };

  const handleCard = (e) => {
    navigate("/worker/098765678");
  };
  return (
    <WorkerCardStyle isMobile={isMobile}>
      <Box className="main" onClick={handleCard}>
        <Box display={"flex"} mb={isMobile && 5}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjz0S_eXnprzunfLmYiQEBNzmWbs8_iWR5A&s"
            alt="image"
            className="image"
          />
          <Box className="rightSide">
            <Box className="thumbBox flex">
              <img src={new_thumb} alt="thumb_image" />
              <Typography variant="h4">Dinesh Prajapati</Typography>
            </Box>
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
              <Tooltip
                arrow={true}
                title={"This Profile Information is verified by oneCallWorker."}
              >
                <img height={30} src={verified} />
              </Tooltip>
            </Box>
            <Box className="iconBox flex">
              <BlackNormalLocationIcon />
              <Typography className="font15" variant="body1">
                MALAD WEST Malad West, Mumbai
              </Typography>
            </Box>

            {!isMobile && (
              <Box className="btnGroup">
                <ButtonGroups />
                {/* <Button
                  className="btn"
                  variant="outlined"
                  startIcon={<WhatsAppIcon width={15} height={15} />}
                >
                  WhatsApp
                </Button> */}
              </Box>
            )}
          </Box>
        </Box>
        {isMobile && (
          <Box className="btnGroup">
            <ButtonGroups />
          </Box>
        )}
      </Box>
    </WorkerCardStyle>
  );
};

export default WorkerCard;
