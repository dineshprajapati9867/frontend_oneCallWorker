import React, { useEffect, useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Loader } from "@Primitives";
import NoInternetImg from "../../@Assets/images/noInternet.png";

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  ".no-internet-img": {
    width: theme.spacing(70.4),
    height: theme.spacing(70.4),
    marginBottom: theme.spacing(11.1),
    img: {
      width: "100%",
      height: "100%",
    },
  },
  ".page-title": {
    color: theme.text.grayLightColor,
    marginBottom: theme.spacing(4.5),
  },
  ".page-subtitle": {
    opacity: 0.7,
    color: theme.text.grayLightColor,
    marginBottom: theme.spacing(12.5),
    width: theme.spacing(114.5),
    textAlign: "center",
  },
}));

function NoInternetPage() {
  const navigate = useNavigate();
  const [isDisconnected, setIsDisconnected] = useState(!navigator.onLine);
  const [isRetry, setIsRetry] = useState(false);

  const handleOffline = () => {
    setIsDisconnected(true);
  };

  const handleOnline = () => {
    setTimeout(() => navigate(-1), 500);
  };

  /**
   * Run on page load to retry if internet is available.
   */
  useEffect(() => {
    if (navigator.onLine) {
      navigate(-1);
    }

    const intervalId = setInterval(() => {
      if (navigator.onLine) {
        navigate(-1);
      }
    }, 3000);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate]);

  /**
   * Handles Retry Button Click.
   */
  const handleRetry = () => {
    setIsRetry(true);
    setTimeout(() => {
      if (navigator.onLine) {
        navigate(-1);
      } else {
        setIsRetry(false);
        setIsDisconnected(true);
      }
    }, 1500);
  };

  return (
    <BoxContainer>
      <Box className="no-internet-img">
        <img src={NoInternetImg} alt="NoInternetImage" />
      </Box>
      <Typography className="page-title" variant="h6">
        No Internet
      </Typography>
      <Typography className="page-subtitle" variant="body1">
        Please check your internet connection and try again
      </Typography>
      <Button
        size="small"
        variant="contained"
        onClick={handleRetry}
        disabled={isRetry && !isDisconnected}
      >
        {isRetry ? (
          <Loader type="button" color="secondary" size={24} />
        ) : (
          "Retry"
        )}
      </Button>
    </BoxContainer>
  );
}

export default NoInternetPage;
