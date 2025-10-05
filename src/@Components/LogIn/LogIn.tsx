import { CrossBigIcon, EditBlueIcon, GoogleIcon } from "@Icons/index";
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
} from "@mui/material";
//import { useGoogleLogin } from "@react-oauth/google";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface PropsI {
  open: boolean;
  onClose: () => void;
}

const LoginStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  ".header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ".welcome": {
      fontSize: theme.spacing(9),
      fontWeight: 600,
    },
    ".desc": {
      fontSize: theme.spacing(8.5),
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
    ".MuiOutlinedInput-root": {
      border: `1.2pt solid ${theme.palette.secondary.dark}`,
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
}));

const LoginOtp = styled(Box)(({ theme }) => ({
  ".headerText": {
    display: "flex",
    alignItems: "center",
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
    marginTop: theme.spacing(12.5),
  },
  ".otpBox": {
    width: theme.spacing(28),
    height: theme.spacing(34.5),
    textAlign: "center",
    border: `1px solid ${theme.text.darkGrey}`,
    borderRadius: theme.spacing(4),
    fontSize: theme.spacing(9),
    fontWeight: 600,
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
}));
function LogIn({ open, onClose }: PropsI) {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const { control, setValue, handleSubmit } = useForm();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // const handleLogin = useGoogleLogin({
  //   onSuccess: (data) => {
  //     console.log("data", data);
  //   },
  //   onError: (err) => {
  //     console.log("err", err);
  //   },
  // });
  const onSubmit = (data) => {  
setIsOtpSend(true)
    console.log("data", data);
  };

  /**
   * Key board actions
   */
const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number,
  onChange: (value: string) => void
) => {
  if (e.key === "Backspace") {
    if (e.currentTarget.value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setValue(`otp${index - 1}`, "");      
    } else {
      onChange(""); 
    }
  } else if (e.key === "ArrowLeft" && index > 0) {
    // e.preventDefault();
    inputRefs.current[index - 1]?.focus();
  } else if (e.key === "ArrowRight" && index < 5) {
    // e.preventDefault();
    inputRefs.current[index + 1]?.focus();
  }
};


  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    onChange: (value: string) => void
  ) => {
    const { value } = e.target;
    if (value.length > 1) {
      const values = value.split("");
      values.forEach((val, i) => {
        if (index + i < 6) {
          const ref = inputRefs.current[index + i];
          if (ref) ref.value = val;
        }
      });
    } else {
      onChange(value);
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  return (
    <Dialog
      open={open}
      sx={(theme) => ({
        ".MuiPaper-root": {
          minWidth: theme.spacing(240),
          borderRadius: theme.spacing(7.5),
        },
      })}
    >
      <LoginStyle>
        {/* Header */}
        <Box className="header">
          <Typography variant="h5">oneCallWorker</Typography>
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
              render={({ field: { onChange, value } }) => (
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
                  onWheel={(e) => {
                    (e.target as HTMLInputElement).blur();
                  }}
                  type="number"
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
              // onClick={() => handleLogin()}
            >
              Google
            </Button>
          </Box>
        )}
        {/* after otp  */}
        {isOtpSend && (
          <LoginOtp>
            <Box className="headerText">
              <Typography className="enterText">
                Enter the code sent to{" "}
              </Typography>
              <Typography className="number">+ 91 - 7949747494</Typography>
              <IconButton onClick={()=>setIsOtpSend(false)}>
                <EditBlueIcon />
              </IconButton>
            </Box>
            <Box className="otp">
              {[0,1,2,3,4,5].map((index) => (
                <>
                  {/* <input  key={index}  className="otpBox" placeholder="-" /> */}
                  <Controller
                    key={index}
                    name={`otp${index}`}
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                    }}
                    render={({
                      field: { onChange, value, ref, ...rest },
                      fieldState: { error },
                    }) => (
                      <TextField
                        // type='number'
                        {...rest}
                        inputRef={(el) => {
                          inputRefs.current[index] = el;
                          ref(el);
                        }}
                        error={!!error}
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleOtpChange(e, index, onChange)
                        }
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                          handleKeyDown(e, index, onChange)
                        }
                        className="otpBox"
                        placeholder="-"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            height: "100%",
                            width: "100%",
                          },
                        }}
                        inputProps={{
                          maxLength: 1,
                          style: {
                            textAlign: "center",
                            fontSize: "24px",
                            paddingLeft: "15px",
                          },
                        }}
                      />
                    )}
                  />
                </>
              ))}
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
    </Dialog>
  );
}

export default LogIn;
