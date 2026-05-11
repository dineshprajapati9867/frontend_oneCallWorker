//import Navbar from "@Views/Navbar";
import React, { lazy, Suspense, useState } from "react";
import homePage from "@Assets/Images/homePage.png";
import callDirectly from "@Assets/Images/callDirectly.png";
import chooseService from "@Assets/Images/chooseService.png";
import bar from "@Assets/Images/bar.svg";
//import circle from "@Assets/Images/circle.png";

import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import { hooks } from "@Utils/index";
import { ServiceCategoryCard, WorkerCard } from "@Components/index";
import { useNavigate } from "react-router-dom";
import { ServiceCategoryCardSkeleton } from "@Components/Card";
//import PopularCategoriesModal from "@Views/PopularCategoriesModal";
import { serviceCategoryI } from "@Utils/interfaces";

const PopularCategoriesModal = lazy(
  () => import("@Views/PopularCategoriesModal"),
);
const HomeStyle = styled(Box)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  padding: theme.spacing(5),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(22.5),
  },
  ".main": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //height:"40vh",
    overflow: "hideen",
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
  //     '.serviceBox':{
  //  display: "flex",
  //  justifyContent:"space-between",
  //    margin: theme.spacing(15,0),

  //    '.viewBtn':{
  //     borderRadius:theme.spacing(15)
  //    }
  //   },
  ".imageContainer": {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(4, 1fr)" : "repeat(7,1fr)",
    alignItems: "start",
    gap: isMobile ? theme.spacing(6) : theme.spacing(15),
    margin: isMobile ? theme.spacing(10, 0) : theme.spacing(15, 0),

    ".popularCategories": {
      cursor: "pointer",
      width: isMobile ? "100%" : "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      ".imageBox": {
        padding: isMobile ? 0 : theme.spacing(15),
        border: isMobile ? "none" : `1px solid`,
        borderRadius: isMobile ? 0 : theme.spacing(7),
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: isMobile ? "none" : "0px 2px 10px rgba(0,0,0,0.1)",
        },
      },

      ".image": {
        width: isMobile ? 45 : 80,
        height: isMobile ? 45 : 80,
        objectFit: "cover",
        borderRadius: isMobile ? theme.spacing(2) : theme.spacing(7),
      },

      ".service-name": {
        marginTop: theme.spacing(3),
        textAlign: "center",
        fontWeight: 500,
        fontSize: isMobile ? theme.spacing(5) : theme.spacing(8),
        lineHeight: 1.2,
      },
    },
  },
  ".howItWork": {
    marginTop: theme.spacing(20),

    ".heading": {
      marginBottom: theme.spacing(20),
      ...(isMobile && {
        fontSize: `${theme.spacing(14)} !important`,
      }),
    },

    ".stepBox": {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-evenly",
      gap: isMobile && theme.spacing(20),
    },
    ".stepCard": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    ".step": {
      width: isMobile ? 65 : 82,
      height: isMobile ? 65 : 82,
      color: "white",
      backgroundColor: "rgba(32, 48, 102, 0.95)",
      fontSize: isMobile ? theme.spacing(18) : theme.spacing(25),
      fontWeight: 700,
      borderRadius: theme.spacing(7),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: theme.spacing(-8),
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: theme.spacing(7),
        backgroundColor: "rgba(32, 48, 102, 0.45)",
        transform: "rotate(15deg)",
        zIndex: -1,
      },

      "&::after": {
        content: '""',
        position: "absolute",
        width: "3px",
        height: theme.spacing(18),
        backgroundColor: "rgba(32, 48, 102, 0.8)",
        bottom: theme.spacing(-18),
        left: "50%",
        transform: "translateX(-50%)",
      },
    },

    ".image": {
      width: isMobile ? "100%" : 260,
      marginTop: theme.spacing(isMobile ? 45 : 55),
      height: theme.spacing(90),
      objectFit: "contain",
    },

    ".stepTitle": {
      marginTop: theme.spacing(10),
      fontWeight: 700,
      textAlign: "center",
      color: theme.text.primary,
      ...(isMobile && {
        fontSize: `${theme.spacing(9)} !important`,
      }),
    },

    ".stepDescription": {
      marginTop: theme.spacing(4),
      textAlign: "center",
      color: theme.text.darkGrey,
      lineHeight: 1.7,
      maxWidth: theme.spacing(90),
      ...(isMobile && {
        fontSize: `${theme.spacing(6)} !important`,
      }),
    },
  },
}));
function HomePage() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [isPopularCategoriesModalOpen, setIsPopularCategoriesModalOpen] =
    useState(false);
  const navigate = useNavigate();
  const { useGetAllWorkerList } = hooks.useMisc();
  const limit = isPopularCategoriesModalOpen ? 100 : isMobile ? 15 : 13;

  const { data: WorkersListData, isLoading: isWorkersListDataLoading } =
    useGetAllWorkerList(limit);

  const handleClosePopularCategoriesModal = () => {
    setIsPopularCategoriesModalOpen(false);
  };
  const handleOpenPopularCategoriesModal = () => {
    setIsPopularCategoriesModalOpen(true);
  };
  return (
    <>
      <HomeStyle isMobile={isMobile}>
        {!isMobile && (
          <Box className="main">
            <Box className="leftSide">
              <Typography className="heading" variant="h1">
                Find Skilled Workers Near You
              </Typography>
              <Typography className="subHeading" variant="body1">
                Finding skilled workers near you has never been this
                easier.{" "}
              </Typography>
              {/* <Button size="medium" className="findBtn" variant="contained">
                Find Worker
              </Button> */}
            </Box>
            <img loading="lazy"  className="image" src={homePage} />
          </Box>
        )}
        {/* {isMobile && (
          <Box className="serviceBox">
          <Typography  variant="h1">
            Service Categories
          </Typography> 
          <Button className="viewBtn" variant="outlined">View all Categories</Button>
          </Box>
        )} */}

        <Box className="imageContainer">
          {isWorkersListDataLoading
            ? Array.from({ length: limit }).map((_, index) => (
                <ServiceCategoryCardSkeleton key={index} />
              ))
            : WorkersListData?.map((val: serviceCategoryI) => {
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
          <Box
            className="popularCategories"
            onClick={handleOpenPopularCategoriesModal}
          >
            <Box className="imageBox">
              <img loading="lazy"  src={bar} className="image" />
            </Box>
            <Typography
              className="service-name"
              variant={isMobile ? "body1" : "h6"}
            >
              Popular Categories
            </Typography>
          </Box>
        </Box>

        <Box className="howItWork">
          <Typography className="heading" variant="h1">
            How It Works?
          </Typography>

          <Box className="stepBox">
            <Box className="stepCard">
              <Box className="step">01</Box>

              <img loading="lazy"   className="image" src={chooseService} alt="Choose Service" />

              <Typography className="stepTitle" variant="h4">
                Choose a Service
              </Typography>

              <Typography className="stepDescription" variant="body1">
                Select the type of worker you need.
              </Typography>
            </Box>

            <Box className="stepCard">
              <Box className="step" left={"54% !important"}>
                02
              </Box>

              <img loading="lazy"  className="image" src={callDirectly} alt="Contact Worker" />

              <Typography className="stepTitle" variant="h4">
                Contact Worker
              </Typography>

              <Typography className="stepDescription" variant="body1">
                Call directly with nearby workers.
              </Typography>
            </Box>
          </Box>
        </Box>
      </HomeStyle>
      <Suspense fallback={"Loading"}>
        {isPopularCategoriesModalOpen && (
          <PopularCategoriesModal
            open={isPopularCategoriesModalOpen}
            handleClose={handleClosePopularCategoriesModal}
            categories={WorkersListData}
            isLoading={isWorkersListDataLoading}
          />
        )}
      </Suspense>{" "}
    </>
  );
}

export default HomePage;
