import { EnquiryCard, WorkerCard } from "@Components/Card";
import { FilterButton } from "@Components/FilterButton";
import { Box, styled } from "@mui/material";
import Navbar from "@Views/Navbar";
import React from "react";

const WorkerListStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
  ".Card": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".CardContainer": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(10),
    width: "100vh",
  },
}));
const WorkerList = () => {
  const arr = [1, 2323, 32, 443, 3, 4, 4];
  return (
    <WorkerListStyle>
      {/* <FilterButton name="name" /> */}
      <Box className="Card">
        <Box className="CardContainer">
          {arr.map((val) => (
            <WorkerCard />
          ))}
        </Box>
        <EnquiryCard />
      </Box>
    </WorkerListStyle>
  );
};

export default WorkerList;
