import React, { useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageTranslate from "@Components/LanguageTranslate";
import { languages } from "@Constants/Home";
import LogIn from "@Components/LogIn/LogIn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useNavigate } from "react-router-dom";
import SearchWithLocation from "@Components/SearchWithLocation";
import SearchWithMic from "@Components/SearchWithMic";
import ocw_logo from "@Assets/Images/ocw_logo.png";
const NavbarStyle = styled(Box)(({ theme }) => ({
  height: theme.spacing(40),
  borderBottom: `1px solid ${theme.misc.borderColor}`,
  width: "100%",
  padding: theme.spacing(0, 10),
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".leftSide": {
    display: "flex",
    alignItems: "center",
  },
  ".logoImage": {
    width: theme.spacing(50),
  },
  ".rightSide": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
  },
  ".languages": {
    display: "flex",
    alignItem: "center",
    gap: theme.spacing(2.5),
  },
  ".btn": {
    fontSize: theme.spacing(7),
    padding: theme.spacing(1, 5),
  },
  ".freeListing": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexDirection: "column",

    ".workerText": {
      backgroundColor: theme.misc.deleteRed,
      color: theme.graph.contrastText,
      padding: theme.spacing(0.5, 2.5),
      fontWeight: 600,
      fontSize: theme.spacing(5.5),
      marginLeft: theme.spacing(5),
      position: "absolute",
      top: theme.spacing(4),
    },

    ".listingText": {
      fontWeight: 500,
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(0.5),
      "&:hover": {
        backgroundColor: theme.misc.gray,
      },
    },
  },
}));

export default function Navbar() {
  const { t, i18n } = useTranslation("navbar");
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  // Current language display
  const handleGetCurrentLanguage = () => {
    const current = languages.find((lang) => lang.code === i18n.language);
    return current.code.toLocaleUpperCase();
  };

  return (
    <>
      <NavbarStyle>
        <Box className="leftSide">
          <img className="logoImage" src={ocw_logo} alt="logo" />
          {/* <SearchWithLocation /> */}
          <SearchWithMic />
        </Box>
        <Box className="rightSide">
          <LanguageTranslate
            i18n={i18n}
            handleGetCurrentLanguage={handleGetCurrentLanguage}
          />
          <Box className="freeListing">
            <Typography className="workerText">WORKER</Typography>

            <Button
              onClick={() => navigate("free-listing")}
              variant="text"
              className="listingText"
            >
              <TrendingUpIcon fontSize="small" />
              <Typography variant="body1" className="text">
                Free Listing
              </Typography>
            </Button>
          </Box>
          {/* <IconButton>
            <Badge badgeContent={1} color="error">
              <NotificationIcon />
            </Badge>
          </IconButton> */}
          <Button
            className="btn"
            onClick={() => {
              setOpenLogin(true);
            }}
            variant="contained"
          >
            {t("loginSignUp")}
          </Button>
        </Box>
      </NavbarStyle>

      {openLogin && (
        <LogIn open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </>
  );
}
