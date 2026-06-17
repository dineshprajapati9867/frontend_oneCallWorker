import { ChevronLeftIconDarkBlack } from "@Icons/LeftArrow";
import {
  Box,
  Drawer,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import WorkerReviewCard from "@Views/WorkerDetails/components/WorkerReviewCard";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomActionDrawer from "./components/BottomActionDrawer";

const SavedWorkersStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    height: "100vh",
    overflowY: "auto",

    ".main": {
      maxWidth: "980px",
      margin: "0 auto",
    },
    ".cardBox": {
      padding: theme.spacing(5),
    },
    ".header": {
      ...(isMobile && {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${theme.misc.borderColor}`,
        padding: theme.spacing(4, 0),
      }),
    },
    ".savedText": {
      padding: !isMobile && theme.spacing(10, 0, 5, 5),
    },
  }),
);

export default function SavedWorkers() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [openBottomDrawer, setOpenBottomDrawer] = useState(false);
  const location = useLocation();
  const isModal = location.state?.modal;
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  const dummyWorkers = 
  {
    _id: "2",
    first_name: "Rahul",
    last_name: "Sharma",
    area: "Navi Mumbai",
    mobile_number: "9876543211",
    averageRating: 3.8,
    totalReviews: 12,
    profile: {
      url: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
  }
  const content = () => {
    return (
      <SavedWorkersStyle isMobile={isMobile}>
        <Box className="main">
          <Box className="header">
            {isMobile && (
              <IconButton onClick={handleClose}>
                <ChevronLeftIconDarkBlack />
              </IconButton>
            )}
            <Typography className="savedText" variant="h4" mb={2}>
              Saved {isMobile && "Items"}
            </Typography>
            {isMobile && <span />}
          </Box>
          <Box className="cardBox" my={5}>
            <WorkerReviewCard data={dummyWorkers} isThreeDot={true} handleThreeDot={()=>{
setOpenBottomDrawer(true)
            }} />
          </Box>
        </Box>
      </SavedWorkersStyle>
    );
  };
  return (
    <>
      {isMobile ? (
        <Drawer
          sx={{
            ".MuiPaper-root": {
              width: "100vw",
            },
          }}
          anchor="right"
          open={isModal && isMobile}
          onClose={handleClose}
        >
          {content()}
        </Drawer>
      ) : (
        content()
      )}

      {openBottomDrawer&&<BottomActionDrawer open={openBottomDrawer} onClose={()=>{
        setOpenBottomDrawer(false)
      }}/>}
    </>
  );
}
