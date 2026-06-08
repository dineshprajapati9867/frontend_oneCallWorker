import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Controller, useWatch } from "react-hook-form";
import {
  CloseEyeBlackIcon,
  EditBlueIcon,
  OpenEyeBlackIcon,
} from "@Icons/index";
import OTPInput from "react-otp-input";
import { pattern } from "@Utils/pattern";
import { TextInput } from "@Primitives/index";
interface PropsI {
  control: any;
  onBack: () => void;
  trigger: any;
  isLoading: boolean;
  handleSendOtp: () => void;
  getValues: any;
}
const OtpVerificationStyled = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(7.5),
    ".headerText": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(10),

      ...(isMobile && {
        gap: "0px",
        alignItems: "start",

        flexDirection: "column",
      }),
    },
    ".mainOtp": {
      div: {
        justifyContent: "space-evenly",
      },
    },
    ".otpBox": {
      width: `${theme.spacing(isMobile ? 20 : 22.5)} !important`,
      height: theme.spacing(isMobile ? 25 : 28),
      textAlign: "center",
      border: `1px solid ${theme.text.darkGrey}`,
      borderRadius: theme.spacing(4),
      fontSize: theme.spacing(9),
      fontWeight: 600,
      marginRight: theme.spacing(5),
      "&:focus": {
        border: `2px solid ${theme.palette.primary.main}`,
        outline: "none",
      },
    },

    ".bottomText": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
    ".updateBtn": {
      borderRadius: theme.spacing(3.5),
      maxHeight: theme.spacing(20),
      marginTop: theme.spacing(5),
    },
    ".editBox": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
  }),
);
export const OtpVerification = ({
  control,
  onBack,
  trigger,
  isLoading,
  handleSendOtp,
  getValues,
}: PropsI) => {
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const [countdown, setCountdown] = useState(30);
  const password = useWatch({
    control,
    name: "new_password",
  });
  const confirmPassword = useWatch({
    control,
    name: "confirm_password",
  });

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);
  useEffect(() => {
    if (confirmPassword) {
      trigger("confirm_password");
    }
  }, [password, confirmPassword, trigger]);
  const email = getValues("email");

  const handleResendOtp = () => {
    handleSendOtp();
    setCountdown(30);
  };

  const togglePassword = (field: "newPassword" | "confirmPassword") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const renderPasswordIcon = (field: "newPassword" | "confirmPassword") => (
    <IconButton size="small" onClick={() => togglePassword(field)}>
      {showPassword[field] ? <OpenEyeBlackIcon /> : <CloseEyeBlackIcon />}
    </IconButton>
  );
  return (
    <OtpVerificationStyled isMobile={isMobile}>
      <Box className="headerText">
        <Typography variant="body1">Enter the 6-digit code sent to</Typography>
        <Box className="editBox">
          <Typography variant="body1">dineshprajapati9867@gmail.com</Typography>
          <IconButton disabled={isLoading} onClick={onBack}>
            <EditBlueIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className="mainOtp">
        <Controller
          name={`otp`}
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <OTPInput
              inputType="number"
              value={value}
              onChange={onChange}
              numInputs={6}
              renderInput={(props, i) => (
                <input
                  type="number"
                  autoFocus={i === 0}
                  {...props}
                  className="otpBox"
                />
              )}
            />
          )}
        />
      </Box>
      <Box className="bottomText">
        <Typography className="receiveOtp">Didn’t Receive the OTP?</Typography>
        <Button
          onClick={handleResendOtp}
          disabled={isLoading || countdown > 0}
          className="resendBtn"
          variant="text"
        >
          {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
        </Button>
      </Box>

      <Controller
        name="new_password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: pattern.noSpace,
            message: "Space not allowed",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            type={showPassword.newPassword ? "text" : "password"}
            placeholder="Enter new password"
            label="New Password*"
            error={!!error}
            helperText={error ? error.message : null}
            postContent={renderPasswordIcon("newPassword")}
            postContentSx={{
              mr: 5,
            }}
          />
        )}
      />
      <Controller
        name="confirm_password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: pattern.noSpace,
            message: "Space not allowed",
          },
          validate: (val: string) => {
            if (val !== password) {
              return "Password do not match";
            }
            return undefined;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            type={showPassword.confirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
            label="Confirm Password*"
            error={!!error}
            helperText={error ? error.message : null}
            postContent={renderPasswordIcon("confirmPassword")}
            postContentSx={{
              mr: 5,
            }}
          />
        )}
      />

      <Button
        disabled={isLoading}
        type="submit"
        className="updateBtn"
        fullWidth
        variant="contained"
      >
        Update Password
      </Button>
    </OtpVerificationStyled>
  );
};
