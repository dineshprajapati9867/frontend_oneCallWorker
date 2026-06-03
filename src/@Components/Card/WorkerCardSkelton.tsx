import { Box, Skeleton, styled } from "@mui/material";
import { hooks } from "@Utils/index";
import React from "react";
const WorkerCardSkeletonStyled = styled(Box)<{ isMobile: boolean }>(
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
    ".image": {
      width: isMobile ? theme.spacing(50) : theme.spacing(100),
      height: isMobile ? theme.spacing(65) : theme.spacing(116.5),
      borderRadius: !isMobile && theme.spacing(4),
    },
    ".rightSide": {
      display: "flex",
      flexDirection: "column",
      gap: !isMobile&&theme.spacing(6),
      padding: isMobile?theme.spacing(0,10,10,10): theme.spacing(10),
    },
    ".first": {
      fontSize: isMobile?'100vh':theme.spacing(10.5),
      height: theme.spacing(17.5),
    },
    ".btnGroup": {
      display: "flex",
      gap: theme.spacing(6),
      ".btn": {
        padding: theme.spacing(0, 8),
        height: theme.spacing(29),
        fontSize: theme.spacing(7.5),
        minWidth: !isMobile && theme.spacing(63),
        width: isMobile && "100%",
      },
    },
  })
);
const WorkerCardSkeleton = () => {
  const { isMobile } = hooks.useResponsive();
  return (
    <WorkerCardSkeletonStyled isMobile={isMobile}>
      <Box className="main">
        <Box display={"flex"} mb={isMobile && 5}>
          <Skeleton animation="wave" variant="rectangular" className="image" />
          <Box className="rightSide">
            <Skeleton animation="wave" variant="text" className="first" />
            <Skeleton animation="wave" variant="text" className="first" />
            <Skeleton animation="wave" variant="text" className="first" />
            {!isMobile && (
              <Box className="btnGroup">
                <Skeleton animation="wave" variant="text" className="btn" />
                <Skeleton animation="wave" variant="text" className="btn" />
                {/* <Skeleton animation="wave" variant="text" className="btn" /> */}
              </Box>
            )}
          </Box>
        </Box>

      {isMobile && (
        <Box className="btnGroup">
          <Skeleton animation="wave" variant="text" className="btn" />
          <Skeleton animation="wave" variant="text" className="btn" />
        </Box>
      )}
      </Box>
    </WorkerCardSkeletonStyled>
  );
};

export default WorkerCardSkeleton;
