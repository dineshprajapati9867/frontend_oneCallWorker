import Navbar from "@Views/Navbar";
import React from "react";
import homePage from "@Assets/Images/homePage.png";
import { Box, Button, styled, Typography } from "@mui/material";
import { hooks } from "@Utils/index";
import { ServiceCategoryCard, WorkerCard } from "@Components/index";
import ProfileDrawer from "@Views/User/components/ProfileDrawer";
import { useNavigate } from "react-router-dom";
import WorkerCardSkeleton from "@Components/Card/WorkerCardSkelton";
const HomeStyle = styled(Box)<{isMobile:boolean}>(({ theme ,isMobile}) => ({
  padding: theme.spacing(5),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(22.5),
  },
  ".main": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height:"40vh",
    overflow:"hideen",
    ".heading": {
      fontSize: "2.5vmax",
      whiteSpace: "nowrap",
    },
    ".subHeading": {
      fontSize: "1.2vmax",
      color: theme.palette.secondary.dark,
    },
    ".image": {
      width: "50%",
    },
  },
  ".leftSide": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    ".findBtn": {
      width: theme.spacing(75),
      borderRadius: theme.spacing(3),
      marginTop: theme.spacing(7.5),
    },
  },
  ".serviceCategories": {
    marginBottom: theme.spacing(15),
  },
  ".imageContainer": {
    display: "flex",
    alignItems: "center",
    gap:isMobile?theme.spacing(12): theme.spacing(15),
    
    flexWrap: "wrap",
  },
}));
function HomePage() {
  const navigate = useNavigate();
  const { useGetAllWorkerList } = hooks.useMisc();
  const { data: WorkersListData } = useGetAllWorkerList();
  const { isMobile } = hooks.useResponsive();
  return (
    <>
      <HomeStyle isMobile={isMobile}>
        {!isMobile && (
          <Box className="main" >
            <Box className="leftSide">
              <Typography className="heading" variant="h1">
                Find Skilled Workers Near You
              </Typography>
              <Typography className="subHeading" variant="body1">
                Finding skilled workers near you has never been this easier.{" "}
              </Typography>
              <Button size="medium" className="findBtn" variant="contained">
                Find Worker
              </Button>
            </Box>
            <img className="image" src={homePage} />
          </Box>
        )}
        {!isMobile && (
          <Typography className="serviceCategories" variant="h1">
            Service Categories
          </Typography>
        )}
        <Box className="imageContainer">
          {WorkersListData?.map((val) => {
            return (
              <ServiceCategoryCard
                handleClick={() => {
                  navigate(`/workers/${val.title.split(" ").join("-")}`);
                }}
                title={val.title}
                url={val.image_kit_url}
              />
            );
          })}
        </Box>
      </HomeStyle>
    </>
  );
}

export default HomePage;
