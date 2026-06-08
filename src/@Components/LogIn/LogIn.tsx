import { CrossBigIcon, GoogleIcon } from "@Icons/index";
import {
  Box,
  Dialog,
  styled,
  Typography,
  Button,
  Divider,
  IconButton,
  Slide,
  Drawer,
} from "@mui/material";
import { hooks } from "@Utils/index";
import React, { useState, Activity } from "react";
import { useForm } from "react-hook-form";
import ocw_logo from "@Assets/Images/ocw_logo.png";
import { SignUp } from "./Components/SignUp";
import { SignIn } from "./Components/SignIn";
import { ForgotPassword } from "./Components/ForgotPassword";
import { OtpVerification } from "./Components/OtpVerification";

interface PropsI {
  open: boolean;
  onClose: () => void;
}

const LoginStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    padding: theme.spacing(isMobile ? 10 : 15),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),

    ".logoImage": {
      width: theme.spacing(50),
    },
    ".header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ".welcome": {
        fontSize: theme.spacing(9),
        fontWeight: 600,
      },
      ".desc": {
        fontSize: isMobile ? theme.spacing(7.5) : theme.spacing(8.5),
      },
    },
    ".crossIcon": {
      fontSize: theme.spacing(6),
      color: theme.text.darkGrey,
      cursor: "pointer",
      position: "absolute",
      top: theme.spacing(2.5),
      right: theme.spacing(9),
    },
    ".main": {
      display: "flex",
      gap: theme.spacing(10),
      flexDirection: "column",
    },

    ".orLogin": {
      ".MuiDivider-wrapper": {
        fontSize: theme.spacing(6),
        padding: theme.spacing(2, 6),
        borderRadius: theme.spacing(6),
        color: theme.text.darkGrey,
        backgroundColor: "#f4f4f4",
      },
    },
    ".googleBtn": {
      borderRadius: theme.spacing(3.5),
    },
  }),
);

function LogIn({ open, onClose }: PropsI) {
  const { control, handleSubmit, trigger, getValues } = useForm({
    mode: "onChange",
  });
  const { isMobile } = hooks.useResponsive();
  const {
    handleLoginWithGoogle,
    handleSignUp,
    handleSendOtp,
    handleSignIn,
    handleUpdatePassword,
    authScreen,
    setAuthScreen,
    isLogoutLoading,
    isSendOtpLoading,
    isSignInAuthLoading,
    isSignUpLoading,
    isUpdatePasswordLoading,
  } = hooks.useAuth();
  const onSubmit = (data) => {

    switch (authScreen) {
      case "signup":
        handleSignUp(data);
        break;

      case "signin":
        handleSignIn(data);
        break;

      case "sendOtp":
        handleSendOtp(data);

        break;

      case "updatePassword":
        handleUpdatePassword(data);
        break;

      default:
        break;
    }
  };

  const isLoading =
    isLogoutLoading ||
    isSendOtpLoading ||
    isSignInAuthLoading ||
    isSignUpLoading ||
    isUpdatePasswordLoading;
  const ContentData = () => {
    return (
      <LoginStyle isMobile={isMobile}>
        {/* Header */}
        <Box className="header">
          <img className="logoImage" src={ocw_logo} alt="logo" />
          <Box>
            <Box>
              <Typography className="welcome" variant="h6">
                Welcome
              </Typography>
              <IconButton onClick={onClose} className="crossIcon">
                <CrossBigIcon />
              </IconButton>
            </Box>
            <Typography className="desc" variant="body2">
              Login for a seamless experience
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} className="main">
          {authScreen === "signin" && (
            <SignIn
              control={control}
              onSignup={() => setAuthScreen("signup")}
              onForgotPassword={() => setAuthScreen("sendOtp")}
              isLoading={isLoading}
            />
          )}

          {authScreen === "signup" && (
            <SignUp
              onSignin={() => setAuthScreen("signin")}
              control={control}
              isLoading={isLoading}
            />
          )}

          {authScreen === "sendOtp" && (
            <ForgotPassword
              control={control}
              onSignIn={() => setAuthScreen("signin")}
              onSignUp={() => setAuthScreen("signup")}
              onOtpSent={() => setAuthScreen("sendOtp")}
              isLoading={isLoading}
            />
          )}

          {authScreen === "updatePassword" && (
            <OtpVerification
              control={control}
              onBack={() => setAuthScreen("signin")}
              trigger={trigger}
              isLoading={isLoading}
              handleSendOtp={() => {
                const email = getValues("email");
                handleSendOtp({ email });
              }}
              getValues={getValues}
            />
          )}

          {(authScreen === "signin" || authScreen === "signup") && (
            <>
              <Divider className="orLogin">Or Login Using</Divider>

              <Button
                disabled={isLoading}
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
                className="googleBtn"
                onClick={handleLoginWithGoogle}
              >
                Google
              </Button>
            </>
          )}
        </form>
      </LoginStyle>
    );
  };
  return (
    <>
      {isMobile ? (
        <Drawer
          open={open}
          onClose={onClose}
          anchor="bottom"
          sx={{
            "& .MuiDrawer-paper": {
              borderRadius: "15px 15px 0 0",
            },
          }}
        >
          <ContentData />
        </Drawer>
      ) : (
        <Dialog
          open={open}
          sx={(theme) => ({
            ".MuiPaper-root": {
              minWidth: theme.spacing(240),
              //width: "100%",
              borderRadius: theme.spacing(7.5),
              margin: "0",
              overflow: "hidden",
            },
            "& .MuiDialog-container": {
              background: " rgba(0, 0, 0, 0.06)",
              backdropFilter: "blur(10px)",
            },
          })}
          slots={{ transition: Slide }}
          slotProps={{ transition: { direction: "up" } }}
          onClose={onClose}
        >
          <ContentData />
        </Dialog>
      )}
    </>
  );
}

export default LogIn;
