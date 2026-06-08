import React, { useState } from "react";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "@Primitives/index";
import { CloseEyeBlackIcon, OpenEyeBlackIcon } from "@Icons/index";
import { pattern } from "@Utils/pattern";
interface PropsI {
  onSignup: () => void;
  onForgotPassword: () => void;
  control: any;
  isLoading: boolean;
}
const SignInStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  flexDirection: "column",

  ".btn": {
    fontWeight: 600,
    border: "none",
    borderRadius: theme.spacing(3.5),
  },
  ".alreadyBox": {
    display: "flex",
    alignItems: "center",
    ".already": {
      color: theme.text.darkGrey,
    },
    ".signInBtn": {
      color: theme.text.lightBlue,
      fontSize: `${theme.spacing(7)} !important`,
    },
  },
}));
export const SignIn = ({
  onForgotPassword,
  onSignup,
  control,
  isLoading,
}: PropsI) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SignInStyled>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          validate: (val: string) => {
            if (!pattern.noSpace.test(val)) return "Space not allowed";
            if (!pattern.email.test(val)) return "Enter valid email";

            return undefined;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            placeholder="your@email.com"
            label="Email*"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: pattern.noSpace,
            message: "Space not allowed",
          },
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 20,
            message: "Password cannot exceed 20 characters",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            placeholder="Enter your password"
            label="Password*"
            error={!!error}
            type={`${showPassword?"text":"password"}`}
            helperText={error ? error.message : null}
            postContent={
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ?  <OpenEyeBlackIcon />:<CloseEyeBlackIcon /> }
              </IconButton>
            }
            postContentSx={{
              mr: 5,
            }}
          />
        )}
      />
      <Button
        disabled={isLoading}
        type="submit"
        className="btn"
        variant="contained"
      >
        Sign In
      </Button>

      <Box>
        <Box className="alreadyBox">
          <Typography className="already" variant="body1">
            Need an account?
          </Typography>
          <Button disabled={isLoading} onClick={onSignup} className="signInBtn">
            Sign up
          </Button>
        </Box>

        <Box className="alreadyBox" mt={3}>
          <Typography className="already" variant="body1">
            Forgot your password?
          </Typography>
          <Button
            disabled={isLoading}
            onClick={onForgotPassword}
            className="signInBtn"
          >
            Reset it
          </Button>
        </Box>
      </Box>
    </SignInStyled>
  );
};
