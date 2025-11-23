import { EnquiryCard, WorkerCard } from "@Components/Card";
import { Box, styled } from "@mui/material";
import Navbar from "@Views/Navbar";
import React from "react";

const WorkerListStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent:"space-between",
  padding:theme.spacing(10),
  ".CardContainer": {
    display: "flex",
    flexDirection:"column",
    gap:theme.spacing(10),
    width:'100vh'
  },
}));
const WorkerList = () => {
  const arr = [1, 2323, 32, 443, 3, 4, 4];
  return (
    <WorkerListStyle>
      <Box className="CardContainer">
        {arr.map((val) => (
          <WorkerCard />
        ))}
      </Box>
      <EnquiryCard />
    </WorkerListStyle>
  );
};

export default WorkerList;
