import {
  styled,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import React, { Suspense } from "react";

import { ChevronArrowDown } from "@Icons/ArrowDown";
import { FAQs } from "@Constants/Home";
import { useNavigate } from "react-router-dom";
import {
  GreenTickIcon,
  RightArrowMui,
  RightArrowStraightWhite,
} from "@Icons/index";
import ocw_logo from "@Assets/Images/ocw_logo.png";
// import CreateProfileModal from "@Views/CreateProfileModal";
import { hooks } from "@Utils/index";
import create_step_2 from "@Assets/Images/create_step_2.png";
import create_step_1 from "@Assets/Images/create_step_1.png";
import arrow from "@Assets/Images/arrow.png";
import { Loader, TextInput } from "@Primitives/index";
  const CreateProfileModal = React.lazy(() => import("@Views/CreateProfileModal"));

const FreeListingStyled = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    // width: "100%",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
      width: "85%",
      margin: "auto",
      backgroundColor: theme.palette.primary.contrastText,
    },
    ".navbar": {
      height: theme.spacing(40),
      borderBottom: `1px solid ${theme.misc.borderColor}`,
      width: "100%",
      padding: theme.spacing(0, 10),
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      position: "sticky",
      top: "0px",
      backgroundColor: theme.palette.primary.contrastText,
      zIndex: 1,
      justifyContent: "space-between",
      ".leftSide": {
        display: "flex",
        alignItems: "center",
      },
    },
    ".logoImage": {
      width: theme.spacing(50),
      cursor: "pointer",
    },
    ".createBtn": {
      padding: theme.spacing(2, 8),
    },
    ".logo": {
      margin: theme.spacing(0, 15),
    },
    ".backHomeBox": {
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing(10),

      ".homeBtn": {
        fontSize: theme.spacing(5.5),
        minWidth: "0px",
      },
      ".freeListing": {
        color: theme.palette.secondary.dark,
        fontSize: theme.spacing(5.5),
      },
    },
    ".accordion": {
      border: `1px solid ${theme.misc.selectedBlue}`,
      borderRadius: `${theme.spacing(8)} !important`,
      padding: theme.spacing(10, 7.5, 10, 0),
      margin: theme.spacing(12.5, 0),
    },
    ".main": {
      padding: theme.spacing(0, 10, 10, 10),
      ".gotQustion": {
        margin: theme.spacing(15, 0),
        fontSize: theme.spacing(15),
      },
      ".MuiAccordionSummary-expandIconWrapper": {
        backgroundColor: theme.misc.veryPaleBlue,
        padding: theme.spacing(5),
        borderRadius: "100%",
      },
      ".MuiAccordionSummary-root": {
        minHeight: "0px",
        maxHeight: "0px",
        padding: theme.spacing(7.5, 0, 7.5, 11),
      },
    },
    ".headerTexts": {
      fontSize: theme.spacing(10),
      fontWeight: 600,
    },
    ".ul": {
      li: {
        fontSize: theme.spacing(isMobile ? 8 : 10),
        margin: theme.spacing(2.5, 0),
      },
    },
    ".heroWrapper": {
      marginTop: theme.spacing(15),
      ".leftContent": {
        maxWidth: 520,
      },

      ".title": {
        fontSize: theme.spacing(20),
        fontWeight: 600,
      },

      ".subtitle": {
        fontSize: theme.spacing(10),
        color: theme.palette.text.secondary,
      },

      ".inputBox": {
        margin: theme.spacing(15, 0),
        display: "flex",
        alignItems: "center",
        border: `2px solid ${theme.palette.secondary.dark}`,
        borderRadius: theme.spacing(5),
        overflow: "hidden",
        boxSizing: "border-box",
        height: theme.spacing(isMobile ? 25 : 35),
      },

      ".countryCode": {
        paddingLeft: theme.spacing(5),
      },

      ".inputBox input": {
        flex: 1,
        border: "none",
        outline: "none",
        padding: theme.spacing(2),
        fontSize: theme.spacing(isMobile ? 10 : 8),
        width:isMobile?"80%":"100%"
      },

      ".startBtn": {
        borderRadius: theme.spacing(3.5),
        fontWeight: 500,
        fontSize: theme.spacing(10),
        height: "90%",
        marginRight: theme.spacing(2),
        padding: isMobile && theme.spacing(7),
        ".MuiButton-icon": {
          animation: "arrowMove 1s ease-in-out infinite",
        },
      },
      "@keyframes arrowMove": {
        "0%": {
          transform: "translateX(0)",
        },
        "50%": {
          transform: "translateX(6px)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },

      ".benefits": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(7.5),
        marginBottom: theme.spacing(10),
        ".boxFlex": {
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(3),
        },
      },
    },
    ".stepsWrapper": {
      ".title": {
        fontWeight: 700,
        margin: theme.spacing(15, 0),
        fontSize: theme.spacing(15),
      },

      ".steps": {
        display: "flex",
        alignItems: !isMobile && "center",
        justifyContent: "start",
        gap: theme.spacing(8),
        flexDirection: isMobile && "column",
      },

      ".step": {
        maxWidth: !isMobile && theme.spacing(130),
        display: isMobile && "flex",
        gap: isMobile && theme.spacing(15),
        alignItems: isMobile && "center",
        img: {
          width: "100%",
          maxWidth: theme.spacing(isMobile ? 55 : 110),
        },
      },

      ".stepTitle": {
        marginTop: !isMobile && theme.spacing(4),
        color: theme.palette.text.secondary,
        fontSize: theme.spacing(9),
      },

      ".stepText": {
        fontSize: theme.spacing(11),
        fontWeight: 500,
      },
      ".stepdesc": {
        fontSize: theme.spacing(10),
      },
      ".arrow": {
        width: 40,

        [theme.breakpoints.down("sm")]: {
          transform: "rotate(90deg)",
          width: 30,
        },
      },
    },
  })
);
function FreeListing() {
  const navigate = useNavigate();
  const {
    openCreateProfileModal,
    handleCloseCreateProfileModal,
    handleOpenCreateProfileModal,
  } = hooks.useUser();
  const { isMobile } = hooks.useResponsive();


  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("lg")]: {
          backgroundColor: theme.misc.bgGrey,
        },
      })}
    >
      <FreeListingStyled isMobile={isMobile}>
        <nav className="navbar">
          <Box className="leftSide">
            <img
              onClick={() => navigate("/")}
              className="logoImage"
              src={ocw_logo}
              alt="logo"
            />

            <Button variant="text">FAQs</Button>
          </Box>
          <Button
            onClick={handleOpenCreateProfileModal}
            className="createBtn"
            variant="contained"
            disabled={openCreateProfileModal}
          >
           {`Create Your Profile${openCreateProfileModal?"...":""}`} 
          </Button>
        </nav>
        {!isMobile && (
          <Box className="backHomeBox">
            <Button
              className="homeBtn"
              onClick={() => navigate(-1)}
              variant="text"
            >
              Home
            </Button>
            <RightArrowMui color="secondary" />
            <Typography className="freeListing">Free Listing</Typography>
          </Box>
        )}
        <Box className="main">
          <Box className="heroWrapper">
            <Box className="leftContent">
              <Typography variant="h2" className="title">
                List Your Profile for FREE
              </Typography>

              <Typography className="subtitle">
                Get discovered by customers near you
              </Typography>

              <Box className="inputBox">
                <Typography variant="h5" className="countryCode">
                  +91
                </Typography>
                <input maxLength={10} placeholder="Enter Mobile No." />
                <Button
                  endIcon={<RightArrowStraightWhite />}
                  variant="contained"
                  className="startBtn"
                >
                  Start Now
                </Button>
              </Box>

              <Box className="benefits">
                <Box className="boxFlex">
                  <GreenTickIcon type="small" />
                  <Typography variant="h6">Get nearby job requests</Typography>
                </Box>
                <Box className="boxFlex">
                  <GreenTickIcon type="small" />
                  <Typography variant="h6">
                    Build your worker profile
                  </Typography>
                </Box>
                <Box className="boxFlex">
                  <GreenTickIcon type="small" />
                  <Typography variant="h6">Grow your earnings</Typography>
                </Box>
              </Box>
            </Box>

            {/* Right side — future use */}
            {/* <Box className="rightPlaceholder" /> */}
          </Box>

          <Box className="createstep">
            <Box className="stepsWrapper">
              <Typography variant="h5" className="title">
                Get a FREE profile Listing in 2 Simple Steps
              </Typography>

              <Box className="steps">
                <Box className="step">
                  <img loading="lazy" src={create_step_1} alt="Step 1" />
                  <Box>
                    <Typography className="stepTitle">Step 1</Typography>
                    <Typography className="stepText">Create Account</Typography>
                    <Typography className="stepdesc">
                      Enter your mobile number to get started
                    </Typography>
                  </Box>
                </Box>

                {!isMobile && <img loading="lazy" className="arrow" src={arrow} alt="arrow" />}

                <Box className="step">
                  <img loading="lazy" src={create_step_2} alt="Step 2" />
                  <Box>
                    <Typography className="stepTitle">Step 2</Typography>
                    <Typography className="stepText">
                      Enter Your Details
                    </Typography>
                    <Typography className="stepdesc">
                      Add name, address, Skills Location
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="GotQuestion">
            <Typography className="gotQustion" variant="h5">
              Got a question?
            </Typography>
            {FAQs.map((val, i) => (
              <Accordion className="accordion" key={i}>
                <AccordionSummary
                  expandIcon={<ChevronArrowDown />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="headerTexts">
                    {val.question}
                  </Typography>
                </AccordionSummary>
                <ul className="ul">
                  {val.answers.map((ans, i) => (
                    <li key={i}>{ans}</li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </Box>
        </Box>
      </FreeListingStyled>
      {openCreateProfileModal && (
        <Suspense fallback={null}>
          <CreateProfileModal
            open={openCreateProfileModal}
            onClose={handleCloseCreateProfileModal}
          />
        </Suspense>
      )}
    </Box>
  );
}

export default FreeListing;
