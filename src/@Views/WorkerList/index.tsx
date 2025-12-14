import { EnquiryCard, WorkerCard } from "@Components/Card";
import WorkerCardSkeleton from "@Components/Card/WorkerCardSkelton";
import { FilterButton } from "@Components/FilterButton";
import { Box, styled } from "@mui/material";
import { hooks } from "@Utils/index";
import Navbar from "@Views/Navbar";
import React from "react";

const WorkerListStyle = styled(Box)<{ hideEnquiry: boolean,isMobile:boolean }>(
  ({ theme, hideEnquiry,isMobile }) => ({
     padding:!isMobile&& theme.spacing(10),
    ".Card": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      gap: theme.spacing(10),
    },
    ".CardContainer": {
      display: "flex",
      flexDirection: "column",
      gap: !isMobile&&theme.spacing(10),
      width: hideEnquiry ? "calc(100% - 336px)" : "100%",
    },
  })
);
const WorkerList = () => {
  const { isLaptop, isDeskTop,isMobile } = hooks.useResponsive();
  const arr = [1, 2323, 32, 443, 3, 4, 4];
  return (
    <WorkerListStyle hideEnquiry={isLaptop || isDeskTop} isMobile={isMobile}>
      {/* <FilterButton name="name" /> */}
      <Box className="Card">
        <Box className="CardContainer">
          {arr.map((val) => (
            // <WorkerCard />
            <WorkerCardSkeleton/>
          ))}
        </Box>
        {(isLaptop || isDeskTop) && <EnquiryCard />}
      </Box>
    </WorkerListStyle>
  );
};

export default WorkerList;
