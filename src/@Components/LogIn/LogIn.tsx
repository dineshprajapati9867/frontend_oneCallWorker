import {
  CrossBigIcon,
  EditBlueIcon,
  ErrorIcon,
  GoogleIcon,
} from "@Icons/index";
import {
  Box,
  Dialog,
  styled,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  Button,
  Divider,
  IconButton,
  Slide,
  Drawer,
} from "@mui/material";
import { hooks, validationPatterns } from "@Utils/index";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ocw_logo from "@Assets/Images/ocw_logo.png";
import axios from "axios";
import { OTPInput } from "input-otp";

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
    ".mobileInput": {
      marginTop: theme.spacing(10),
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: `1.2pt solid ${theme.palette.secondary.dark}`,
        },
      },
      ".MuiOutlinedInput-root": {
        // border: `1.2pt solid ${theme.palette.secondary.dark}`,
        maxHeight: theme.spacing(26),
        borderRadius: theme.spacing(3.5),
      },
      ".MuiInputBase-input": {
        fontSize: theme.spacing(9),
        fontWeight: 500,
      },
    },
    ".inputStart": {
      ".MuiTypography-body1": {
        fontSize: theme.spacing(9),
        fontWeight: 500,
      },
    },
    ".tnc": {
      display: "flex",
      flexDirection: "column",
      ".checkbox": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".privacy": {
        textAlign: "center",
      },
    },
    ".loginBtn": {
      fontWeight: 600,
      border: "none",
      borderRadius: theme.spacing(3.5),
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
  })
);

const LoginOtp = styled(Box)<{ isMobile }>(({ theme, isMobile }) => ({
  ".headerText": {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 5, 0, 2),
    justifyContent: "space-between",
    gap: theme.spacing(10),

    ".enterText": {
      fontSize: theme.spacing(9),
      fontWeight: 400,
    },
    ".number": {
      fontSize: theme.spacing(9),
      fontWeight: 600,
    },
  },
  ".otp": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    marginTop: theme.spacing(7.5),
  },
  ".otpBox": {
    width: `${theme.spacing(isMobile ? 20 : 28)} !important`,
    height: theme.spacing(isMobile ? 25 : 34.5),
    textAlign: "center",
    border: `1px solid ${theme.text.darkGrey}`,
    borderRadius: theme.spacing(4),
    fontSize: theme.spacing(9),
    fontWeight: 600,

    "&:focus": {
      border: `2px solid ${theme.palette.primary.main}`,
      outline: "none",
    },
  },
  ".bottomText": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(15, 0),
    ".receiveOtp": {
      fontSize: theme.spacing(6),
      fontWeight: 500,
      color: theme.text.darkGrey,
    },

    ".resendBtn": {
      fontSize: theme.spacing(6),
      fontWeight: 500,
      color: theme.text.lightBlue,
    },
  },
  ".continueBtn": {
    borderRadius: theme.spacing(3.5),
    maxHeight: theme.spacing(20),
  },
  '.editBox': {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  }
}));

function LogIn({ open, onClose }: PropsI) {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const { control, setValue, handleSubmit } = useForm({
    mode: "onChange",
  });
  const { isMobile } = hooks.useResponsive();
  const { handleLoginWithGoogle } = hooks.useAuth();
  const onSubmit = (data) => {
    setIsOtpSend(true);
  };

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
        {!isOtpSend && (
          <Box className="main">
            <Controller
              name="mobile_otp"
              control={control}
              rules={{
                validate: (val) => {
                  if (!validationPatterns.pattern.mobile.test(val) && val.length === 10) {
                    return "Please enter valid mobile number";
                  }
                  return undefined;
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  value={value}
                  placeholder="Enter Mobile Number*"
                  className="mobileInput"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="inputStart" position="start">
                        +91
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length <= 10) {
                      onChange(e);
                    }
                  }}
                  error={!!error}
                  helperText={
                    error ? (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <ErrorIcon />
                        {error.message}
                      </span>
                    ) : null
                  }
                />
              )}
            />

            {/* Terms & Conditions */}
            <Box className="tnc">
              <Box className="checkbox">
                <Checkbox size="small" defaultChecked />
                <Typography variant="body2">
                  I Agree to Terms and Conditions{" "}
                </Typography>
              </Box>
              <Typography className="privacy">
                T&amp;C's Privacy Policy
              </Typography>
            </Box>

            {/* Login Button */}
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              fullWidth
              className="loginBtn"
            >
              Login with OTP
            </Button>

            <Divider className="orLogin">Or Login Using</Divider>

            {/* Google Button */}
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              className="googleBtn"
              onClick={handleLoginWithGoogle}
            >
              Google
            </Button>
          </Box>
        )}
        {/* after otp  */}
        {isOtpSend && (
          <LoginOtp isMobile={isMobile}>
            <Box className="headerText">
              <Typography className="enterText">
                Enter the code sent to{" "}
              </Typography>
              <Box className="editBox">
                <Typography className="number">+ 91 - 7949747494</Typography>
                <IconButton onClick={() => setIsOtpSend(false)}>
                  <EditBlueIcon />
                </IconButton>
              </Box>
            </Box>
            <Box className="otp">
              <Controller
                name={`otp`}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({
                  field: { onChange, value, ref, ...rest },
                  fieldState: { error },
                }) => (
                  <OTPInput
                    onChange={onChange}
                    value={value}
                    maxLength={6}
                    // renderInput={(props) => <input {...props} />}
                    render={({ slots }) => (
                      <Box className="otp">
                        {slots.map((slot, i) => (
                          <input className="otpBox" key={i} {...slot} />
                        ))}
                      </Box>
                    )}
                  // containerStyle="otp"
                  //inputStyle="otpBox"
                  />
                )}
              />
            </Box>
            <Box className="bottomText">
              <Typography className="receiveOtp">
                Didn’t Receive the OTP?
              </Typography>
              <Button className="resendBtn" variant="text">
                Resend OTP
              </Button>
            </Box>
            <Button className="continueBtn" fullWidth variant="contained">
              Continue
            </Button>
          </LoginOtp>
        )}
      </LoginStyle>
    );
  };
  return (
    <>
      {isMobile ? (
        <Drawer open={open} onClose={onClose} anchor="bottom" sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "15px 15px 0 0"
          },
        }} >
          <ContentData />
        </Drawer>
      ) : (
        <Dialog
          open={open}
          sx={(theme) => ({
            ".MuiPaper-root": {
              maxWidth: theme.spacing(240),
              width: "100%",
              borderRadius: theme.spacing(7.5),
              margin: "0",
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
