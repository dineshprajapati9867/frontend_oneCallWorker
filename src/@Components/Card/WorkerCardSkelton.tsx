import { Box, Skeleton, styled } from "@mui/material";
import React from "react";
const WorkerCardSkeletonStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(7.5),
  gap: theme.spacing(7.5),
  boxSizing: "border-box",
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(5),
  height: theme.spacing(132.5),
  ".image": {
    height: theme.spacing(116.5),
    width: theme.spacing(100),
    borderRadius: theme.spacing(4),
  },
  ".rightSide": {
    padding: theme.spacing(10),
  },
  ".first": {
    fontSize: theme.spacing(10.5),
    height: theme.spacing(17.5),
  },
  ".btnGroup": {
    display: "flex",
    gap: theme.spacing(6),
    ".btn": {
      padding: theme.spacing(0, 8),
      height: theme.spacing(29),
      fontSize: theme.spacing(7.5),
      minWidth: theme.spacing(63),
    },
  },
}));
const WorkerCardSkeleton = () => {
  return (
    <WorkerCardSkeletonStyled>
      <Skeleton animation="wave" variant="rectangular" className="image" />
      <Box className="rightSide">
        <Skeleton animation="wave" variant="text" className="first" />
        <Skeleton animation="wave" variant="text" className="first" />
        <Skeleton animation="wave" variant="text" className="first" />
        <Box className="btnGroup">
          <Skeleton animation="wave" variant="text" className="btn" />
          <Skeleton animation="wave" variant="text" className="btn" />
          <Skeleton animation="wave" variant="text" className="btn" />
        </Box>
      </Box>
    </WorkerCardSkeletonStyled>
  );
};

export default WorkerCardSkeleton;
